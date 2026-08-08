---
title: A Second Post
date: 2026-08-06
description: How Eleventy collections turn a second Markdown file into navigation, archives, and tag pages.
readingTime: 2 min read
tags:
  - posts
  - eleventy
  - pages
---

One post proves that Markdown renders. A second post reveals the shape of the
publishing system.

Eleventy treats posts as a **collection**. Each Markdown file tagged `posts`
joins that collection, where it can be sorted, reversed, filtered, or passed
into a reusable card template. Adding this file therefore updates several
parts of The Cusp without editing any of them directly.

## One source, several views

During the build, this post appears in:

- the recent-posts section on the home page;
- the complete posts archive;
- the `eleventy` and `pages` tag archives; and
- the older/newer navigation on each individual post.

Nunjucks loops over the same collection for each view:

{% raw %}
```njk
{% for post in collections.posts | reverse %}
  <a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}
```
{% endraw %}

The shared data stays in front matter, while each template decides how much of
it to show.

## Building for a project URL

GitHub Pages hosts this repository below `/11ty-26/`, rather than at the root
of a domain. Hard-coded root links would work in a local preview and fail after
deployment. Eleventy's `pathPrefix` setting and URL-aware filters keep links,
stylesheets, images, and navigation correct in both places.

That is a small detail with an outsized effect: a static site should remain
boringly navigable wherever it is hosted.

The workflow now has the rhythm it needs. Write a Markdown file, add focused
metadata, run the build, and let Eleventy connect the new entry to the rest of
the site.
