# Spatial portfolio asset provenance

This portfolio uses three generated visual assets. They were made with the built-in image generation tool on 2026-09-23 using the owner-approved reference images in `Tamer-Portfolio-Update-Mission/working/portfolio-redesign-plan-2026-09-23/approved-reference/`. Optimized WebP copies are in `public/media/spatial/`; the PNG masters are kept in the mission pack under `assets/generated-masters/`.

| Asset | Purpose | Source and truth boundary |
| --- | --- | --- |
| `environment-v1.webp` | Dark architectural room, foliage, stone, and reflected light behind the homepage content | Generated environment only. It contains no project imagery, text, interface, or factual project evidence. |
| `glass-planes-v1.webp` | Transparent copper-edged glass foreground | Generated overlay with real alpha; decorative only. |
| `canaan-sketch-demo-v1.webp` | Sketch side of the case-study comparison | Generated illustrative treatment based on the composition of the existing public film frame. It is **not** an original production sketch or evidence of the film's actual process. The UI labels this distinction. |

The color Canaan image is the existing public film frame at `public/media/optimized/here-was-canaan-cover.jpg`. The AI Media Diploma image is an existing public site screenshot at `public/media/selected/ai-media-diploma.webp`. The Signal graphic is semantic HTML and CSS, explicitly labelled as an illustrative diagram. All links, copy, controls, and project images remain separate page elements rather than being baked into a full-page screenshot.

The Athar case uses `public/media/selected/athar.webp`, a frame from the already published Athar reel. On 2026-09-23, Tamer explicitly confirmed his right to reuse this image in the public portfolio. This confirmation covers the selected image; it does not change the publication status of other unreleased media.

## Living Studio addition, 2026-09-23

- The Visual Art gallery publishes 31 editorial selections from Tamer's local `01_Selected_Packs` Midjourney archive. `scripts/build-art-gallery.py` identifies the exact source files and generates 480px/1200px WebP copies without embedded metadata. The gallery labels the collection as AI-assisted visual work. These are artistic images, not documentary photographs or client evidence. Celebrity, brand and identifiable third-party IP examples were excluded from this selection.
- `public/media/selected/caresignal-public.webp` is a capture of the already public CareSignal page and links to the live project. It is project evidence, not a capture of the private assistant backend. `signal-workflow.svg` and `agent-foundry.svg` are labelled editorial illustrations, not screenshots of those systems.
- `motion/src/` contains the editable Remotion composition for four category transitions. The rendered `public/media/motion/*.mp4` files combine existing portfolio symbols with cleared public work imagery. The site loads them on view, with a static fallback and reduced-motion support. Their movement is a portfolio presentation, not evidence of a project's original production process.
- The Canaan player embeds the already published film only after a visitor requests it. The Athar case continues to show the one owner-cleared still image and links to the published reel; no claim is made that the native reel sequence plays inline.
- The unreleased C04 final film/title, C03 animatic, C05 storyboard, and private systems captures remain excluded from this public media release.
