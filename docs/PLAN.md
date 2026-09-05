# Plan: Align eleventy-prose-blog with eleventy template family conventions

## Context

eleventy-prose-blog is a prose blog built on Eleventy. The template family (eleventy-chapbook, eleventy-folio, eleventy-pamphlet) has established conventions for directory structure, config patterns, font loading, CSS architecture, and data organization. The goal is to align eleventy-prose-blog with those conventions so it feels like a coherent member of the family — and so the font swap between .dev (Google Fonts) and .com (Typekit) is trivially achieved by changing the `<link>` tags and three CSS variables.

Key decisions:

- **Fonts**: Typekit (p22-stickley-pro-text + neue-kabel) — same CSS variable structure as .dev, just different values
- **Metadata location**: Move `_data/metadata.js` → `content/_data/metadata.js`
- **CSS**: Rebuild from .dev CSS as base, substituting Typekit font variables
- **Structure**: Preserve prose-blog features (footnote popovers, footnote two-column layout, tags, RSS)
- **No mermaid**: Prose blog does not need diagram support

---

## Phase 1: Template family alignment

**Objective**: Match the conventions established during eleventy-tech-blog alignment.

### Tasks

- [x] **1.1** Move `_data/metadata.js` → `content/_data/metadata.js`; delete old `_data/`
- [x] **1.2** Update `eleventy.config.js`: fix data dir (`"../data"` → `"_data"`), fix `breaks: false`
- [x] **1.3** Rebuild `css/index.css` from .dev CSS base with Typekit font variables
- [x] **1.4** Update `_includes/layouts/base.njk`: font links with comment block, footnote-interactions.js to head, footer updated
- [x] **1.5** Add port `--port=8089` to `start` script in `package.json`
- [x] **1.6** Verify build passes: `npm run build` — 67 files, clean

### Key decisions in this phase

- DEC-001: Typekit fonts kept (p22-stickley-pro-text + neue-kabel) — same CSS variable structure as .dev
- DEC-002: CSS variable names unified with .dev (`--color-bg`, `--color-text`, etc.)
- DEC-003: Metadata moved to `content/_data/` — matches template family convention
- DEC-004: No mermaid — prose blog does not need diagram support

### What's next

- Visual verify in browser
- Design polish to match .dev refinements (nav footer, site footer, background, typography)
