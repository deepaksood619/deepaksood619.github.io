---
slug: /algorithms/searching-sorting/shuffle-sort
title: Understanding Shuffle Sort Algorithm
description: Learn about the Shuffle Sort method for generating random permutations and its advantages over traditional sorting techniques.
created: 2023-03-05
updated: 2023-03-07
---
Goal: Rearrange array so that result is a uniformly random permutation

- Generate a random real number for each array entry
- Sort the array

Proposition: Shuffle sort produces a uniformly random permutation of the input array, provided no duplicate values

Drawback - requires sort which takes quadratic or linearithmic time (quasilinear time, where k = 1, [n log n])

Solution - Knuth Shuffle takes linear time
