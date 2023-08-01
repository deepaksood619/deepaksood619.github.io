# Ethereum  Staking

## Why did Ethereum switch to PoS?

- Reduce Energy Requirements
- Cheaper to run a node
- PoS on Ethereum is also intended to lay the groundwork for "[sharding](https://www.coindesk.com/learn/2020/12/02/what-is-sharding/)" – a partitioning technique that allows multiple parallel chains to share data and transaction load efficiently. These shard chains, when combined with a secondary scaling product known as "[rollups](https://www.coindesk.com/learn/what-are-rollups-zk-rollups-and-optimistic-rollups-explained/)," could allow Ethereum to process upward of [100,000 transactions](https://ethereum.org/en/eth2/shard-chains/) per second. That's a huge leap compared with the [10-15 transactions per second](https://ycharts.com/indicators/ethereum_transactions_per_day) it processed under proof-of-work.
- Rollups involve batching dozens of transactions together off the main chain, creating a cryptographic proof for them (evidence of their validity) and then submitting that to the main chain.

### How does Ethereum staking work?

Unlike the PoW-based blockchain, the PoS-powered blockchain bundles 32 blocks of transactions during each round of validation, lasting 6.4 minutes on average. These bundles of blocks are what’s known as "epochs." An epoch is considered finalized – that is, the transactions contained are irreversible – when the blockchain adds two more epochs after it.

During the validating process (also known as the "attesting process"), stakers are randomly grouped into "committees" of 128 and assigned to a particular shard block.

Each committee has a set time for proposing a new block and validating the transactions inside of it, called a "slot." There are 32 slots in each epoch, meaning 32 sets of committees are required to complete the validation process in each epoch.

Once a committee is assigned to a block, one random member of the group is granted the exclusive right to propose a new block of transactions while the remaining 127 members vote on the proposal and attest to the transactions.

Once a majority of the committee has attested the new block, it’s added to the blockchain and a "cross-link" is created to confirm its insertion. Only then does the Ethereum staker who was chosen to propose the new block receive their reward.

- Cross-linking is the process of reconciling individual shard states with the main chain.

Note that block proposers and attesters have varying reward models. The block proposer receives a fraction of the base reward, known as "B," while the attester receives the remaining fraction of B, which is adjusted based on how long it takes for the block proposer to submit the attestation. The attester has to submit it as fast as possible to earn the entirety of the remaining B reward. For each slot that passes without the attester including the attestation to the block, the reward reduces.

A base reward is the fundamental primary determiner of the issuance rate of Ethereum post-merge. The more validators are connected to Ethereum, the lower the base reward per validator. That is because the base reward is inversely proportional to the square root of the total balance of all Ethereum validators.

### How profitable is Ethereum staking?

The reward distributed to stakers depends on the total number of ETH staked and the number of validators on the network. When the pool of staked ETH dips, the annual interest rate increases.

For example, when there were only around 500,000 ETH staked, the annual percentage rate of interest (APR) was a little over 20%. By August, 2021, there were more than 6,800,000 ETH locked on the blockchain, meaning the APR had dropped to about 6.0%.

As soon as the pool of stakers is large enough to promote a decentralized ecosystem, the interest rate drops.

### What is an Ethereum staking pool?

Understanding that not all interested stakers can afford 32 ETH to participate in the network – which at present costs over $40,000 – some platforms have begun to provide staking products that allow investors to combine their financial resources to meet the minimum requirements for becoming a validator. That is also an ideal option for individuals who don’t want to undertake the technical requirements that come with staking. In essence, users need only to deposit and lock their capital on a third-party platform and start earning returns. It’s staking without the hassle.

### WHAT IS STAKE DELEGATION?

Delegation is the process by which crypto holders delegate the stake associated with their crypto to a stake pool. It allows crypto holders that do not have the skills or desire to run a node to participate in the network and be rewarded in proportion to the amount of stake delegated.

### What if hundred percent of ethereum is a staked

If 100% of Ethereum is staked, it would mean that all the Ethereum would be locked up in the network and there would be no ETH available for trading or transactions. This is not possible as there will always be some amount of ETH available for trading and transactions. However, if a large percentage of ETH is staked, it could lead to a shortage of ETH in the market which could drive up the price of ETH.

## Liquid Staking

Staking is a way to help secure proof-of-stake blockchain networks like Ethereum. Network participants can run a validator node by putting tokens "at stake," which can then be "slashed" (taken away as a penalty) if the node commits any malicious actions or is unreliable. While there are many solo node operators, anyone can stake tokens through staking as a service (SaaS) provider-exposing them to the same risks and giving them the opportunity to share in rewards. However, staked tokens cannot be transacted or used as collateral to earn yield across the [DeFi](https://chain.link/education/defi) ecosystem.

Liquid staking service providers solve this liquidity problem by minting a new token - representing a claim on the underlying staked asset - which can then be traded or deposited in DeFi protocols. For example, a user could deposit ETH to the Lido staking pool and receive stETH (staked ETH) tokens in return, then deposit the stETH to Aave to earn yield. Essentially, liquid staking builds upon existing staking systems by unlocking liquidity for staked tokens.

**Buying stETH vs Staking ETH and receiving stETH**

[TOP 5 LSD Projects for Ethereum Staking (Lido, RocketPool & more!) - YouTube](https://www.youtube.com/watch?v=WJLL0gor4iI)

- [Lido Finance](https://lido.fi/)
- [Rocketpool](https://rocketpool.net/)
- [Frax Finance](https://frax.finance/)
- [StakeWise](https://stakewise.io/)
- [Stader Labs](https://www.staderlabs.com/)

**[Liquid staking TVL Rankings - DefiLlama](https://defillama.com/protocols/liquid%20staking/Ethereum)**

[What Is Liquid Staking? | Chainlink](https://blog.chain.link/liquid-staking/)

[Best Liquid Staking Platforms For Crypto May 2023](https://milkroad.com/staking/liquid)

<https://www.coindesk.com/learn/crypto-staking-101-what-is-staking>

<https://www.forbes.com/advisor/in/investing/cryptocurrency/what-is-staking-in-crypto>

<https://www.youtube.com/playlist?list=PLAXQ4YtxCRUGVUXRJ-uSzyvNxZQq74uLY>

[Best Liquid Staking Platforms For Crypto May 2023](https://milkroad.com/staking/liquid)

[What Liquid Staking Tokens Mean For Ethereum (LSDs) - YouTube](https://www.youtube.com/watch?v=5vl1DT9kxck)

[Why RocketPool has Everyone TRIPPING on LSD (Liquid Staking Derivatives EXPLAINED) - YouTube](https://www.youtube.com/watch?v=V4W2h5LwJBA)

### Lido Finance

**steth - re-base coin**

- [Lido | Liquid Staking for Digital Assets](https://lido.fi/)
- [Track your Ethereum staking rewards | Lido](https://stake.lido.fi/rewards)
- [Withdrawals | Lido](https://stake.lido.fi/withdrawals)
- [Lido Finance: Liquid Ethereum Staking & LDO Potential!! 💧 - YouTube](https://www.youtube.com/watch?v=VQ_uvak1JPw)
- [Lido V2 Mainnet Launch](https://blog.lido.fi/lido-v2-launch/?pk_vid=bf23268f37fe14961687501797ca3ac5)
- [Ethereum Mainnet Explorer](https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1)
- [How to STAKE & EARN Ethereum with Lido (Complete Guide) - YouTube](https://www.youtube.com/watch?v=kRdN4MoEuXg)
- [Lido Staked ETH (stETH): All You Need To Know | Bybit Learn](https://learn.bybit.com/altcoins/what-is-steth-lido-staked-eth/)
- [Lido ETH Staking Tutorial (Lido Finance stETH) - YouTube](https://www.youtube.com/watch?v=5zCCRx6IudY)
- [What Happens to My stETH if Lido Goes Bankrupt? - YouTube](https://www.youtube.com/watch?v=9G70VDiv6bU)

## Staking Opportunities

- Staking - Lido finance
- Curve - Liquidity Mining (Liquidity Provider)
- Yearn - LP Tokens
- Harvest finance
- [Convex](https://www.convexfinance.com/) (boost rewards by pulling LP)
- concentrator
- [Balancer DeFi Liquidity Pools on Ethereum Mainnet](https://app.balancer.fi/#/ethereum)

### Links

- [Lido: How to earn a high staking yield for ETH (Ethereum) - YouTube](https://www.youtube.com/watch?v=RP4XYgn84jE)
- [How to Farm 10% APY on stETH with Curve, Convex, and Concentrator - YouTube](https://www.youtube.com/watch?v=02jC7X3wLfs)
- [$431 Per Day From Uniswap v3 Liquidity Pools (Passive Income) - YouTube](https://www.youtube.com/watch?v=9iR1fWc8sg4)
- [What is a Liquidity Pool in Crypto? (How to PROFIT from Crypto LPs) - YouTube](https://www.youtube.com/watch?v=QtiMbJt9F1U)

## Links

[How Does Ethereum Staking Work?](https://www.coindesk.com/learn/how-does-ethereum-staking-work/)

[Solo stake your ETH | ethereum.org](https://ethereum.org/en/staking/solo/)

[Spin up your own Ethereum node | ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/)

**[Validator FAQs](https://launchpad.ethereum.org/en/faq)**

[How Do Ethereum Withdrawals Work? All You Need To Know - YouTube](https://www.youtube.com/watch?v=RwwU3P9n3uo)
