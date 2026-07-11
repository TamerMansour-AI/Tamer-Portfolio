# Current Site Scorecard

Scores reflect the repository, built site, live site, screenshots, and production-preview measurements on 2026-07-11. They are not generic template scores.

| Area | Score | Evidence |
|---|---:|---|
| Positioning clarity | 68 | The hero explains AI stories, learning products, and systems, but addresses founders, cultural teams, educators, and institutions while listing four output families. The unifying point of view is weaker than the range. |
| First impression | 72 | Strong portrait, clear headline, Ramallah/remote context, and immediate CTAs. A duplicate wide portrait appears before the main proposition, and the first screen still feels like a polished template rather than an authored world. |
| Visual identity | 58 | Consistent ink/sand/gold palette, but Inter + rounded glass cards + pills + radial glow are generic AI/startup conventions. Palestinian and editorial identity live mainly in copy and content. |
| Originality | 61 | The actual project mix is original; the interface system makes very different work look structurally similar. |
| UX clarity | 64 | Labels and routes are understandable, but the homepage repeats lanes, capabilities, work, proof, Pinterest, and services. Its 1,341 words and 64 links overstate the amount of choice needed. |
| Navigation | 76 | Six clear English primary links plus language switch. Workshops and experiments are buried, Arabic has an extra Blog item, and current-page semantics rely on color instead of `aria-current`. |
| Portfolio storytelling | 60 | Cards include context, description, tags, and links, but most lack a complete challenge/role/process/outcome/evidence arc. “Selected” work is too broad to feel selected. |
| Credibility | 69 | Named projects, public links, live labs, real institutions/audiences, and client-safe excerpts build trust. There are few attributed testimonials, outcome metrics, production credits, dates, or explicit role boundaries. |
| Conversion potential | 55 | Repeated project/WhatsApp CTAs create availability, but the contact page has no form, booking, service selector, qualification questions, response expectation, analytics, or confirmation. |
| Mobile usability | 66 | No visible overlap, working menu, responsive cards, and full-width CTAs. The English homepage is 17,047 px tall at 360 px, with dense small text and repeated card rhythm. |
| Accessibility | 82 | Lighthouse scored 100; code has a skip link, focus styles, semantics, alt text, language/direction, and safe links. Manual risks: looping autoplay video has no pause/reduced-motion path; mobile menu lacks Escape/focus management/dynamic label; image-contained service text is inaccessible content. |
| Performance | 48 | Production-preview Lighthouse: 69 mobile and 75 desktop; LCP 39.6 s mobile and 6.8 s desktop; 23–25 MB homepage transfer. Public media totals 106.8 MB; hero video is 17.28 MB and poster 7.3 MB. |
| SEO | 84 | Lighthouse 100, sitemap, robots, canonical, JSON-LD, Open Graph, Twitter cards, and hreflang foundation. Weaknesses: favicon 404, inconsistent root vs `/en/` URLs, missing Arabic alternate mapping for existing `/ar/proof/`, generic SVG social image, and GitHub project-path brand URL. |
| Frontend quality | 74 | Astro static build, minimal JavaScript, reusable components/data, and successful 34-route build are strong. No tests or budgets; inline image fallback script; duplicated locale maps; repeated large page templates; dependencies need review. |
| Backend architecture | 70 | A static site is appropriate and has low operational risk. There is no lead endpoint, CMS, analytics, or structured content service, so it cannot support conversion tracking or non-code publishing yet. |
| Maintainability | 65 | Data modules and components help, but homepage files are 350/326 lines, `work.ts` is 361 lines, locale route maps are duplicated, and English/Arabic pages repeat presentation logic. |
| Scalability | 58 | Adding another project can require data edits, page decisions, metadata changes, language-map updates, and manual parity checks. No schema validation, content collections, CMS, or generated locale routing exists. |
| Arabic experience | 73 | Real RTL layout, Arabic navigation/copy/type, and multiple localized pages. Workshop and NotebookLM parity is missing; visual art direction is mostly a mirrored version; metadata mapping misses at least one existing Arabic alternate. |
| English experience | 80 | Complete core buyer journey and detailed proof. A few duplicate `/en/*` routes create URL ambiguity, and long explanatory copy reduces pace. |
| Overall portfolio effectiveness | 64 | Strong proof, stable implementation, and clear capability; weak hierarchy, generic visual grammar, shallow case-study outcomes, heavy media, and an underbuilt lead funnel limit premium perception and conversion. |

## Measurement notes

- Production build: 34 pages, successful.
- Internal built links: no missing targets.
- Homepage density: 1,341 words, 26 articles, 64 links, 45 headings.
- Work page density: 1,095 words, 22 articles, 63 links.
- Proof page density: 1,226 words, 29 articles, 52 links.
- Contact page: 110 words, 0 forms.
- Screenshot heights: homepage desktop 8,833 px; homepage mobile 17,047 px; Arabic mobile 13,429 px.
- Automated scores are one input only. The accessibility score intentionally accounts for manual issues Lighthouse does not flag.

