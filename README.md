# pborenstein.com

Philip Borenstein's personal blog built with Eleventy (11ty) v3.1.0.

## Features

- **Static Site Generation**: Fast, secure static site with Eleventy and Nunjucks templating
- **Interactive Footnotes**: In-place popovers that appear on click without breaking reading flow
- **Theme System**: Light/dark/system preference themes with CSS variables
- **Typography**: Adobe Typekit fonts (neue-kabel, p22-stickley-pro-text) with OpenType features
- **Content Management**: Markdown posts with front matter, tags, and automatic page generation
- **Performance**: Image optimization (AVIF/WebP), lazy loading, and optimized builds
- **Feeds**: RSS/Atom feeds with custom XSL styling
- **Mobile Responsive**: Touch-optimized interactions and responsive design
- **Accessibility**: ARIA support, keyboard navigation, and screen reader compatibility

## Development

### Prerequisites

- Node.js >= 18
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Available Commands

- `npm start` - Development server with hot reload
- `npm run build` - Production build
- `npm run build-nocolor` - Build without colors (CI-friendly)
- `npm run debug` - Debug build with verbose logging
- `npm run debugstart` - Debug development server
- `npm run benchmark` - Performance benchmarking

## Architecture

### Directory Structure

```
content/          # Markdown content (posts, pages)
_includes/        # Nunjucks templates and layouts
_data/           # Global data files
_config/         # Eleventy configuration modules
css/             # Stylesheets
js/              # JavaScript modules
public/          # Static assets (copied to root)
_site/           # Generated output directory
```

### Key Technologies

- **Eleventy 3.1.0**: Static site generator with ES modules
- **Nunjucks**: Template engine for layouts and includes
- **markdown-it**: Markdown processing with footnote support
- **PrismJS**: Syntax highlighting for code blocks
- **JSDOM**: Server-side DOM manipulation for content enhancement

### Content System

- **Posts**: `content/posts/` with front matter and Markdown
- **Pages**: `content/pages/` for static content
- **Tags**: Automatic tag page generation
- **Drafts**: Excluded from production builds with `draft: true`

### Interactive Features

#### Footnote Popovers
- Click footnote references to show content in positioned popovers
- Smart positioning adapts to viewport constraints
- Responsive arrows point toward footnote references
- Mobile-optimized with bottom positioning
- Falls back to traditional footnotes without JavaScript

#### Theme Switching
- Light, dark, and system preference modes
- CSS custom properties for consistent theming
- Persistent user preference with localStorage
- Automatic system preference detection

## Browser Support

- Modern browsers with ES6 module support
- Progressive enhancement ensures core functionality without JavaScript
- Optimized for mobile devices including iPad Safari
- Accessibility tested with screen readers

## License

Personal blog content and code. See individual files for licensing details.