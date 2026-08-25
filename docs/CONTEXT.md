---
phase: 1
updated: 2026-08-24
last_commit: 03c4529
---

# Current Focus

GitHub Pages deploy pipeline set up and stabilized (PATHPREFIX fixes, package-lock tracked for npm ci). Dependency maintenance: eleventy-img bumped 6→7.

## Active Tasks

- [x] Template family alignment (metadata, config, CSS, base.njk)
- [x] Restore original color scheme (red headings, navy links)
- [x] Restore breaks: true
- [x] Tune --color-muted: #777 light / #aaa dark
- [x] Set measure to min(90%, 60ch)
- [x] Rename repo to eleventy-prose-blog; write template README
- [x] Add GitHub Pages deploy workflow; fix PATHPREFIX for GH Pages
- [x] Track package-lock.json for npm ci in Pages workflow
- [x] Bump @11ty/eleventy-img 6.0.4 → 7.0.0; verified build + avif/webp output
- [ ] Visual verify remaining design details
- [ ] Typography polish (line-height, heading sizes, blockquote treatment)

## Context

- Original colors retained: #B92929 headings, #082840 links light / #B92929 dark
- --color-muted: #777 light, #aaa dark (tuned for contrast on both backgrounds)
- measure: min(90%, 60ch) — ch-based for prose serif readability
- breaks: true — prose content uses single linebreaks intentionally
- No mermaid; this is the prose counterpart to eleventy-tech-blog
- pages.yml was synced to match other eleventy templates then reverted (4bc8359/f406b8c) — this repo's deploy workflow intentionally diverges from the shared one
- ghpages scripts removed from package.json (72a8da2)

## Next Session

Visual verify remaining design details. Consider typography polish (line-height, heading sizes, blockquote treatment).
