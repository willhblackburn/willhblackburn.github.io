# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal website and blog for Will Blackburn (willhblackburn.com) built with Jekyll and deployed via GitHub Pages. This is a minimalist, content-focused blog about personal development, business, and technology.

## Commands

### Local Development
```bash
# Start local development server (http://localhost:4000)
bundle exec jekyll serve

# Build site for production (output to _site/)
bundle exec jekyll build

# Update dependencies (run periodically for security updates)
bundle update github-pages
```

## Architecture & Structure

### Technology Stack
- **Jekyll 3.9.0** via GitHub Pages gem (~223)
- **Minima theme 2.5.1** with custom modifications
- **Ruby** with Bundler for dependency management
- **GitHub Pages** for automatic deployment from main branch

### Key Directories
- `_posts/` - Blog posts in YYYY-MM-DD-title.md format
- `_includes/` - Reusable template components (header, footer, etc.)
- `_layouts/` - Page templates (default.html, post.html)
- `assets/` - Images and custom CSS (font.css)
- `_site/` - Generated static site (don't edit directly)

### Content Patterns
Blog posts require this front matter:
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
categories: [optional-category]
---
```

Images should be:
- Stored in `/assets/`
- Referenced as `/assets/filename.ext`
- Styled with `style="border-radius:10px"` for consistency

### Customizations
- **Custom font:** HelveticaNeue Light (300) via `/assets/font.css`
- **Modified post layout:** Includes "back home" link
- **Minimal header:** Streamlined design without navigation menu

## Important Notes
- No automated testing or linting - focus on content quality
- Deployment is automatic on push to main branch
- All dependencies must be GitHub Pages compatible
- Keep the minimalist, professional tone in all content
- No Node.js/npm - this is pure Jekyll/Ruby

## Common Tasks

### Creating a New Blog Post
1. Create file in `_posts/` with format: `YYYY-MM-DD-title-slug.md`
2. Add required front matter (layout, title, date)
3. Write content in Markdown
4. Add images to `/assets/` if needed
5. Preview with `bundle exec jekyll serve`

### Troubleshooting
- If `bundle exec jekyll serve` fails, run `bundle install` first
- For Ruby version issues, check `.ruby-version` or use rbenv/rvm
- GitHub Pages build errors appear in Settings > Pages on GitHub