# Design System — Contemporary Palestinian Cultural Journal

## Design thesis

An authored bilingual publication from Ramallah: cultural without decorative cliché, editorial without becoming academic, cinematic without heavy autoplay, and commercial without agency-template language.

## Tokens

- Deep ink: `#152019`
- Secondary ink: `#223126`
- Warm paper: `#E7E1D1`
- Light paper: `#F2ECDF`
- Oxidized copper: `#A45138`
- Olive: `#66715C`
- Signal red: `#8F2F27`
- Light copper on dark: `#F0B49E`

## Typography

- English display: Fraunces 500/600.
- English UI/body: Instrument Sans 400/600/700.
- Arabic display/UI/body: IBM Plex Sans Arabic 400/600/700.
- Fonts are self-hosted through Fontsource packages.

Arabic has independent headings, RTL composition, reading rhythm, image order, and line length. It is not mechanically mirrored.

## Layout

- Maximum editorial field: 76 rem.
- Large chapters with thin rules and asymmetric label/content columns.
- Flagship work alternates media and dark evidence panels.
- Mobile collapses to one authored column without horizontal interaction.
- Cards are used only where comparison is useful; the homepage is not a uniform card wall.

## Motion and media

- Motion is opt-in.
- The identity film is poster-first, `preload="none"`, user initiated, controlled, muted only by user choice, and covered by reduced-motion CSS.
- No scroll-jacking, decorative background motion, or autoplay.

## Accessibility

- 3 px focus ring with offset.
- Skip link, semantic landmarks, visible button/link affordance.
- Light copper is used on dark panels to meet contrast.
- Menu focus is contained while open and returned on Escape.

