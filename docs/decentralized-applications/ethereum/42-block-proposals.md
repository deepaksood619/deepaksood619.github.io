# Block Proposals

## WHO PRODUCES BLOCKS?

Validator accounts propose blocks. Validator accounts are managed by node operators who run validator software as part of their execution and consensus clients and have deposited at least 32 ETH into the deposit contract. However, each validator is only occasionally responsible for proposing a block. Ethereum measures time in slots and epochs. Each slot is twelve seconds, and 32 slots (6.4 minutes) make up an epoch. Every slot is an opportunity to add a new block on Ethereum.

### Random selection

A single validator is pseudo-randomly chosen to propose a block in each slot. There is no such thing as true randomness in a blockchain because if each node generated genuinely random numbers, they couldn't come to consensus. Instead, the aim is to make the validator selection process unpredictable. The randomness is achieved on Ethereum using an algorithm called RANDAO that mixes a hash from the block proposer with a seed that gets updated every block. This value is used to select a specific validator from the total validator set. The validator selection is fixed two epochs in advance as a way to protect against certain kinds of seed manipulation.

## HOW IS THE BLOCK CREATED?

The block proposer is expected to broadcast a signed beacon block that builds on top of the most recent head of the chain according to the view of their own locally-run fork choice algorithm. The fork choice algorithm applies any queued attestations left over from the previous slot, then finds the block with the greatest accumulated weight of attestations in its history. That block is the parent of the new block created by the proposer.

## WHAT HAPPENS TO THE BLOCK?

The block is added to the block proposer's local database and broadcast to peers over the consensus layer gossip network. When a validator receives the block, it verifies the data inside it, including checking that the block has the correct parent, corresponds to the correct slot, that the proposer index is the expected one, that the RANDAO reveal is valid and that the proposer is not slashed. The `execution_payload` is unbundled, and the validator's execution client re-executes the transactions in the list to check the proposed state change. Assuming the block passes all these checks, each validator adds the block to its own canonical chain. The process then starts again in the next slot.

## BLOCK REWARDS

The block proposer receives payment for their work. There is a `base_reward` calculated as a function of the number of active validators and their effective balances. The block proposer then receives a fraction of `base_reward` for every valid attestation included in the block; the more validators attest to the block, the greater the block proposer's reward. There is also a reward for reporting validators that should be slashed, equal to `1/512 * effective balance` for each slashed validator.

[Block proposal | ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/block-proposal/)
