# Company Analysis Knowledge Base

**LLM-maintained financial analysis repository** - Systematic company research, fundamental analysis, and market intelligence stored as structured markdown files.

## Core Purpose

This is an **LLM-maintained financial knowledge base** where Claude actively:

- Performs fundamental and technical analysis of companies
- Creates detailed company research reports as markdown files
- Maintains sector comparisons and peer analysis
- Tracks financial metrics, shareholding patterns, and market trends
- Builds cross-referenced investment research library

**Human:** Request analysis, provide company names, direct research focus.
**LLM:** Research execution, markdown file creation, cross-referencing, consistency checks.

## Critical Requirement: Everything as Markdown Files

**ALL analysis outputs MUST be saved as standalone markdown files:**

- ✅ Each company analysis → Separate `.md` file (e.g., `reliance-industries-fundamental-analysis.md`)
- ❌ Never provide analysis only in chat - always create a markdown file

**File naming convention:** `{company-name}-{analysis-type}.md`

- Examples: `reliance-industries-fundamental.md`, `tcs-technical-analysis.md`

## Content Catalog

**See [readme.md](readme.md) for full content catalog** - Company reports, sector analyses, market intelligence, peer comparisons, investment frameworks.

## Why LLM-Maintained Financial Knowledge Base?

*"The tedious part of maintaining investment research is not the analysis — it's organizing reports, tracking updates, and cross-referencing across companies."*

**Humans struggle with:** Updating 10-15 company reports when sector dynamics change, maintaining peer comparisons, tracking shareholding pattern changes, linking related analyses.

**LLMs excel at:** Fetching real-time financial data, systematic report generation, multi-file updates, cross-sector pattern recognition, consistent formatting.

**Not traditional screener queries:** This knowledge base sits between you and raw financial data as a curated, analytical layer.

- ❌ Traditional: Query screener → Get raw data → Manually analyze → Forget analysis
- ✅ LLM Knowledge Base: Query → Fetch data → Analyze → **Save as markdown** → Cross-reference → Build knowledge library

## Three-Layer Architecture

**Layer 1: Raw Data Sources** (real-time via MCPs and web)

- Financial APIs (Groww MCP, Zerodha Kite MCP)
- Web sources (Screener.in, MoneyControl, NSE/BSE, Economic Times)
- Regulatory filings (SEBI, company investor presentations)
- Analyst reports and news
- Market data providers

**Layer 2: The Knowledge Base** (LLM-maintained markdown files)

- Company analysis reports (fundamental, technical, comprehensive)
- Sector overview documents
- Peer comparison matrices
- Shareholding pattern trackers
- Valuation summaries with cross-references
- All markdown files in `/docs/economics/company-analysis/`

**Layer 3: The Schema** (this file)

- Defines report templates, financial analysis standards
- Guides how Claude structures analysis and creates markdown files
- Sets taxonomy for sectors, analysis types, and file organization

## Core Operations

### Analyze: Creating Company Reports

When analyzing a company:

1. **Fetch Data:** Use MCP tools (Groww/Zerodha) and web sources for financials, prices, shareholding
2. **Perform Analysis:** Fundamental/technical/comprehensive based on request
3. **Create Markdown File:** Save complete analysis as `.md` file with proper frontmatter
4. **Cross-Reference:** Link to related sector reports, peer analyses, previous reports
5. **Update Catalog:** Add entry to `readme.md` content catalog

### Update: Refreshing Existing Reports

When updating analysis:

1. Read existing markdown file
2. Fetch latest data
3. Update metrics, ratios, trends
4. Note changes in shareholding, financials, or outlook
5. Append update log at bottom
6. Preserve historical analysis for comparison

### Query: Synthesizing Investment Intelligence

1. Search existing markdown files (Obsidian CLI or grep)
2. Synthesize insights across multiple companies/sectors
3. Create new synthesis document if valuable
4. Cross-reference related analyses
5. Update sector-level markdown files

### Lint: Quality Checks

Periodically verify: stale analyses (`>3` months old), broken cross-references, orphaned company reports, missing peer comparisons, inconsistent valuations.

**Commands:** See parent `/docs/CLAUDE.md` for Obsidian CLI reference (orphans, deadends, unresolved).

## Target Taxonomy

**Folder structure for financial analysis:**

- **companies/** - Individual company deep-dives

- **sectors/** - Sector-level analysis and trends
  - `sectors/oil-gas-sector-overview.md`
  - `sectors/banking-sector-npa-analysis.md`
  - `sectors/it-services-margin-trends.md`

- **peer-comparisons/** - Comparative analyses
  - `peer-comparisons/telecom-big-3-comparison.md`
  - `peer-comparisons/private-banks-valuation.md`

- **frameworks/** - Investment methodologies and checklists
  - `frameworks/fundamental-analysis-checklist.md`
  - `frameworks/technical-analysis-framework.md`
  - `frameworks/dcf-valuation-template.md`

## Obsidian CLI Usage

**Prefer Obsidian CLI** over direct file operations for link graph updates and backlink maintenance.

**Full command reference:** See `/docs/CLAUDE.md` for complete Obsidian CLI examples (search, read, append, backlinks, orphans, etc.)

**VAULT path:** `/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs`

## Content Standards

### Mandatory Markdown File Creation

**EVERY analysis MUST be saved as a markdown file:**

```bash
# After completing analysis, ALWAYS create the file:
/Applications/Obsidian.app/Contents/MacOS/Obsidian create \
  path="economics/company-analysis/companies/{sector}/{company-name}-{analysis-type}-{date}.md" \
  content="[Full analysis content with frontmatter]" \
  vault="$VAULT"
```

**Never skip file creation** - The knowledge base is only useful if analyses are persisted as markdown files.

### Link Format

**CRITICAL:** Use standard markdown links, NOT Obsidian wikilinks.

❌ Wrong: `[[reliance-industries]]` (breaks Docusaurus)
✅ Correct: `[Reliance Industries](economics/company-analysis/companies/oil-gas/reliance-industries-fundamental-2026-06-03.md)`

**Link Path Requirements:**

- Use **full paths** starting with `economics/company-analysis/` (not relative `../` paths)
- Example: `[Sector Overview](economics/company-analysis/sectors/oil-gas-sector-overview.md)`
- NOT: `[Sector Overview](../../sectors/oil-gas-sector-overview.md)`
- Reason: Docusaurus builds work better with full paths from `/docs/` directory

**CRITICAL: Only Link to Existing Files:**

- **Never create links to files that don't exist yet**
- Before adding cross-reference links, verify the target file exists using `find`, `ls`, or Obsidian CLI
- If a related analysis would be valuable but doesn't exist, note in "Future Analysis" section
- Broken links cause Docusaurus build failures (`onBrokenLinks: 'throw'`)
- Use Obsidian CLI `unresolved` command to check for broken links: `/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"`

### Company Analysis Template

```markdown
---
title: Company Name - Fundamental Analysis
company: Company Name
ticker: NSE_SYMBOL / BSE_SYMBOL
sector: Sector Classification
analysis_type: fundamental | technical | comprehensive
date: 2026-06-03
analyst: Claude (LLM-generated)
data_sources: [Screener.in, MoneyControl, NSE, Groww MCP]
tags: [fundamental-analysis, indian-stocks, {sector}]
---

# Company Name - Fundamental Analysis

**Analysis Date:** June 3, 2026
**Exchange:** NSE/BSE
**Sector:** Oil & Gas / Banking / IT Services / etc.
**Market Cap:** Large Cap / Mid Cap / Small Cap

## Executive Summary

**Investment Recommendation:** Strong Buy / Buy / Hold / Sell / Strong Sell
**Conviction Level:** High / Medium / Low
**Target Price:** Rs. XXX (XX% upside)
**Key Thesis:** 2-3 sentence investment thesis

## Business Overview

[Description of business model, products/services, market position]

## Financial Analysis

### Key Metrics

| Metric | Current | Industry Avg | Assessment |
|--------|---------|--------------|------------|
| PE Ratio | XX.Xx | XX.Xx | Premium/Discount |
| ROE | XX.X% | XX.X% | Strong/Weak |
| Debt/Equity | X.XX | X.XX | Healthy/Concerning |

### Shareholding Pattern

- **Promoter Holding:** XX.XX%
- **Promoter Pledge:** X.XX%
- **FII Holding:** XX.XX%
- **DII Holding:** XX.XX%

## Valuation

[Valuation analysis with comparisons]

## Investment Thesis

### Bull Case
- Reason 1
- Reason 2
- Reason 3

### Bear Case
- Risk 1
- Risk 2
- Risk 3

## Risk Assessment

| Risk Category | Impact | Probability | Mitigation |
|---------------|--------|-------------|------------|
| [Risk] | High/Medium/Low | High/Medium/Low | [Strategy] |

## Peer Comparison

[Link to peer comparison file if exists]

## Catalysts

**Near-term (0-3 months):**
- Catalyst 1
- Catalyst 2

**Medium-term (3-12 months):**
- Catalyst 1

**Long-term (1-3 years):**
- Catalyst 1

## Conclusion

[Summary and key monitoring parameters]

## Related Analyses

- [Sector Overview](economics/company-analysis/sectors/{sector}-overview.md) (if exists)
- [Peer Comparison](economics/company-analysis/peer-comparisons/{sector}-peers.md) (if exists)

## Disclaimer

This analysis is for educational and informational purposes only and does not constitute investment advice. Conduct your own due diligence and consult a qualified financial advisor before making investment decisions.

## Data Sources

- Source 1 (Date accessed)
- Source 2 (Date accessed)
```

### Sector Overview Template

```markdown
---
title: {Sector Name} Sector Overview
sector: {Sector}
date: 2026-06-03
type: sector-analysis
tags: [sector-analysis, {sector}, indian-markets]
---

# {Sector Name} Sector Overview

## Sector Snapshot

**Market Size:** Rs. XXX Cr
**Growth Rate:** XX% CAGR
**Key Players:** Company 1, Company 2, Company 3
**Index Weight:** XX% in Nifty 50

## Sector Trends

[Major trends, regulatory changes, technological disruptions]

## Key Metrics Comparison

| Company | PE | ROE | Debt/Equity | Market Cap |
|---------|----|----|-------------|------------|
| Company 1 | XX | XX% | X.XX | Rs. XXX Cr |
| Company 2 | XX | XX% | X.XX | Rs. XXX Cr |

## Opportunities & Risks

**Tailwinds:**
- Factor 1
- Factor 2

**Headwinds:**
- Risk 1
- Risk 2

## Investment Outlook

[Sector-level investment perspective]

## Company Analyses in This Sector

- [Company 1 Analysis](economics/company-analysis/companies/{sector}/company1-fundamental.md)
- [Company 2 Analysis](economics/company-analysis/companies/{sector}/company2-fundamental.md)
```

### Key Workflows

**Analyze Company:**

1. Fetch data from MCP tools and web sources
2. Perform fundamental/technical/comprehensive analysis
3. **Create markdown file** with proper frontmatter and structure
4. Cross-reference to sector reports and peer comparisons
5. Update content catalog in `readme.md`

**Update Existing Analysis:**

1. Read existing markdown file
2. Fetch latest financial data
3. Compare metrics with previous analysis
4. Edit markdown file with updates
5. Add update log at bottom with date and key changes

**Sector Analysis:**

1. Search for all company files in sector folder
2. Aggregate metrics across sector
3. Create/update sector overview markdown file
4. Link individual company analyses
5. Note sector-wide trends and catalysts

**Peer Comparison:**

1. Identify 3-5 comparable companies
2. Fetch data for all peers
3. Create comparison table markdown file
4. Cross-reference to individual company reports
5. Highlight relative strengths/weaknesses

**Link Maintenance:**

- Search for company mentions across files, add cross-references
- Check backlinks to track which analyses reference this company
- Find orphaned company reports, integrate into sector files
- Verify cross-references when companies change names or merge

**Periodic Updates:**

- Flag analyses older than 3 months as stale
- Review after quarterly earnings, update financial metrics
- Track shareholding pattern changes quarterly
- Update sector reports when macro/regulatory changes occur
- Consolidate duplicate analyses into single versioned file

## Markdown & Formatting

**See `/docs/CLAUDE.md`** for full Docusaurus markdown guidelines (blank lines, code blocks, MDX compatibility).

**Key rules for financial reports:**

- Blank lines between all content blocks (paragraphs, tables, sections)
- Standard markdown links (no wikilinks)
- Language specified for code blocks (if using code)
- Full paths for links starting with `economics/company-analysis/`
- Tables for all metric comparisons

**MDX compatibility (CRITICAL for financial data):**

- Escape `<` and `>` symbols with backticks: PE `<20`, Market Cap `>10,000` Cr
- Use backticks when showing comparisons: ROE `>15%`, Debt/Equity `<0.5`
- Escape square brackets in financial notation: `\[FY25\]` or use parentheses (FY25)
- These symbols are parsed as JSX/HTML tags in MDX and will break the build

**Financial Formatting Standards:**

- Currency: Always use Rs. (Indian Rupee) followed by amount
- Large numbers: Use Indian notation - Cr (Crore = 10M), L (Lakh = 100K)
  - Example: Rs. 17,71,409 Cr (not Rs. 1.77 trillion)
- Percentages: Two decimal places for ratios (22.75%), one for growth (9.7% YoY)
- Fiscal Year: Use FY26 format (April 2025 - March 2026)
- Dates: Use ISO format (2026-06-03) or "June 3, 2026"

## Financial Analysis Quality Standards

**Data Recency:** Always timestamp data sources. Flag data older than 1 quarter (3 months) as stale.

**Data Sources:** Include all sources in frontmatter and footer - MCP tools used, websites accessed, dates fetched.

**Cross-Referencing:** Link to related company analyses, sector reports, peer comparisons. Verify links exist before adding.

**Consistency:** Use same metrics across all companies in a sector for comparability (PE, PB, ROE, ROCE, Debt/Equity).

**Update Tracking:** When updating existing analysis, note what changed (shareholding, financials, outlook) and date of update.

**Disclaimer:** Every analysis must include investment disclaimer at bottom.

## India-Specific Financial Standards

**Currency & Units:**

- All figures in INR (Rs.)
- Use Cr and L notation (Indian convention)
- Avoid billions/millions terminology

**Fiscal Year:**

- Indian FY: April-March (FY26 = Apr 2025 - Mar 2026)
- Note quarter: Q1 (Apr-Jun), Q2 (Jul-Sep), Q3 (Oct-Dec), Q4 (Jan-Mar)

**Exchanges:**

- Primary: NSE (National Stock Exchange)
- Secondary: BSE (Bombay Stock Exchange)
- Specify exchange in ticker (NSE:RELIANCE or BSE:500325)

**Shareholding:**

- Promoter holding percentage (critical for Indian stocks)
- Promoter pledge percentage (red flag if `>20%`)
- FII (Foreign Institutional Investors) and DII (Domestic Institutional Investors)

**Regulatory:**

- SEBI compliance notes
- LODR (Listing Obligations and Disclosure Requirements)
- Mention if stock in F&O segment

**Market Context:**

- Reference to Nifty 50, Nifty 500, or sectoral indices
- Market cap classification: Large Cap (`>20,000` Cr), Mid Cap (5,000-20,000 Cr), Small Cap (`<5,000` Cr)

## File Naming & Organization

**Company Analysis Files:**

- Format: `{company-name}-{analysis-type}.md`
- Examples:
  - `reliance-industries-fundamental.md`
  - `hdfc-bank-technical.md`
  - `tcs-comprehensive.md`
- Location: `economics/company-analysis/companies/{sector}/`

**Sector Files:**

- Format: `{sector-name}-{report-type}.md`
- Examples:
  - `oil-gas-sector-overview.md`
  - `banking-sector-npa-trends.md`
- Location: `economics/company-analysis/sectors/`

**Peer Comparison Files:**

- Format: `{sector}-peer-comparison.md`
- Examples:
  - `telecom-peer-comparison.md`
  - `private-banks-valuation-comparison.md`
- Location: `economics/company-analysis/peer-comparisons/`

**Frontmatter Requirements:**

- title, company, ticker, sector, analysis_type, date, data_sources, tags

## Expected Behaviors

**Company Analysis Request:**

1. Fetch data from MCP tools and web
2. Perform analysis (fundamental/technical/comprehensive)
3. **CREATE MARKDOWN FILE** with complete analysis
4. Search for related sector/peer files
5. Add cross-references to related analyses
6. Update `readme.md` catalog
7. Confirm file creation to user with path

**Update Request:**

1. Search for existing company analysis file
2. Read existing file
3. Fetch latest data
4. Edit file with new metrics
5. Add update log section noting changes
6. Inform user what was updated

**Sector Query:**

1. Search for all companies in sector
2. Read existing sector overview (if exists)
3. Update/create sector markdown file
4. Link to individual company analyses
5. Save as markdown file

**Periodic Maintenance:**

- Monthly: Check for analyses older than 3 months, flag for updates
- Quarterly: Update all analyses after earnings season
- Verify cross-references, fix broken links
- Track shareholding pattern changes
- Consolidate outdated analyses (archive old versions)

**Proactive Suggestions:**

- When analyzing a company, suggest related peer analyses
- When sector trends emerge, suggest sector report creation
- Flag valuation anomalies across peer group
- Suggest updates when major corporate actions occur

## Quality Checklist (Before Saving Markdown File)

Before creating/updating any analysis markdown file, verify:

- [ ] Frontmatter is complete (all required fields)
- [ ] All financial figures use Rs., Cr, L notation
- [ ] Percentages and ratios formatted consistently (2 decimal places)
- [ ] MDX special characters escaped (< > in backticks)
- [ ] Data sources listed with dates
- [ ] Cross-references use full paths and point to existing files
- [ ] Tables are properly formatted with headers
- [ ] Shareholding pattern includes promoter pledge
- [ ] Investment disclaimer included at bottom
- [ ] Blank lines between all sections and paragraphs
- [ ] File saved to correct sector subfolder
- [ ] `readme.md` catalog updated with new entry

## Security & Access

**Do not access `office/*` folder** - contains sensitive proprietary data requiring explicit approval.

**Public data only:** All financial analysis should use publicly available data (NSE/BSE filings, company reports, published analyst research).
