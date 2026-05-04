# Education Research Wiki

**LLM-maintained wiki for education startup development** - Systematic knowledge organization supporting product decisions with research evidence.

## Core Purpose

This is an **LLM-maintained wiki** where Claude actively:

- Processes research sources (papers, articles, videos, case studies)
- Extracts key information and integrates into existing knowledge
- Maintains cross-references between concepts
- Detects contradictions and updates claims
- Builds a structured, queryable knowledge base

**Human:** Curate sources, direct analysis, ask questions.
**LLM:** Bookkeeping, cross-referencing, consistency, synthesis.

## Content Catalog

**See [readme.md](readme.md) for full content catalog** (30 files: product concepts, learning science, market research, competitors, strategic context).

## Why LLM-Maintained Wiki?

*"The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping."* — Andrej Karpathy

**Humans struggle with:** Updating 10-15 related pages, maintaining cross-refs, detecting contradictions.

**LLMs excel at:** Simultaneous multi-file updates, systematic cross-referencing, pattern recognition.

**Not traditional RAG:** This wiki sits between you and raw sources as a curated, interconnected knowledge layer.

- ❌ RAG: Query → Search raw docs → Generate answer
- ✅ LLM Wiki: Query → Search maintained wiki → Synthesize → Update wiki

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

When provided with new sources:

1. **Extract:** Main findings, methodology, evidence quality, key concepts, contradictions
2. **Update 10-15 related pages:** Topic pages, entity pages, cross-references
3. **Log:** Add entry to `log.md` with date, action, source
4. **Maintain:** Update `readme.md` content catalog, note contradictions, link concepts

### Query: Synthesizing Knowledge

1. Search wiki pages (Obsidian CLI or grep)
2. Synthesize answer with citations
3. If valuable → save as new wiki page
4. Update cross-references and log

### Lint: Health Checks

Periodically check: contradictions, stale claims, orphans, broken links, dead-ends.

**Commands:** See parent `/docs/CLAUDE.md` for Obsidian CLI reference (orphans, deadends, unresolved).

## Activity Log

**`log.md`** - Chronological append-only record:

Format: `[YYYY-MM-DD] <action> - <description> - <source>`

```markdown
[2026-05-04] CATALOG - Streamlined CLAUDE.md, added content catalog
[2026-04-30] INGEST - Processed Bjork paper on desirable difficulties
[2026-04-30] UPDATE - Updated spaced-repetition.md with new findings
```

## Target Taxonomy

**Folder structure to organize research:**

- **pedagogical-theories/** - Constructivism, Montessori, Waldorf, project-based learning
- **learning-science/** - Cognitive load, spaced repetition, retrieval practice, metacognition
- **edtech/** - LMS platforms, adaptive learning, AI tutors, assessment tools
- **assessment/** - Formative, summative, authentic assessment, rubrics
- **researchers/** - Notable researchers and their work
- **frameworks/** - Bloom's taxonomy, Webb's DOK, SAMR model
- **market-analysis/** - Market sizing, competitor research
- **competitors/** - Platform analyses

## Obsidian CLI Usage

**Prefer Obsidian CLI** over direct file operations for link graph updates and backlink maintenance.

**Full command reference:** See `/docs/CLAUDE.md` for complete Obsidian CLI examples (search, read, append, backlinks, orphans, etc.)

**VAULT path:** `/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs`

## Content Standards

### Link Format

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ Wrong: `[[active-learning]]` (breaks Docusaurus)
✅ Correct: `[Active Learning](education/pedagogical-theories/active-learning.md)`

**Link Path Requirements:**

- Use **full paths** starting with `education/` (not relative `../` paths)
- Example: `[Market Analysis](education/market-analysis/technical-hiring-assessment-market.md)`
- NOT: `[Market Analysis](../market-analysis/technical-hiring-assessment-market.md)`
- Reason: Docusaurus builds work better with full paths from `/docs/` directory

### Research Paper Template

```markdown
---
title: Paper Title
authors: Author Names
year: 2024
source: https://arxiv.org/abs/...
type: research-paper
tags: [learning-science, meta-analysis]
---

# Paper Title

## Key Findings
- Finding 1
- Finding 2

## Evidence Quality
[Strong/Medium/Weak] - Explanation

## Connections
- Related to: [Spaced Repetition](../learning-science/spaced-repetition.md)
- Contradicts: [Previous claim](../learning-science/cognitive-load.md#section)

## Startup Implications
How this research informs product decisions
```

### Key Workflows

**Ingest Research:**

1. Create note with frontmatter
2. Search & update 10-15 related pages
3. Add cross-references
4. Log entry in `log.md`
5. Update content catalog in `readme.md`

**Query & Synthesize:**

1. Search wiki (CLI or grep)
2. Check backlinks/outgoing links
3. Synthesize with citations
4. Save valuable analyses as new pages
5. Log query

**Link Maintenance:**

- Search for concepts mentioned but not linked
- Check backlinks to find connections
- Find orphans, add cross-references
- Note contradictions explicitly with ⚠️

**Periodic Lint:**

- Check orphans, dead-ends, broken links
- Review recent changes, tag consistency
- Update stale research, consolidate duplicates

## Markdown & Formatting

**See `/docs/CLAUDE.md`** for full Docusaurus markdown guidelines (blank lines, code blocks, MDX compatibility).

**Key rules:**

- Blank lines between all content blocks
- Standard markdown links (no wikilinks)
- Language specified for code blocks
- Relative paths for links/images

**MDX compatibility (CRITICAL):**

- Escape `<` and `>` symbols with backticks: `<50` employees, `>100` users
- Don't use `[]` square brackets without escape (used for links/anchor tags)
- These symbols are parsed as JSX/HTML tags in MDX and will break the build

## Research Quality Standards

**Evidence Quality:** Always note [Strong/Medium/Weak/Anecdotal], sample size, replication status.

**Citations:** Include source URL/DOI in frontmatter, link to originals, track affiliations.

**Cross-Referencing:** Link all mentioned concepts, create pages for important new concepts, update bidirectional links.

**Synthesis Quality:** Distinguish consensus vs emerging research, note context specificity, track temporal aspects.

## Startup-Relevant Focus

**Always consider:** Product implications, scalability, measurability, evidence strength, implementation cost, target audience.

## File Naming

- Semantic, lowercase, hyphens: `spaced-repetition.md`
- Frontmatter: type, tags, source, year
- Images: `/docs/media/` with relative paths

## Expected Behaviors

**New source:** Extract findings → Update 10-15 pages → Log → Update `readme.md` catalog → Cross-link → Note contradictions

**Question:** Search wiki → Synthesize with citations → Save if valuable → Log query

**Proactive:** Monthly orphan checks, verify links, update stale research, consolidate duplicates

## Security

**Do not access `office/*` folder** - contains sensitive data requiring explicit approval.
