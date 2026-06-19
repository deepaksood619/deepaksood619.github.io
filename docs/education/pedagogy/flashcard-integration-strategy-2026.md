---
slug: /education/pedagogy/flashcard-integration-strategy-2026
title: Flashcard Integration Strategy 2026
description: Explore an active recall approach for LLM-maintained PKM using LearnKit flashcards to enhance learning and retention.
created: 2026-06-19
last_update: 2026-06-19
---
**Context:** Shifting focus from passive note-taking to active recall via LearnKit flashcards

**Current Setup:** LearnKit in Obsidian, `flashcards.md` per folder, excluded from Docusaurus build

**Vision:** LLM-generated flashcards from notes, daily spaced repetition, bidirectional sync with source notes

## Strategic Rationale: Flashcards Over Notes

### Why This Shift Makes Sense

**Traditional PKM Problem:**

- Writing notes ≠ learning
- Notes accumulate, rarely reviewed
- Passive consumption, weak retention
- 7,636 notes but how much is truly internalized?

**Flashcard Advantage:**

- **Active recall**: Retrieval practice is proven learning technique
- **Spaced repetition**: LearnKit handles scheduling
- **Forced synthesis**: Questions require understanding
- **Measurable**: Track mastery per concept
- **Daily habit**: 15-30 min/day vs sporadic note reviews

**The Shift:**

```
Old: Write notes → Occasionally re-read → Forget 80%
New: Write notes → LLM generates flashcards → Daily review → Internalize 80%
```

### Flashcard-First Mental Model

Think of your PKM as **two-layer system:**

1. **Reference Layer (Notes)**: Long-term storage, context-rich, LLM-maintained
2. **Active Layer (Flashcards)**: Daily practice, concept mastery, spaced repetition

**Workflow:**

```
Encounter concept → Note (context + examples) → Flashcards (core facts) → Daily review → Mastery
                                                        ↓
                                              Update note if gaps found
```

## Current LearnKit Format Analysis

### Observed Formats in flashcards.md

**Format 1: Block Reference + T/Q/A/I** (Best for LLM generation)

```markdown
^learnkit-339921152
T | LLM 'Reversal Curse' Example |
Q | What is the 'reversal curse' illustrated by the example involving Tom Cruise's mother? |
A | An LLM knows the answer to 'Who is Tom Cruise's mother?' but fails to answer the reversed question 'Who is Mary Lee Pfeiffer's son?', showing imperfect knowledge representation. |
I | This example demonstrates that LLMs may have knowledge but lack consistent relational understanding, leading to errors in reversed queries. |
```

**Format 2: Cloze deletions**

```markdown
^learnkit-622528967
? {{c1::Tokenization}} is the process of breaking text into smaller units (words, subwords, or characters) so that LLMs can process numerical representations instead of raw text.
<!-- Q1: Tokenization definition -->
```

**Format 3: Question-answer pairs**

```markdown
? What is tokenization and why is it critical for LLMs?
:: Tokenization breaks text into tokens (words/subwords/characters) so LLMs can process numerical token representations. It enables handling diverse languages, managing rare/unknown words, and optimizing vocabulary size — enhancing computational efficiency and performance.
<!-- Q1: Tokenization importance -->
```

**Format 4: Reversed pairs (definition lookup)**

```markdown
^learnkit-453100316
?? Embedding :: Dense vector representation of a token
<!-- Q10: Embedding definition reversed -->
```

### LearnKit Metadata

- **Block ID**: `^learnkit-[random-numbers]` - Obsidian block reference
- **T (Title)**: Card title/category
- **Q (Question)**: The prompt
- **A (Answer)**: The response
- **I (Insight)**: Additional context/mnemonic

## Recommended Architecture

### Option A: One flashcards.md Per Folder (Your Current Approach)

**Structure:**

```
docs/
├── ai/
│   ├── llm/
│   │   ├── fundamentals/
│   │   │   ├── intro.md
│   │   │   ├── models.md
│   │   │   └── flashcards.md  ← All LLM fundamentals cards
│   │   ├── rag/
│   │   │   ├── rag-retrieval-augmented-generation.md
│   │   │   └── flashcards.md  ← All RAG cards
│   │   └── flashcards.md      ← All LLM cards (aggregate)
│   └── flashcards.md          ← All AI cards (aggregate)
├── databases/
│   ├── flashcards.md          ← All database cards
│   └── clickhouse/
│       └── flashcards.md      ← Clickhouse-specific cards
└── flashcards.md              ← Root aggregator (optional)
```

**Pros:**

- ✅ LearnKit auto-categorizes by folder
- ✅ Natural hierarchy matches knowledge domains
- ✅ Easy to review by topic ("review all LLM cards")
- ✅ Clean separation from notes

**Cons:**

- ⚠️ Can grow large (100+ cards per folder)
- ⚠️ Hard to trace card → source note
- ⚠️ Duplicates if concepts span folders

**Verdict:** **Good for your use case** given 380 folders and hierarchical thinking.

### Option B: One flashcards.md Per Note (Alternative)

**Structure:**

```
docs/
├── ai/
│   ├── llm/
│   │   ├── intro.md
│   │   ├── intro.flashcards.md         ← Cards from intro.md
│   │   ├── models.md
│   │   ├── models.flashcards.md        ← Cards from models.md
│   │   └── transformers.md
│   │       └── transformers.flashcards.md
```

**Pros:**

- ✅ Perfect traceability (card → source note)
- ✅ Easier to regenerate cards when note updates
- ✅ Modular (delete note → delete flashcards)

**Cons:**

- ❌ 3,074 flashcard files (cluttered)
- ❌ LearnKit categorization less useful
- ❌ Harder to review by topic

**Verdict:** **Not recommended** for your scale.

### Option C: Hybrid (Recommended)

**Structure:**

```
docs/
├── ai/
│   ├── llm/
│   │   ├── fundamentals/
│   │   │   └── flashcards.md           ← Leaf-level only
│   │   ├── rag/
│   │   │   └── flashcards.md
│   │   ├── agents/
│   │   │   └── flashcards.md
│   │   └── prompting/
│   │       └── flashcards.md
│   └── computer-vision/
│       └── flashcards.md
├── databases/
│   ├── clickhouse/
│   │   └── flashcards.md
│   ├── postgres/
│   │   └── flashcards.md
│   └── mongodb/
│       └── flashcards.md
```

**Plus metadata in flashcards.md:**

```markdown
---
type: flashcards
domain: ai/llm/fundamentals
auto_generated: true
last_generated: 2026-06-19T10:30:00Z
source_notes:
  - intro.md
  - models.md
  - limitations-problems.md
total_cards: 45
---

# LLM Fundamentals Flashcards

> Auto-generated from 3 notes in ai/llm/fundamentals/

## From: intro.md (15 cards)

^learnkit-123456
T | LLM Definition |
Q | What defines a Large Language Model? |
A | An AI system trained on vast text corpora to understand and generate human-like language. With billions of parameters, it excels in translation, summarization, and question answering. |
I | Source: intro.md#what-is-llm |

...
```

**Pros:**

- ✅ Best traceability (source_notes metadata)
- ✅ Manageable file count (~50-100 flashcard files vs 3,074)
- ✅ LearnKit folder categorization preserved
- ✅ Clear regeneration scope (folder-level)
- ✅ Scales to 50K notes (just add folders)

**Cons:**

- ⚠️ Requires discipline (don't create flashcards.md at every level)

**Verdict:** **Recommended.** Balance of organization and scale.

## LLM Flashcard Generation Strategy

### Principles for LLM-Generated Flashcards

**1. Generate from Note Sections, Not Whole Notes**

Bad:

```
LLM: "Generate flashcards from this 2000-word note on transformers"
Result: 50 low-quality cards, many overlapping
```

Good:

```
LLM: "Generate flashcards for the 'Self-Attention Mechanism' section (300 words)"
Result: 5 high-quality cards, each testing distinct concept
```

**2. Card Types by Content Type**

| Content Type | Flashcard Format | Example |
|--------------|------------------|---------|
| Definition | Cloze deletion | `{{c1::Transformer}} is an architecture using {{c2::self-attention}}` |
| Process/Steps | Q&A with ordered list | Q: Steps in BERT pretraining? A: 1) Mask tokens 2) Train to predict... |
| Comparison | Q&A with table | Q: Transformers vs RNNs? A: [comparison table] |
| Example | Q&A with scenario | Q: Example of attention score calculation? A: [worked example] |
| Fact | T/Q/A/I format | T: GPT-3 Parameters \| Q: How many? \| A: 175B \| I: 10x GPT-2 |
| Mnemonic | Cloze with context | `To remember BERT layers: {{c1::12}} encoder layers, {{c2::768}} hidden size` |

**3. Difficulty Levels**

```yaml
# In flashcards.md frontmatter
cards:
  - id: learnkit-123
    difficulty: beginner  # Definition, basic fact
    mastery_required: false
  - id: learnkit-456
    difficulty: intermediate  # Application, comparison
    mastery_required: true
  - id: learnkit-789
    difficulty: advanced  # Synthesis, edge cases
    mastery_required: true
```

**4. Anti-Patterns to Avoid**

❌ **Vague questions**: "What is transformers?" → Too broad
✅ **Specific questions**: "What mechanism do transformers use instead of recurrence?"

❌ **Trivia**: "Who invented BERT?" → Low value unless person-focused domain
✅ **Concepts**: "What problem does BERT's masked language model solve?"

❌ **Copy-paste**: Answer = verbatim note text
✅ **Synthesized**: Answer = distilled essence in 1-2 sentences

❌ **Orphan cards**: No link to source
✅ **Traceable cards**: Metadata shows source note + section

### LLM Prompts for Flashcard Generation

**Prompt 1: Generate Cards from Note Section**

```
You are generating LearnKit flashcards from a knowledge note section.

Note: {note_title}
Section: {section_heading}
Content:
{section_content}

Requirements:
1. Generate 3-7 flashcards (more for complex sections, fewer for simple)
2. Use T/Q/A/I format (Title, Question, Answer, Insight)
3. Each card tests ONE distinct concept
4. Question must be specific and unambiguous
5. Answer must be concise (1-3 sentences max)
6. Insight adds mnemonic, example, or context
7. Include source reference in Insight: "Source: {note_file}#{section_slug}"
8. Generate unique block ID: ^learnkit-{random-9-digits}

Card types to consider:
- Definitions (cloze: {{c1::term}})
- Processes (Q: steps? A: 1,2,3...)
- Comparisons (Q: X vs Y? A: table/bullets)
- Examples (Q: example of X? A: scenario)
- Facts (Q: metric/number? A: value + context)

Output format:
^learnkit-{id}
T | {Card Title} |
Q | {Question} |
A | {Answer} |
I | {Insight} | Source: {note}#{section} |

[blank line between cards]
```

**Prompt 2: Update Cards When Note Changes**

```
You are updating LearnKit flashcards after a note edit.

Old section content:
{old_content}

New section content:
{new_content}

Existing cards:
{existing_cards}

Task:
1. Identify cards now outdated (answer changed, concept removed)
2. Generate new cards for new concepts
3. Keep unchanged cards as-is
4. Output:
   - KEEP: [list card IDs to preserve]
   - UPDATE: [card ID + new Q/A/I]
   - DELETE: [card IDs now invalid]
   - NEW: [new cards in T/Q/A/I format]

Changelog comment:
<!-- Updated 2026-06-19: [reason] -->
```

**Prompt 3: Generate Cloze Cards from Definitions**

```
Extract definition-style facts and generate cloze deletion flashcards.

Content:
{section_content}

Rules:
1. Only create cloze for factual, memorable definitions
2. Max 2 clozes per sentence (c1, c2)
3. Cloze should be key term or number
4. Add <!-- context --> comment

Format:
^learnkit-{id}
? {{c1::Term}} is {{c2::definition}} in the context of {{c3::domain}}.
<!-- Source: {note}#{section} -->
```

### Automation Workflow

**Daily: New Note Processing**

```python
def generate_flashcards_for_new_note(note_path):
    note = parse_note(note_path)
    domain = extract_domain_from_path(note_path)
    flashcard_file = f"{domain}/flashcards.md"

    cards = []
    for section in note.sections:
        if should_generate_cards(section):  # Skip intro, references, changelog
            prompt = build_flashcard_prompt(note.title, section)
            new_cards = call_llm(prompt)
            cards.extend(new_cards)

    append_to_flashcard_file(flashcard_file, cards, source_note=note_path)
    update_frontmatter(flashcard_file, add_source=note_path, card_count=len(cards))
```

**Weekly: Note Update Detection**

```python
def update_flashcards_for_changed_notes():
    changed_notes = get_notes_changed_last_week()

    for note_path in changed_notes:
        domain = extract_domain_from_path(note_path)
        flashcard_file = f"{domain}/flashcards.md"

        if not flashcard_file.exists():
            continue  # No existing cards

        existing_cards = parse_flashcards(flashcard_file, source_filter=note_path)
        note_diff = get_note_diff(note_path)

        prompt = build_update_prompt(note_diff, existing_cards)
        updates = call_llm(prompt)

        apply_card_updates(flashcard_file, updates)
```

**Monthly: Card Quality Audit**

```python
def audit_flashcard_quality():
    all_flashcard_files = find_flashcard_files()

    issues = []
    for fc_file in all_flashcard_files:
        cards = parse_flashcards(fc_file)

        for card in cards:
            # Check for common issues
            if len(card.answer) > 500:  # Too verbose
                issues.append(("verbose", fc_file, card.id))
            if not has_source_reference(card):  # Untraceable
                issues.append(("no_source", fc_file, card.id))
            if is_vague_question(card.question):  # Too broad
                issues.append(("vague", fc_file, card.id))

    generate_quality_report(issues)
    create_fix_tasks(issues)
```

## Flashcard File Structure

### Recommended Frontmatter

```yaml
---
type: flashcards
domain: ai/llm/fundamentals
auto_generated: true
last_generated: 2026-06-19T10:30:00Z
last_reviewed: 2026-06-18  # When YOU last studied these
source_notes:
  - intro.md
  - models.md
  - limitations-problems.md
total_cards: 45
difficulty_distribution:
  beginner: 15
  intermediate: 20
  advanced: 10
mastery_stats:
  learned: 30
  learning: 10
  new: 5
next_review: 2026-06-20  # LearnKit scheduling
---
```

### File Organization

```markdown
# [Domain] Flashcards

> Auto-generated from {N} notes in {domain}/

## Metadata Summary

- Total cards: {total}
- Last generated: {date}
- Source notes: {list}
- Next review: {date}

## Cards by Source Note

### From: intro.md (15 cards)

^learnkit-123456789
T | LLM Definition |
Q | What defines a Large Language Model? |
A | An AI system trained on vast text corpora with billions of parameters, excelling in language understanding and generation tasks. |
I | Core definition to anchor all LLM concepts | Source: intro.md#what-is-llm |

^learnkit-234567890
T | LLM Scale |
Q | What scale of training data do modern LLMs use? |
A | Typically 10TB+ of text data, equivalent to millions of books. |
I | Emphasizes the "Large" in LLM | Source: intro.md#training-data |

### From: models.md (20 cards)

...

## Review Statistics

<!-- LearnKit populates this section -->

## Changelog

- 2026-06-19: Added 10 new cards from models.md update
- 2026-06-15: Initial generation (45 cards)
```

## Integration with PKM Workflows

### Bidirectional Sync: Notes ↔ Flashcards

**Note → Flashcards (Daily)**

```
Note updated → LLM detects changed sections → Regenerate affected cards → Update flashcards.md
```

**Flashcards → Notes (Weekly)**

```
Struggle with card → Flag in LearnKit → LLM analyzes →
  If card is bad: Regenerate
  If concept is hard: Enhance source note with examples/analogies
```

**Example:**

```yaml
# In flashcards.md
^learnkit-123456789
T | Attention Mechanism |
Q | How does self-attention calculate token importance? |
A | Computes similarity between query and key vectors via dot product, normalized with softmax. |
I | Struggled 3x - need visual diagram | Source: transformers.md#self-attention |
struggle_count: 3
last_failed: 2026-06-18
```

**LLM Action:**

- Reads transformers.md#self-attention
- Detects missing diagram
- Generates Mermaid flowchart
- Adds to note
- Regenerates card with "See diagram" in Insight

### Daily Workflow

**Morning (15-30 min):**

1. Open Obsidian
2. LearnKit shows: "50 cards due today"
3. Review cards, mark easy/hard/again
4. LearnKit reschedules based on performance

**Evening (5 min):**

1. Review struggle report
2. Mark cards for regeneration
3. Add questions to "Questions & Gaps" in source notes

**Weekly (30 min):**

1. LLM generates cards for notes updated this week
2. Review new cards for quality
3. Approve/edit/reject
4. Commit to git

### Monthly Workflow

**Card Quality Audit:**

1. LLM identifies verbose cards (`>500` chars)
2. LLM detects vague questions
3. LLM finds orphan cards (no source)
4. Generate fix PR

**Coverage Analysis:**

```python
def analyze_flashcard_coverage():
    all_notes = get_all_notes()
    flashcard_notes = get_notes_with_flashcards()

    coverage = len(flashcard_notes) / len(all_notes)

    # Find high-value notes without cards
    uncovered = []
    for note in all_notes:
        if note not in flashcard_notes:
            if note.type == "concept" and note.status == "evergreen":
                uncovered.append(note)

    return {
        "coverage": coverage,
        "uncovered_evergreen_concepts": uncovered
    }
```

## Metrics & Optimization

### Track These Metrics

**Engagement Metrics:**

- Cards reviewed per day (target: 30-50)
- Review streak (consecutive days)
- Time spent per session (target: 15-30 min)

**Mastery Metrics:**

- % cards in "learned" state (target: 70%)
- Average retention rate (target: 85%)
- Concepts mastered per month

**Content Metrics:**

- Notes with flashcards (target: 50% of evergreen concepts)
- Cards per note (target: 3-7)
- Card generation accuracy (% accepted vs regenerated, target: 80%)

**Quality Metrics:**

- Cards with source references (target: 100%)
- Average card length (target: 100-300 chars for answer)
- Struggle rate (cards failed 3+ times, target: `<10%`)

### Optimization Strategies

**If review time `> 30 min/day`:**

- Reduce new cards per day (LearnKit setting)
- Archive low-value domains
- Increase "easy" threshold

**If retention rate `< 80%`:**

- Cards too complex → split into smaller facts
- Missing context → enhance Insight field
- Bad questions → regenerate with better prompts

**If generation accuracy `< 70%`:**

- Refine LLM prompts
- Add more examples to prompts
- Human review first 20 cards from each domain

## Advanced: Flashcard Types for Different Domains

### Technical Concepts (AI, Databases, Algorithms)

**Focus:** Definitions, processes, comparisons

```markdown
^learnkit-tech-001
T | B-Tree Insert Complexity |
Q | What is the time complexity of inserting into a B-tree of order m? |
A | O(log n) where n is number of keys. Tree height is logₘ(n), each level requires O(m) comparisons. |
I | Compare to binary tree O(log n) but with larger branching factor | Source: data-structures/b-tree.md#insert |
```

### Book Summaries

**Focus:** Key ideas, quotes, applications

```markdown
^learnkit-book-001
T | Atomic Habits - 1% Rule |
Q | What is the core principle of "Atomic Habits" by James Clear? |
A | 1% daily improvement compounds to 37x better in a year. Small habits are the compound interest of self-improvement. |
I | Formula: (1.01)^365 = 37.78 | Source: book-summaries/atomic-habits.md#core-concept |
```

### Psychology/Management

**Focus:** Frameworks, examples, applications

```markdown
^learnkit-psych-001
T | Cognitive Load Theory |
Q | What are the three types of cognitive load? |
A | 1) Intrinsic (inherent difficulty), 2) Extraneous (poor presentation), 3) Germane (schema construction). |
I | Reduce extraneous, manage intrinsic, maximize germane | Source: psychology/cognitive-load.md |
```

### Economics/Finance

**Focus:** Metrics, formulas, examples

```markdown
^learnkit-econ-001
T | Price-to-Earnings Ratio |
Q | How do you calculate P/E ratio and what does it indicate? |
A | P/E = Stock Price / Earnings Per Share. High P/E suggests growth expectations or overvaluation. |
I | Tech stocks: P/E 20-50, Value stocks: P/E 10-15 | Source: economics/valuation-metrics.md#pe-ratio |
```

## Potential Issues & Solutions

### Issue 1: Flashcard Explosion

**Problem:** 7,636 notes × 5 cards each = 38,180 cards (unsustainable)

**Solution:**

- Only create cards for evergreen concepts (status: evergreen)
- Skip cards for: fleeting notes, references, MOCs, changelogs
- Focus on high-value domains (AI, core CS, key books)
- Target: 3,000-5,000 cards (10-15 min review/day)

### Issue 2: Stale Cards

**Problem:** Note updates but cards don't

**Solution:**

- Weekly automation: `note.updated > flashcard.last_generated` → regenerate
- Git hook: Pre-commit detects note changes, flags flashcards for regen
- Frontmatter tracks: `source_note_last_modified` vs `cards_generated_from_version`

### Issue 3: Low Retention

**Problem:** Forgetting cards despite reviews

**Solution:**

- Add more context to Insight field
- Include mnemonic devices
- Link to visual aids (diagrams in source note)
- Split complex cards into 2-3 simpler cards
- Add "Elaboration" field with story/analogy

### Issue 4: Duplicate Cards Across Domains

**Problem:** "What is transformer?" in both ai/llm/ and ai/deep-learning/

**Solution:**

- Use semantic deduplication (embedding similarity `>95%`)
- Mark duplicate cards with `canonical_card_id` in frontmatter
- LLM weekly scan: Find duplicates → keep canonical → delete others
- Frontmatter:

  ```yaml
  duplicate_of: ai/llm/flashcards.md#learnkit-123456
  status: archived
  ```

### Issue 5: LearnKit Obsidian Plugin Breaks

**Problem:** LearnKit plugin stops working, new format emerges

**Solution:**

- Keep flashcards in standard markdown (not plugin-dependent)
- Dual format support:

  ```markdown
  ## Card 1
  Q: What is X?
  A: Y

  <!-- LearnKit format -->
  ^learnkit-123
  T | Card 1 | Q | What is X? | A | Y | I | Context |
  ```

- Export to Anki-compatible format monthly (backup)
- Use Dataview queries as fallback review mechanism

## Migration Plan for Flashcards

### Phase 1: Pilot (Week 1-2)

**Goal:** Validate approach in 1 domain

1. **Choose pilot domain:** ai/llm/fundamentals (manageable, high-value)
2. **Create first flashcards.md:**
   - 5 notes × 5 cards = 25 cards
   - Manual generation first (learn patterns)
   - Test LearnKit categorization
3. **Daily review:** 2 weeks of spaced repetition
4. **Measure:**
   - Time per session
   - Retention rate
   - Card quality issues

### Phase 2: LLM Automation (Week 3-4)

**Goal:** Automate card generation

1. **Write LLM script:** `generate_flashcards.py`
2. **Test on 10 notes:** Compare LLM vs manual cards
3. **Refine prompts:** Based on quality gaps
4. **Batch generate:** All ai/llm/ flashcards (~200 notes → 1000 cards)
5. **Review sample:** Human review 100 cards

### Phase 3: Scale (Month 2-3)

**Goal:** Expand to all domains

1. **Prioritize domains:**
   - High: ai/, databases/, algorithms/ (core technical)
   - Medium: book-summaries/, psychology/ (valuable but not urgent)
   - Low: office/, clippings/ (skip)
2. **Generate cards:** Folder by folder
3. **Daily review:** Start with new cards setting = 10/day
4. **Adjust:** Tune based on review time

### Phase 4: Continuous (Month 4+)

**Goal:** Sustainable daily practice

1. **Daily automation:**
   - New notes → auto-generate cards
   - Updated notes → regenerate affected cards
2. **Weekly quality check:**
   - Review struggle cards
   - Regenerate low-quality cards
3. **Monthly optimization:**
   - Prune low-value cards
   - Archive mastered cards (`>90` days in "learned" state)
   - Add cards for knowledge gaps

## Cost Analysis: Flashcards vs Notes

### Time Investment

**Manual Note Writing:**

- 7,636 notes × 30 min avg = 3,818 hours invested
- Maintenance: ~5 hrs/week (ongoing)
- **Learning outcome:** 20-30% retention (passive reading)

**Flashcard Generation + Review:**

- Initial: 7,636 notes × 5 cards × 2 min LLM = 1,272 hours (automated)
- Daily review: 30 min/day × 365 = 183 hrs/year
- **Learning outcome:** 70-85% retention (active recall)

**ROI:**

- 2x time investment
- 3-4x retention improvement
- **Net:** Worth it for high-value knowledge

### Selective Flashcard Strategy

**Don't create flashcards for:**

- ❌ References (API docs, command syntax)
- ❌ Fleeting notes (quick captures)
- ❌ Project notes (ephemeral)
- ❌ Office files (already excluded)

**Do create flashcards for:**

- ✅ Core concepts (evergreen)
- ✅ Frameworks (psychology, management)
- ✅ Algorithms (CS fundamentals)
- ✅ Key ideas from books
- ✅ Interview prep (technical questions)

**Target: 30-40% of notes** (2,300-3,000 notes) → 11,500-15,000 cards

## Integration with Previous Recommendations

### Flashcards Enhance PKM Scaling

**From pkm-scaling-recommendations-2026.md:**

1. **Frontmatter now includes:**

   ```yaml
   has_flashcards: true
   flashcard_file: ai/llm/fundamentals/flashcards.md
   flashcard_count: 15
   last_flashcard_sync: 2026-06-19
   ```

2. **Note template adds:**

   ```markdown
   ## Flashcard Hints

   [Key facts that should become flashcards]
   - Definition of X
   - Steps in Y process
   - X vs Y comparison
   ```

3. **MOCs include flashcard stats:**

   ```markdown
   ## Learning Progress

   - Total cards: 145
   - Mastered: 98 (67%)
   - Learning: 35 (24%)
   - New: 12 (9%)
   - Next review: 2026-06-20
   ```

4. **LLM workflows add:**
   - Daily: Generate flashcards for new notes
   - Weekly: Update flashcards for changed notes
   - Monthly: Archive mastered cards, identify gaps

### Flashcard-Driven Note Improvement

**Reverse flow: Cards → Notes**

```python
def improve_notes_from_flashcard_struggles():
    struggle_cards = get_cards_with_high_failure_rate()  # >3 failures

    for card in struggle_cards:
        source_note = card.metadata.source_note
        section = card.metadata.source_section

        # LLM analyzes why card is hard
        analysis = llm_analyze_card_difficulty(card, source_note, section)

        if analysis.reason == "missing_example":
            suggestion = llm_generate_example(source_note, section)
            create_note_enhancement_task(source_note, section, "add_example", suggestion)

        elif analysis.reason == "complex_concept":
            suggestion = llm_simplify_explanation(source_note, section)
            create_note_enhancement_task(source_note, section, "simplify", suggestion)

        elif analysis.reason == "bad_card":
            regenerate_card(card)
```

## Final Recommendation: Hybrid Folder Structure

**Implement this structure:**

```
docs/
├── ai/
│   ├── llm/
│   │   ├── fundamentals/
│   │   │   ├── intro.md
│   │   │   ├── models.md
│   │   │   └── flashcards.md           ← 25 cards from 5 notes
│   │   ├── rag/
│   │   │   ├── rag-overview.md
│   │   │   └── flashcards.md           ← 15 cards
│   │   ├── agents/
│   │   │   └── flashcards.md           ← 20 cards
│   │   └── prompting/
│   │       └── flashcards.md           ← 18 cards
│   └── ml-algorithms/
│       ├── supervised/
│       │   └── flashcards.md
│       └── unsupervised/
│           └── flashcards.md
├── databases/
│   ├── clickhouse/
│   │   └── flashcards.md
│   └── postgres/
│       └── flashcards.md
├── algorithms/
│   ├── sorting/
│   │   └── flashcards.md
│   └── graph/
│       └── flashcards.md
└── book-summaries/
    ├── technical/
    │   └── flashcards.md
    └── non-technical/
        └── flashcards.md
```

**Rules:**

1. flashcards.md at **leaf folders only** (3-4 levels deep)
2. Each flashcards.md covers 5-20 notes
3. Target: 15-50 cards per file
4. Frontmatter tracks source notes
5. LearnKit categorizes by folder path

**Exclusion in docusaurus.config.js:**

```javascript
exclude: ['**/office/**', '**/*flashcards.md']
```

## Summary

**Strategic Shift:**

- From note accumulation → active learning via flashcards
- Notes become reference layer, flashcards become mastery layer
- LLM generates cards, you internalize concepts

**Architecture:**

- Hybrid folder structure: flashcards.md at leaf folders
- Rich metadata: source tracking, difficulty, mastery stats
- Bidirectional sync: notes ↔ flashcards

**Workflows:**

- Daily: 15-30 min spaced repetition review
- Weekly: Auto-generate cards for new/updated notes
- Monthly: Quality audit, coverage analysis

**Target:**

- 11,500-15,000 cards from 2,300-3,000 high-value notes
- 70-85% retention rate
- 10-15 min daily review time

**Next Steps:**

1. ✅ Read this document
2. ⬜ Install/configure LearnKit plugin
3. ⬜ Create pilot flashcards.md (ai/llm/fundamentals)
4. ⬜ Test 2 weeks of daily review
5. ⬜ Write LLM flashcard generation script
6. ⬜ Batch generate for high-value domains
7. ⬜ Integrate with daily PKM workflow
8. ⬜ Measure retention improvement after 3 months

**Remember:** Flashcards are tools for mastery, not collection. The goal is to deeply internalize concepts, not to create the most cards.

Your brain is for having ideas, not holding them. Your notes hold the context. Your flashcards hold the core facts. Together, they form your digital twin brain.
