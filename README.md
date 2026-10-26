# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1fKs2p00zcsSfM1RZAwuWqtzaURoydFAx

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm ci --no-audit --no-fund`
2. Run the app:
   `npm run dev`


## Engineering workflow

Use Node 22 (`.nvmrc`) and Python 3. Verification requires no API key:

```bash
npm ci --no-audit --no-fund
npm run verify
python3 scripts/secret_scan.py
```

`npm run verify` checks tracked-file hygiene, workflow tests, TypeScript, MDX loader tests,
production build and local preview/asset integrity. Keep the lockfile committed.

Follow [AGENTS.md](AGENTS.md) and [the engineering workflow](docs/engineering-workflow.md)
for dedicated worktrees, exact-SHA evidence, PR/ChatGPT review and explicit owner approval.
Vercel's existing Git integration owns PR previews and production. An approved merge may deploy
production before Main CI finishes; separate production authorization is required before that merge.
No Actions deployment or separate Staging environment is added. Preview/production verification
and authorized rollback are documented in the workflow; current integration evidence is in the
[workflow audit](docs/workflow-audit.md).
