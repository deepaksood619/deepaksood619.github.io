# claude.md

**LLM-maintained wiki for education research** - Supporting education startup development through systematic knowledge organization.

## Core Purpose

This is NOT a passive document store. This is an **LLM-maintained wiki** where Claude actively:

- Processes new research sources (papers, articles, videos, case studies)
- Extracts key information and integrates it into existing knowledge
- Maintains cross-references and links between concepts
- Detects contradictions and updates claims
- Builds a structured, queryable knowledge base

**Human responsibility:** Curate sources, direct analysis, ask good questions.

**LLM responsibility:** Bookkeeping, cross-referencing, consistency maintenance, synthesis.

## Environment

- **Vault type:** Education research wiki (LLM-maintained)
- **Vault location:** `/docs/education` directory
- **Obsidian CLI path:** `/Applications/Obsidian.app/Contents/MacOS/Obsidian`
- **Primary editor:** Obsidian app (macOS)
- **Secondary publishing:** Docusaurus 3.8 → GitHub Pages

## Why This Pattern Works

**The problem with traditional knowledge bases:**

"The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping." — Andrej Karpathy

Humans struggle with:

- Updating 10-15 related pages when new information arrives
- Maintaining consistent cross-references
- Detecting contradictions across dozens of notes
- Keeping track of what connects to what

**What LLMs excel at:**

- Simultaneous updates across multiple files
- Consistent formatting and structure
- Systematic cross-referencing
- Pattern recognition across large document sets
- Maintaining coherence over time

**This is NOT traditional RAG:**

- ❌ Traditional RAG: Query → Search raw documents → Generate answer
- ✅ LLM Wiki: Query → Search maintained wiki → Synthesize from structured knowledge → Update wiki with synthesis

**The wiki sits between you and raw sources** as a curated, interconnected knowledge layer.

## Three-Layer Architecture

**Layer 1: Raw Sources** (immutable)

- Research papers (PDFs, arXiv links)
- Blog posts and articles
- Video lectures and talks
- Case studies and reports
- Data files and datasets
- Stored in `/docs/education/sources/` (if needed) or referenced via URLs

**Layer 2: The Wiki** (LLM-maintained)

- Topic pages (pedagogical theories, learning science, edtech tools)
- Entity pages (researchers, institutions, frameworks, methodologies)
- Concept summaries with cross-references
- Synthesis documents connecting research findings
- All markdown files in `/docs/education/`

**Layer 3: The Schema** (this file)

- Defines structure, conventions, workflows
- Guides how Claude processes and organizes information
- Sets taxonomy for education topics

## Core Operations

### Ingest: Processing New Research

When provided with new sources (paper, article, video, etc.):

1. **Extract key information:**
   - Main thesis/findings
   - Methodology and evidence quality
   - Key concepts and definitions
   - Notable researchers/institutions
   - Contradictions with existing knowledge

2. **Update 10-15 related wiki pages:**
   - Topic pages (e.g., `active-learning.md`, `spaced-repetition.md`)
   - Entity pages (e.g., researchers, frameworks)
   - Add cross-references
   - Update `index.md` and `log.md`

3. **Maintain consistency:**
   - Note contradictions explicitly
   - Update stale claims
   - Link related concepts

**Example ingestion:**

```bash
# User provides paper on "Retrieval Practice in Learning"
# Claude should:
# 1. Read/analyze the source
# 2. Update: learning-science.md, spaced-repetition.md, active-recall.md, cognitive-psychology.md
# 3. Create entity page if prominent researcher
# 4. Add entry to log.md with date and source
# 5. Update index.md categories
```

### Query: Synthesizing Knowledge

When asked questions about education topics:

1. Search wiki pages using Obsidian CLI
2. Synthesize answer with citations
3. If synthesis reveals valuable insights → save as new wiki page
4. Update cross-references

**Save valuable analyses as pages** (e.g., `comparison-montessori-vs-waldorf.md`)

### Lint: Health Checks

Periodically check for:

- **Contradictions:** Conflicting claims across pages
- **Stale claims:** Research that's been superseded
- **Orphan pages:** No incoming or outgoing links
- **Missing connections:** Related concepts not cross-linked
- **Dead-ends:** Pages with no outgoing references

**Run lint operation:**

```bash
# Check for orphans
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"

# Check for dead-ends (no outgoing links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian deadends vault="$VAULT"

# Check for unresolved links
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"
```

## Special Index Files

**`index.md`** - Content-oriented catalog organized by category:

- Pedagogical theories (Constructivism, Behaviorism, Cognitivism)
- Learning science (Spaced repetition, Active recall, Cognitive load)
- Educational technology (LMS, adaptive learning, AI tutors)
- Assessment methods (Formative, summative, authentic)
- Curriculum design
- Student engagement
- Teacher training

**`log.md`** - Chronological append-only record:

Format: `[YYYY-MM-DD] <action> - <description> - <source>`

Example:

```markdown
[2026-04-30] INGEST - Processed Bjork paper on desirable difficulties - https://example.com/paper.pdf
[2026-04-30] UPDATE - Updated spaced-repetition.md with new findings on optimal intervals
[2026-04-29] CREATE - Added page on Bloom's taxonomy applications
[2026-04-29] QUERY - Synthesized comparison of mastery learning vs traditional pacing
```

## Education Research Taxonomy

**Organize notes under these categories:**

- **pedagogical-theories/** - Constructivism, Montessori, Waldorf, project-based learning
- **learning-science/** - Cognitive load, spaced repetition, retrieval practice, metacognition
- **edtech/** - LMS platforms, adaptive learning, AI tutors, assessment tools
- **curriculum-design/** - Backward design, learning objectives, scaffolding
- **assessment/** - Formative, summative, authentic assessment, rubrics
- **student-engagement/** - Motivation, gamification, social learning
- **teacher-development/** - Professional development, coaching, feedback
- **equity-access/** - Digital divide, inclusive education, accessibility
- **research-methods/** - RCTs, qualitative studies, meta-analyses
- **institutions/** - Schools, universities, ed-tech companies
- **researchers/** - Notable education researchers and their work
- **frameworks/** - Bloom's taxonomy, Webb's DOK, SAMR model

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

## Working with Education Research Wiki

### Content Organization

- **LLM-maintained wiki** with systematic cross-linking
- **Zettelkasten method:** Atomic notes densely interconnected
- **No number prefixes:** Filenames are semantic (`spaced-repetition.md`)
- **Media storage:** `/docs/media/` for images/diagrams
- **Mermaid diagrams:** Use ```mermaid blocks (Docusaurus-compatible)
- **Citation tracking:** Include sources in frontmatter or inline

### Link Format Requirements

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ Wrong: `[[active-learning]]` (breaks Docusaurus)
✅ Correct: `[Active Learning](pedagogical-theories/active-learning.md)`

### Template: Research Paper Note

```markdown
---
title: Paper Title
authors: Author Names
year: 2024
source: https://arxiv.org/abs/...
type: research-paper
tags: [learning-science, meta-analysis, cognitive-load]
---

# Paper Title

## Key Findings

- Main finding 1
- Main finding 2

## Methodology

Description of research method, sample size, controls

## Evidence Quality

[Strong/Medium/Weak] - Explanation

## Connections

- Related to: [Spaced Repetition](../learning-science/spaced-repetition.md)
- Contradicts: [Previous claim in cognitive-load.md](../learning-science/cognitive-load.md#section)
- Supports: [Active Recall](../learning-science/active-recall.md)

## Implications for Startup

How this research informs product decisions

## Citations

Full citation in APA or preferred format
```

### Common Workflows

**Workflow 1: Ingest New Research Paper**

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

# Step 1: Create note for the paper
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="education/learning-science/paper-desirable-difficulties.md" content="[frontmatter + extracted content]" vault="$VAULT"

# Step 2: Find related pages to update
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="cognitive load" path="education" vault="$VAULT"

# Step 3: Add cross-references to related pages
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/learning-science/spaced-repetition.md" content="\n\n## Recent Research\n\nSee: [Desirable Difficulties](paper-desirable-difficulties.md)" vault="$VAULT"

# Step 4: Update log
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/log.md" content="[2026-04-30] INGEST - Bjork paper on desirable difficulties - https://example.com\n" vault="$VAULT"

# Step 5: Update index if new category needed
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="education/index.md" vault="$VAULT"
# (then append/edit as needed)
```

**Workflow 2: Query and Synthesize**

```bash
# User asks: "What does research say about optimal spacing intervals?"

# Step 1: Search existing knowledge
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="spacing interval" path="education" vault="$VAULT"

# Step 2: Check cross-references
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="education/learning-science/spaced-repetition.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="education/learning-science/spaced-repetition.md" vault="$VAULT"

# Step 3: If synthesis is valuable, save as new page
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="education/learning-science/optimal-spacing-intervals.md" content="[synthesis with citations]" open vault="$VAULT"

# Step 4: Update log
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/log.md" content="[2026-04-30] QUERY - Synthesized research on optimal spacing intervals\n" vault="$VAULT"
```

**Workflow 3: Link Discovery and Maintenance**

```bash
# Find pages that should be connected but aren't
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="retrieval practice" path="education" vault="$VAULT"

# Check which pages mention a concept but don't link to it
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="education/learning-science/active-recall.md" vault="$VAULT"

# Find orphaned pages (need more connections)
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"

# Add bidirectional links
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/pedagogical-theories/constructivism.md" content="\n\nRelated: [Active Recall](../learning-science/active-recall.md)" vault="$VAULT"
```

**Workflow 4: Contradiction Detection**

```bash
# When new research contradicts existing claims

# Step 1: Search for existing claims on the topic
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="learning styles" path="education" vault="$VAULT"

# Step 2: Read the page making the claim
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="education/pedagogical-theories/learning-styles.md" vault="$VAULT"

# Step 3: Update with contradiction noted explicitly
# Use Edit tool to add: "⚠️ **Contradiction:** Recent meta-analysis [link] finds..."

# Step 4: Log the update
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/log.md" content="[2026-04-30] UPDATE - Noted contradiction in learning-styles.md with 2024 meta-analysis\n" vault="$VAULT"
```

**Workflow 5: Periodic Health Check (Lint)**

```bash
# Run monthly or when asked

# Check for orphans
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"

# Check for dead-ends (no outgoing links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian deadends vault="$VAULT"

# Check for broken links
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"

# Review recent changes
/Applications/Obsidian.app/Contents/MacOS/Obsidian recents vault="$VAULT"

# Check tag consistency
/Applications/Obsidian.app/Contents/MacOS/Obsidian tags counts vault="$VAULT"
```

**Workflow 6: Cross-Domain Connections**

```bash
# Education research often connects to psychology, AI, economics, etc.

# Example: Connecting spaced repetition to AI/ML concepts
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/learning-science/spaced-repetition.md" content="\n\n## Technical Implementation\n\nSee: [Recommendation Systems](../../ai/recommendation-systems.md) for algorithmic approaches to scheduling" vault="$VAULT"

# Connection to psychology
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="education/learning-science/cognitive-load.md" content="\n\n## Psychological Foundations\n\nSee: [Working Memory](../../psychology/cognitive-psychology/working-memory.md)" vault="$VAULT"
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

## Content Standards for Education Research

**Research Quality Indicators:**

- Always note evidence quality: [Strong/Medium/Weak/Anecdotal]
- Include sample size for studies
- Note replication status if available
- Flag contradictions explicitly with ⚠️
- Distinguish correlation from causation

**Citation Requirements:**

- Include source URL or DOI in frontmatter
- Use APA or consistent citation format
- Link to original sources when possible
- Track author affiliations and potential conflicts

**Cross-Referencing Discipline:**

- When mentioning a concept, check if a page exists for it
- If page exists, link to it
- If no page exists but concept is important, create one
- Update bidirectional links (not automatic in markdown)
- Group related concepts in "See Also" sections

**Maintaining Synthesis Quality:**

- Distinguish between "established consensus" and "emerging research"
- Note when findings are specific to certain contexts (age groups, subjects, settings)
- Track temporal aspects (recent vs historical perspectives)
- Highlight practical implications for startup development

## File Naming & Organization

- **Link format:** Standard markdown only (never wikilinks)
- **File naming:** Semantic, lowercase, hyphens (`spaced-repetition.md`)
- **Frontmatter:** Include type, tags, source, year
- **Diagrams:** Mermaid syntax in code blocks
- **Images:** Relative paths to `/docs/media/`
- **Spacing:** Blank lines between all content blocks
- **Code blocks:** Always specify language

## Startup-Relevant Focus

When processing research, always consider:

- **Product implications:** How does this inform product decisions?
- **Scalability:** Can this approach work at scale?
- **Measurability:** Can we track this metric?
- **Evidence strength:** Is this backed by rigorous research?
- **Implementation cost:** What's required to implement this?
- **Target audience:** Which learner demographics does this apply to?

## Important Guidelines

- Refrain from searching or accessing files inside `office/*` folder. It contains sensitive data. Accessing any file in this folder require explicit ask and an approval to access those exact files or lines.

## Expected Behaviors

**When given a new source:**

1. Extract key findings
2. Update 10-15 related pages
3. Add entry to log.md
4. Update index.md if needed
5. Create cross-links
6. Note contradictions

**When asked a question:**

1. Search existing wiki pages
2. Synthesize from multiple sources
3. Include citations
4. Save valuable syntheses as new pages
5. Update log.md with query

**Proactive maintenance:**

- Check for orphans monthly
- Verify broken links
- Update stale research
- Consolidate duplicate content
- Improve cross-linking density
