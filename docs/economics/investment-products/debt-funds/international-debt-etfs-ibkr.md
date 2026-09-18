---
slug: /economics/investment-products/debt-funds/international-debt-etfs-ibkr
title: International Debt ETFs (IBKR + UCITS)
description: Global bond ETFs tradeable via Interactive Brokers - US-domiciled vs UCITS (Ireland) versions - short-term cash/treasury funds vs long-duration, high-yield, and EM debt, with historical returns, pros and cons.
created: 2026-08-09
updated: 2026-09-01
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

| Ticker | Name                                           | Exchange  | TER   | AUM     | Dist.   | 1Y      | 3Y (ann.) | 5Y (ann.) | SEC Yield | Inception |
| ------ | ---------------------------------------------- | --------- | ----- | ------- | ------- | ------- | --------- | --------- | --------- | --------- |
| BIL    | SPDR Bloomberg 1-3 Month T-Bill                | NYSE Arca | 0.14% | $46.6B  | Monthly | 3.83%   | 4.59%     | 3.46%     | 3.55%     | May 2007  |
| SGOV   | iShares 0-3 Month Treasury Bond                | NYSE Arca | 0.09% | ~$90B   | Monthly | 3.87%   | 4.65%     | 3.66%     | 3.54%     | May 2020  |
| SHV    | iShares Short Treasury Bond (0-1yr)            | NYSE Arca | 0.15% | ~$20.6B | Monthly | 3.80%   | ~4.7%\*   | ~3.2%\*   | 3.51%     | Jan 2007  |
| ICSH   | iShares Ultra Short Duration Bond (active, IG) | NASDAQ    | 0.08% | ~$8.0B  | Monthly | 4.07%   | ~5.0%\*   | ~3.7%\*   | ~4.1%\*   | Dec 2013  |
| VGSH   | Vanguard Short-Term Treasury (1-3yr)           | NASDAQ    | 0.03% | ~$28B   | Monthly | ~3.0%\* | ~4.4%\*   | ~4.3%\*   | 3.54%     | Nov 2009  |
| SHY    | iShares 1-3 Year Treasury Bond                 | NASDAQ    | 0.15% | ~$25B   | Monthly | 2.72%   | n/a       | n/a       | 4.12%     | Jul 2002  |

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

## Short-Duration Investment-Grade Corporate Bonds (Liquid USD Sleeve)

A step up in yield from pure Treasuries/cash (above) while keeping duration short (1-5yr) — this is the standard "good corporate bonds, liquid, in dollars" sleeve: more yield than SGOV/BIL, far less rate risk than the long-duration/aggregate funds below.

**US-domiciled:**

| Ticker | Name | Exchange | TER | AUM | Maturity Band | Dist. | Inception |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VCSH | Vanguard Short-Term Corporate Bond | NASDAQ | 0.03% | ~$45.0B | 1-5yr | Monthly | Nov 2009 |
| IGSB | iShares 1-5 Year Investment Grade Corporate Bond | NASDAQ | 0.04% | ~$22.3B | 1-5yr | Monthly | Jan 2007 |
| SPSB | SPDR Portfolio Short Term Corporate Bond | NYSE Arca | 0.04% | ~$10.6B | 1-3yr | Monthly | Dec 2009 |

**UCITS (Ireland):** there is no widely-liquid **USD** 1-5yr IG-corporate-only UCITS equivalent to VCSH/IGSB — the closest iShares product (`IE1A`, $\$$ Corp Bond 1-5yr UCITS ETF) only has a liquid **EUR** share class. For a UCITS-domiciled, USD, liquid corporate sleeve, use either:

- **ERNA** (iShares `$` Ultrashort Bond UCITS ETF Acc, 0.09% TER — see "Short-Term / Cash Management" table above) — broader than pure corporates but similarly low-duration and liquid in USD.
- **LQDA** (iShares `$` Corp Bond UCITS ETF Acc, 0.20% TER — see "Long-Term / Core Aggregate Bond" table below) — pure IG corporate exposure in USD, but broad-maturity (longer effective duration, more rate sensitivity) rather than short-duration.

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

| Ticker | Name                                 | Exchange  | TER   | AUM    | 1Y          | 3Y (ann.) | 5Y (ann.) | Yield   | Inception |
| ------ | ------------------------------------ | --------- | ----- | ------ | ----------- | --------- | --------- | ------- | --------- |
| HYG    | iShares iBoxx $ High Yield Corp Bond | NYSE Arca | 0.49% | $17.4B | 5.11%       | 8.11%     | 3.70%     | 6.47%   | Apr 2007  |
| JNK    | SPDR Bloomberg High Yield Bond       | NYSE Arca | 0.40% | $7.3B  | 5.99%       | 8.56%     | 3.59%     | 6.79%   | Nov 2007  |
| EMB    | iShares JPM USD EM Bond              | NASDAQ    | 0.39% | $14.7B | ~7.5-8.1%\* | 8.52%     | 2.25%     | 4.98%   | Dec 2007  |
| EMLC   | VanEck JPM EM Local Currency Bond    | NYSE Arca | 0.30% | $4.8B  | 8.85%       | 6.4%      | 2.3%      | ~6.0%\* | Jul 2010  |

**UCITS (Ireland, USD):**

| Ticker   | Name (Acc/Dist)                                 | ISIN         | Exchanges                                  | TER   | AUM    | 1Y                                                         | 3Y (cum.) | 5Y (cum.) | Inception |
| -------- | ----------------------------------------------- | ------------ | ------------------------------------------ | ----- | ------ | ---------------------------------------------------------- | --------- | --------- | --------- |
| **JPEA** | iShares JPM $ EM Bond UCITS ETF (Acc)           | IE00BYXYYK40 | LSE, XETRA, SIX, gettex                    | 0.45% | €2.04B | +8.37%                                                     | +23.64%   | +11.55%   | Apr 2017  |
| IHYU     | iShares $ High Yield Corp Bond UCITS ETF (Dist) | IE00B4PY7Y77 | LSE, SIX, XETRA, Stuttgart, Borsa Italiana | 0.50% | €2.19B | +6.64%                                                     | +20.26%   | +24.05%   | Sep 2011  |
| IHYA     | iShares $ High Yield Corp Bond UCITS ETF (Acc)  | IE00BYXYYL56 | LSE, SIX, XETRA                            | 0.50% | €2.47B | ~ same total return profile as IHYU, reinvested internally |           |           | Apr 2017  |
| IEMB     | iShares JPM $ EM Bond UCITS ETF (Dist)          | IE00B2NPKV68 | LSE, XETRA, Stuttgart, Borsa Italiana      | 0.45% | €3.67B | +8.26%                                                     | +23.71%   | +11.51%   | Feb 2008  |
| EMCA     | iShares JPM $ EM Corp Bond UCITS ETF (Acc)      | IE00BFM6TD65 | LSE, XETRA, and others                     | 0.50% | Smaller/less liquid than JPEA | — | — | — | Apr 2012 |

**Pros:** Meaningfully higher yield/return than Treasuries or core aggregate (IHYU's 5-year cumulative return of +24% beats every other bond category here); EM debt adds geographic diversification away from US/developed-market rates.

### IHYU/IHYA (High Yield Corporate) vs IEMB/JPEA (EM Sovereign): Which One

Both categories have an Acc twin at identical cost/exposure to their Dist listing — **always pick the Acc line** (`IHYA` over `IHYU`, `JPEA` over `IEMB`) for the same tax-deferral reason as `VWRA` over `VWRP`.

Between the two asset classes, **JPEA (EM sovereign) is the better diversifier if you already hold US-heavy equity** (e.g. `VWRA` at ~62% US, plus direct `AMZN`/`GOOG`):

- **Different risk factor:** IHYA is USD-denominated **sub-investment-grade US corporate credit** — its drawdowns are driven by the same US business/earnings cycle as your equity holdings, so it tends to sell off *with* AMZN/GOOG in a downturn rather than cushioning the portfolio. JPEA is **EM sovereign hard-currency debt** — its risk driver is EM fiscal/political/reserve risk, a genuinely different factor from US tech earnings.
- **Cost:** JPEA's 0.45% TER is cheaper than IHYA's 0.50%.
- **The 5Y number is a look-back artifact, not a durable edge:** IHYU's standout +24% 5-year cumulative return (vs IEMB's +11.5%) is explained by the JPM EMBI index's 2022 shock — the Russia/Ukraine war forced a near-total write-down of Russian sovereign debt in the index, compounded by real EM sovereign defaults that year (Sri Lanka, Zambia, Ghana, Ethiopia). That one bad year sits inside the 5-year window but has already rolled out of the 3-year and 1-year windows — where **IEMB/JPEA are already ahead of IHYU** (+8.26% vs +6.64% over 1Y, +23.71% vs +20.26% over 3Y). This says the EM shock was a one-off, not that HY corporates are structurally superior.
- **Verdict:** for a smaller, higher-conviction satellite sleeve, **JPEA** — cheaper, better diversifying, and its post-2022 return trend already leads IHYA on the more recent (1Y/3Y) windows. Only prefer IHYA if you specifically want US corporate credit exposure (e.g. as a proxy for a "risk-on" tilt) rather than geographic diversification.
- **EMCA** (iShares JPM `$` EM **Corp** Bond UCITS ETF Acc — blends EM sovereign + EM corporate credit) exists as a middle-ground option, but at the same 0.50% TER as IHYA with meaningfully smaller AUM/liquidity than JPEA, it doesn't beat JPEA on cost or liquidity — skip it unless you specifically want EM corporate issuers over EM sovereigns.

**Cons:** Credit risk (defaults rise in recessions, correlating with equity drawdowns — reduces the "safety" role bonds are usually meant to play); EM local-currency debt (EMLC) carries additional FX risk; higher TER (0.30-0.50% vs 0.03-0.15% for Treasuries).

### Verdict for This Portfolio

Checked against the actual portfolio (`Asset Allocation - Investments - Portfolio.xlsx`, Debt + Total sheets, Aug 2026 snapshot): the debt sleeve is ₹1.39 Cr, **100% INR** — EPF, PPF, SSY, NPS, SCSS, FDs (7-8.6%, mostly locked long-term) plus two Indian corporate bond mutual funds — against ₹1.87 Cr equity (globally diversified, US-tech-heavy via `VWRA`/`AMZN`/`GOOG`). Current split: 42.6% debt / 57.4% equity. **Zero USD debt exposure exists today.**

This reframes "which ETF is best" here: the INR debt side already supplies deep, guaranteed-rate safety, so the new USD sleeve's job isn't more safety — it's either liquid dollars ready to redeploy into stocks, or a genuine diversifier that isn't just another US-equity-correlated bet.

- **Primary allocation → `IB01`/`SGOV`** (short Treasury, see [Short-Term / Cash Management](#short-term--cash-management-low-duration) above): near-zero duration/credit risk, the one bucket in this whole page uncorrelated with the equity book — matches the original "liquid dollars for AMZN/GOOG opportunities" goal better than any credit-risk sleeve.
- **Small satellite, if extra yield is wanted → `JPEA`**: still the better of IHYA/JPEA for the reasons above.
- **Skip `IHYA`/`IHYU` for this portfolio specifically**: its risk driver (US corporate credit cycle) duplicates the same exposure already carried via `AMZN`/`GOOG`/`VWRA` — it isn't diversification, it's concentration.

## International / Global Aggregate (ex-US)

For diversifying away from a purely US bond portfolio without taking on UCITS-specific structuring.

| Ticker | Name | Domicile | Exchange | TER | AUM | 1Y | 3Y | 5Y | Yield | Inception |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BNDX | Vanguard Total International Bond (USD-hedged) | US | NASDAQ | 0.07% | $83.0B | 1.45% | ~3.8%\* (ann.) | ~0.3%\* (ann.) | 4.54% | Jun 2013 |
| IAGG | iShares Core International Aggregate Bond (hedged) | US | Cboe BZX | 0.07% | $11.4B | 2.14% | ~4.7%\* (ann.) | ~1.2%\* (ann.) | ~4.5%\* | Nov 2015 |

For a UCITS-domiciled equivalent, use `AGGU`/`AGGG` (global aggregate, above) rather than a US ex-domestic-only fund.

## Settlement: Selling on LSE/NASDAQ and Immediately Buying Stocks on IBKR

Whether you can sell a bond/ETF and instantly redeploy the cash into a stock like AMZN or GOOG on IBKR depends on **account type**, not on which exchange (LSE vs NASDAQ) the sale happened on.

- **Cash account:** Sale proceeds are credited to your balance immediately but do not legally **settle** until T+1 (US equities/ETFs, since May 2024) or T+2 (LSE-listed securities, including USD-denominated UCITS lines like `IB01`/`LQDA`/`IGLN` — the UK is still on T+2 as of Aug 2026, moving to T+1 only around Oct 2027). Buying a new stock with that unsettled cash and then selling it again before the original sale settles is a **free-riding violation**; IBKR can restrict the account (typically a 90-day settled-cash-only freeze) if it recurs.
- **Margin account:** Buying power is not gated by settlement — IBKR extends margin credit against your holdings/cash in real time, so you can sell a bond ETF (LSE) and buy AMZN/GOOG (NASDAQ) in the same instant, regardless of the two exchanges' different settlement cycles. This is the standard way active IBKR users reallocate same-day. The only real constraint is margin requirement/buying power on the account, not settlement date.
- **Currency is the separate variable:** IBKR nets cash by **currency**, not by exchange. Selling a USD-denominated UCITS bond ETF on LSE and buying a USD stock on NASDAQ involves no FX conversion — both legs are USD, so (on a margin account) the reallocation is effectively instant. If you instead sold a GBP-denominated line (e.g. `VWRP`/`SGLN`) to buy a USD stock, IBKR would need to auto-convert currency first, which is fast but adds a small FX spread — a separate friction from settlement.
- **Practical takeaway:** Run a margin account (even if you don't intend to borrow — you simply keep margin utilization near 0%) if you want this same-day sell-bond-buy-stock flexibility. On a cash account, you must wait for T+1/T+2 settlement of the sale before the proceeds are free to reuse without violation risk.

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

## International Gold ETFs (US vs UCITS)

Physical gold ETFs/ETCs give USD-denominated gold exposure via [Interactive Brokers (IBKR)](economics/learning-resources/interactive-brokers-ibkr.md) — the same US-domiciled vs UCITS choice covered for equity ETFs below and for [international bond ETFs](economics/investment-products/debt-funds/international-debt-etfs-ibkr.md). A UCITS gold fund is technically an **ETC (Exchange Traded Commodity)** — a debt-like instrument backed by allocated physical gold — since UCITS rules require `>=20` holdings and a single-commodity fund can't itself qualify as a UCITS fund. There's no coupon/dividend on gold, so the Acc/Dist distinction doesn't apply; return is spot gold price minus TER. For India-specific gold ETFs/SGBs/physical gold taxation, see [Gold / Diamond / Gold ETF](economics/investment-products/hybrid-alternative/gold-physical-digital.md).

**SPDR Gold Trust**

- Assets - $89.71B
- Expense Ratio - 0.40%
- PE Ratio - (-30.26)
- The SPDR Gold Shares (GLD) is an exchange-traded fund that is based on the LBMA Gold Price index. The fund tracks the gold spot price, less expenses and liabilities, using gold bars held in London vaults. GLD was launched on Nov 18, 2004 and is issued by State Street.
- [GLD ETF Stock Price & Overview](https://stockanalysis.com/etf/gld/)

**US-domiciled:**

| Ticker | Name                       | Exchange  | TER   | AUM      | Custody                  | Inception |
| ------ | -------------------------- | --------- | ----- | -------- | ------------------------ | --------- |
| GLD    | SPDR Gold Shares           | NYSE Arca | 0.40% | ~$141.7B | London vaults (HSBC)     | Nov 2004  |
| IAU    | iShares Gold Trust         | NYSE Arca | 0.25% | ~$60B    | London vaults (JPMorgan) | Jan 2005  |
| SGOL   | abrdn Physical Gold Shares | NYSE Arca | 0.17% | ~$7.4B   | Zurich + London vaults   | Sep 2009  |
| GLDM   | SPDR Gold MiniShares       | NYSE Arca | 0.10% | ~$28B    | London vaults (JPMorgan) | Jun 2018  |

**UCITS (Ireland, USD):**

| Ticker   | Name                            | ISIN         | Exchanges                                 | TER   | AUM    | Custody                      | Inception |
| -------- | ------------------------------- | ------------ | ----------------------------------------- | ----- | ------ | ---------------------------- | --------- |
| **IGLN** | iShares Physical Gold ETC (USD) | IE00B4ND3602 | LSE, gettex                               | 0.12% | ~€35B  | JPMorgan (allocated, London) | Apr 2011  |
| SGLD     | Invesco Physical Gold ETC       | IE00B579F325 | LSE, XETRA, Borsa Italiana, Euronext, SIX | 0.12% | ~€27B  | JPMorgan                     | Jun 2009  |
| PHAU     | WisdomTree Physical Gold        | JE00B1VS3770 | LSE, XETRA, and others                    | 0.39% | ~€6.6B | JPMorgan/HSBC bullion        | Apr 2007  |

- **On IBKR:** search `IGLN` or `SGLD`, select the **LSE** listing, and confirm the currency shown is **USD** — a GBP-denominated line on the same underlying gold pool (e.g. `SGLN` for iShares) also trades on LSE; buy the USD line to match dollars sent via LRS, same rule as `VWRA` vs `VWRP`.
- **Estate tax:** GLD/IAU/SGOL/GLDM are **US-situs assets** for non-US persons and exposed to US estate tax on death — see [US Estate Tax Avoidance for Non-Resident Aliens](economics/taxation/us-estate-tax-avoidance-nra.md). IGLN/SGLD, being Ireland-domiciled, avoid this — same logic as UCITS bond/equity ETFs.
- **Note on PHAU:** WisdomTree's PHAU is **Jersey-domiciled**, not Ireland — it doesn't carry the same US-estate-tax-avoidance profile as IGLN/SGLD despite being an older, well-established product. Prefer IGLN or SGLD for the estate-tax benefit.

## Links

- [Interactive Brokers (IBKR)](economics/learning-resources/interactive-brokers-ibkr.md)
- [International ETFs (Equity)](economics/investment-products/equity-funds/international-etfs.md)
- [US Estate Tax Avoidance for Non-Resident Aliens](economics/taxation/us-estate-tax-avoidance-nra.md)
- [Fixed Income Instruments](economics/investment-products/debt-funds/fixed-income-instruments.md)
- [Debt Mutual Funds Overview](economics/investment-products/debt-funds/debt-mutual-funds-overview.md)
- [justETF - UCITS ETF screener](https://www.justetf.com/en/find-etf.html)
- [Stock Analysis - ETF Screener](https://stockanalysis.com/etf/screener/)
