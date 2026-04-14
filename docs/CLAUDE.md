# CLAUDE.md - Obsidian Vault Operations

This file provides guidance to Claude Code when working with the Obsidian vault in `/docs`.

## Environment

**Vault type:** Obsidian knowledge base (2600+ markdown notes)
**Vault location:** `/docs` directory
**Obsidian CLI:** `obsidian` (installed via npm/brew)
**Primary editor:** Obsidian app (macOS)
**Secondary publishing:** Docusaurus 3.8 → GitHub Pages

## Critical: Use CLI Over Direct File Operations

**IMPORTANT:** When modifying vault content, prefer `obsidian` commands over direct Read/Write/Edit tools. Direct file operations bypass Obsidian's:
- Internal link graph updates
- Backlink index maintenance
- Cache invalidation
- Plugin hooks (templates, daily notes, etc.)

**When to use direct file ops:** Only for bulk operations where CLI would be prohibitively slow, or when Obsidian app is not running.

## Obsidian CLI Basics

```bash
# Target vault (when working outside /docs)
obsidian --vault "/path/to/vault" [command]

# When inside vault directory, vault auto-detected
obsidian [command]

# Work with active file in Obsidian app
obsidian --active-file [command]

# Specify file by path (relative to vault root)
obsidian --file "ai/machine-learning.md" [command]
```

**Default behavior:** Commands default to active file in Obsidian app when `--file` not specified.

## Commands by Capability

### File & Folder Operations

```bash
# Create new note
obsidian create "path/to/note.md" --content "Initial content"
obsidian create "path/to/note.md" --template "templates/default"

# Open note in Obsidian
obsidian open "path/to/note.md"
obsidian open "path/to/note.md" --new-pane

# Move/rename note (preserves backlinks)
obsidian move "old/path.md" "new/path.md"

# Delete note (updates all references)
obsidian delete "path/to/note.md"

# List notes
obsidian list
obsidian list --folder "ai"
obsidian list --tag "#machine-learning"
```

### Content Manipulation

```bash
# Read note content
obsidian read "path/to/note.md"
obsidian read --active-file

# Append content
obsidian append "path/to/note.md" --content "New section"
obsidian append --active-file --content "Daily update"

# Prepend content
obsidian prepend "path/to/note.md" --content "Updated: 2026-04-15"

# Replace content (use sparingly - breaks undo history)
obsidian write "path/to/note.md" --content "Complete replacement"

# Search and replace
obsidian replace "path/to/note.md" --find "old term" --replace "new term"
```

### Links & Graph Operations

```bash
# Get backlinks for note
obsidian backlinks "path/to/note.md"

# Get outgoing links
obsidian links "path/to/note.md"

# Update link across vault (when renaming concepts)
obsidian update-links --from "[[old-note]]" --to "[[new-note]]"

# Find broken links
obsidian check-links
obsidian check-links --fix  # Auto-fix if possible
```

### Tags & Metadata

```bash
# Add tags
obsidian tag "path/to/note.md" --add "#new-tag"

# Remove tags
obsidian tag "path/to/note.md" --remove "#old-tag"

# List all tags in vault
obsidian tags

# Update frontmatter
obsidian frontmatter "path/to/note.md" --set "author: Deepak Sood"
obsidian frontmatter "path/to/note.md" --get "author"
```

### Search & Query

```bash
# Full-text search
obsidian search "machine learning"
obsidian search "deep learning" --folder "ai"

# Dataview queries (if plugin installed)
obsidian dataview "TABLE file.ctime FROM #ai"

# Find notes by metadata
obsidian find --tag "#book-summaries"
obsidian find --created-after "2026-01-01"
obsidian find --modified-today
```

### Templates & Daily Notes

```bash
# Apply template
obsidian template "path/to/note.md" --template "templates/meeting-notes"

# Create daily note
obsidian daily
obsidian daily --date "2026-04-15"

# Create weekly note
obsidian weekly
```

## Working with This Vault

### Content Organization

- **2600+ notes** across 30+ topic folders
- **Zettelkasten method:** Atomic notes with dense cross-linking
- **No number prefixes:** Filenames are semantic (`machine-learning.md`, not `01-machine-learning.md`)
- **Media storage:** `/docs/media/` for images/diagrams
- **Mermaid diagrams:** Use ` ```mermaid ` blocks (Docusaurus-compatible)

### Link Format Requirements

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ **Wrong:** `[[machine-learning]]` (Obsidian-only)  
✅ **Correct:** `[Machine Learning](ai/machine-learning.md)` (Docusaurus-compatible)

When creating cross-references:
```bash
# Good - CLI handles link format
obsidian create "ai/neural-networks.md" --link-to "ai/machine-learning.md"

# Bad - Manual wikilink insertion breaks Docusaurus build
echo "See [[machine-learning]]" >> ai/neural-networks.md
```

### Common Tasks

**Adding new note with links:**
```bash
# 1. Create note
obsidian create "databases/vector-databases.md" --content "# Vector Databases"

# 2. Add cross-references (CLI updates graph)
obsidian append "databases/vector-databases.md" \
  --content "\n\nSee also: [Embeddings](../ai/embeddings.md)"

# 3. Open in Obsidian to continue editing
obsidian open "databases/vector-databases.md"
```

**Renaming concept across vault:**
```bash
# CLI updates all references atomically
obsidian move "old-name.md" "new-name.md"
obsidian update-links --from "old-name" --to "new-name"
```

**Finding related notes:**
```bash
# Get bidirectional links
obsidian backlinks "ai/transformers.md"
obsidian links "ai/transformers.md"

# Search for mentions
obsidian search "attention mechanism" --folder "ai"
```

**Bulk updates (when CLI too slow):**
```bash
# If updating 100+ files, direct Grep + Edit acceptable
# BUT: Trigger cache rebuild after
grep -r "old-term" . --files-with-matches
# ... use Edit tool for replacements ...
obsidian cache --rebuild
```

## Integration with Docusaurus

**Dual-purpose content:** Notes serve as both Obsidian vault AND Docusaurus site source.

**Build-time validations:**
- Broken links → build fails (`onBrokenLinks: 'throw'`)
- Invalid MDX → caught by pre-commit hook (`docusaurus-mdx-checker.sh`)
- Large file commits → blocked by pre-commit

**When editing notes:**
1. Use `obsidian` for structural changes (links, moves)
2. Use `npm start` to preview Docusaurus rendering
3. Check for broken links: `npm run build` (fails on errors)
4. Commit → auto-deploys to GitHub Pages

## Troubleshooting

**Obsidian app not syncing changes:**
```bash
# Force cache rebuild
obsidian cache --rebuild

# Restart Obsidian app
# macOS: osascript -e 'quit app "Obsidian"' && open -a Obsidian
```

**Broken links after bulk operations:**
```bash
# Find and report broken links
obsidian check-links

# Auto-fix (review changes after)
obsidian check-links --fix
```

## Preferences

- **Link format:** Standard markdown (never wikilinks)
- **File naming:** Semantic, lowercase, hyphens (`deep-learning.md`)
- **Frontmatter:** Optional (Docusaurus auto-generates titles)
- **Diagrams:** Mermaid syntax in code blocks
- **Images:** Relative paths to `/docs/media/`
- **Cross-references:** Always use CLI commands to maintain graph integrity
