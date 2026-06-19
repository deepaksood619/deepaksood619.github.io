---
slug: /algorithms/searching-sorting/knuth-shuffle
title: Understanding the Knuth Shuffle Algorithm
description: Learn how the Knuth Shuffle efficiently produces a uniformly random permutation
  of an array in linear time.
created: '2023-03-05'
last_update: '2023-03-07'
---

# Knuth Shuffle

## Knuth Shuffle

- In iteration i, pick integer r between 0 and i uniformly at random.
- Swap a[i] and a[r]
- **Proposition -** Knuth shuffling algorithm produces a uniformly random permutation of the input array in linear time
