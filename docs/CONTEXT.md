---
phase: 1
updated: 2026-09-05
last_commit: 3f10470
---

# Current Focus

De-personalization complete: this repo shipped as a fork of Philip's personal
blog with his real name/email/domain/social handles baked into config, plus
26 real personal essays as demo content. All of that has been replaced with
generic placeholders and purpose-built demo content (committed 3f10470).
Same treatment applied in parallel to eleventy-tech-blog. Prerequisite for
the mimeo template-parameterization backlog item is now satisfied for this repo.

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
- [x] De-personalize: strip real identity from metadata.js/package.json/CLAUDE.md/about.md/docs
- [x] Replace 26 personal-essay demo posts with generic welcome.md
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
- De-personalization (3f10470): no generic substitute exists for essays that
  are inherently personal (e.g. a Power Broker review), so demo content was
  replaced wholesale rather than scrubbed post-by-post. welcome.md
  demonstrates the breaks:true linebreak feature with real paragraphs (not
  hand-wrapped source lines, which broke under this config).

## Next Session

Visual verify remaining design details. Consider typography polish (line-height, heading sizes, blockquote treatment).
