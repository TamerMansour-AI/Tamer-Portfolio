# Tamer Portfolio

Bilingual Astro portfolio for Tamer Mansour. The Arabic and English homepages lead into selected film, learning, product, and systems cases. The spatial homepage and Canaan comparison use separate images, HTML content, and accessible controls; asset origins and illustrative boundaries are recorded in `ASSET_PROVENANCE.md`.

## Local development

Requires Node.js 22.12 or newer.

```powershell
npm ci
npm run build
npm run verify
npm run dev
```

Open `http://127.0.0.1:4321/Tamer-Portfolio/` for English or `/ar/` for Arabic. `npm run verify` checks the built static site. `scripts/qa-spatial-local.js` is the browser smoke check for the primary routes and interactions.

## Publication

GitHub Pages deploys the static `dist` output from pushes to `main` through `.github/workflows/deploy.yml`. The published site is `https://tamermansour-ai.github.io/Tamer-Portfolio/`. Analytics load only after the visitor opts in.
