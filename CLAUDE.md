# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Philip Borenstein's personal blog built with Eleventy (11ty) v3.1.0. The site features:
- Static site generation with Nunjucks templating
- Blog posts with footnote support and syntax highlighting
- Theme switching (light/dark/system preference)
- RSS/Atom feeds with custom styling
- Image optimization and responsive images
- Tag-based organization

## Essential Commands

```bash
# Development server with hot reload
npm start

# Build for production
npm run build

# Build without colors (useful for CI)
npm run build-nocolor

# Debug build with verbose logging
npm run debug

# Debug development server
npm run debugstart

# Performance benchmarking
npm run benchmark
```

## Architecture Overview

### Directory Structure
- **Input directory**: `content/` (configured in eleventy.config.js)
- **Output directory**: `_site/`
- **Templates**: `_includes/layouts/` (Nunjucks .njk files)
- **Data**: `_data/` (global data files)
- **Config**: `_config/` (filters and other configuration)
- **Assets**: `public/` (copied to root), `css/`, `js/`

### Key Configuration
- **Main config**: `eleventy.config.js` - ES modules, plugins, filters, and build settings
- **Site metadata**: `_data/metadata.js` - centralized site information, author details, feed config
- **Filters**: `_config/filters.js` - date formatting, array manipulation, tag filtering

### Template System
- **Base layout**: `_includes/layouts/base.njk` - main HTML structure with theme switcher
- **Content processing**: Uses Nunjucks with Markdown support
- **CSS bundling**: Inline CSS via Eleventy's bundle plugin (styles included in templates)

### Content Management
- **Posts**: `content/posts/` with front matter and Markdown
- **Pages**: `content/pages/` for static pages
- **Drafts**: Controlled by `draft: true` front matter (excluded in production builds)
- **Tags**: Automatic tag pages generated from post front matter

### Theme System
- **CSS variables**: All theme colors defined in `css/index.css` with light/dark variants
- **Theme switching**: JavaScript in `js/theme-switcher.js` with localStorage persistence
- **System preference**: Respects `prefers-color-scheme` media query
- **User override**: Manual theme selection via dropdown in header

### Markdown Enhancements
- **Footnotes**: Interactive in-place popovers with dynamic arrow positioning and mobile optimization
- **Typography**: Typographer and line breaks enabled
- **Syntax highlighting**: PrismJS integration with custom theme
- **Content separation**: Custom `separateFootnotes` filter using JSDOM for footnote enhancement

### Build Pipeline
- **Image optimization**: Auto-generation of AVIF/WebP formats with lazy loading
- **Asset copying**: Public folder contents, JavaScript files, and XSL stylesheets
- **Watch targets**: CSS, JS, and image files for development hot reload
- **Bundle system**: CSS and JS bundling with per-page support

### Development Notes
- **Node requirement**: >=18 (specified in package.json)
- **Module system**: ES modules throughout (type: "module" in package.json)
- **Development server**: Shows all network interfaces for device testing
- **Font loading**: Adobe Typekit fonts (neue-kabel, p22-stickley-pro-text)

---

## Recent Updates

### CSS Modernization and Enhancement (June 2025)
**Commit**: `fa84516` - Update CSS with improvements while preserving typography (#20)  
**Date**: June 17, 2025

**Overview**: Comprehensive update to `css/index.css` implementing modern web standards and accessibility improvements while carefully preserving the site's distinctive typography character.

**Key Improvements Applied**:

#### Theme and Color Enhancement
- **Enhanced dark theme colors**: Improved contrast with better color values
  - `--dark-gray-50: #666` (improved readability)
  - `--dark-background: #1a1d23` (better contrast)
  - `--dark-table-even: #2a2f36` (subtle table row differentiation)
- **Tag contrast fixes**: Resolved color accessibility issues in both light and dark themes

#### Mobile Optimization
- **Responsive font weights**: Dynamic font weight adjustments for screens ≤480px
- **Mobile-specific sizing**: Optimized code block and content sizing for small screens
- **Readability enhancements**: Better text flow and spacing on mobile devices

#### Code and Syntax Highlighting
- **Prism.js improvements**: Enhanced styling with proper font family inheritance
- **Specificity overrides**: Better CSS cascade management for code highlighting
- **Code word-breaking**: Changed from `break-all` to `keep-all` for improved text flow
- **Mermaid diagram scaling**: Added responsive scaling for mobile devices

#### Layout and Structure
- **Table styling consolidation**: Unified and improved table cell padding rules
- **CSS organization**: Better structured variables and rule organization

**Typography Preservation Strategy**:
- **Adobe Typekit fonts maintained**: `p22-stickley-pro-text` (serif) and `neue-kabel` (sans-serif)
- **Font feature settings preserved**: Complex OpenType features for typographic richness
- **Serif-first approach**: Maintained serif as primary body font for distinctive character

**Technical Approach**: Selective modernization - adopted contemporary web standards and accessibility improvements while maintaining the site's unique typographic identity. This balanced approach ensures technical excellence without compromising visual character.

### Interactive Footnote Popovers (July 2025)
**Commits**: `7064188`, `e3533bb`, `e993e66`, `be26a45` - Implement in-place footnote popovers with JavaScript enhancement (#21, #22)  
**Date**: July 27, 2025

**Overview**: Complete replacement of traditional bottom-of-page footnotes with interactive popovers that appear directly above footnote references, providing seamless reading experience without breaking context.

**Key Features Implemented**:

#### Interactive Popover System
- **Click-based activation**: Footnotes open on click/tap with smooth animations
- **Dynamic positioning**: Smart positioning that adapts to viewport constraints
- **Responsive arrows**: Point toward footnote reference regardless of popover position
- **Touch optimization**: Enhanced for iPad and mobile devices with fixed bottom positioning

#### Technical Architecture
- **JavaScript-only enhancement**: Preserves original HTML structure for perfect inline formatting
- **Progressive enhancement**: Falls back to traditional footnotes if JavaScript fails
- **External module loading**: Uses ES6 modules to avoid inline script execution issues
- **JSDOM server processing**: Adds data attributes for JavaScript enhancement during build

#### Cross-Device Experience
- **Desktop (>640px)**: Positioned popovers with directional arrows
- **Mobile (≤640px)**: Fixed bottom positioning with full-width layout
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility

#### Files Added/Modified
- **`js/footnote-interactions.js`**: Complete popover management system
- **`eleventy.config.js`**: Enhanced `separateFootnotes` filter for data attribute injection
- **`css/index.css`**: Popover styling with theme integration and responsive design
- **`_includes/layouts/post.njk`**: Template integration with fallback footnotes section

**User Experience**: Footnotes now appear instantly in context, eliminating the need to scroll to page bottom and back. The system maintains reading flow while providing rich footnote content with professional styling that matches the site's design system.

**Technical Achievement**: Solved iPad Safari JavaScript execution issues from previous implementation attempt by using external ES6 modules instead of inline scripts, achieving reliable cross-device functionality.