---
name: note
description: Automatically add any topic (technology, concept, mental model, food, health, etc.) to this Obsidian/Docusaurus knowledge base with semantic search, auto-categorization, and cross-linking. Use when the user runs /note <topic> [url].
---

# Note Skill - Automated Knowledge Base Organization

Full spec: [docs/ai/llm/code-generation/note-skill.md](../../../docs/ai/llm/code-generation/note-skill.md)

Automatically add any topic to the knowledge base with intelligent organization, without manual file browsing.

## Usage

```text
/note <topic> [url]
/note Apache Iggy https://github.com/apache/iggy
/note sleep hygiene
/note Eisenhower Matrix
```

## Config

```bash
VAULT="/Users/deepak/deepaksood619.github.io/docs"
OBSIDIAN="/Applications/Obsidian.app/Contents/MacOS/Obsidian"
```

## Workflow (Fully Automated)

### 1. Search for existing content

```bash
mcp__obsidian-hybrid-search__search(query="<topic> related concepts", limit=20)
grep -ri "<topic>" docs/
```

- Dedicated page exists → UPDATE mode
- Only scattered mentions → CREATE mode
- No mentions → CREATE mode (categorize from topic keywords)

### 2. Fetch source content

- If URL provided: `WebFetch(url, prompt="Extract key information, features, description - return raw content for copy-paste, do not reword")`
- If no URL: ask the user for a URL or a brief description/key points
- **Copy-paste rule:** do NOT reword — extract close to verbatim from the source

### 3. Auto-determine category

Match topic keywords + semantic search results against the existing taxonomy (`docs/technologies/`, `docs/ai/`, `docs/psychology/`, `docs/economics/`, `docs/algorithms/`, `docs/data-structures/`, `docs/book-summaries/`, `docs/education/`, etc.). Create a new category folder only if nothing fits, and call it out in the summary. If ambiguous, ask the user to pick.

### 4. Create/update the file

**Frontmatter (always 5 fields):**

```yaml
---
slug: /<seo-friendly-natural-language-slug>
title: <Topic Name>
description: <One-line description from source or user>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
---
```

- slug: /natural language, lowercase-with-hyphens, 2-5 words, descriptive for SEO (`/apache-kafka-streams`, not `/kafka`). Never change an existing slug.
- No H1 heading — title comes from frontmatter.
- Structure: 1-2 sentence intro, then `## Key Points / Features` (5-10 bullets), a couple of concise topical sections, then `## Links` for source + further reading.
- Length target: ~50-150 lines. Put supplementary detail under Links, not inline.
- Always fence code blocks with a language (use ```text for plain text) — unfenced blocks break Docusaurus rendering.
- Escape MDX-unsafe characters: `<50`, `>100` (backtick-wrapped).

**Small content rule (CRITICAL):** if the material is one paragraph / `<10` lines, do NOT create a new file — add it as a bolded, condensed paragraph in the most relevant existing file instead, e.g. `**Night Terrors:** Different from nightmares... [Source](url)`. Only create a new file for 50+ lines or when more material is expected later.

**Use the Obsidian CLI, not raw Write, so links/backlinks stay consistent:**

```bash
$OBSIDIAN create path="<category>/<topic-name>.md" content="<full-content>" vault="$VAULT"
```

If the file already exists, `Read` it and `Edit` in new sections instead of recreating it, and bump `updated:` in the frontmatter.

### 5. Auto-link from related pages

From the Step 1 search results, add this new page as a link into 2-5 relevant existing pages (comparison/list pages, overview/README pages, "Related Topics" sections). Always use full paths from `docs/`, e.g. `[Link](technologies/kafka/topic.md)`, never `../relative/paths`. Verify the target file exists before linking (`ls docs/<path>`).

- High relevance (score > 0.8): add link
- Medium (0.5-0.8): add if topic is central to that page
- Low (< 0.5): skip

### 6. Audit the folder

After creating a file, `ls -la docs/<category>/` and check whether files should be grouped, recategorized, or split into a subfolder. Suggest but always confirm before reorganizing — never delete existing links/content without explicit confirmation.

### 7. Report summary

```markdown
✅ **Created:** `docs/<category>/<topic>.md`
📂 **Category:** <category> (auto-detected from: <reason>)
🔗 **Linked from:** docs/<page1>.md, docs/<page2>.md
🔍 **Folder audit:** [No reorganization needed / Suggested: <...>]
```

## Decision Rules

**Evergreen only** — permanent facts, docs, patterns, reference material. Never write temporary analysis, debugging output, or session-specific reasoning to notes (keep that in chat).

**ADD-TO-EXISTING** (small, related file exists) vs **UPDATE** (dedicated page exists but sparse/outdated) vs **CREATE** (substantial content, no home for it, worth standalone documentation).

## Critical Rules

✅ Search first (semantic + text) · Copy-paste, don't reword · Use Obsidian CLI for file ops · Full link paths from `docs/` · Verify link targets exist · 5-field frontmatter · Natural-language slugs · Be concise, push extras to Links

❌ Skip search · Reword sources · Use `Write` directly for vault edits · Relative link paths · Create broken links · Add an H1 · Guess category without checking · Delete content during reorganization without confirmation

## Related skills

- [/study](../study/SKILL.md) — interactive learning session that can call `/note` to persist new learnings
- [/flashcards](../flashcards/SKILL.md) — suggests `/note` first when no source material exists yet for a topic
