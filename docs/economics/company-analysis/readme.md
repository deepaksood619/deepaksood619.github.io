# Company Analysis

**LLM-Maintained Financial Knowledge Base** - Systematic company research, fundamental analysis, and market intelligence for Indian equities (NSE/BSE).

## Overview

This directory contains comprehensive company analyses, sector reports, peer comparisons, and investment frameworks for Indian stock markets. All analyses are stored as structured markdown files with proper frontmatter, cross-references, and data sources.

**Key Principle:** Every analysis must be saved as a standalone markdown file. See [CLAUDE.md](CLAUDE.md) for complete guidelines.

---

## Content Catalog

### Reliance Industries Limited

- [Reliance Industries - Fundamental Analysis (June 3, 2026)](economics/company-analysis/companies/reliance-industries-fundamental.md)
  - **Type:** Fundamental Analysis
  - **Score:** 7.8/10 ⭐⭐⭐⭐
  - **Recommendation:** Buy (medium-term horizon)
  - **Key Highlights:** India's largest conglomerate with zero promoter pledge, strong cash flows, new energy pivot with USD 10Bn+ capex. Concerns: Low ROE (8.9%), fair valuation (22.7x PE), execution risk in new energy.
  - **Data Date:** June 3, 2026
  - **Next Update:** After Q1 FY27 earnings (July-August 2026)

### Ather Energy Limited

- [Ather Energy - Fundamental Analysis (June 3, 2026)](economics/company-analysis/companies/ather-energy-fundamental.md)
  - **Type:** Fundamental Analysis
  - **Score:** 4.5/10 ⭐⭐ (High Risk)
  - **Recommendation:** Speculative Buy (Only for Risk-Tolerant Investors)
  - **Key Highlights:** High-growth EV manufacturer (63% YoY revenue growth), OPM improving rapidly (-26% to -11% in 1 year), operational breakeven in sight (Q4 FY26: -6% OPM). **Major Concerns:** Still loss-making (Rs. 517 Cr loss FY26), expensive valuation (10.7x P/S, stock up 205% in 1 year), intense competition (Ola, TVS, Bajaj), continuous dilution risk, promoter holding 40.76% (below ideal).
  - **Risk Level:** Very High - Suitable only for `<5%` portfolio allocation
  - **Data Date:** June 3, 2026, 2:30 PM IST (Price: Rs. 1,028, Market Cap: Rs. 39,366 Cr)
  - **Next Update:** After Q1 FY27 earnings (July-August 2026) or operational breakeven announcement

### Investment Frameworks

*Framework documents to be created.*

**Planned Frameworks:**

- Fundamental Analysis Checklist
- Technical Analysis Framework
- DCF Valuation Template
- Shareholding Pattern Evaluation Guide
- Risk Assessment Matrix

---

## Directory Structure

```text
company-analysis/
├── CLAUDE.md                   # LLM workflow and standards
├── readme.md                   # This file - content catalog
├── companies/                  # Company-specific analyses
│   │── reliance-industries-fundamental.md
|   |── ather-energy-fundamental.md
└── frameworks/                 # Investment methodologies
```

---

## Usage Guidelines

### For Users

**Request Analysis:**

- "Analyze [Company Name] fundamentals"
- "Compare [Company A] vs [Company B]"
- "Provide sector overview for [Sector]"

**Update Existing Analysis:**

- "Update Reliance Industries analysis with latest data"
- "Refresh Q1 FY27 earnings for [Company]"

### For Claude (LLM)

**Critical Requirements:**

1. **Always create markdown files** - Never provide analysis only in chat
2. **Use proper frontmatter** - Include all required fields (title, company, ticker, sector, date, tags)
3. **Follow Indian conventions** - Rs., Cr, L notation; FY26 format; NSE/BSE tickers
4. **Cross-reference carefully** - Only link to files that exist; verify before adding links
5. **Update this readme.md** - Add new analyses to content catalog with key highlights
6. **Include data timestamps** - Note when data was fetched and when next update is recommended

**See [CLAUDE.md](CLAUDE.md) for complete workflow, templates, and quality standards.**

## Statistics

- **Total Company Analyses:** 2
- **Company Score Range:** 4.5/10 to 7.8/10
- **High-Risk Stocks:** 1 (Ather Energy)
- **Last Updated:** June 3, 2026

## Quick Links

- [Project Root CLAUDE.md](../../CLAUDE.md) - Docusaurus and Obsidian guidelines
- [Company Analysis CLAUDE.md](CLAUDE.md) - Financial analysis workflow and standards
- [Economics Section](../readme.md) - Parent economics directory
