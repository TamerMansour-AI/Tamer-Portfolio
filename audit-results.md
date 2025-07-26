# Project Audit for Tamer-Portfolio

Date: 26 July 2025

## Current repository structure
- All site files are served from the `docs/` directory. This includes static HTML pages (`index.html`, `projects/index.html`, `media/index.html`, `contact/index.html`) and a separate `ar/` directory with Arabic copies of these pages.
- There is no source directory or build system; editing HTML inside `docs/` directly updates the GitHub Pages site. The `docs/assets` folder holds large images and videos. There is no `/content/` directory.

## Missing sections & features
- **Research and training pages**: There are no dedicated pages for research outputs, workshops or consulting services.
- **Dynamic project listings**: The projects page only contains a placeholder for one project (Atyaf Al Ard). There is no way to add projects via Markdown/JSON.
- **Media gallery**: The media page lists headings for images, videos and audio but no actual gallery or player. Video/audio tags show fallback messages.
- **Blog/articles**: There is a `blog` directory with only an `index.html` stub. No articles or Markdown support exist.
- **Contact form**: The contact page lists contact info but does not include a functional form or Formspree integration.
- **SEO and metadata**: Pages lack meta descriptions, Open Graph tags, a sitemap.xml, robots.txt, favicons, and analytics script placeholders.
- **Automation and developer experience**: There are no GitHub Actions for build/deploy, no pre-commit hooks (prettier/eslint), and no ISSUE or PULL REQUEST templates.
- **i18n**: Arabic content is duplicated under `docs/ar` instead of being generated via a translation layer. There is no language switcher hook.
- **Accessibility & performance**: Many images lack alt text. Assets are large and not lazy-loaded or compressed. No 404 page or error handling exists.

## Broken or incomplete links
- Navbar links (Projects, Media, Contact) either point to anchor sections on the home page or to pages with minimal content.
- Buttons such as **View All Projects**, **Enter Gallery**, and **Read the Blog** link to pages that currently have only placeholder text.
- Social icon placeholders appear without real links or icons.

## General observations
- The codebase uses Tailwind CSS classes in the HTML, but there is no central styling system (variables, utility classes or dark-mode handling).
- The bilingual structure doubles maintenance effort; a templating system like 11ty could generate both locales from shared templates and content.
- There are no tests or automated quality checks. The absence of CI/CD means manual edits to `docs/` are required for any change.
- The repository lacks a detailed README explaining development workflow, content updates, or how to contribute.
- Without a Lighthouse audit, exact scores are unknown, but the current site is unlikely to achieve ≥90 on performance, accessibility, best practices, and SEO due to the above shortcomings.

## Recommendations
- Migrate to a static site generator such as **Eleventy (11ty)** to separate content from layout and support collections for projects, research, media, etc.
- Define a content model under `/content/` with Markdown front-matter for projects, research papers, media items and training/consulting offerings.
- Build reusable templates and components for hero sections, cards and modals. Implement dark-mode using CSS variables and `prefers-color-scheme`.
- Implement i18n via a `/i18n/` directory and a language switcher stub, rather than duplicating pages.
- Add a Formspree-powered contact form with a honeypot field and success message modal.
- Optimize images and generate low-quality placeholders during the build using `sharp`. Lazy-load media assets.
- Integrate SEO (meta tags, OpenGraph), favicons, a sitemap.xml and robots.txt. Provide an analytics snippet placeholder (e.g. Plausible).
- Set up GitHub Actions to install dependencies, build the site and deploy to `gh-pages` on merge. Add pre-commit hooks for prettier/eslint.
- Create ISSUE and PULL REQUEST templates, and update the README with setup instructions, roadmap, and contribution guidelines.
- After implementing improvements, run Lighthouse audits to verify that performance, accessibility, best practices and SEO scores meet or exceed 90.
