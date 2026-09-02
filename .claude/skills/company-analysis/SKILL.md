---
name: company-analysis
description: Perform comprehensive fundamental and/or technical analysis of Indian (NSE/BSE) and US market stocks, and save the report as a structured markdown file in the knowledge base. Use when the user runs /company-analysis <company-name> [ticker] [type].
---

# Company Analysis Skill - Fundamental & Technical Research

Full spec: [docs/ai/llm/code-generation/company-analysis-skill.md](/Users/deepak/deepaksood619.github.io/docs/ai/llm/code-generation/company-analysis-skill.md)

Perform comprehensive company analysis (fundamental, technical, or both) for any stock and save the report as a structured markdown file in the knowledge base.

## Usage

```text
/company-analysis <company-name> [ticker] [type]
/company-analysis Ather Energy
/company-analysis Reliance Industries NSE:RELIANCE fundamental
/company-analysis HDFC Bank NSE:HDFCBANK technical
/company-analysis Infosys NSE:INFY comprehensive
/company-analysis NVIDIA NASDAQ:NVDA comprehensive
```

**Analysis types:** `fundamental` (default for unknown companies) · `technical` · `comprehensive` (both, combined)

## Config

```bash
VAULT="/Users/deepak/deepaksood619.github.io/docs"
OBSIDIAN="/Applications/Obsidian.app/Contents/MacOS/Obsidian"
```

## Workflow

### 1. Search for existing analysis

```bash
mcp__obsidian-hybrid-search__search(query="<company-name> analysis", limit=10)
grep -ri "<company-name>" docs/economics/company-analysis/
find docs/economics/company-analysis/companies -name "*<company-slug>*"
```

File exists → **UPDATE mode** (read existing file, fetch latest data, append update log). No file → **CREATE mode**.

### 2. Determine sector & file location

Sector → folder: Oil/EV/Renewables/Power/Chemicals → `companies/energy/` · Banking/NBFC/Insurance/AMC → `companies/financials/` · IT/SaaS/Internet/EdTech → `companies/technology/` · Semiconductors/Electronics → `companies/semiconductors/` · Pharma/Healthcare → `companies/healthcare/` · FMCG/Retail/Consumer → `companies/consumer/` · Auto/Auto Ancillaries → `companies/auto/` · Infra/Real Estate/Cement → `companies/infra/` · Telecom/Media → `companies/telecom/` · US/Global → `companies/us-global/`

**Filename:** `{company-name}-{analysis-type}.md` (e.g. `hdfc-bank-fundamental.md`)

### 3. Fetch data

Primary sources: Screener.in (financials, ratios, shareholding), NSE India (price, corporate actions), MoneyControl (news, peer comparison, analyst targets), Economic Times/Business Standard, BSE filings. For technical: 52-week high/low, price vs 50/200-DMA, RSI(14), MACD, volume trends, chart pattern. US stocks: Yahoo Finance, SEC EDGAR, company IR pages.

### 4. Analyze using the templates & scoring rubrics

Full fundamental template, technical template, comprehensive bridge section, scoring rubrics (Business Quality, Financial Health, Shareholding, Valuation, Growth, Risk Management — each 0-10), recommendation matrix, and India-specific red/green flags are all in the [full spec](/Users/deepak/deepaksood619.github.io/docs/ai/llm/code-generation/company-analysis-skill.md#analysis-templates). Follow them precisely — do not improvise structure.

### 5. Create the markdown file (Obsidian CLI, not raw Write)

```bash
$OBSIDIAN create \
  path="economics/company-analysis/companies/{sector}/{filename}.md" \
  content="[full analysis content]" \
  vault="$VAULT"
```

### 6. Update `economics/company-analysis/readme.md` catalog

Add an entry under the correct market section with type, ticker, score, recommendation, target price, key highlights, data date (see spec for exact block format).

### 7. Cross-reference

```bash
find docs/economics/company-analysis/sectors -name "*{sector}*"
find docs/economics/company-analysis/peer-comparisons -name "*{sector}*"
find docs/economics/company-analysis/companies/{sector} -name "*.md"
```

Add to "Related Analyses" — **only link to files that actually exist**.

## Update mode (refreshing existing analysis)

Read existing file → fetch latest data (Screener.in, NSE) → compare revenue/profit, shareholding, valuation, corporate actions → edit relevant sections → bump `updated:` frontmatter → append an `## Update Log` entry → update `readme.md` catalog entry.

## India-specific formatting (always)

Rs. currency, Cr/Lakh notation (not trillions), 2dp for ratios / 1dp for growth %, FY = Apr-Mar, promoter pledge always checked in shareholding section.

## Quality checklist

Full frontmatter (slug, title, description, company, ticker, sector, analysis_type, date, data_sources, tags, created, updated) · Rs./Cr/L notation · MDX-escaped `<` `>` · data sources with access dates · full link paths from `economics/company-analysis/` · verified link targets · investment disclaimer · blank lines between sections · correct sector subfolder · readme.md updated · no H1.

## Critical Rules

✅ Search first · Every analysis MUST be saved as a markdown file, never chat-only · Use Obsidian CLI for file ops · Full link paths from `economics/company-analysis/` · Verify links exist · India-specific formatting · MDX-safe · timestamp all data

❌ Analysis-only in chat · Auto-commit (`git commit` needs explicit approval) · Broken links · Guessed financials (mark "Data not available" instead) · Access `office/` folder · Delete content during updates (only update/add)

## Related

- [Company Analysis CLAUDE.md](/Users/deepak/deepaksood619.github.io/docs/economics/company-analysis/CLAUDE.md) - full guidelines, templates, quality standards
- [Company Analysis Readme](/Users/deepak/deepaksood619.github.io/docs/economics/company-analysis/readme.md) - content catalog
- `/note` - general-purpose note creation in this same knowledge base (this skill is the domain-specific variant for stock analysis)
