# Nodes and Clients

A "node" is any instance of Ethereum client software that is connected to other computers also running Ethereum software, forming a network. A client is an implementation of Ethereum that verifies data against the protocol rules and keeps the network secure.

Post-Merge Ethereum consists of two parts: the execution layer and the consensus layer. Both layers are run by different client software. On this page, we'll refer to them as the execution client and consensus client.

- The execution client (also known as the Execution Engine, EL client or formerly the Eth1 client) listens to new transactions broadcasted in the network, executes them in EVM, and holds the latest state and database of all current Ethereum data.
- The consensus client (also known as the Beacon Node, CL client or formerly the Eth2 client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.

Both [execution clients](https://ethereum.org/en/developers/docs/nodes-and-clients/#execution-clients) and [consensus clients](https://ethereum.org/en/developers/docs/nodes-and-clients/#consensus-clients) exist in a variety of programming languages developed by different teams.

### Tracking nodes in the network

Multiple trackers offer a real-time overview of nodes in the Ethereum network. Note that due to the nature of decentralized networks, these crawlers can only provide a limited view of the network and might report different results.

- [Map of nodes](https://etherscan.io/nodetracker) by Etherscan
- [Ethernodes](https://ethernodes.org/) by Bitfly
- [Ethereum Node Crawler](https://crawler.ethereum.org/)
- [Nodewatch](https://www.nodewatch.io/) by Chainsafe, crawling consensus nodes

## NODE TYPES

Clients can run three different types of nodes: **light**, **full** and **archive**. There are also options of different sync strategies which enable faster synchronization time. Synchronization refers to how quickly it can get the most up-to-date information on Ethereum's state.

[Nodes and clients - Node Types | ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/#node-types)

#### Execution layer sync modes

1. Full  Sync
2. Fast Sync
3. Light Sync (does not yet work with proof-of-stake Ethereum)
4. Snap Sync

#### Consensus layer sync modes

1. Optimistic sync
2. Checkpoint sync (weak subjectivity sync)

## Links

[Nodes and clients | ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/)

[Validator checklist](https://launchpad.ethereum.org/en/checklist)

[Validator FAQs](https://launchpad.ethereum.org/en/faq)
