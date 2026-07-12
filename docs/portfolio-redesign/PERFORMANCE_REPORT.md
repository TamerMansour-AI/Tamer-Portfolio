# Performance Report

## Before

- Mobile Lighthouse performance: 69.
- Desktop Lighthouse performance: 75.
- Mobile LCP: 39.6 s.
- Desktop LCP: 6.8 s.
- Homepage transfer: approximately 23–25 MB.
- Public media: approximately 106.8 MB.
- Autoplay hero: 17.28 MB video plus 7.3 MB poster.

## After local production build

- Mobile Lighthouse performance: 96.
- Mobile accessibility / best practices / SEO: 100 / 100 / 100.
- Mobile FCP: 1.7 s.
- Mobile LCP: 2.6 s.
- Mobile CLS: 0.008.
- Lighthouse transfer: approximately 243 KB.
- Automated initial local payload: approximately 266 KB.
- Public media directory: approximately 7.54 MB.
- Optional identity film: 696 KB, loaded only after user intent.

## Media actions

- Added optimized WebP versions of hero, profile, flagship, and workshop visuals.
- Re-encoded the identity film to H.264 with fast start and removed it from initial loading.
- Removed 15 unreferenced files over 1 MB from the public deploy surface after preserving them in the rollback tag/branch and Git history.
- Replaced text-heavy service posters with semantic HTML.
- Self-hosted production fonts to remove render-blocking external font requests.

The 2.5 s LCP target was missed by 0.1 s in the final simulated mobile lab run; field results may differ. The improvement is material and the initial payload target is exceeded comfortably.

## After production deployment

- Mobile Lighthouse performance: 96.
- Accessibility / best practices / SEO: 100 / 100 / 100.
- FCP: 1.5 s.
- LCP: 2.2 s.
- CLS: 0.
- Total blocking time: 0 ms.
- Transfer: approximately 242 KiB.

The production run meets the requested 2.5 s LCP target in the measured mobile lab profile.

## After evidence restoration repair

- Local mobile Lighthouse performance: 96.
- Accessibility / best practices / SEO: 100 / 100 / 100.
- Automated homepage initial local payload: 240.4 KB.
- The archive, Lab visuals, and case artifacts are lazy-loaded below the fold and do not materially increase the homepage entry cost.
- Evidence: `assets/lighthouse-repair-mobile.json`.

The restored content preserves the production performance score while materially increasing proof depth.
