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
