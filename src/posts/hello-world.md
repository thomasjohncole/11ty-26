---
title: Hello World
date: 2026-08-02
description: Starting a small, durable publishing workflow with Markdown and Eleventy.
readingTime: 2 min read
tags:
  - posts
  - eleventy
  - pages
---

Every site starts with a first page. This one starts with a folder of Markdown,
a few Nunjucks templates, and [Eleventy](https://www.11ty.dev/) turning them
into a set of plain files.

That plainness is the appeal. There is no database to maintain and no
application server waiting behind each request. A build transforms the source
into HTML once; GitHub Pages can then serve the result from the edge.

## Markdown in, HTML out

This post lives under `src/posts/`. Its front matter gives Eleventy the title,
date, description, and tags used throughout the site:

```yaml
---
title: Hello World
date: 2026-08-02
tags:
  - eleventy
  - pages
---
```

The words below that block are ordinary Markdown. Eleventy combines the
rendered content with a Nunjucks layout, then writes a permanent URL at
`posts/hello-world/index.html`.

## A deliberately small toolchain

The entire production build is one command:

```bash
npm run build
```

CSS, images, and a tiny navigation script pass through alongside the generated
pages. The output does not need Node.js after it is built. That keeps the site
portable: it can move to nearly any static host without changing how the
content is written.

> A useful website can be technically modest without feeling unfinished.

This first post also gives the templates something real to connect: the home
page can show recent writing, tag pages can gather related notes, and the next
post can link back here.
