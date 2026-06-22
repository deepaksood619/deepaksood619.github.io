---
slug: /note-skill
title: Note Skill - Automated Knowledge Base Organization
description: Claude Code skill for automatically adding topics to knowledge base with semantic search, categorization, and intelligent linking
created: 2026-06-22
updated: 2026-06-22
---

Automatically add any topic (technology, concept, mental model, food, health, etc.) to the knowledge base with intelligent organization.

## Usage

```bash
/note <topic> [url]
/note Apache Iggy https://github.com/apache/iggy
/note sleep hygiene
/note Mediterranean diet
/note Eisenhower Matrix
```

## Workflow (Fully Automated)

### Step 1: Search for Existing Content

**Semantic + Text Search:**

```bash
# Semantic search across all domains
mcp__obsidian-hybrid-search__search(
  query="<topic> related concepts",
  limit=20
)

# Text search for exact mentions
grep -ri "<topic>" docs/
```

**Analyze results:**
- Does dedicated page exist? → UPDATE mode
- Only scattered mentions? → CREATE mode
- No mentions? → CREATE mode (determine category from topic keywords)

### Step 2: Fetch Source Content

**If URL provided:**

```bash
WebFetch(url="<provided-url>", prompt="Extract key information, features, description - return raw content for copy-paste, do not reword")
```

**If no URL:**

Ask user:
```
Please provide either:
1. URL to official source (GitHub, docs, article)
2. Brief description/key points about <topic>
```

**Copy-paste rule:** Do NOT reword. Extract verbatim from source.

### Step 3: Auto-Determine Category

**Use semantic search results + topic keywords to categorize:**

**Technology/Tools:** Keywords: software, platform, API, library, framework, tool, system
- Apache projects → `docs/technologies/apache/`
- Kafka ecosystem → `docs/technologies/kafka/`
- Message brokers → `docs/technologies/brokers/`
- Cloud AWS → `docs/cloud/aws/`
- Cloud Azure → `docs/cloud/azure/`
- Databases → `docs/databases/` or `docs/databases-nosql/`
- AI/ML → `docs/ai/`
- General tech → `docs/technologies/`

**Psychology/Mental Models:** Keywords: psychology, cognitive, mental model, thinking, bias, behavior
- Mental models → `docs/psychology/mental-models/`
- General psychology → `docs/psychology/`

**Health/Wellness:** Keywords: health, sleep, diet, nutrition, exercise, wellness
- Sleep → `docs/health/sleep/` (create if not exists)
- Nutrition → `docs/health/nutrition/` (create if not exists)
- General health → `docs/health/`

**Economics/Business:** Keywords: economics, finance, business, company, market
- Company analysis → `docs/economics/company-analysis/`
- General economics → `docs/economics/`

**Education:** Keywords: learning, education, teaching, pedagogy
- `docs/education/`

**Algorithms/CS:** Keywords: algorithm, data structure, complexity, computer science
- Algorithms → `docs/algorithms/`
- Data structures → `docs/data-structures/`

**Books/Summaries:** Keywords: book, author, summary
- `docs/book-summaries/`

**Check if category folder exists:**

```bash
# If category doesn't exist, create it
ls docs/<category>/ || mkdir -p docs/<category>/
```

### Step 4: Create/Update File

**File naming:** `lowercase-with-hyphens.md`

**Frontmatter (always use 5 fields):**

```yaml
---
slug: /<natural-language-slug>
title: <Topic Name>
description: <One-line description from source or user>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
---
```

**Content structure:**

```markdown
<1-2 sentence intro - copy from source>

## Key Points / Features

- <Copy from source - essential items only>
- <Copy from source - 5-10 bullets max>

## <Additional sections based on content type - keep concise>

## Links

- <Source URL>
- <Additional reading>
- <Related resources>
```

**Content length guidelines:**
- **Introduction:** 1-2 sentences max
- **Key features/points:** 5-10 bullets (most important only)
- **Sections:** Only add sections with core/essential information
- **Total length:** Aim for ~50-150 lines for most topics
- **Additional content:** Put supplementary info in "Links" or "Further Reading" section, not in main content

**Use Obsidian CLI to create:**

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

/Applications/Obsidian.app/Contents/MacOS/Obsidian create \
  path="<category>/<topic-name>.md" \
  content="<full-content>" \
  vault="$VAULT"
```

**If file exists, UPDATE instead:**

```bash
# Read existing
Read(path="docs/<category>/<topic>.md")

# Add new content to relevant sections
Edit(file_path="...", old_string="...", new_string="...")

# Update frontmatter date
Edit(file_path="...", old_string="updated: <old-date>", new_string="updated: <today>")
```

### Step 5: Auto-Link from Related Pages

**Find link opportunities from Step 1 semantic search results:**

**Common patterns:**

**Pattern 1: Comparison/list pages**
```markdown
# In docs/technologies/kafka/others.md
- Apache Pulsar
- AWS Kinesis
- [**New Topic**](technologies/category/new-topic.md)  # ✅ ADD
```

**Pattern 2: Overview/README pages**
```markdown
# In docs/psychology/readme.md
- [Cognitive Biases](psychology/cognitive-biases.md)
- [New Mental Model](psychology/mental-models/new-model.md)  # ✅ ADD
```

**Pattern 3: Related concept pages**
```markdown
# In docs/health/sleep.md
## Related Topics
- [Sleep Hygiene](health/sleep/sleep-hygiene.md)  # ✅ ADD
- [Circadian Rhythm](health/sleep/circadian-rhythm.md)
```

**Link path format (CRITICAL):**
- ✅ Full path from docs/: `[Link](technologies/kafka/topic.md)`
- ❌ Relative path: `[Link](../kafka/topic.md)`

**Verify target exists before linking:**

```bash
ls docs/<full-path-to-target>  # Must exist
```

**Add 2-5 cross-references** from most relevant pages found in semantic search.

### Step 6: Audit Folder After File Creation

**After creating a new file, audit the containing folder:**

```bash
# List all files in the category folder
ls -la docs/<category>/

# Check for reorganization opportunities
# - Are there files that should be grouped?
# - Should this be a subfolder instead?
# - Are there similar files that need consistent naming?
```

**Audit checklist:**
- ✅ Check if files should be grouped into subfolders
- ✅ Check if new file belongs in different category
- ✅ Check if numbered prefixes needed for ordering
- ✅ Check if similar files need reorganization
- ✅ Suggest improvements but always confirm before reorganizing

### Step 7: Report Summary

```markdown
✅ **Created:** `docs/<category>/<topic>.md`

📂 **Category:** <category> (auto-detected from: <reason>)

🔗 **Linked from:**
  - docs/<page1>.md:<line>
  - docs/<page2>.md:<line>
  - docs/<page3>.md:<line>

📊 **Found existing references:**
  - docs/<old-mention1>.md (updated to link)
  - docs/<old-mention2>.md (updated to link)

🔍 **Folder audit:** [No reorganization needed / Suggested: <reorganization-suggestion>]
```

## Decision Rules

### Evergreen Content Only

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

**Rule:** If it won't be useful in 6 months, keep it in chat.

### UPDATE vs CREATE

**UPDATE if:**
- Dedicated page exists at `docs/<category>/<topic>.md`
- Page is sparse/outdated
- New information complements existing

**CREATE if:**
- No dedicated page exists
- Only brief mentions in lists
- Topic deserves standalone documentation

### Category Auto-Detection Priority

1. **Exact match from semantic search results** (if topic found in existing category)
2. **Keyword matching** (tech keywords → technologies/, psychology keywords → psychology/)
3. **Ask user** if ambiguous:
   ```
   Found potential categories:
   1. technologies/
   2. ai/
   
   Which category? (or suggest new category)
   ```

### Link Quantity

- **High relevance match (score >0.8):** Add link
- **Medium relevance (0.5-0.8):** Add link if topic is central to page
- **Low relevance (<0.5):** Skip
- **Target:** 2-5 cross-references minimum

## Critical Rules

### ✅ DO

1. **Search first** - Always semantic + text search
2. **Copy-paste** - No rewording from sources
3. **Use Obsidian CLI** - For all file operations
4. **Full link paths** - From docs/ directory
5. **Verify links exist** - Check target file before linking
6. **Auto-categorize** - Based on semantic search + keywords
7. **5-field frontmatter** - slug, title, description, created, updated
8. **Natural language slugs** - `/topic-name` not `/folder/path/topic-name`
9. **Be concise** - Only add core/relevant content; put additional resources in "Links" or "Further Reading" section

### ❌ DON'T

1. **Skip search** - Always search first
2. **Reword sources** - Copy-paste verbatim
3. **Use Write tool** - Use Obsidian CLI instead
4. **Relative paths** - Use full paths from docs/
5. **Create broken links** - Verify target exists
6. **Add H1 heading** - Title comes from frontmatter
7. **Guess category** - Use semantic search or ask user
8. **Be verbose** - Avoid copying entire articles; extract only core concepts, key features, and essential info. Additional resources → "Links" section
9. **Delete during reorganization** - When reorganizing, NEVER delete links/content without confirmation. Only move/reorganize/split into files

**Sidebar ordering during reorganization:**
- Use numbered prefixes (`01-`, `02-`, `03-`) for files that need specific ordering
- Preserves order in both Docusaurus sidebar and Obsidian file list
- Example: `01-introduction.md`, `02-core-concepts.md`, `03-advanced.md`
- Only use when explicit ordering is important (tutorials, guides, sequential content)

## Example Executions

### Example 1: Technology

```
User: /note Apache Iggy https://github.com/apache/iggy

Step 1: Search
  mcp__obsidian-hybrid-search__search("Apache Iggy message streaming")
  grep -ri "iggy" docs/
  → Found: Brief mention in docs/technologies/kafka/others.md

Step 2: Fetch
  WebFetch("https://github.com/apache/iggy")
  → Extract features, description (raw text)

Step 3: Categorize
  Keywords: Apache, streaming, message broker
  Semantic results: kafka/, brokers/, apache/
  → Category: technologies/apache/

Step 4: Create
  File: docs/technologies/apache/apache-iggy.md
  Content: [frontmatter + copy-pasted features]

Step 5: Link
  - docs/technologies/kafka/others.md:35 (add to broker list)
  - docs/technologies/apache/readme.md:12 (add to Apache projects)

Step 6: Report
  ✅ Created: docs/technologies/apache/apache-iggy.md
  📂 Category: technologies/apache/ (Apache project + message streaming)
  🔗 Linked from: 2 pages
```

### Example 2: Mental Model

```
User: /note Eisenhower Matrix

Step 1: Search
  mcp__obsidian-hybrid-search__search("Eisenhower Matrix decision making")
  grep -ri "eisenhower" docs/
  → Found: No dedicated page, mention in docs/management/time-management.md

Step 2: Fetch
  (No URL provided)
  Ask: "Please provide URL or brief description of Eisenhower Matrix"
  User: "Decision framework: urgent/important 2x2 matrix"

Step 3: Categorize
  Keywords: decision, framework, productivity
  Semantic results: management/, psychology/
  → Category: psychology/mental-models/ (decision framework)

Step 4: Create
  File: docs/psychology/mental-models/eisenhower-matrix.md
  Content: [frontmatter + user description + structure]

Step 5: Link
  - docs/management/time-management.md:25 (replace mention with link)
  - docs/psychology/mental-models/readme.md:8 (add to index)

Step 6: Report
  ✅ Created: docs/psychology/mental-models/eisenhower-matrix.md
  📂 Category: psychology/mental-models/ (decision framework)
  🔗 Linked from: 2 pages
```

### Example 3: Health Topic

```
User: /note sleep hygiene https://sleepfoundation.org/sleep-hygiene

Step 1: Search
  mcp__obsidian-hybrid-search__search("sleep hygiene health wellness")
  grep -ri "sleep hygiene" docs/
  → Found: Scattered mentions, no dedicated page

Step 2: Fetch
  WebFetch("https://sleepfoundation.org/sleep-hygiene")
  → Extract practices, benefits (raw text)

Step 3: Categorize
  Keywords: sleep, health, wellness
  Semantic results: psychology/, management/
  Check: ls docs/health/ (doesn't exist)
  → Category: health/sleep/ (create new category)

Step 4: Create
  mkdir -p docs/health/sleep/
  File: docs/health/sleep/sleep-hygiene.md
  Content: [frontmatter + copy-pasted practices]

Step 5: Link
  - docs/psychology/cognitive-performance.md:45 (add related link)
  - docs/management/productivity.md:32 (add related link)

Step 6: Report
  ✅ Created: docs/health/sleep/sleep-hygiene.md
  📂 Category: health/sleep/ (new category created)
  🔗 Linked from: 2 pages
```

## Edge Cases

### No Clear Category Match

**Action:** Ask user with suggestions

```
Topic: "<topic>"

Couldn't auto-categorize. Suggestions based on keywords:
1. technologies/ (has keywords: software, tool)
2. psychology/ (has keywords: thinking, cognitive)
3. Create new: <suggested-category>/

Which category? Or suggest custom?
```

### Category Folder Doesn't Exist

**Action:** Auto-create with confirmation in summary

```bash
mkdir -p docs/<new-category>/
```

Report in summary:
```
📂 Category: <new-category>/ (✨ new category created)
```

### URL Fetch Fails

**Action:** Fall back to asking user

```
❌ Couldn't fetch from URL.

Please provide:
1. Alternative URL
2. Brief description/key points manually
```

### Topic Already Has Comprehensive Page

**Action:** UPDATE instead of create

```
ℹ️ Found existing page: docs/<category>/<topic>.md

Checking if update needed...
✅ Updated with new information from source
Updated: <sections-updated>
```

### Ambiguous Link Location

**Action:** Add link to most relevant page (highest semantic score)

Skip pages with semantic score <0.5

## Success Criteria

✅ Semantic + text search completed
✅ Content fetched from source (or user-provided)
✅ Category auto-detected (or user-selected)
✅ File created with proper frontmatter
✅ 2-5 cross-references added with full paths
✅ All links verified to exist
✅ Summary report provided
✅ Zero manual file browsing required

## Installation

To use this skill in Claude Code:

```bash
# Create skill directory
mkdir -p ~/.claude/skills/note

# Copy skill content
# (Copy the content between the --- markers from this file to SKILL.md)

# Reload skills
/reload-skills

# Use the skill
/note <topic> [url]
```

## Related Documentation

- [Claude Code](ai/llm/code-generation/claude-code.md) - Main Claude Code documentation with skills creation guide
- [Obsidian](devops/ides/obsidian.md) - Obsidian CLI reference for file operations
- [docs/CLAUDE.md](../../CLAUDE.md) - Navigation and search strategies for this knowledge base
