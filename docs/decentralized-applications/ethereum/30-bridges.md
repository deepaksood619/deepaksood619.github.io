# Bridges

With the proliferation of L1 blockchains and L2 [scaling](https://ethereum.org/en/developers/docs/scaling/) solutions, alongside an ever-growing number of decentralized applications going cross-chain, the need for communication and asset movement across chains has become an essential part of network infrastructure. Different types of bridges exist to help make this possible.

## NEED FOR BRIDGES

Bridges exist to connect blockchain networks. They enable connectivity and interoperability between blockchains.

Blockchains exist in siloed environments, meaning there is no way for blockchains to trade and communicate with other blockchains naturally. As a result, while there could be significant activity and innovation within an ecosystem, it is limited by the lack of connectivity and interoperability with other ecosystems.

Bridges offer a way for isolated blockchain environments to connect with each other. They establish a transportation route between blockchains where tokens, messages, arbitrary data, and even [smart contract](https://ethereum.org/en/developers/docs/smart-contracts/) calls can be transferred from one chain to another.

## BENEFITS OF BRIDGES

For developers, bridges enable the following:

- the transfer of any data, information, and assets across chains.
- unlocking new features and use cases for protocols as bridges expand the design space for what protocols can offer. For example, a protocol for yield farming originally deployed on Ethereum Mainnet can offer liquidity pools across all EVM-compatible chains.
- the opportunity to leverage the strengths of different blockchains. For example, developers can benefit from the lower fees offered by the different L2 solutions by deploying their dapps across rollups, and sidechains and users can bridge across them.
- collaboration among developers from various blockchain ecosystems to build new products.
- attracting users and communities from various ecosystems to their dapps.

## HOW DO BRIDGES WORK?

While there are many [types of bridge designs](https://blog.li.fi/what-are-blockchain-bridges-and-how-can-we-classify-them-560dc6ec05fa), three ways to facilitate the cross-chain transfer of assets stand out:

- **Lock and mint –** Lock assets on the source chain and mint assets on the destination chain.
- **Burn and mint –** Burn assets on the source chain and mint assets on the destination chain.
- **Atomic swaps –** Swap assets on the source chain for assets on the destination chain with another party.

## BRIDGE TYPES

- **Native bridges –** These bridges are typically built to bootstrap liquidity on a particular blockchain, making it easier for users to move funds to the ecosystem. For example, the [Arbitrum Bridge](https://bridge.arbitrum.io/) is built to make it convenient for users to bridge from Ethereum Mainnet to Arbitrum. Other such bridges include Polygon PoS Bridge, [Optimism Gateway](https://app.optimism.io/bridge), etc.
- **Validator or oracle based bridges –** These bridges rely on an external validator set or oracles to validate cross-chain transfers. Examples: Multichain and Across.
- **Generalized message passing bridges –** These bridges can transfer assets, along with messages and arbitrary data across chains. Examples: Nomad and LayerZero.
- **Liquidity networks –** These bridges primarily focus on transferring assets from one chain to another via atomic swaps. Generally, they don’t support cross-chain message passing. Examples: Connext and Hop.

At a high level, bridges can be categorized as trusted and trustless.

- **Trusted –** Trusted bridges are externally verified. They use an external set of verifiers (Federations with multi-sig, multi-party computation systems, oracle network) to send data across chains. As a result, they can offer great connectivity and enable fully generalized message passing across chains. They also tend to perform well with speed and cost-effectiveness. This comes at the cost of security, as users have to rely on the security of the bridge.
- **Trustless –** These bridges rely on the blockchains they are connecting and their validators to transfer messages and tokens. They are 'trustless' because they do not add new trust assumptions (in addition to the blockchains). As a result, trustless bridges are considered to be more secure than trusted bridges.

To evaluate trustless bridges based on other factors, we must break them down into generalized message passing bridges and liquidity networks.

- **Generalized message passing bridges –** These bridges excel with security and the ability to transfer more complex data across chains. Typically, they are also good with cost-effectiveness. However, these strengths generally come at the cost of connectivity for light client bridges (ex: IBC) and speed drawbacks for optimistic bridges (ex: Nomad) that use fraud proofs.
- **Liquidity networks –** These bridges use atomic swaps for transferring assets and are locally verified systems (i.e., they use the underlying blockchains’ validators to verify transactions). As a result, they excel with security and speed. Moreover, they are considered comparatively cost-effective and offer good connectivity. However, the major tradeoff is their inability to pass more complex data – as they don’t support cross-chain message passing.

[Bridges | ethereum.org](https://ethereum.org/en/developers/docs/bridges/)

[What Are Blockchain Bridges And How Can We Classify Them? | by Arjun Chand | LI.FI Blog](https://blog.li.fi/what-are-blockchain-bridges-and-how-can-we-classify-them-560dc6ec05fa)

[Ultimate Guide to Blockchain Bridges | by Birthday Research | Feb, 2023 | Birthday Research](https://blog.birthday.dev/ultimate-guide-to-blockchain-bridges-1e4a06a4cabc)
