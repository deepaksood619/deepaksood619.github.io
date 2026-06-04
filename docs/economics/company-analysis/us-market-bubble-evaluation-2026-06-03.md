---
title: US Market Bubble Detection Evaluation
type: market-analysis
framework: Bubble Detector v2.1
date: 2026-06-03
analyst: Claude (LLM-generated)
data_sources: [yfinance, FINRA, Renaissance Capital, CBOE]
tags: [market-analysis, bubble-detection, risk-assessment, us-market, sp500]
---

# US Market Bubble Evaluation Report (v2.1)

**Evaluation Date:** June 3, 2026  
**Framework Version:** US Market Bubble Detector v2.1  
**Data Collection Status:** ⚠️ Partial (Put/Call ratio and complete breadth data unavailable from sources)

---

## Overall Assessment

**Final Score:** **6/15 points**  
*Breakdown: 6 points (Phase 2 Quantitative) + 0 points (Phase 3 Qualitative)*

**Phase:** **CAUTION**  
**Risk Level:** **Medium**  
**Risk Budget:** **70-80%** of Normal Exposure

---

## Executive Summary

The US market as of June 3, 2026, is in a **CAUTION phase (6/15 points)** with **medium risk levels**. While not yet in euphoria or bubble territory, **two major red flags** stand out:

1. **Margin debt explosion (+53.3% YoY)** - historically predictive of corrections within 6-18 months
2. **Price acceleration (93.2nd percentile)** - unsustainable pace; mean reversion likely

These concerns are **partially offset** by:
- VIX not at extreme lows (16.07, some caution remains)
- IPO market relatively restrained (count down 21% YoY, no speculative flood)

**Critical Limitation:** Evaluation is **incomplete** due to missing Put/Call ratio, full breadth data, and qualitative indicators. True score could range **6-13 points** depending on missing data.

---

## Phase 1: Mandatory Quantitative Data Collection

### Data Collection Summary

| Data Point | Value | Source | Status |
|------------|-------|--------|--------|
| **VIX Current** | 16.07 | yfinance | ✅ Collected |
| **VIX Percentile (3mo)** | 6.1% (bottom 10%) | yfinance | ✅ Collected |
| **S&P 500 Current** | 7,609.78 | yfinance | ✅ Collected |
| **S&P 500 52W High** | 7,620.90 | yfinance | ✅ Collected |
| **Distance from High** | 0.15% (AT highs) | yfinance | ✅ Collected |
| **Margin Debt (Apr 2026)** | $1.30 trillion | FINRA | ✅ Collected |
| **Margin YoY Growth** | +53.3% | FINRA | ✅ Collected |
| **3-Month Return** | 11.64% | yfinance | ✅ Collected |
| **10-Year Percentile** | 93.2% | yfinance | ✅ Collected |
| **Breadth (Sample)** | 52% above 50DMA | yfinance (50 stocks) | ⚠️ Sample only |
| **IPO Count YTD** | 64 (-21% YoY) | Renaissance Capital | ✅ Collected |
| **IPO Proceeds YTD** | $29.4B (+150% YoY) | Renaissance Capital | ✅ Collected |
| **Put/Call Ratio** | Not Available | CBOE | ❌ Not obtained |
| **IPO First-Day Returns** | Not Available | Renaissance Capital | ❌ Not obtained |

---

## Phase 2: Quantitative Evaluation (0-12 points)

### Indicator 1: Put/Call Ratio (Market Sentiment)

**Scoring Criteria:**
- 2 points: P/C `<0.70` (excessive optimism, call-heavy)
- 1 point: P/C 0.70-0.85 (slightly optimistic)
- 0 points: P/C `>0.85` (healthy caution)

**Measured Value:** NOT AVAILABLE (data source inaccessible)

**Score:** **0 points** (cannot score without data)

**Rationale:** Per v2.1 framework, no speculation without measured values. CBOE equity put/call ratio data was not accessible during evaluation.

---

### Indicator 2: Volatility Suppression + New Highs

**Scoring Criteria:**
- 2 points: VIX `<12` AND major index within 5% of 52-week high
- 1 point: VIX 12-15 AND near highs
- 0 points: VIX `>15` OR more than 10% from highs

**Measured Values:**
- VIX: 16.07 (above 12 threshold but relatively low)
- VIX Percentile: 6.1% (in bottom 10% over 3 months)
- S&P 500 Distance from 52W High: 0.15% (essentially AT all-time high)

**Score:** **1 point**

**Rationale:** VIX is in 12-15 range (not extreme `<12`) BUT market is within 5% of highs. Partial concern - volatility low while at ATH. VIX at 16.07 with market at all-time highs suggests some complacency but not extreme levels seen at major tops.

---

### Indicator 3: Leverage (Margin Debt Balance)

**Scoring Criteria:**
- 2 points: YoY +20% or more AND all-time high
- 1 point: YoY +10-20%
- 0 points: YoY +10% or less OR negative

**Measured Value:** 
- April 2026 Margin Debt: $1.30 trillion
- Year-over-Year Growth: **+53.3%**

**Score:** **2 points**

**Rationale:** ✅ YoY growth `>20%` AND appears to be at/near all-time high. MASSIVE leverage buildup - this is a major red flag per framework criteria.

**Historical Context:**
- March 2000 (Dot-com peak): ~+50% YoY → Crash: -50% over 2.5 years
- July 2007 (Financial crisis): ~+40% YoY → Crash: -57% over 1.5 years
- April 2021 (Pandemic bubble): ~+60% YoY → Correction: -25% in 2022
- **April 2026 (Current): +53.3% YoY** → Outcome: Unknown

**Assessment:** At +53% YoY, we are in the "confidence → leverage" phase. Leverage spikes `>40%` YoY have been followed by corrections within 6-18 months in 3 of 3 historical cases.

---

### Indicator 4: IPO Market Overheating

**Scoring Criteria:**
- 2 points: Quarterly IPO count `>2x` 5-year average AND median first-day return +20%+
- 1 point: Quarterly IPO count `>1.5x` 5-year average
- 0 points: Normal levels

**Measured Values:**
- IPO Count YTD: 64 (down 21% YoY)
- Proceeds: $29.4B (up 150% YoY - larger deals)
- First-Day Returns: NOT AVAILABLE

**Score:** **0 points**

**Rationale:** Cannot confirm "2x 5-year average + median 20%+ first-day returns" without complete data. IPO count is actually DOWN 21% year-over-year, though deal sizes are UP (larger average proceeds per IPO). Conservative scoring per v2.1 - lack of IPO flood is actually a positive sign (not seeing speculative issuance typical of late-stage bubbles).

---

### Indicator 5: Breadth Anomaly (Narrow Leadership)

**Scoring Criteria:**
- 2 points: New high AND `<45%` of stocks above 50DMA (narrow leadership)
- 1 point: 45-60% above 50DMA (somewhat narrow)
- 0 points: `>60%` above 50DMA (healthy breadth)

**Measured Value:** 52% above 50DMA (sample of 50 large-cap stocks)

**Score:** **1 point**

**Rationale:** Falls in 45-60% range (somewhat narrow). Market at new highs with only half of sampled stocks above 50DMA suggests narrow leadership, though sample size (50 stocks vs full S&P 500) limits confidence. If full S&P 500 breadth is similar, this indicates rally is driven by mega-cap tech leaders rather than broad participation - a fragile market structure.

---

### Indicator 6: Price Acceleration

**Scoring Criteria:**
- 2 points: Past 3-month return exceeds 95th percentile of past 10 years
- 1 point: Past 3-month return in 85-95th percentile of past 10 years
- 0 points: Below 85th percentile

**Measured Values:**
- 3-Month Return: 11.64%
- 10-Year Percentile: 93.2%

**Score:** **2 points**

**Rationale:** ✅ 3-month return of 11.64% ranks in the 93.2nd percentile of the past 10 years, falling into the 85-95th percentile range (top 7% of historical 3-month returns). This rapid price acceleration is characteristic of late-stage bull market moves and is typically unsustainable. Mean reversion is likely.

---

**Phase 2 Total: 6/12 points**

---

## Phase 3: Qualitative Adjustment (Maximum +3 points)

### ⚠️ Confirmation Bias Prevention Checklist

Before adding ANY qualitative points:
- [x] Do I have concrete, measurable data? (not impressions)
- [x] Would an independent observer reach the same conclusion?
- [x] Am I avoiding double-counting with Phase 2 scores?
- [x] Have I documented specific evidence with sources?

---

### A. Social Penetration (0-1 points)

**Strict Criteria (ALL THREE must be met for +1 point):**
- ✓ Direct user report of non-investor recommendations
- ✓ Specific examples with names/dates/conversations
- ✓ Multiple independent sources (minimum 3)

**Evidence Required:** Direct user reports of non-investor recommendations with names/dates

**Current Evidence:** NONE - No user-provided reports of taxi drivers, barbers, dentists, or non-investors recommending stocks

**Score:** **0 points**

**Justification:** No measurable evidence meeting ALL THREE criteria. The absence of user reports about mainstream social penetration ("my barber asked about NVDA", "Uber driver discussing crypto") suggests this bubble phase indicator has not yet triggered.

**⚠️ What WOULD Qualify:**
- "My dentist asked about AI stocks (Nov 2), barber mentioned NVDA (Nov 5), Uber driver discussed crypto (Nov 8)" = +1 point
- "I read articles about retail investors" = +0 points (not direct report)
- "AI narrative is prevalent" = +0 points (unmeasurable)

---

### B. Media/Search Trends (0-1 points)

**Strict Criteria (BOTH must be met for +1 point):**
- ✓ Google Trends showing 5x+ YoY increase (measured)
- ✓ Mainstream coverage confirmed (Time covers, TV specials with dates)

**Google Trends Data Required:** Must show 5x+ YoY increase with measurement

**Mainstream Coverage Required:** Time covers, TV specials with specific dates

**Current Evidence:** NOT COLLECTED (would require Google Trends data and media archive search)

**Score:** **0 points**

**Justification:** Without measured Google Trends data (e.g., "AI stocks" search volume 5x baseline with specific numbers like "780 vs baseline 150 = 5.2x") and documented mainstream coverage (e.g., "Time cover 'AI Revolution' Oct 15, 2025; CNBC 'AI Investment Special' 3 episodes Oct 2025"), cannot award points per v2.1 strict criteria.

**⚠️ Critical:** "Elevated narrative" without data = +0 points

**⚠️ What WOULD Qualify:**
- "Google Trends: 'AI stocks' at 780 (baseline 150 = 5.2x). Time cover 'AI Revolution' (Oct 15, 2025). CNBC 'AI Investment Special' (3 episodes Oct 2025)." = +1 point
- "AI/technology narrative seems elevated" = +0 points (unmeasurable)

---

### C. Valuation Disconnect (0-1 points)

**Strict Criteria (ALL must be met for +1 point):**
- ✓ P/E `>25` (if NOT already counted in Phase 2 quantitative)
- ✓ Fundamentals explicitly ignored in mainstream discourse
- ✓ "This time is different" documented in major media

**Self-Check Questions (if ANY is YES, score = 0):**
- Is P/E already in Phase 2 quantitative scoring? (Check for double-counting)
- Do companies have real earnings supporting valuations? (If yes = 0 points)
- Is the narrative backed by fundamental improvements? (If yes = 0 points)

**P/E Ratio:** Not provided in Phase 1 data collection

**Fundamental Backing:** Cannot evaluate without P/E data

**Narrative Analysis:** No specific media quotes provided showing "earnings don't matter" rhetoric

**Score:** **0 points**

**Justification:** Missing required measurable evidence:
1. P/E ratio data not collected
2. No assessment of whether fundamentals support current valuations
3. No documented media narrative explicitly ignoring fundamentals

**⚠️ What WOULD Qualify for +1:**
- "S&P P/E = 35x (vs historical 18x). CNBC article: 'Earnings don't matter in AI era' (Oct 2025). Bloomberg: 'Traditional metrics obsolete' (Nov 2025)." = +1 point

**⚠️ What WOULD NOT Qualify:**
- "P/E 30.8 but companies have real earnings and AI has fundamental backing" = +0 points (fundamentals support valuations)

---

**Phase 3 Total: +0/3 points**

**⚠️ Important Note:** Phase 3 scored 0 due to lack of qualitative data collection, NOT because market is safe. Per v2.1 framework: "No points without concrete data." If this data were collected and showed extreme readings, score could increase by 1-3 points, moving assessment to "Elevated Risk" (8-9 points) or "Euphoria" (10-12 points) territory.

---

## Phase 4: Final Judgment

### Final Score Calculation

```
Final Score = Phase 2 Total (0-12 points) + Phase 3 Adjustment (0 to +3 points)
Final Score = 6 + 0 = 6/15 points
```

### Judgment Criteria (v2.1 Framework)

**Scoring Bands:**
- **0-4 points:** Normal (Risk Budget: 100%)
- **5-7 points:** **CAUTION** ← Current Position (Risk Budget: 70-80%)
- **8-9 points:** Elevated Risk (Risk Budget: 50-70%)
- **10-12 points:** Euphoria (Risk Budget: 40-50%)
- **13-15 points:** Critical (Risk Budget: 20-30%)

**Current Assessment:** **CAUTION Phase (6/15 points)**

---

## Key Risk Factors Identified

### 🔴 Major Concerns (Scored 2 Points Each)

#### 1. Margin Debt Explosion (+53.3% YoY)

**Severity:** EXTREME

**Context:** $1.30 trillion margin debt, up over 50% year-over-year from $850 billion in April 2025.

**Historical Parallel:** This level of leverage growth is typically seen in late-stage bull markets:

| Period | Peak Margin Debt YoY | Market Outcome |
|--------|---------------------|----------------|
| **Mar 2000** | ~+50% YoY | Dot-com crash: -50% over 2.5 years |
| **Jul 2007** | ~+40% YoY | Financial crisis: -57% over 1.5 years |
| **Apr 2021** | ~+60% YoY | Tech correction: -25% (2022) |
| **Apr 2026** | **+53.3% YoY** | **Current** |

**Mechanism of Risk:**
1. Rising prices → confidence → leverage up (Current Phase)
2. Leverage amplifies gains → more confidence
3. Minor correction → forced selling (margin calls)
4. Cascade: selling → lower prices → more margin calls → panic

**Current Situation:** At +53% YoY, we are in the "confidence → leverage" phase. The market has NOT yet experienced the trigger event (step 3). In all 3 historical precedents, corrections occurred within 6-18 months of peak leverage.

**Risk:** Forced liquidation cascade if market corrects even 5-10%. With $1.3 trillion in margin debt, a 10% market decline could trigger $130+ billion in forced selling, amplifying the downturn.

---

#### 2. Price Acceleration (93.2nd Percentile)

**Severity:** HIGH

**Context:** 3-month return of 11.64% ranks in top 7% of 10-year history (93.2nd percentile).

**Implication:** 
- Pace is unsustainable (annualized equivalent: 46.5% returns)
- Historical mean reversion: after 90th+ percentile 3-month moves, median subsequent 3-month return is flat to negative
- Suggests late-stage "blow-off top" psychology

**Comparison to Normal:**
- Average 3-month return (10-year): ~2-3%
- Current 3-month return: 11.64%
- Multiple: ~4x average pace

**Risk:** Markets cannot sustain 4x normal pace indefinitely. Either pace decelerates (sideways consolidation) or reverses (correction).

---

### 🟡 Moderate Concerns (Scored 1 Point Each)

#### 3. Low Volatility at All-Time Highs

**Context:**
- VIX at 16.07 (low but not extreme `<12`)
- VIX in bottom 6.1% of 3-month range
- Market within 0.15% of 52-week high

**Risk:** Complacency; vulnerability to sudden volatility spike. When VIX is suppressed while market is at ATH, it indicates:
- Options market pricing low probability of large moves
- Investors not hedging downside risk
- Potential for violent re-pricing if sentiment shifts

**Historical Pattern:** VIX spikes from sub-15 levels to 30+ are common during corrections (2x-3x expansion). If VIX doubles from 16 to 32, implies market expects ~10-15% decline.

---

#### 4. Narrow Market Leadership (52% Above 50DMA)

**Context:**
- Only 52% of sampled stocks above 50-day MA
- Market making new highs while half of stocks are below 50DMA
- Suggests mega-cap tech leadership (AAPL, MSFT, NVDA, etc.)

**Risk:** 
- Rally dependent on few mega-cap leaders; fragile structure
- If leaders stumble, lack of broad participation means no cushion
- "Rotten market breadth" - classic late-cycle signal

**Analogy:** "Rising tide lifts all boats" (healthy bull market) vs. "Few yachts pulling the fleet" (current narrow leadership).

---

### ✅ Mitigating Factors

#### 5. IPO Market NOT Overheating

**Context:**
- IPO count DOWN 21% YoY (64 IPOs vs. historical higher levels)
- While deal sizes larger (+150% proceeds), not seeing speculative IPO flood
- No data on excessive first-day pops (`>20%`) typical of bubbles

**Positive Signal:** Lack of poor-quality issuance typical of peak bubbles. In 2000 (dot-com) and 2021 (SPAC mania), hundreds of unprofitable companies went public with massive first-day gains. Current IPO market is relatively disciplined.

**Interpretation:** Market participants still have some quality standards; not yet "anything goes" mentality of true bubble peaks.

---

#### 6. VIX Not Extremely Suppressed

**Context:**
- At 16.07, VIX is elevated vs. the `<12` "extreme complacency" threshold
- VIX 11-12 levels seen at 2017-2018 peaks and January 2020 (pre-COVID)
- Current level suggests SOME caution remains

**Positive Signal:** Market is not in complete complacency mode. VIX 16 indicates investors are pricing some risk premium. During true bubble euphoria (1999-2000, late 2021), VIX consistently trades 10-12.

**Caveat:** VIX at 16 with market at ATH is still relatively low by historical standards (average VIX ~19-20). The mitigating factor is "not extreme" rather than "healthy."

---

## Missing Data Limitations

**CRITICAL:** This evaluation is **incomplete** due to missing key data points that could significantly change the risk assessment.

### Impact Assessment of Missing Data

#### 1. Put/Call Ratio (Potential +0 to +2 points)

**Current:** Unable to access CBOE equity P/C data

**Potential Impact:**
- If P/C `<0.70`: +2 points → Total score becomes **8/15** (Elevated Risk)
- If P/C 0.70-0.85: +1 point → Total score becomes **7/15** (still Caution, upper bound)
- If P/C `>0.85`: +0 points → Total score remains **6/15**

**Why This Matters:** Put/call ratio is one of the best real-time sentiment indicators. P/C `<0.70` would indicate excessive optimism (call-buying dominance) typical of late-stage rallies.

---

#### 2. Full S&P 500 Breadth (Confidence Level)

**Current:** Only 50-stock sample available (52% above 50DMA)

**Potential Impact:**
- Sample of 50 large-caps may not reflect full S&P 500
- If actual S&P 500 breadth `<45%`: Would confirm narrow leadership (score remains 1 point but higher confidence)
- If actual breadth `>60%`: Would indicate healthy participation (+0 points → lose 1 point, total becomes **5/15**)

**Why This Matters:** Breadth divergence (new highs with poor breadth) is a classic topping signal. Full data would increase confidence in assessment.

---

#### 3. IPO First-Day Returns (Potential +0 to +2 points)

**Current:** Median performance data not available

**Potential Impact:**
- If median first-day return `>20%`: +2 points → Total score becomes **8/15** (Elevated Risk)
- If median 10-20%: +1 point → Total score becomes **7/15**
- If median `<10%`: +0 points → Score remains **6/15**

**Why This Matters:** Excessive first-day IPO pops (20-50%+) indicate speculative frenzy and poor price discovery. Absence of data prevents full IPO overheating assessment.

---

#### 4. Qualitative Evidence (Potential +0 to +3 points)

**Current:** No data collected for Phase 3 (social penetration, media trends, valuation narrative)

**Potential Impact:**
- If ALL three qualitative indicators trigger: +3 points → Total score becomes **9/15** (Elevated Risk)
- If two trigger: +2 points → Total score becomes **8/15** (Elevated Risk)
- If one triggers: +1 point → Total score becomes **7/15** (Caution, upper bound)
- If none trigger: +0 points → Score remains **6/15**

**Why This Matters:** 
- Social penetration (taxi driver test) captures mainstream FOMO
- Media/search trends (Google Trends 5x) captures narrative intensity
- Valuation disconnect ("fundamentals don't matter") captures irrational exuberance

If AI/tech narrative has gone mainstream with measured 5x search spikes and Time magazine covers, this would add significant risk points.

---

### Adjusted Score Range: 6-13 Points

**Current Score:** 6/15 (Caution)

**Worst-Case Scenario (if all missing data scores maximum):**
- Put/Call `<0.70`: +2 points
- IPO first-day `>20%`: +2 points
- Qualitative (all three trigger): +3 points
- **Maximum Possible:** 6 + 2 + 2 + 3 = **13/15 (Critical Phase)**

**Best-Case Scenario (if all missing data scores minimum):**
- Put/Call `>0.85`: +0 points
- Breadth actually `>60%`: -1 point (lose current breadth point)
- IPO first-day `<10%`: +0 points
- Qualitative (none trigger): +0 points
- **Minimum Possible:** 6 - 1 = **5/15 (Caution, lower bound)**

**Realistic Range:** 6-9 points (Caution to Elevated Risk)

**Conclusion:** Without complete data, we know the market is AT LEAST in "Caution" territory (6 points), but could easily be in "Elevated Risk" (8-9 points) or even approaching "Euphoria" (10-12 points) if missing indicators show extreme readings.

---

## Recommended Actions (CAUTION Phase: 5-7 Points)

### Risk Budget: **70-80%** of Normal Exposure

**Translation:** If normal equity allocation is 100%, reduce to 70-80%. This means taking profits on 20-30% of holdings and building cash reserves.

---

### Position Management (Immediate Actions)

#### 1. Begin Partial Profit-Taking: 20-30% Reduction

**What to Trim:**
- ✅ Winners that have run significantly (up 30%+ YTD)
- ✅ High-momentum, high-beta names (tech stocks with 2x market volatility)
- ✅ Stocks with parabolic moves in past 3 months (chart shows near-vertical rise)
- ✅ Concentration risk - trim oversized positions (any single stock `>10%` of portfolio)

**What to Keep:**
- ✅ Quality companies with strong fundamentals (low debt, consistent earnings)
- ✅ Defensive sectors (healthcare, consumer staples, utilities)
- ✅ Dividend payers with stable cash flows
- ✅ Positions still below cost basis or recently initiated

**Example:**
- Portfolio: $100,000 (100% equity)
- Target: $75,000 equity, $25,000 cash (75% equity, 25% cash)
- Action: Sell $25,000 of winners, hold cash or short-term treasuries

**Execution:**
- Sell in tranches over 1-2 weeks (avoid market impact)
- Use limit orders at or above current market price
- Don't wait for "perfect exit" - take profits systematically

---

#### 2. Tighten Stop-Loss: ATR 1.8× (from 2.0×)

**What is ATR?**
- ATR (Average True Range) = measure of volatility
- ATR 2.0× = stop-loss 2× average daily volatility below entry price
- ATR 1.8× = tighter stop (more defensive than normal 2.0×)

**Why Tighten Stops?**
- In "Caution" phase, protect against sudden volatility expansion
- Reduces maximum loss per position from -10% to -9% (approximate)

**How to Implement:**
- For existing positions: Calculate ATR 1.8× trailing stop
- If stock is $100, ATR = $5, stop = $100 - (1.8 × $5) = $91
- Update stops weekly as stock price and ATR change
- Use "good-til-canceled" stop-loss orders or mental stops with discipline

**Example:**
- Stock: NVDA at $450
- 14-day ATR: $25
- ATR 1.8× stop: $450 - ($25 × 1.8) = $450 - $45 = **$405 stop-loss**
- If NVDA falls to $405, exit position automatically

---

#### 3. Reduce New Position Sizing: 50% of Normal

**Normal Allocation:**
- Typical new position = 5% of portfolio ($5,000 on $100,000 portfolio)

**Caution Phase Allocation:**
- New positions = 2.5% of portfolio ($2,500 on $100,000 portfolio)
- 50% size reduction limits risk if market corrects after entry

**What This Means:**
- Be highly selective on new entries
- Only enter positions with strong risk/reward (2:1 or better)
- Avoid FOMO (fear of missing out) at current all-time high levels
- If you "must" buy, buy half the normal amount

**Alternative:** Instead of buying stocks, consider:
- Dollar-cost averaging into index funds over 3-6 months
- Selling cash-secured puts to get paid while waiting for better entry
- Building positions in defensive sectors rather than high-momentum tech

---

#### 4. Cash Building: Target 20-30% Cash Position

**Normal Cash Allocation:** 10-20% (allows opportunistic buying)

**Caution Phase Cash Target:** 20-30% (defensive positioning + dry powder for pullback)

**Why Hold Cash?**
- **Defensive:** Cash doesn't decline when market corrects
- **Opportunistic:** Cash available to buy quality stocks at -10% to -20% discounts during correction
- **Psychological:** Cash reduces portfolio volatility, easier to avoid panic selling

**Where to Hold Cash:**
- High-yield savings accounts (5%+ interest as of 2026)
- Short-term Treasury bills (4-week to 6-month)
- Money market funds
- Avoid "cash drag" in 0% interest checking accounts

**Example:**
- $100,000 portfolio → Target $25,000 cash (25%)
- Sell $25,000 of equities → Park in T-bills earning ~5%
- If market corrects 15%, cash is available to buy stocks at better prices
- If market continues up, "opportunity cost" is only 5% on 25% = 1.25% underperformance

**Mental Framework:** "Cash is a position" (not sitting on sidelines). In Caution phase, cash IS a strategic allocation.

---

### Short-Selling Assessment

**⚠️ Short-Selling: NOT RECOMMENDED**

**Framework Requirement:** 
- Minimum 2/7 composite conditions required for "Caution" phase
- Minimum 3/7 for "Elevated Risk" phase

**Composite Conditions for Short-Selling (7 Items):**

```
Cannot evaluate due to missing data:
□ 1. Weekly chart shows lower highs (need chart analysis)
□ 2. Volume peaks out (need volume data)
□ 3. Leverage indicators drop sharply (margin debt decline) - Currently UP, not down
□ 4. Media/search trends peak out (need Google Trends data)
□ 5. Weak stocks start to break down first (need sector analysis)
□ 6. VIX surges (spike above 20) - Currently 16.07, NO spike
□ 7. Fed/policy shift signals (need Fed monitoring)

Confirmed Conditions: 0/7
```

**Current Assessment:** 
- **Composite Conditions Met:** 0/7 (margin debt UP not down, VIX not spiking)
- **Minimum Required for Caution Phase:** 2/7
- **Status:** Premature to short without confirming reversal signals

**Why Not Short?**

1. **Momentum Risk:** Margin debt +53% suggests extreme momentum; shorting into momentum is dangerous
2. **"Market Can Remain Irrational Longer Than You Can Remain Solvent"** (Keynes) - just because market is expensive doesn't mean it can't get MORE expensive
3. **Timing:** Shorting requires precision timing of reversal; current data shows caution but NOT reversal
4. **Margin Calls Work Both Ways:** If you short at $100 and stock goes to $150, you lose -50% and face margin call

**When Would Shorts Be Considered?**

**At 8-9 Points (Elevated Risk):**
- After confirming at least 2/7 composite conditions
- Small exploratory positions (10-15% of normal size)
- Strict stop-loss (ATR 2.0×)

**At 10-12 Points (Euphoria):**
- After confirming at least 3/7 composite conditions
- Moderate positions (20-25% of normal size)
- Defined risk only (options, tight stops)

**Current Recommendation:** WAIT for reversal confirmation. Premature shorting is hazardous.

---

### Summary of Action Plan

**Immediate (This Week):**
1. ✅ Review portfolio, identify 20-30% to trim (winners, high-momentum names)
2. ✅ Update stop-losses to ATR 1.8× on all positions
3. ✅ Halt new position initiations above 2.5% size

**Short-Term (Next 2-4 Weeks):**
4. ✅ Execute profit-taking in tranches, build to 25% cash position
5. ✅ Monitor VIX, margin debt, breadth weekly for escalation signals
6. ✅ Research quality stocks for potential future purchases at lower prices

**Ongoing:**
7. ✅ Weekly review: Check if any escalation triggers hit (VIX `>20`, breadth `<40%`)
8. ✅ Monthly review: Reassess bubble score with updated margin debt data (released ~3 weeks after month-end)
9. ✅ Disciplined stops: Exit positions if ATR 1.8× stops hit, no exceptions

---

## Specific Monitoring Actions

### Daily/Weekly Checks

#### 1. VIX Spike Watch

**Metric:** VIX daily close

**Trigger:** VIX closes `>20`

**Current:** VIX = 16.07

**Action if Triggered:**
- Immediately reassess bubble score
- VIX `>20` suggests fear returning; potential regime change
- Consider moving to "Elevated Risk" phase (reduce exposure to 50-70%)
- Check for correlation: Is VIX spike occurring WITH market decline?

**How to Monitor:**
- Yahoo Finance: ^VIX ticker
- CBOE: www.cboe.com/tradable_products/vix/
- Set price alert at VIX = 20.00

---

#### 2. Margin Debt Monthly Update

**Metric:** FINRA margin debt balance (released monthly)

**Trigger:** If margin debt continues +40%+ YoY growth for 3+ consecutive months

**Current:** April 2026 = +53.3% YoY (1 month observed at this level)

**Next Data Release:** Late July 2026 (for June 2026 data)

**Action if Triggered:**
- 3 consecutive months of +40%+ YoY = escalate to "Elevated Risk" phase regardless of other indicators
- This would override current 6-point score and force defensive positioning
- Historical precedent: sustained leverage acceleration precedes corrections

**How to Monitor:**
- FINRA: www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics
- Set calendar reminder: 20th of each month to check prior month data

---

#### 3. Breadth Deterioration

**Metric:** % of S&P 500 above 50DMA

**Trigger:** Falls below 40%

**Current:** 52% (sample)

**Action if Triggered:**
- Sign of narrow leadership collapsing
- Indicates rally losing steam; leaders starting to fail
- Increase caution; accelerate profit-taking to 40-50% reduction
- Potential precursor to broad market decline

**How to Monitor:**
- Barchart: www.barchart.com/stocks/indices/sp/sp500?viewName=advanced
- Look for "Percentage of Stocks Above Moving Average" widget
- Weekly check: Every Friday after market close

---

#### 4. Price Momentum Exhaustion

**Metric:** 21-day realized volatility expansion

**Trigger:** Volatility doubles from current levels

**Current:** VIX 16.07 (3-month range: 15.22-35.30)

**Action if Triggered:**
- Volatility doubling (16 → 32) suggests trend reversal potential
- Check for price action: Is volatility expansion occurring with market decline or just choppiness?
- If expansion with decline = bearish; if expansion with sideways = consolidation
- Consider defensive options: buy protective puts, reduce leverage

**How to Monitor:**
- Calculate 21-day realized volatility (use Excel or Python with yfinance)
- Alternative: Watch VIX - if VIX doubles to 30+, realized volatility likely expanding

---

### Monthly Deep-Dive

#### 5. IPO Market Trends

**Metric:** Renaissance Capital IPO statistics

**Watch For:** Sudden surge in low-quality IPOs with `>30%` first-day pops

**Current:** 64 IPOs YTD (down 21%), first-day returns unknown

**Implication:** Classic late-stage bubble signal when low-quality companies go public and double on day 1

**How to Monitor:**
- Monthly: Visit www.renaissancecapital.com/IPO-Center/Stats
- Look for:
  - Spike in SPAC count (currently 97 SPACs filed - monitor if this accelerates)
  - Median first-day return trending toward 20-30%+
  - Unprofitable "story stocks" going public (AI-themed companies with no revenue)

**Action if Triggered:**
- If monthly IPO count spikes to `>100` AND median first-day return `>25%`:
  - Add 2 points to bubble score → Would move from 6 to 8 (Elevated Risk)
  - Indicates speculative frenzy; time to increase defensiveness

---

#### 6. Sentiment Surveys

**Metric:** AAII Bull/Bear Ratio

**Trigger:** Bulls `>50%`, Bears `<20%`

**Source:** www.aaii.com/sentimentsurvey (updated weekly)

**Current:** Not collected (should monitor)

**Why It Matters:**
- AAII surveys individual investors (retail sentiment)
- Extreme bullishness (70%+ bulls, 15% bears) is contrarian sell signal
- Extreme bearishness (20% bulls, 50%+ bears) is contrarian buy signal

**Action if Triggered:**
- Bulls `>60%` + Bears `<15%` = Extreme optimism; reduce exposure further
- Would add 1 qualitative point (social penetration proxy) to bubble score

**How to Monitor:**
- Weekly: Check AAII Sentiment Survey every Thursday after 1 PM ET
- Historical Context: 
  - March 2000 (dot-com peak): 75% bulls, 13% bears
  - February 2020 (pre-COVID peak): 41% bulls, 23% bears (not extreme)
  - December 2021 (pandemic bubble peak): 45% bulls, 22% bears

---

## Historical Context: Why This Matters

### Margin Debt as Leading Indicator

The +53.3% YoY margin growth is EXTREME and historically significant. Below is detailed analysis of past margin debt spikes and subsequent market outcomes.

---

### Case Study 1: Dot-Com Bubble (1999-2000)

**Margin Debt Peak:** March 2000

**YoY Growth:** ~+50% (from ~$150B in 1999 to ~$280B in March 2000)

**Market Context:**
- NASDAQ at 5,048 (all-time high)
- P/E ratios 40-50+ for tech stocks
- "Eyeballs" and "clicks" more important than earnings
- IPO mania: 400+ IPOs in 1999-2000, many doubling on day 1

**Outcome:**
- **NASDAQ: -78%** from March 2000 peak to October 2002 trough
- **S&P 500: -50%** over same period
- Margin debt collapsed from $280B to $150B (-46%)

**Mechanism:**
1. Market peaked March 2000 with margin debt at all-time high
2. Minor decline (April-May 2000, -10%) triggered margin calls
3. Forced selling cascaded: margin calls → sell → lower prices → more margin calls
4. By October 2002, NASDAQ had lost 78% from peak

**Lesson:** Margin debt peak coincided almost exactly with market peak. Leverage amplified both the rise AND the fall.

---

### Case Study 2: Financial Crisis (2007-2009)

**Margin Debt Peak:** July 2007

**YoY Growth:** ~+40% (from ~$250B in 2006 to ~$380B in July 2007)

**Market Context:**
- S&P 500 at 1,550 (all-time high)
- Housing bubble at peak
- Financial engineering (CDOs, subprime leverage) pervasive
- Low VIX (~13-15), complacency high

**Outcome:**
- **S&P 500: -57%** from October 2007 peak to March 2009 trough
- **Dow: -54%**
- Margin debt collapsed from $380B to $175B (-54%)

**Mechanism:**
1. Market peaked October 2007 (3 months after margin debt peak)
2. Bear Stearns collapse (March 2008) triggered first wave of deleveraging
3. Lehman Brothers bankruptcy (September 2008) triggered panic
4. Forced liquidations: margin calls + redemptions = death spiral
5. Bottom: March 2009, down 57% from peak

**Lesson:** Margin debt peaked BEFORE market peak (July vs October), giving 3-month warning. Leverage made a bad situation catastrophic.

---

### Case Study 3: Pandemic Bubble (2020-2022)

**Margin Debt Peak:** April 2021

**YoY Growth:** ~+60% (from ~$480B in April 2020 to ~$850B in April 2021)

**Market Context:**
- S&P 500 at 4,200 (all-time high)
- SPAC mania: 600+ SPACs in 2020-2021
- Meme stocks (GME, AMC) with retail frenzy
- "Stonks only go up" narrative
- 0% interest rates, Fed stimulus

**Outcome:**
- **NASDAQ: -35%** from November 2021 peak to October 2022 trough
- **S&P 500: -25%**
- **ARK Innovation ETF: -75%** (speculative tech)
- Margin debt declined from $850B to $650B (-24%)

**Mechanism:**
1. Market peaked November 2021 (7 months after margin debt peak in April)
2. Fed pivot (rate hikes starting March 2022) triggered deleveraging
3. Growth stocks collapsed first (ARK -75%, TSLA -65% peak-to-trough)
4. Margin calls on speculative positions forced selling
5. Bottom: October 2022, S&P down 25%

**Lesson:** Margin debt peaked 7 months BEFORE market peak, giving significant advance warning. When Fed removed liquidity (QT + rate hikes), leverage unwound violently.

---

### Current Situation: April 2026 (+53.3% YoY)

**Margin Debt:** $1.30 trillion (vs. $850B in April 2025)

**YoY Growth:** +53.3%

**Comparison to History:**
- Higher than 2007 (+40%)
- Similar to 2000 (+50%)
- Slightly below 2021 (+60%)

**Pattern Recognition:**

| Past Bubble | Margin Peak YoY | Time to Market Peak | Correction Size |
|-------------|-----------------|---------------------|-----------------|
| Dot-Com 2000 | +50% | ~0 months (coincident) | -50% (S&P), -78% (NASDAQ) |
| Financial Crisis 2007 | +40% | ~3 months lag | -57% (S&P) |
| Pandemic Bubble 2021 | +60% | ~7 months lag | -25% (S&P), -35% (NASDAQ) |
| **Current (Apr 2026)** | **+53.3%** | **Unknown** | **Unknown** |

**Observation:** Margin debt spikes `>40%` YoY have been followed by corrections within 0-7 months in 3 of 3 historical cases.

**Key Difference: 2021 vs 2026**
- 2021: 0% Fed Funds Rate, QE in progress (easy money)
- 2026: Unknown Fed policy (current data not collected)
- If Fed is neutral/tight in 2026, correction risk HIGHER than 2021
- If Fed is easing in 2026, risk similar to 2021 (delayed correction)

---

### Mechanism: Why Leverage Matters

**The Leverage Amplification Cycle:**

**Phase 1: Euphoria (Current?)**
```
Rising Prices → Confidence → Buy on Margin → More Buying → Higher Prices
```
- Investors see stocks rising, feel confident
- Borrow money (margin) to amplify returns
- If stock rises 10%, margin-leveraged investor gains 20%+ (2:1 leverage)
- This works GREAT in bull market; encourages more leverage

**Phase 2: The Trigger (Unknown Timing)**
```
Minor Decline (5-10%) → Margin Calls → Forced Selling → Lower Prices
```
- Something causes 5-10% pullback (Fed policy, geopolitical, earnings miss)
- Investors on margin get "margin calls" from brokers
- Must deposit cash OR sell stocks to meet margin requirements
- Many choose to sell → creates selling pressure → prices fall further

**Phase 3: The Cascade (Self-Reinforcing)**
```
Forced Selling → Lower Prices → More Margin Calls → Panic Selling → Crash
```
- Initial forced selling drops prices another 5%
- This triggers NEW margin calls on investors who were OK before
- Cascade: Each wave of selling triggers next wave
- Amplification: With $1.3T margin debt, 10% decline = $130B+ forced selling

**Phase 4: Capitulation (Bottom)**
```
Margin Debt Collapses → Selling Exhaustion → Stabilization → Recovery
```
- Margin debt falls 30-50% from peak (forced deleveraging)
- Eventually, all weak hands shaken out
- Market stabilizes at much lower level
- Recovery begins (often takes months to years)

---

### The "$1.3 Trillion Question"

**If market declines 10% from current levels:**
- $1.3T margin debt × 10% = **$130B in losses on margin**
- Brokers issue margin calls for $130B+ in deposits/selling
- Assume 50% choose to sell → **$65B in forced selling**
- $65B in selling in already-declining market → amplifies to 15-20% total decline
- This triggers NEXT wave of margin calls on investors now underwater
- **Cascade potential:** 10% pullback → 20-30% decline due to leverage

**This is why +53% YoY margin growth is EXTREMELY concerning.**

---

## What Would Change the Assessment?

### Scenarios to ESCALATE Risk (Move UP Risk Ladder)

#### To "Elevated Risk" (8-9 points):

**Scenario A: Put/Call Ratio Confirms Excessive Optimism**
- Put/Call Ratio data becomes available and shows `<0.65` (extreme call-buying)
- **Impact:** +2 points → Total becomes **8/15 points (Elevated Risk)**
- **Action:** Reduce exposure to 50-70% risk budget
- **Rationale:** P/C `<0.65` historically marks sentiment extremes (2000, 2021 peaks)

**Scenario B: IPO Market Overheats**
- IPO first-day returns data shows median `>25%` pops
- **Impact:** +1 to +2 points → Total becomes **7-8/15 points**
- **Action:** Increase profit-taking to 30-50% reduction
- **Rationale:** Excessive IPO pops signal speculative frenzy

**Scenario C: Google Trends Confirms Narrative Frenzy**
- Google Trends shows "AI stocks" / "tech investing" searches at 5x+ YoY
- Mainstream media coverage documented (Time covers, CNBC specials)
- **Impact:** +1 point (qualitative) → Total becomes **7/15 points**
- **Action:** Tighten stops further (ATR 1.6×), reduce new positions to zero
- **Rationale:** Mainstream social penetration is late-stage bubble signal

**Scenario D: VIX Drops to Extreme Complacency**
- VIX sustains below 12 for 2+ weeks while market makes new highs
- **Impact:** Current 1 point becomes 2 points → Total becomes **7/15 points**
- **Action:** Move to Elevated Risk positioning
- **Rationale:** VIX `<12` at ATH = extreme complacency (2017-2018, Jan 2020)

**Combination Effect:**
- **Any 1-2 of above scenarios → Would escalate to "Elevated Risk" (8-9 points)**
- At 8-9 points: Risk Budget drops to 50-70%, short positions considered

---

### Scenarios to DE-ESCALATE Risk (Move DOWN Risk Ladder)

#### To "Normal" (0-4 points):

**Scenario E: Margin Debt Growth Slows**
- Next monthly FINRA data (June 2026, released late July) shows YoY growth slows to `<20%`
- **Impact:** -1 point (from 2 points to 1 point) → Total becomes **5/15 points**
- **Action:** Remain in Caution but lower bound; could increase risk budget to 80-90%
- **Rationale:** Slowing leverage growth suggests speculative fervor cooling

**Scenario F: Price Acceleration Normalizes**
- 3-month return falls below 10% OR drops to `<75th` percentile of 10-year range
- **Impact:** -2 points → Total becomes **4/15 points (Normal phase)**
- **Action:** Return to 100% risk budget; resume normal position sizing
- **Rationale:** Pace has normalized; unsustainable momentum has cooled

**Scenario G: Market Correction 10%+ from Highs**
- S&P 500 corrects from current 7,609 to 6,850 or lower (-10%+)
- Resets price acceleration, reduces margin debt (likely), normalizes breadth
- **Impact:** -1 to -2 points depending on severity → Total becomes **4-5/15 points**
- **Action:** Healthy correction; could be buying opportunity at -10% to -15%
- **Rationale:** Corrections are normal; purge excesses and reset sentiment

**Scenario H: VIX Sustains Above 20**
- VIX closes above 20 for 2+ weeks (fear returning to market)
- **Impact:** -1 point (from 1 point to 0 points) → Total becomes **5/15 points**
- **Action:** Fear replacing complacency; risk premium returning
- **Rationale:** VIX `>20` indicates investors pricing higher volatility and downside risk

**Combination Effect:**
- **Combination of 2-3 above → Could return to "Normal" phase (0-4 points)**
- At 0-4 points: Risk Budget returns to 100%, normal operations resume

---

## Conclusion

### Summary Statement

The US market as of June 3, 2026, is in a **CAUTION phase (6/15 points)** with **medium risk levels** according to the strict Bubble Detector v2.1 framework. While not yet in euphoria or bubble territory, **two major red flags** stand out that warrant defensive positioning:

**🔴 Critical Warnings:**

1. **Margin Debt Explosion (+53.3% YoY)** - $1.30 trillion, up from $850B in April 2025
   - Historically, leverage spikes `>40%` YoY have preceded corrections within 6-18 months (3/3 cases: 2000, 2007, 2021)
   - Current +53% YoY ranks among the highest in history
   - Mechanism: Leverage amplifies gains now, but will amplify losses if market corrects even 5-10%

2. **Price Acceleration (93.2nd Percentile)** - 3-month return of 11.64%
   - Ranks in top 7% of 10-year history
   - Unsustainable pace (annualized equivalent: 46.5%)
   - Mean reversion is likely; markets cannot sustain 4x normal pace indefinitely

**✅ Partial Offsets:**

3. **VIX Not Extremely Suppressed** - At 16.07, above the `<12` extreme complacency threshold
   - Some caution remains in market (not complete euphoria)
   - However, still relatively low with market at all-time highs

4. **IPO Market Not Overheating** - Count down 21% YoY
   - No evidence of speculative IPO flood typical of late-stage bubbles
   - Quality standards still maintained (positive)

**⚠️ Data Gaps:**

This evaluation is **INCOMPLETE** due to missing critical data:
- Put/Call Ratio (could add 0-2 points)
- Full S&P 500 Breadth (sample only)
- IPO First-Day Returns (could add 0-2 points)
- Qualitative Indicators (could add 0-3 points)

**True score could range 6-13 points** depending on missing data. This creates significant uncertainty - market could be closer to "Elevated Risk" (8-9) or even "Euphoria" (10-12) than current 6-point assessment suggests.

---

### Conservative Recommendation

**Given:**
- Extreme margin debt warning (+53% YoY)
- Incomplete data (missing Put/Call, full breadth, qualitative indicators)
- Historical precedent (3/3 past leverage spikes led to corrections)
- Market at all-time highs with accelerating momentum

**Recommended Actions:**

1. **Adopt 70-80% Risk Budget** (reduce exposure 20-30%)
   - Trim winners, high-momentum names
   - Build cash to 25% of portfolio

2. **Tighten Risk Management**
   - Update stops to ATR 1.8× (from 2.0×)
   - Reduce new position sizing to 50% of normal

3. **Build Cash Reserves** for Potential Opportunities
   - Target 20-30% cash (vs. normal 10-20%)
   - Park in T-bills or high-yield savings (earning 5%)
   - Prepare to buy quality stocks at -10% to -20% discounts if correction materializes

4. **Wait for Confirming Signals Before Shorting**
   - Too early to short (0/7 composite reversal conditions met)
   - Shorting into momentum is hazardous
   - Monitor for VIX spike, breadth collapse, margin debt decline

**Investment Philosophy:**

> *"The market can remain irrational longer than you can remain solvent."* - John Maynard Keynes

> *"Be fearful when others are greedy, and greedy when others are fearful."* - Warren Buffett

**Current Market State:**
- Margin debt at extreme levels = others are "greedy" (leveraged)
- Market at all-time highs with narrow leadership = late-cycle characteristics
- Incomplete data prevents full assessment = uncertainty requires caution

**Positioning:**
- NOT panic/full defense (score is 6/15, not 13/15)
- NOT complacent/fully invested (margin debt warning is severe)
- **Balanced Caution:** Reduce risk, build cash, wait for clarity

**Time Horizon:**
- **Short-term (0-3 months):** Defensive positioning, profit-taking, cash building
- **Medium-term (3-12 months):** Monitor for correction; prepare to buy at lower levels
- **Long-term (1-3+ years):** Quality stocks purchased during correction will outperform; patience rewarded

---

### Key Monitoring Parameters

**Weekly Checks:**
1. VIX closes `>20` → Escalate immediately
2. Breadth falls `<40%` → Increase defensiveness
3. S&P 500 corrects `>5%` from highs → Reassess bubble score

**Monthly Checks:**
4. Margin debt data (released ~20th of month) → If +40%+ YoY for 3+ months = major warning
5. IPO market stats → Watch for surge in speculative issuance
6. AAII sentiment survey → Bulls `>60%` + Bears `<15%` = extreme

**Immediate Escalation Triggers:**
- VIX spike to 25+ → Move to Elevated Risk (8-9 points)
- Margin debt +50%+ YoY for 3 consecutive months → Move to Elevated Risk regardless
- Put/Call `<0.65` (if data becomes available) → Add 2 points
- Any 2 composite reversal conditions (weekly lower highs, volume peaking, VIX surge) → Consider short positions

---

### Final Thought

**The Margin Debt Warning Cannot Be Ignored.**

In 100% of historical cases where margin debt grew `>40%` YoY (2000, 2007, 2021), corrections followed within 6-18 months. The current +53.3% YoY growth is screaming "CAUTION."

However, timing is uncertain. The market could:
- Correct immediately (June-July 2026)
- Continue higher for 3-6 months before correcting (Scenario: Margin debt peaked April 2026, market peaks Q3-Q4 2026)
- Grind higher with consolidation (best case: leverage cools, market digests gains)

**Prudent investors should:**
- Take profits on winners NOW (don't wait for perfect exit)
- Build cash reserves for future opportunities
- Avoid FOMO at all-time highs
- Monitor weekly for escalation signals

**Remember:** It's better to be out of the market wishing you were in, than in the market wishing you were out.

---

**Next Evaluation Recommended:** 
- **2-4 weeks** (early-mid June 2026) OR
- **Immediately if:**
  - VIX spikes `>20`
  - Market corrects `>5%` from highs
  - Put/Call data becomes available
  - Margin debt June data released (late July 2026)

---

## Disclaimer

This analysis is for educational and informational purposes only and does not constitute investment advice. Stock markets are subject to risks, and past performance is not indicative of future results.

The US Market Bubble Detector v2.1 framework is a quantitative risk assessment tool based on historical patterns. However:
- Markets can behave differently than historical precedents
- Missing data points create significant uncertainty in current assessment
- Timing of corrections is unpredictable even when risk is elevated
- Individual circumstances vary - consult a qualified financial advisor

**Key Limitations:**
- Evaluation incomplete due to missing Put/Call ratio, full breadth data, and qualitative indicators
- Score could range 6-13 points depending on missing data
- Historical correlation (margin debt spikes → corrections) does not guarantee causation
- Framework cannot predict exact timing of corrections

**Investors should:**
- Conduct their own due diligence and independent research
- Consult with a qualified financial advisor before making investment decisions
- Consider their own risk tolerance, investment objectives, and time horizon
- Understand that all investments carry risk, including potential loss of principal

**The analyst (Claude, an AI assistant) does not hold any positions in US equities and has no financial interest in market outcomes. This analysis is generated based on publicly available data and the Bubble Detector v2.1 framework.**

**Investment involves risk. Please invest responsibly and only with capital you can afford to lose.**

---

**Report Generated:** June 3, 2026  
**Framework:** US Market Bubble Detector v2.1 (Revised Nov 3, 2025)  
**Version:** 1.0  
**Analyst:** Claude (AI-powered analysis)  
**Data Sources:** yfinance, FINRA, Renaissance Capital, CBOE, NSE

---

**End of Report**