#!/usr/bin/env python3
"""Record local commands and inspect exact-SHA CI. Never approves, merges or deploys."""
import argparse
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import shlex
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
REPOSITORY = "htang7415/Hao_Tang_Personal_website"
JOB = "Website verification"
REQUIRED_STEPS = ("Repository hygiene", "Workflow tests", "Secret scan", "TypeScript", "Application tests", "Build", "Build smoke check")


def git(*args):
    return subprocess.check_output(["git", "-C", str(ROOT), *args], text=True).strip()


def clean_sha():
    if git("status", "--porcelain", "--untracked-files=all"):
        raise ValueError("Commit changes and use a clean worktree before recording evidence")
    return git("rev-parse", "HEAD")


def now():
    return datetime.now(timezone.utc).isoformat()


def record(path, command):
    sha = clean_sha()
    path = path.resolve()
    if path == ROOT or ROOT in path.parents or not command:
        raise ValueError("Use an external evidence path and a command after --")
    log_path = path.with_suffix(path.suffix + ".log")
    # Exclusive creation preserves failed observations; never overwrite a receipt.
    with path.open("x") as receipt, log_path.open("x") as log:
        started = now()
        try:
            code = subprocess.run(command, cwd=ROOT, stdout=log, stderr=subprocess.STDOUT).returncode
        except OSError as exc:
            log.write(str(exc) + "\n")
            code = 127
        log.flush()
        try:
            unchanged = clean_sha() == sha
        except ValueError:
            unchanged = False
        data = dict(version=1, repository=REPOSITORY, sha=sha, command=command,
                    started=started, finished=now(), exit_code=code,
                    source_unchanged=unchanged, log=str(log_path),
                    log_sha256=hashlib.sha256(log_path.read_bytes()).hexdigest())
        receipt.write(json.dumps(data, indent=2) + "\n")
    print(json.dumps(data, indent=2))
    print(f"Inspect raw command output: {log_path}")
    return 0 if code == 0 and unchanged else 1


def api(endpoint, paginate=False):
    args = ["gh", "api", "--method", "GET", endpoint]
    if paginate:
        args += ["--paginate", "--slurp"]
    data = json.loads(subprocess.check_output(args, text=True))
    return data


def classify(run, jobs, sha, event):
    """Fail closed for missing, duplicate, stale, skipped and unexecuted jobs."""
    if not run:
        return "NEVER-EXECUTED: no matching CI run", False
    if run["head_sha"] != sha or run["event"] != event:
        return "WRONG-SHA/EVENT", False
    matching = [j for j in jobs if j["name"] == JOB]
    if len(matching) != 1:
        return "MISSING/DUPLICATE required job", False
    job = matching[0]
    if run["status"] != "completed" or job["status"] != "completed":
        return "PENDING", False
    result = job.get("conclusion")
    if result == "skipped":
        return "SKIPPED: no verification", False
    if not job.get("steps"):
        return "NEVER-EXECUTED: no job steps (check runner/billing annotations)", False
    steps = job["steps"]
    for name in REQUIRED_STEPS:
        matching_steps = [step for step in steps if step["name"] == name]
        if len(matching_steps) != 1 or matching_steps[0].get("conclusion") != "success":
            return f"FAILED/SKIPPED/MISSING required step: {name}", False
    if run.get("conclusion") == result == "success":
        return "SUCCESSFUL", True
    return f"FAILED/INCOMPLETE: run={run.get('conclusion')}, job={result}", False


def ci_snapshot(sha, event):
    pages = api(f"repos/{REPOSITORY}/actions/runs?head_sha={sha}&event={event}&per_page=100", True)
    runs = [r for p in pages for r in p["workflow_runs"]
            if r["path"] == ".github/workflows/ci.yml"
            and (event != "push" or r["head_branch"] == "main")]
    run = max(runs, key=lambda r: r["id"], default=None)
    jobs = [] if run is None else [j for p in api(
        f"repos/{REPOSITORY}/actions/runs/{run['id']}/jobs?filter=latest&per_page=100", True)
        for j in p["jobs"]]
    status, passed = classify(run, jobs, sha, event)
    print(f"GitHub CI: {status}")
    if run:
        print(f"Run: {run['html_url']} (attempt {run['run_attempt']}, SHA {run['head_sha']})")
    for job in jobs:
        print(f"  {job['name']}: {job['status']}/{job.get('conclusion')} {job['html_url']}")
        for step in job.get("steps", []):
            print(f"    {step['name']}: {step['status']}/{step.get('conclusion')}")
    return passed


def local_evidence(paths, sha):
    if not paths:
        print("Local checks: NEVER-EXECUTED/UNRECORDED (no receipts supplied)")
        return False
    passed = True
    for path in paths:
        data = json.loads(path.read_text())
        log = Path(data["log"])
        valid = (data.get("version") == 1 and data.get("repository") == REPOSITORY
                 and data.get("sha") == sha and data.get("source_unchanged") is True
                 and type(data.get("exit_code")) is int and data["exit_code"] == 0
                 and log.is_file()
                 and hashlib.sha256(log.read_bytes()).hexdigest() == data.get("log_sha256"))
        print(f"Local: {'SUCCESSFUL' if valid else 'FAILED/STALE/INCOMPLETE'} "
              f"{shlex.join(data['command'])}; receipt={path}; log={log}; "
              f"exit={data['exit_code']}; sha={data['sha']}")
        passed &= valid
    return passed


def open_threads(number):
    query = '''query($owner:String!,$name:String!,$number:Int!,$endCursor:String){
      repository(owner:$owner,name:$name){pullRequest(number:$number){
        reviewThreads(first:100,after:$endCursor){nodes{isResolved path line}
        pageInfo{hasNextPage endCursor}}}}}'''
    owner, name = REPOSITORY.split("/")
    pages = json.loads(subprocess.check_output([
        "gh", "api", "graphql", "--paginate", "--slurp", "-f", f"query={query}",
        "-f", f"owner={owner}", "-f", f"name={name}", "-F", f"number={number}",
    ], text=True))
    return [t for p in pages
            for t in p["data"]["repository"]["pullRequest"]["reviewThreads"]["nodes"]
            if not t["isResolved"]]


def report(number, sha, paths):
    endpoint = f"repos/{REPOSITORY}/pulls/{number}"
    pr = api(endpoint)
    if (pr["head"]["sha"] != sha or pr["state"] != "open"
            or pr["base"]["ref"] != "main" or pr["base"]["repo"]["full_name"] != REPOSITORY):
        raise ValueError("Expected an open PR to this repository's main at the exact --sha")
    print(f"PR: {pr['html_url']}\nHead: {sha}\nBase: {pr['base']['sha']}\nObserved: {now()}")
    passed = local_evidence(paths, sha)
    passed = ci_snapshot(sha, "pull_request") and passed
    files = [f["filename"] for p in api(endpoint + "/files?per_page=100", True) for f in p]
    if len(files) != pr["changed_files"]:
        raise ValueError("Incomplete changed-file evidence")
    print("Files changed:\n" + "\n".join(f"  {f}" for f in files))
    threads = open_threads(number)
    reviews = [r for p in api(endpoint + "/reviews?per_page=100", True) for r in p]
    latest = {}
    for review in reviews:
        if review["state"] in {"APPROVED", "CHANGES_REQUESTED", "DISMISSED"}:
            latest[review["user"]["login"]] = review["state"]
    changes_requested = [who for who, state in latest.items() if state == "CHANGES_REQUESTED"]
    # A stale optional bot review must never require a new approval/receipt from that bot.
    # Substantive findings still need a disposition under the owner review process.
    print(f"Unresolved threads: {json.dumps(threads)}; changes requested (diagnostic): {changes_requested}")
    final = api(endpoint)
    if (final["head"]["sha"] != sha or final["base"]["sha"] != pr["base"]["sha"]
            or final["state"] != "open"):
        raise ValueError("PR changed during collection; regenerate evidence")
    passed = passed and not threads and not final["draft"] and final["mergeable"] is True
    print(f"Draft: {final['draft']}; mergeable: {final['mergeable']}")
    print("Independent ChatGPT review: PENDING (confirm separately)")
    print("Explicit owner approval of this head SHA: PENDING (confirm separately)")
    print(f"Automated evidence: {'PASSED' if passed else 'NOT PASSED'}; this is not approval.")
    return 0 if passed else 1


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="operation", required=True)
    rec = sub.add_parser("record")
    rec.add_argument("path", type=Path)
    rec.add_argument("command", nargs=argparse.REMAINDER)
    rep = sub.add_parser("report")
    rep.add_argument("pr", type=int)
    rep.add_argument("--sha", required=True)
    rep.add_argument("--local", type=Path, action="append", default=[])
    post = sub.add_parser("main")
    post.add_argument("--sha", required=True)
    post.add_argument("--approved-head", required=True)
    args = parser.parse_args()
    try:
        if args.operation == "record":
            return record(args.path, args.command[1:] if args.command[:1] == ["--"] else args.command)
        if not re.fullmatch(r"[0-9a-f]{40}", args.sha):
            raise ValueError("Supply the complete 40-character SHA")
        if args.operation == "report":
            return report(args.pr, args.sha, args.local)
        commit = api(f"repos/{REPOSITORY}/commits/{args.sha}")
        parents = [p["sha"] for p in commit["parents"]]
        if len(parents) != 2 or parents[1] != args.approved_head:
            raise ValueError("Normal merge must have exactly two parents; second must be the approved head")
        print(f"Verified merge parents: {parents}")
        return 0 if ci_snapshot(args.sha, "push") else 1
    except (ValueError, KeyError, OSError, subprocess.CalledProcessError) as exc:
        print(f"Evidence unavailable: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
