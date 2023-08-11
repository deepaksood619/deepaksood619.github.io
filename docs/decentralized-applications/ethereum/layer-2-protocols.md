# Layer 2 Protocols

In the context of blockchain, a "layer 2" refers to a secondary protocol or technology built on top of a primary blockchain, which provides additional functionality or scalability solutions while relying on the security of the underlying blockchain.

In the case of Ethereum, there are several layer 2 solutions being developed to address the network's current limitations in terms of scalability and transaction throughput.

## Types

### Channels

They allow participants to exchange their transactions off-chain a number of times while only submitting the final 2 transactions to the base layer. Ex - Raiden, Lightning network

1. **State channels:** Off-chain agreements between parties that allow for multiple transactions to be conducted without touching the main blockchain until they are settled.
2. **Payment Channels**

### Plasma

A framework for creating a hierarchy of blockchains (or "child chains") that can process transactions off-chain and periodically commit them to the main Ethereum blockchain. Ex - OMG, Matic

### Sidechains

Independent blockchains that are interoperable with the Ethereum mainnet, allowing for off-chain transactions and reducing congestion on the main network. Ex - xdai

### Rollups

An approach that allows for the aggregation of multiple transactions into a single transaction on the main Ethereum blockchain, significantly increasing the network's capacity to process transactions.

1. zk-rollups - Ex - Loopring, DeversiFi, zksync
2. Optimistic rollups - Ex - Optimism

[What are Rollups in Crypto? ZKSnarks vs Optimistics Rollups Explained - YouTube](https://www.youtube.com/watch?v=6_nOYsvXMsE)

## Intro

These layer 2 solutions are intended to improve the efficiency and speed of transactions on the Ethereum network, while maintaining the security and decentralization of the underlying blockchain. Other blockchains, such as Bitcoin, also have their own layer 2 solutions, which include technologies like Lightning Network and Liquid Network.

There is currently no one-size-fits-all solution to scaling blockchain networks, and different layer 2 solutions are being developed to address different use cases and requirements.

That being said, **rollups** are currently one of the most promising layer 2 solutions being developed for Ethereum, as they offer significant scalability improvements while maintaining the network's security and decentralization. Rollups work by aggregating multiple transactions into a single transaction on the main Ethereum blockchain, reducing the burden on the network while maintaining the security guarantees of the underlying blockchain.

Several rollup solutions are already live or in the process of being implemented on Ethereum, including **Optimistic Rollups, ZK-Rollups, and Validium**. These solutions have the potential to significantly increase the network's capacity to process transactions, thereby unlocking new use cases for decentralized applications and reducing the cost of using the Ethereum network.

[Scaling | ethereum.org](https://ethereum.org/en/developers/docs/scaling/)

[Layer 2 | ethereum.org](https://ethereum.org/en/layer-2/)

[L2BEAT – The state of the layer two ecosystem](https://l2beat.com/scaling/risk)

- [arbitrum](decentralized-applications/ethereum/arbitrum.md)
- [polygon](decentralized-applications/ethereum/polygon.md)
- Optimism

 Optimism is a fast, stable, and scalable L2 blockchain built by Ethereum developers, for Ethereum developers. Built as a minimal extension to existing Ethereum software, Optimism’s EVM-equivalent architecture scales your Ethereum apps without surprises. If it works on Ethereum, it works on Optimism at a fraction of the cost.

 [Welcome to the OP Stack | OP Stack Docs](https://stack.optimism.io/#)

 [Optimism](https://www.optimism.io/)

[The TRUTH About DEFI - YouTube](https://www.youtube.com/watch?v=Ia0DVfRJKy8)

[Ethereum LAYER 2 SCALING Explained (Rollups, Plasma, Channels, Sidechains) - YouTube](https://www.youtube.com/watch?v=BgCgauWVTs0&ab_channel=Finematics)

[Layer 2 Scaling Solutions Explained (Rollups, Plasma, Sidechains, Channels ANIMATED) - YouTube](https://www.youtube.com/watch?v=9pJjtEeq-N4)

## ZK Proof (Zero Knowledge Proof)

A cryptographic method for proving a statement is true without revealing any information about the statement – other than that it is true.

"Zero-knowledge" proofs allow one party (the prover) to prove to another (the verifier) that a statement is true, without revealing any information beyond the validity of the statement itself. For example, given the hash of a random number, the prover could convince the verifier that there indeed exists a number with this hash value, without revealing what it is.

#### Criteria for ZK Proof

- Statistical Soundness
- Completeness
- Zero Knowledge

#### Types

- Interactive ZK Proof
- Non-interactive ZK Proof

[Zero Knowledge Canon, part 1 & 2 - a16z crypto](https://a16zcrypto.com/content/article/zero-knowledge-canon/)

[Zero-Knowledge Proof (ZKP): How It Works and Why Its Important - YouTube](https://www.youtube.com/watch?v=e_Im2g2xsAg)

[Zero Knowledge Proof - ZKP - YouTube](https://www.youtube.com/watch?v=OcmvMs4AMbM)

[Zero Knowledge Proof (with Avi Wigderson) - Numberphile - YouTube](https://www.youtube.com/watch?v=5ovdoxnfFVc)

[What Is A zkEVM? — Linea](https://linea.mirror.xyz/qD18IaQ4BROn_Y40EBMTUTdJHYghUtdECscSWyMvm8M)

[Lifecycle of ZKP | ZKCamp](https://www.zkcamp.xyz/blog/lifecycle-of-zkp)

### zk-SNARK

The acronym **zk-SNARK stands for "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge,"** and refers to a proof construction where one can prove possession of certain information, e.g. a secret key, without revealing that information, and without any interaction between the prover and verifier. In May 2022, Zcash began the process of upgrading its underlying cryptography and moving to a new proof composition called Halo.

[What are zk-SNARKs? | Zcash](https://z.cash/technology/zksnarks/)

[Zero knowledge made simple | Justin Thaler - YouTube](https://www.youtube.com/watch?v=7SwTy1MCgEY)

[Lecture 10.3: What is a zk-SNARK? - YouTube](https://www.youtube.com/watch?v=gcKCW7CNu_M)

[SNARK Design, Part I, with Justin Thaler | a16z crypto research talks - YouTube](https://www.youtube.com/watch?v=tg6lKPdR_e4)

[SNARK Design, Part II, with Justin Thaler | a16z crypto research talks - YouTube](https://www.youtube.com/watch?v=cMAI7g3UcoI)

## Sidechains

- A sidechain is a separate, independent blockchain linked to the main blockchain (mainchain) using a two-way bridge.
- It enables tokens or other digital assets to be transferred between the mainchain and the sidechain.
- A sidechain can be public or private, and each sidechain has its own token, protocol, consensus mechanism, and security.
- Sidechains can be used to run blockchain applications like decentralised apps (dapps), taking some computational load off the mainchain and helping to scale the blockchain.

A typical sidechain implementation creates a transaction on the first blockchain (the mainchain) by locking the assets, then creates a transaction on the second blockchain (the sidechain) and provides cryptographic proofs to the transaction that the assets were locked correctly on the first blockchain.

Although sidechains look like a promising solution, they add complexity to the blockchain design and require a lot of effort and investment for the initial setup. Since sidechains are independent blockchains, their security can potentially be compromised since they are not secured by the mainchain. On the other hand, if a sidechain is compromised, it won’t affect the mainchain, so it can be used to experiment with new protocols and improvements to the mainchain.

### Others

- Merge Mining
- Two way peg

[What Are Sidechains? Scaling Blockchain on the Side](https://crypto.com/university/what-are-sidechains-scaling-blockchain)

[What are Sidechains in Crypto? Rootstock + Polygon Explained! - YouTube](https://www.youtube.com/watch?v=cFRj2-jzm8E)

### Layer 2 vs Sidechains

The variations in security techniques between layer 2 and sidechain solutions are the most significant. Layer 2 relies on the main chain's security in most cases, however side chains have their own security features.

## Links

[Blockchain Layers Explained: Best Blockchain Layers 1, 2, 3, and 0 Explainer video | Jude - YouTube](https://www.youtube.com/watch?v=u2avJ_ctsKM&ab_channel=JudeUmeano)

[Argent – The best Ethereum wallet for DeFi and NFTs.](https://www.argent.xyz/)

[Cartesi 🛠️ Billions of Reasons to Use Cartesi - Carlo Fragni - YouTube](https://www.youtube.com/watch?v=2WvS5So5su4)

[What is Sharding in Crypto? Scaling Solution (Animated) - YouTube](https://www.youtube.com/watch?v=SZpjvWMfgDA)

[What are Rollups in Crypto? ZKSnarks vs Optimistics Rollups Explained - YouTube](https://www.youtube.com/watch?v=6_nOYsvXMsE)

[Layer 2 Scaling - Playlist YouTube](https://www.youtube.com/playlist?list=PLHx4UicbtUobQJPt_ACy95eDf3FQAiHUi)

[Ethereum at Hyperscale - Alex Gluchowski | Pragma Paris 2023 - YouTube](https://www.youtube.com/watch?v=Uh_FMZrVE0A)
