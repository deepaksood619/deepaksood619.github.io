# On-Chain Analytics

On-chain metrics turn blockchain-based transaction data into actionable crypto market insights.

- [CoinMarketCap vs. CoinGecko: Which is BEST?? 🤔 - YouTube](https://www.youtube.com/watch?v=NEBc5KYfE5Q)
- [On-Chain Analysis: How to Turn Blockchain Data Into Crypto Market Insights](https://www.coindesk.com/learn/what-is-crypto-on-chain-analysis-and-how-do-you-use-it/)
- [Fees - DefiLlama](https://defillama.com/fees)
- [Cake DeFi - DefiLlama](https://defillama.com/cex/cake-defi)
- [Nansen - Crypto, DeFi & NFT Analytics](https://www.nansen.ai/)
- <https://studio.glassnode.com/metrics> (Analytics)
- <https://messari.io> (Analytics)- **Technical Analysis**
- [Dune | Crypto data dashboards](https://dune.com/home)
- Total Market Cap
- 24 hours volume
- BTC Dominance (if BTC dominance decreases, alt coins take lead)
- On-chain metrics
- [Innovative Visuals for Blockchain Data | Bubblemaps](https://bubblemaps.io/)

## Chain Coin Analytics

### Coin Lifespan

Lifespan is one of the most powerful tool in on-chain analysis, and is a concept that is unique to blockchains. The transparency of the Bitcoin ledger allows us to Timestamp each UTXO, which allows us to calculate the Lifespan of each coin.

**Lifespan metrics allow us to assess:**

- The time since a coin was last moved (investor holding time).
- How much time is 'destroyed' when a coin is spent (divestment trends by longer-term investors).
- Volumes of coin supply in particular age bands (market impact of accumulation and distribution).

### Coindays Destroyed (CDD)

If 0.1 BTC was acquired 100 days ago, it will have accumulated 100 x 0.1 = 10 Coindays. When this Bitcoin is next spent, the coin days stored are considered destroyed, measured as Coindays Destroyed (CDD).

The CDD metric measures the total volume of Coin Days Destroyed across all Bitcoin spent on any given day. This gives insight into the lifespan of the coins being spent, and a view on the macro sentiment of Bitcoin's longer-term investors.

- **High CDD values ↗️** suggest long term investors are spending coins to realize profits, taking advantage of market strength, or have reduced conviction to hold the asset.
- **Low CDD values ↘️** occur when day-to-day network traffic dominates network traffic, older coins remain dormant, and conviction to hold the asset is high. Periods of reduced interest in the asset (such as bearish markets) tend to lead to less on-chain activity and thus lower indicator values.

#### CDD-90 and Coin Years Destroyed (CYD)

The two metrics below present macro scale measures of the volume of coindays destroyed.

- **CDD-90** presents the 90-day sum of CDD.
- **[Coin Years Destroyed (CYD)](https://academy.glassnode.com/indicators/coin-days-destroyed/cyd-coin-years-destroyed)** presents the 365-day sum of CDD.

### Binary CDD

Binary Coin Days Destroyed (Binary CDD) is a derivative of the Supply-Adjusted CDD metric. It considers whether the volume of CDD was more, or less, than the long-term historical average. This provides a view as to whether the spending behaviour of large volumes and/or old coins is significant relative to historical data.

Binary CDD will return either a 1 or a 0:

- **Returns 1** when measured CDD is greater than the long term average.
- **Returns 0** when measured CDD is less than the long term average.

Here we have applied a 7-day SMA to identify trends in investor spedning behavior. Higher values indicate longer-term Bitcoin holders are spending their coins at a greater rate than the long-term average.

### Dormancy

The Average Coin Dormancy (Dormancy) metric assesses the average amount of Coin Days Destroyed per unit Bitcoin transacted (i.e. Coindays Destroyed per BTC).

Thus the metric measured in units of time (days) and represents the average number of days that each spent coin was dormant prior to being transacted.

- **High dormancy values ↗️** mean that, on average, coins spent that day had been held for longer periods of time in an illiquid state and may be being spent back into liquid circulation.

- **Low dormancy values ↘️** mean the coins being spent that day have are relatively young, signalling that older coins are generally remaining unspent, and on-chain volume is characteristic of more day-to-day traffic.

### Average Lifespan per Coin

This presents the average Lifespan held per coin (the age of the average HODL wave). It is based upon the following principles:

- Each unit of coin in the supply creates an equivalent volume of coindays per day.
- Some portion of the coin supply is spent each day, destroying the accumulated coindays (called Coindays Destroyed, CDD)
- The remaining non-destroyed coindays can be aggregated, and then divided by the Circulating Supply to obtain the average Lifespan per coin.

### Metrics

- 🟠 **Total Lifespan Destroyed** = Coindays Destroyed (CDD)
- 🔵 **Total Lifespan Created** = Circulating Supply
- 🔴 **Average Lifespan per Coin (days)**

Uptrends in the Average Lifespan metric indicate there is more HODLing taking place than Lifespan destruction. Downtrends indicate that longer-term investors are spending their coins in larger volumes, with steeper downtrends indicating more spent volume.

### Liveliness

Liveliness defines the balance between aggregate Coin Day Destruction and Coin Day Creation. This provides a macro scale appreciation of the market preference for HODLing, or distributional behaviour.

- **Uptrends ↗️** suggests that a distribution regime is occurring. This indicates that the rate of Coin Day Destruction is outpacing Coin Day Creation, and indicates longer-term investors are spending their coins.

- **Downtrends ↘️** suggests that an accumulation regime is occurring. This indicates that the rate of Coin Day Creation is outpacing Coin Day Destruction, and thus investor accumulation and colder storage is dominant.

- **Steepness of the Trend** provides a gauge on the relative magnitude and aggressiveness of the market preference described in the points above.

### HODL Waves

The HODL Waves present a macro view of the age distribution of the coin supply, and provides insight into changes in investor holding and spending patterns. The metric bundles the coin supply into colored age bands, with the thickness proportional to the percent of total coin supply represented.

- **Warmer Colors** represent younger coins (days to months) which have been recently transacted. Larger volumes of young coins tend to indicate a net divestment by longer-term investors, and increasing saturation by newer investors.

- **Cooler Colors** represent older coins which have not transacted for several months to years. Larger volumes of old coins tend to indicate a growing supply dominance held by longer-term investors, and decreasing saturation of newer investors.

### Spent Volume Age Bands (SVAB)

Where HODL Waves present the Unspent coin supply by age, the SVAB metric presents the age breakdown of Spent coins each day. SVAB bundles spent coins into age bands and presents them in proportion of total coins moved.

SVAB is a useful tool for identifying periods of time or trends where on-chain transactions are dominated by younger, or older coins. The metric demonstrates the age of coins that are moving, and thereby highlights whether market movements are influenced by long-term HODLers or newer market participants.

- **Cooler colors** will fill a larger portion of the chart area on days where more old coins were spent.
- **Warmer colors** will fill more of the chart area on days where younger coins were spent.

## Blockchain Monitoring Metrics

- To ensure optimum network health, is the ratio of nodes to relays similar across different regions?
- Are the average incoming/outgoing connections by host by country within a reasonable threshold to ensure good utilization of the network without straining specific hosts/regions?
- Do average connection durations between nodes fall below a certain threshold that might indicate high rates of connection failures or a more persistent problem?
- Are there any potential weak links in the network topology for global reach/access?
- Given a node, what are the other nodes that it is connected to, and how does that change over time?
- Having different methods of visualizing the data facilitates detecting and addressing issues.

## Links

[Glassnode Studio - On-Chain Market Intelligence](https://studio.glassnode.com/dashboards/introduction-lifespan)

[How to Correlate the Trend in Crypto Prices to a Twitter sentiment model Using Databricks Delta - The Databricks Blog](https://www.databricks.com/blog/2022/05/02/introduction-to-analyzing-crypto-data-using-databricks.html)

[Real-time Blockchain Analytics With Databricks Delta, SQL, and Graph - The Databricks Blog](https://www.databricks.com/blog/2021/03/03/analyzing-algorand-blockchain-data-with-databricks-delta-part-2.html)
