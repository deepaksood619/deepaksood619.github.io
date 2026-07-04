---
slug: /data-structures/hashtable/hyperloglog
title: HyperLogLog - Probabilistic Cardinality Estimator
description: A probabilistic data structure for estimating cardinality of very large datasets with minimal memory usage
created: 2023-03-05
updated: 2026-07-04
---

HyperLogLog is a probabilistic data structure that estimates the cardinality of a set (number of distinct elements), trading perfect accuracy for efficient space utilization.

HyperLogLog is a streaming algorithm used for estimating the number of distinct elements (the cardinality) of very large data sets. HyperLogLog counter can count one billion distinct items with an accuracy of 2% using only 1.5 KB of memory. It is based on the bit pattern observation that for a stream of randomly distributed numbers, if there is a number x with the maximum of leading 0 bits k, the cardinality of the stream is very likely equal to 2^k.

HyperLogLog, it's a statistical data structure that derives approximations- in O(1) time complexity and O(log(log(n)) space complexity. The catch is that you get about 1.5% accuracy, configurable of course by taking up more space. As an example, 1.3KB can estimate the cardinality of tens of billions of unique values with an accuracy of a few percent.

## Key Characteristics

**Memory Efficiency:**

- Typical: 1.5 KB for cardinalities `>` 10^9 with ~2% standard error
- Redis implementation: Up to 12 KB with 0.81% standard error
- Constant memory usage regardless of cardinality: O(ε^-2 log log n + log n)

**Accuracy:**

- Standard error formula: `1.04/√m` where m is the number of registers
- Configurable: More registers = higher accuracy but more memory
- Redis: `<` 1% standard error (0.81%)

**Performance:**

- Add operation: O(1)
- Count operation: O(1) with very small average constant time
- Merge operation: O(N) where N is number of HyperLogLogs to merge

**Capacity:**

- Can estimate cardinalities up to 2^64 (18,446,744,073,709,551,616) members

## How It Works

### Core Principle

The cardinality of a multiset of uniformly distributed random numbers can be estimated by calculating the maximum number of leading zeros in the binary representation of each number in the set.

**Basic estimate:** If the maximum number of leading zeros observed is n, an estimate for the number of distinct elements is 2^n.

**Variance reduction:** The algorithm splits the multiset into numerous subsets (registers), calculating the maximum number of leading zeros in each subset, then uses a harmonic mean to combine these estimates.

### Algorithm Steps

**1. Add Operation:**

```text
x := h(v)                    # Hash the input value
j := 1 + ⟨x₁x₂...xb⟩₂      # First b bits select register
w := xb+1xb+2...             # Remaining bits
M[j] := max(M[j], ρ(w))      # Update register with max leading zeros
```

Where ρ(w) returns the position of the leftmost 1-bit.

**2. Count Operation:**

```text
Z = (Σ(j=1 to m) 2^-M[j])^-1      # Harmonic mean
E = αm · m² · Z                    # Apply bias correction
```

**3. Merge Operation:**

```text
hll_union[j] = max(hll₁[j], hll₂[j])  # Take max of each register pair
```

## Redis Implementation

### Commands

- **PFADD** - Adds elements to a HyperLogLog (O(1))
- **PFCOUNT** - Returns approximated cardinality (O(1))
- **PFMERGE** - Merges multiple HyperLogLogs (O(N))

### Example

```bash
PFADD bikes Hyperion Deimos Phoebe Quaoar
# (integer) 1

PFCOUNT bikes
# (integer) 4

PFADD commuter_bikes Salacia Mimas Quaoar
# (integer) 1

PFMERGE all_bikes bikes commuter_bikes
# OK

PFCOUNT all_bikes
# (integer) 6
```

### Properties

- Encoded as Redis string (can use GET/SET to serialize/deserialize)
- Up to 12KB memory in worst case
- Standard error `<` 1% (0.81%)
- Can estimate up to 2^64 unique elements

## Use Cases

**Web Analytics:**

- Unique visitors per page/day
- Unique video/song plays
- Unique search queries per day
- Anonymous tracking (no PII storage required)

**Data Processing:**

- Count-distinct in large-scale data streams
- Approximate cardinality in distributed systems
- Deduplication estimates
- Database query optimization

**Real-time Systems:**

- Unique user tracking in SaaS platforms
- IoT device counting
- Network traffic analysis
- Ad impression tracking

## Comparison with Exact Counting

| Method | Memory | Accuracy | Time Complexity |
|--------|--------|----------|-----------------|
| Exact (Set) | O(n) | 100% | O(1) add, O(1) count |
| HyperLogLog | O(log log n) | ~98-99% | O(1) add, O(1) count |

**Trade-off:** For counting 1 billion unique items:

- Exact: ~8 GB memory (storing 64-bit hashes)
- HyperLogLog: 1.5-12 KB memory (~0.0002% of exact)

## Space-Time Complexity

- **Time:** O(1) for add and count operations
- **Space:** O(log log n) where n is the set cardinality
- **Error:** O(1/√m) where m is number of registers

## Advanced Features

**Mergeable Sketches:**

- Multiple HyperLogLogs can be merged
- Useful for distributed systems
- Union operation preserves cardinality estimates

**Hash Function Dependency:**

- Requires uniform hash distribution
- Common choices: MurmurHash, xxHash
- Poor hash function degrades accuracy

## Limitations

- **Probabilistic:** Only provides estimates, not exact counts
- **No element retrieval:** Cannot list distinct elements
- **No deletion:** Cannot remove elements (use Count-Min Sketch for this)
- **Hash collisions:** Can affect accuracy for small cardinalities
- **Memory vs accuracy trade-off:** Better accuracy requires more registers

## Related Algorithms

- **LogLog:** Predecessor with higher variance
- **Count-Min Sketch:** Frequency estimation, supports deletion
- **Bloom Filter:** Set membership testing
- **MinHash:** Set similarity estimation

## Links

- [Wikipedia - HyperLogLog](https://en.wikipedia.org/wiki/HyperLogLog)
- [Redis HyperLogLog Documentation](https://redis.io/docs/latest/develop/data-types/probabilistic/hyperloglogs/)
- [Redis new data structure: the HyperLogLog](http://antirez.com/news/75)
- [Introduction to Probabilistic Data Structures](https://dzone.com/articles/introduction-probabilistic-0)
- [A problem so hard even Google relies on Random Chance - YouTube](https://www.youtube.com/watch?v=lJYufx0bfpw)
- [Redis HyperLogLog Explained - YouTube](https://www.youtube.com/watch?v=MunL8nnwscQ)
