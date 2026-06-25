---
slug: /research-frameworks/business-models/saas-unit-economics
title: SaaS Unit Economics Template
description: Framework for calculating SaaS unit economics including CAC, LTV, churn, payback period, and profitability metrics
created: 2026-06-26
updated: 2026-06-26
---

## Key Metrics

### Customer Acquisition Cost (CAC)

**Formula:** Total Sales & Marketing Spend / New Customers Acquired

**Example calculation:**

```text
Monthly marketing: $5,000
New customers: 50
CAC = $5,000 / 50 = $100
```

**Benchmarks by channel:**

- Organic (SEO, content): $50-200
- Paid ads (Google, Facebook): $100-500
- Sales-led: $500-5,000+
- Viral/referral: $10-50

**What's good:** CAC < 1/3 of LTV (Rule of thumb: LTV:CAC ratio of 3:1 or higher)

---

### Lifetime Value (LTV)

**Formula:** ARPU × Gross Margin % / Churn Rate

**Example calculation:**

```text
ARPU (Average Revenue Per User): $20/month
Gross Margin: 80%
Monthly Churn: 5%

LTV = ($20 × 0.80) / 0.05 = $320
```

**Alternative (simple):** ARPU × Average Customer Lifespan

```text
ARPU: $20/month
Average lifespan: 16 months (1 / 0.05 monthly churn)
LTV = $20 × 16 = $320
```

**Benchmarks:**

- B2C SaaS: $100-500
- SMB SaaS: $500-5,000
- Enterprise SaaS: $10,000-100,000+

---

### Churn Rate

**Monthly Churn Formula:** Customers Lost This Month / Customers at Start of Month

**Example:**

```text
Start of month: 100 customers
Lost: 5 customers
Monthly churn = 5 / 100 = 5%
```

**Annual churn:** 1 - (1 - Monthly Churn)^12

```text
Monthly churn: 5%
Annual churn = 1 - (0.95)^12 = 46%
```

**Benchmarks:**

- Excellent: `<3%` monthly (`<30%` annual)
- Good: 3-5% monthly (30-46% annual)
- Average: 5-7% monthly (46-58% annual)
- Poor: `>7%` monthly (`>58%` annual)

**Churn causes:**

- Bad onboarding (30-40% churn in first 90 days)
- Lack of value delivery
- Poor product-market fit
- Price sensitivity
- Competitor switches

---

### Payback Period

**Formula:** CAC / (ARPU × Gross Margin %)

**Example:**

```text
CAC: $100
ARPU: $20/month
Gross Margin: 80%

Payback = $100 / ($20 × 0.80) = 6.25 months
```

**Benchmarks:**

- Excellent: `<6` months
- Good: 6-12 months
- Acceptable: 12-18 months
- Poor: `>18` months

**Why it matters:** Cash flow - Shorter payback = faster reinvestment in growth

---

### Monthly Recurring Revenue (MRR)

**Formula:** Total Paying Customers × ARPU

**Example:**

```text
Customers: 500
ARPU: $20
MRR = 500 × $20 = $10,000
```

**MRR Growth Rate:** (This Month MRR - Last Month MRR) / Last Month MRR

```text
Last month: $10,000
This month: $11,000
Growth = ($11,000 - $10,000) / $10,000 = 10%
```

**Components:**

- New MRR (new customers)
- Expansion MRR (upgrades)
- Contraction MRR (downgrades)
- Churned MRR (cancellations)

---

### Annual Recurring Revenue (ARR)

**Formula:** MRR × 12

**Example:**

```text
MRR: $10,000
ARR = $10,000 × 12 = $120,000
```

**Valuation multiples (rough):**

- Early stage ($0-1M ARR): 5-10x ARR
- Growth stage ($1-10M ARR): 10-20x ARR
- Late stage ($10M+ ARR): 5-15x ARR (depends on growth rate)

---

### Gross Margin

**Formula:** (Revenue - Cost of Goods Sold) / Revenue

**For SaaS:**

```text
Revenue: $20,000/month
COGS (hosting, support, payment fees): $4,000/month
Gross Margin = ($20,000 - $4,000) / $20,000 = 80%
```

**SaaS COGS typically includes:**

- Cloud hosting (AWS, GCP, Azure)
- Payment processing fees (2-3%)
- Customer support labor
- Data storage
- Third-party API costs

**Benchmarks:**

- Excellent: 80-90%
- Good: 70-80%
- Average: 60-70%
- Poor: `<60%`

---

## Complete Unit Economics Example

**Example SaaS Product: API Testing Tool**

**Pricing:** $15/month

**Metrics:**

- ARPU: $15/month
- Monthly Churn: 4%
- CAC (organic): $75
- Gross Margin: 85%

**Calculations:**

1. **LTV:**

```text
LTV = ($15 × 0.85) / 0.04 = $318.75
```

2. **LTV:CAC Ratio:**

```text
$318.75 / $75 = 4.25:1 (Excellent! >3:1)
```

3. **Payback Period:**

```text
$75 / ($15 × 0.85) = 5.9 months (Excellent! <6 months)
```

4. **Average Customer Lifespan:**

```text
1 / 0.04 = 25 months
```

5. **Monthly MRR (with 500 customers):**

```text
500 × $15 = $7,500
```

6. **Annual ARR:**

```text
$7,500 × 12 = $90,000
```

**Assessment:** Healthy unit economics. LTV:CAC ratio of 4.25:1 and payback period of 6 months indicates sustainable growth potential.

---

## Growth Scenarios

### Scenario 1: Bootstrapped Growth (Conservative)

**Assumptions:**

- Start: $0 ARR
- Monthly growth: 10% (organic)
- CAC: $50 (SEO, content)
- Churn: 4%

**Year 1:** $10K → $120K ARR
**Year 2:** $120K → $400K ARR
**Year 3:** $400K → $1M ARR

---

### Scenario 2: Funded Growth (Aggressive)

**Assumptions:**

- Start: $0 ARR
- Monthly growth: 20% (paid ads)
- CAC: $150 (paid + sales)
- Churn: 5%

**Year 1:** $10K → $300K ARR
**Year 2:** $300K → $2M ARR
**Year 3:** $2M → $10M ARR

**Burn rate:** Higher CAC, lower profitability, faster growth

---

## Red Flags

**Unsustainable economics:**

- LTV:CAC `<2:1` (burning money on acquisition)
- Payback period `>18` months (cash flow problem)
- Churn `>7%` monthly (product-market fit issue)
- Gross margin `<60%` (cost structure problem)
- Negative cohort economics (later cohorts worse than earlier)

**Warning signs:**

- Growing ARR but shrinking margin
- Decreasing ARPU over time
- Increasing churn over time
- CAC increasing faster than LTV

---

## Optimization Levers

### Increase LTV

1. **Reduce churn:**
   - Better onboarding
   - Proactive customer success
   - Usage monitoring (prevent silent churn)

2. **Increase ARPU:**
   - Upsells (higher tiers)
   - Cross-sells (add-ons)
   - Annual plans (pay upfront discount)

3. **Expand accounts:**
   - Per-seat pricing (team growth)
   - Usage-based pricing (customer grows, revenue grows)

### Decrease CAC

1. **Improve conversion:**
   - Better landing pages
   - Free trial optimization
   - Onboarding improvements

2. **Cheaper channels:**
   - Content marketing (SEO)
   - Referrals (viral loops)
   - Word-of-mouth (product-led growth)

3. **Increase efficiency:**
   - Marketing automation
   - Self-serve signup
   - Bottom-up adoption

---

## Tools & Resources

**Calculate metrics:**

- [SaaS Metrics Calculator](https://www.forentrepreneurs.com/saas-metrics-2/)
- [Baremetrics](https://baremetrics.com/)
- [ChartMogul](https://chartmogul.com/)

**Benchmarks:**

- [SaaS Capital Survey](https://www.saas-capital.com/)
- [OpenView SaaS Benchmarks](https://openviewpartners.com/benchmarks/)
- [KeyBanc SaaS Survey](https://www.keybanc.com/)

**Reading:**

- David Skok: [SaaS Metrics 2.0](https://www.forentrepreneurs.com/saas-metrics-2/)
- Christoph Janz: [Five Ways to Build a $100M Business](https://medium.com/point-nine-news/five-ways-to-build-a-100-million-business-c5066181bf50)
