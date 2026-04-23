# claude.md

Guidance for working with Obsidian vault in `/docs` using CLI.

## Environment

- **Vault type:** Obsidian knowledge base (7400+ markdown notes)
- **Vault location:** `/docs` directory
- **Obsidian CLI path:** `/Applications/Obsidian.app/Contents/MacOS/Obsidian`
- **Primary editor:** Obsidian app (macOS)
- **Secondary publishing:** Docusaurus 3.8 → GitHub Pages

## Critical: Use CLI Over Direct File Operations

**Prefer Obsidian CLI** over direct Read/Write/Edit tools. Direct file operations bypass:

- Internal link graph updates
- Backlink index maintenance
- Cache invalidation
- Plugin hooks

**When to use direct file ops:** Bulk operations (100+ files) where CLI would be prohibitively slow.

## CLI Command Format

```bash
# Binary path
/Applications/Obsidian.app/Contents/MacOS/Obsidian

# Vault path for this repo
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

# Command syntax: key=value pairs, NOT --flags
/Applications/Obsidian.app/Contents/MacOS/Obsidian <command> vault="$VAULT" key="value"

# Quote values with spaces
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="machine learning" vault="$VAULT"

# Use \n for newline, \t for tab in content values
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="note.md" content="Line 1\nLine 2" vault="$VAULT"
```

**File resolution:**

- `file=<name>` - resolves by name (like wikilinks)
- `path=<path>` - exact path (folder/note.md)
- Most commands default to active file when file/path omitted

## Core Commands

### Search

```bash
# Full-text search
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="neural networks" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="deep learning" path="ai" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="embeddings" limit=10 vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="API" total vault="$VAULT"  # count only
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="regex.*pattern" case vault="$VAULT"  # case-sensitive

# Search with context (shows matching lines)
/Applications/Obsidian.app/Contents/MacOS/Obsidian search:context query="transformer" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search:context query="attention" path="ai" format=json vault="$VAULT"

# Open search UI
/Applications/Obsidian.app/Contents/MacOS/Obsidian search:open query="initial query" vault="$VAULT"
```

### Read & Navigate

```bash
# Read file content
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="ai/transformers.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian read file="transformers" vault="$VAULT"  # resolve by name

# Open in Obsidian app
/Applications/Obsidian.app/Contents/MacOS/Obsidian open path="ai/machine-learning.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian open path="databases/clickhouse.md" newtab vault="$VAULT"

# Random note
/Applications/Obsidian.app/Contents/MacOS/Obsidian random vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian random folder="ai" newtab vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian random:read folder="book-summaries" vault="$VAULT"

# File info
/Applications/Obsidian.app/Contents/MacOS/Obsidian file path="ai/transformers.md" vault="$VAULT"
```

### Edit Content

```bash
# Append content
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ai/notes.md" content="New section\n\nContent here" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="log.md" content="Update" inline vault="$VAULT"  # no newline

# Prepend content
/Applications/Obsidian.app/Contents/MacOS/Obsidian prepend path="ai/readme.md" content="Updated: 2026-04-15\n" vault="$VAULT"

# No native "edit" or "close" - use append/prepend or direct Edit tool
# For complex edits, use Read tool + Edit tool + reload vault
```

### Graph Navigation

```bash
# Backlinks (incoming links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="ai/transformers.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="databases/vector-db.md" counts vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="ai/llm.md" total vault="$VAULT"  # count only
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="book.md" format=json vault="$VAULT"

# Outgoing links
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="ai/transformers.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="readme.md" total vault="$VAULT"

# Unresolved links (broken links across vault)
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved total vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved counts verbose vault="$VAULT"

# Orphans (no incoming links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans total vault="$VAULT"

# Dead-ends (no outgoing links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian deadends vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian deadends total vault="$VAULT"
```

### File Management

```bash
# Create new note
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ai/new-topic.md" content="# New Topic\n\nContent" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian create name="meeting-notes" template="default" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="temp.md" content="Quick note" open vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="test.md" overwrite vault="$VAULT"  # overwrite existing

# Move/rename (preserves backlinks)
/Applications/Obsidian.app/Contents/MacOS/Obsidian move path="old/file.md" to="new/location.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian move path="temp.md" to="archive/" vault="$VAULT"  # move to folder
/Applications/Obsidian.app/Contents/MacOS/Obsidian rename path="old-name.md" name="new-name.md" vault="$VAULT"

# Delete (updates references)
/Applications/Obsidian.app/Contents/MacOS/Obsidian delete path="temp.md" vault="$VAULT"  # moves to trash
/Applications/Obsidian.app/Contents/MacOS/Obsidian delete path="temp.md" permanent vault="$VAULT"  # skip trash

# List files
/Applications/Obsidian.app/Contents/MacOS/Obsidian files vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian files folder="ai" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian files ext=md total vault="$VAULT"

# List folders
/Applications/Obsidian.app/Contents/MacOS/Obsidian folders vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian folders folder="databases" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian folder path="ai" info=files vault="$VAULT"
```

### Tags & Properties

```bash
# List all tags
/Applications/Obsidian.app/Contents/MacOS/Obsidian tags vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian tags total vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian tags counts sort=count vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian tags path="ai/ml.md" vault="$VAULT"  # tags in file

# Tag info
/Applications/Obsidian.app/Contents/MacOS/Obsidian tag name="#machine-learning" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian tag name="#ai" total vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian tag name="#database" verbose vault="$VAULT"  # with file list

# Properties (frontmatter)
/Applications/Obsidian.app/Contents/MacOS/Obsidian properties vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian properties path="ai/ml.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian properties counts format=json vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian property:read name="author" path="book.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian property:set name="status" value="draft" path="note.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian property:remove name="old-field" path="note.md" vault="$VAULT"
```

### Utilities

```bash
# Outline/headings
/Applications/Obsidian.app/Contents/MacOS/Obsidian outline path="ai/transformers.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian outline path="readme.md" format=json vault="$VAULT"

# Word count
/Applications/Obsidian.app/Contents/MacOS/Obsidian wordcount path="book-summaries/sapiens.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian wordcount path="note.md" words vault="$VAULT"  # words only

# Recent files
/Applications/Obsidian.app/Contents/MacOS/Obsidian recents vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian recents total vault="$VAULT"

# Daily notes
/Applications/Obsidian.app/Contents/MacOS/Obsidian daily vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian daily:read vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian daily:append content="Update" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian daily:path vault="$VAULT"

# Vault info
/Applications/Obsidian.app/Contents/MacOS/Obsidian vault vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian vault info=files vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian reload vault="$VAULT"  # reload vault
```

## Working with This Vault

### Content Organization

- **7400+ notes** across 280 folders
- **Zettelkasten method:** Atomic notes with dense cross-linking
- **No number prefixes:** Filenames are semantic (`machine-learning.md`)
- **Media storage:** `/docs/media/` for images/diagrams
- **Mermaid diagrams:** Use ```mermaid blocks (Docusaurus-compatible)

### Link Format Requirements

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ Wrong: `[[machine-learning]]` (breaks Docusaurus)
✅ Correct: `[Machine Learning](ai/machine-learning.md)`

### Common Workflows

**Find related notes:**

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

# Get bidirectional links
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="ai/transformers.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="ai/transformers.md" vault="$VAULT"

# Search mentions
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="attention mechanism" path="ai" vault="$VAULT"
```

**Add new note:**

```bash
# Create + open
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="databases/new-db.md" content="# New Database\n\nNotes" open vault="$VAULT"

# Add cross-reference
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="databases/new-db.md" content="\n\nSee: [SQL](../databases-sql/basics.md)" vault="$VAULT"
```

**Bulk operations:**

```bash
# For 100+ files, use direct tools then reload
# Example: Grep + Edit for replacements
/Applications/Obsidian.app/Contents/MacOS/Obsidian reload vault="$VAULT"
```

## Integration with Docusaurus

Dual-purpose: Obsidian vault + Docusaurus site source.

**Build validations:**

- Broken links → build fails (`onBrokenLinks: 'throw'`)
- Invalid MDX → pre-commit hook catches
- Large files → pre-commit blocks

**Workflow:**

1. Use Obsidian CLI for structural changes (create/move/link)
2. Preview: `npm start` (localhost:3000)
3. Validate: `npm run build` (fails on broken links)
4. Commit → auto-deploy to GitHub Pages

## Markdown Writing Guidelines for Docusaurus

**CRITICAL:** Obsidian renders markdown differently than Docusaurus. Follow these rules to ensure proper rendering on the website.

### Blank Lines & Spacing

**Always use blank lines between:**

- Paragraphs (two consecutive lines without blank line = single line in Docusaurus)
- After headings (heading immediately followed by text may render incorrectly)
- Before and after lists
- Before and after code blocks
- Before and after tables
- Before and after blockquotes

**Example:**

```markdown
# Heading

Paragraph 1 here.

Paragraph 2 here.

- List item 1
- List item 2

More content.
```

❌ **Wrong (renders as single line):**

```markdown
Line 1
Line 2
```

✅ **Correct (renders as two paragraphs):**

```markdown
Line 1

Line 2
```

### Code Blocks

**Always specify language for syntax highlighting:**

```markdown
# Good
​```python
def hello():
    print("world")
​```

​```bash
npm start
​```

​```javascript
const x = 1;
​```

# Bad (no syntax highlighting)
​```
code here
​```
```

**Supported languages:** python, bash, javascript, typescript, java, go, rust, sql, json, yaml, xml, markdown, jsx, tsx, shell, sh, etc.

### MDX compatibility

- don't use `[]` square brackets without escape, since these are used by obsidian/html for links/anchor tags

### Additional Best Practices

**Links:**

- Use relative paths for internal links
- Standard markdown syntax only (no wikilinks)

**Images:**

- Store in `/docs/media/`
- Use relative paths: `![alt](../media/image.png)`
- Optimize size before committing

**Mermaid diagrams:**

```markdown
​```mermaid
graph TD
    A[Start] --> B[End]
​```
```

## Preferences

- **Link format:** Standard markdown only (never wikilinks)
- **File naming:** Semantic, lowercase, hyphens (`deep-learning.md`)
- **Frontmatter:** Optional (Docusaurus generates titles)
- **Diagrams:** Mermaid syntax in code blocks
- **Images:** Relative paths to `/docs/media/`
- **Spacing:** Blank lines between all content blocks
- **Code blocks:** Always specify language

## Important Guidelines

- Refrain from searching or accessing files inside `office/*` folder. It contains sensitive data. Accessing any file in this folder require explicit ask and an approval to access those exact files or lines.
