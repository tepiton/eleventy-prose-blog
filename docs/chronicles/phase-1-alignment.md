# Phase 1: Template Family Alignment

## Entry 1 — Initial alignment — 2026-03-31

**What**: Aligned eleventy-prose-blog with template family conventions established in eleventy-tech-blog.

**Why**: Both sites are members of the same template family. Unified structure makes font swaps and cross-site CSS changes trivial.

**How**:
- Moved metadata to `content/_data/`
- Rebuilt CSS from eleventy-tech-blog base with Typekit font variables
- Unified CSS variable naming (`--color-bg`, `--color-text`, `--font-body`, etc.)
- Updated base.njk: swap-ready font comment, footnote-interactions.js to head
- Added --port=8089

**Decisions**: DEC-001 (Typekit retained), DEC-002 (unified var names), DEC-003 (metadata location), DEC-004 (original colors), DEC-005 (breaks: true), DEC-007 (no mermaid)

**Commits**: 7455a9a, 4d3a20c

---

## Entry 2 — Muted text contrast + measure — 2026-03-31

**What**: Tuned `--color-muted` for readability in both themes; set prose measure.

**Why**: #666 in dark mode was nearly invisible on #1a1d23. Light mode #888 was too faint. 40rem measure was calibrated for monospace (.dev); prose serif needs ch-based width.

**How**: `--color-muted`: #777 light / #aaa dark. `--measure`: min(90%, 60ch).

**Files**: `css/index.css`

---

## Entry 3 — Repo renamed to eleventy-prose-blog — 2026-04-01

**What**: Renamed directory from `eleventy-prose-blog` to `eleventy-prose-blog`. Rewrote README as a generic template README.

**Why**: Making this a distributable template in the eleventy- family alongside eleventy-chapbook, eleventy-folio, eleventy-pamphlet, and the new eleventy-tech-blog.

**How**: Directory rename; README rewritten following the pattern of the other eleventy- template READMEs (quick start, customization, structure, npm scripts, features, deploy).

**Files**: `README.md`

---

## Entry 4 — De-personalization pass — 2026-09-05

**What**: Deleted 26 personal-essay demo posts and a personal-diary-style page; added generic `welcome.md`. Stripped Philip's real name/email/domain/social handles from `metadata.js`, `package.json`, `CLAUDE.md`, `about.md`.

**Why**: Prerequisite for mimeo template-parameterization backlog item — this repo shipped as a fork of a real personal blog with real identity and real essays baked in as demo content. See DEC-008.

**How**: Applied in parallel to eleventy-tech-blog in another session. Verified `npm run build` clean before committing. `welcome.md` written to demonstrate `breaks: true` intentional-linebreak behavior rather than pure boilerplate.

**Files**: commit `3f10470` (de-personalization), `988a399` (CONTEXT.md update)
