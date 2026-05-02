# claude.md

**LLM-maintained wiki for multi-domain startup research** - Supporting multiple startup ideas through systematic knowledge organization across different domains.

## Core Purpose

This is NOT a passive document store. This is an **LLM-maintained wiki** where Claude actively:

- Processes new research sources (papers, articles, videos, case studies, market reports)
- Extracts key information and integrates it into existing knowledge
- Maintains cross-references and links between concepts
- Detects contradictions and updates claims
- Builds a structured, queryable knowledge base across multiple startup domains

**Human responsibility:** Curate sources, direct analysis, ask good questions, prioritize startup ideas.

**LLM responsibility:** Bookkeeping, cross-referencing, consistency maintenance, synthesis, domain-specific organization.

## Environment

- **Vault type:** Multi-domain startup research wiki (LLM-maintained)
- **Vault location:** `/docs/ideas` directory
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
- Video lectures, podcasts, and talks
- Case studies and market reports
- Industry data and competitive analysis
- Customer interviews and surveys
- Stored in `/docs/ideas/sources/` (if needed) or referenced via URLs

**Layer 2: The Wiki** (LLM-maintained)

- **Startup domain pages** (education-tech, fintech, healthcare, AI/ML tools, developer tools, etc.)
- **Topic pages** (market analysis, technology stack, business models, GTM strategies)
- **Entity pages** (companies, founders, investors, frameworks, methodologies)
- **Concept summaries** with cross-references across domains
- **Synthesis documents** connecting research findings and insights
- **Validation pages** (problem validation, solution validation, market sizing)
- All markdown files in `/docs/ideas/`

**Layer 3: The Schema** (this file)

- Defines structure, conventions, workflows
- Guides how Claude processes and organizes information
- Sets taxonomy for multiple startup domains
- Maintains cross-domain connections and patterns

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
# User provides article on "AI Tutoring Market Trends"
# Claude should:
# 1. Read/analyze the source
# 2. Update: edtech/ai-tutoring.md, market-analysis/edtech-trends.md, competitors/list.md
# 3. Create entity page if prominent company/founder mentioned
# 4. Add entry to log.md with date and source
# 5. Update index.md categories and cross-domain links

# User provides fintech startup case study
# Claude should:
# 1. Extract business model, GTM strategy, tech stack
# 2. Update: fintech/neobanking.md, business-models/b2c-fintech.md, tech-stacks/fintech.md
# 3. Create company profile page
# 4. Link to related domains (e.g., regulatory considerations)
```

### Query: Synthesizing Knowledge

When asked questions about any startup domain:

1. Search wiki pages using Obsidian CLI across all domains
2. Synthesize answer with citations
3. Identify cross-domain patterns and insights
4. If synthesis reveals valuable insights → save as new wiki page
5. Update cross-references within and across domains

**Save valuable analyses as pages** (e.g., `comparison-stripe-vs-square.md`, `ai-tutoring-market-size-2026.md`)

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

**`index.md`** - Content-oriented catalog organized by startup domain:

- **Active startup ideas** (by priority/stage)
- **Education technology** (AI tutoring, LMS, assessment tools)
- **Fintech** (neobanking, payments, lending)
- **Healthcare** (telemedicine, health-tech, wellness)
- **Developer tools** (AI coding assistants, infrastructure, productivity)
- **Consumer apps** (social, productivity, entertainment)
- **B2B SaaS** (vertical SaaS, horizontal tools, enterprise)
- **Cross-cutting topics** (business models, GTM, tech stacks, market analysis)

**`log.md`** - Chronological append-only record:

Format: `[YYYY-MM-DD] [DOMAIN] <action> - <description> - <source>`

Example:

```markdown
[2026-05-01] [EDTECH] INGEST - Processed market report on AI tutoring - https://example.com/report.pdf
[2026-05-01] [EDTECH] UPDATE - Updated ai-tutoring.md with market size projections
[2026-04-30] [FINTECH] CREATE - Added comparison page for Stripe vs Square
[2026-04-30] [CROSS-DOMAIN] QUERY - Synthesized B2C vs B2B GTM strategies across domains
[2026-04-29] [DEVTOOLS] INGEST - GitHub Copilot case study on adoption metrics
```

## Multi-Domain Startup Research Taxonomy

**Organize notes under these categories:**

### Domain-Specific Folders

- **edtech/** - Education technology startups and research
  - ai-tutoring/, lms-platforms/, assessment-tools/, pedagogy/, learning-science/
- **fintech/** - Financial technology and banking
  - neobanking/, payments/, lending/, crypto/, regulatory/
- **healthcare/** - Health and wellness technology
  - telemedicine/, diagnostics/, wellness-apps/, health-records/, compliance/
- **devtools/** - Developer tools and infrastructure
  - ai-coding/, cicd/, cloud-tools/, monitoring/, productivity/
- **consumer/** - Consumer-facing apps
  - social/, productivity/, entertainment/, marketplace/, community/
- **b2b-saas/** - Business software
  - vertical-saas/, crm/, analytics/, collaboration/, automation/
- **ai-ml/** - AI/ML products (cross-domain)
  - llm-applications/, computer-vision/, recommendation-systems/, mlops/

### Cross-Domain Categories

- **business-models/** - Revenue models, pricing strategies, unit economics
  - b2c/, b2b/, marketplace/, subscription/, freemium/, enterprise/
- **market-analysis/** - Market sizing, trends, competitive landscape
  - tam-sam-som/, market-trends/, competitive-analysis/, customer-segments/
- **tech-stacks/** - Technology architectures by domain
  - frontend/, backend/, infrastructure/, data/, ai-ml/
- **gtm-strategies/** - Go-to-market approaches
  - product-led/, sales-led/, community-led/, marketing-channels/, distribution/
- **validation/** - Problem and solution validation
  - problem-validation/, solution-validation/, mvp-approach/, customer-interviews/
- **competitors/** - Competitive analysis and company profiles
  - company-profiles/, feature-comparison/, pricing-comparison/, market-positioning/
- **frameworks/** - Startup methodologies and mental models
  - lean-startup/, jobs-to-be-done/, business-model-canvas/, value-proposition/
- **investors/** - VC firms, angel investors, funding landscape
  - vc-firms/, investment-thesis/, funding-stages/, pitch-decks/
- **regulatory/** - Legal and compliance considerations
  - data-privacy/, industry-regulations/, licensing/, ip-protection/

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

## Working with Multi-Domain Startup Research Wiki

### Content Organization

- **LLM-maintained wiki** with systematic cross-linking within and across domains
- **Zettelkasten method:** Atomic notes densely interconnected
- **No number prefixes:** Filenames are semantic (`ai-tutoring-market-analysis.md`)
- **Media storage:** `/docs/media/` for images/diagrams/charts
- **Mermaid diagrams:** Use ```mermaid blocks (Docusaurus-compatible)
- **Citation tracking:** Include sources in frontmatter or inline
- **Domain tagging:** Use frontmatter to tag startup domain(s)
- **Cross-domain linking:** Actively connect patterns across different startup domains

### Link Format Requirements

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ Wrong: `[[ai-tutoring]]` (breaks Docusaurus)
✅ Correct: `[AI Tutoring](edtech/ai-tutoring.md)`

### Template: Research/Source Note

```markdown
---
title: Source Title
authors: Author Names / Company
year: 2026
source: https://example.com/source
type: [research-paper | market-report | case-study | article | interview]
domains: [edtech, fintech, healthcare, devtools, consumer, b2b-saas]
tags: [market-analysis, business-model, tech-stack, gtm-strategy]
relevance: [high | medium | low]
---

# Source Title

## Key Insights

- Insight 1 (with data/evidence)
- Insight 2
- Insight 3

## Methodology / Context

Description of research method, sample size, or context of case study

## Evidence Quality / Credibility

[Strong/Medium/Weak/Anecdotal] - Explanation

## Market / Business Implications

- Market size, growth, trends
- Business model insights
- Competitive dynamics
- Customer behavior

## Technical Implications

- Technology stack considerations
- Implementation challenges
- Scalability considerations

## Connections

- Related to: [Similar Market Analysis](../market-analysis/edtech-trends.md)
- Contradicts: [Previous claim in ai-tutoring.md](../edtech/ai-tutoring.md#section)
- Supports: [Business Model](../business-models/subscription.md)
- Cross-domain: [Similar pattern in fintech](../fintech/neobanking-trends.md)

## Startup Implications

Which startup idea(s) does this inform? How does it affect product, market, or GTM decisions?

## Action Items

- [ ] Validate with customer interviews
- [ ] Update market sizing model
- [ ] Research competitor X mentioned

## Citations

Full citation and source URL
```

### Template: Startup Idea Page

```markdown
---
title: Startup Idea Name
domain: [edtech | fintech | healthcare | devtools | consumer | b2b-saas]
status: [ideation | validation | mvp | launched | archived]
priority: [high | medium | low]
last_updated: 2026-05-01
---

# Startup Idea Name

## Problem Statement

Clear articulation of the problem being solved

## Solution Overview

High-level description of proposed solution

## Target Customer

- Customer segment(s)
- Demographics/firmographics
- Pain points
- Current alternatives they use

## Market Analysis

- Market size (TAM/SAM/SOM)
- Growth trends
- Key players
- Market gaps

## Business Model

- Revenue model
- Pricing strategy
- Unit economics (projected)
- Monetization approach

## Tech Stack

- Frontend:
- Backend:
- Infrastructure:
- AI/ML (if applicable):

## GTM Strategy

- Customer acquisition channels
- Distribution strategy
- Marketing approach
- Sales motion

## Validation Status

- [ ] Problem validated (customer interviews)
- [ ] Solution validated (prototype/mockups)
- [ ] Willingness to pay validated
- [ ] MVP defined

## Competition

- Competitor 1: [Link](../competitors/company1.md)
- Competitor 2: [Link](../competitors/company2.md)
- Differentiation:

## Regulatory Considerations

Any legal, compliance, or regulatory issues

## Related Research

- [Market Report](../market-analysis/relevant-report.md)
- [Technology Analysis](../tech-stacks/relevant-tech.md)
- [Case Study](../competitors/similar-company.md)

## Open Questions

- Question 1?
- Question 2?

## Next Steps

1. Action item 1
2. Action item 2
```

### Common Workflows

**Workflow 1: Ingest New Research/Source**

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

# Example: Ingesting AI tutoring market report

# Step 1: Create note for the source
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ideas/market-analysis/ai-tutoring-market-2026.md" content="[frontmatter + extracted content]" vault="$VAULT"

# Step 2: Find related pages to update
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="ai tutoring" path="ideas" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="edtech market" path="ideas" vault="$VAULT"

# Step 3: Add cross-references to related pages
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/edtech/ai-tutoring.md" content="\n\n## Recent Market Data\n\nSee: [AI Tutoring Market 2026](../market-analysis/ai-tutoring-market-2026.md)" vault="$VAULT"

# Step 4: Update startup idea page if relevant
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/startup-ideas/personalized-learning-platform.md" content="\n\n## Updated Market Analysis\n\n[Link and insights from new report]" vault="$VAULT"

# Step 5: Update log
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/log.md" content="[2026-05-02] [EDTECH] INGEST - Market report on AI tutoring - https://example.com\n" vault="$VAULT"

# Step 6: Update index if new category needed
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="ideas/index.md" vault="$VAULT"
# (then append/edit as needed)
```

**Workflow 2: Create New Startup Idea**

```bash
# User wants to explore new fintech startup idea

# Step 1: Create startup idea page using template
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ideas/startup-ideas/embedded-finance-platform.md" content="[use startup idea template]" vault="$VAULT"

# Step 2: Search for related research and competitors
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="embedded finance" path="ideas" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="banking api" path="ideas/fintech" vault="$VAULT"

# Step 3: Link to relevant domain pages
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/fintech/embedded-banking.md" content="\n\n## Related Startup Ideas\n\n- [Embedded Finance Platform](../startup-ideas/embedded-finance-platform.md)" vault="$VAULT"

# Step 4: Log the creation
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/log.md" content="[2026-05-02] [FINTECH] CREATE - New startup idea: Embedded Finance Platform\n" vault="$VAULT"

# Step 5: Update index with new active idea
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="ideas/index.md" vault="$VAULT"
# (add to active ideas section)
```

**Workflow 3: Query and Synthesize Cross-Domain**

```bash
# User asks: "What are successful GTM strategies for B2B SaaS in edtech vs healthcare?"

# Step 1: Search existing knowledge across domains
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="gtm strategy b2b" path="ideas" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="enterprise sales" path="ideas/edtech" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="enterprise sales" path="ideas/healthcare" vault="$VAULT"

# Step 2: Check cross-references
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="ideas/gtm-strategies/sales-led.md" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian links path="ideas/gtm-strategies/sales-led.md" vault="$VAULT"

# Step 3: Create synthesis page comparing domains
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ideas/gtm-strategies/b2b-saas-edtech-vs-healthcare.md" content="[synthesis with citations from both domains]" open vault="$VAULT"

# Step 4: Link from both domain pages
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/edtech/enterprise-sales.md" content="\n\nSee: [Comparison with Healthcare](../gtm-strategies/b2b-saas-edtech-vs-healthcare.md)" vault="$VAULT"

# Step 5: Update log
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/log.md" content="[2026-05-02] [CROSS-DOMAIN] QUERY - Synthesized GTM comparison: B2B SaaS edtech vs healthcare\n" vault="$VAULT"
```

**Workflow 4: Competitor Analysis Update**

```bash
# New competitor launches or gets funding

# Step 1: Search for existing competitor page
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="CompanyName" path="ideas/competitors" vault="$VAULT"

# Step 2: Create or update competitor profile
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ideas/competitors/new-competitor.md" content="[company profile with business model, tech stack, etc.]" vault="$VAULT"

# Step 3: Find related startup ideas to update
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="ai tutoring" path="ideas/startup-ideas" vault="$VAULT"

# Step 4: Update startup idea pages with new competitive intelligence
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/startup-ideas/ai-tutoring-platform.md" content="\n\n## Competitive Update\n\n- [New Competitor](../competitors/new-competitor.md) raised $10M Series A\n- Key differentiation: [analysis]" vault="$VAULT"

# Step 5: Log the update
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/log.md" content="[2026-05-02] [EDTECH] UPDATE - Added new competitor analysis: New Competitor\n" vault="$VAULT"
```

**Workflow 5: Link Discovery and Cross-Domain Patterns**

```bash
# Find pages that should be connected but aren't

# Step 1: Search for common patterns across domains
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="subscription pricing" path="ideas" vault="$VAULT"
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="freemium model" path="ideas" vault="$VAULT"

# Step 2: Check which pages mention concepts but don't link
/Applications/Obsidian.app/Contents/MacOS/Obsidian backlinks path="ideas/business-models/subscription.md" vault="$VAULT"

# Step 3: Find orphaned pages (need more connections)
/Applications/Obsidian.app/Contents/MacOS/Obsidian orphans vault="$VAULT"

# Step 4: Add cross-domain links
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/edtech/pricing-strategies.md" content="\n\n## General Frameworks\n\nSee: [Subscription Models](../business-models/subscription.md)\nCompare: [Fintech Pricing](../fintech/pricing-models.md) - similar patterns" vault="$VAULT"
```

**Workflow 6: Validation Update**

```bash
# After customer interviews or validation experiments

# Step 1: Update startup idea page with validation results
/Applications/Obsidian.app/Contents/MacOS/Obsidian read path="ideas/startup-ideas/ai-tutoring-platform.md" vault="$VAULT"
# Use Edit tool to update validation status section

# Step 2: Document customer insights
/Applications/Obsidian.app/Contents/MacOS/Obsidian create path="ideas/validation/ai-tutoring-interviews-may-2026.md" content="[interview insights, quotes, learnings]" vault="$VAULT"

# Step 3: Link validation doc to startup idea
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/startup-ideas/ai-tutoring-platform.md" content="\n\n## Validation Research\n\n- [Customer Interviews May 2026](../validation/ai-tutoring-interviews-may-2026.md)" vault="$VAULT"

# Step 4: Update problem/solution understanding if needed
# Use Edit tool to refine problem statement or solution approach

# Step 5: Log the update
/Applications/Obsidian.app/Contents/MacOS/Obsidian append path="ideas/log.md" content="[2026-05-02] [EDTECH] VALIDATION - Completed 10 customer interviews for AI tutoring platform\n" vault="$VAULT"
```

**Workflow 7: Periodic Health Check (Lint)**

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

# Check domain tag consistency
/Applications/Obsidian.app/Contents/MacOS/Obsidian tags counts vault="$VAULT"

# Review startup idea statuses
/Applications/Obsidian.app/Contents/MacOS/Obsidian search query="status: ideation" path="ideas/startup-ideas" vault="$VAULT"
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

## Content Standards for Startup Research

**Research Quality Indicators:**

- Always note evidence quality: [Strong/Medium/Weak/Anecdotal]
- Include sample size for market studies
- Note data source and methodology (surveys, interviews, public data, etc.)
- Flag contradictions explicitly with ⚠️
- Distinguish correlation from causation
- Track recency of data (market data from 2020 vs 2026 matters)

**Source Credibility:**

- Assess source credibility (VC report, academic research, blog post, case study)
- Note potential biases (vendor report, competitor analysis, investor thesis)
- Prefer primary sources over secondary summaries
- Track company-reported vs third-party data

**Citation Requirements:**

- Include source URL or DOI in frontmatter
- Use consistent citation format
- Link to original sources when possible
- Track author affiliations and potential conflicts
- Note paywalled vs freely accessible sources

**Cross-Referencing Discipline:**

- When mentioning a concept, check if a page exists for it across ALL domains
- If page exists, link to it
- If no page exists but concept is important, create one
- Update bidirectional links (not automatic in markdown)
- Group related concepts in "See Also" sections
- **Actively seek cross-domain patterns:** pricing models, GTM strategies, tech stacks, etc.

**Maintaining Synthesis Quality:**

- Distinguish between "established patterns" and "emerging trends"
- Note when findings are specific to certain contexts (B2B vs B2C, enterprise vs SMB, US vs global)
- Track temporal aspects (2020 market dynamics vs 2026)
- Highlight practical implications for specific startup ideas
- Compare and contrast across domains (e.g., how fintech and edtech approach similar challenges)

## File Naming & Organization

- **Link format:** Standard markdown only (never wikilinks)
- **File naming:** Semantic, lowercase, hyphens (`spaced-repetition.md`)
- **Frontmatter:** Include type, tags, source, year
- **Diagrams:** Mermaid syntax in code blocks
- **Images:** Relative paths to `/docs/media/`
- **Spacing:** Blank lines between all content blocks
- **Code blocks:** Always specify language

## Startup-Relevant Focus

When processing any research or source, always consider:

### Product & Market Questions

- **Product implications:** How does this inform product decisions for specific startup ideas?
- **Market validation:** Does this support or challenge market assumptions?
- **Competitive positioning:** How does this affect differentiation strategy?
- **Target customer:** Which customer segments does this apply to?
- **Willingness to pay:** What does this tell us about pricing/monetization?

### Business Model Questions

- **Revenue model:** What revenue models are proven in this domain?
- **Unit economics:** What are typical CAC, LTV, margins, burn rates?
- **Scalability:** Can this approach work at scale?
- **Distribution:** What are effective customer acquisition channels?
- **Monetization timing:** Freemium → paid conversion patterns?

### Technical Questions

- **Implementation complexity:** What's required to build this?
- **Tech stack patterns:** What technologies are standard in this domain?
- **Infrastructure costs:** What are typical cloud/infra costs at scale?
- **Build vs buy:** What can be outsourced vs built in-house?
- **Technical moats:** What creates defensibility?

### Market & Timing Questions

- **Market timing:** Is this trend growing or plateauing?
- **Market size:** TAM/SAM/SOM implications?
- **Regulatory landscape:** Any legal/compliance considerations?
- **Competitive dynamics:** Red ocean vs blue ocean?
- **Evidence strength:** Is this backed by rigorous data?

### Cross-Domain Patterns

- **Similar patterns in other domains:** Has this been tried in fintech/edtech/healthcare?
- **Transferable insights:** What learnings apply across industries?
- **Domain-specific nuances:** What makes this domain unique?

## Important Guidelines

- Refrain from searching or accessing files inside `office/*` folder. It contains sensitive data. Accessing any file in this folder require explicit ask and an approval to access those exact files or lines.

## Expected Behaviors

**When given a new source (research, article, case study, market report):**

1. **Identify domain(s):** edtech, fintech, healthcare, devtools, consumer, b2b-saas, or cross-domain
2. **Extract key insights:**
   - Market data (size, growth, trends)
   - Business model insights
   - Technical/product insights
   - Competitive intelligence
   - Customer behavior patterns
3. **Update 10-15 related pages:**
   - Domain-specific pages (e.g., `edtech/ai-tutoring.md`)
   - Cross-domain pages (e.g., `business-models/subscription.md`)
   - Startup idea pages that this impacts
   - Competitor pages if mentioned
   - Market analysis pages
4. **Create cross-links:**
   - Within domain (e.g., edtech → edtech)
   - Across domains (e.g., edtech → business-models → fintech)
   - To startup ideas
   - To competitors
5. **Add entry to log.md** with domain tag
6. **Update index.md** if new category/startup idea needed
7. **Note contradictions** with ⚠️ if data conflicts with existing claims
8. **Update startup idea pages** with new validation data or market intelligence

**When creating a new startup idea:**

1. Use startup idea template
2. Search for related research across all domains
3. Link to competitors, market analysis, business models, tech stacks
4. Identify validation gaps (what we don't know yet)
5. Add to index.md under appropriate domain and priority
6. Log the creation
7. Create placeholder pages for missing research areas

**When asked a question:**

1. **Search broadly across domains:** Don't limit to one domain unless specified
2. **Check for cross-domain patterns:** "Has this been done in fintech?" when asked about edtech
3. **Synthesize from multiple sources:** Combine market data, case studies, research
4. **Include citations:** Link to specific pages in the wiki
5. **Save valuable syntheses as new pages:** Especially cross-domain comparisons
6. **Update log.md with query**
7. **Suggest related questions:** "You might also want to explore..."

**When analyzing competitors:**

1. Create/update competitor profile page
2. Extract: business model, pricing, tech stack, GTM, funding, traction
3. Link from relevant startup idea pages
4. Note differentiation opportunities
5. Update competitive landscape summaries
6. Cross-reference similar competitors in other domains

**Proactive maintenance (monthly or on request):**

- **Check for orphans:** Pages with no incoming links
- **Check for dead-ends:** Pages with no outgoing links
- **Verify broken links:** Especially external URLs
- **Update stale data:** Flag market data >12 months old
- **Consolidate duplicates:** Merge similar content
- **Improve cross-linking density:** Especially cross-domain connections
- **Review startup idea statuses:** Archive inactive ideas, promote validated ones
- **Identify research gaps:** What domains/topics need more coverage?

**Cross-domain thinking (always):**

- When processing edtech research, consider: "How does fintech approach this?"
- When analyzing pricing models, check all domains for patterns
- When reviewing GTM strategies, identify transferable approaches
- When documenting tech stacks, note common patterns across domains
- Create explicit comparison pages for cross-domain insights
