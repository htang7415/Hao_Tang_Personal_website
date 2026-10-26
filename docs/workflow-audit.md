# Workflow audit — 2026-10-26

Read-only remote inspection used `gh`; existing working trees and branches were preserved.
Changes are prepared on a dedicated `codex/engineering-workflows` worktree based on
`8f9c4d9e492a951ed506ad89583049d95bd357f1`.

## Baseline

- Public repository; default `main`; normal merge commits enabled; auto-merge disabled.
  No rulesets; main protection returns HTTP 404 (unprotected). Repository-wide settings are unchanged.
- No Actions workflows or agent guidance files existed. Actions allowed; repository-wide secret
  scanning/push protection and Dependabot security updates were disabled. No security setting was changed;
  a free read-only Gitleaks CI check is added instead.
- React 19, Vite 6, TypeScript, MDX; `package-lock.json` already tracked. Existing `npm run build`
  invokes Vite without TypeScript checking. Baseline `npm ci`, `tsc --noEmit` and build succeed.
  `test-blog-loader.js` directly imports a Vite-only module in Node; it is replaced by real Vite-aware tests.
- Existing build emits a JavaScript chunk over Vite's 500 kB warning threshold. The warning is retained;
  changing bundles, UI or content is outside scope. Runtime dependencies and Vite application configuration
  are not deliberately upgraded or modified; added packages serve tests/typechecking only.

## Existing deployment integration

- GitHub has a `Production` environment with no protection rules and no branch policy.
  It is retained without changes. No `vercel.json`, local `.vercel/project.json` or GitHub deploy workflow exists.
- The existing Vercel app reports successful production deployment of baseline main SHA
  `8f9c4d9e492a951ed506ad89583049d95bd357f1`, GitHub deployment `7078090287`.
  Latest status is successful; generated URL:
  `https://haotang-p741zj7an-hyprshares-projects.vercel.app`.
  Vercel project link in GitHub's status points to `hyprshares-projects/haotang`.
- Deployment records for prior main commits confirm an existing native integration. GitHub's
  `production_environment` boolean is false even on these `Production` records; the verifier uses
  the explicit environment name plus SHA/status instead of assuming that boolean is authoritative.
- Dashboard access was denied; current dashboard production-branch, build overrides, preview protections,
  plan, domains, variables and auto-promotion settings remain unverified. No access workaround, credential
  import, setting update, deployment, promotion or rollback was attempted.
- Native Vercel may deploy an approved main merge concurrently with Main CI. This setup cannot claim a
  CI-before-production gate. Future merges capable of deployment require separate production authorization;
  a stricter release gate needs a separately authorized settings change. No staging environment is added.

## Reference practices selected

Freshly fetched MeshForth main `6c04ec28e35a578e4db54f5f4c28c2783ffe10d4`
(`AGENTS.md`, handoff script, PR template, CI/release guidance) and MeshStake main
`6f0e67baf38e4ba6ab60a8d2394910aee361355f` (`AGENTS.md`/`CLAUDE.md`,
engineering workflow, CI evidence script/template/workflow) informed this independent adaptation.

Adopted dedicated worktrees, local verification/self-review, bounded read-only Linux CI, lockfile installs,
type/tests/build checks, secret/hygiene checks, exact-SHA command/CI evidence, explicit state classification,
owner ChatGPT review, owner final-SHA approval and normal merge parent/Main CI verification.
GitHub Codex Review remains optional. A checksum-verified free Gitleaks CLI avoids action-license dependence.

Excluded AWS/Supabase/iOS infrastructure, staged cloud releases, reviewer bots, large browser matrices,
change-area jobs and cross-repository synchronization. Existing Vercel previews/rollback are sufficient.
PR CI/preview outcomes are verified separately for the final PR SHA; Main CI and new production release
verification cannot run before an authorized merge/deployment and must not be reported as completed.
