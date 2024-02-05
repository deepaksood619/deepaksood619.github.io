# DeFi

 You can hide and cross borders with, that gives you access to your own private offworld bank account

## Decentralized Finance - DeFi

- Allow most operations traditional financial instruments, but on The Blockchain
    - Borrowing, Lending
    - Price speculation
    - Swapping once ERC-20 token for another
        - F.e. Uniswap

## Concepts

- DeFi is eating Finance
    - Operating Costs
        - Deutsche Bank: $10B/yr general & administrative expenses
        - Lending Club: $325M product, generall & administrative expenses
    - Volume & Capital Efficiency
        - Ethereum payments volume exceeds PayPal ($1.6T vs $0.9T) with 64 vs 26k employees
    - Ecosystem Transparency
- **Native Decentralized Finance** or NativeDeFi means that the DeFi applications on DeFiChain are built directly on the blockchain, ensuring the highest level of security standards and a greater resistance to hacks.

### NativeDeFi vs. DeFi on Ethereum

- Most DeFi projects are built on the **Ethereum** blockchain, where applications run on so-called virtual machines. **Unlike native blockchains**, blockchains like Ethereum offer **greater flexibility** for developers. This flexibility, however, **makes them more risky for decentralized financial applications.**
- When it comes to financial services, Ethereum uses smart contracts on the **application layer**, which could be prone to **human errors and coding mistakes**. In addition, they are simply **not built for the function of financial applications**, but rather a one-size-fits all solution. There, the code gets compiled and has to run through a virtual machine.
- On blockchains like DeFiChain, the **execution** of the code happens **directly on the native blockchain** layer - no "on-top" application layer is needed. As a result, DeFiChain is perfectly designed for all kinds of financial applications and services.
- Performing DeFi transactions on Ethereum takes more than 3,000 distinct steps - each with its own **potential attack** surface. On DeFiChain, just a few lines of code are enough, making transactions much more robust against potential attacks, and DeFiChain’s NativeDeFi approach, more secure.
- The main benefits of NativeDeFi include: **Consensus happens directly on the native blockchain layer**, the **transaction costs are low**, and the attack surface is low.

## Applications

1. Decentralized exchanges (DEXs): DEXs allow users to trade cryptocurrencies in a decentralized manner without relying on a centralized exchange. Examples of popular DEXs include Uniswap, Sushiswap, and Balancer.
2. Lending protocols: DeFi lending protocols allow users to lend and borrow cryptocurrencies without intermediaries. Examples of popular lending protocols include Aave, Compound, and MakerDAO.
3. Stablecoins: Stablecoins are cryptocurrencies that are pegged to the value of a stable asset, such as the US dollar. They are designed to minimize volatility and provide a stable store of value. Examples of popular stablecoins include USDC, DAI, and Tether.
4. Automated market makers (AMMs): AMMs are algorithms that determine the price of a cryptocurrency based on its supply and demand. They are used in liquidity pools to facilitate decentralized trading.
5. [Yield Farming](decentralized-applications/liquidity-mining.md#yield%20farming)
6. Decentralized finance infrastructure: DeFi infrastructure projects, such as Chainlink and The Graph, provide the building blocks that power many DeFi applications, such as oracles that bring external data to DeFi protocols.
7. Insurance protocols: DeFi insurance protocols allow users to insure against the risk of smart contract failure or other risks. Examples of DeFi insurance protocols include Nexus Mutual and Cover Protocol.
8. [Liquidity Mining](decentralized-applications/liquidity-mining.md)

### Oracles

Oracles in DeFi are third-party services that provide external data to decentralized applications, such as smart contracts, that operate on blockchain networks. Oracles are necessary because blockchain networks are designed to be immutable and tamper-resistant, and they have limited access to real-world data outside of the blockchain. Oracles solve this problem by providing secure and reliable access to off-chain data sources, such as market prices, weather reports, and other real-world data.

In the context of DeFi, oracles are used to provide external data to smart contracts that execute financial transactions. For example, a DeFi lending protocol may require up-to-date market prices for cryptocurrencies in order to calculate interest rates for loans. The protocol can use an oracle to securely retrieve this data and incorporate it into the smart contract.

Oracles play a critical role in the DeFi ecosystem because they enable decentralized applications to operate securely and efficiently while maintaining access to the necessary external data. However, the reliability and security of oracles are also critical, as inaccurate or manipulated data can lead to financial losses for users of DeFi protocols. As a result, there are many different oracle providers that have emerged to serve the needs of the DeFi ecosystem, each with their own approaches to security and data verification.

**Protocols - Chainlink**

### Satoshi Test

A Satoshi Test is a method to verify ownership of an address belonging to a virtual asset service provider ([VASP](https://www.21analytics.ch/glossary/virtual-asset-service-provider-vasp/)) customer's self-hosted wallet ([unhosted wallet](https://www.21analytics.ch/glossary/non-custodial-self-custodial-unhosted-external-private-wallet/)).

To verify the address’s ownership, a small amount of crypto assets (coins), predefined by the VASP, is sent from the wallet owner’s address to the VASP within a specific time period.

If the wallet owner can successfully send the coins, it serves as proof of address ownership.

The proof is considered invalid if a wallet owner does not complete the transaction in the given timeframe. It has to be redone with a new predefined amount and within a new specific time period. With successful transfers, the wallet user will be reimbursed for the transferred coins. However, the mining fees will not be returned.

The amount transferred is usually around the value of USD 1. This represents a fraction of a Bitcoin, whose smallest unit is a satoshi. Hence the name Satoshi Test. However, this method can be used for most crypto assets.

Depending on the VASPs jurisdiction and AML policy, a Satoshi Test only provides a proof for a limited time (e.g. 1 week) and afterwards has to be repeated, even if the wallet user's address stays the same.

In some regions, a Satoshi Test is called a Penny Test or a Micro Transfer.

[What is a Satoshi Test?](https://www.21analytics.ch/what-is-a-satoshi-test/)

## Products

[Little to NO DeFi Gains? Find out which products and services suit you best - YouTube](https://www.youtube.com/watch?v=C2KURQ1jMQI)

![cakedefi-3-core-products](../media/Pasted%20image%2020230330190444.png)

## Quadratic Funding

The large donors contribute funds to a matching pool, which are used to match the funds donated by the individual donors, or the "crowd". Quadratic Funding elevates the crowd’s favorite projects, by contributing more matching funds to the grants that receive the highest number of contributions, not the highest value of contributions.

For example, let’s say there are 10 donors who donate $1 each to project A, and 2 donors who donate $6 each to project B. Although project B received a higher value of contributions than project A, project B would actually receive far more matching funding, as they were supported by 10 individuals, instead of 2. Quadratic Funding makes use of a special formula to determine exactly how funding is matched, ensuring total transparency and fairness in the process.

[How Can $1 Turn Into $27? QUADRATIC FUNDING Explained - YouTube](https://www.youtube.com/watch?v=hEHv-dE4xl8)

[Quadratic Funding - Crypto Charity that SUPERCHARGES donations - YouTube](https://www.youtube.com/watch?v=LrdG-pZw2Fc)

## Perpetual protocols

A perpetual contract is a derivative similar to a futures contract but without an expiry date. In conventional markets, a futures contract enables people to speculate on the price of an underlying asset until a specific date in the future when that asset is delivered (in-kind or cash-equivalent). Comparatively, perpetual contracts are permanent where the underlying is never delivered and traders pay certain fees to maintain their position.

[PERPETUAL PROTOCOL - Next Level In Decentralized Trading? (Layer 2, Uniswap V3) - YouTube](https://www.youtube.com/watch?v=pBoKtkoNZEY)

[What is Perpetual Protocol? (PERP) | Kraken](https://www.kraken.com/learn/what-is-perpetual-protocol-perp)

## Olympus

- [DEFI 2.0 - A New Narrative? OlympusDAO, Tokemak Explained - YouTube](https://www.youtube.com/watch?v=l0vRTi8_FRk)
- [What is DeFi 2.0? How Olympus and TIME actually work - YouTube](https://www.youtube.com/watch?v=I34lOvUWsNc)
- [What is OlympusDAO? - OHM Explained with Animations - YouTube](https://www.youtube.com/watch?v=o699i_l_qy8)

## References

- [Crypto Investing](crypto-investing)
- [Different Coins / Tokens](decentralized-applications/coins-tokens-chains/readme.md)
- [Liquidity Mining](decentralized-applications/liquidity-mining.md)
- [Defi Apps](decentralized-applications/defi-apps.md)
- [DeFi - Playlist YouTube](https://www.youtube.com/playlist?list=PLHx4UicbtUoYvCvRouZ4XbaDpE7cbCCqo)
- [Defi Crash Course ( 15 projects in 31 mins ) - YouTube](https://www.youtube.com/watch?v=p9iTNsh9bSk)
- [Youtube DeFi Crash Course](https://www.youtube.com/playlist?list=PLZYHS2HeJ5ejvwRrGI4Wgi5HVVwvvow7R)
- [What is DeFi? A Beginner’s Guide to Decentralized Finance](https://www.youtube.com/watch?v=btB__oHQ0sU)
- [Learn crypto and blockchain | CoinDesk](https://www.coindesk.com/learn/defi/)
- [The TRUTH About DEFI - YouTube](https://www.youtube.com/watch?v=Ia0DVfRJKy8)
- [Lending And Borrowing In DEFI Explained - Aave, Compound - YouTube](https://www.youtube.com/watch?v=aTp9er6S73M)
- [DEFI - From Inception To 2021 And Beyond (History Of Decentralized Finance Explained) - YouTube](https://www.youtube.com/watch?v=qFBYB4W2tqU)
- [AAVE - The Road To $3 Billion - DEFI Explained - YouTube](https://www.youtube.com/watch?v=WwE3lUq51gQ)
- [Derivatives in DEFI Explained (Synthetix, UMA, Hegic, Opyn, Perpetual, dYdX, BarnBridge) - YouTube](https://www.youtube.com/watch?v=QxoqPZRw9y4)
- [What Are Tokenized Securities - Benefits, Examples, & Laws](https://milkroad.com/guide/tokenized-securities)
- [BANK RUN in DEFI - Lessons Learned From The Iron Finance Collapse - YouTube](https://www.youtube.com/watch?v=HUokre-szPg)
- [DeFi - Past, Present and Future - YouTube](https://www.youtube.com/watch?v=PT72hAbm2Eo)
- [How to Make Money with Crypto - DeFi For Beginners - YouTube](https://www.youtube.com/watch?v=o9ObYRjpIhs)
- [Why Decentralized Social Media Is IMPORTANT For Our Privacy - YouTube](https://www.youtube.com/watch?v=ovnE5gQ3fQQ)
