# Engineering workflow

Plan → Implement → Local Verification + self-review → PR → GitHub CI →
ChatGPT Independent Review → Owner Approval of Final Head SHA → Merge Commit → Main CI.

## Working on a change

1. Read `AGENTS.md`, relevant code/configuration and [audit](workflow-audit.md).
   Define the smallest change, acceptance checks, risks and rollback. Preserve unrelated work.
2. Fetch `origin`; create a dedicated branch and worktree off `origin/main`.
   Never push directly to `main`; no cross-repository synchronization or submodules.
3. Implement and execute applicable local checks below. Inspect raw output and the full diff.
   Fix substantive findings at their cause; do not weaken checks to get green.
   Test tooling/CI behavior, including failure paths. Documentation-only edits need only
   applicable hygiene/checks locally; GitHub CI still runs the complete small suite.
4. Commit the candidate; record local checks on the clean committed tree. Generated output is ignored.
   Push the topic branch and open a PR using `gh pr create --base main --body-file <file>`.
   Keep blocked work in draft; state the blocker and evidence honestly.
5. Inspect the latest GitHub CI run, actual job logs, and uploaded artifacts for the exact head SHA.
   Resolve substantive review findings with fixes or reproducible counterevidence. Re-run only
   affected checks locally; each new PR head gets CI. Avoid repeated reviews of unchanged code.
6. Generate the evidence packet below. The owner uses it for independent ChatGPT review,
   then explicitly approves the **full final head SHA**. Neither self-review nor CI replaces this.
   GitHub Codex Review is optional; a missing/pending optional review never becomes a required gate.
7. Only after these decisions, verify the head again and merge using the normal merge command below.
   A later push invalidates prior SHA approval/review. Verify the merge's second parent and Main CI.

Self-review is required; a separate local review is proportionate to actual security, recovery or
complexity risk, not a standing extra gate. After about three unsuccessful fix/review cycles,
reassess scope/design instead of repeating the same loop. The owner's independent review remains required.

## Local and GitHub evidence

`record` executes an argument vector, preserves its exit code/output, verifies the tracked tree
remained clean and stores SHA, repository, time and log SHA-256. Use unique external paths;
it refuses to overwrite evidence. It does not capture environment variables. Do not pass secret-bearing
commands or arguments. Read the `.json.log` output; an exit code alone is insufficient evidence.

```bash
# Replace placeholders; run from the clean topic worktree after committing.
mkdir -p ../workflow-evidence
python3 scripts/pr_evidence.py record ../workflow-evidence/<sha>-install.json -- npm ci --no-audit --no-fund
python3 scripts/pr_evidence.py record ../workflow-evidence/<sha>-local.json -- npm run verify
python3 scripts/pr_evidence.py record ../workflow-evidence/<sha>-secrets.json -- python3 scripts/secret_scan.py
python3 scripts/pr_evidence.py report <pr-number> --sha <full-head-sha> \
  --local ../workflow-evidence/<sha>-install.json \
  --local ../workflow-evidence/<sha>-local.json --local ../workflow-evidence/<sha>-secrets.json
```

`report` reads paginated GitHub data, the newest matching `ci.yml` run and latest job attempt,
per-step conclusions, local receipts/log hashes, changed files, unresolved threads and change requests.
It rechecks the head/base before finishing. It never posts, approves, merges or deploys.
Submitted review states (including a stale bot `CHANGES_REQUESTED`) are diagnostic, never a
requirement to wait for an optional reviewer's approval. Substantive findings still need a disposition;
unresolved threads are reported and block the automated packet until addressed.
A passing automated report still leaves independent review and owner approval pending.
Keep the packet and raw logs with the PR handoff; refresh after any head change.
For example, inspect remote evidence with:

```bash
gh run view <run-id> --repo htang7415/Hao_Tang_Personal_website --log
gh run download <run-id> --repo htang7415/Hao_Tang_Personal_website --dir ../workflow-evidence/run-<run-id>
```

CI runs **once per PR update** and once per `main` push, using one bounded Linux job.
There are no branch-push duplicates, schedules, deployment credentials, path-filter skips or reviewer bots.
PR CI checks out the exact PR head; Main CI checks the combined merge commit. PR CI alone does not
prove the final merge tree. Actions are pinned by commit SHA; Gitleaks CLI is pinned/checksummed and free.
Update pins deliberately through a PR. Artifacts expire after seven days; retain downloaded evidence
with the review when longer retention is needed. No recurring paid service or self-hosted runner is added.
Private-repository Actions consumes the account's existing included allowance; do not raise a spending limit.

| Reported state | Meaning / action |
|---|---|
| Successful | Check executed and passed for this SHA; inspect output for its limits |
| Failed | Check ran and failed; investigate, fix and rerun affected checks |
| Skipped | No verification; never count it as a pass |
| Never-executed / missing | No evidence, including runner/billing failures before steps; disclose blocker |
| Pending / cancelled / timed out | Incomplete evidence; investigate or wait for the current run |

All verification steps must succeed; no skip exception exists. If runner/billing blocks CI,
inspect annotations once, retain local evidence, mark the PR draft and stop. Do not repeatedly rerun,
change billing/security settings, or reinterpret a blocked run as successful.

## Approved merge and Main CI

These are **later owner-authorized operations**, never part of PR preparation:

```bash
# Re-run report for the approved SHA immediately before this atomic head match.
gh pr merge <pr-number> --repo htang7415/Hao_Tang_Personal_website --merge --match-head-commit <approved-head-sha>
# Read the resulting merge SHA with gh pr view, then:
python3 scripts/pr_evidence.py main --sha <merge-sha> --approved-head <approved-head-sha>
```

The helper checks exactly two parents and that the second equals the approved SHA, then requires
successful push-to-`main` CI for that merge SHA. Helper arguments are comparisons, never approval receipts.
Do not use squash, rebase, `--admin`, auto-merge or a branch-protection bypass.
If the base changes after review, reassess the diff/integration and regenerate evidence before merging;
do not transfer an approval across a changed candidate. A failed Main CI needs a new fixing PR.
These are process gates: repository-wide protection/security settings are unchanged.

## Handoff

Give the owner the PR URL, base/head SHAs, changed files, acceptance criteria, local receipts and
raw-log conclusions, CI run/job URLs and step results, artifact hashes, self-review findings/dispositions,
remaining gaps and rollback. A concise independent-review prompt:

> Review this PR at its stated full head SHA against the request and AGENTS.md. Inspect the actual diff,
> raw command/CI logs and artifacts; check scope, failure paths, evidence fidelity and approval/deployment
> boundaries. Separate verified results from skipped/unexecuted checks. Return actionable findings and a
> merge recommendation. The implementer's self-review is not this independent review. Owner SHA approval
> and any production authorization remain separate decisions.

## Website verification, previews and production

Use Node 22 (`nvm use`, or an equivalent installation), Python 3, Git, `gh` and `curl`.
Run `npm ci --no-audit --no-fund`, `npm run verify` and `python3 scripts/secret_scan.py`.
CI runs frozen dependency installation, TypeScript (application + test/config files), real Vite/MDX
loader tests, a Vite build, and emitted-asset/HTTP checks using a local Vite preview server.
The HTTP check establishes index/asset integrity, not rendered browser behavior or third-party CDN availability.
The existing bundle-size warning is reported, not suppressed; bundle refactoring is outside workflow scope.

Vercel's existing Git integration owns previews and production; Actions does not deploy.
See [Vercel environment behavior](https://vercel.com/docs/deployments/environments).
A non-production branch normally receives a preview. After pushing, inspect its exact-SHA Vercel status
and GitHub deployment record; do not assume a missing status is a successful preview.

```bash
python3 scripts/verify_deployment.py --sha <full-head-sha> --environment Preview
# Only after an authorized merge/deployment, verify its exact merge SHA:
python3 scripts/verify_deployment.py --sha <merge-sha> --environment Production
```

The read-only helper selects the newest deployment for that exact SHA/environment, requires its latest
GitHub status to succeed, and fetches its HTTPS `*.vercel.app` URL and emitted JS/CSS. It writes hashes
under `.artifacts/`. No deployment, token, secret import or protection bypass occurs. Missing deployment
is never-executed evidence; protected/redirected previews are skipped HTTP evidence, requiring the
owner's existing authenticated browser access. Do not weaken preview protection. The helper does not
prove browser rendering or that a custom production domain points to this deployment; separately inspect
its domain assignment in Vercel and perform read-only acceptance on the existing live domain.

**Production authorization before merge:** observed `main` commits deploy through Vercel automatically.
A merge may therefore change production immediately, concurrently with Main CI. SHA merge approval alone
never authorizes it. Before a future website merge, obtain an additional explicit instruction permitting
the native production deployment (both decisions may be stated in one owner message). No merge or deployment
is performed during workflow setup. A strict Main-CI-before-production gate would require a separately
approved Vercel configuration change; it is not implemented or claimed here.

Keep the existing integration/settings, production branch, domains, variables and billing unchanged.
No separate Staging environment is justified for this static frontend; PR previews provide the test URL.
The dashboard's current settings were not accessible during audit; historical deployments establish the
integration, not every current dashboard setting. Confirm any unverified setting before a future release.

## Rollback

Rollback changes production and requires separate owner authorization naming the target deployment.
Use the existing Vercel dashboard **Instant Rollback** to the immediately previous eligible production
deployment; [Hobby supports that previous deployment](https://vercel.com/docs/instant-rollback).
Inspect its commit and eligibility first; do not promise arbitrary historical rollback on a free plan.
After rollback, verify its status, emitted assets and actual production-domain assignment, and record
that production intentionally differs from Git `main`. Do not redeploy/re-promote the faulty head.
If a source fix/revert is needed, prepare a new PR through the same workflow and obtain authorization
for its eventual merge/deployment. CI-only rollback also uses a new revert PR; never force-push `main`.
