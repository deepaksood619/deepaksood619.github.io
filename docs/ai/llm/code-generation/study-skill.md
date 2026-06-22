---
slug: /study-skill
title: Study Skill - Interactive Learning & Note Augmentation
description: Claude Code skill for interactive study sessions that find notes, teach topics, fetch latest info, and update knowledge base
created: 2026-06-22
updated: 2026-06-22
---

Interactive study session that finds your existing notes, teaches you the topic, fetches latest information, answers follow-up questions, and updates notes with new learnings.

## Usage

```bash
/study <topic>
/study Apache Kafka
/study mental models
/study machine learning optimization
/study sleep hygiene
```

## Workflow (Interactive Learning Loop)

### Step 1: Find Existing Notes

**Search your knowledge base:**

```bash
# Semantic search for topic
mcp__obsidian-hybrid-search__search(
  query="<topic>",
  limit=20
)

# Text search for exact mentions
grep -ri "<topic>" docs/
```

**Analyze findings:**
- List all relevant notes found (with scores)
- Identify main notes vs peripheral mentions
- Note gaps in current knowledge base

### Step 2: Read & Synthesize Existing Knowledge

**Read all relevant notes:**

```bash
# Read top matches
Read(path="docs/<category>/<note1>.md")
Read(path="docs/<category>/<note2>.md")
Read(path="docs/<category>/<note3>.md")
```

**Synthesize current knowledge:**
- Create structured summary from existing notes
- Identify what you already know
- Highlight connections between notes
- Note any contradictions or outdated info

### Step 3: Fetch Latest Information

**Search for current information:**

```bash
# Web search for latest developments
WebSearch(query="<topic> latest 2026")
WebSearch(query="<topic> best practices 2026")
```

**Key sources to check:**
- Official documentation (if tech topic)
- Recent academic papers (if research topic)
- Industry best practices
- Latest trends/developments

### Step 4: Teach the Topic (Interactive)

**Present structured lesson:**

```markdown
# <Topic> - Study Session

## What You Already Know (From Your Notes)
- [Summary from existing notes]
- [Key concepts you've documented]
- [Connections to other topics]

## Latest Developments (2026)
- [New information not in your notes]
- [Updated best practices]
- [Recent changes/trends]

## Core Concepts Explained
1. [Concept 1 - explained clearly]
2. [Concept 2 - explained clearly]
3. [Concept 3 - explained clearly]

## Key Takeaways
- [Main points to remember]
- [Practical applications]
- [Common misconceptions]

## Questions for Deeper Understanding
1. [Thought-provoking question 1]
2. [Thought-provoking question 2]
3. [Thought-provoking question 3]
```

**Teaching style:**
- Clear, concise explanations
- Connect to what user already knows (from their notes)
- Use examples and analogies
- Highlight practical applications
- Reference specific notes for deeper reading

### Step 5: Interactive Q&A Loop

**Answer follow-up questions:**
- User asks questions about the topic
- Provide detailed answers
- Reference existing notes when relevant
- Fetch additional information if needed (WebSearch/WebFetch)
- Track which answers should be added to notes

**For each Q&A:**
```markdown
**Q:** [User's question]

**A:** [Detailed answer]
- [Explanation]
- [Examples]
- [References to existing notes if applicable]

📝 **Add to notes:** [Yes/No] - [Which note to update]
```

### Step 6: Update Notes with New Learnings

**After Q&A session, update notes:**

**If new information complements existing note:**
```bash
# Read current note
Read(path="docs/<category>/<note>.md")

# Add new section or update existing
Edit(
  file_path="docs/<category>/<note>.md",
  old_string="## Links",
  new_string="## [New Section from Study Session]

[New information learned]

## Links"
)

# Update frontmatter date
Edit(
  file_path="docs/<category>/<note>.md",
  old_string="updated: <old-date>",
  new_string="updated: <today>"
)
```

**If significant new information, create new note:**
```bash
# Use /note skill to create new note
/note <new-topic> [url]
```

### Step 7: Study Session Summary

**Report what was learned and updated:**

```markdown
## Study Session Complete: <Topic>

### 📚 Notes Found
- docs/<note1>.md (score: 0.95)
- docs/<note2>.md (score: 0.87)
- docs/<note3>.md (score: 0.76)

### 🎓 Key Learnings
1. [Main learning 1]
2. [Main learning 2]
3. [Main learning 3]

### 🆕 Latest Information (2026)
- [New development 1]
- [New development 2]

### 📝 Notes Updated
✅ docs/<note1>.md - Added section on [topic]
✅ docs/<note2>.md - Updated with latest [info]
✅ Created: docs/<note3>.md - [new topic]

### 🔗 Related Topics to Study Next
- [Related topic 1]
- [Related topic 2]
```

## Decision Rules

### When to Update Existing Notes

**UPDATE existing note if:**
- New information directly extends existing content
- Clarifies or corrects existing information
- Adds examples or recent developments
- Note is the primary source for that subtopic

### When to Create New Notes

**CREATE new note if:**
- Topic deserves standalone documentation
- Significant new subtopic emerged from study
- Current notes don't have a clear home for new info
- Use `/note` skill for creation

### What to Add to Notes

**ADD to notes:**
- ✅ Factual information learned
- ✅ Important clarifications
- ✅ Recent developments/updates
- ✅ Useful examples
- ✅ Practical applications
- ❌ NOT conversational Q&A text
- ❌ NOT temporary study session notes

**Format additions professionally:**
- Extract key points from Q&A
- Write in encyclopedic style
- Integrate with existing content
- Maintain note's structure and tone

## Critical Rules

### ✅ DO

1. **Search comprehensively** - Use both semantic + text search
2. **Read all relevant notes** - Don't skip related content
3. **Fetch latest info** - Always check for 2026 updates
4. **Teach clearly** - Explain concepts, don't just list facts
5. **Be interactive** - Encourage questions, answer thoroughly
6. **Track learnings** - Mark which Q&A should update notes
7. **Update professionally** - Add to notes in proper format
8. **Use Obsidian CLI** - For all file operations (use `/note` skill for new notes)
9. **Connect concepts** - Link to related notes
10. **Summarize session** - Show what was learned and updated

### ❌ DON'T

1. **Skip existing notes** - Always search knowledge base first
2. **Use outdated info** - Fetch latest 2026 information
3. **Copy Q&A verbatim** - Extract and format professionally
4. **Create duplicate content** - Update existing notes when possible
5. **Be verbose in updates** - Keep additions concise and relevant
6. **Break note structure** - Maintain existing formatting
7. **Skip summary** - Always provide study session report
8. **Forget to update dates** - Change `updated:` in frontmatter

## Teaching Guidelines

### Explain Concepts Clearly

- Start with what user already knows (from their notes)
- Build on existing knowledge
- Use analogies and examples
- Connect to practical applications
- Highlight common misconceptions

### Encourage Deep Understanding

- Ask thought-provoking questions
- Encourage user to ask questions
- Explain "why" not just "what"
- Show connections between concepts
- Reference specific notes for deeper reading

### Keep It Interactive

- Present information in digestible chunks
- Pause for questions after each section
- Adapt explanations based on questions
- Use examples relevant to user's domain

## Example Session

```
User: /study Apache Kafka

Step 1: Search
  mcp__obsidian-hybrid-search__search("Apache Kafka")
  → Found 5 notes:
    - docs/technologies/kafka/core/intro-to-kafka.md (0.92)
    - docs/technologies/kafka/core/kafka-consumers.md (0.88)
    - docs/technologies/kafka/core/kafka-guarantees.md (0.85)
    - docs/technologies/kafka/others.md (0.76)
    - docs/technologies/confluent/governance/confluent-kafka.md (0.71)

Step 2: Read & Synthesize
  Read all 5 notes
  Summary: "You have solid coverage of Kafka basics, consumers, and guarantees.
  Your notes were last updated 2024. Let me check for 2026 updates..."

Step 3: Fetch Latest
  WebSearch("Apache Kafka 4.0 new features 2026")
  → Found: KRaft is now default, new queue features, faster rebalancing

Step 4: Teach
  # Apache Kafka - Study Session

  ## What You Already Know
  - Stream processing platform, pub/sub messaging
  - Consumer groups, partitions, offsets
  - Exactly-once semantics, idempotent producers
  - [Connected to: message-oriented-architecture.md]

  ## Latest Developments (2026)
  - Kafka 4.0 released: KRaft replaces ZooKeeper (default)
  - New queue features for simpler messaging patterns
  - Faster consumer group rebalancing
  - [Not yet in your notes - should we add?]

  ## Core Concepts Refresher
  [Clear explanations with examples]

  ## Questions?

User: How does KRaft compare to ZooKeeper?

Response:
  **Q:** How does KRaft compare to ZooKeeper?

  **A:** KRaft (Kafka Raft) is Kafka's new consensus protocol...
  [Detailed explanation]
  - Simpler deployment (one less system)
  - Faster metadata updates
  - Better scalability
  - Your note kafka-architecture.md mentions ZooKeeper - we should update it

  📝 Add to notes: Yes - Update docs/technologies/kafka/core/intro-to-kafka.md

Step 6: Update Notes
  ✅ Updated intro-to-kafka.md - Added "Kafka 4.0 & KRaft" section
  ✅ Updated frontmatter: updated: 2026-06-22

Step 7: Summary
  ## Study Session Complete: Apache Kafka

  ### 📚 Notes Found: 5 notes
  ### 🎓 Key Learnings: KRaft, Kafka 4.0, queues
  ### 📝 Notes Updated: intro-to-kafka.md
  ### 🔗 Related: Study "KRaft internals" or "Kafka queues vs topics"
```

## Success Criteria

✅ All relevant notes found via semantic + text search
✅ Existing knowledge synthesized from notes
✅ Latest 2026 information fetched and presented
✅ Topic taught clearly with examples
✅ User questions answered thoroughly
✅ Relevant learnings added to notes professionally
✅ Study session summary provided
✅ Related topics suggested for continued learning

## Installation

To use this skill in Claude Code:

```bash
# Create skill directory
mkdir -p ~/.claude/skills/study

# Copy skill content
# (Copy the content between the --- markers from this file to SKILL.md)

# Reload skills
/reload-skills

# Use the skill
/study <topic>
```

## Related Documentation

- [Note Skill](ai/llm/code-generation/note-skill.md) - Automated knowledge base organization
- [Claude Code](ai/llm/code-generation/claude-code.md) - Main Claude Code documentation
- [Obsidian](devops/ides/obsidian.md) - Obsidian CLI reference
- [docs/CLAUDE.md](../../CLAUDE.md) - Navigation and search strategies
