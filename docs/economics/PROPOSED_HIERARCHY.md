# Proposed Economics Folder Hierarchy

**Current Date:** 2026-06-08

## Current Issues

1. **Root folder clutter:** 19 markdown files directly in `/economics/` root with no clear organization
2. **Missing folder structure:** Several logical categories need dedicated folders
3. **Company analysis structure:** Companies need sector-based sub-folders
4. **Inconsistent naming:** Mix of naming conventions across files

## Proposed Hierarchy

```
economics/
├── CLAUDE.md (master guide - KEEP)
├── readme.md (main index - KEEP)
│
├── 0-fundamentals/                    [NEW FOLDER]
│   ├── readme.md
│   ├── intro.md                       [MOVE FROM ROOT]
│   ├── schools-of-economic-thought.md [MOVE FROM ROOT]
│   ├── gross-domestic-product-gdp.md  [MOVE FROM ROOT]
│   ├── inflation-indexes.md           [MOVE FROM ROOT]
│   ├── monetary-policies.md           [MOVE FROM ROOT]
│   └── government-terms.md            [MOVE FROM ROOT]
│
├── 1-glossary/                        [NEW FOLDER - consolidate all term files]
│   ├── readme.md
│   ├── finance-terms.md               [MOVE FROM ROOT]
│   ├── investment-terms.md            [MOVE FROM ROOT]
│   ├── fintech-nbfc-banking-terms.md  [MOVE FROM ROOT]
│   └── financial-facts.md             [MOVE FROM ROOT]
│
├── 2-learning-resources/              [NEW FOLDER]
│   ├── readme.md
│   ├── learning.md                    [MOVE FROM ROOT]
│   ├── links.md                       [MOVE FROM ROOT]
│   └── course-investing-zerodha-varsity.md [MOVE FROM ROOT]
│
├── accounting-for-finance/            [KEEP AS IS]
│   ├── readme.md
│   ├── 0-accounting-for-finance.md
│   ├── 1-accounting-first-steps.md
│   ├── 2-income-statements-and-profitability-measures.md
│   ├── 2a-income-statement-comparisons.md
│   ├── 3-balance-sheets.md
│   ├── 3a-balance-sheet-comparisons.md
│   ├── 4-cash-flow-statements-cash-in-and-cash-out.md
│   ├── 4a-cash-flow-statement-comparisons.md
│   ├── 5-cleaning-up-accounting.md
│   ├── 5a-accounting-inconsistency-examples.md
│   ├── 6-accouting-financial-ratios-profitability-measures.md
│   └── 6a-ratio-analysis.md
│
├── corporate-finance/                 [RESTRUCTURE]
│   ├── readme.md
│   ├── capital-budgeting.md
│   ├── corporate-actions.md
│   ├── cap-table-equity-allocation.md [MOVE FROM ROOT]
│   └── investment-banking.md          [MOVE FROM ROOT]
│
├── finance-investing/                 [KEEP STRUCTURE]
│   ├── readme.md
│   ├── asset-classes.md
│   ├── checklist-tips.md
│   ├── company-analysis.md
│   ├── company-management.md
│   ├── financial-independence-fire-retirement.md
│   ├── gold-diamond-gold-etf.md
│   ├── indian-company-types.md
│   ├── personal-finance.md
│   ├── portfolio-management-services-pms.md
│   ├── portfolios.md
│   ├── stocks-equity.md
│   ├── tools.md
│   ├── insurance.md                   [MOVE FROM ROOT]
│   └── buy-now-pay-later-bnpl.md      [MOVE FROM ROOT]
│
├── market-terms/                      [KEEP AS IS]
│   ├── readme.md
│   ├── fundamental-analysis.md
│   ├── futures-options-trading.md
│   ├── ipo.md
│   ├── order-types.md
│   ├── others.md
│   ├── swing-trading.md
│   ├── technical-analysis.md
│   ├── technical-indicators.md
│   ├── trading-systems.md
│   ├── valuation-metrics.md
│   └── wyckoff-method.md
│
├── mental-models/                     [KEEP AS IS]
│   ├── economics-mental-models.md
│   ├── inequality.md
│   ├── macroeconomics.md
│   ├── marginal-utility-analysis.md
│   ├── microeconomics.md
│   └── recession-shapes-recovery.md
│
├── mutual-funds/                      [KEEP AS IS]
│   ├── readme.md
│   ├── debentures-bonds.md
│   ├── debt-mutual-funds-analysis.md
│   ├── debt-mutual-funds-risks.md
│   ├── debt-mutual-funds.md
│   ├── equity-mutual-funds.md
│   ├── fixed-income.md
│   ├── index-investing-etf.md
│   ├── international-etfs.md
│   ├── mutual-funds-indicators.md
│   ├── nifty-indexes-indices.md
│   └── others.md
│
├── sector-analysis/                   [KEEP STRUCTURE]
│   ├── readme.md
│   ├── overview.md
│   ├── industry-sectors.md
│   └── usd-inr-exchange-rate-outlook-analysis.md
│
├── taxation/                          [KEEP AS IS]
│   ├── readme.md
│   ├── deductions.md
│   ├── gst.md
│   ├── huf-private-trust.md
│   ├── income-tax.md
│   ├── returns-tax-taxes-itr.md
│   ├── taxation-domestic.md
│   ├── taxation-foreign-residency.md
│   └── taxation-foreign.md
│
└── company-analysis/                  [MAJOR RESTRUCTURE]
    ├── CLAUDE.md
    ├── readme.md
    │
    ├── frameworks/                    [NEW FOLDER]
    │   └── (to be created - valuation frameworks, analysis templates)
    │
    ├── peer-comparisons/              [NEW FOLDER]
    │   └── (to be created - cross-company comparisons)
    │
    ├── sectors/                       [NEW FOLDER]
    │   └── (to be created - sector overview files)
    │
    ├── market-analysis/               [NEW FOLDER]
    │   └── us-market-bubble-evaluation-2026-06-03.md [MOVE FROM company-analysis/]
    │
    └── companies/                     [RESTRUCTURE INTO SECTORS]
        ├── technology/                [NEW SUBFOLDER]
        │   ├── alphabet-google-comprehensive-analysis.md    [MOVE]
        │   ├── amazon-comprehensive-analysis.md             [MOVE]
        │   └── physicswallah-comprehensive.md               [MOVE]
        │
        ├── energy/                    [NEW SUBFOLDER]
        │   ├── reliance-industries-fundamental.md           [MOVE]
        │   ├── suzlon-energy-comprehensive.md               [MOVE]
        │   └── ather-energy-fundamental.md                  [MOVE]
        │
        └── (future sectors as needed: finance/, consumer/, healthcare/, etc.)
```

## Summary of Changes

### New Folders to Create (3 folders)

1. **0-fundamentals/** - Economic theory and macro concepts
2. **1-glossary/** - All terminology and definitions
3. **2-learning-resources/** - Courses, links, learning materials

### Files to Move from Root to New Folders (19 files)

**To 0-fundamentals/ (6 files):**
- intro.md
- schools-of-economic-thought.md
- gross-domestic-product-gdp.md
- inflation-indexes.md
- monetary-policies.md
- government-terms.md

**To 1-glossary/ (4 files):**
- finance-terms.md
- investment-terms.md
- fintech-nbfc-banking-terms.md
- financial-facts.md

**To 2-learning-resources/ (3 files):**
- learning.md
- links.md
- course-investing-zerodha-varsity.md

**To corporate-finance/ (2 files):**
- cap-table-equity-allocation.md
- investment-banking.md

**To finance-investing/ (2 files):**
- insurance.md
- buy-now-pay-later-bnpl.md

### Company Analysis Restructuring

**New subfolders under company-analysis/:**
- frameworks/ (empty, for future use)
- peer-comparisons/ (empty, for future use)
- sectors/ (empty, for future use)
- market-analysis/ (for broad market evaluations)

**Reorganize companies/ by sector:**
- companies/technology/ (Alphabet, Amazon, PhysicsWallah)
- companies/energy/ (Reliance, Suzlon, Ather)

### Files to Keep in Root (2 files)

- CLAUDE.md (master configuration)
- readme.md (main index)

## Naming Convention Standards

After reorganization, enforce these standards:

1. **Folder names:** lowercase, hyphens for multi-word (e.g., `company-analysis/`)
2. **File names:** lowercase, hyphens, descriptive (e.g., `gross-domestic-product-gdp.md`)
3. **Company files:** `{company-name}-{analysis-type}.md` (e.g., `reliance-industries-fundamental.md`)
4. **Numbered prefixes:** Keep for ordered content (e.g., `0-fundamentals/`, accounting series)

## Benefits of This Hierarchy

1. **Clear categorization:** Related content grouped logically
2. **Clean root folder:** Only 2 essential files in root
3. **Scalable structure:** Easy to add new companies, sectors, topics
4. **Better discoverability:** Intuitive folder names for navigation
5. **Consistent organization:** Each domain has its dedicated space
6. **Future-proof:** Room for growth in each category

## Implementation Order

1. Create 3 new folders (0-fundamentals, 1-glossary, 2-learning-resources)
2. Create company-analysis subfolders (frameworks, peer-comparisons, sectors, market-analysis)
3. Create sector subfolders under companies/ (technology, energy)
4. Move files using Obsidian CLI (preserves backlinks)
5. Update readme.md files in each folder
6. Verify all links are intact

## Files That Need New readme.md

Create these readme.md files after folder creation:

1. `0-fundamentals/readme.md` - Overview of economic fundamentals
2. `1-glossary/readme.md` - Index of all terminology files
3. `2-learning-resources/readme.md` - Catalog of courses and learning materials

## Post-Move Tasks

1. Update main `/economics/readme.md` with new structure
2. Update subfolder readme.md files with file listings
3. Run Obsidian CLI unresolved link check
4. Update CLAUDE.md references to new paths (if any)
5. Test Docusaurus build to verify no broken links
