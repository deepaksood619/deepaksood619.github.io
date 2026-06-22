---
slug: /CLAUDE
title: CLAUDE.md
description: Project-level guidance for Claude Code when working with deepaksood619.github.io Docusaurus knowledge base
created: 2026-04-15
updated: 2026-06-22
---

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

**⚠️ CRITICAL: NEVER run npm commands in this directory**

This folder is Google Drive synced. Running npm commands would create `node_modules/` which would attempt to sync 100k+ files to Google Drive, causing sync issues and consuming massive storage.

**For local development:**
1. Clone the repository to a local (non-synced) directory
2. Run npm commands there
3. Use this Google Drive location only for content editing

**Available commands (use in local clone only):**

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

## Content Editing

**For content editing, Obsidian CLI usage, and markdown formatting guidelines:**
→ See [docs/CLAUDE.md](docs/CLAUDE.md)

## CLAUDE.md Hierarchy

```
.
├── CLAUDE.md (this file - project infrastructure)
└── docs/
    ├── CLAUDE.md (content infrastructure - Obsidian CLI, markdown rules)
    ├── economics/
    │   ├── CLAUDE.md (financial KB - inherits docs/CLAUDE.md)
    │   └── company-analysis/
    │       └── CLAUDE.md (company analysis - inherits all above)
    ├── education/CLAUDE.md (education wiki - inherits docs/CLAUDE.md)
    └── ideas/CLAUDE.md (startup research - inherits docs/CLAUDE.md)
```

**How hierarchy works:**
- Claude Code walks UP the directory tree loading all CLAUDE.md files
- Inner files take precedence for conflicting instructions
- Instructions are additive (child extends parent)

## When to Create Domain CLAUDE.md Files

Create domain-specific CLAUDE.md files for **LLM-maintained knowledge bases** where Claude actively:
- Creates/updates structured content (not just edits existing notes)
- Maintains cross-references and consistency
- Follows templates and quality standards
- Performs systematic research and synthesis

**Current domains with CLAUDE.md files:**
- `economics/` - Financial research, company analysis, taxation
- `economics/company-analysis/` - Detailed company fundamental/technical analysis
- `education/` - Education startup research wiki
- `ideas/` - Multi-domain startup opportunity research

**Folders WITHOUT CLAUDE.md files** (passive note collections):
- `ai/`, `databases/`, `algorithms/`, `book-summaries/`, etc.
- These are personal learning notes edited manually in Obsidian
- They inherit all rules from `docs/CLAUDE.md` automatically

## Working Directory

**Recommended:** Open Claude Code at project root (`deepaksood619.github.io/`)
- Full access to git operations and build file visibility
- CLAUDE.md hierarchy loads automatically when you cd to subfolders
- Use `cd docs/economics` to focus context when needed
- **Never run npm commands here** (Google Drive sync issue)

## Obsidian Integration

Primary editing happens in Obsidian with these considerations:

- Obsidian-specific syntax (e.g., `[[wikilinks]]`) NOT compatible - use standard markdown links
- Graph view and backlinks are Obsidian-only features
- `.obsidian/` folder contains Obsidian settings (git-ignored except hotkeys.json)
- See `docs/CLAUDE.md` for complete Obsidian CLI reference
