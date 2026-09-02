---
name: flashcards
description: Generate atomic, scientifically-grounded flashcards for the LearnKit Obsidian plugin from notes in this knowledge base, following the Three-Layer Framework (L1 Recall, L2 Understanding, L3 Boundaries) and strict atomicity rules. Use when the user runs /flashcards <topic-or-file-path>.
---

# Flashcard Skill

Full spec: [docs/ai/llm/code-generation/flashcard-skill.md](../../../docs/ai/llm/code-generation/flashcard-skill.md)

## Usage

```text
/flashcards <file.md#section>
/flashcards <topic>
/flashcards "cognitive load theory" --focus=L2
```

## Config

```bash
VAULT="/Users/deepak/deepaksood619.github.io/docs"
```

## Workflow

### 1. Discovery

```bash
mcp__obsidian-hybrid-search__search(query="<topic>")
find docs -name "flashcards*.md" -type f
grep -r "^T |.*{topic}" docs/*/flashcards*.md
```

Target file: same folder as the source note, named `flashcards.md` or `flashcards-{subtopic}.md`.

If no source material exists at all, offer to run [/note](../note/SKILL.md) first to create it, rather than generating cards from thin air.

### 2. Content analysis

- Read the relevant section (300-500 word chunks) or, if given a topic, search + read matching sections.
- Classify content type to set layer emphasis: definition-heavy → high L1; theorem/proof → balanced L1/L2; algorithm → high across all; intuition/motivation → high L2.

### 3. Generation

**Atomicity rules:** one concept per card · no "and" questions (split them) · no layer mixing · max 3 bullets or 2 sentences per answer · 3-7 cards per section.

**Card format:**

```text
T | {Card Title} |
Q | {Question} |
A | {Answer} |
I | {Insight}
```

**Layer distribution:** 40-50% L1 (definitions, formulas, facts) · 30-40% L2 (why/how, intuition, connections) · 20-30% L3 (limitations, edge cases, failure modes).

**⚠️ LearnKit tags:** never manually add or remove `^learnkit-xxxx` tags — the plugin auto-generates and tracks them. Only touch a tag when deleting the entire card.

### 4. Refusal policy

Do NOT create cards for: multi-step processes (>3 steps), worked examples, extended proofs/derivations, lists of >3 tightly-coupled items, compound questions. For a `≤3`-item tightly-coupled list, prefer a cloze card:

```text
CQ | The three properties are {{c1::A}}, {{c2::B}}, {{c3::C}}. |
```

When refusing, tell the user what you generated instead and why (e.g. "kept as reference notes" / "suggest practice problems instead").

### 5. File management

- If `flashcards.md`/`flashcards-{topic}.md` exists: `Read` it, check for duplicate questions (>80% semantic similarity → skip), append new cards under matching subtopic headings, update frontmatter counts.
- If creating new: frontmatter needs `slug`, `title`, `description`, `created`, `updated`, `total_cards`, `difficulty_distribution` (beginner/intermediate/advanced = L1/L2/L3 counts), `source_notes` (paths).

### 6. Quality self-check per card

Question asks ONE thing · answer matches the layer's purpose · ≤3 bullets or ≤2 sentences · can't be meaningfully split further · layer label correct · source referenced in the Insight field.

### 7. Output summary

```text
Generated {N} flashcards for {topic}:
- {X} L1 (Recall) cards
- {Y} L2 (Understanding) cards
- {Z} L3 (Boundaries) cards

Saved to: {file_path}
Source notes: {note1.md} ({section}), {note2.md} ({section})
Refused {R} potential cards (worked examples, >3 step processes)
```

## Topic → folder mapping

| User input | Target folder |
|---|---|
| transformers, LLM, GPT | `docs/ai/llm/` |
| B-trees, algorithms | `docs/algorithms/` |
| Postgres, databases | `docs/databases-sql/` |
| book title | `docs/book-summaries/` |
| cognitive load, psychology | `docs/psychology/` |
| P/E ratio, finance | `docs/economics/` |

## Final checklist

- [ ] Searched existing notes and flashcards first
- [ ] Cards are atomic (one concept each)
- [ ] Layer framework applied correctly, with target distribution
- [ ] Source reference in each Insight field
- [ ] Proper frontmatter (new file) or updated counts (existing file)
- [ ] Checked for duplicates before appending
- [ ] Gave the user a summary with counts
- [ ] Refused unsuitable content with an explanation, not silently

## Related skills

- [/note](../note/SKILL.md) — create source notes first if none exist for the requested topic
- [/study](../study/SKILL.md) — good precursor to build/refresh the source material these cards are generated from
