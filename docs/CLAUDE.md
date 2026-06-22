---
slug: /CLAUDE
title: claude.md
description: Content infrastructure guidance for Obsidian vault management and markdown formatting
created: 2026-04-15
updated: 2026-06-22
---

**Inherits:** Project infrastructure from [root CLAUDE.md](../CLAUDE.md)

Content infrastructure guidance for working with 7400+ markdown notes in Obsidian vault.

## Quick Reference

**Vault Path:** `/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs`

**Obsidian CLI:** `/Applications/Obsidian.app/Contents/MacOS/Obsidian`

**Full Obsidian CLI Documentation:** [Obsidian](devops/ides/obsidian.md) - Complete command reference with 100+ examples

## How to Navigate This Knowledge Base

**Strategy: Layered search from semantic → specific**

### Step 1: Start with Semantic Search (Primary)

Use Obsidian Hybrid Search MCP for concept-based discovery:

```bash
# Find content by concept, not exact keywords
mcp__obsidian-hybrid-search__search(
  query="your concept or question",
  limit=10
)

# Examples:
"hierarchical configuration patterns"  # → CLAUDE.md, nested configs
"performance optimization techniques"   # → across devops, databases, ai
"version control best practices"       # → git workflows, CI/CD
"knowledge management systems"          # → wikis, Obsidian, research
```

**When to use:** Almost always - start here for finding content

**Why:** Understands concepts, finds related content across folders without exact keyword matches

### Step 2: Augment with Text Search (When Needed)

Use when you need exact keywords or phrases:

```bash
# Obsidian CLI keyword search
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="exact phrase" vault="$VAULT"

# Or Bash grep for patterns
grep -r "specific_function_name" docs/
grep -r "CRITICAL:" docs/CLAUDE.md
```

**When to use:**

- Looking for specific code/function names
- Finding exact error messages
- Searching for specific commands or syntax
- Known exact phrase you're looking for

### Step 3: Use File Structure Heuristics

Understand the taxonomy to browse directly:

```bash
# Tool configs → devops/ides/
ls docs/devops/ides/

# AI/LLM topics → ai/llm/
ls docs/ai/llm/

# LLM-maintained KBs → economics/, education/, ideas/
ls docs/economics/
ls docs/education/
ls docs/ideas/

# Find by pattern
find docs/ -name "*claude*"
find docs/ -name "*config*"
```

**When to use:**

- You know the general category/folder
- Browsing related content
- Understanding vault organization

### Step 4: Read Similar Files for Context

Once you find one relevant file, explore its neighborhood:

```bash
# Find backlinks (what links TO this file)
mcp__obsidian-hybrid-search__read(paths=["file.md"], related=true)

# Or use Obsidian CLI
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="file.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="file.md" vault="$VAULT"

# Check siblings in same folder
ls -la "$(dirname path/to/file.md)"
```

**When to use:**

- Found one relevant file, need related content
- Building context around a topic
- Following knowledge graph connections

### Decision Tree

```text
Need to find content?
├─ Conceptual/topic-based? → Use semantic search (Step 1)
├─ Exact keyword/phrase? → Use text search (Step 2)
├─ Know the category? → Use file structure (Step 3)
└─ Found one file, need related? → Use graph navigation (Step 4)
```

### Example Workflow

**Task:** Find best practices for organizing documentation

```bash
# Step 1: Semantic search
mcp__obsidian-hybrid-search__search(
  query="documentation organization best practices"
)
# → Finds: CLAUDE.md files, Obsidian guides, knowledge management

# Step 2: (Optional) Exact phrase search if needed
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="best practices" vault="$VAULT"

# Step 3: Browse category if you know it
ls docs/devops/ides/  # → claude-md-best-practices.md, obsidian.md

# Step 4: Find related content
mcp__obsidian-hybrid-search__read(
  paths=["devops/ides/claude-md-best-practices.md"],
  related=true
)
# → Shows backlinks and outgoing links
```

## Critical Rules

### 1. Prefer Obsidian CLI Over Direct File Operations

Direct Read/Write/Edit bypass link graph updates, backlink maintenance, cache invalidation.

**Exception:** Bulk operations (100+ files) where CLI is too slow.

### 2. NEVER Auto-Commit to Git

**CRITICAL:** Never run `git commit` automatically. Always require explicit user approval.

- ❌ Don't commit after edits
- ❌ Don't commit in loops/workflows
- ✅ Only commit when user explicitly asks: "commit these changes"

### 2.5. NEVER Delete Content During Reorganization

**CRITICAL:** When reorganizing files, NEVER delete links or content without user confirmation. Only reorganize, move, or split into multiple files.

- ❌ Don't delete links, references, or content during reorganization
- ✅ Only reorganize/move content to different sections or files
- ✅ Split large files into multiple smaller files if needed
- ✅ Ask before deleting anything

**Sidebar ordering during reorganization:**

- Use numbered prefixes (`01-`, `02-`, `03-`) for files that need specific ordering
- Preserves order in both Docusaurus sidebar and Obsidian file list
- Example: `01-introduction.md`, `02-core-concepts.md`, `03-advanced.md`
- Only use when explicit ordering is important (tutorials, guides, sequential content)

**Folder audit when adding files:**

- After creating a new file, audit the containing folder
- Check if reorganization is needed (grouping related files)
- Check if recategorization is needed (file belongs in different folder)
- Check if new subfolder structure would improve organization
- Suggest changes but always confirm before reorganizing

### 2.6. Write Evergreen Notes Only

**CRITICAL:** Only write notes that are evergreen facts, learnings, and reference material. Temporary/contextual information stays in chat.

**Write to notes (✅):**

- Permanent facts and concepts
- Technical documentation and how-tos
- Best practices and patterns
- Reference material and guides
- Learnings that will be useful later

**Keep in chat only (❌):**

- Temporary analysis or investigation results
- Context-specific debugging output
- One-time answers to specific questions
- Transient project status or progress updates
- Session-specific reasoning or thought process

**Rule of thumb:** If it won't be useful in 6 months, keep it in chat.

### 3. Markdown Formatting (Docusaurus)

**Page structure:**

- NO H1 heading (title comes from frontmatter)
- Blank lines between all blocks (paragraphs, lists, code, tables)
- Natural language slugs: `/topic-name` NOT `/folder/path/topic-name`

**Code blocks:**

- Always specify language: ```python,```bash, ```javascript

**MDX compatibility:**

- Escape `<` `>` with backticks: `<50`, `>100`
- Don't use `[]` square brackets without escaping

**Links:**

- Standard markdown only (no wikilinks `[[]]`)
- Use relative paths for internal links
- Full documentation: See "Markdown Writing Guidelines" section below

**Content length (IMPORTANT):**

- **Be concise** - Only add core/relevant content
- Extract essential information, not entire articles
- Target: ~50-150 lines for most topics
- Additional resources → "Links" or "Further Reading" section

### 4. Semantic Search Available

**Use Obsidian Hybrid Search MCP for finding content:**

```bash
# Semantic search - understands concepts, not just keywords
mcp__obsidian-hybrid-search__search(query="hierarchical configuration", limit=5)

# Example queries:
"project setup and configuration"     # → finds CLAUDE.md, settings
"version control workflows"            # → finds git, CI/CD content
"performance optimization"             # → finds across devops, databases, ai
"organizing documentation"             # → finds Obsidian, wikis, knowledge bases
```

**Modes:** Hybrid (semantic + BM25 + fuzzy title), semantic-only, keyword-only, title-matching

**This solves:** Finding conceptually related content across different folders without exact keyword matches.

### 5. Content Taxonomy

**LLM-Maintained Knowledge Bases** (have CLAUDE.md):

- `economics/` - Financial research, company analysis, taxation
- `economics/company-analysis/` - Fundamental/technical analysis
- `education/` - Education startup research wiki
- `ideas/` - Multi-domain startup research

**Passive Note Collections** (inherit from this file):

- `ai/`, `databases/`, `algorithms/`, `book-summaries/`, etc.
- No CLAUDE.md needed - automatically inherit all rules

**Tool Configuration:**

- `devops/ides/` - IDE configs, editor settings, tool integrations

## Obsidian CLI Usage

**Command syntax:** `key=value` pairs (NOT `--flags`)

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"
/Applications/Obsidian.app/Contents/MacOS/Obsidian <command> vault="$VAULT" key="value"
```

**Essential commands:**

```bash
# Search
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="text" vault="$VAULT"

# Read file
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="file.md" vault="$VAULT"

# Create file
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="new.md" content="text" vault="$VAULT"

# Append content
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="file.md" content="text" vault="$VAULT"

# Find backlinks
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="file.md" vault="$VAULT"

# Find broken links
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"

# Reload vault
/Applications/Obsidian.app/Contents/MacOS/Obsidian reload vault="$VAULT"
```

**Full command reference:** [Obsidian](devops/ides/obsidian.md) - 200+ lines with search, navigation, graph, tags, properties, utilities

## Markdown Writing Guidelines for Docusaurus

### Frontmatter (Required)

```markdown
---
slug: /natural-language-topic-name
title: Descriptive Title
description: One-line summary
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

**Slug rules:**

- Use natural language: `/claude-md-best-practices`
- NOT folder-based: `~/devops/ides/claude-md-best-practices~`
- Prevents 404s when files move

### Page Structure

```markdown
---
title: My Topic
---

Content starts here... (NO H1 heading!)

## First Section

Paragraph with blank line before and after.

- List item 1
- List item 2

More content.
```

### Code Blocks

```markdown
​```python
def hello():
    print("world")
​```
```

**Supported languages:** python, bash, javascript, typescript, java, go, rust, sql, json, yaml, xml, markdown, jsx, tsx, shell, sh

### MDX Compatibility

❌ Wrong:

```markdown
Value <50 or >100
```

✅ Correct:

```markdown
Value `<50` or `>100`
```

### Links & Images

**Links:**

- Standard markdown: `[Text](path/to/file.md)`
- NO wikilinks: `~~[[wikilink]]~~`
- Use relative paths

**Images:**

- Store in `/docs/media/`
- Reference: `![alt](../media/image.png)`

### Mermaid Diagrams

```markdown
​```mermaid
graph TD
    A[Start] --> B[End]
​```
```

## Working with This Vault

### Content Organization

- **7400+ notes** across 280 folders
- **Zettelkasten method:** Atomic notes with cross-linking
- **Media:** All images in `/docs/media/`
- **No number prefixes:** Semantic filenames only

### Common Workflows

**Add new note:**

```bash
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="folder/topic.md" content="# Topic\n\nContent" open vault="$VAULT"
```

**Find related notes:**

```bash
# Backlinks (incoming)
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="file.md" vault="$VAULT"

# Outgoing links
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="file.md" vault="$VAULT"

# Search mentions
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="keyword" vault="$VAULT"
```

**Bulk operations:**

```bash
# For 100+ files, use direct tools then reload
# Example: grep + Edit for bulk replacements
/Applications/Obsidian.app/Contents/MacOS/Obsidian reload vault="$VAULT"
```

### Maintenance

**Check vault health:**

```bash
# Find orphans (no incoming links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"

# Find broken links
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"

# Find dead-ends (no outgoing links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian deadends vault="$VAULT"
```

## Integration with Docusaurus

**Build validation:**

- Broken links → build fails (`onBrokenLinks: 'throw'`)
- Invalid MDX → pre-commit hook catches
- Large files → pre-commit blocks

**Workflow:**

1. Use Obsidian CLI for structural changes
2. Preview: `npm start` (localhost:3000) in local clone
3. Validate: `npm run build` in local clone
4. Commit → auto-deploy to GitHub Pages

## Important Guidelines

- ✅ **Use semantic search** (Obsidian Hybrid Search MCP) to find content by concept, not just keywords
- ✅ **Prefer Obsidian CLI** for file operations
- ✅ **Use natural language slugs** independent of folder paths
- ✅ **No H1 headings** - title comes from frontmatter
- ✅ **Blank lines** between all content blocks
- ✅ **Code blocks** always specify language
- ✅ **Escape MDX** special chars: `<` `>` in backticks
- ❌ **NEVER auto-commit** - require explicit user approval
- ❌ **No wikilinks** - standard markdown only
- ❌ **No folder-based slugs** - use natural language
- ⚠️ **Office folder** - Never access `office/*` without explicit approval (sensitive data)

## External References

- **Full Obsidian CLI Reference:** [Obsidian](devops/ides/obsidian.md)
- **CLAUDE.md Hierarchy Guide:** [CLAUDE.md Best Practices](devops/ides/claude-md-best-practices.md)
- **Project Infrastructure:** [Root CLAUDE.md](../CLAUDE.md)
