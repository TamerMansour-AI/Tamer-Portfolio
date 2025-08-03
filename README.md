# Tamer Portfolio

This repository houses the source code for **Tamer Mansour’s** personal portfolio site. The site is built with [Eleventy](https://www.11ty.dev/), a lightweight static site generator that makes it easy to manage content via Markdown and customise layouts with Nunjucks templates.

## Structure

- **`.eleventy.js`** – Configuration that tells Eleventy where to find input files, what the output directory is, how to copy static assets and which collections to generate.
- **`src/`** – Main source directory containing the following:
  - **`layouts/`** – Reusable page layouts used by templates (e.g. `base.njk`, `page.njk`).
  - **`content/`** – Markdown content organised by type (media, projects, research, training‑consulting, blog). Each file begins with front‑matter fields such as `title`, `date`, `tags` and `excerpt`.
  - **`styles.css`** – Site‑wide styles using CSS variables for a light/dark colour scheme and an olive‑green accent.
  - Individual `.njk` templates for pages like the home page, projects, media, gallery, research, training & consulting, blog, about and contact.
- **`src/content/Media`** – Place images and video files in this folder. They will be copied verbatim into the built site at `Media/`.

## Running locally

To view the site locally, install dependencies and start the Eleventy dev server:

```bash
npm install
npx @11ty/eleventy --serve
```

Eleventy will watch for changes in the `src/` directory and rebuild automatically. The site will be served at `http://localhost:8080/Tamer-Portfolio/` with the correct path prefix.

## Adding content

To add a new media item, create a Markdown file in `src/content/media` with front‑matter fields like this:

```yaml
---
title: Your Media Title
date: 2025-08-03
tags:
  - media
  - film
excerpt: >
  A one‑line summary of the media piece.
embed_url: https://www.youtube.com/embed/…
---
Write a longer description here.
```

Use similar patterns for projects (`src/content/projects`), research (`src/content/research`), training & consulting (`src/content/training-consulting`) and blog posts (`src/content/blog`). Tags determine which collection a file belongs to.

After adding or editing content, commit your changes and push to the `main` branch. A GitHub Action will build the site and publish the output to the `gh-pages` branch. Make sure that GitHub Pages is configured to serve from the `gh-pages` branch with the `/Tamer-Portfolio` path prefix.

## Deploy

The site is automatically deployed via a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. On each push to `main`, the workflow installs dependencies, builds the site and pushes the `dist/` folder to the `gh-pages` branch.

## Contributing

Feel free to open issues or pull requests to suggest improvements or report bugs. For significant changes, please open an issue first to discuss what you would like to change.