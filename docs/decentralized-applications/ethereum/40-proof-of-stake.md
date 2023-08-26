# Proof of Stake

[Proof-of-stake (PoS) | ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/)

## VALIDATORS

To participate as a validator, a user must deposit 32 ETH into the deposit contract and run three separate pieces of software: an execution client, a consensus client, and a validator. On depositing their ETH, the user joins an activation queue that limits the rate of new validators joining the network. Once activated, validators receive new blocks from peers on the Ethereum network. The transactions delivered in the block are re-executed, and the block signature is checked to ensure the block is valid. The validator then sends a vote (called an attestation) in favor of that block across the network.

Whereas under proof-of-work, the timing of blocks is determined by the mining difficulty, in proof-of-stake, the tempo is fixed. Time in proof-of-stake Ethereum is divided into slots (12 seconds) and epochs (32 slots). One validator is randomly selected to be a block proposer in every slot. This validator is responsible for creating a new block and sending it out to other nodes on the network. Also in every slot, a committee of validators is randomly chosen, whose votes are used to determine the validity of the block being proposed.

## HOW A TRANSACTION GETS EXECUTED IN ETHEREUM POS

The following provides an end-to-end explanation of how a transaction gets executed in Ethereum proof-of-stake.

1. A user creates and signs a [transaction](https://ethereum.org/en/developers/docs/transactions/) with their private key. This is usually handled by a wallet or a library such as [ether.js](https://docs.ethers.io/v5/), [web3js](https://docs.web3js.org/), [web3py](https://web3py.readthedocs.io/en/v5/) etc but under the hood the user is making a request to a node using the Ethereum [JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/). The user defines the amount of gas that they are prepared to pay as a tip to a validator to encourage them to include the transaction in a block. The [tips](https://ethereum.org/en/developers/docs/gas/#priority-fee) get paid to the validator while the [base fee](https://ethereum.org/en/developers/docs/gas/#base-fee) gets burned.
2. The transaction is submitted to an Ethereum [execution client](https://ethereum.org/en/developers/docs/nodes-and-clients/#execution-client) which verifies its validity. This means ensuring that the sender has enough ETH to fulfill the transaction and they have signed it with the correct key.
3. If the transaction is valid, the execution client adds it to its local mempool (list of pending transactions) and also broadcasts it to other nodes over the execution layer gossip network. When other nodes hear about the transaction they add it to their local mempool too. Advanced users might refrain from broadcasting their transaction and instead forward it to specialized block builders such as [Flashbots Auction](https://docs.flashbots.net/flashbots-auction/overview). This allows them to organize the transactions in upcoming blocks for maximum profit ([MEV](https://ethereum.org/en/developers/docs/mev/#mev-extraction)).
4. One of the nodes on the network is the block proposer for the current slot, having previously been selected pseudo-randomly using RANDAO. This node is responsible for building and broadcasting the next block to be added to the Ethereum blockchain and updating the global state. The node is made up of three parts: an execution client, a consensus client and a validator client. The execution client bundles transactions from the local mempool into an "execution payload" and executes them locally to generate a state change. This information is passed to the consensus client where the execution payload is wrapped as part of a "beacon block" that also contains information about rewards, penalties, slashings, attestations etc. that enable the network to agree on the sequence of blocks at the head of the chain. The communication between the execution and consensus clients is described in more detail in [Connecting the Consensus and Execution Clients](https://ethereum.org/en/developers/docs/networking-layer/#connecting-clients).
5. Other nodes receive the new beacon block on the consensus layer gossip network. They pass it to their execution client where the transactions are re-executed locally to ensure the proposed state change is valid. The validator client then attests that the block is valid and is the logical next block in their view of the chain (meaning it builds on the chain with the greatest weight of attestations as defined in the [fork choice rules](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#fork-choice)). The block is added to the local database in each node that attests to it.
6. The transaction can be considered "finalized", i.e., that it cannot be reverted, if it has become part of a chain with a "supermajority link" between two checkpoints. Checkpoints occur at the start of each epoch and to have a supermajority link they must both be attested to by 66% of the total staked ETH on the network.

## FINALITY

A transaction has "finality" in distributed networks when its part of a block that can't change without a significant amount of ETH getting burned. On proof-of-stake Ethereum, this is managed using "checkpoint" blocks. The first block in each epoch is a checkpoint. Validators vote for pairs of checkpoints that it considers to be valid. If a pair of checkpoints attracts votes representing at least two-thirds of the total staked ETH, the checkpoints are upgraded. The more recent of the two (target) becomes "justified". The earlier of the two is already justified because it was the "target" in the previous epoch. Now it is upgraded to "finalized".

To revert a finalized block, an attacker would commit to losing at least one-third of the total supply of staked ETH. The exact reason for this is explained in this [Ethereum Foundation blog post](https://blog.ethereum.org/2016/05/09/on-settlement-finality/). Since finality requires a two-thirds majority, an attacker could prevent the network from reaching finality by voting with one-third of the total stake. There is a mechanism to defend against this: the [inactivity leak](https://eth2book.info/bellatrix/part2/incentives/inactivity). This activates whenever the chain fails to finalize for more than four epochs. The inactivity leak bleeds away the staked ETH from validators voting against the majority, allowing the majority to regain a two-thirds majority and finalize the chain.

This concept of finality is particularly important in the financial industry, where institutions need to maximally quickly have certainty over whether or not the certain assets are, in a legal sense, "theirs", and if their assets _are_ deemed to be theirs, then it should not be possible for a random blockchain glitch to suddenly decide that the operation that made those assets theirs is now reverted and so their ownership claim over those assets is lost.

### Finality is always probabilistic

In Bitcoin, there have so far been three instances in which a transaction has been reverted after a long time:

- In 2010, an attacker managed to [give themselves 186 billion BTC](https://en.bitcoin.it/wiki/Incidents#Value_overflow) by exploiting an integer overflow vulnerability. This was fixed, but at the cost of reverting half a day's worth of transactions.
- In 2013, the blockchain forked because of [a bug](https://bitcoinmagazine.com/articles/bitcoin-network-shaken-by-blockchain-fork-1363144448) that existed in one version of the software but not another version, leading to part of the network rejecting a chain that was accepted as dominant by the other part. The split was resolved after 6 hours.
- In 2015, roughly six blocks were reverted because a Bitcoin mining pool was mining invalid blocks [without verifying them](https://www.reddit.com/r/Bitcoin/comments/3c2cfd/psa_f2pool_is_mining_invalid_blocks/)

[Finality | Binance Academy](https://academy.binance.com/en/glossary/finality)

[consensus - Network partitioning and FINALITY - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/139360/network-partitioning-and-finality?rq=1)

[On Settlement Finality | Ethereum Foundation Blog](https://blog.ethereum.org/2016/05/09/on-settlement-finality)

[The Engineer’s Guide to Blockchain Finality | Trail of Bits Blog](https://blog.trailofbits.com/2023/08/23/the-engineers-guide-to-blockchain-finality/)

## CRYPTO-ECONOMIC SECURITY

Running a validator is a commitment. The validator is expected to maintain sufficient hardware and connectivity to participate in block validation and proposal. In return, the validator is paid in ETH (their staked balance increases). On the other hand, participating as a validator also opens new avenues for users to attack the network for personal gain or sabotage. To prevent this, validators miss out on ETH rewards if they fail to participate when called upon, and their existing stake can be destroyed if they behave dishonestly. There are two primary behaviors that can be considered dishonest: proposing multiple blocks in a single slot (equivocating) and submitting contradictory attestations.

The amount of ETH slashed depends on how many validators are also being slashed at around the same time. This is known as the ["correlation penalty"](https://eth2book.info/bellatrix/part2/incentives/slashing#the-correlation-penalty), and it can be minor (~1% stake for a single validator slashed on their own) or can result in 100% of the validator's stake getting destroyed (mass slashing event). It is imposed halfway through a forced exit period that begins with an immediate penalty (up to 0.5 ETH) on Day 1, the correlation penalty on Day 18, and finally, ejection from the network on Day 36. They receive minor attestation penalties every day because they are present on the network but not submitting votes. This all means a coordinated attack would be very costly for the attacker.

## FORK CHOICE

When the network performs optimally and honestly, there is only ever one new block at the head of the chain, and all validators attest to it. However, it is possible for validators to have different views of the head of the chain due to network latency or because a block proposer has equivocated. Therefore, consensus clients require an algorithm to decide which one to favor. The algorithm used in proof-of-stake Ethereum is called [LMD-GHOST](https://arxiv.org/pdf/2003.03052.pdf), and it works by identifying the fork that has the greatest weight of attestations in its history.

## PROOF-OF-STAKE AND SECURITY

The threat of a [51% attack](https://www.investopedia.com/terms/1/51-attack.asp) still exists on proof-of-stake as it does on proof-of-work, but it's even riskier for the attackers. An attacker would need 51% of the staked ETH. They could then use their own attestations to ensure their preferred fork was the one with the most accumulated attestations. The 'weight' of accumulated attestations is what consensus clients use to determine the correct chain, so this attacker would be able to make their fork the canonical one. However, a strength of proof-of-stake over proof-of-work is that the community has flexibility in mounting a counter-attack. For example, the honest validators could decide to keep building on the minority chain and ignore the attacker's fork while encouraging apps, exchanges, and pools to do the same. They could also decide to forcibly remove the attacker from the network and destroy their staked ETH. These are strong economic defenses against a 51% attack.

51% attacks are just one flavor of malicious activity. Bad actors could attempt long-range attacks (although the finality gadget neutralizes this attack vector), short range 'reorgs' (although proposer boosting and attestation deadlines mitigate this), bouncing and balancing attacks (also mitigated by proposer boosting, and these attacks have anyway only been demonstrated under idealized network conditions) or avalanche attacks (neutralized by the fork choice algorithms rule of only considering the latest message).

Overall, proof-of-stake, as it is implemented on Ethereum, has been demonstrated to be more economically secure than proof-of-work.

## PROS AND CONS

| Pros | Cons |
|---|---|
| Staking makes it easier for individuals to participate in securing the network, promoting decentralization. validator node can be run on a normal laptop. Staking pools allow users to stake without having 32 ETH. | Proof-of-stake is younger and less battle-tested compared to proof-of-work |
| Staking is more decentralized. Economies of scale do not apply in the same way that they do for PoW mining. | Proof-of-stake is more complex to implement than proof-of-work |
| Proof-of-stake offers greater crypto-economic security than proof-of-work | Users need to run three pieces of software to participate in Ethereum's proof-of-stake. |
| Less issuance of new ETH is required to incentivize network participants |  |
