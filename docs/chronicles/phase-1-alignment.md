# Phase 1: Template Family Alignment

## Entry 1 — Initial alignment — 2026-03-31

**What**: Aligned pborenstein.com with template family conventions established in pborenstein.dev.

**Why**: Both sites are members of the same template family. Unified structure makes font swaps and cross-site CSS changes trivial.

**How**:
- Moved metadata to `content/_data/`
- Rebuilt CSS from pborenstein.dev base with Typekit font variables
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
