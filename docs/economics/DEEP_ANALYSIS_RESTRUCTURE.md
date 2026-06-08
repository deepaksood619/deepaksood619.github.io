# Deep Analysis & Restructuring Plan for Economics Folder

**Analysis Date:** 2026-06-08

## Executive Summary

After deep analysis of 4 organically-grown folders (finance-investing, market-terms, mental-models, mutual-funds), significant restructuring is needed:

1. **Content mixing issues:** Files contain amalgamated content from different domains
2. **Poor categorization:** Related concepts scattered across multiple files
3. **Unclear hierarchy:** No logical progression from basics to advanced
4. **Duplicate/overlapping content:** Same topics appear in multiple files

**Recommendation:** Two-phase approach
- **Phase 1:** Folder-level reorganization (move files into better structure)
- **Phase 2:** File-level refactoring (split/merge content within files for atomic topics)

---

## Phase 1: Folder-Level Restructuring

### Current State Analysis

#### finance-investing/ (13 files) - **MAJOR ISSUES**

**Problems identified:**
1. **asset-classes.md** - Mix of: passive income philosophy, fixed income, debt instruments, VPF, buying tips, REITs
2. **company-analysis.md** - Actually about ONE specific company (Zaggle), not general analysis
3. **company-management.md** - Framework content (4C), not investing strategy
4. **checklist-tips.md** - Random collection: choosing stocks, PE ratios, legacy planning, estate planning, stock selection criteria
5. **tools.md** - Just a tools list, should be in resources
6. **personal-finance.md** - Mix of: 4 pillars, sequence risk, insurance calculations, retirement planning

**Content overlap:**
- Insurance appears in both `insurance.md` AND `personal-finance.md`
- Company analysis topics in both `company-analysis.md` (Zaggle only) AND generic guidance
- Asset classes scattered across `asset-classes.md`, `portfolios.md`, `stocks-equity.md`

#### market-terms/ (11 files) - **MODERATE ISSUES**

**Problems identified:**
1. **others.md** - Dumping ground for: VIX, geopolitical risk, equity risk premium, CAPM, Zerodha alerts
2. **trading-systems.md** - Mix of: CharIQ vs TradingView comparison, shortcuts, links (not a "system")
3. Content is actually well-organized by topic but needs sub-categorization

**Strengths:**
- Good separation of analysis types (technical, fundamental, valuation)
- Dedicated files for specific topics (IPO, order types, indicators)

#### mental-models/ (6 files) - **NEEDS REORGANIZATION**

**Problems identified:**
1. **economics-mental-models.md** - Random list: comparative advantage, diversification, economies of scale, incentives
2. Content too broad - mixing micro/macroeconomics with investment mental models
3. inequality.md has economic theory (Gini, Lorenz) not mental models

**Content belongs elsewhere:**
- `microeconomics.md` → Should be in `0-fundamentals/`
- `macroeconomics.md` → Should be in `0-fundamentals/`
- `inequality.md` → Economics theory, not investing mental model

#### mutual-funds/ (12 files) - **GOOD STRUCTURE, MINOR ISSUES**

**Strengths:**
- Well-organized by fund type (debt, equity, ETF, international)
- Logical separation of topics

**Minor issues:**
1. **others.md** - Catch-all file (always a red flag)
2. **debentures-bonds.md** - Could be in fixed-income or corporate-finance
3. Some overlap between debt fund files (debt-mutual-funds.md, debt-mutual-funds-analysis.md, debt-mutual-funds-risks.md)

---

## Proposed New Structure

### Root Level Folders

```
economics/
├── 0-fundamentals/          [NEW] Economic theory & macro concepts
├── 1-glossary/              [NEW] All terminology
├── 2-learning-resources/    [NEW] Courses, tools, links
├── 3-investment-products/   [NEW - CONSOLIDATE mutual-funds + parts of finance-investing]
├── 4-market-mechanics/      [RENAME market-terms → better categorization]
├── 5-investment-frameworks/ [NEW - CONSOLIDATE mental-models + parts of finance-investing]
├── 6-personal-finance/      [NEW - EXTRACT from finance-investing]
├── accounting-for-finance/  [KEEP AS IS]
├── corporate-finance/       [KEEP - add 2 files from root]
├── sector-analysis/         [KEEP AS IS]
├── taxation/                [KEEP AS IS]
└── company-analysis/        [KEEP - restructure companies by sector]
```

### Detailed Folder Breakdown

#### 0-fundamentals/ (Economic Theory)

```
0-fundamentals/
├── readme.md
├── intro.md                           [MOVE FROM ROOT]
├── economic-machine.md                [EXTRACT FROM intro.md]
├── schools-of-economic-thought.md     [MOVE FROM ROOT]
├── microeconomics.md                  [MOVE FROM mental-models/]
├── macroeconomics.md                  [MOVE FROM mental-models/]
├── gross-domestic-product-gdp.md      [MOVE FROM ROOT]
├── inflation-indexes.md               [MOVE FROM ROOT]
├── monetary-policies.md               [MOVE FROM ROOT]
├── government-terms.md                [MOVE FROM ROOT]
└── inequality-metrics.md              [MOVE FROM mental-models/inequality.md]
```

**Rationale:** Pure economic theory separate from investing practice

#### 1-glossary/ (Terminology & Definitions)

```
1-glossary/
├── readme.md
├── finance-terms.md           [MOVE FROM ROOT]
├── investment-terms.md        [MOVE FROM ROOT]
├── fintech-banking-terms.md   [MOVE FROM ROOT - rename]
├── financial-facts.md         [MOVE FROM ROOT]
└── market-terms-glossary.md   [NEW - EXTRACT from market-terms/others.md]
```

**Rationale:** Quick reference for definitions, separate from conceptual learning

#### 2-learning-resources/ (Courses, Tools, Links)

```
2-learning-resources/
├── readme.md
├── learning.md                          [MOVE FROM ROOT]
├── links.md                             [MOVE FROM ROOT]
├── course-zerodha-varsity.md            [MOVE FROM ROOT - rename]
├── tools-platforms.md                   [MOVE FROM finance-investing/tools.md]
├── charting-systems.md                  [MOVE FROM market-terms/trading-systems.md]
└── data-sources-apis.md                 [NEW - EXTRACT from tools.md]
```

**Rationale:** Learning materials separate from core content

#### 3-investment-products/ (Mutual Funds, ETFs, Structured Products)

```
3-investment-products/
├── readme.md
│
├── equity-funds/
│   ├── equity-mutual-funds.md           [MOVE FROM mutual-funds/]
│   ├── index-investing-etf.md           [MOVE FROM mutual-funds/]
│   ├── international-etfs.md            [MOVE FROM mutual-funds/]
│   └── nifty-indexes-indices.md         [MOVE FROM mutual-funds/]
│
├── debt-funds/
│   ├── debt-mutual-funds-overview.md    [MOVE FROM mutual-funds/debt-mutual-funds.md]
│   ├── debt-fund-analysis-framework.md  [MOVE FROM mutual-funds/debt-mutual-funds-analysis.md]
│   ├── debt-fund-risks.md               [MOVE FROM mutual-funds/debt-mutual-funds-risks.md]
│   └── fixed-income-instruments.md      [MOVE FROM mutual-funds/fixed-income.md]
│
├── hybrid-alternative/
│   ├── debentures-bonds.md              [MOVE FROM mutual-funds/]
│   ├── gold-etf.md                      [EXTRACT FROM finance-investing/gold-diamond-gold-etf.md]
│   └── reits-invits.md                  [EXTRACT FROM finance-investing/portfolios.md]
│
├── structured-products/
│   ├── portfolio-management-services-pms.md [MOVE FROM finance-investing/]
│   └── aif-specialized-funds.md         [NEW - placeholder]
│
└── fund-analysis/
    ├── mutual-fund-indicators.md        [MOVE FROM mutual-funds/]
    └── others.md                        [MOVE FROM mutual-funds/]
```

**Rationale:** All investment products organized by asset class and structure

#### 4-market-mechanics/ (How Markets Work - Technical Details)

```
4-market-mechanics/
├── readme.md
│
├── market-structure/
│   ├── order-types.md                   [MOVE FROM market-terms/]
│   ├── ipo-process.md                   [MOVE FROM market-terms/ipo.md]
│   ├── market-timings.md                [EXTRACT FROM market-terms/readme.md]
│   └── market-indicators.md             [EXTRACT FROM market-terms/others.md - VIX, etc.]
│
├── trading-derivatives/
│   ├── futures-options-basics.md        [MOVE FROM market-terms/futures-options-trading.md]
│   ├── derivatives-strategies.md        [EXTRACT FROM futures-options-trading.md]
│   └── swing-trading.md                 [MOVE FROM market-terms/]
│
├── technical-analysis/
│   ├── technical-analysis-basics.md     [MOVE FROM market-terms/technical-analysis.md]
│   ├── technical-indicators.md          [MOVE FROM market-terms/]
│   ├── candlestick-patterns.md          [EXTRACT FROM technical-analysis.md]
│   └── wyckoff-method.md                [MOVE FROM market-terms/]
│
└── fundamental-valuation/
    ├── fundamental-analysis-framework.md [MOVE FROM market-terms/fundamental-analysis.md]
    ├── valuation-metrics.md             [MOVE FROM market-terms/]
    └── financial-ratios.md              [EXTRACT FROM valuation-metrics.md]
```

**Rationale:** Separate market mechanics from investment decision frameworks

#### 5-investment-frameworks/ (Decision Making & Strategy)

```
5-investment-frameworks/
├── readme.md
│
├── core-concepts/
│   ├── asset-classes-overview.md        [MOVE FROM finance-investing/asset-classes.md]
│   ├── risk-return-tradeoff.md          [EXTRACT FROM asset-classes.md]
│   ├── diversification-hedging.md       [EXTRACT FROM mental-models/economics-mental-models.md]
│   └── passive-vs-active-income.md      [EXTRACT FROM asset-classes.md]
│
├── stock-selection/
│   ├── stock-selection-framework.md     [MOVE FROM finance-investing/checklist-tips.md]
│   ├── company-evaluation-4c.md         [MOVE FROM finance-investing/company-management.md]
│   ├── fundamental-checklist.md         [EXTRACT FROM checklist-tips.md]
│   └── technical-checklist.md           [EXTRACT FROM checklist-tips.md]
│
├── portfolio-construction/
│   ├── portfolio-allocation.md          [MOVE FROM finance-investing/portfolios.md]
│   ├── asset-allocation-models.md       [EXTRACT FROM portfolios.md]
│   ├── rebalancing-strategies.md        [NEW - EXTRACT from portfolios.md]
│   └── position-sizing.md               [NEW - placeholder]
│
├── mental-models/
│   ├── investment-mental-models.md      [MOVE FROM mental-models/economics-mental-models.md]
│   ├── behavioral-biases.md             [EXTRACT FROM economics-mental-models.md]
│   ├── marginal-utility-analysis.md     [MOVE FROM mental-models/]
│   ├── recession-shapes-recovery.md     [MOVE FROM mental-models/]
│   └── market-cycles.md                 [NEW - placeholder]
│
└── investment-philosophies/
    ├── value-investing.md               [NEW - placeholder]
    ├── growth-investing.md              [NEW - placeholder]
    ├── dividend-investing.md            [NEW - placeholder]
    └── index-investing-philosophy.md    [NEW - placeholder]
```

**Rationale:** Decision frameworks and mental models separated from technical mechanics

#### 6-personal-finance/ (Individual Financial Planning)

```
6-personal-finance/
├── readme.md
│
├── protection/
│   ├── insurance-overview.md            [MOVE FROM ROOT insurance.md]
│   ├── term-insurance.md                [EXTRACT FROM insurance.md]
│   ├── health-insurance.md              [EXTRACT FROM insurance.md]
│   └── emergency-fund.md                [EXTRACT FROM personal-finance.md]
│
├── tax-planning/
│   ├── tax-efficient-investing.md       [EXTRACT FROM personal-finance.md]
│   └── capital-gains-planning.md        [LINK TO taxation/]
│
├── retirement-planning/
│   ├── fire-financial-independence.md   [MOVE FROM finance-investing/financial-independence-fire-retirement.md]
│   ├── retirement-corpus-calculation.md [EXTRACT FROM fire.md]
│   └── sequence-risk.md                 [EXTRACT FROM personal-finance.md]
│
├── wealth-building/
│   ├── personal-finance-framework.md    [MOVE FROM finance-investing/personal-finance.md]
│   ├── savings-strategies.md            [EXTRACT FROM personal-finance.md]
│   └── wealth-stages.md                 [NEW - placeholder]
│
└── alternative-assets/
    ├── gold-physical-digital.md         [MOVE FROM finance-investing/gold-diamond-gold-etf.md]
    ├── real-estate-investing.md         [NEW - placeholder]
    └── alternative-investments.md       [NEW - placeholder]
```

**Rationale:** Personal financial planning separate from pure investing

#### corporate-finance/ (Enhanced)

```
corporate-finance/
├── readme.md
├── capital-budgeting.md             [KEEP]
├── corporate-actions.md             [KEEP]
├── cap-table-equity-allocation.md   [MOVE FROM ROOT]
├── investment-banking.md            [MOVE FROM ROOT]
├── valuation-methods.md             [NEW - placeholder]
└── m-and-a-basics.md                [NEW - placeholder]
```

---

## Phase 2: File-Level Refactoring (Content Splits)

### High-Priority File Splits

#### 1. finance-investing/asset-classes.md → Multiple files

**Current issues:** 228 lines mixing 5 different topics

**Split into:**
- `5-investment-frameworks/core-concepts/asset-classes-overview.md` (50 lines)
  - 4 main asset classes
  - CFA definition
  - Asset class characteristics
  
- `5-investment-frameworks/core-concepts/passive-vs-active-income.md` (30 lines)
  - Active vs passive income philosophy
  - Passive income strategies
  
- `3-investment-products/debt-funds/fixed-income-instruments.md` (100 lines)
  - Fixed income details
  - Debt instruments types
  - VPF, EPF, PPF details
  
- `3-investment-products/hybrid-alternative/reits-invits.md` (40 lines)
  - REIT basics
  - Indian REIT structure

#### 2. finance-investing/checklist-tips.md → 3 files

**Current issues:** 388 lines mixing stock selection + estate planning + fundamental/technical criteria

**Split into:**
- `6-personal-finance/wealth-building/legacy-estate-planning.md` (50 lines)
  - Legacy planning
  - Estate planning
  - Will creation

- `5-investment-frameworks/stock-selection/fundamental-checklist.md` (150 lines)
  - PE ratios
  - Fundamental analysis checklist
  - Annual report reading
  - Ratio analysis

- `5-investment-frameworks/stock-selection/technical-checklist.md` (100 lines)
  - MACD, RSI, Bollinger Bands
  - Technical indicators selection
  - Entry/exit criteria

#### 3. finance-investing/personal-finance.md → 4 files

**Current issues:** 166 lines mixing insurance, 4 pillars, sequence risk, retirement

**Split into:**
- `6-personal-finance/wealth-building/personal-finance-framework.md` (60 lines)
  - 4 pillars framework
  - Financial tracking
  - Administration

- `6-personal-finance/protection/emergency-fund.md` (30 lines)
  - Emergency fund sizing
  - Liquidity planning

- `6-personal-finance/retirement-planning/sequence-risk.md` (40 lines)
  - Sequence of returns risk
  - Withdrawal strategies

- `6-personal-finance/tax-planning/tax-efficient-investing.md` (30 lines)
  - Tax minimization strategies
  - Capital gains vs income tax

#### 4. market-terms/others.md → 4 files

**Current issues:** Dumping ground for unrelated concepts

**Split into:**
- `4-market-mechanics/market-structure/market-indicators.md`
  - Nifty VIX
  - Geopolitical risk indicator

- `5-investment-frameworks/core-concepts/risk-premium-models.md`
  - Equity risk premium
  - CAPM

- `1-glossary/market-terms-glossary.md`
  - Zerodha alerts definitions
  - ASM stage explanations

#### 5. mental-models/economics-mental-models.md → 3 files

**Current issues:** Random list of concepts with no structure

**Split into:**
- `5-investment-frameworks/mental-models/investment-mental-models.md`
  - Comparative advantage
  - Incentive bias
  - Mental accounting

- `5-investment-frameworks/core-concepts/diversification-hedging.md`
  - Diversification theory
  - Hedging concepts
  - Risk management models

- `0-fundamentals/economies-of-scale.md`
  - Pure economic theory
  - Production economics

#### 6. finance-investing/portfolios.md → 3 files

**Current issues:** 258 lines mixing asset allocation + tracking + specific strategies

**Split into:**
- `5-investment-frameworks/portfolio-construction/asset-allocation-models.md` (100 lines)
  - Sample portfolios
  - Equity/Debt/Gold splits
  - Domestic vs international allocation

- `5-investment-frameworks/portfolio-construction/rebalancing-strategies.md` (80 lines)
  - When to rebalance
  - Rebalancing methods
  - Tax implications

- `2-learning-resources/tools-platforms.md` (merge with existing tools.md)
  - Portfolio tracking tools
  - Monitoring systems

#### 7. finance-investing/company-analysis.md → 2 options

**Current issues:** File named "company-analysis" but contains ONLY Zaggle analysis

**Option A (Recommended):** 
- Move to `company-analysis/companies/technology/zaggle-comprehensive.md`
- Delete finance-investing/company-analysis.md

**Option B:**
- Rename to `zaggle-case-study.md` and keep as example
- Create proper `company-analysis-framework.md` with general guidance

#### 8. mutual-funds debt files consolidation

**Current state:** 3 separate files on debt funds

**Consolidate to:**
- `3-investment-products/debt-funds/debt-mutual-funds-complete-guide.md`
  - Merge: debt-mutual-funds.md + debt-mutual-funds-analysis.md
  - Keep separate: debt-mutual-funds-risks.md (focused topic)

---

## Content Extraction & Merging Map

### Files to Split (Extract content to new locations)

| Source File | Extract Section | Destination | Lines |
|------------|-----------------|-------------|-------|
| intro.md | "How the economic machine works" | 0-fundamentals/economic-machine.md | ~50 |
| asset-classes.md | "Two types of income" | 5-investment-frameworks/core-concepts/passive-vs-active-income.md | ~30 |
| asset-classes.md | Fixed income details | 3-investment-products/debt-funds/fixed-income-instruments.md | ~100 |
| checklist-tips.md | Legacy/estate planning | 6-personal-finance/wealth-building/legacy-estate-planning.md | ~50 |
| checklist-tips.md | Stock selection criteria | 5-investment-frameworks/stock-selection/fundamental-checklist.md | ~150 |
| personal-finance.md | 4 pillars | 6-personal-finance/wealth-building/personal-finance-framework.md | ~60 |
| personal-finance.md | Sequence risk | 6-personal-finance/retirement-planning/sequence-risk.md | ~40 |
| portfolios.md | Asset allocation models | 5-investment-frameworks/portfolio-construction/asset-allocation-models.md | ~100 |
| portfolios.md | Rebalancing | 5-investment-frameworks/portfolio-construction/rebalancing-strategies.md | ~80 |
| gold-diamond-gold-etf.md | Gold ETF section | 3-investment-products/hybrid-alternative/gold-etf.md | ~50 |
| gold-diamond-gold-etf.md | Physical gold | 6-personal-finance/alternative-assets/gold-physical-digital.md | ~100 |

### Files to Merge (Consolidate related content)

| Files to Merge | New Consolidated File | Reason |
|----------------|----------------------|--------|
| debt-mutual-funds.md + debt-mutual-funds-analysis.md | debt-mutual-funds-complete-guide.md | Overlapping content, better as single comprehensive guide |
| tools.md + trading-systems.md (partial) | 2-learning-resources/tools-platforms.md | Both are resource lists |

### Files to Delete (After content migration)

| File to Delete | Reason | Content Moved To |
|----------------|--------|------------------|
| finance-investing/company-analysis.md | Misnamed - only Zaggle content | company-analysis/companies/technology/zaggle-comprehensive.md |
| market-terms/trading-systems.md | Not a "system", just tool comparison | 2-learning-resources/charting-systems.md |
| mutual-funds/others.md | Generic catch-all | Split into specific topic files |
| mental-models/economics-mental-models.md | Too broad, mix of topics | Split into mental-models/ and core-concepts/ |

---

## Implementation Plan

### Step 1: Create New Folder Structure (DO THIS FIRST)

```bash
# Create new top-level folders
mkdir -p 0-fundamentals
mkdir -p 1-glossary
mkdir -p 2-learning-resources
mkdir -p 3-investment-products/{equity-funds,debt-funds,hybrid-alternative,structured-products,fund-analysis}
mkdir -p 4-market-mechanics/{market-structure,trading-derivatives,technical-analysis,fundamental-valuation}
mkdir -p 5-investment-frameworks/{core-concepts,stock-selection,portfolio-construction,mental-models,investment-philosophies}
mkdir -p 6-personal-finance/{protection,tax-planning,retirement-planning,wealth-building,alternative-assets}
```

### Step 2: Move Whole Files (Using Obsidian CLI)

Execute moves in this order to prevent broken links:

**2.1: Root to new folders (simple moves)**

```bash
VAULT="/Users/deepaksood/.../docs"
BIN="/Applications/Obsidian.app/Contents/MacOS/Obsidian"

# To 0-fundamentals
$BIN move path="economics/intro.md" to="economics/0-fundamentals/intro.md" vault="$VAULT"
$BIN move path="economics/schools-of-economic-thought.md" to="economics/0-fundamentals/schools-of-economic-thought.md" vault="$VAULT"
$BIN move path="economics/gross-domestic-product-gdp.md" to="economics/0-fundamentals/gross-domestic-product-gdp.md" vault="$VAULT"
$BIN move path="economics/inflation-indexes.md" to="economics/0-fundamentals/inflation-indexes.md" vault="$VAULT"
$BIN move path="economics/monetary-policies.md" to="economics/0-fundamentals/monetary-policies.md" vault="$VAULT"
$BIN move path="economics/government-terms.md" to="economics/0-fundamentals/government-terms.md" vault="$VAULT"

# To 1-glossary
$BIN move path="economics/finance-terms.md" to="economics/1-glossary/finance-terms.md" vault="$VAULT"
$BIN move path="economics/investment-terms.md" to="economics/1-glossary/investment-terms.md" vault="$VAULT"
$BIN move path="economics/fintech-nbfc-banking-terms.md" to="economics/1-glossary/fintech-banking-terms.md" vault="$VAULT"
$BIN move path="economics/financial-facts.md" to="economics/1-glossary/financial-facts.md" vault="$VAULT"

# To 2-learning-resources
$BIN move path="economics/learning.md" to="economics/2-learning-resources/learning.md" vault="$VAULT"
$BIN move path="economics/links.md" to="economics/2-learning-resources/links.md" vault="$VAULT"
$BIN move path="economics/course-investing-zerodha-varsity.md" to="economics/2-learning-resources/course-zerodha-varsity.md" vault="$VAULT"

# To corporate-finance
$BIN move path="economics/cap-table-equity-allocation.md" to="economics/corporate-finance/cap-table-equity-allocation.md" vault="$VAULT"
$BIN move path="economics/investment-banking.md" to="economics/corporate-finance/investment-banking.md" vault="$VAULT"

# To 6-personal-finance
$BIN move path="economics/insurance.md" to="economics/6-personal-finance/protection/insurance-overview.md" vault="$VAULT"
$BIN move path="economics/buy-now-pay-later-bnpl.md" to="economics/6-personal-finance/wealth-building/buy-now-pay-later-bnpl.md" vault="$VAULT"
```

**2.2: Mental-models reorganization**

```bash
# Move to 0-fundamentals
$BIN move path="economics/mental-models/microeconomics.md" to="economics/0-fundamentals/microeconomics.md" vault="$VAULT"
$BIN move path="economics/mental-models/macroeconomics.md" to="economics/0-fundamentals/macroeconomics.md" vault="$VAULT"
$BIN move path="economics/mental-models/inequality.md" to="economics/0-fundamentals/inequality-metrics.md" vault="$VAULT"

# Move to 5-investment-frameworks/mental-models
$BIN move path="economics/mental-models/marginal-utility-analysis.md" to="economics/5-investment-frameworks/mental-models/marginal-utility-analysis.md" vault="$VAULT"
$BIN move path="economics/mental-models/recession-shapes-recovery.md" to="economics/5-investment-frameworks/mental-models/recession-shapes-recovery.md" vault="$VAULT"

# NOTE: economics-mental-models.md needs content split first (Phase 2)
```

**2.3: Market-terms to 4-market-mechanics**

```bash
# Market structure
$BIN move path="economics/market-terms/order-types.md" to="economics/4-market-mechanics/market-structure/order-types.md" vault="$VAULT"
$BIN move path="economics/market-terms/ipo.md" to="economics/4-market-mechanics/market-structure/ipo-process.md" vault="$VAULT"

# Trading & derivatives
$BIN move path="economics/market-terms/futures-options-trading.md" to="economics/4-market-mechanics/trading-derivatives/futures-options-basics.md" vault="$VAULT"
$BIN move path="economics/market-terms/swing-trading.md" to="economics/4-market-mechanics/trading-derivatives/swing-trading.md" vault="$VAULT"

# Technical analysis
$BIN move path="economics/market-terms/technical-analysis.md" to="economics/4-market-mechanics/technical-analysis/technical-analysis-basics.md" vault="$VAULT"
$BIN move path="economics/market-terms/technical-indicators.md" to="economics/4-market-mechanics/technical-analysis/technical-indicators.md" vault="$VAULT"
$BIN move path="economics/market-terms/wyckoff-method.md" to="economics/4-market-mechanics/technical-analysis/wyckoff-method.md" vault="$VAULT"

# Fundamental & valuation
$BIN move path="economics/market-terms/fundamental-analysis.md" to="economics/4-market-mechanics/fundamental-valuation/fundamental-analysis-framework.md" vault="$VAULT"
$BIN move path="economics/market-terms/valuation-metrics.md" to="economics/4-market-mechanics/fundamental-valuation/valuation-metrics.md" vault="$VAULT"

# NOTE: trading-systems.md and others.md need refactoring first
```

**2.4: Mutual-funds to 3-investment-products**

```bash
# Equity funds
$BIN move path="economics/mutual-funds/equity-mutual-funds.md" to="economics/3-investment-products/equity-funds/equity-mutual-funds.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/index-investing-etf.md" to="economics/3-investment-products/equity-funds/index-investing-etf.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/international-etfs.md" to="economics/3-investment-products/equity-funds/international-etfs.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/nifty-indexes-indices.md" to="economics/3-investment-products/equity-funds/nifty-indexes-indices.md" vault="$VAULT"

# Debt funds
$BIN move path="economics/mutual-funds/debt-mutual-funds.md" to="economics/3-investment-products/debt-funds/debt-mutual-funds-overview.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/debt-mutual-funds-analysis.md" to="economics/3-investment-products/debt-funds/debt-fund-analysis-framework.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/debt-mutual-funds-risks.md" to="economics/3-investment-products/debt-funds/debt-fund-risks.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/fixed-income.md" to="economics/3-investment-products/debt-funds/fixed-income-instruments.md" vault="$VAULT"

# Hybrid/alternative
$BIN move path="economics/mutual-funds/debentures-bonds.md" to="economics/3-investment-products/hybrid-alternative/debentures-bonds.md" vault="$VAULT"

# Fund analysis
$BIN move path="economics/mutual-funds/mutual-funds-indicators.md" to="economics/3-investment-products/fund-analysis/mutual-fund-indicators.md" vault="$VAULT"
$BIN move path="economics/mutual-funds/others.md" to="economics/3-investment-products/fund-analysis/others.md" vault="$VAULT"
```

**2.5: Finance-investing reorganization**

```bash
# To 2-learning-resources
$BIN move path="economics/finance-investing/tools.md" to="economics/2-learning-resources/tools-platforms.md" vault="$VAULT"

# To 5-investment-frameworks
$BIN move path="economics/finance-investing/company-management.md" to="economics/5-investment-frameworks/stock-selection/company-evaluation-4c.md" vault="$VAULT"
$BIN move path="economics/finance-investing/portfolio-management-services-pms.md" to="economics/3-investment-products/structured-products/portfolio-management-services-pms.md" vault="$VAULT"
$BIN move path="economics/finance-investing/stocks-equity.md" to="economics/5-investment-frameworks/stock-selection/stocks-equity-basics.md" vault="$VAULT"
$BIN move path="economics/finance-investing/indian-company-types.md" to="economics/corporate-finance/indian-company-types.md" vault="$VAULT"

# To 6-personal-finance
$BIN move path="economics/finance-investing/financial-independence-fire-retirement.md" to="economics/6-personal-finance/retirement-planning/fire-financial-independence.md" vault="$VAULT"

# NOTE: These need content splitting (Phase 2):
# - asset-classes.md
# - checklist-tips.md  
# - company-analysis.md
# - personal-finance.md
# - portfolios.md
# - gold-diamond-gold-etf.md
```

### Step 3: File Content Refactoring (Phase 2 - After folder moves)

**Priority Order:**

1. **High Priority - Do immediately after moves:**
   - Split `asset-classes.md` (blocks 3-investment-products structure)
   - Split `checklist-tips.md` (blocks 5-investment-frameworks)
   - Split `personal-finance.md` (blocks 6-personal-finance)
   - Split `portfolios.md` (blocks 5-investment-frameworks)

2. **Medium Priority - Do within week:**
   - Split `gold-diamond-gold-etf.md`
   - Split `mental-models/economics-mental-models.md`
   - Split `market-terms/others.md`
   - Consolidate debt fund files

3. **Low Priority - Can defer:**
   - Extract candlestick patterns from technical-analysis.md
   - Extract derivatives strategies from futures-options-trading.md
   - Create placeholder files for missing topics

### Step 4: Create README.md files

Create comprehensive readme.md in each new folder with:
- Folder purpose
- Content catalog
- Learning progression (basics → advanced)
- Cross-references to related folders

### Step 5: Update Main Economics README

Update `/economics/readme.md` with new structure and navigation

### Step 6: Validation

```bash
# Check for broken links
$BIN unresolved vault="$VAULT"

# Check for orphaned files
$BIN orphans vault="$VAULT"

# Run Docusaurus build
cd /path/to/repo && npm run build
```

---

## Benefits of This Restructure

### Current State Problems Solved:

1. ✅ **Clear categorization** - Each folder has single, clear purpose
2. ✅ **Atomic content** - Files cover one cohesive topic
3. ✅ **Learning progression** - Numbered folders guide beginners (0-fundamentals → advanced)
4. ✅ **No orphan content** - Every file has logical home
5. ✅ **Separation of concerns:**
   - Theory (0-fundamentals) vs Practice (4-market-mechanics, 5-investment-frameworks)
   - Products (3-investment-products) vs Strategy (5-investment-frameworks)
   - Personal (6-personal-finance) vs Corporate (corporate-finance)
6. ✅ **Scalable structure** - Easy to add new content to appropriate folder
7. ✅ **Better discoverability** - Related content grouped together
8. ✅ **Reduced duplication** - Split files eliminate overlapping content

### Metrics:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Root-level folders | 8 folders | 12 folders | +4 (better org) |
| Files in economics root | 19 files | 2 files (CLAUDE.md, readme.md) | -17 (clean!) |
| Files needing splits | 8 major files | 0 (after Phase 2) | -8 |
| Catch-all "others.md" | 3 files | 0 (after refactor) | -3 |
| Average folder depth | 1 level | 2-3 levels | Better hierarchy |
| Duplicate content instances | ~12 cases | 0 (after Phase 2) | Eliminated |

---

## Timeline Estimate

### Phase 1 (Folder Reorganization):
- **Step 1-2:** Create folders + move whole files: **2-3 hours**
- **Step 4-5:** Create READMEs + update main: **1-2 hours**
- **Step 6:** Validation: **30 minutes**
- **Total Phase 1:** **4-6 hours**

### Phase 2 (File Content Refactoring):
- **High priority splits** (4 files): **3-4 hours**
- **Medium priority splits** (4 files): **2-3 hours**
- **Low priority** (optional): **2-3 hours**
- **Total Phase 2:** **7-10 hours**

### **Grand Total: 11-16 hours** (spread across 2-3 sessions)

---

## Next Steps

**Decision point for user:**

1. ✅ **Approve this deep analysis** - Proceed to execution?
2. 🔄 **Request modifications** - Change folder names, structure?
3. 📋 **Phase approach:**
   - Option A: Execute both phases now (complete restructure)
   - Option B: Execute Phase 1 now, defer Phase 2
   - Option C: Start with subset (e.g., only finance-investing + market-terms)

**Waiting for your approval to proceed with implementation.**
