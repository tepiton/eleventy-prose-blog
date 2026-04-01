# Implementation: Template Family Alignment

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Pre-alignment baseline | Complete |
| 1 | Template alignment | Complete |

---

## Phase 0: Pre-alignment baseline (Complete)

See: `chronicles/phase-0-baseline.md`

- Prose blog built on Eleventy 3.x
- Posts with syntax highlighting, footnote popovers, RSS feed
- Theme switching (light/dark/system)
- Typekit fonts (neue-kabel, p22-stickley-pro-text) loaded with async preload pattern
- Metadata at root `_data/` — not template-family-aligned
- CSS as 1016-line file using old variable naming conventions (`--background-color`, `--text-color`, etc.)
- Not aligned with eleventy-chapbook/folio/pamphlet/pborenstein.dev conventions

---

## Phase 1: Template family alignment (Complete)

**Objective**: Match the conventions established during pborenstein.dev alignment.

### Tasks

- [x] **1.1** Move `_data/metadata.js` → `content/_data/metadata.js`; delete old `_data/`
- [x] **1.2** Update `eleventy.config.js`: fix data dir (`"../_data"` → `"_data"`), fix `breaks: false`
- [x] **1.3** Rebuild `css/index.css` from .dev CSS base with Typekit font variables
- [x] **1.4** Update `_includes/layouts/base.njk`: font links with comment block, footnote-interactions.js to head, footer updated
- [x] **1.5** Add port `--port=8089` to `start` script in `package.json`
- [x] **1.6** Verify build passes: `npm run build` — 67 files, clean

### Key decisions in this phase

- DEC-001: Typekit fonts kept (p22-stickley-pro-text + neue-kabel) — same CSS variable structure as .dev
- DEC-002: CSS variable names unified with .dev (`--color-bg`, `--color-text`, etc.)
- DEC-003: Metadata moved to `content/_data/` — matches template family convention
- DEC-004: No mermaid — prose blog does not need diagram support

### Open items

- [x] **1.7** Tune --color-muted for contrast: #777 light / #aaa dark
- [x] **1.8** Set measure to min(90%, 60ch) for prose reading width

### What's next

- Visual verify remaining design details
- Typography polish (line-height, heading sizes, blockquote treatment)
