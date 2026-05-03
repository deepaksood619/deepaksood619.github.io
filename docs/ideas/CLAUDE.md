# claude.md

**LLM-maintained wiki for multi-domain startup research**

## Core Purpose

This is an **LLM-maintained research wiki** where Claude:

- Processes research sources (articles, papers, case studies, market reports)
- Extracts and integrates information into knowledge base
- Maintains cross-references across domains
- Detects contradictions and updates claims

**Human:** Curate sources, direct analysis, prioritize ideas
**LLM:** Bookkeeping, cross-referencing, synthesis

## Folder Structure

```bash
ideas/
├── index.md              # Master catalog by priority/domain
├── log.md                # Chronological activity log
├── raw/                  # Raw research & analysis
│   └── YYYY-MM-DD-topic.md
├── startup-ideas/        # Structured startup idea pages
│   └── idea-name.md
├── market-analysis/      # Market sizing, trends, competitive landscape (to be created)
├── competitors/          # Company profiles, comparisons (to be created)
├── business-models/      # Revenue models, pricing, unit economics (to be created)
├── tech-stacks/          # Technology architectures (to be created)
├── gtm-strategies/       # Go-to-market approaches (to be created)
└── validation/           # Problem/solution validation research (to be created)
```

## Domain Taxonomy

**Core Domains:**

- **edtech/** - Education technology (AI tutoring, assessments, learning platforms)
- **devtools/** - Developer tools (API testing, code review, productivity)
- **hr-tech/** - Hiring, recruiting, interview platforms
- **ai-ml/** - AI/ML applications (cross-domain)

**Cross-Domain Topics:**

- business-models/, market-analysis/, tech-stacks/, gtm-strategies/, validation/, competitors/

## Key Files

**index.md** - Content catalog organized by:

- Active startup ideas (by priority)
- Research domains
- Cross-references

**log.md** - Chronological record:

```bash
[YYYY-MM-DD] [DOMAIN] ACTION - description - source
```

## Templates

### Startup Idea Page

```markdown
---
title: Idea Name
domain: [edtech | devtools | hr-tech | etc]
status: [ideation | validation | mvp | launched]
priority: [high | medium | low]
last_updated: YYYY-MM-DD
tags: [relevant, tags]
---

# Idea Name

## Problem Statement
What pain are you solving?

## Solution Overview
What you're building

## Target Customer
Who's the customer? Pain points? Alternatives?

## Market Analysis
Market size, growth, competitors, gaps

## Business Model
Revenue model, pricing, unit economics

## Tech Stack
Technologies needed

## GTM Strategy
How to acquire customers

## Validation Status
- [ ] Problem validated
- [ ] Solution validated
- [ ] Pricing validated

## Competition
Competitors and differentiation

## Next Steps
Immediate actions
```

### Research Note

```markdown
---
title: Source Title
date: YYYY-MM-DD
type: [research-paper | market-report | case-study | article]
domains: [edtech, devtools, etc]
tags: [specific, tags]
source: URL
---

# Source Title

## Key Insights
- Insight 1
- Insight 2

## Market/Business Implications
What this means for startup opportunities

## Technical Implications
Technology considerations

## Connections
- Related to: [Other Research](link.md)
- Cross-domain: [Similar in other domain](link.md)

## Startup Implications
Which ideas does this inform? How?
```

## Expected Behaviors

**When given new research:**

1. Create raw research file in `raw/YYYY-MM-DD-topic.md`
2. Update 5-10 related pages (startup ideas, market analysis, competitors)
3. Create cross-links across domains
4. Update `index.md` and `log.md`

**When asked about startup opportunities:**

1. Search existing wiki pages
2. Synthesize with citations
3. Identify cross-domain patterns
4. Save valuable synthesis as new page
5. Update cross-references

**When creating new startup idea:**

1. Use startup idea template
2. Link to related research, competitors, market analysis
3. Identify validation gaps
4. Add to index.md
5. Log the creation

## File Naming

- **Startup ideas:** `idea-name.md` (descriptive, lowercase, hyphens)
- **Raw research:** `YYYY-MM-DD-topic.md` (dated for chronology)
- **Market analysis:** `domain-market-size.md`, `domain-trends.md`
- **Competitors:** `company-name.md`
- **Cross-domain:** `topic-comparison.md`

## Research Standards

**Source Quality:**

- Note evidence strength: [Strong/Medium/Weak/Anecdotal]
- Track source credibility (VC report vs blog post)
- Prefer primary sources
- Flag potential biases

**Cross-Referencing:**

- When mentioning a concept, check if page exists across ALL domains
- If exists, link to it
- If important but missing, create it
- Actively seek cross-domain patterns

**Startup Focus:**

- How does this inform product decisions?
- Market validation? Competitive positioning?
- What's the willingness to pay?
- Implementation complexity?
- Market timing? Regulatory landscape?

## Obsidian CLI Usage

**Vault path:**

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"
```

**Command syntax:** key=value pairs (NOT --flags)

### Essential Commands

**Create/Update Files:**

```bash
# Create new research file
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ideas/raw/2026-05-03-topic.md" content="[markdown content]" vault="$VAULT"

# Append to existing file (like log.md)
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/log.md" content="[2026-05-03] [DOMAIN] ACTION - description\n" vault="$VAULT"
```

**Search & Discovery:**

```bash
# Search across all research
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="market size" path="ideas" vault="$VAULT"

# Find backlinks (what links TO this page)
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="ideas/startup-ideas/ai-mock-interview.md" vault="$VAULT"

# Find outgoing links (what this page links TO)
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="ideas/startup-ideas/ai-mock-interview.md" vault="$VAULT"
```

**Health Checks:**

```bash
# Find orphan pages (no incoming links - need more connections)
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"

# Find broken links
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"

# Find dead-ends (no outgoing links)
/Applications/Obsidian.app/Contents/MacOS/Obsidian deadends vault="$VAULT"
```

**When to use direct Read/Write/Edit tools:**

- Bulk operations (100+ files)
- Complex edits requiring line numbers
- After Obsidian operations, reload: `/Applications/Obsidian.app/Contents/MacOS/Obsidian reload vault="$VAULT"`

## Important

- No access to `office/*` folder (sensitive data)
- Use standard markdown links (not wikilinks)
- Blank lines between content blocks
- Code blocks with language specified
- Prefer Obsidian CLI for creating/updating research files
- Use Read tool for reading files
