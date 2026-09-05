# Decisions

## DEC-001: Typekit fonts retained

**Decision**: Keep Typekit fonts (p22-stickley-pro-text for body, neue-kabel for headings) rather than switching to Google Fonts.

**Why**: eleventy-prose-blog is the prose blog; the Typekit fonts are part of its distinctive character. The eleventy-tech-blog dev blog uses Google Fonts (JetBrains Mono + Inter). Both sites now use the same CSS variable structure (`--font-body`, `--font-heading`, `--font-mono`), so swapping fonts between them is trivial: change the `<link>` tags and three CSS variable values.

---

## DEC-002: CSS variable names unified with .dev

**Decision**: Renamed all CSS variables to match eleventy-tech-blog conventions (`--color-bg`, `--color-text`, `--color-link`, etc.) replacing the old naming (`--background-color`, `--text-color`, `--text-color-link`, etc.).

**Why**: Both sites are members of the same template family. Unified variable names mean CSS knowledge transfers between sites without mental translation overhead.

---

## DEC-003: Metadata moved to content/_data/

**Decision**: Moved `_data/metadata.js` to `content/_data/metadata.js`.

**Why**: Matches template family convention — content is self-contained and portable. Eleventy discovers `_data/` relative to the input directory automatically when configured with `data: "_data"`.

---

## DEC-004: Original color scheme retained

**Decision**: Keep the original eleventy-prose-blog color scheme — red headings (#B92929), dark navy links (#082840 light / #B92929 dark), gray background (#e6e6e6 light / #1a1d23 dark).

**Why**: This is the site's distinctive visual identity. The .dev warm gray / rust color scheme belongs to the dev blog. These are sibling sites in the same template family but with intentionally different characters.

Note: CSS variable names were unified (`--color-heading`, `--color-link`, etc.) but the values remain site-specific.

---

## DEC-005: markdown-it breaks: true (markdown linebreaks honored)

**Decision**: Keep `breaks: true` in markdown-it config.

**Why**: eleventy-prose-blog prose content was written with single linebreaks used intentionally. `breaks: false` is the template family default but does not suit this site's content.

---

## DEC-007: No mermaid support

**Decision**: Did not add mermaid diagram support.

**Why**: eleventy-prose-blog is a prose blog. Technical diagrams are not part of its content. Mermaid remains a dev-blog-specific feature of eleventy-tech-blog.

---

## DEC-008: Replace demo content wholesale rather than scrub identity post-by-post (2026-09-05)

**Decision**: Deleted all 26 personal-essay demo posts (book reviews, personal reflections) plus a personal-diary-style page, and replaced them with one purpose-built generic post (`welcome.md`). Also stripped real name/email/domain/social handles from `metadata.js`, `package.json`, `CLAUDE.md`, and `about.md`.

**Context**: This repo shipped as a fork of Philip's real personal blog, with his real identity baked into config and his real essays used as "demo content." Flagged in CONTEXT.md as a prerequisite for the mimeo template-parameterization backlog item.

**Alternatives considered**: Scrub identifying details out of the existing essays and keep them as demo content.

**Why not**: No generic equivalent exists for essays that are inherently personal — e.g. a Power Broker book review can't be de-identified into generic template content. Attempting to scrub them post-by-post would either gut the essays or leave revealing traces.

**Consequences**: Template now ships with minimal generic demo content instead of rich example posts. `welcome.md` was written to still demonstrate a real feature of this template (intentional single-linebreak handling under `breaks: true`) rather than being pure boilerplate. Same treatment applied in parallel to eleventy-tech-blog (10 personal posts removed, 4 generic git/eleventy tutorial posts kept).
