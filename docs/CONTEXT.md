---
phase: 1
updated: 2026-03-31
last_commit: 9ab25dd
---

# Current Focus

Template family alignment complete. Build passes (67 files clean).

## Active Tasks

- [x] Move metadata to content/_data/
- [x] Fix eleventy.config.js (data dir, breaks: false)
- [x] Rebuild CSS with unified variable names + Typekit font vars
- [x] Update base.njk (font loading comment block, footer, footnote-interactions.js)
- [x] Add --port=8089 to package.json
- [x] Verify build passes
- [x] Set up docs/ tracking system

## Context

- CSS rebuilt from pborenstein.dev base, font vars swapped to Typekit (p22-stickley-pro-text body, neue-kabel heading)
- Same color scheme as .dev: #eeede9 warm gray background, same link/muted/border colors
- Typekit loaded with simple `<link rel="stylesheet">` tags (not async preload) under swap-ready comment
- footnote-interactions.js moved to `<head>` (was in body)
- No mermaid

## Next Session

Visual verify in browser. Design polish to match .dev refinements.
