# Rewards and Penalties

There are two primary roles for a validator: 1) checking new blocks and "attesting" to them if they are valid, 2) proposing new blocks when selected at random from the total validator pool. If the validator fails to do either of these tasks when asked they miss out on an ether payout. Validators are also sometimes tasked with signature aggregation and participating in sync committees.

### Block Rewards

Validators receive block rewards for proposing and attesting to new blocks on the Ethereum 2.0 Beacon Chain. These block rewards are created through the inflation of the total supply of ETH and are distributed among the active validators based on their effective balance (the amount of ETH they have staked as collateral). Validators with larger stakes receive a proportionally larger share of the rewards. The specific formula for calculating a validator's share of block rewards may vary, but it generally depends on their effective balance and the total amount of ETH staked in the network.

### Attestation Rewards (Epoch Rewards)

Validators also earn rewards for participating in the attestation process. Attestations are votes that validators make on the validity of proposed blocks and shard chains. Validators who correctly attest to the canonical chain and shard chains are rewarded with additional ETH.

### Slashing Penalties

Validators may also face penalties, known as slashing, for misbehavior or malicious actions. Slashing can result from actions such as double-signing blocks or not participating honestly in the network. Validators who are slashed lose a portion of their staked ETH as a penalty.

### Transaction Fees

In addition to block and attestation rewards, validators can also earn transaction fees from processing transactions in the shard chains. These fees are collected from users who initiate transactions, and validators receive a share of these fees based on their activity.

### Inactivity Penalties

Validators may also face penalties for being inactive or not performing their duties as required by the network. These penalties can include the loss of some staked ETH.

## Links

[Proof-of-stake rewards and penalties | ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/)

[Upgrading Ethereum | 2.8.4 Rewards](https://eth2book.info/capella/part2/incentives/rewards/)

[Rewards and Penalties - Ethereum Staking Knowledge Base](https://kb.beaconcha.in/rewards-and-penalties)
