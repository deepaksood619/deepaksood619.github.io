---
name: study
description: Interactive study session over this knowledge base - finds existing notes on a topic, synthesizes them, fetches the latest information, teaches the topic, answers follow-up questions, and updates notes with new learnings. Use when the user runs /study <topic>.
---

# Study Skill - Interactive Learning & Note Augmentation

Full spec: [docs/ai/llm/code-generation/study-skill.md](../../../docs/ai/llm/code-generation/study-skill.md)

## Usage

```text
/study <topic>
/study Apache Kafka
/study mental models
```

## Config

```bash
VAULT="/Users/deepak/deepaksood619.github.io/docs"
```

## Workflow (Interactive Learning Loop)

### 1. Find existing notes

```bash
mcp__obsidian-hybrid-search__search(query="<topic>", limit=20)
grep -ri "<topic>" docs/
```

List relevant notes found (with scores), distinguish main notes from peripheral mentions, note gaps.

### 2. Read & synthesize existing knowledge

`Read` the top matches and build a structured summary of what's already documented, including connections between notes and any contradictions/outdated info.

### 3. Fetch latest information

`WebSearch` for current developments (`"<topic> latest <current year>"`, `"<topic> best practices <current year>"`), official docs, and industry best practices.

### 4. Teach the topic

Present a structured lesson:

```markdown
## What You Already Know (From Your Notes)
- ...

## Latest Developments
- ...

## Core Concepts Explained
1. ...

## Key Takeaways
- ...

## Questions for Deeper Understanding
1. ...
```

Explain clearly, connect to what the user's notes already say, use examples/analogies, reference specific notes for deeper reading.

### 5. Interactive Q&A loop

Answer follow-up questions, referencing existing notes and fetching more via WebSearch/WebFetch as needed. Track which answers are worth persisting.

### 6. Update notes with new learnings

- Complements an existing note → `Read` it, `Edit` in a new section, bump `updated:` in frontmatter.
- Significant new subtopic with no home → invoke [/note](../note/SKILL.md) to create it properly (search, categorize, link, frontmatter).
- Only persist evergreen, professionally-written facts — never raw Q&A transcript text or session-specific reasoning.

### 7. Session summary

```markdown
## Study Session Complete: <Topic>

### 📚 Notes Found
- docs/<note1>.md (score: 0.95)

### 🎓 Key Learnings
1. ...

### 🆕 Latest Information
- ...

### 📝 Notes Updated
✅ docs/<note1>.md - Added section on [topic]

### 🔗 Related Topics to Study Next
- ...
```

## Decision Rules

**Update existing note** when new info directly extends, clarifies, or adds recent developments to a note that's the primary source for that subtopic.

**Create new note** (via `/note`) when the topic deserves standalone documentation or no existing note has a clear home for it.

**What to add to notes:** factual information, clarifications, recent developments, examples, practical applications — written encyclopedically, not as dialogue.

## Critical Rules

✅ Search comprehensively (semantic + text) · Read all relevant notes before teaching · Always check for latest info, don't rely on stale notes · Teach clearly, not just facts · Be interactive · Track which Q&A should update notes · Update via `/note` conventions · Summarize the session

❌ Skip existing notes · Use outdated info · Copy Q&A verbatim into notes · Duplicate content instead of updating · Break existing note structure/formatting · Forget to bump `updated:` in frontmatter

## Related skills

- [/note](../note/SKILL.md) — used to persist significant new learnings as a properly-categorized, linked note
- [/flashcards](../flashcards/SKILL.md) — good follow-up once a topic has been studied, to drill recall
