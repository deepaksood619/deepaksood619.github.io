# Key Concepts

## Trapdoor function

A trapdoor function is a function that is easy to compute in one direction but difficult to compute in the opposite direction unless you have special information. Trapdoor functions are essential for public key encryption - that's why they are commonly used in blockchain development to represent the ideas of addresses and private keys.

## Chain Fork

Blocks in the ledger are included in such a way as to build the longest chain, i.e., the chain with the greatest cumulative difficulty. Forking is a situation where there are two candidate blocks competing to form the longest blockchain and two miners discover a solution to the proof-of-work problem within a short period of time from each other. The network is then divided, because some nodes get blocks from miner #1 and some from miner #2.

A fork usually gets resolved in one block, because the probability that this situation happens again gets extremely lower with the next blocks that arise, so soon there is a new longest chain that will be considered as main.

(Note: This type of fork is distinct from a hard fork, which is where some developers decide to create a backward-incompatible change to the blockchain protocol, resulting in two forever-distinct blockchains.)

## On-chain Analysis

On-chain metrics turn blockchain-based transaction data into actionable crypto market insights.

[On-Chain Analysis: How to Turn Blockchain Data Into Crypto Market Insights](https://www.coindesk.com/learn/what-is-crypto-on-chain-analysis-and-how-do-you-use-it/)
