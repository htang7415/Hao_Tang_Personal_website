# Repository rules

`AGENTS.md` is authoritative; `CLAUDE.md` is a pointer. Explicit user instructions take precedence.

## Engineering workflow

Plan → Implement → Local Verification + self-review → PR → GitHub CI →
ChatGPT Independent Review → Owner Approval of Final Head SHA → Merge Commit → Main CI.

- Use a dedicated branch/worktree off current `origin/main`. Preserve unrelated work, branches and artifacts; never push directly to `main`. Keep the resume and website repositories independent: no submodules or automatic synchronization.
- Within authorized scope, inspect, implement, verify, fix, commit, push and prepare PRs autonomously using `gh`.
- Claude Code and Codex may implement/review. GitHub Codex Review is optional, never a required gate. Address substantive findings; avoid redundant reviews and CI reruns.
- Inspect actual command output. Record successful, failed, skipped and never-executed checks against exact SHAs using `scripts/pr_evidence.py`; see [workflow](docs/engineering-workflow.md).
- Stop for the owner's independent ChatGPT review and explicit approval of the final PR head SHA. Any later push invalidates review/approval. Never infer approval from CI, a helper flag or agent review.
- After approval, use a normal merge commit with `gh pr merge --merge --match-head-commit <approved-sha>`; verify its second parent is that SHA and Main CI passes. Never squash, rebase or auto-merge.
- Existing Vercel Git integration may deploy `main` immediately, independently of Main CI. Obtain separate explicit production authorization before a merge that can trigger it; SHA merge approval alone is insufficient. Never run deploy/promote/rollback operations without authorization.
- Do not modify Production, Vercel settings, credentials, billing or repository-wide security settings without separate authorization. Use existing PR previews; no separate Staging environment or new paid infrastructure.

## Scope and verification

- Engineering-only tasks must not change website content, UI/UX, project descriptions, factual claims, resume assets or runtime application behavior.
- Read `package.json`, the lockfile, relevant code/tests and Vite configuration before changing workflows. Preserve existing routing, MDX processing and deployed configuration.
- Use Node 22 (`.nvmrc`) and `npm ci` with the committed lockfile. Do not use `npm install` in CI or upgrade unrelated packages. Dependency changes must update the lockfile.
- Local checks: `npm ci --no-audit --no-fund`, `npm run verify`, `python3 scripts/secret_scan.py`. Read the output; local checks do not replace GitHub CI.
- Tests exercise the real MDX loader; build checks inspect emitted assets and fetch the Vite preview. They do not prove browser rendering, navigation, external resources or production custom-domain assignment. Add browser verification when UI behavior changes.
- Keep secrets out of Git, browser code, build artifacts and logs. Do not set credentials for verification; Vite/client environment values can be bundled. Never dump environment variables or bypass Vercel preview protection.
- CI has read-only repository permissions and no deployment credentials. Keep generated files, `.env*`, `.vercel/`, `node_modules/`, `dist/`, `.artifacts/` and OS metadata untracked; `.env.example` may contain names/placeholders only.
- Record remaining risks, skipped/unexecuted checks and rollback steps. Convert real recurring failures into focused regression checks. Do not weaken checks to get green.
