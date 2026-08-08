# The Cusp

Thomas Cole's Eleventy-powered blog: **Notes from the edge of obsolescence**.

The site is a native [Eleventy](https://www.11ty.dev/) project with Markdown
posts, Nunjucks templates, tag archives, reading-time metadata, and a custom
responsive theme. Production output is deployed to GitHub Pages at
[thomasjohncole.github.io/11ty-26/](https://thomasjohncole.github.io/11ty-26/).

## Local development

Requires Node.js 22 or later.

```bash
npm ci
npm start
```

Eleventy starts a local server and watches the source files in `src/`.

## Production build

```bash
npm run build
```

The generated site is written to `_site/`. Eleventy's `pathPrefix` and HTML
base plugin make links work under the GitHub Pages project path `/11ty-26/`.

## Add a post

Create a Markdown file in `src/posts/` with front matter like:

```yaml
---
title: Post title
date: 2026-08-08
description: A short summary used on post cards.
readingTime: 3 min read
tags:
  - posts
  - eleventy
  - pages
---
```

The `src/posts/posts.json` directory data file supplies the post layout and
permalink pattern. The `posts` tag adds the entry to the site collection.

## Deployment

Pushes to `main` run `.github/workflows/pages.yml`. The workflow installs exact
dependencies with `npm ci`, builds the site, uploads `_site/` as a Pages
artifact, and deploys it with GitHub's official Pages actions.
