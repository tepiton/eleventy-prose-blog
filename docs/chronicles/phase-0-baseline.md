# Phase 0: Pre-alignment baseline

**Date**: 2026-03-31  
**Commit**: 9ab25dd

## State of the repo at start of alignment work

### What existed

- Prose blog built on Eleventy 3.1.0
- Posts covering books, films, observations, technology
- Footnote popovers (interactive, JavaScript-enhanced) from July 2025 work
- Two-column footnote layout for longer footnote sets
- Syntax highlighting (PrismJS)
- Theme switching (light/dark/system) via theme-switcher.js
- RSS/Atom feed at `/feed/feed.xml`
- Tag-based organization
- Image optimization (AVIF/WebP)

### Font loading

Typekit fonts loaded via async preload pattern:
```html
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
<link rel="preload" href="https://use.typekit.net/ztn6rcs.css" as="style" onload="...">
<link rel="preload" href="https://use.typekit.net/pgn7ley.css" as="style" onload="...">
<noscript>...</noscript>
```

### CSS state

- 1016-line `css/index.css`
- Old variable naming convention (`--background-color`, `--text-color`, `--light-background`, etc.)
- Old font variable names (`--font-family-serif`, `--font-family-monospace`, `--font-sans-serif`)
- Red heading/link color scheme (#B92929)
- Footer using three `<div>` children with `justify-content: space-between`

### Config state

- `_data/metadata.js` at root — not template-family-aligned
- `eleventy.config.js` had `data: "../_data"` pointing to root
- `breaks: true` in markdown-it config
- No `--port` on dev server

### What was not present

- `docs/` tracking system
- Template family CSS variable conventions
- Comment-block font loading pattern
