# Economics & Finance Knowledge Base

**LLM-maintained financial research repository** - Systematic market research, economic analysis, financial concepts, and investment intelligence stored as structured markdown files.

## Core Purpose

This is an **LLM-maintained economics and finance knowledge base** where Claude actively:

- Creates detailed research reports on economic concepts, financial markets, and investment strategies
- Maintains company analyses, sector reviews, and market intelligence
- Tracks macro trends, policy changes, and regulatory developments
- Builds cross-referenced financial knowledge library covering theory and practice
- Organizes content across multiple economic domains (markets, taxation, corporate finance, etc.)

**Human:** Request analysis, provide research topics, direct focus areas.
**LLM:** Research execution, markdown file creation, cross-referencing, consistency checks.

## Critical Requirement: Everything as Markdown Files

**ALL analysis and research outputs MUST be saved as standalone markdown files:**

- ✅ Each analysis/concept → Separate `.md` file (e.g., `dcf-valuation-explained.md`)
- ❌ Never provide analysis only in chat - always create a markdown file

**File naming convention:** `{topic-name}-{type}.md` (lowercase, hyphens)

- Examples: `dividend-policy-overview.md`, `taxation-equity-capital-gains.md`

## Content Organization

**Economics folder contains multiple sub-domains:**

- **company-analysis/** - Individual company research and fundamental analysis (see `company-analysis/CLAUDE.md` for detailed guidelines)
- **sector-analysis/** - Sector-level trends, comparisons, and industry dynamics
- **mutual-funds/** - Fund analysis, SIP strategies, portfolio allocation
- **taxation/** - Tax laws, compliance, optimization strategies (India-focused)
- **accounting-for-finance/** - Financial accounting concepts for investors
- **corporate-finance/** - Capital structure, valuation, M&A, corporate actions
- **finance-investing/** - Investment strategies, portfolio management, risk management
- **market-terms/** - Glossary of financial and market terminology
- **mental-models/** - Investment frameworks and decision-making models

## Why LLM-Maintained Economics Knowledge Base?

*"The challenge in financial research is not finding information — it's organizing insights, maintaining consistency across topics, and connecting related concepts."*

**Humans struggle with:** Updating multiple related documents when regulations change, maintaining cross-references between concepts, tracking evolving market conditions, organizing research across domains.

**LLMs excel at:** Fetching current data, systematic content generation, multi-file updates, pattern recognition across domains, consistent formatting, cross-referencing related content.

**Not just note-taking:** This knowledge base is a curated, analytical layer between raw financial information and investment decisions.

- ❌ Traditional: Read article → Take notes → File away → Forget
- ✅ LLM Knowledge Base: Research → Analyze → **Save as markdown** → Cross-reference → Build knowledge network

## Three-Layer Architecture

**Layer 1: Raw Data Sources**

- Financial APIs (Groww MCP, Zerodha Kite MCP)
- Web sources (Screener.in, MoneyControl, NSE/BSE, Economic Times, RBI, SEBI)
- Government portals (Income Tax, MCA, regulatory bodies)
- Research reports (analyst reports, white papers, academic research)
- News sources and market commentary

**Layer 2: The Knowledge Base** (LLM-maintained markdown files)

- Company analysis reports (see `company-analysis/` subfolder)
- Sector overviews and trend analyses
- Tax guides and compliance checklists
- Investment frameworks and mental models
- Financial concept explanations with examples
- Cross-referenced knowledge network in `/docs/economics/`

**Layer 3: The Schema** (this file)

- Defines content standards and templates
- Guides how Claude structures research and creates markdown files
- Sets taxonomy for topics, analysis types, and file organization

## Core Operations

### Create: Building Knowledge Documents

When creating new content:

1. **Research:** Use MCP tools, web sources, official documentation
2. **Analyze:** Structure information with examples, frameworks, actionable insights
3. **Create Markdown File:** Save complete content with proper frontmatter
4. **Cross-Reference:** Link to related concepts, analyses, regulatory docs
5. **Update Catalog:** Add entry to relevant `readme.md` if exists

### Update: Refreshing Existing Content

When updating analysis:

1. Read existing markdown file
2. Fetch latest data/regulations/market conditions
3. Update metrics, examples, frameworks
4. Note significant changes (regulatory, market structure, etc.)
5. Append update log at bottom
6. Preserve historical context for comparison

### Query: Synthesizing Knowledge

1. Search existing markdown files (Obsidian CLI or grep)
2. Synthesize insights across multiple topics/domains
3. Create new synthesis document if valuable
4. Cross-reference related content
5. Update higher-level overview files

### Lint: Quality Checks

Periodically verify: stale content (`>6` months for regulatory, `>12` months for concepts), broken cross-references, orphaned documents, missing cross-domain links, outdated examples.

**Commands:** See parent `/docs/CLAUDE.md` for Obsidian CLI reference (orphans, deadends, unresolved).

## Folder Structure & Purpose

**company-analysis/**

- Individual company deep-dives (fundamental, technical, comprehensive)
- See dedicated `company-analysis/CLAUDE.md` for detailed guidelines
- Contains: companies/, sectors/, peer-comparisons/, frameworks/

**sector-analysis/**

- Industry-level analysis across sectors
- Regulatory changes affecting sectors
- Sector rotation strategies
- Competitive landscape studies

**mutual-funds/**

- Fund analysis and comparisons
- SIP strategies and asset allocation
- Fund selection frameworks
- Tax implications of mutual fund investing

**taxation/**

- Income tax laws and compliance (India-focused)
- Capital gains taxation (equity, debt, real estate)
- Tax optimization strategies
- GST for businesses and investors
- NRI taxation considerations

**accounting-for-finance/**

- Financial statement analysis
- Accounting standards (Ind AS, IFRS)
- Key ratios and metrics
- Red flags in financial reporting

**corporate-finance/**

- Valuation methodologies (DCF, comparable company, precedent transactions)
- Capital structure decisions
- M&A analysis frameworks
- Dividend policy and shareholder returns

**finance-investing/**

- Investment philosophies (value, growth, momentum)
- Portfolio construction and rebalancing
- Risk management frameworks
- Behavioral finance concepts

**market-terms/**

- Financial terminology and definitions
- Market mechanics explanations
- Trading concepts and strategies

**mental-models/**

- Investment decision frameworks
- Cognitive biases in investing
- Risk assessment models
- Systematic thinking tools

## Obsidian CLI Usage

**Prefer Obsidian CLI** over direct file operations for link graph updates and backlink maintenance.

**Full command reference:** See `/docs/CLAUDE.md` for complete Obsidian CLI examples (search, read, append, backlinks, orphans, etc.)

**VAULT path:** `/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs`

## Content Standards

### Link Format

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ Wrong: `[[capital-gains-tax]]` (breaks Docusaurus)
✅ Correct: `[Capital Gains Tax](economics/taxation/capital-gains-equity.md)`

**Link Path Requirements:**

- Use **full paths** starting with `economics/` (not relative `../` paths)
- Example: `[Company Analysis](economics/company-analysis/companies/oil-gas/reliance-fundamental.md)`
- NOT: `[Company Analysis](../company-analysis/companies/oil-gas/reliance-fundamental.md)`
- Reason: Docusaurus builds work better with full paths from `/docs/` directory

**CRITICAL: Only Link to Existing Files:**

- **Never create links to files that don't exist yet**
- Before adding cross-reference links, verify target file exists using `find`, `ls`, or Obsidian CLI
- If related content would be valuable but doesn't exist, note in "Related Topics" or "Future Research" section
- Broken links cause Docusaurus build failures (`onBrokenLinks: 'throw'`)
- Use Obsidian CLI `unresolved` command to check: `/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"`

### General Content Template

```markdown
---
title: Topic Name - Content Type
category: taxation | accounting | corporate-finance | investing | markets
topic: Specific Topic Area
type: guide | analysis | overview | framework | glossary
date: 2026-06-08
tags: [relevant, tags, here]
---

# Topic Name

**Last Updated:** June 8, 2026
**Category:** Taxation / Corporate Finance / etc.
**Difficulty:** Beginner / Intermediate / Advanced

## Overview

[Clear explanation of the topic/concept]

## Key Concepts

[Main ideas, definitions, frameworks]

## Detailed Explanation

[In-depth content with examples]

### Subtopic 1

[Content]

### Subtopic 2

[Content]

## Practical Examples

[Real-world examples, calculations, case studies]

## India-Specific Considerations

[Regulatory context, local market nuances, compliance requirements]

## Common Misconceptions

[Address common errors or misunderstandings]

## Application

[How to use this knowledge in practice]

## Related Topics

- [Related Topic 1](economics/category/related-file-1.md)
- [Related Topic 2](economics/category/related-file-2.md)

## References

- Source 1 (Date accessed)
- Source 2 (Date accessed)

## Glossary

**Term 1:** Definition
**Term 2:** Definition
```

### Taxation Content Template

```markdown
---
title: Tax Topic - India
category: taxation
tax_year: FY 2025-26 (AY 2026-27)
type: guide | compliance | optimization
date: 2026-06-08
tags: [taxation, india, income-tax]
---

# Tax Topic Name

**Applicable:** FY 2025-26 (AY 2026-27)
**Last Updated:** June 8, 2026
**Taxpayer Type:** Individual / HUF / Company / etc.

## Overview

[Summary of tax provision/concept]

## Legal Framework

**Act/Section:** Income Tax Act 1961, Section XXX
**Notification:** [If applicable]
**Effective Date:** DD-MM-YYYY

## Key Provisions

[Detailed explanation of tax rules]

## Tax Rates & Slabs

| Income Range | Tax Rate | Surcharge | Cess |
|--------------|----------|-----------|------|
| Rs. X - Y | XX% | X% | 4% |

## Calculation Examples

**Example 1:** [Scenario]

```

Calculation steps:

1. Step 1
2. Step 2
3. Total Tax: Rs. XXX

```

## Exemptions & Deductions

- **Section 80C:** [Details]
- **Section 80D:** [Details]

## Compliance Requirements

- **Due Dates:** [List]
- **Forms Required:** ITR-X, Form Y
- **Documentation:** [List]

## Optimization Strategies

[Legal ways to minimize tax burden]

## Common Mistakes

[Pitfalls to avoid]

## Recent Changes

**Budget 2025 Changes:**
- Change 1
- Change 2

## Related Tax Topics

- [Related Tax Topic 1](economics/taxation/related-topic-1.md)
- [Related Tax Topic 2](economics/taxation/related-topic-2.md)

## References

- Income Tax Act 1961
- CBDT Circulars
- [Official source links]

## Disclaimer

This content is for educational purposes only. Consult a qualified Chartered Accountant or tax professional for specific advice.
```

### Financial Concept Template

```markdown
---
title: Financial Concept Name
category: corporate-finance | investing | accounting
type: concept | framework | methodology
difficulty: beginner | intermediate | advanced
date: 2026-06-08
tags: [finance, valuation, concept-name]
---

# Financial Concept Name

**Category:** Corporate Finance / Investing / etc.
**Difficulty Level:** Beginner / Intermediate / Advanced
**Last Updated:** June 8, 2026

## Definition

[Clear, concise definition]

## Background & Context

[Why this concept matters, historical context]

## Detailed Explanation

[In-depth conceptual explanation]

## Formula / Framework

[Mathematical representation or decision framework]

## Assumptions & Limitations

[What this concept assumes, where it breaks down]

## Practical Example

**Scenario:** [Real-world situation]

**Data:**
- Input 1: Value
- Input 2: Value

**Analysis:**
[Step-by-step application]

**Result:** [Conclusion]

## Industry Application

[How professionals use this in practice]

## Common Variations

[Different approaches or adaptations]

## Pitfalls & Misuse

[How this concept is commonly misapplied]

## Related Concepts

- [Related Concept 1](economics/corporate-finance/related-1.md)
- [Related Concept 2](economics/investing/related-2.md)

## Further Reading

- Academic papers
- Practitioner guides
- Books

## References

- Source 1
- Source 2
```

## Markdown & Formatting

**See `/docs/CLAUDE.md`** for full Docusaurus markdown guidelines (blank lines, code blocks, MDX compatibility).

**Key rules:**

- Blank lines between all content blocks (paragraphs, tables, sections)
- Standard markdown links (no wikilinks)
- Language specified for code blocks
- Full paths for links starting with `economics/`
- Tables for comparisons and data

**MDX compatibility (CRITICAL for financial content):**

- Escape `<` and `>` symbols with backticks: Tax rate `<30%`, Market cap `>10,000` Cr
- Use backticks when showing comparisons: PE `>20`, Debt `<5%`
- Escape square brackets: `\[FY25\]` or use parentheses (FY25)
- These symbols are parsed as JSX/HTML tags in MDX and will break the build

**Financial Formatting Standards:**

- Currency: Use Rs. (Indian Rupee) for India-specific content, $ for US markets
- Large numbers: Use Indian notation - Cr (Crore = 10M), L (Lakh = 100K)
  - Example: Rs. 5,000 Cr (not Rs. 50 billion)
- Percentages: Two decimal places for precise metrics (12.75%), one for general (8.5%)
- Fiscal Year: Use FY26 format (April 2025 - March 2026) for Indian context
- Dates: Use ISO format (2026-06-08) or "June 8, 2026"

## India-Specific Standards

**Fiscal Year:**

- Indian FY: April-March (FY26 = Apr 2025 - Mar 2026)
- Assessment Year: One year after FY (AY 2026-27 for FY25-26)

**Currency & Units:**

- All India-focused figures in INR (Rs.)
- Use Cr and L notation (Indian convention)
- International content can use $ and billion/million

**Regulatory Context:**

- SEBI (Securities and Exchange Board of India) for markets
- RBI (Reserve Bank of India) for banking/monetary policy
- CBDT (Central Board of Direct Taxes) for income tax
- MCA (Ministry of Corporate Affairs) for company law
- Specify relevant Acts/Sections for legal content

**Market Context:**

- Reference NSE/BSE for equity markets
- Mention Nifty 50, Bank Nifty, or sectoral indices
- Note F&O segment eligibility where relevant

## Quality Checklist (Before Saving Markdown File)

Before creating/updating any markdown file, verify:

- [ ] Frontmatter is complete (title, category, type, date, tags)
- [ ] Content is factually accurate with sources cited
- [ ] Examples use realistic numbers and scenarios
- [ ] India-specific content notes fiscal year, regulations, compliance
- [ ] MDX special characters escaped (< > in backticks)
- [ ] Cross-references use full paths and point to existing files
- [ ] Tables are properly formatted with headers
- [ ] Blank lines between all sections and paragraphs
- [ ] Disclaimer included for tax/legal/investment content
- [ ] File saved to correct subfolder
- [ ] Update date reflects current date

## Expected Behaviors

**Research Request:**

1. Gather information from relevant sources
2. Structure content using appropriate template
3. **CREATE MARKDOWN FILE** with complete analysis
4. Search for related content, add cross-references
5. Confirm file creation with path

**Update Request:**

1. Search for existing content file
2. Read existing file
3. Fetch latest information (regulations, market data, etc.)
4. Edit file with updates
5. Add update log noting changes and date
6. Inform user what was updated

**Cross-Domain Query:**

1. Search across multiple economics subfolders
2. Synthesize insights from different domains
3. Create synthesis document if valuable
4. Link to source analyses
5. Save as markdown file in most relevant subfolder

**Maintenance:**

- Flag content with outdated regulations/data
- Verify cross-references when files are moved/renamed
- Check for orphaned documents, integrate into knowledge network
- Update examples when market conditions change significantly

**Proactive Suggestions:**

- When creating tax content, suggest related compliance guides
- When analyzing companies, suggest sector-level analysis
- Flag regulatory changes affecting existing content
- Suggest framework documents for recurring analysis types

## Sub-domain Specific Guidelines

**For company-analysis/ subfolder:**

- See dedicated `company-analysis/CLAUDE.md` for complete guidelines
- Follows specific templates for fundamental, technical, comprehensive analysis
- Maintains sector folders and peer comparisons
- India-focused equity research with NSE/BSE context

**For taxation/ subfolder:**

- Always specify applicable FY and AY
- Include Act/Section references
- Note due dates and compliance requirements
- Add disclaimer about consulting tax professionals
- Update after each Union Budget

**For corporate-finance/ subfolder:**

- Use rigorous financial models and formulas
- Include worked examples with realistic assumptions
- Note industry-specific variations
- Reference academic literature where applicable

**For mutual-funds/ subfolder:**

- Specify fund category (equity, debt, hybrid, etc.)
- Include expense ratio, AUM, manager tenure
- Note tax treatment (LTCG, STCG)
- Disclaimer about past performance

## Security & Access

**Do not access `office/*` folder** - contains sensitive proprietary data requiring explicit approval.

**Public sources only:** All content should use publicly available information (government sites, regulatory filings, published research, established financial literature).

## Version Control

**When updating existing content:**

- Add "Last Updated" date at top
- Note significant changes in update log at bottom
- Preserve historical context where valuable
- For major revisions, consider version suffix: `topic-name-v2.md`

**Update log format:**

```markdown
## Update History

**June 8, 2026:**
- Updated tax rates for FY 2025-26
- Added new exemption under Section 80CCD
- Revised examples for clarity

**March 15, 2026:**
- Initial version created
```
