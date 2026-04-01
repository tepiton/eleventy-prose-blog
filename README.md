# eleventy-prose-blog

An Eleventy v3 starter for personal prose blogs. Designed for writers who want a polished reading experience: footnote popovers, light/dark theming, RSS feeds, and image optimization.

## Quick start

```
git clone <this-repo> my-project
cd my-project
npm install
npm run start
```

Then open `http://localhost:8089`.

## Customization

### Site metadata

Edit `content/_data/metadata.js`:

```js
export default {
  title: "Your Blog",
  siteName: "yoursite.com",
  url: "https://example.com/",
  language: "en",
  description: "A description of your blog.",
  author: {
    name: "Your Name",
    email: "you@example.com",
    url: "https://example.com/about/",
  },
}
```

Note: `metadata.js` lives inside `content/_data/` so the entire `content/` directory is self-contained and portable.

### Writing posts

Add Markdown files to `content/posts/`. Each post needs front matter:

```yaml
---
title: The Title of This Post
date: 2025-01-15
tags:
  - writing
  - topic
description: Optional. Used in the HTML meta description and feed.
---
```

- `date` controls sort order
- `tags` generate automatic tag pages
- Add `draft: true` to exclude from production builds

### Footnotes

Footnotes render as interactive in-place popovers. Write standard Markdown footnotes:

```markdown
This sentence has a footnote.[^1]

[^1]: The footnote content appears in a popover on click.
```

Popovers appear above the reference on desktop and as a fixed bottom panel on mobile. Falls back to traditional footnotes without JavaScript.

### Themes

The site supports light, dark, and system-preference modes. Users switch via the header dropdown; preference is persisted in localStorage.

Colors and fonts are CSS custom properties at the top of `css/index.css`:

```css
:root {
  --font-body: p22-stickley-pro-text, neue-kabel, Palatino, Georgia, serif;
  --font-heading: neue-kabel, 'Gill Sans', 'Helvetica Neue', sans-serif;
  --color-bg: #fffff8;
  --color-text: #1a1a18;
}
```

**Adobe Fonts (Typekit):** This template uses `p22-stickley-pro-text` and `neue-kabel`. The kit IDs are baked into `_includes/layouts/base.njk` under a `<!-- fonts: swap these links -->` comment. To use different fonts, replace the Typekit `<link>` tags and update the CSS variables.

## Project structure

```
content/
  _data/
    metadata.js              # Title, author, URL, feed config
  posts/
    my-first-post.md
    ...
  pages/                     # Static pages (About, etc.)
_includes/
  layouts/
    base.njk                 # HTML shell with theme switcher
    post.njk                 # Post layout with footnote support
_config/
  filters.js                 # Date formatting, tag filtering
css/
  index.css                  # All styles, theme variables
js/
  theme-switcher.js          # Theme persistence
  footnote-interactions.js   # Popover logic
```

## npm scripts

| Command | Description |
|:--------|:------------|
| `npm run start` | Dev server at `0.0.0.0:8089` with live reload |
| `npm run build` | Production build to `_site/` |
| `npm run debug` | Build with Eleventy debug output |
| `npm run benchmark` | Performance benchmarking |

## Features

- **Footnote popovers** — in-place popover system with smart viewport positioning, falls back gracefully
- **Theme switching** — light, dark, system preference, persisted in localStorage
- **RSS/Atom feeds** — with custom XSL styling
- **Image optimization** — automatic AVIF/WebP generation with lazy loading
- **Syntax highlighting** — PrismJS
- **Tag pages** — automatic generation from post front matter
- **Drafts** — excluded from production builds via `draft: true`

## Deploy

Netlify and Vercel config files are included. For GitHub Pages, add a `.github/workflows/pages.yml` build workflow.
