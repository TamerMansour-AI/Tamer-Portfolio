# Spatial portfolio design QA

**Visual, local functionality, and release dependency checks: passed.** The original visual QA below documents the approved design; the release migration result is recorded at the end.

## Comparison setup

- Primary source visual truth: `C:\Users\Extreme\Tamer_Work\01_PROJECTS\Tamer-Strategic-OS\tmp\Tamer-Portfolio-Update-Mission\working\portfolio-redesign-plan-2026-09-23\approved-reference\homepage-spatial-worlds.png` (1487 × 1058 px).
- Secondary source visual truth: `C:\Users\Extreme\Tamer_Work\01_PROJECTS\Tamer-Strategic-OS\tmp\Tamer-Portfolio-Update-Mission\working\portfolio-redesign-plan-2026-09-23\approved-reference\project-transformation.png` (1487 × 1058 px). The approved plan places this interaction inside the Canaan case page, so surrounding page layout is intentionally different from the full-page concept image.
- Implementation: local Astro preview at `http://127.0.0.1:4321/Tamer-Portfolio/ar/` and `/ar/work/here-was-canaan/`.
- Primary state: Arabic, Canaan selected, analytics choice dismissed, 1487 × 1058 CSS viewport, device pixel ratio 1, browser screenshot at CSS scale. Both primary images are 1487 × 1058 px; no density normalization was needed.
- [Full side-by-side comparison](output/playwright/reference-vs-actual.webp) and [50% overlay](output/playwright/reference-overlay.webp) were inspected together. Focused comparisons were inspected for [headline and actions](output/playwright/hero-copy-detail.webp), [artwork and glass](output/playwright/hero-worlds-detail.webp), and [selector](output/playwright/hero-selector-detail.webp).
- [Canaan concept beside the rendered section](output/playwright/canaan-reference-vs-section.webp) was inspected as a structural comparison. The section is embedded in the case page as the approved plan requires.
- Additional final browser captures: [English desktop](output/playwright/en-home-1487x1058.webp), [Arabic mobile](output/playwright/ar-home-390x844.webp), [Arabic 360px](output/playwright/ar-home-360x800.webp), [Arabic 1440px](output/playwright/ar-home-1440x900.webp), [Canaan comparison](output/playwright/ar-canaan-comparison-1487x1058.webp), [Canaan tablet](output/playwright/ar-canaan-768x900.webp), and the [inner-page contact sheet](output/playwright/inner-pages-contact-sheet.webp).

## Findings and iteration history

1. **P1, resolved — English headline crossed the project cards.** The first browser capture wrapped the English display text into six large lines. Shorter equivalent copy and a smaller desktop English display size now keep the headline, description, and actions inside the right column. Evidence: final English desktop capture.
2. **P1, resolved — new-visitor analytics notice became unreadably narrow.** Its inherited two-column grid compressed the copy in the [first fresh-session capture](output/playwright/initial-consent-layout.webp). The spatial homepage now presents it as a [single-column notice](output/playwright/fixed-consent-layout.webp) with accessible actions. The notice remains dismissible and analytics remain consent-gated.
3. **P2, resolved — Arabic display hierarchy sat too low.** A redundant eyebrow moved the title below the reference position and the title was oversized. It is hidden on desktop, the Arabic size and line height were adjusted, and the description width was constrained. Evidence: final headline comparison and primary side-by-side capture.
4. **P2, resolved — Canaan concept composition was mirrored.** The [first case capture](output/playwright/initial-canaan-layout.webp) placed copy on the right and the comparison on the left. The Arabic section now keeps RTL text while placing the copy left and aperture right, matching the source concept's major-region hierarchy. Evidence: final Canaan side-by-side capture.
5. **P2, resolved — mobile world controls hid the next arrow and selection scrolled the page.** Both arrows are now visible at the ends of the horizontal selector. Focus uses `preventScroll`, and the selector itself scrolls to the chosen world. The page remains steady when switching. Evidence: final Arabic mobile capture and browser interaction check.
6. **P2, resolved — selecting Diploma or Signal did not make that world dominant on small screens.** The selected plane now becomes the main mobile artwork; its caption and direct case link also change. All three states were checked against their real local routes.
7. **P2, resolved — Canaan tablet page shifted horizontally by 36px.** The overlapping film-reel illustration projected past the page edge at 768px. Its tablet position now remains inside the case hero; the page measures 768px scroll width at a 768px viewport. Evidence: final Canaan tablet capture.
8. **P2, resolved — the small desktop side note was blurred by the header backdrop.** Removed the homepage-only header blur so both note lines remain readable. Evidence: refreshed primary 1487px capture and comparison.

## Required fidelity surfaces

| Surface | Final evaluation |
| --- | --- |
| Fonts and typography | Arabic display uses the site's Arabic family with correct RTL shaping and deliberate two-line wrapping. English uses a shorter equivalent that fits its column. Small project labels remain legible; Signal's small caption is still intentionally secondary. |
| Spacing and layout rhythm | The main film plane, diploma plane, Signal plane, top navigation, right-side headline, and bottom selector occupy the same broad regions as the primary reference. The case comparison retains generous whitespace and an aperture aligned with the secondary concept. |
| Colors and tokens | Dark charcoal, warm copper, cobalt call to action, and warm ivory/vermilion case chapter match the approved direction. Focus states remain visible. |
| Image quality and assets | The original published Canaan frame and real diploma screenshot remain separate images. Generated room, true-alpha glass, and illustrative sketch are optimized WebP assets with provenance in `ASSET_PROVENANCE.md`. The sketch is explicitly labelled as illustrative, not original process evidence. The generated room has somewhat broader copper reflections and a darker slab than the exact reference; this is acceptable P3 asset variation. |
| Copy and content | Arabic headline matches the approved wording. English is an equivalent concise adaptation. Project status and illustrative boundaries are stated in the UI. No private client material is exposed. |

## Functional and responsive checks

- Arabic and English desktop home previews and Arabic mobile home previews were visually inspected. A rendered contact sheet covers Work, Workshops, Systems, About, Contact and Archive. Canaan was also inspected at tablet width. The local Playwright check sampled 26 route/viewport combinations at 1440×900, 768×900, 390×844 and 360×800: all returned HTTP 200, one H1, no document overflow, and no fully loaded broken image. No page/console error or local HTTP error was reported.
- World buttons, previous/next controls, keyboard arrow navigation, case comparison buttons, slider, and pointer comparison were exercised in the browser. Every selected world updates its caption and links to a distinct case. The comparison aperture computes `touch-action: pan-y` to preserve vertical touch scrolling; an actual physical phone gesture was not available for this local check.
- Work category deep links, category switching, and browser Back restored the correct selection. Signal's case inquiry opens `?type=system` and the contact form selects `system`.
- Fresh-visit consent is visible; before any choice, no GA script is present. Decline persists across reload with the panel hidden and no GA script. A JavaScript-disabled page still renders its main content and ordinary Work links. Reduced-motion preference sets world transition duration to `0s`.
- `npm run build` produced 81 pages; `npm run verify` checked internal links, required metadata, image attributes, consent gating, and the homepage initial local payload (1218.7 KB). The earlier recorded 907.5 KB baseline was from the previous full-site proof, not a fresh measurement; the new local figure is 311.2 KB higher (about 34%).
- `npm audit fix` updated 16 compatible packages and reduced the audit from 13 to 4 findings. The remaining report includes critical Astro advisories and transitive esbuild/sharp issues. The suggested Astro 7.3.4 fix is a breaking major upgrade and needs a separate compatibility pass before release; the static output is not an SSR server. No `--force` upgrade was applied.

## Residual P3 polish

- The generated foreground glass has heavier smoked edges and the room is darker in a few areas than the exact mock. The real film frame, depth hierarchy, atmosphere, and interaction remain intact. Further asset tuning can be reserved for owner visual review.

## Implementation checklist

- [x] Match primary desktop regions and compare at 1487 × 1058.
- [x] Keep project media and controls as real page elements.
- [x] Deliver Arabic and English desktop/mobile layouts.
- [x] Add the labelled Canaan comparison inside its case page.
- [x] Verify navigation, keyboard use, links, build, and consent behavior.
- [x] Owner reviewed the local preview and explicitly requested publication.

## Release compatibility pass — 2026-09-23

- Upgraded from Astro 5 to Astro 7.3.4 and from the Astro Tailwind integration to Tailwind 4's Vite plugin. GitHub Actions now uses Node.js 22. This supersedes the earlier audit warning above; the migration was verified against the rebuilt output.
- `npm run build` generated 81 static pages. `npm run verify` passed all 81 and measured a 1211.6 KB initial local homepage payload. `npm audit --omit=dev --audit-level=low` found zero vulnerabilities at this release check.
- The built preview was inspected in a browser. The route and interaction smoke check covered 26 Arabic and English route/viewport combinations at 1440, 768, 390 and 360px with zero failures, console errors, overflow, or broken loaded images. Three world links, reduced motion, the Canaan comparison touch setting, no-JavaScript navigation, and opt-in analytics behavior passed.
- The older bilingual blog pages were spot-checked after the dependency migration. Their inherited light surfaces previously made white text hard to read; scoped color corrections restore readable headings and body text without changing the portfolio's other surfaces.
- Tamer confirmed on 2026-09-23 that the selected Athar reel frame may be reused in the public portfolio. The separate unreleased film and private systems media gates remain; their current pages use conservative labels and illustrations.
