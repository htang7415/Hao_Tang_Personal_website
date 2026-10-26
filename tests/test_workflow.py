import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import sys
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]


def load(name):
    spec = importlib.util.spec_from_file_location(name, ROOT / "scripts" / f"{name}.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


evidence = load("pr_evidence")
hygiene = load("check_repo")


class EvidenceTests(unittest.TestCase):
    def setUp(self):
        quiet = patch("builtins.print")
        quiet.start()
        self.addCleanup(quiet.stop)
        self.sha = "a" * 40
        self.run = dict(head_sha=self.sha, event="pull_request", status="completed", conclusion="success")
        self.job = dict(name=evidence.JOB, status="completed", conclusion="success",
                        steps=[dict(name=name, status="completed", conclusion="success") for name in evidence.REQUIRED_STEPS])

    def check(self, jobs=None):
        return evidence.classify(self.run, jobs if jobs is not None else [self.job], self.sha, "pull_request")[1]

    def test_record_captures_actual_output_failure_and_refuses_overwrite(self):
        with tempfile.TemporaryDirectory() as work:
            source = Path(work) / "source"
            source.mkdir()
            receipt = Path(work) / "receipt.json"
            with patch.object(evidence, "ROOT", source), patch.object(evidence, "clean_sha", return_value=self.sha):
                result = evidence.record(receipt, [sys.executable, "-c", "print('observed output'); raise SystemExit(7)"])
                self.assertEqual(result, 1)
                data = json.loads(receipt.read_text())
                self.assertEqual(data["exit_code"], 7)
                self.assertEqual(Path(data["log"]).read_text(), "observed output\n")
                self.assertEqual(data["log_sha256"], hashlib.sha256(Path(data["log"]).read_bytes()).hexdigest())
                with self.assertRaises(FileExistsError):
                    evidence.record(receipt, [sys.executable, "-c", "pass"])

    def test_record_rejects_source_mutation_even_when_command_succeeds(self):
        with tempfile.TemporaryDirectory() as work:
            source = Path(work) / "source"
            source.mkdir()
            receipt = Path(work) / "receipt.json"
            with patch.object(evidence, "ROOT", source), patch.object(evidence, "clean_sha", side_effect=[self.sha, ValueError("dirty")]):
                self.assertEqual(evidence.record(receipt, [sys.executable, "-c", "pass"]), 1)
                self.assertFalse(json.loads(receipt.read_text())["source_unchanged"])

    def test_stale_optional_review_is_diagnostic_but_open_threads_still_block(self):
        pr = dict(head={"sha": self.sha}, state="open", html_url="test-pr", changed_files=0,
                  base={"ref": "main", "sha": "b" * 40, "repo": {"full_name": evidence.REPOSITORY}},
                  draft=False, mergeable=True)
        review = {"state": "CHANGES_REQUESTED", "user": {"login": "chatgpt-codex-connector[bot]"}}
        for threads, expected in [([], 0), ([{"path": "file", "line": 1}], 1)]:
            with patch.object(evidence, "api", side_effect=[pr, [[]], [[review]], pr]), \
                 patch.object(evidence, "local_evidence", return_value=True), \
                 patch.object(evidence, "ci_snapshot", return_value=True), \
                 patch.object(evidence, "open_threads", return_value=threads):
                self.assertEqual(evidence.report(1, self.sha, []), expected)

    def test_only_executed_success_passes(self):
        self.assertTrue(self.check())
        for state in ["failure", "skipped", "cancelled", "timed_out", None]:
            with self.subTest(state=state):
                self.job["conclusion"] = state
                self.assertFalse(self.check())

    def test_missing_duplicate_pending_wrong_sha_and_event_fail(self):
        self.assertFalse(evidence.classify(None, [], self.sha, "pull_request")[1])
        self.assertFalse(self.check([]))
        self.assertFalse(self.check([self.job, self.job]))
        for key, value in [("head_sha", "b" * 40), ("event", "push"), ("status", "queued")]:
            original = self.run[key]
            self.run[key] = value
            self.assertFalse(self.check())
            self.run[key] = original

    def test_skipped_required_step_cannot_hide_under_successful_job(self):
        self.job["steps"][0]["conclusion"] = "skipped"
        self.assertFalse(self.check())
        self.job["steps"] = self.job["steps"][1:]
        self.assertFalse(self.check())

    def test_failed_before_steps_is_never_executed(self):
        self.job.update(conclusion="failure", steps=[])
        label, passed = evidence.classify(self.run, [self.job], self.sha, "pull_request")
        self.assertIn("NEVER-EXECUTED", label)
        self.assertFalse(passed)

    def test_stale_failed_mutated_and_tampered_local_receipts_fail(self):
        with tempfile.TemporaryDirectory() as work:
            log = Path(work) / "check.log"
            log.write_text("actual command output\n")
            data = dict(version=1, repository=evidence.REPOSITORY, sha=self.sha, command=["check"],
                        exit_code=0, source_unchanged=True, log=str(log),
                        log_sha256=hashlib.sha256(log.read_bytes()).hexdigest())
            receipt = Path(work) / "receipt.json"
            receipt.write_text(json.dumps(data))
            self.assertTrue(evidence.local_evidence([receipt], self.sha))
            for key, value in [("sha", "b" * 40), ("exit_code", 1), ("source_unchanged", False),
                               ("repository", "other/repo"), ("log_sha256", "bad")]:
                changed = {**data, key: value}
                receipt.write_text(json.dumps(changed))
                self.assertFalse(evidence.local_evidence([receipt], self.sha))
            self.assertFalse(evidence.local_evidence([], self.sha))

    def test_run_listing_and_job_listing_are_paginated_and_latest_run_wins(self):
        old = {**self.run, "id": 1, "path": ".github/workflows/ci.yml", "html_url": "old", "run_attempt": 1}
        new = {**old, "id": 2, "html_url": "new", "run_attempt": 2}
        job = {**self.job, "html_url": "job"}
        with patch.object(evidence, "api", side_effect=[
            [{"workflow_runs": [old]}, {"workflow_runs": [new]}], [{"jobs": [job]}],
        ]) as api:
            self.assertTrue(evidence.ci_snapshot(self.sha, "pull_request"))
            self.assertIn("/runs/2/jobs?filter=latest", api.call_args_list[1].args[0])
            self.assertTrue(all(call.args[1] for call in api.call_args_list))


class HygieneTests(unittest.TestCase):
    def test_generated_secrets_and_os_files_rejected_but_final_artifacts_allowed(self):
        for path in ["resume/.DS_Store", "._index.tsx", ".env", ".env.local", "node_modules/a.js",
                     "dist/index.html", ".vercel/project.json", "resume/SDE/a.aux", "a.synctex.gz"]:
            self.assertTrue(hygiene.forbidden(path), path)
        for path in [".env.example", "resume/SDE/Hao_Tang_Resume.tex", "resume/SDE/Hao_Tang_Resume.pdf",
                     "resume/SDE/Hao_Tang_Resume.txt", "package-lock.json"]:
            self.assertFalse(hygiene.forbidden(path), path)


if __name__ == "__main__":
    unittest.main()
