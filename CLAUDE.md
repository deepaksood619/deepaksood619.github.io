# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal knowledge base built with Docusaurus 3.8, containing 2600+ markdown notes organized by topic and deployed to GitHub Pages. The content covers computer science, AI/ML, databases, algorithms, book summaries, economics, psychology, and more.

**Key characteristics:**
- Large-scale documentation site (280k+ lines of markdown)
- Note-taking follows Zettelkasten method
- Primary editing done in Obsidian, published via Docusaurus
- Auto-deploys on push to master branch

## Development Commands

```bash
# Install dependencies
npm ci

# Start dev server (http://localhost:3000)
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clear Docusaurus cache
npm run clear

# Pre-commit checks (runs automatically via hooks)
pre-commit run --all-files
```

**Environment requirements:**
- Node.js ≥18.0
- For large builds, set: `NODE_OPTIONS=--max_old_space_size=4096`

## Content Structure

All content lives in `/docs` with topic-based folders:
- `ai/` - ML algorithms, LLM, computer vision, NLP, deep learning
- `algorithms/`, `data-structures/` - CS fundamentals
- `databases/`, `databases-sql/`, `databases-nosql/`, `data-warehouses/` - Database topics
- `devops/`, `cloud/`, `frontend/` - Engineering topics
- `book-summaries/` - Book notes
- `economics/`, `psychology/`, `management/` - Non-technical knowledge
- `about-deepak-sood/` - Personal profile and experience

**Navigation:** Sidebar auto-generates from folder structure (configured in `sidebars.js`). Alphabetically sorted, nested structure.

## Architecture Notes

**Docusaurus configuration** (`docusaurus.config.js`):
- Docs-only mode (no blog) - docs serve as site root (`routeBasePath: '/'`)
- Algolia search integration for full-text search
- Mermaid diagram support via `@docusaurus/theme-mermaid`
- PWA plugin for offline access
- Google Analytics (gtag) + Google Tag Manager
- `/office` folder excluded from build

**Content guidelines:**
- Markdown files may contain internal links using relative paths
- Mermaid diagrams supported in markdown code blocks
- Images stored in `/docs/media/`
- Number prefixes in filenames are NOT parsed (`numberPrefixParser: false`)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys on:
- Push to `master` branch
- Manual workflow dispatch

Build artifacts published to `gh-pages` branch → served at https://deepaksood619.github.io/

## Pre-commit Hooks

Configured in `.pre-commit-config.yaml`:
- `markdownlint` - Markdown linting/auto-fixing
- `black` - Python code formatting
- Large file detection, trailing whitespace, YAML validation
- Custom `docusaurus-mdx-checker.sh` - Validates MDX compatibility

**To bypass hooks** (not recommended): `git commit --no-verify`

## Working with Content

**When editing markdown files:**
- Preserve relative link structure between docs
- Images use relative paths to `/docs/media/`
- Frontmatter not required but can include title/description
- Mermaid diagrams: use ```mermaid code blocks
- Internal links validated at build time (`onBrokenLinks: 'throw'`)

**When adding new topic areas:**
- Create folder under `/docs`
- Add index file or individual .md files
- Sidebar auto-generates from structure
- Consider existing taxonomy before creating top-level folders

**Testing changes:**
- Run `npm start` to preview with hot reload
- Check for broken links (build will fail on broken links)
- Verify search indexing after deployment (Algolia)

## Obsidian Integration

Primary editing happens in Obsidian with these considerations:
- Obsidian-specific syntax (e.g., `[[wikilinks]]`) NOT compatible - use standard markdown links
- Graph view and backlinks are Obsidian-only features
- `.obsidian/` folder contains Obsidian settings (git-ignored except hotkeys.json)
