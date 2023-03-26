# Upgrades

[Ethereum vision | ethereum.org](https://ethereum.org/en/roadmap/vision/)

## [The Merge | ethereum.org](https://ethereum.org/en/upgrades/merge/)

- The upgrade from the original proof-of-work mechanism to proof-of-stake was called The Merge.
- The Merge refers to the original Ethereum Mainnet merging with a separate proof-of-stake blockchain called the Beacon Chain, now existing as one chain.
- The Merge reduced Ethereum's energy consumption by ~99.95%.

- 'Eth1' is now the 'execution layer', which handles transactions and execution.
- 'Eth2' is now the 'consensus layer', which handles proof-of-stake consensus.

In order to simplify and maximize focus on a successful transition to proof-of-stake, The Merge upgrade did not include certain anticipated features such as the ability to withdraw staked ETH. The Shanghai upgrade is planned to follow The Merge, which will enable the ability for stakers to withdraw.

['What Happens After the Merge' - Vitalik Buterin - YouTube](https://www.youtube.com/watch?v=7ggwLccuN5s)

### ETH issuance tldr

- Before transitioning to proof-of-stake, miners were issued approximately 13,000 ETH/day
- Stakers are issued approximately 1,700 ETH/day, based on about 14 million total ETH staked
- The exact staking issuance fluctuates based on the total amount of ETH staked
- **Since The Merge, only the ~1,700 ETH/day remains, dropping total new ETH issuance by ~88%**
- The burn: This fluctuates according to network demand. _If_ an average gas price of at least 16 gwei is observed for a given day, this effectively offsets the ~1,700 ETH that is issued to validators and brings net ETH inflation to zero or less for that day.

[The Beacon Chain | ethereum.org](https://ethereum.org/en/upgrades/beacon-chain/)

['What Happens After the Merge' - Vitalik Buterin - YouTube](https://www.youtube.com/watch?v=7ggwLccuN5s)

[How The Merge impacted ETH supply | ethereum.org](https://ethereum.org/en/upgrades/merge/issuance/)

## [The Shanghai/Capella Upgrade](https://consensys.net/shanghai-capella-upgrade/)

## PROTO-DANKSHARDING

The Ethereum community is scaling to global accessibility through [Layer-2s (L2s)](https://ethereum.org/en/layer-2/). L2s increase the total block space available to users while still maintaining the security offered by the Ethereum Layer 1 (L1).

L2s publish a lot of data on Ethereum, and the network currently charges high fees for doing so. To fix this, Ethereum will create a new data layer, often referred to as _sharding_. This provides what is called "data availability" guarantees to L2 users. The L1 only holds the data for a limited time, which means we can scale the chain without sacrificing decentralization for smaller L1 node operators.

The current leading design for this is called Danksharding. The rollout for this will happen in several steps, with the first one being [EIP-4844](https://www.eip4844.com/), also known as ProtoDanksharding.

Proto-danksharding (aka EIP-4844) is a planned change to the Ethereum protocol which introduces ephemeral data storage. Because the data does not need to be stored by the network forever, it will be cheaper to use than on-chain storage (i.e. CALLDATA). Rollups (Layer 2s) can use this storage to post transaction data or proofs back to Layer 1 (mainnet). The benefits are lower transaction fees on the L2, greater scalability and more accessibility to more people!

Proto-danksharding requires a new cryptographic scheme: KZG Commitments. This ceremony, sometimes called a "Trusted Setup", will generate a structured reference string (SRS) which is needed for the commitments to work. An SRS is secure as long as at least one participant in the ceremony successfully conceals their secret.

[KZG Summoning Ceremony](https://ceremony.ethereum.org/)

[The KZG Ceremony - or How I Learnt to Stop Worrying and Love Trusted Setups by Carl Beekhuizen - YouTube](https://www.youtube.com/watch?v=dTBy661ubgg)
