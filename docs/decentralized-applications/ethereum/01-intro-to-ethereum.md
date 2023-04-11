# Intro to Ethereum

## What is a Blockchain?

A blockchain is a public database that is updated and shared across many computers in a network.

"Block" refers to data and state being stored in consecutive groups known as "blocks". If you send ETH to someone else, the transaction data needs to be added to a block to be successful.

"Chain" refers to the fact that each block cryptographically references its parent. In other words, blocks get chained together. The data in a block cannot change without changing all subsequent blocks, which would require the consensus of the entire network.

Every computer in the network must agree upon each new block and the chain as a whole. These computers are known as "nodes". Nodes ensure everyone interacting with the blockchain has the same data. To accomplish this distributed agreement, blockchains need a consensus mechanism.

Ethereum uses a [proof-of-stake-based consensus mechanism](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/). Anyone who wants to add new blocks to the chain **must stake at least 32 ETH into the deposit contract and run validator software**. They can then be randomly selected to propose blocks that other validators check and add to the blockchain. In this model, there is usually only one chain, but network latency and dishonest behavior can cause multiple blocks to exist at the same position near the head of the chain. To resolve this, a **fork-choice algorithm** selects one canonical set of blocks. The blocks selected are the ones that form the heaviest possible chain, where 'heavy' refers to the number of validators that have endorsed the blocks (weighted by the ETH they have staked). There is a **system of rewards and penalties** that strongly incentivize participants to be honest and available online as much as possible.

[Blockchain 101 - A Visual Demo](https://www.youtube.com/watch?v=_160oMzblY8)

[Blockchain 101 - Part 2 - Public / Private Keys and Signing](https://www.youtube.com/watch?v=xIDL_akeras)

## What is Ethereum?

Ethereum is a blockchain with a computer embedded in it. It is the foundation for building apps and organizations in a decentralized, permissionless, censorship-resistant way.

In the Ethereum universe, there is a single, canonical computer (called the Ethereum Virtual Machine, or EVM) whose state everyone on the Ethereum network agrees on. Everyone who participates in the Ethereum network (every Ethereum node) keeps a copy of the state of this computer. Additionally, any participant can **broadcast a request** for this computer to perform arbitrary computation. Whenever such a request is broadcast, other participants on the network **verify, validate, and carry out ("execute") the computation**. This execution causes a state change in the EVM, which is **committed and propagated** throughout the entire network.

Requests for computation are called **transaction requests**; the record of all transactions and the EVM's present state gets stored on the blockchain, which in turn is stored and agreed upon by all nodes.

Cryptographic mechanisms ensure that once transactions are verified as valid and added to the blockchain, they can't be tampered with later. The same mechanisms also ensure that all transactions are **signed and executed with appropriate "permissions"** (no one should be able to send digital assets from Alice's account, except for Alice herself).

## What is Ether?

**Ether (ETH)** is the native cryptocurrency of Ethereum. The purpose of ETH is to allow for a **market for computation**. Such a market provides an economic incentive for participants to verify and execute transaction requests and provide computational resources to the network.

Any participant who broadcasts a transaction request must also offer **some amount of ETH to the network as a bounty**. The network will award this bounty to whoever eventually does the work of verifying the transaction, executing it, committing it to the blockchain, and broadcasting it to the network.

The amount of ETH paid corresponds to the resources required to do the computation. These bounties also prevent malicious participants from intentionally clogging the network by requesting the execution of infinite computation or other resource-intensive scripts, as these participants must pay for computation resources.

ETH is also used to provide **crypto-economic security** to the network in three main ways

1. It is used as a means to reward validators who propose blocks or call out dishonest behavior by other validators
2. It is staked by validators, acting as collateral against dishonest behavior—if validators attempt to misbehave their ETH can be destroyed
3. It is used to weigh 'votes' for newly proposed blocks, feeding into the fork-choice part of the consensus mechanism.

## What are Smart Contracts?

In practice, participants don't write new code every time they want to request a computation on the EVM. Rather, application developers upload programs (reusable snippets of code) into EVM state, and users make requests to execute these code snippets with varying parameters. We call the programs uploaded to and executed by the network smart contracts.

At a very basic level, you can think of a smart contract like a sort of vending machine: a script that, when called with certain parameters, performs some actions or computation if certain conditions are satisfied. For example, a simple vendor smart contract could create and assign ownership of a digital asset if the caller sends ETH to a specific recipient.

Any developer can create a smart contract and make it public to the network, using the blockchain as its data layer, for a fee paid to the network. Any user can then call the smart contract to execute its code, again for a fee paid to the network.

Thus, with smart contracts, developers can build and deploy arbitrarily complex user-facing apps and services such as: marketplaces, financial instruments, games, etc.

[CODE IS LAW? Smart Contracts Explained (Ethereum, DeFi) - YouTube](https://www.youtube.com/watch?v=pWGLtjG-F5c&ab_channel=Finematics)

## Links

[Intro to Ethereum | ethereum.org](https://ethereum.org/en/developers/docs/intro-to-ethereum/)

[Ethereum Whitepaper | ethereum.org](https://ethereum.org/en/whitepaper/)
