---
slug: /Interactive Brokers (IBKR)
title: Interactive Brokers (IBKR)
description: Interactive Brokers (IBKR)
created: 2026-06-24
updated: 2026-09-01
---

- IBKR strongly discourages third-party deposits
- [Why Interactive Brokers India \| Interactive Brokers India Pvt. Ltd.](https://www.interactivebrokers.co.in/en/whyib/overview-why-ibkr-india.php)
- [Commission Free ETFs \| Interactive Brokers India Pvt. Ltd.](https://www.interactivebrokers.co.in/en/trading/commission-free-etfs-mkt.php)
- [Mutual Funds Outside the US \| Interactive Brokers India Pvt. Ltd.](https://www.interactivebrokers.co.in/en/pricing/commissions-mutual-funds-non-us.php?re=europe)
- See also: [International ETFs (Equity)](economics/investment-products/equity-funds/international-etfs.md) and [International Debt ETFs (IBKR + UCITS)](economics/investment-products/debt-funds/international-debt-etfs-ibkr.md)
- Selling a bond/ETF on LSE and immediately buying a stock like AMZN/GOOG on NASDAQ: on a **margin account** this is instant (buying power isn't gated by settlement date, regardless of exchange); on a **cash account** you must wait for T+1 (US)/T+2 (LSE) settlement or risk a free-riding violation — see [Settlement: Selling on LSE/NASDAQ and Immediately Buying Stocks](economics/investment-products/debt-funds/international-debt-etfs-ibkr.md#settlement-selling-on-lsenasdaq-and-immediately-buying-stocks-on-ibkr)
- [Commissions Mutual Funds \| Interactive Brokers India Pvt. Ltd.](https://www.interactivebrokers.co.in/en/pricing/commissions-mutual-funds.php)
- [Interest Rates \| Interactive Brokers India Pvt. Ltd.](https://www.interactivebrokers.co.in/en/accounts/fees/pricing-interest-rates.php?gclid=CjwKCAiAzPy8BhBoEiwAbnM9Ox8c9hBoKsjM1OcUHPlMxv8me31dVnUy73jfnS_kV7ZpssPb_9aBJxoC6_4QAvD_BwE)
- [Can an Indian resident open an account on Interactive Brokers for trading globally? - Quora](https://www.quora.com/Can-an-Indian-resident-open-an-account-on-Interactive-Brokers-for-trading-globally)
- [Interactive brokers pricing for Indians? : r/IndianStreetBets](https://www.reddit.com/r/IndianStreetBets/comments/1654qk2/interactive_brokers_pricing_for_indians/)
- [Anybody using interactive brokers for indian exchanges? : r/IndianStreetBets](https://www.reddit.com/r/IndianStreetBets/comments/1afn0a6/anybody_using_interactive_brokers_for_indian/)
- [IBKR Trading Platforms \| Interactive Brokers LLC](https://www.interactivebrokers.com/en/trading/trading-platforms.php)
- [Wire Transfer from ETrade to IBKR, Wise, or Revolut \| by Eski's data stories \| Medium](https://alexeskinasy.medium.com/wire-transfer-from-etrade-to-ibkr-wise-or-revolut-c080f5456b8b)

## IMP Settings

- Last size extra decimal
- Dark
- Log out after inactivity - 60 Mins
- Wide Layout
- Pricing plan change to Tiered instead of fixed
	- Profile - Settings - IBKR pricing plan - Tiered

## IBKR Pricing Plan

1. Tiered - Transparent Volume-Tiered Pricing
2. Fixed - Fixed Rate Pricing ($1 per trade in US Stocks/ETFs, $4 in LSE UCITS stocks)

| Market & Asset                   | Your Current Fixed Fee | Estimated Tiered Fee | Savings per Trade |
| -------------------------------- | ---------------------- | -------------------- | ----------------- |
| **LSE (VWRA)**                   | **$4.00**              | **~$1.90 - $2.00**   | ~$2.00            |
| **US Stocks (AMZN, NFLX, etc.)** | **$1.00**              | **$0.35 - $0.40**    | ~$0.60            |

- [Commissions & Fees \| Interactive Brokers India Pvt. Ltd.](https://www.interactivebrokers.co.in/en/pricing/commissions-home.php?re=amer)
- Charges - 1 Dollar per trade
- Fees are on top, same currency as the stock you bought. Run a daily activity report next day for more details.
- **Stocks (ETFs, Warrants)** - **Tiered** (Requests submitted on a business day prior to 16:00 ET will be processed for the next business day.)

Interactive Brokers (IBKR) offers two primary commission structures: **Fixed** and **Tiered**. Fixed pricing provides a simple, all-inclusive rate per share or a percentage of trade value, such as **$0.005 per US share** with a **$1.00 minimum**. Tiered pricing is more complex as it adds third-party exchange, regulatory, and clearing fees to a lower base commission, which can drop to **$0.0005 per share** for high-volume US traders. Generally, Tiered pricing is more economical for smaller trade sizes—typically those below **$15,000 USD** for US stocks or **$7,200 USD** for London Stock Exchange (LSE) ETFs. In contrast, Fixed pricing becomes more attractive for high-value orders (e.g., above $25,000 USD) because it caps third-party costs that might otherwise scale with a Tiered plan.

When you buy US stock frequently in the **$1,000 to $3,500 range**, switching to **Tiered pricing** is likely to save you money. Your trades currently incur a $1.00 minimum fee on the Fixed plan, while on a Tiered plan, smaller US trades often cost as little as **$0.35** after accounting for minor pass-through fees. Additionally, for your **VWRA** purchase on the LSE, which currently cost you **$4.00**, a Tiered plan would typically lower that cost to around **$1.70 to $2.00**

## Margin Account Cost

Holding a margin account itself is free — IBKR doesn't charge extra just for the account type. The cost only shows up if you actually **borrow** (carry a negative/debit cash balance):

- **Regulatory minimum:** FINRA requires $2,000 net equity to use margin at all.
- **Interest only on the debit balance:** margin interest = benchmark rate (Fed Funds Effective Rate) + a tiered spread that shrinks as the borrowed amount grows. As of mid-2026, USD rates on IBKR Pro start around **5-6%** for the first ~$100K borrowed, stepping down toward `<1%` above ~$200M (with a ~0.75% floor). IBKR Lite's spread runs about 1% higher than Pro at every tier.
- **Accrual:** interest accrues daily, posts on the 3rd business day of the following month.
- **Reg T / margin call risk:** if account equity falls below the maintenance margin requirement, IBKR can force-liquidate positions.
- **Pattern Day Trader (PDT) rule:** requires $25K net equity only if you day-trade the **same security** 4+ times in 5 business days in a margin account. Selling one stock and buying a *different* one doesn't count as a day trade, so it never touches this rule.

**Worked example:** sell $100 of stock A, then 10 minutes later buy $100 of a different stock B — **no margin interest is charged**, because your net cash balance never goes negative (you're reallocating cash you already have, not borrowing extra). Margin interest is a function of your debit balance, not of settlement timing or which exchange each leg traded on. Only the normal per-trade commission applies to each leg (see [IBKR Pricing Plan](#ibkr-pricing-plan) above). Interest would only kick in if the new purchase were *larger* than the sale proceeds (e.g. sell $100, buy $150 — interest accrues on the extra $50 until covered).

- [Margin Trading \| Interactive Brokers LLC](https://www.interactivebrokers.com/en/trading/margin.php)
- [Margin Rates and Financing \| Interactive Brokers LLC](https://www.interactivebrokers.com/en/trading/margin-rates.php)

## Stock Yield Enhancement Program (SYEP)

The **Stock Yield Enhancement Program (SYEP)** is a fully automated passive income program by Interactive Brokers (IBKR) that lets you monetize your long-term portfolio. By enrolling, you permit IBKR to lend your fully-paid shares of US stocks or LSE ETFs to short-sellers who pay an interest rate determined by market demand. This interest is split 50/50 between you and IBKR, accumulating daily and paying out monthly without restricting your portfolio's liquidity. You retain full economic ownership, meaning you can sell your shares at any time, which automatically terminates the loan.

The primary operational catch involves dividend payments and investor protection. When shares are lent out over a dividend record date, you receive a **"Payment in Lieu of Dividend"** instead of a standard dividend. For an Indian investor, these manufactured payments can complicate tax filings, as they may not qualify for standard treaty benefits or Foreign Tax Credits (FTC) under the US-India DTAA. Additionally, lent-out shares temporarily lose SEC-mandated SIPC insurance. However, IBKR completely mitigates this default risk by securing your loan with **102% USD cash collateral** marked-to-market daily at a third-party custody bank, meaning **you cannot lose your actual shares**.

Eligibility is strictly determined by account type and net equity. To qualify, your IBKR account must either be a **Margin Account** (of any size) or a **Cash Account with a net equity value of at least $50,000 USD**. There are no minimum share quantities required per ticker. In terms of actual profitability, large-cap growth stocks like **GOOG** and **AMZN**, alongside highly liquid ETFs like **VWRA**, are in plentiful supply; therefore, borrow demand is low, and your yield will likely be minimal (often under 0.5% annually). The program is best viewed as a risk-managed, zero-effort tool to optimize an accumulating or non-dividend portfolio.

### What is Stock Yield Enhancement Program

The **Stock Yield Enhancement Program (SYEP)** is a program offered by [Interactive Brokers (IBKR)](https://www.interactivebrokers.com/en/home.php) that allows you to earn extra passive income on shares you already own by lending them out to other traders.

When you enroll, IBKR automatically manages the lending process behind the scenes, and you split the interest earned on those borrowed shares 50/50 with IBKR.

### How It Works

- **The Loan:** Short-sellers look to borrow shares of companies or ETFs (like **NFLX**, **GOOG**, or **AMZN**) to bet against them.
- **The Collateral:** To protect you, the borrower must post cash collateral (equal to 102% of your stock's value) into an account managed for your safety.
- **The Income:** You earn daily interest on that cash collateral, which is paid directly into your IBKR account as monthly cash dividends.
- **The Flexibility:** You can still sell your shares at any time without restriction or penalty. The loan automatically terminates when you sell.

### Key Benefits

- **Completely Passive:** IBKR handles all the matching, borrowing, and collateral management automatically.
- **No Minimums:** There are no restrictions on how many shares you must own to participate.
- **Enhances Yield:** It turns long-term, idle stock holdings into an active income stream.

### Hidden Costs & Blind Spots

While SYEP is a low-risk way to boost returns, keep these critical nuances in mind before enrolling:

- **Cash-in-Lieu of Dividends:** If your lent-out stock pays a dividend, you will receive a "Payment in Lieu of Dividend" instead. For US citizens, this is taxed at normal income rates rather than the lower qualified dividend rate. *Note: Since you own non-dividend tech stocks like GOOG/AMZN or Irish-domiciled accumulating ETFs like **VWRA** (which don't pay out cash dividends), this tax trap will likely have zero impact on your current holdings.*
- **No SIPC Protection:** While your shares are lent out, they are not covered by SIPC investor protection. Instead, IBKR mitigates this risk by securing your loan with cash collateral.
- **Voting Rights:** You temporarily forfeit your proxy voting rights on the shares while they are actively being lent out to another trader.

### Is There Any Risk of Losing the Shares Itself?

**No, you cannot lose your shares.**

Even if the borrower defaults or goes bankrupt, your shares are fully protected.

1. **102% Collateralization:** IBKR forces the borrower to put up USD cash collateral equal to **102% of your shares' market value**.
2. **Daily Rebalancing:** This collateral is marked-to-market daily. If the stock price rises, the borrower must deposit more cash immediately.
3. **The Fail-Safe:** If the borrower defaults, IBKR uses that cash collateral to buy back your shares in the open market and return them to your account.

### The Cons for an Indian Investor

While you cannot lose your shares, there are distinct drawbacks you must consider:

- **The India Tax Trap (Cash-in-Lieu):** If a US stock pays a dividend while it is lent out, you will receive a **"Payment in Lieu of Dividend."** In India, standard US dividends face a flat 25% withholding tax. However, "Payments in Lieu" may not qualify under the US-India Double Taxation Avoidance Agreement (DTAA), meaning you could face higher tax complexity or lose the ability to claim Foreign Tax Credit (FTC) on that specific payment.
    - *Why this matters to you:* For your Irish-domiciled ETF (**VWRA**), this is a **non-issue** because it is an *accumulating* ETF that does not distribute cash dividends. For non-dividend US tech stocks like **GOOG** and **AMZN**, this also has no impact. It will only affect dividend-paying assets.
- **Loss of SIPC Insurance:** While your shares are lent out, they are removed from standard SIPC investor protection (which covers up to $500,000 if IBKR fails). Instead, your security shifts entirely to the **USD cash collateral** held at a third-party bank.
- **Low Yield for Popular Stocks:** The income is based on market demand. Highly popular, large-cap stocks like **AMZN**, **GOOG**, and high-volume ETFs like **VWRA** are easy to find in the market. Because demand to borrow them is relatively low, your yield will likely be minimal (often less than 0.1% to 1% annually).
- **Forfeiture of Voting Rights:** You cannot vote in corporate actions while your shares are on loan.

### Are There Any Minimum Amounts?

- **Account Minimum:** To be eligible for SYEP, your IBKR account must be a **Margin Account** OR a Cash Account with an equity value of at least **$50,000 USD**.
- **Share Minimum:** There is **no minimum** number of shares required. Once your account is enrolled, even a single share can be automatically picked up and lent out if there is market demand.

### Summary Action Plan

- **Enroll If:** You are holding **VWRA**, **AMZN**, and **GOOG** for the long term. Since these do not pay dividends, you get free passive income with zero tax complications.
- **Avoid/Monitor If:** You start buying high-dividend US stocks or ETFs, as the "Payment in Lieu" tax reporting can become a major headache on your Indian ITR.

## Platforms

- Client Portal - Web
- IBKR Desktop - DesktopNew
- IBKR Mobile - Mobile
- Trader Workstation (TWS) - Desktop (Mosaic)
	- [TWS Mosaic Highlights \| Interactive Brokers LLC](https://www.interactivebrokers.com/en/?f=%2Fen%2Fsoftware%2Ftws_mosaic_highlights.php)
	- Get direct access to TWS trading, order, live quoting, technical research and analysis tools all in a single window.
	- Customize Mosaic's workspace to suit your own trading needs by snapping your favorite TWS trading tools together.
	- Use the Portfolio window for at-a-glance account summary and position detail, the Order Entry window to formulate and transmit orders instantly, and the Order Monitor to track and modify live orders and review filled and cancelled orders.
	- Create sophisticated attached orders directly within the Mosaic Orders panel, including bracket, stop limit, profit taker, One Cancels Other, beta, fx order and pair hedging orders.
	- Add multiple Watchlists to view groups of contracts and create customized Market Scanners.
	- Add gradients, lines and bars to Mosaic Market Scanners for easy-to-spot trends and patterns.
	- View interactive, customizable charts that support studies and trendlines.
	- View real-time streaming general news that you can filter by subject, as well as real-time streaming news for a selected underlying.
	- Subscribe to the Interactive Brokers Information System (IBIS) to enhance Mosaic with premium newswire and analyst research subscriptions from such tier-one providers as Reuters, Dow Jones, Morningstar and Zacks.
- IBKR GlobalTrader - Mobile
- IBKR APIs - Desktop
- [Mutual Fund/ETF Replicator \| Interactive Brokers LLC](https://www.interactivebrokers.com/en/trading/mutual-fund-etf-replicator.php)
