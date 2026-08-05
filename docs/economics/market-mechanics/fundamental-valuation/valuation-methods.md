---
slug: /stock-valuation-methods-dcf-multiples-ddm-epv
title: Stock Valuation Methods
description: A reference guide to the core equity valuation methods - Discounted Cash Flow, Trading Multiples, Peter Lynch Fair Value, Earnings Power Value, Dividend Discount Model, and WACC.
created: 2026-08-05
updated: 2026-08-05
---
Different valuation methods estimate a stock's intrinsic (fair) value from different angles - future cash flows, peer comparisons, growth-adjusted earnings, or dividends. No single method is "correct"; analysts typically triangulate across 2-3 methods and use the overlap as a margin-of-safety range.

## Discounted Cash Flow (DCF)

Estimates intrinsic value as the sum of all future free cash flows (FCF), discounted back to present value using the [WACC](#weighted-average-cost-of-capital-wacc).

**Formula:**

```text
Intrinsic Value = Σ [FCFt / (1 + WACC)^t] + Terminal Value / (1 + WACC)^n
```

- **FCFt** = Free cash flow projected in year t (typically projected 5-10 years)
- **Terminal Value** = Value of all cash flows beyond the projection period, usually via the Gordon Growth formula: `TV = FCFn × (1 + g) / (WACC - g)`
- **g** = perpetual growth rate (usually capped near long-term GDP growth, 2-4%)

**Pros:**

- Grounded in fundamentals (actual cash generation), not market sentiment
- Works for any company with predictable cash flows, regardless of peer availability
- Forces explicit assumptions that can be stress-tested (growth, margins, discount rate)

**Cons:**

- Highly sensitive to terminal value and discount rate assumptions - small changes swing the output wildly
- Difficult for early-stage, cyclical, or negative-FCF businesses
- "Garbage in, garbage out" - only as good as the underlying growth/margin forecasts

## Trading Multiples (Comparable Company Analysis)

Values a company relative to peers using standardized ratios, on the assumption that similar businesses should trade at similar multiples of earnings, sales, or cash flow.

**Common multiples:** P/E, EV/EBITDA, P/S, P/B, EV/Sales - see [Valuation Metrics](economics/market-mechanics/fundamental-valuation/valuation-metrics.md) for detailed formulas and pros/cons of each ratio.

**Method:**

1. Identify a peer group of comparable companies (similar sector, growth profile, margin structure)
2. Calculate the peer group's median/average multiple (e.g., EV/EBITDA)
3. Apply that multiple to the target company's own metric to derive implied value

**Pros:**

- Fast, market-grounded (reflects what investors are actually paying today)
- Requires fewer speculative long-term assumptions than DCF
- Easy to communicate and benchmark

**Cons:**

- Circular risk: if the entire peer group is overvalued, the target looks "fairly valued" relative to an overvalued anchor
- Finding truly comparable peers (similar growth, margin, capital intensity) is often difficult
- Ignores company-specific catalysts or risks not reflected in the peer set

## Peter Lynch Fair Value

A quick heuristic (popularized by legendary Fidelity Magellan manager Peter Lynch) for growth stocks, comparing the P/E ratio to the earnings growth rate rather than to peers or cash flows.

**Formula:**

```text
Fair Value P/E = Earnings Growth Rate (+ Dividend Yield, for dividend payers)

PEG Ratio = P/E Ratio / Earnings Growth Rate
```

- **PEG ≈ 1:** Fairly valued
- **PEG `<` 1:** Potentially undervalued (P/E is cheap relative to growth)
- **PEG `>` 1:** Potentially overvalued (paying a premium for growth)

**Example:** A stock growing earnings at 20%/year with a P/E of 15 has a PEG of 0.75 - by Lynch's heuristic, undervalued relative to its growth rate.

**Pros:**

- Extremely fast, single-number gut-check for growth stocks
- Popularized and validated across decades of Lynch's own market-beating track record
- Complements (does not replace) deeper DCF/multiples analysis

**Cons:**

- Growth rate estimates are themselves uncertain and easy to manipulate/over-extrapolate
- Ignores capital structure, margins, and quality of earnings entirely
- Breaks down for low/no-growth or negative-earnings companies

## Earnings Power Value (EPV)

Developed by Bruce Greenwald (Columbia Business School), EPV values a company based purely on its **current, sustainable earning power** - assuming zero future growth. It deliberately strips out speculative growth assumptions that dominate DCF models.

**Formula:**

```text
EPV = Adjusted (Normalized) Earnings / Cost of Capital (WACC)
```

- **Adjusted Earnings** = Reported earnings normalized for one-off items, cyclicality, and excess/deficient depreciation vs. maintenance capex
- Comparing EPV to the DCF-derived "growth value" isolates how much of the current market price is being paid for growth versus existing earning power

**Pros:**

- Conservative - avoids the terminal-value guesswork that dominates DCF outputs
- Useful cross-check: if EPV `>` current market cap, the market may be undervaluing even the no-growth case
- Forces a clean separation between "value of assets in place" and "value of future growth"

**Cons:**

- Understates value for genuinely high-growth companies with real reinvestment opportunities
- Still requires judgment to normalize earnings correctly
- Less well-known/standardized than DCF or multiples, so harder to benchmark against published estimates

## Dividend Discount Model (DDM)

Values a stock as the present value of all expected future dividends. Best suited to stable, mature, dividend-paying companies (utilities, mature banks, consumer staples).

**Formula (Gordon Growth Model - constant dividend growth):**

```text
Intrinsic Value = D1 / (r - g)
```

- **D1** = Expected dividend per share next year
- **r** = Required rate of return (cost of equity)
- **g** = Constant expected dividend growth rate (must be `<` r for the formula to be valid)

**Multi-stage DDM** projects dividends explicitly for a high-growth period, then applies the Gordon Growth formula for the stable terminal period - similar in structure to a DCF's explicit-forecast-plus-terminal-value approach.

**Pros:**

- Directly ties value to actual cash returned to shareholders - no reliance on reinvestment or growth assumptions
- Simple and transparent for mature, predictable dividend payers

**Cons:**

- Useless for non-dividend-paying companies (most growth/tech stocks)
- Highly sensitive to the (r - g) spread - a small change in either input swings value significantly
- Ignores buybacks as an alternative form of shareholder return

## Weighted Average Cost of Capital (WACC)

Not a standalone valuation method, but the discount rate that DCF and EPV depend on - it represents a company's blended cost of financing (equity + debt), weighted by their proportion in the capital structure.

**Formula:**

```text
WACC = (E/V x Re) + (D/V x Rd x (1 - Tax Rate))
```

- **E** = Market value of equity; **D** = Market value of debt; **V** = E + D (total capital)
- **Re** = Cost of equity (commonly estimated via CAPM: `Re = Rf + Beta x (Market Risk Premium)`)
- **Rd** = Cost of debt (effective interest rate on the company's debt)
- **(1 - Tax Rate)** = Tax shield adjustment, since interest expense is tax-deductible while dividends are not

**Why it matters:** WACC is the hurdle rate a company's investments must clear to create shareholder value, and the discount rate used to bring future DCF/EPV cash flows to present value. A higher WACC (riskier business, more expensive capital) compresses intrinsic value estimates; a lower WACC inflates them - which is why DCF outputs are so sensitive to this single input.

## Choosing a Method by Company Type

| Company Type | Best-Fit Method(s) | Why |
|---------------|---------------------|-----|
| Mature, dividend-paying (utilities, staples) | Dividend Discount Model, Trading Multiples | Stable, predictable cash returns to shareholders |
| High-growth, reinvestment-heavy | DCF, Peter Lynch (PEG) | Growth is the dominant value driver; multiples/DDM understate it |
| Stable but low/no-growth ("cash cow") | Earnings Power Value, Trading Multiples | No growth premium to model; current earning power is the story |
| Cyclical (commodities, autos) | Trading Multiples (normalized), EPV | Single-year DCF projections are unreliable across the cycle |
| Loss-making / pre-profitability | Trading Multiples (P/S, EV/Sales) | No earnings or dividends to discount; relative sales multiples are the fallback |

## Links

- [Valuation Metrics](economics/market-mechanics/fundamental-valuation/valuation-metrics.md) - P/E, P/B, P/S, EV/EBITDA ratio details
- [Fundamental Analysis Framework](economics/market-mechanics/fundamental-valuation/fundamental-analysis-framework.md) - DCF primer and broader fundamental analysis chapters (Zerodha Varsity)
- [Investment Terms Glossary](economics/glossary/investment-terms.md) - NPV, IRR, discount rate, time value of money
- [Fundamental Checklist](economics/investment-frameworks/stock-selection/fundamental-checklist.md) - DCF margin-of-safety application in a full stock-selection checklist
- [DCF Primer - Zerodha Varsity](https://zerodha.com/varsity/chapter/dcf-primer/)
- [Graham Number - Wikipedia](https://en.wikipedia.org/wiki/Graham_number)
