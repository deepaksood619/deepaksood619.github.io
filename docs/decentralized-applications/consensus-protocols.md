# Consensus Protocols

## Proof of Work (PoW)

## Proof of Stake (PoS) / Staking

Staking helps contribute to blockchain security by using your tokens to vouch for the validity of new transactions on the network. In return for staking your tokens, you are eligible to receive rewards.

- Staking (Proof of Stake) is a blockchain consensus mechanism whereby a certain number of coins are locked away in order to append new blocks to the blockchain and ensure the security of the blockchain.
- Like PoA, but authority is indirectly established by "stake", suh as token holdings
- May offer integrated punishement mechanism for malicious nodes: slashing
- Current **holy grail** to get of the energy waste stigma (both Ethereum and IOTA plan to pivot to PoS)
- Slight problems
  - How is stake initally distributed?
    - Popular: Sale of tokens
    - Alternative: Bootstrap off of existing blockchains
  - No built-in defence against centralization. No Sybil resistance
    - Even if bootstrapped correctly, may become centralized without any visible sign
- By owning and staking the coins, you not only become an important part of securing the entire network, but you also get paid for this service. This regular income stream is paid out directly from the blockchain and is deeply embedded in the underlying programming code. The payout amounts (emission rates) vary from blockchain to blockchain; for example, for staking DeFiChain (DFI) you currently receive over 40% APY, while for staking DASH it is over 5% APY.

## Delegated Proof of Stake (DPoS)

**Delegated Proof Of Stake (DPoS)** is a consensus algorithm which is an advancement of the fundamental concepts of [Proof Of Stake](https://www.geeksforgeeks.org/proof-of-stake-pos-in-blockchain/). Delegated Proof of Stake (DPoS) consensus algorithm was developed by Daniel Larimer, founder of BitShares, Steemit and EOS in 2014.

In Proof of Stake consensus system, each person who stakes a token can participate to the **“mintage”** process which means that they get a chance to select layer two nodes which further validates block and be rewarded for adding blocks to [blockchain](https://www.geeksforgeeks.org/blockchain-technology-introduction/). DPos system is maintained by an election system for choosing nodes which verify blocks. These nodes are called **“witnesses”** or **“block producers”**.

### Advantages

1. DPoS blockchains have good protection from double-spending.
2. DPoS is more democratic and financially inclusive due to lesser staking amount required by a user/node.
3. DPoS provides more decentralization as more people take part in the consensus due to low entry threshold.
4. DPoS doesn’t require lots of power to run network, which makes it more sustainable.
5. Transactions in DPoS is not dependent on computing power required to run network, hence it is more scalable.
6. DPoS separates election of block producers from block production itself which opens door for more creative models to solve both problems in isolation.
7. DPoS method provides foundation for implementing interesting governance models in blockchain applications. In a sense, it forms a kind of democracy.

### Disadvantages

1. Effective operation and decision making of network requires delegators to be well informed and appoint honest witnesses.
2. Limited number of witnesses can lead to centralization of network.
3. DPoS blockchain is susceptible to problems of weighted voting. Users with smaller stake can refuse from taking part in votings after considering that their vote is insignificant.

[Delegated Proof Of Stake (DPoS) - GeeksforGeeks](https://www.geeksforgeeks.org/delegated-proof-of-stake/)

[What Is Delegated Proof of Stake?](https://crypto.com/university/what-is-dpos-delegated-proof-of-stake)

## Nominated proof of stake (NPoS)

Nominated proof of stake, or NPoS, is similar to proof of stake ([PoS](https://learn.bybit.com/blockchain/what-is-proof-of-stake/)) in allowing users to earn rewards for validating new blocks, but it differs in that only nominated nodes are allowed to participate in block validation.

NPoS is designed to incentivize good behavior and punish bad behavior on blockchains. For example, if a block validator attempts to validate a fraudulent transaction, they will be penalized by losing some of their staked tokens.

This correction mechanism ensures that only honest and reliable nodes are allowed to participate in the nominated proof of stake consensus algorithm, which in turn helps to improve the overall security of the network.

Nominated proof of stake is a popular consensus algorithm among blockchain projects because it combines the security of PoS with the added benefits of stakeholder voting.

### Different Roles Within Nominated Proof of Stake (NPoS)

#### Block validators

Block validators are responsible for verifying the validity of new blocks and adding them to the blockchain. In order to become a block validator, a node must first be nominated by another voter. Once a node has been nominated, they’ll be allowed to validate new blocks and earn rewards for doing so.

#### Nominators

Nominators are responsible for nominating new nodes to become block validators. Only nodes who have been nominated by other voters will be allowed to validate new blocks and earn rewards for doing so. They play an important role in NPoS because they’re responsible for ensuring that only the most trusted and reputable nodes are allowed to validate new blocks.

In summary, the main difference between block validators and nominators is that block validators are responsible for validating new blocks, while nominators are responsible for nominating other nodes to become block validators.

### Examples of Nominated Proof of Stake (NPoS)

The nominated proof of stake consensus algorithm is used by many different blockchain projects, including [EOS](https://learn.bybit.com/altcoins/what-is-eos-crypto/), [Polkadot](https://learn.bybit.com/altcoins/what-is-polkadot-coin-and-how-it-surged-to-the-top/) and [Cosmos](https://learn.bybit.com/altcoins/what-is-cosmos-atom/).

These projects have all implemented NPoS in different ways, but they all share the common goal of improving upon the [existing proof of stake algorithm.](https://learn.bybit.com/blockchain/what-is-proof-of-stake/)

[Nominated Proof of Stake (NPos) | Bybit Learn](https://learn.bybit.com/glossary/definition-nominated-proof-of-stake-npos/)

[What is Nominated Proof-of-Stake? | by Staking Facilities | Medium](https://stakingfac.medium.com/what-is-nominated-proof-of-stake-889fc22bef8f)

## Proof of Authority (PoA)

- Blocks must be signed by a sufficient quorum of "authoritative" nodes
- Very simple, very efficient
- Requires trust in the authorities
  - How are they chosen?
- Basically: A PKI, a databases, and a hashchain in a trenchcoat
- Standard construction for private / permissioned blockchains

[Proof of authority - Wikipedia](https://en.m.wikipedia.org/wiki/Proof_of_authority)

## Proof of Staked Authority

To maintain blockchain security and achieve network consensus, BSC combines delegated PoS (Proof-of-Stake) and PoA (Proof-of-Authority), the best way to secure the platform. As well as being able to fend off 51% attacks, PoA is known for its openness to Byzantine attacks. Furthermore, elected validators will check each transaction and confirm it only after moving the transaction to ensure the transactions are better secured. The validators also help produce the block in a Poof-of-Authority (PoA) manner. If a person wants to become a validator, they should stake BNB. The validator receives the transaction fees incurred by the block if the block pushed forward by them is added to the chain.

[Everything You Need to Know About Binance Smart Chain (BSC) - Blockchain Council](https://www.blockchain-council.org/cryptocurrency/binance-smart-chain/)

## Proof of Storage

- Example: Chia (2018)
  - Increased wear destroys SSDs after less than a year
  - No use beyond price speculation

[What is Chia? (Animated) Eco-Friendly Storage-Based Crypto - YouTube](https://www.youtube.com/watch?v=HhumRtzglNM)

## Proof of Time

[Proof-of-time vs. proof-of-stake: How the two algorithms compare](https://cointelegraph.com/news/proof-of-time-vs-proof-of-stake-how-the-two-algorithms-compare)

[Proof-of-time - Simple English Wikipedia, the free encyclopedia](https://simple.wikipedia.org/wiki/Proof-of-time)

## Proof of Elapsed Time (2016)

- Instead of computing hashes for PoW, just do: nothing! Go to sleep!
- Incredible enery savings compared to PoW
- Drop-in solution, behaves exactly like PoW
- Used in permissioned environments
- Small questions: What guarantees do other nodes have that no node wakes up before its time?
  - Intel SGX
- See also: Proof of Luck (PoL)

[Proof of Elapsed Time (PoET) Definition, Purposes, Vs. PoW](https://www.investopedia.com/terms/p/proof-elapsed-time-cryptocurrency.asp)

## mobilecoin (2020): Proof of complexity

- Mobile-device focused
- Pulls every cryptographic register there is
  - Stellar consensus
  - Zero-knowledge proofs for everything
  - Ristretoo, Schnorr anonymous signatures, Pedersen commitments
- Security against double-spending completely relies on Intel SGX enclaves
- Entire token supply is pre-mined

## Proof of History

[Proof of History: How Solana brings time to crypto](https://solana.com/news/proof-of-history)

## Biometric proof of personhood

[Proof of personhood](https://berkeley-defi.github.io/assets/material/Proof%20of%20Person.pdf), aka the "[unique-human problem](https://vitalik.ca/general/2019/11/22/progress.html#numberfifteensic)", is a limited form of real-world identity that asserts that a given registered account is controlled by a real person (and a different real person from every other registered account), ideally without revealing _which_ real person it is.

- **[Proof of Humanity](https://proofofhumanity.id/)**: you upload a video of yourself, and provide a deposit. To be approved, an existing user needs to vouch for you, and an amount of time needs to pass during which you can be challenged. If there is a challenge, a [Kleros decentralized court](https://kleros.io/about/) determines whether or not your video was genuine; if it is not, you lose your deposit and the challenger gets a reward.
- **[BrightID](https://brightid.gitbook.io/brightid/getting-verified)**: you join a video call "verification party" with other users, where everyone verifies each other. Higher levels of verification are available via [Bitu](https://medium.com/brightid/what-is-markaz-verification-level-47397372c8eb), a system in which you can get verified if enough other Bitu-verified users vouch for you.
- **[Idena](http://idena.network/)**: you play a captcha game at a specific point in time (to prevent people from participating multiple times); part of the captcha game involves creating and verifying captchas that will then be used to verify others.
- **[Circles](https://circles.garden/)**: an existing Circles user vouches for you. Circles is unique in that it does not attempt to create a "globally verifiable ID"; rather, it creates a graph of trust relationships, where someone's trustworthiness can only be verified from the perspective of your own position in that graph.

[What do I think about biometric proof of personhood?](https://vitalik.ca/general/2023/07/24/biometric.html)

[Worldcoin Whitepaper](https://whitepaper.worldcoin.org/)

## POX - Proof of Transfer - STX

## Links

[Endgame: Proof of Governance — Jon Charbonneau](https://dba.mirror.xyz/UTPfxWe65dYrUu_RJX-5VkAJypFRyw3AZh6m0dRXYZk)
