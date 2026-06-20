---
slug: /economics/corporate-finance/cap-table-equity-allocation
title: Cap Table and Equity Allocation for Startups
description: Discover the essential guide to cap tables and equity allocation for startups, understanding ownership, dilution, and funding implications for better decision-making.
created: 2026-05-04
updated: 2026-06-09
---
## What is a Cap Table?

A capitalization table (cap table) is a spreadsheet or document that tracks all equity ownership, dilution, and value of equity in a company. It lists all securities (common stock, preferred stock, options, warrants, convertible notes) and shows who owns what percentage of the company.

**Key components:**

- Shareholder names
- Number of shares owned
- Type of shares (common, preferred)
- Ownership percentage
- Share price at different funding rounds
- Dilution tracking across funding rounds

## Importance of Cap Tables

- **Transparency:** Shows who owns what at any point in time
- **Fundraising:** Critical for due diligence during investment rounds
- **Decision-making:** Determines voting rights and control
- **Exit planning:** Calculates payout distribution in acquisitions
- **Employee compensation:** Tracks option pools and vesting schedules
- **Legal compliance:** Required for tax reporting and regulatory filings

## Equity Allocation: Founder vs. Founding Member

### Key Distinction

**Founder:**

- Originated the idea or started the company
- Assumes full legal and financial risk
- Typically the CEO or primary decision-maker
- Often invests personal capital or takes no salary initially

**Founding Member / Co-founder:**

- Joins very early (pre-product or pre-revenue)
- Critical to initial execution but didn't originate the company
- May have less financial risk than founder
- Could be first employee with founder-like equity

### Equity Split Guidelines

#### Standard Splits (1 Founder + 1 Founding Member)

**Scenario 1: Equal partnership (50/50)**

- Both contribute equally to idea, execution, capital
- Equal decision-making authority
- Similar risk profiles

**Scenario 2: Founder-heavy (60-70% founder / 30-40% founding member)**

- Founder originated idea and took initial risk
- Founding member joined within first 3-6 months
- Founder may be CEO, founding member is CTO/COO

**Scenario 3: Founder-dominant (75-85% founder / 15-25% founding member)**

- Founding member joined later (6-12 months)
- Founder built MVP or raised initial capital alone
- Founding member fills critical skill gap but less overall contribution

#### Factors to Consider

**Contribution factors:**

- Who had the original idea?
- Who is taking financial risk? (invested money, forgone salary)
- Who has domain expertise critical to success?
- Who will be CEO and bear ultimate responsibility?
- What are the relative skill sets and replaceability?

**Time commitment:**

- Full-time vs. part-time involvement
- Future commitment expectations
- Opportunity cost (what salary are they giving up?)

**Capital contribution:**

- Personal investment amounts
- Access to future funding networks
- Credit risk (e.g., personal guarantees on loans)

**Intangibles:**

- Network and relationships
- Brand/reputation value
- Industry connections
- Prior startup experience

## Vesting Schedules

**Critical rule:** Even founders should have vesting to protect the company.

### Standard Vesting Terms

**4-year vesting with 1-year cliff:**

- 25% vests after 1 year (the "cliff")
- Remaining 75% vests monthly over next 3 years
- Protects company if someone leaves early

**Example:**

```bash
Founder gets 60% equity (600,000 shares out of 1M total)

Year 0: 0 shares vested (still in cliff period)
Year 1: 150,000 shares vest (25% of 600k)
Year 2: 300,000 shares vested (50% of 600k)
Year 3: 450,000 shares vested (75% of 600k)
Year 4: 600,000 shares vested (100%)

If founder leaves at month 18:
- Vested: 150k (cliff) + 75k (6 months × 12.5k/month) = 225k shares
- Unvested: 375k shares return to company
```

### Acceleration Clauses

**Single-trigger acceleration:**

- Vesting accelerates upon acquisition/exit event
- Risky for acquirers (can prevent deals)

**Double-trigger acceleration:**

- Requires two events: (1) acquisition AND (2) termination without cause
- More standard in modern term sheets
- Protects founders from being fired post-acquisition

**Example:** If company is acquired and founder is fired within 12 months, 50-100% of unvested shares immediately vest.

## Common Equity Allocation Mistakes

### Mistake 1: Equal Split by Default

**Problem:** "We're both founders, so 50/50 is fair"

**Reality:**

- Contributions are rarely equal over time
- Creates deadlock in disagreements
- Doesn't reflect actual value creation

**Solution:** Honestly assess relative contributions and risk

### Mistake 2: No Vesting

**Problem:** Giving full equity upfront without vesting

**Risk:**

- Co-founder leaves after 3 months with 40% of company
- Impossible to recruit new talent (cap table poisoned)
- Investors won't fund a company with dead equity

**Solution:** Always use vesting, even for founders

### Mistake 3: Not Reserving Option Pool

**Problem:** Allocating 100% of equity between founders

**Risk:**

- No equity to hire early employees
- Must dilute founders to create option pool later
- Uncompetitive job offers

**Solution:** Reserve 10-20% option pool at formation

### Mistake 4: Overvaluing Ideas vs. Execution

**Problem:** Giving 80% to "idea person" who won't execute

**Reality:**

- Ideas are worth ~1% of a startup's value
- Execution is everything
- The person building the product creates the value

**Solution:** Weight heavily toward execution and future contribution

### Mistake 5: Mixing Equity with Compensation

**Problem:** Giving equity as payment for services rendered

**Risk:**

- Creates tax complications (equity = income)
- Misaligns incentives (short-term work vs. long-term value)
- Dilutes actual owners

**Solution:** Pay for services with cash or convertible notes, equity for ownership

## Sample Cap Table Evolution

### Formation (Day 0)

| Shareholder | Shares | Percentage | Type |
|-------------|--------|------------|------|
| Founder | 6,000,000 | 60% | Common (vesting) |
| Founding Member | 3,000,000 | 30% | Common (vesting) |
| Option Pool | 1,000,000 | 10% | Reserved |
| **Total** | **10,000,000** | **100%** | |

### Seed Round (12 months later)

Company raises $500k at $2M pre-money valuation.

| Shareholder | Shares | % (pre-money) | % (post-money) | Notes |
|-------------|--------|---------------|----------------|-------|
| Founder | 6,000,000 | 60% | 48% | Diluted |
| Founding Member | 3,000,000 | 30% | 24% | Diluted |
| Option Pool | 1,000,000 | 10% | 8% | Diluted |
| Seed Investors | 2,500,000 | - | 20% | New |
| **Total** | **12,500,000** | **100%** | **100%** | |

**Dilution calculation:**

- Pre-money shares: 10M
- Investment: $500k at $2M valuation = 20% ownership
- Post-money shares: 10M / 0.8 = 12.5M
- New shares issued: 2.5M to investors

### Series A (24 months later)

Company raises $3M at $10M pre-money valuation.

| Shareholder | Shares | % (post-money) | Notes |
|-------------|--------|----------------|-------|
| Founder | 6,000,000 | 37.5% | Further diluted |
| Founding Member | 3,000,000 | 18.75% | Further diluted |
| Option Pool (expanded) | 2,000,000 | 12.5% | Increased for hiring |
| Seed Investors | 2,500,000 | 15.6% | Diluted |
| Series A Investors | 2,500,000 | 15.6% | New (20% of pre-money) |
| **Total** | **16,000,000** | **100%** | |

**Key observation:** Founder went from 60% → 48% → 37.5% through dilution, but company value increased from $0 → $2.5M → $16M (their stake grew in absolute value).

## Best Practices for Startups

### At Formation

1. **Use a legal entity:** Incorporate as C-Corp (Delaware) or LLC
2. **Get 83(b) election:** File within 30 days of receiving stock (avoids taxes on vesting)
3. **Sign founder agreements:** Include vesting, IP assignment, non-competes
4. **Create option pool:** Reserve 10-20% for future hires
5. **Document everything:** Board resolutions, stock purchase agreements

### Managing the Cap Table

1. **Use cap table software:** Carta, Pulley, or Captable.io (not spreadsheets)
2. **Update after every transaction:** Hires, option grants, funding rounds
3. **Run dilution scenarios:** Model future fundraising before taking investment
4. **Be transparent with employees:** Show option value and explain dilution
5. **Plan for exits:** Understand liquidation preferences and payout waterfalls

### Red Flags for Investors

Investors will reject companies with:

- Dead equity (departed founders with large ownership)
- No vesting on founder shares
- Unreasonable equity promises to advisors (>1% total)
- Messy cap tables (dozens of small investors)
- Unclear ownership (missing documentation)
- Excessive dilution (founders own less than 50% pre-Series A)

## Special Considerations

### Solo Founder → Founding Member Joins Later

**Timing matters:**

- 0-3 months: 30-40% equity reasonable
- 3-6 months: 20-30% equity
- 6-12 months: 10-20% equity
- 12+ months: Should be employee (options, not equity)

**Adjustment factors:**

- Product progress (MVP vs. idea stage)
- Revenue traction
- Capital raised
- Critical skill gaps being filled

### Advisor Equity

- **Standard:** 0.1-0.5% with 2-year vesting
- **Strategic advisors:** Up to 1% if exceptional value (fundraising intro, industry access)
- **Rule:** Total advisor equity should not exceed 2-3%

### Employee Option Pools

**Typical allocation by role:**

- First engineer: 0.5-2%
- VP-level hire: 0.5-1.5%
- Director-level: 0.25-0.75%
- Senior IC: 0.1-0.5%
- Mid-level: 0.05-0.2%

**Pool size by stage:**

- Pre-seed: 10-15%
- Seed: 15-20%
- Series A: 10-15% (replenished)

## Tax Considerations

### 83(b) Election

**What:** IRS form declaring you'll pay taxes on equity at grant (not vesting)

**Why it matters:**

- Without 83(b): Pay income tax as shares vest (could be high if company valued up)
- With 83(b): Pay tax on current (low) value, future gains are capital gains

**Deadline:** 30 days from receiving restricted stock (miss it = can't file)

**Example:**

```bash
Founding member gets 30% equity (3M shares) at formation.
Current 409A valuation: $0.01/share
4-year vesting schedule

Without 83(b):
- Year 1: 750k shares vest at $0.50/share = $375k taxable income (ordinary tax rate ~35%)
- Year 4: If shares now $2/share = $1.5M income (owes ~$525k in taxes)

With 83(b):
- Day 1: Pay tax on 3M shares × $0.01 = $30k value (owes ~$10.5k)
- All future vesting is tax-free (already paid)
- Exit: Pay capital gains (15-20%) instead of ordinary income (35-37%)
```

**Critical:** Consult a startup lawyer/accountant before filing.

## Resources and Tools

### Cap Table Management

- **Carta:** Industry standard, expensive (~$2k+/year)
- **Pulley:** Modern alternative, cheaper (~$1k/year)
- **Captable.io:** Open-source option
- **AngelList:** Free for early stage

### Legal

- **Clerky:** Automated incorporation and equity docs ($500-2k)
- **Stripe Atlas:** Incorporation + legal templates ($500)
- **Orrick, WSGR, Cooley:** Top startup law firms (expensive but worth it for complex situations)

### Modeling

- **Slidebean Cap Table Template:** Free Google Sheets
- **Founders Pie Calculator:** fairhq.com (split calculator)
- **Ledgy:** European cap table software

## Example: 60/40 Split Scenario

**Context:**

- Founder A: Had the idea, built MVP, quit job, invested $50k
- Founding Member B: Joined at 3 months, critical technical skills, took 50% pay cut

**Equity structure:**

```bash
Founder A: 60% (6M shares)
Founding Member B: 40% (4M shares)
Both have 4-year vesting with 1-year cliff

Option pool: Reserved 2M shares (16.7% of fully diluted)

Founder Agreement terms:
- A is CEO, B is CTO
- Board: 2 seats (1 each) + 1 investor seat after funding
- Major decisions require unanimous consent until Series A
- IP assignment clause (all work product owned by company)
- Non-compete for 12 months post-departure
```

**Vesting details:**

```bash
A's vesting:
- Cliff (12 months): 1.5M shares
- Monthly thereafter: 125k shares/month
- Double-trigger acceleration: 50% on acquisition + termination

B's vesting:
- Cliff (12 months): 1M shares
- Monthly thereafter: 83.3k shares/month
- Double-trigger acceleration: 50% on acquisition + termination
```

**What happens if B leaves at 18 months?**

```bash
B's vested shares:
- Cliff: 1M shares (25%)
- Additional 6 months: 6 × 83.3k = 500k shares
- Total vested: 1.5M shares (37.5% of original 4M)
- Unvested: 2.5M shares returned to company

Company can:
- Use returned shares for new CTO hire
- Add to option pool
- Redistribute to remaining founder
```

## Conclusion

Cap table management is critical from day one. Poor equity decisions made early can:

- Prevent future fundraising
- Create founder conflicts
- Make hiring impossible
- Reduce exit value

**Golden rules:**

1. Always use vesting (4-year with 1-year cliff minimum)
2. Be honest about relative contributions
3. Reserve 10-20% for option pool
4. Document everything legally
5. File 83(b) elections within 30 days
6. Use cap table software (not spreadsheets)
7. Get legal advice before making major equity decisions

**For 1 founder + 1 founding member specifically:**

- 60/40 or 70/30 splits are most common (founder gets larger share)
- Justify split based on risk, capital, idea origination, and future contribution
- Use vesting to protect both parties
- Revisit and adjust if circumstances change dramatically (with proper legal process)

Equity is the most valuable asset a startup has—allocate it carefully.
