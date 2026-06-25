---
slug: /company-analysis
title: Company Analysis Skill - Fundamental & Technical Research
description: Claude Code skill for performing comprehensive fundamental and/or technical analysis of Indian (NSE/BSE) and US market stocks, saving structured reports as markdown files
created: 2026-06-25
updated: 2026-06-25
---

Perform comprehensive company analysis (fundamental, technical, or both) for any stock and save the report as a structured markdown file in the knowledge base.

## Usage

```bash
/company-analysis <company-name> [ticker] [type]
/company-analysis Ather Energy
/company-analysis Reliance Industries NSE:RELIANCE fundamental
/company-analysis HDFC Bank NSE:HDFCBANK technical
/company-analysis Infosys NSE:INFY comprehensive
/company-analysis NVIDIA NASDAQ:NVDA comprehensive
```

**Analysis types:**

- `fundamental` — Financial health, valuation, business quality, shareholding (default for unknown companies)
- `technical` — Chart patterns, momentum, support/resistance, entry/exit zones
- `comprehensive` — Full fundamental + technical combined report

## Workflow

### Step 1: Search for Existing Analysis

```bash
# Semantic search
mcp__obsidian-hybrid-search__search(
  query="<company-name> analysis",
  limit=10
)

# Text search
grep -ri "<company-name>" docs/economics/company-analysis/
find docs/economics/company-analysis/companies -name "*<company-slug>*"
```

**Decision:**

- File exists → **UPDATE mode**: read existing file, fetch latest data, append update log
- No file → **CREATE mode**: full analysis from scratch

### Step 2: Determine Sector & File Location

**Sector mapping:**

| Industry | Folder |
|----------|--------|
| Oil & Gas, EV, Renewables, Power, Chemicals | `companies/energy/` |
| Banking, NBFCs, Insurance, AMC | `companies/financials/` |
| IT Services, SaaS, Internet, EdTech | `companies/technology/` |
| Semiconductors, Electronics, Hardware | `companies/semiconductors/` |
| Pharma, Healthcare, Biotech | `companies/healthcare/` |
| FMCG, Retail, Consumer | `companies/consumer/` |
| Auto (ICE + EV), Auto Ancillaries | `companies/auto/` |
| Infra, Real Estate, Cement | `companies/infra/` |
| Telecom, Media | `companies/telecom/` |
| US/Global stocks | `companies/us-global/` |

**File naming:** `{company-name}-{analysis-type}.md`

Examples: `hdfc-bank-fundamental.md`, `infosys-technical.md`, `suzlon-comprehensive.md`

### Step 3: Fetch Data

**Primary sources (always check):**

```text
1. Screener.in — Financial statements, ratios, shareholding, cash flows
   URL: https://www.screener.in/company/<TICKER>/
   Data: PE, PB, PS, ROE, ROCE, Debt/Equity, promoter holding, quarterly/annual P&L

2. NSE India — Stock price, announcements, corporate actions
   URL: https://www.nseindia.com/get-quotes/equity?symbol=<TICKER>

3. MoneyControl — News, analyst targets, peer comparison
   URL: https://www.moneycontrol.com/india/stockpricequote/<sector>/<company>

4. Economic Times / Business Standard — Recent news, management commentary

5. BSE Filings — Annual reports, shareholding disclosures, LODR

6. Groww MCP (if available) — Real-time fundamentals, OI data
7. Zerodha Kite MCP (if available) — Live prices, portfolio integration
```

**For technical analysis, additionally fetch:**

```text
- 52-week high/low
- Current price vs 50-day and 200-day SMA
- RSI (14-day)
- MACD
- Volume trends (recent vs 20-day average)
- Chart pattern (available from MoneyControl/TradingView description)
```

**US stocks:** Use Yahoo Finance, SEC EDGAR, company IR pages.

### Step 4: Perform Analysis

Follow the analysis framework in **Step 5** below. Use the relevant template section based on analysis type requested.

### Step 5: Create Markdown File

**Use Obsidian CLI:**

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

/Applications/Obsidian.app/Contents/MacOS/Obsidian create \
  path="economics/company-analysis/companies/{sector}/{filename}.md" \
  content="[full analysis content]" \
  vault="$VAULT"
```

### Step 6: Update readme.md Catalog

Add entry to `economics/company-analysis/readme.md` under the correct market section:

```markdown
### {Company Name}

- [{Company Name} - {Analysis Type} ({Date})](economics/company-analysis/companies/{sector}/{filename}.md)
  - **Type:** {Fundamental / Technical / Comprehensive} Analysis
  - **Ticker:** {EXCHANGE:TICKER}
  - **Score:** {X.X}/10 ⭐⭐⭐ ({Risk Level})
  - **Recommendation:** {Buy / Hold / Sell} ({Conviction Level})
  - **Target Price:** Rs. XXX (XX% upside/downside)
  - **Key Highlights:** 2-3 bullet points of most important findings
  - **Data Date:** {Date}, {Price}, {Market Cap}
  - **Next Update:** After {trigger event}
```

### Step 7: Cross-Reference

Search for related files to add cross-links:

```bash
# Find sector file
find docs/economics/company-analysis/sectors -name "*{sector}*"

# Find peer comparison file
find docs/economics/company-analysis/peer-comparisons -name "*{sector}*"

# Check if peer companies analyzed
find docs/economics/company-analysis/companies/{sector} -name "*.md"
```

Add to "Related Analyses" section of the new file — **only link to existing files**.

---

## Analysis Templates

### Fundamental Analysis Template

```markdown
---
slug: /{company-slug}-fundamental
title: {Company Name} - Fundamental Analysis {Year}
description: {One-line investment thesis summary}
company: {Company Name}
ticker: {NSE:TICKER / NASDAQ:TICKER}
sector: {Sector}
analysis_type: fundamental
date: {YYYY-MM-DD}
analyst: Claude (LLM-generated)
data_sources: [Screener.in, NSE, MoneyControl]
tags: [fundamental-analysis, {market}, {sector}]
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
---

- **Analysis Date:** {Month DD, YYYY}
- **Exchange:** NSE / BSE / NASDAQ / NYSE
- **Sector:** {Sector classification}
- **Market Cap:** Rs. {X,XX,XXX} Cr ({Large/Mid/Small} Cap)

## Executive Summary

**Fundamental Score:** {X.X}/10 ⭐⭐⭐

**Investment Recommendation:** {Strong Buy / Buy / Hold / Sell / Strong Sell}

**Conviction Level:** {High / Medium / Low}

**Target Price:** Rs. XXX ({XX}% upside) — {time horizon}

**Key Thesis:** {2-3 sentences on core investment thesis}

## Business Overview

**Company Profile:**
{Brief description — founding, HQ, founders}

**Business Model:**
- **Revenue Streams:** {How company makes money}
- **Key Products/Services:** {Main offerings}
- **Distribution:** {How they reach customers}

**Market Position:**
- **Market Rank:** {#X in sector by revenue/market share}
- **Key Competitors:** {Top 3 competitors}

**Competitive Moat:**
- {Moat factor 1}
- {Moat factor 2}
- {Moat factor 3 or ❌ No meaningful moat}

**Management Quality:**
- **Leadership:** {CEO/founders background}
- **Track Record:** {Key achievements}
- **Concerns:** {Any red flags}

**Corporate Governance:**
- **Promoter Holding:** {XX.XX}% ({Adequate/Below ideal/Strong})
- **Promoter Pledge:** {X.XX}% ({Red flag if >20%})
- **Institutional Support:** FII {XX}%, DII {XX}%

## Financial Analysis

### Revenue and Profit Trends

#### Annual Performance

| Metric | FY22 | FY23 | FY24 | FY25 | FY26 | YoY |
|--------|------|------|------|------|------|-----|
| **Revenue (Rs. Cr)** | | | | | | |
| **Operating Profit (Rs. Cr)** | | | | | | |
| **OPM (%)** | | | | | | |
| **Net Profit (Rs. Cr)** | | | | | | |
| **EPS (Rs.)** | | | | | | |

#### Quarterly Performance (Recent 4 Quarters)

| Quarter | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 |
|---------|---------|---------|---------|---------|
| **Sales (Rs. Cr)** | | | | |
| **OPM (%)** | | | | |
| **Net Profit (Rs. Cr)** | | | | |

### Margin Analysis

| Margin | FY24 | FY25 | FY26 | Trend | Peer Avg |
|--------|------|------|------|-------|----------|
| **Gross Margin** | | | | | |
| **OPM** | | | | | |
| **Net Margin** | | | | | |

### Cash Flow Quality

| Metric | FY26 (Rs. Cr) | Assessment |
|--------|---------------|------------|
| **Operating Cash Flow** | | |
| **Free Cash Flow (FCF)** | | |
| **Capex** | | |
| **Financing Activity** | | |

**Cash Flow Rating:** {X}/10

### Balance Sheet Strength

| Metric | Mar 2026 (Rs. Cr) | Analysis |
|--------|-------------------|----------|
| **Total Equity** | | |
| **Borrowings (Debt)** | | |
| **Debt-to-Equity** | | |
| **Total Assets** | | |
| **Cash & Equivalents** | | |
| **Interest Coverage** | | |

**Balance Sheet Rating:** {X}/10

## Shareholding Pattern (India-Specific)

| Category | {Latest Quarter} | QoQ Change | Assessment |
|----------|-----------------|------------|------------|
| **Promoter Holding** | {XX.XX}% | {↑↓} | |
| **Promoter Pledge** | {X.XX}% | {↑↓} | |
| **FII Holding** | {XX.XX}% | {↑↓} | |
| **DII Holding** | {XX.XX}% | {↑↓} | |
| **Public** | {XX.XX}% | {↑↓} | |

**Shareholding Rating:** {X}/10

Key observations:
- {Observation 1 about promoter trend}
- {Observation 2 about institutional activity}

## Valuation

| Metric | {Company} | {Peer 1} | {Peer 2} | Assessment |
|--------|-----------|----------|----------|------------|
| **Current Price** | Rs. XXX | Rs. XXX | Rs. XXX | |
| **Market Cap (Rs. Cr)** | | | | |
| **PE Ratio** | | | | |
| **Price/Book** | | | | |
| **Price/Sales** | | | | |
| **EV/EBITDA** | | | | |
| **Dividend Yield** | | | | |
| **ROE** | | | | |

**Valuation Verdict:** {CHEAP / FAIR / EXPENSIVE / VERY EXPENSIVE}

**Valuation Rating:** {X}/10

## Fundamental Score: {X.X}/10

| Criteria | Score | Rationale |
|----------|-------|-----------|
| **Business Quality** | /10 | {Brief justification} |
| **Financial Health** | /10 | {Revenue growth, margins, FCF} |
| **Shareholding Pattern** | /10 | {Promoter holding, institutional confidence} |
| **Valuation** | /10 | {PE, PB, PS vs peers} |
| **Growth Prospects** | /10 | {Revenue CAGR, market opportunity} |
| **Risk Management** | /10 | {Debt, competition, regulatory} |

**Composite Score: {X.X}/10**

## Investment Thesis

### Bull Case (Target: Rs. XXX — {XX}% upside)

1. {Catalyst/reason 1}
2. {Catalyst/reason 2}
3. {Catalyst/reason 3}

### Bear Case (Target: Rs. XXX — {XX}% downside)

1. {Risk 1}
2. {Risk 2}
3. {Risk 3}

### Base Case (Target: Rs. XXX)

{Assumptions and expected outcome}

**Expected Return Distribution:**
- **Bull Case ({X}% probability):** {XX}% upside — Rs. {XXX}
- **Base Case ({X}% probability):** {X}% return — Rs. {XXX}
- **Bear Case ({X}% probability):** {XX}% downside — Rs. {XXX}

## Risk Assessment

| Risk | Probability | Impact | Details |
|------|-------------|--------|---------|
| {Risk 1} | High/Med/Low | High/Med/Low | {Brief detail} |
| {Risk 2} | High/Med/Low | High/Med/Low | {Brief detail} |
| {Risk 3} | High/Med/Low | High/Med/Low | {Brief detail} |

**Overall Risk Rating:** {HIGH / MEDIUM / LOW} ({X}/10)

## Catalysts

**Near-term (0-3 months):**
- {Earnings release, policy announcement, product launch}

**Medium-term (3-12 months):**
- {Capacity expansion, market share gain, profitability milestone}

**Long-term (1-3 years):**
- {Sector tailwind, new market entry, structural change}

## Key Monitoring Parameters

**Quarterly:**
1. Revenue growth (target: {X}%+ YoY)
2. OPM trend (target: {X}%+)
3. Promoter holding (watch for dilution below {X}%)

**Trigger Events:**
- ✅ **Buy more:** {Condition 1}, {Condition 2}
- 🔻 **Reduce/Exit:** {Red flag 1}, {Red flag 2}

## Conclusion

{2-3 paragraph summary of investment case, recommendation, and suitable investor profile}

**Investment Recommendation:** {Action}
**Suitable For:** {Investor profile}
**Portfolio Allocation:** {X-X}% of portfolio

## Related Analyses

- [Sector Overview](economics/company-analysis/sectors/{sector}-overview.md) (if exists)
- [Peer Comparison](economics/company-analysis/peer-comparisons/{sector}-peers.md) (if exists)

## Disclaimer

This analysis is for educational and informational purposes only and does not constitute investment advice. Conduct your own due diligence and consult a qualified financial advisor before making investment decisions.

## Data Sources

- **Screener.in** — Financials, ratios, shareholding (Accessed: {Date})
- **NSE India** — Stock price, announcements (Accessed: {Date})
- **MoneyControl** — Peer data, analyst views (Accessed: {Date})

**Data Timestamp:** {Date}, {Time} IST (Stock Price: Rs. {XXX}, Market Cap: Rs. {X,XXX} Cr)

**Next Update Recommended:** After {trigger} ({Expected date})
```

---

### Technical Analysis Template

```markdown
---
slug: /{company-slug}-technical
title: {Company Name} - Technical Analysis {Year}
company: {Company Name}
ticker: {NSE:TICKER}
sector: {Sector}
analysis_type: technical
date: {YYYY-MM-DD}
analyst: Claude (LLM-generated)
data_sources: [NSE, Screener.in, MoneyControl]
tags: [technical-analysis, {market}, {sector}]
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
---

- **Analysis Date:** {Month DD, YYYY}
- **Current Price:** Rs. {XXX}
- **Trend:** {Uptrend / Downtrend / Sideways}

## Technical Summary

**Overall Signal:** {Bullish / Bearish / Neutral}
**Short-Term (1 month):** {Bullish / Bearish / Neutral}
**Medium-Term (3-6 months):** {Bullish / Bearish / Neutral}

**Action:** {Buy / Hold / Sell / Avoid}
**Entry Zone:** Rs. {XXX-XXX}
**Stop Loss:** Rs. {XXX} ({X}% below current)
**Target 1:** Rs. {XXX} ({X}% upside)
**Target 2:** Rs. {XXX} ({X}% upside)

## Price Action & Trend

**Current Price:** Rs. {XXX}

| Moving Average | Value | Signal |
|----------------|-------|--------|
| **50-Day SMA** | Rs. {XXX} | {Above = Bullish / Below = Bearish} |
| **200-Day SMA** | Rs. {XXX} | {Above = Bullish / Below = Bearish} |
| **20-Day EMA** | Rs. {XXX} | {Trend signal} |

**52-Week Range:** Rs. {XXX} (Low) — Rs. {XXX} (High)
**Position in Range:** {X}% (0% = at 52-week low, 100% = at 52-week high)

**Trend Assessment:**
- {Price vs moving averages analysis}
- {Higher highs/lower lows observation}

## Momentum Indicators

| Indicator | Value | Signal | Interpretation |
|-----------|-------|--------|----------------|
| **RSI (14-day)** | {XX} | {Bullish/Bearish/Neutral} | {`<`30 oversold, `>`70 overbought} |
| **MACD** | {+/-} | {Buy/Sell/Neutral} | {Crossover status} |
| **MACD Signal** | {Value} | | |
| **Stochastic** | {XX} | | |

**RSI Analysis:** {Interpretation of current RSI level}
**MACD Analysis:** {Bullish/Bearish crossover or divergence}

## Volume Analysis

| Metric | Value | Assessment |
|--------|-------|------------|
| **Today's Volume** | {X,XX,XXX} | {High/Low/Average} |
| **20-Day Avg Volume** | {X,XX,XXX} | Reference |
| **Volume Trend** | {Increasing/Decreasing} | {Signal} |

**Volume Assessment:** {Confirming price trend or diverging}

## Support & Resistance Levels

| Level | Price (Rs.) | Significance |
|-------|-------------|--------------|
| **Strong Resistance** | {XXX} | {52-week high / Previous high / Round number} |
| **Immediate Resistance** | {XXX} | {Recent swing high} |
| **Current Price** | **{XXX}** | {Current} |
| **Immediate Support** | {XXX} | {Recent swing low / Moving average} |
| **Strong Support** | {XXX} | {Key historical level} |
| **Major Support** | {XXX} | {52-week low / Multi-year support} |

## Chart Pattern (if visible)

**Pattern:** {Cup and Handle / Head and Shoulders / Double Bottom / Flag / VCP / Breakout / None}
**Pattern Status:** {Forming / Confirmed / Broken}
**Implication:** {Bullish/Bearish target from pattern}

**VCP Check (Volatility Contraction Pattern):**
- Contractions: {Number of price contractions}
- Pivot point: Rs. {XXX}
- Volume on pivot: {Normal/Low — Low is ideal for VCP}

## Entry & Exit Strategy

**Entry Strategy:**
- **Aggressive Entry:** Rs. {XXX-XXX} (current zone if bullish)
- **Conservative Entry:** Rs. {XXX-XXX} (on pullback to support)
- **Breakout Entry:** Rs. {XXX} (above resistance with volume)

**Position Sizing:** {X-X}% of portfolio
**Risk per trade:** {`<`2% of portfolio} (stop loss Rs. {XXX})

**Exit Strategy:**
- **Target 1 (partial):** Rs. {XXX} — sell {X}%
- **Target 2 (full):** Rs. {XXX} — sell remaining
- **Stop Loss:** Rs. {XXX} — exit fully if broken on closing basis
- **Trailing Stop:** Move stop to entry once Target 1 hit

## Risk Assessment

**Technical Risk Level:** {HIGH / MEDIUM / LOW}

- {Risk factor 1 — e.g., "Extended from 200-DMA by X%, vulnerability to pullback"}
- {Risk factor 2 — e.g., "RSI overbought, momentum may cool"}
- {Risk factor 3 — e.g., "Volume confirmation lacking for breakout"}

## Conclusion

{2-3 sentences on overall technical picture, immediate bias, and recommended action}

## Data Sources

- **NSE India** — Price, volume data (Accessed: {Date})
- **Screener.in** — Technical indicators (Accessed: {Date})

**Data Timestamp:** {Date}, {Time} IST (Price: Rs. {XXX})
```

---

### Comprehensive Analysis Template

Use both **Fundamental Analysis Template** + **Technical Analysis Template** combined in a single file. Add this bridge section between them:

```markdown
## Fundamental vs Technical Alignment

| Dimension | Signal | Notes |
|-----------|--------|-------|
| **Fundamental** | {Bullish/Bearish/Neutral} | {Score X/10} |
| **Technical** | {Bullish/Bearish/Neutral} | {Chart signal} |
| **Alignment** | {Aligned / Divergent} | {What this means} |
| **Recommendation** | **{Action}** | {Combined view} |

**Combined Conviction:** {High/Medium/Low}
{1-2 sentences on why fundamental and technical signals are aligned or divergent and how to act}
```

---

## Analysis Frameworks

### Fundamental Scoring Rubric (0-10 per dimension)

**Business Quality (0-10)**

| Score | Criteria |
|-------|----------|
| 8-10 | Strong moat (brand/network effects/switching costs), dominant market position, proven management, diversified revenue |
| 6-7 | Some differentiation, top-3 market position, decent management track record |
| 4-5 | Commodity business, intense competition, no clear moat, average management |
| 0-3 | No moat, losing market share, governance concerns, commodity with margin pressure |

**Financial Health (0-10)**

| Score | Criteria |
|-------|----------|
| 8-10 | Strong revenue growth (`>`20% CAGR), positive and improving margins, positive FCF, low debt (D/E `<`0.5x) |
| 6-7 | Steady growth (10-20%), improving margins, near-positive FCF, manageable debt |
| 4-5 | Flat growth, stable margins, neutral FCF, moderate debt |
| 0-3 | Declining revenue, negative margins, cash burn, high debt (`>`2x D/E) |

**Shareholding Pattern (0-10)**

| Score | Criteria |
|-------|----------|
| 8-10 | Promoter `>`50% with 0% pledge, rising FII/DII holding, no insider selling |
| 6-7 | Promoter 40-50% with `<`5% pledge, stable institutional holding |
| 4-5 | Promoter 30-40% with `<`15% pledge, mixed institutional signals |
| 0-3 | Promoter `<`30% or pledge `>`20%, institutional exit, insider selling |

**Valuation (0-10)**

| Score | Criteria |
|-------|----------|
| 8-10 | Trading at significant discount to peers and historical average; PE `<`15 for profitable, or P/S `<`2 for growth |
| 6-7 | Fairly valued — at par with peers; reasonable premium for growth |
| 4-5 | Slight premium to peers; growth justifies but limited margin of safety |
| 0-3 | Expensive: PE `>`40 for low-growth, P/S `>`8 for loss-making, or stock up `>`100% in 1 year |

**Growth Prospects (0-10)**

| Score | Criteria |
|-------|----------|
| 8-10 | Revenue CAGR `>`25%, large TAM, clear growth drivers (new products/markets), sector tailwinds |
| 6-7 | Revenue CAGR 15-25%, some growth levers, stable sector |
| 4-5 | Revenue CAGR 5-15%, mature business, limited expansion |
| 0-3 | `<`5% growth or declining revenue, shrinking TAM, structural headwinds |

**Risk Management (0-10)**

| Score | Criteria |
|-------|----------|
| 8-10 | Debt-free/low debt, diversified customers, limited regulatory risk, proven resilience |
| 6-7 | Manageable debt, some concentration risk, moderate regulatory exposure |
| 4-5 | Moderate debt, customer concentration, regulatory scrutiny |
| 0-3 | High debt (`>`2x D/E), single customer dependency, SEBI/regulatory issues, forex risk |

### Investment Recommendation Matrix

| Fundamental Score | Valuation | Recommendation |
|------------------|-----------|----------------|
| 7-10 | Cheap/Fair | **Strong Buy** |
| 7-10 | Expensive | **Hold / Accumulate on dips** |
| 5-6.9 | Cheap | **Buy (moderate conviction)** |
| 5-6.9 | Fair | **Hold** |
| 5-6.9 | Expensive | **Sell / Reduce** |
| `<`5 | Any | **Avoid / Sell** |

### India-Specific Flags

**Immediate Red Flags (reconsider investment):**

- Promoter pledge `>`20%
- Promoter holding declining sharply (`>`5% reduction in 1 quarter)
- Debt/Equity `>`3x for non-financial companies
- Cash conversion cycle deteriorating sharply
- Qualified audit opinion or auditor change
- Regulatory orders (SEBI, NCLT, tax dept)
- Related party transactions `>`20% of revenue

**Green Flags (positive signal):**

- Promoter increasing holding (open market purchase)
- Pledge reduction (financial de-leveraging)
- FII/DII increasing stake consecutively
- Debt-free status or debt paydown trajectory
- Consistent dividend history with growing payout
- CEO/management buying stock in open market

### Technical Analysis Quick Check

**Bullish Setup:**

- Price `>`200-DMA and `>`50-DMA
- RSI between 50-70 (momentum without overbought)
- MACD above signal line and positive histogram
- Volume increasing on up days, decreasing on down days
- Making higher highs and higher lows
- VCP pattern forming near pivot (low volume contraction)

**Bearish Setup:**

- Price `<`200-DMA
- RSI `<`40 (weakness) or `>`80 (overbought, correction risk)
- MACD below signal line with negative histogram
- Volume increasing on down days
- Lower highs and lower lows

**Neutral/Wait:**

- Price between 50-DMA and 200-DMA
- RSI near 50 (no strong signal)
- Consolidating in range without breakout

---

## India Market Context

### Financial Formatting Standards

- **Currency:** Always use Rs. (Indian Rupee)
- **Large numbers:** Use Indian notation — Cr (Crore = 10M), L (Lakh = 100K)
  - Example: Rs. 17,71,409 Cr (NOT Rs. 1.77 trillion)
- **Percentages:** Two decimal places for ratios (22.75%), one for growth (9.7% YoY)
- **Fiscal Year:** FY26 = April 2025 to March 2026
- **Quarters:** Q1 (Apr-Jun), Q2 (Jul-Sep), Q3 (Oct-Dec), Q4 (Jan-Mar)
- **Dates:** ISO format (2026-06-25) or "June 25, 2026"

### Market Cap Classification

- **Large Cap:** `>`Rs. 20,000 Cr
- **Mid Cap:** Rs. 5,000-20,000 Cr
- **Small Cap:** `<`Rs. 5,000 Cr

### Exchange Identifiers

- **NSE** (primary): `NSE:RELIANCE`, `NSE:HDFCBANK`
- **BSE** (secondary): `BSE:500325`
- **US markets:** `NASDAQ:NVDA`, `NYSE:JPM`

---

## Obsidian CLI Reference

```bash
VAULT="/Users/deepaksood/Library/CloudStorage/GoogleDrive-dsood@confluent.io/.shortcut-targets-by-id/1a1SooxwlvVEf843YfQKUVj04gJnPyMGO/deepaksood619.github.io/docs"

# Create new analysis file
/Applications/Obsidian.app/Contents/MacOS/Obsidian create \
  path="economics/company-analysis/companies/{sector}/{filename}.md" \
  content="[full content]" \
  vault="$VAULT"

# Read existing analysis
/Applications/Obsidian.app/Contents/MacOS/Obsidian read \
  path="economics/company-analysis/companies/{sector}/{filename}.md" \
  vault="$VAULT"

# Append update log to existing analysis
/Applications/Obsidian.app/Contents/MacOS/Obsidian append \
  path="economics/company-analysis/companies/{sector}/{filename}.md" \
  content="[update log section]" \
  vault="$VAULT"

# Find all analyses in a sector
/Applications/Obsidian.app/Contents/MacOS/Obsidian search \
  query="{company-name}" \
  vault="$VAULT"

# Check for broken links
/Applications/Obsidian.app/Contents/MacOS/Obsidian unresolved vault="$VAULT"
```

---

## Update Mode (Refreshing Existing Analysis)

When a company analysis file already exists:

1. **Read existing file** via Obsidian CLI
2. **Fetch latest data** from Screener.in, NSE
3. **Compare key metrics:**
   - Revenue and profit changes (quarterly + annual)
   - Shareholding pattern changes
   - Valuation changes (price, PE, PB)
   - Any major corporate actions (acquisitions, QIP, rights issue)
4. **Update the file** (Edit tool) with new data in the relevant sections
5. **Update frontmatter** `updated:` date
6. **Append update log** at bottom:

```markdown
---

## Update Log

### Update: {YYYY-MM-DD}
- **Price at update:** Rs. {XXX} (vs Rs. {old-price} at original analysis)
- **Key changes:** {What changed since last analysis}
- **Recommendation change:** {If recommendation changed, explain why}
- **Metrics updated:** Revenue Q{X} FY{XX}, Shareholding Mar {YYYY}, Valuation
```

7. **Update `readme.md`** catalog entry with new date and highlights

---

## Quality Checklist

Before saving any analysis markdown file:

- [ ] Frontmatter complete: slug, title, description, company, ticker, sector, analysis_type, date, data_sources, tags, created, updated
- [ ] All figures use Rs., Cr, L notation (Indian stocks)
- [ ] Percentages formatted consistently (2 decimal places for ratios)
- [ ] MDX special characters escaped: `<` `>` in backticks in inline text
- [ ] Data sources listed with access dates
- [ ] Cross-references use full paths from `economics/company-analysis/`
- [ ] Only link to files that actually exist (verify with find/ls)
- [ ] Tables properly formatted with headers and alignment
- [ ] Shareholding pattern includes promoter pledge status
- [ ] Investment disclaimer included at bottom
- [ ] Blank lines between all sections and paragraphs
- [ ] File saved to correct sector subfolder
- [ ] `readme.md` catalog updated with new entry
- [ ] No H1 heading (title comes from frontmatter)

---

## Critical Rules

### DO

- **Search first** — Always check for existing analysis before creating new
- **Save everything** — Every analysis MUST be a markdown file; never analysis-only in chat
- **Use Obsidian CLI** — For all file creation and updates
- **Full link paths** — Start from `economics/company-analysis/`
- **Verify links** — Check target file exists before linking
- **India-specific formatting** — Rs., Cr, FY notation, promoter pledge check
- **MDX-safe** — Escape `<` `>` with backticks in inline text
- **Timestamp data** — Always note when data was fetched

### DON'T

- **Skip file creation** — Never provide analysis only in chat
- **Auto-commit** — Never run `git commit` without explicit user approval
- **Create broken links** — Verify target file exists first
- **Guess financials** — If data unavailable from web, note it as "Data not available"
- **Access office/ folder** — Contains sensitive data, requires explicit approval
- **Delete content** — During updates/reorganization, never delete — only update/add

---

## Example Executions

### Example 1: New Fundamental Analysis

```text
User: /company-analysis HDFC Bank NSE:HDFCBANK fundamental

Step 1: Search
  mcp__obsidian-hybrid-search__search("HDFC Bank analysis")
  find docs/economics/company-analysis -name "*hdfc-bank*"
  → Not found → CREATE mode

Step 2: Sector
  Banking → companies/financials/
  Filename: hdfc-bank-fundamental.md

Step 3: Fetch
  WebFetch screener.in/company/HDFCBANK
  → Revenue, profit, PE, PB, NIM, NPA, shareholding

Step 4: Analyze
  Apply fundamental template
  Score: 8.2/10 (strong bank fundamentals)
  Recommendation: Buy

Step 5: Create
  Obsidian CLI create path="economics/company-analysis/companies/financials/hdfc-bank-fundamental.md"

Step 6: Update readme.md
  Add entry under "### HDFC Bank Limited"

Step 7: Cross-reference
  find docs/economics/company-analysis/sectors -name "*banking*" → Not found
  find docs/economics/company-analysis/peer-comparisons -name "*bank*" → Not found
  Note in "Future Analysis" section

Output:
  ✅ Created: economics/company-analysis/companies/financials/hdfc-bank-fundamental.md
  📊 Score: 8.2/10 | Recommendation: Buy
  📂 readme.md catalog updated
```

### Example 2: Update Existing Analysis

```text
User: /company-analysis Ather Energy (after Q1 FY27 results)

Step 1: Search
  find docs/economics/company-analysis -name "*ather*"
  → Found: companies/energy/ather-energy-fundamental.md → UPDATE mode

Step 2: Read existing file
  Obsidian CLI read path="companies/energy/ather-energy-fundamental.md"

Step 3: Fetch latest data
  WebFetch screener.in/company/ATHER
  → Q1 FY27 results: OPM improved to +2% (positive!), revenue Rs. 1,300 Cr

Step 4: Key changes
  - OPM: -6% (Q4 FY26) → +2% (Q1 FY27) → OPERATIONAL BREAKEVEN ACHIEVED
  - Recommendation change: Speculative Buy → Buy (positive development)

Step 5: Update file
  Edit key sections with new quarterly data
  Update frontmatter updated: date
  Append update log

Step 6: Update readme.md
  Update entry with new date and headline change

Output:
  ✅ Updated: economics/company-analysis/companies/energy/ather-energy-fundamental.md
  📈 Key change: Operational breakeven achieved (OPM +2% in Q1 FY27)
  📊 Score updated: 4.5/10 → 5.5/10
  🔔 Recommendation upgraded: Speculative Buy → Buy
```

### Example 3: Comprehensive Analysis

```text
User: /company-analysis Infosys NSE:INFY comprehensive

Step 1: Search → Not found → CREATE mode
Step 2: Sector → IT Services → companies/technology/
Step 3: Fetch → Revenue, margins, shareholding + price, 200-DMA, RSI
Step 4: Analyze both fundamental + technical
Step 5: Create with combined template
Output:
  ✅ Created: economics/company-analysis/companies/technology/infosys-comprehensive.md
  📊 Fundamental: 7.8/10 | Technical: Bullish (RSI 55, above 200-DMA)
  🎯 Combined Recommendation: Buy on dips to Rs. 1,550-1,600 zone
```

---

## Related Documentation

- [Company Analysis CLAUDE.md](economics/company-analysis/CLAUDE.md) - Full guidelines, templates, quality standards
- [Company Analysis Readme](economics/company-analysis/readme.md) - Content catalog of existing analyses
- [Obsidian CLI Reference](devops/ides/obsidian.md) - Complete Obsidian CLI command reference
- [Economics CLAUDE.md](economics/CLAUDE.md) - Financial KB standards
