# Rollback Plan

## Recovery points

- Production commit before redesign: `9136118b8b126cab6d20dfd2a9f2ed826acfd521`.
- Remote tag: `pre-palestinian-future-editorial-2026-07-11`.
- Remote branch: `backup/pre-palestinian-future-editorial-2026-07-11`.

The tag and branch contain the original code and public media removed from the redesign deploy surface.

## Rollback trigger

Rollback if production is inaccessible, core English/Arabic routes fail, assets fail broadly, confidential material or credentials appear, the inquiry leaks data, or the deployment cannot be stabilized safely.

## Recovery procedure

1. Confirm the live failure and record the deployed SHA.
2. Revert the redesign commit on `main` or restore the backup commit through a new recovery commit.
3. Push `main` to trigger the existing GitHub Pages workflow.
4. Monitor the workflow and verify the public URL.
5. Keep the redesign commit/branch for repair; do not rewrite shared history.

Recommended command shape:

```powershell
Set-Location 'C:\Users\Extreme\Tamer_Work\01_PROJECTS\Tamer-Strategic-OS\tmp\Tamer-Portfolio'
git revert <redesign-commit-sha>
git push origin main
```

Do not use `git reset --hard` on the shared production branch.

