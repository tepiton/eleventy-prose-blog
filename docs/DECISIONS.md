# Decisions

## DEC-001: Typekit fonts retained

**Decision**: Keep Typekit fonts (p22-stickley-pro-text for body, neue-kabel for headings) rather than switching to Google Fonts.

**Why**: pborenstein.com is the prose blog; the Typekit fonts are part of its distinctive character. The pborenstein.dev dev blog uses Google Fonts (JetBrains Mono + Inter). Both sites now use the same CSS variable structure (`--font-body`, `--font-heading`, `--font-mono`), so swapping fonts between them is trivial: change the `<link>` tags and three CSS variable values.

---

## DEC-002: CSS variable names unified with .dev

**Decision**: Renamed all CSS variables to match pborenstein.dev conventions (`--color-bg`, `--color-text`, `--color-link`, etc.) replacing the old naming (`--background-color`, `--text-color`, `--text-color-link`, etc.).

**Why**: Both sites are members of the same template family. Unified variable names mean CSS knowledge transfers between sites without mental translation overhead.

---

## DEC-003: Metadata moved to content/_data/

**Decision**: Moved `_data/metadata.js` to `content/_data/metadata.js`.

**Why**: Matches template family convention — content is self-contained and portable. Eleventy discovers `_data/` relative to the input directory automatically when configured with `data: "_data"`.

---

## DEC-004: Original color scheme retained

**Decision**: Keep the original pborenstein.com color scheme — red headings (#B92929), dark navy links (#082840 light / #B92929 dark), gray background (#e6e6e6 light / #1a1d23 dark).

**Why**: This is the site's distinctive visual identity. The .dev warm gray / rust color scheme belongs to the dev blog. These are sibling sites in the same template family but with intentionally different characters.

Note: CSS variable names were unified (`--color-heading`, `--color-link`, etc.) but the values remain site-specific.

---

## DEC-005: markdown-it breaks: true (markdown linebreaks honored)

**Decision**: Keep `breaks: true` in markdown-it config.

**Why**: pborenstein.com prose content was written with single linebreaks used intentionally. `breaks: false` is the template family default but does not suit this site's content.

---

## DEC-007: No mermaid support

**Decision**: Did not add mermaid diagram support.

**Why**: pborenstein.com is a prose blog. Technical diagrams are not part of its content. Mermaid remains a dev-blog-specific feature of pborenstein.dev.
