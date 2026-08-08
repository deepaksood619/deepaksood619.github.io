---
slug: /economics/investment-products/debt-funds/international-debt-etfs-ibkr
title: International Debt ETFs (IBKR + UCITS)
description: Global bond ETFs tradeable via Interactive Brokers - US-domiciled vs UCITS (Ireland) versions - short-term cash/treasury funds vs long-duration, high-yield, and EM debt, with historical returns, pros and cons.
created: 2026-08-09
updated: 2026-08-09
---

International debt (bond) ETFs let you hold US Treasuries, investment-grade corporates, high yield, or emerging-market debt in a single ticker via [Interactive Brokers (IBKR)](economics/learning-resources/interactive-brokers-ibkr.md). As with [international equity ETFs](economics/investment-products/equity-funds/international-etfs.md), each fund exists in two flavours: a **US-domiciled** version (NYSE/NASDAQ) and a **UCITS (Ireland-domiciled)** version tradeable on LSE/XETRA/SIX. Which one you should buy depends mainly on your tax residency, not on yield.

## US-Domiciled vs UCITS: Which to Buy

- **US-domiciled bond ETFs** (AGG, TLT, HYG, EMB, etc.) are simplest for US persons. For non-US persons (e.g. Indian residents investing via IBKR), they are **US-situs assets** and exposed to US estate tax on death (up to 40% above the $60,000 NRA exemption) — see [US Estate Tax Avoidance for Non-Resident Aliens](economics/taxation/us-estate-tax-avoidance-nra.md).
- **UCITS bond ETFs** (Ireland-domiciled, e.g. `IB01`, `AGGU`, `LQDA`) avoid US estate tax exposure and, being domiciled in Ireland, benefit from favourable US-Ireland withholding tax treaty rates on underlying income.
- **Always buy the Accumulating ("Acc") share class** where available. Distributing ("Dist") share classes pay out coupon income as cash, which is typically taxed annually as income in India; Acc classes reinvest internally, deferring tax until you sell (as capital gains) — the same logic as buying `VWRA` (Acc) over `VWRP`.
- On IBKR, search the ticker, then explicitly select the correct **exchange** (LSE for USD-denominated UCITS lines) and confirm the **currency** shown is USD, not GBP/EUR — several UCITS funds cross-list the same fund in multiple currencies on different exchanges.

**Data note:** US-domiciled return figures below are annualized (CAGR) total returns from stockanalysis.com/ssga.com. UCITS return figures are **cumulative** (not annualized) total returns from justETF — the two sets are not directly comparable. Figures marked `*` come from secondary sources that could not be cross-verified against a primary issuer factsheet (ishares.com, morningstar.com, etf.com all blocked automated fetches as of Aug 2026) and should be treated as directional. Data as of August 2026.

## Short-Term / Cash Management (Low Duration)

Near-zero interest-rate risk, close substitute for a money-market fund or FD while sitting in USD. Best for parking cash short-term or as a low-volatility bond sleeve.

**US-domiciled:**

| Ticker | Name | Exchange | TER | AUM | Dist. | 1Y | 3Y (ann.) | 5Y (ann.) | SEC Yield | Inception |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BIL | SPDR Bloomberg 1-3 Month T-Bill | NYSE Arca | 0.14% | $46.6B | Monthly | 3.83% | 4.59% | 3.46% | 3.55% | May 2007 |
| SGOV | iShares 0-3 Month Treasury Bond | NYSE Arca | 0.09% | ~$90B | Monthly | 3.87% | 4.65% | 3.66% | 3.54% | May 2020 |
| SHV | iShares Short Treasury Bond (0-1yr) | NYSE Arca | 0.15% | ~$20.6B | Monthly | 3.80% | ~4.7%\* | ~3.2%\* | 3.51% | Jan 2007 |
| ICSH | iShares Ultra Short Duration Bond (active, IG) | NASDAQ | 0.08% | ~$8.0B | Monthly | 4.07% | ~5.0%\* | ~3.7%\* | ~4.1%\* | Dec 2013 |
| VGSH | Vanguard Short-Term Treasury (1-3yr) | NASDAQ | 0.03% | ~$28B | Monthly | ~3.0%\* | ~4.4%\* | ~4.3%\* | 3.54% | Nov 2009 |
| SHY | iShares 1-3 Year Treasury Bond | NASDAQ | 0.15% | ~$25B | Monthly | 2.72% | n/a | n/a | 4.12% | Jul 2002 |

**UCITS (Ireland, USD):**

| Ticker   | Name (Acc/Dist)                                         | ISIN         | Exchanges        | TER   | AUM    | 1Y     | 3Y (cum.) | 5Y (cum.) | Inception |
| -------- | ------------------------------------------------------- | ------------ | ---------------- | ----- | ------ | ------ | --------- | --------- | --------- |
| **IB01** | iShares $ Treasury Bond 0-1yr UCITS ETF (Acc)           | IE00BGSF1X88 | LSE, SIX, gettex | 0.07% | €16.7B | +4.70% | +9.00%    | +21.52%   | Feb 2019  |
| XT01     | Xtrackers US Treasuries Ultrashort Bond UCITS ETF (Acc) | IE00BM97MR69 | XETRA, LSE, SIX  | 0.06% | €190M  | +4.56% | +8.78%    | +21.20%   | Sep 2020  |
| ERNA     | iShares $ Ultrashort Bond UCITS ETF (Acc)               | IE00BGCSB447 | LSE, gettex      | 0.09% | €1.75B | +4.91% | +10.34%   | +23.88%   | Jul 2018  |
| ERNU     | iShares $ Ultrashort Bond UCITS ETF (Dist)              | IE00BCRY6227 | XETRA, LSE, SIX  | 0.09% | €551M  | +4.83% | +10.09%   | +23.58%   | Oct 2013  |
| XFFE     | Xtrackers II USD Overnight Rate Swap UCITS ETF (Acc)    | LU0321465469 | XETRA, LSE       | 0.10% | €306M  | +4.59% | +8.86%    | +22.25%   | Oct 2007  |

**Pros:** Capital stability, monthly/quarterly income, easy USD cash-equivalent, minimal duration risk.
**Cons:** Returns roughly track short-term rates only — no capital-appreciation upside if rates fall; real (inflation-adjusted) return can turn negative when rates are cut.

## Long-Term / Core Aggregate Bond

Higher duration (5-20+ years) means bigger price swings from interest-rate moves — attractive if you expect rate cuts (bond prices rise), risky if rates rise further. Core aggregate funds (AGG/BND/AGGU) blend Treasuries + IG corporates; pure Treasury long-duration funds (TLT/DTLA) are a more direct rate bet.

**US-domiciled:**

| Ticker | Name | Exchange | TER | AUM | 1Y | 3Y (ann.) | 5Y (ann.) | TTM Div Yield | Inception |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGG | iShares Core US Aggregate Bond | NYSE Arca | 0.03% | $137.7B | 2.36%\* | ~3.1%\* | ~0.0%\* | 4.04% | Sep 2003 |
| BND | Vanguard Total Bond Market | NASDAQ | 0.03% | $161.4B | 2.32% | n/a | n/a | 4.03% | Apr 2007 |
| IEF | iShares 7-10yr Treasury | NASDAQ | 0.15% | $47.3B | 1.21% | ~2.6%\* | ~-1.5%\* | 3.95% | Jul 2002 |
| TLT | iShares 20+yr Treasury | NASDAQ | 0.15% | $41.6B | -1.45% | ~-2.8%\* | ~-6.1%\* | 4.72% | Jul 2002 |
| VGLT | Vanguard Long-Term Treasury | NASDAQ | 0.03% | $10.4B | -0.68% | n/a | n/a | 4.75% | Nov 2009 |

**UCITS (Ireland, USD unless noted):**

| Ticker      | Name (Acc/Dist)                                           | ISIN         | Exchanges                                  | TER   | AUM    | 1Y     | 3Y (cum.) | 5Y (cum.) | Inception |
| ----------- | --------------------------------------------------------- | ------------ | ------------------------------------------ | ----- | ------ | ------ | --------- | --------- | --------- |
| **AGGU**    | iShares Core Global Agg Bond USD Hedged UCITS ETF (Acc)   | IE00BZ043R46 | LSE, SIX, gettex                           | 0.10% | €3.55B | +2.85% | +8.14%    | +3.91%    | Nov 2017  |
| AGGG        | iShares Core Global Agg Bond USD UCITS ETF (Dist)         | IE00B3F81409 | LSE, SIX, XETRA                            | 0.10% | €2.29B | +1.68% | +5.26%    | -6.23%    | Nov 2017  |
| VAGU        | Vanguard Global Aggregate Bond USD Hedged UCITS ETF (Acc) | IE00BG47KJ78 | LSE                                        | 0.08% | €601M  | +2.64% | +7.81%    | +1.88%    | Jun 2019  |
| VAGF        | Vanguard Global Aggregate Bond EUR Hedged UCITS ETF (Acc) | IE00BG47KH54 | XETRA, Borsa Italiana, gettex              | 0.08% | €2.25B | +0.13% | +6.94%    | -9.34%    | Jun 2019  |
| DTLA        | iShares $ Treasury Bond 20+yr UCITS ETF (Acc)             | IE00BFM6TC58 | LSE, gettex                                | 0.07% | €2.42B | -0.51% | -6.30%    | -31.75%   | May 2018  |
| IDTL        | iShares USD Treasury Bond 20+yr UCITS ETF (Dist)          | IE00BSKRJZ44 | LSE, SIX, XETRA, gettex                    | 0.07% | €809M  | -0.58% | -6.28%    | -31.81%   | Jan 2015  |
| LQDA        | iShares $ Corp Bond UCITS ETF (Acc)                       | IE00BYXYYJ35 | LSE, SIX, gettex                           | 0.20% | €3.99B | +2.27% | +9.53%    | -1.82%    | Apr 2017  |
| LQDE / IBCD | iShares USD Corp Bond UCITS ETF (Dist)                    | IE0032895942 | XETRA, LSE, SIX, Borsa Italiana, Stuttgart | 0.20% | €3.09B | +2.21% | +9.48%    | -1.78%    | May 2003  |

Note: `LQDA`'s distributing sibling is often mis-referenced online as "CORP" — the correct tickers are `LQDE`/`IBCD`/`LQDS` depending on exchange.

**Pros:** Diversification, monthly/semi-annual income, low cost (TER as low as 0.03-0.10%), liquid capital gains if rates fall.
**Cons:** The 5-year cumulative return on 20+yr Treasury funds (DTLA, TLT) is deeply negative (-6% to -32%) due to the 2022-2023 rate-hike cycle — long-duration bonds can lose more than equities in a rate shock; core aggregate funds (AGG/AGGU) are less volatile but still duration-sensitive.

## High Yield & Emerging Market Debt (Higher Return, Higher Risk)

Highest income and best historical total returns among bond ETFs, but with equity-like credit and (for local-currency EM debt) currency risk. Best used as a smaller, higher-conviction sleeve rather than a core holding.

**US-domiciled:**

| Ticker | Name | Exchange | TER | AUM | 1Y | 3Y (ann.) | 5Y (ann.) | Yield | Inception |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HYG | iShares iBoxx $ High Yield Corp Bond | NYSE Arca | 0.49% | $17.4B | 5.11% | 8.11% | 3.70% | 6.47% | Apr 2007 |
| JNK | SPDR Bloomberg High Yield Bond | NYSE Arca | 0.40% | $7.3B | 5.99% | 8.56% | 3.59% | 6.79% | Nov 2007 |
| EMB | iShares JPM USD EM Bond | NASDAQ | 0.39% | $14.7B | ~7.5-8.1%\* | 8.52% | 2.25% | 4.98% | Dec 2007 |
| EMLC | VanEck JPM EM Local Currency Bond | NYSE Arca | 0.30% | $4.8B | 8.85% | 6.4% | 2.3% | ~6.0%\* | Jul 2010 |

**UCITS (Ireland, USD):**

| Ticker   | Name (Acc/Dist)                                 | ISIN         | Exchanges                                  | TER   | AUM    | 1Y     | 3Y (cum.) | 5Y (cum.) | Inception |
| -------- | ----------------------------------------------- | ------------ | ------------------------------------------ | ----- | ------ | ------ | --------- | --------- | --------- |
| **IHYU** | iShares $ High Yield Corp Bond UCITS ETF (Dist) | IE00B4PY7Y77 | LSE, SIX, XETRA, Stuttgart, Borsa Italiana | 0.50% | €2.19B | +6.64% | +20.26%   | +24.05%   | Sep 2011  |
| IEMB     | iShares JPM $ EM Bond UCITS ETF (Dist)          | IE00B2NPKV68 | LSE, XETRA, Stuttgart, Borsa Italiana      | 0.45% | €3.67B | +8.26% | +23.71%   | +11.51%   | Feb 2008  |
| JPEA     | iShares JPM $ EM Bond UCITS ETF (Acc)           | IE00BYXYYK40 | LSE, XETRA, SIX, gettex                    | 0.45% | €2.04B | +8.37% | +23.64%   | +11.55%   | Apr 2017  |

**Pros:** Meaningfully higher yield/return than Treasuries or core aggregate (IHYU's 5-year cumulative return of +24% beats every other bond category here); EM debt adds geographic diversification away from US/developed-market rates.
**Cons:** Credit risk (defaults rise in recessions, correlating with equity drawdowns — reduces the "safety" role bonds are usually meant to play); EM local-currency debt (EMLC) carries additional FX risk; higher TER (0.30-0.50% vs 0.03-0.15% for Treasuries).

## International / Global Aggregate (ex-US)

For diversifying away from a purely US bond portfolio without taking on UCITS-specific structuring.

| Ticker | Name | Domicile | Exchange | TER | AUM | 1Y | 3Y | 5Y | Yield | Inception |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BNDX | Vanguard Total International Bond (USD-hedged) | US | NASDAQ | 0.07% | $83.0B | 1.45% | ~3.8%\* (ann.) | ~0.3%\* (ann.) | 4.54% | Jun 2013 |
| IAGG | iShares Core International Aggregate Bond (hedged) | US | Cboe BZX | 0.07% | $11.4B | 2.14% | ~4.7%\* (ann.) | ~1.2%\* (ann.) | ~4.5%\* | Nov 2015 |

For a UCITS-domiciled equivalent, use `AGGU`/`AGGG` (global aggregate, above) rather than a US ex-domestic-only fund.

## General Pros & Cons vs Direct Bonds / FDs

**Pros of bond ETFs:**

- Instant diversification across hundreds/thousands of issuers in one trade
- Daily liquidity — sell any trading day, unlike locked-in FDs or individual bonds held to maturity
- Low cost (many core Treasury/aggregate funds charge 0.03-0.15% TER)
- No minimum investment beyond one share's price

**Cons of bond ETFs:**

- Unlike a single bond held to maturity, an ETF never "matures" — you are marked to market on NAV, so a rate spike can produce a capital loss that a held-to-maturity direct bond wouldn't show
- No guaranteed return of principal on any fixed date
- FX risk on the INR/USD leg for Indian investors, on top of underlying bond risk
- Acc UCITS share classes are simplest for tax deferral, but government-scheme alternatives (EPF/PPF for INR debt — see [Fixed Income Instruments](economics/investment-products/debt-funds/fixed-income-instruments.md)) may still beat international bond ETFs on a risk-adjusted, post-tax basis for INR-denominated goals.

## Links

- [Interactive Brokers (IBKR)](economics/learning-resources/interactive-brokers-ibkr.md)
- [International ETFs (Equity)](economics/investment-products/equity-funds/international-etfs.md)
- [US Estate Tax Avoidance for Non-Resident Aliens](economics/taxation/us-estate-tax-avoidance-nra.md)
- [Fixed Income Instruments](economics/investment-products/debt-funds/fixed-income-instruments.md)
- [Debt Mutual Funds Overview](economics/investment-products/debt-funds/debt-mutual-funds-overview.md)
- [justETF - UCITS ETF screener](https://www.justetf.com/en/find-etf.html)
- [Stock Analysis - ETF Screener](https://stockanalysis.com/etf/screener/)
