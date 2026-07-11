# Production Verification

Public URL: `https://tamermansour-ai.github.io/Tamer-Portfolio/`

## Initial production release

- Source commit: `b89d333a7e6c01e64b635c498a6c05426ca3cbce`.
- GitHub Actions run: `29165711290` (`Deploy Astro to GitHub Pages`).
- Result: success on 2026-07-11.
- HTTPS and the existing public URL were preserved.

## Live checks

- English and Arabic home, work, ways-to-work, flagship case, and contact routes returned HTTP 200.
- English pages expose `lang="en"` and `dir="ltr"`; Arabic pages expose `lang="ar"` and `dir="rtl"`.
- Canonical and English, Arabic, and x-default alternates are present on production.
- Fifteen internal homepage links were requested successfully with no broken responses.
- No console or page errors were found while navigating the primary English and Arabic routes.
- The inquiry route preselected `workshop`, passed required-field validation, and displayed its confirmation without sending a message.
- The favicon, optimized media, sitemap, metadata, and structured content are served from the existing GitHub Pages base path.
- No local Windows paths, credentials, or private client details were found in the built output.
- The legacy `/en/` route gap found during production QA was repaired and added to the automated build verification.

## Production evidence

- `assets/production-en-desktop.png`
- `assets/production-en-mobile.png`
- `assets/production-ar-desktop.png`
- `assets/production-ar-mobile.png`
- `assets/production-flagship-case.png`
- `assets/production-inquiry.png`
- `assets/lighthouse-production-mobile.json`

## Production Lighthouse

- Performance: 96.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- FCP: 1.5 s.
- LCP: 2.2 s.
- CLS: 0.
- Total blocking time: 0 ms.
- Transfer: 242 KiB.

## Rollback readiness

- Annotated tag: `pre-palestinian-future-editorial-2026-07-11`.
- Backup branch: `backup/pre-palestinian-future-editorial-2026-07-11`.
- Previous production commit: `9136118b8b126cab6d20dfd2a9f2ed826acfd521`.

## Final compatibility release

- Source commit: `327b7ab8514da857debb3a43afdda19831707311`.
- GitHub Actions run: `29165864896` (`Deploy Astro to GitHub Pages`).
- Result: success on 2026-07-11.
- Post-deploy browser verification confirmed that `/en/` replaces itself with the canonical English homepage.
- English home, Arabic home, the flagship case, and the preselected inquiry route returned HTTP 200 with no console or page errors after the final release.
