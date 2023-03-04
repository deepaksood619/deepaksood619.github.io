# Ethereum  Staking

## Why did Ethereum switch to PoS?

- Reduce Energy Requirements
- Cheaper to run a node
- PoS on Ethereum is also intended to lay the groundwork for “[sharding](https://www.coindesk.com/learn/2020/12/02/what-is-sharding/)” – a partitioning technique that allows multiple parallel chains to share data and transaction load efficiently. These shard chains, when combined with a secondary scaling product known as "[rollups](https://www.coindesk.com/learn/what-are-rollups-zk-rollups-and-optimistic-rollups-explained/)," could allow Ethereum to process upward of [100,000 transactions](https://ethereum.org/en/eth2/shard-chains/) per second. That's a huge leap compared with the [10-15 transactions per second](https://ycharts.com/indicators/ethereum_transactions_per_day) it processed under proof-of-work.
- Rollups involve batching dozens of transactions together off the main chain, creating a cryptographic proof for them (evidence of their validity) and then submitting that to the main chain.

## How does Ethereum staking work?

Unlike the PoW-based blockchain, the PoS-powered blockchain bundles 32 blocks of transactions during each round of validation, lasting 6.4 minutes on average. These bundles of blocks are what’s known as “epochs.” An epoch is considered finalized – that is, the transactions contained are irreversible – when the blockchain adds two more epochs after it.

During the validating process (also known as the “attesting process"), stakers are randomly grouped into “committees” of 128 and assigned to a particular shard block.

Each committee has a set time for proposing a new block and validating the transactions inside of it, called a “slot.” There are 32 slots in each epoch, meaning 32 sets of committees are required to complete the validation process in each epoch.

Once a committee is assigned to a block, one random member of the group is granted the exclusive right to propose a new block of transactions while the remaining 127 members vote on the proposal and attest to the transactions.

Once a majority of the committee has attested the new block, it’s added to the blockchain and a “cross-link” is created to confirm its insertion. Only then does the Ethereum staker who was chosen to propose the new block receive their reward.

- Cross-linking is the process of reconciling individual shard states with the main chain.

Note that block proposers and attesters have varying reward models. The block proposer receives a fraction of the base reward, known as "B," while the attester receives the remaining fraction of B, which is adjusted based on how long it takes for the block proposer to submit the attestation. The attester has to submit it as fast as possible to earn the entirety of the remaining B reward. For each slot that passes without the attester including the attestation to the block, the reward reduces.

A base reward is the fundamental primary determiner of the issuance rate of Ethereum post-merge. The more validators are connected to Ethereum, the lower the base reward per validator. That is because the base reward is inversely proportional to the square root of the total balance of all Ethereum validators.

## How profitable is Ethereum staking?

The reward distributed to stakers depends on the total number of ETH staked and the number of validators on the network. When the pool of staked ETH dips, the annual interest rate increases.

For example, when there were only around 500,000 ETH staked, the annual percentage rate of interest (APR) was a little over 20%. By August, 2021, there were more than 6,800,000 ETH locked on the blockchain, meaning the APR had dropped to about 6.0%.

As soon as the pool of stakers is large enough to promote a decentralized ecosystem, the interest rate drops.

## What is an Ethereum staking pool?

Understanding that not all interested stakers can afford 32 ETH to participate in the network – which at present costs over $40,000 – some platforms have begun to provide staking products that allow investors to combine their financial resources to meet the minimum requirements for becoming a validator. That is also an ideal option for individuals who don’t want to undertake the technical requirements that come with staking. In essence, users need only to deposit and lock their capital on a third-party platform and start earning returns. It’s staking without the hassle.

## Links

[How Does Ethereum Staking Work?](https://www.coindesk.com/learn/how-does-ethereum-staking-work/)

[Solo stake your ETH | ethereum.org](https://ethereum.org/en/staking/solo/)

[Spin up your own Ethereum node | ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/)

**[Validator FAQs](https://launchpad.ethereum.org/en/faq)**
