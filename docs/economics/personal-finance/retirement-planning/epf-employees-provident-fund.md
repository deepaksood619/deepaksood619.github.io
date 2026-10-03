---
slug: /epf-employees-provident-fund
title: EPF - Employees' Provident Fund
description: How EPF splits into employee, employer, and pension shares, taxation of contributions above Rs 2.5 lakh, withdrawal rules, and inter-employer transfer rules in India.
created: 2026-09-30
updated: 2026-09-30
---

Employees' Provident Fund (EPF) is India's mandatory retirement savings scheme for salaried employees, administered by the EPFO (Employees' Provident Fund Organisation) under a single UAN (Universal Account Number) per person, with separate Member IDs per employer.

## The Three Components

Every month's contribution splits into three separate buckets, each with different rules:

- **Employee Share (12%):** Deducted from the employee's own salary (EPF wage). Earns annual interest, fully belongs to the employee, withdrawable under qualifying conditions.
- **Pension Share (8.33%, EPS):** Carved out of the employer's matching 12%, calculated on a wage capped at Rs 15,000/month (so max Rs 1,250/month regardless of actual salary). Does **not** earn interest. Pools into the Employees' Pension Scheme (EPS) for a fixed monthly pension after age 58 (10+ years eligible service).
- **Employer Share (3.67% + surplus):** The remainder of the employer's 12% match after the pension carve-out. Earns interest like the employee share and builds the core retirement corpus.

## Taxation of Contributions (Rule 9D)

- Under Income Tax Rule 9D, EPFO splits an individual's PF into a "Non-Taxable Account" and a "Taxable Account".
- The employee's **own contribution** is tax-free (interest-wise) only up to **Rs 2.5 Lakh/year**; contributions above that go into the taxable bucket.
- The **interest earned** on the excess (not the principal) is taxed as "Income from Other Sources" at the individual's slab rate.
- EPFO auto-deducts **10% TDS** (Section 194A) on this taxable interest if PAN is linked (20% if not linked) — visible in Form 26AS/AIS.
- The Rs 2.5 Lakh limit applies strictly to the **employee's** 12% share; employer contributions don't count toward it.

## The Rs 7.5 Lakh Combined Employer Cap (Section 17(2)(vii))

If an employer's **combined** contributions to EPF + NPS (Section 80CCD(2)) + approved superannuation funds exceed **Rs 7.5 Lakh/year** in aggregate, the excess is added back as a taxable perquisite, and any interest/returns earned on that excess (Rule 3B) is also taxed every year until withdrawal. This cap governs how much headroom is left for employer NPS contributions once EPF is accounted for — see [NPS](economics/personal-finance/retirement-planning/nps-national-pension-scheme.md) for the Section 80CCD(2) mechanics and how to size Corporate NPS contributions against this ceiling.

## Withdrawal Rules

### Full EPF Withdrawal (Employee + Employer Shares) — Form 19

- **Retirement:** Full withdrawal at age 58; up to 90% allowed after age 54.
- **Unemployment:** 75% after 1 month of unemployment, remaining 25% after 2 months.

### Partial Advances (While Employed) — Form 31

| Purpose | Maximum Limit | Minimum Service |
|---|---|---|
| Medical Emergency | Lower of 6 months' basic+DA, or employee share + interest | None |
| Marriage (self/children/siblings) | Up to 50% of employee share + interest | 7 years |
| Higher Education (self/children) | Up to 50% of employee share + interest | 7 years |
| Home Purchase/Construction | Up to 90% of total balance | 5 years |
| Home Loan Repayment | Up to 90% of total balance | 3-10 years |

### EPS Pension Withdrawal

- `<6` months service: cannot withdraw at all.
- 6 months–10 years: lump-sum withdrawal via **Form 10C** (post-unemployment waiting period extended to 36 months in recent EPFO rule changes).
- 10+ years: **locked in** — cannot take a lump sum; entitled to a lifelong monthly pension from age 58 (or reduced early pension from age 50), initiated via **Form 10D**.

### The 5-Year Tax-Free Rule

- Withdrawal after **5 years of continuous service** (including across employers, if accounts were transferred) is 100% tax-free.
- Withdrawal before 5 years, if over Rs 50,000, is fully taxable with automatic 10% TDS (waivable via Form 15G/15H if income is below the taxable threshold).

## Multiple Employers / Job Switches

- A single UAN must be used across all jobs; each employer creates a separate Member ID under it. Holding two active UANs is not allowed.
- **Concurrent employment:** EPFO permits simultaneous contributions from two employers under one UAN, but this creates a visible overlapping-employment record — a common way "moonlighting" is detected by background-verification checks, and may breach non-compete/exclusivity clauses in an employment contract.
- **Why transfer old accounts to the current one instead of leaving them fragmented:**
  - Continuous service (for the 5-year tax-free rule and the 10-year pension eligibility) is only recognized across employers if accounts are **transferred**, not just linked by UAN.
  - Partial advances can only be drawn from the currently active account.
  - Since April 2024, EPFO runs a **background auto-transfer**: when a new employer's first contribution is credited, prior-employer balances often auto-transfer if KYC (Aadhaar/PAN/bank) is fully verified and the old employer recorded a Date of Exit. A "Transfer-In" entry in the current passbook confirms this happened.
  - If auto-transfer didn't fire, manual transfer is done via the EPFO Unified Member Portal → Online Services → "One Member - One EPF Account (Transfer Request)", attested by either the old or new employer (current employer is usually faster).
  - A Member ID must have a recorded **Date of Exit** before it can be transferred out; this can be self-marked via Manage → Mark Exit once 2 months have passed since the last working day and the final contribution is deposited, if the employer hasn't already recorded it. The standard exit reason for a job change (not retirement/disablement) is **"Cessation (Short Service) - Any other reason"**.
  - An account showing "Transfer not allowed. PF amount is not available and Pension Service benefit is taken" simply means that account already has a Rs 0 balance — it was already merged into a later account in the chain and needs no further action.

## Related Topics

- [NPS - National Pension Scheme](economics/personal-finance/retirement-planning/nps-national-pension-scheme.md)
- [Tax Deductions](economics/taxation/deductions.md)
- [Tax-Efficient Investing](economics/taxation/tax-efficient-investing.md)