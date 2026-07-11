# Implementation Roadmap

No phase below is authorized by this audit. Human approval is required at the marked gates.

## Phase 0 — Backup, baseline, and safety

**Objective:** Protect the current site and define measurable baselines.  
**Tasks:** Create a feature branch; preserve the current public build; record current routes, screenshots, Lighthouse, media weights, metadata, and conversion assumptions; classify npm advisories; define privacy and client-confidentiality rules.  
**Impact:** Safe iteration and honest before/after measurement.  
**Dependencies:** Repository access and approval of success criteria.  
**Risks:** Treating lab scores as business outcomes.  
**Complexity:** Small.  
**Approval:** Required before any implementation branch or production change.

## Phase 1 — Positioning and information architecture

**Objective:** Turn range into one memorable practice with three commercial lanes.  
**Tasks:** Finalize positioning sentence; select 3 flagship and 3 supporting cases; define archive rules; approve navigation; define buyer paths; decide language URL model; map existing content to keep/rewrite/archive.  
**Impact:** Highest clarity and conversion gain.  
**Dependencies:** Tamer’s priorities, target buyers, confidential/public boundaries, and available proof.  
**Risks:** Trying to keep every item prominent; unsupported outcome claims.  
**Complexity:** Medium.  
**Approval:** Required for positioning, flagship selection, and archive decisions.

## Phase 2 — Design-system exploration

**Objective:** Translate Palestinian Future Editorial into a coherent bilingual visual system.  
**Tasks:** Create three visual studies within the recommended direction; test Latin/Arabic type pairings; define color, grids, spacing, captions, cards, controls, motion, and accessible contrast; establish media art direction.  
**Impact:** Memorability and premium perception.  
**Dependencies:** Approved IA and representative real content.  
**Risks:** Cultural decoration without meaning; typography that works in one script only.  
**Complexity:** Medium.  
**Approval:** Required to select the visual system before coding.

## Phase 3 — Homepage and navigation prototype

**Objective:** Prove the first 10 seconds, hierarchy, mobile pacing, and inquiry choice.  
**Tasks:** Build an isolated non-production Astro prototype; implement hero, practice lanes, three flagship cases, credibility, ways to work, and CTA; test keyboard, 360/768/1440 widths, RTL, reduced motion, and media budgets.  
**Impact:** Validates the highest-traffic experience before migration.  
**Dependencies:** Approved positioning and design system.  
**Risks:** Letting the homepage expand back into an archive.  
**Complexity:** Medium.  
**Approval:** Required after visual and content preview; do not merge or deploy without it.

## Phase 4 — Project and case-study system

**Objective:** Make proof structured, selective, and reusable.  
**Tasks:** Define Astro content-collection schema; model localized fields, role, outcomes, credits, privacy, media, status, category, and related offer; migrate five flagship cases; generate routes and filters; create Lab/archive states.  
**Impact:** Major credibility and maintainability gain.  
**Dependencies:** Approved case list and access to safe evidence.  
**Risks:** Inconsistent proof, confidential material, or invented metrics.  
**Complexity:** Large.  
**Approval:** Required for every public case narrative and client-sensitive artifact.

## Phase 5 — Motion and interactive elements

**Objective:** Add motion only where it improves storytelling.  
**Tasks:** Produce optional short identity film; define poster-first playback; add pause/captions/reduced motion; create one case-study interaction; evaluate Remotion templates for trailers and bilingual social previews.  
**Impact:** Memorability without sacrificing usability.  
**Dependencies:** Stable design and media pipeline.  
**Risks:** Page weight, distraction, accessibility, autoplay policies.  
**Complexity:** Medium–Large.  
**Approval:** Required for final media, sound, and performance budget.

## Phase 6 — Forms, analytics, CMS decision, and SEO

**Objective:** Connect attention to measurable, privacy-conscious leads and maintainable publishing.  
**Tasks:** Build route-aware inquiry form and spam protection; define response flow; add privacy-respecting analytics and events; fix favicon and locale metadata; strengthen project schema; decide whether content collections are sufficient before selecting a CMS; create social cards.  
**Impact:** Conversion, attribution, and content operations.  
**Dependencies:** Approved lead process, privacy copy, and destination inbox/service.  
**Risks:** Spam, personal-data handling, analytics consent, service lock-in.  
**Complexity:** Medium.  
**Approval:** Required before connecting external services or collecting data.

## Phase 7 — Mobile, accessibility, performance, and content QA

**Objective:** Meet launch budgets and remove regression risk.  
**Tasks:** Test desktop/mobile/RTL; screen-reader spot checks; full keyboard journeys; reduced-motion; contrast; captions; internal/external links; responsive images; network throttling; Lighthouse and Core Web Vitals targets; copy/claims/privacy review.  
**Impact:** Trust, reach, and technical quality.  
**Dependencies:** Feature-complete preview.  
**Risks:** Late media changes and bilingual overflow.  
**Complexity:** Medium.  
**Approval:** Required at launch-candidate review.

Suggested budgets:

- Homepage initial transfer below 2 MB; optional user-initiated film separate.
- LCP below 2.5 s in representative field conditions.
- CLS below 0.1.
- No critical/high accessibility defects.
- No broken internal links or console errors.
- 100% localized metadata parity for published bilingual routes.

## Phase 8 — Deployment and post-launch validation

**Objective:** Release safely and validate business outcomes.  
**Tasks:** Preview deployment; stakeholder review; production backup/rollback; deploy only after approval; verify routes, metadata, analytics, forms, media, and language switching on production; monitor field performance and inquiry quality for 30 days.  
**Impact:** Safe launch and real evidence for the next iteration.  
**Dependencies:** Approved release candidate and deploy authorization.  
**Risks:** Cache, GitHub Pages base paths, broken external services, analytics gaps.  
**Complexity:** Small–Medium.  
**Approval:** Explicit final deployment approval required.

## Recommended sequence and decision gates

1. Approve positioning and flagship hierarchy.
2. Approve one bilingual visual study.
3. Approve isolated homepage prototype.
4. Approve five public case narratives.
5. Approve inquiry/privacy flow.
6. Approve launch candidate after QA.
7. Separately authorize deployment.

