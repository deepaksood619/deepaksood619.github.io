---
slug: /algorithms/general/knuth-shuffle
title: Understanding the Knuth Shuffle Algorithm
description: Learn how the Knuth Shuffle efficiently creates a random permutation of an array in linear time with simple swap operations.
created: 2023-03-05
updated: 2023-03-07
---
Goal: Rearrange array so that the result is a uniformly random permutation in linear time

- In iteration i, pick integer r between 0 and i uniformly at random.
- Swap a[i] and a[r]

![image](../../media/Knuth-Shuffle-image1.jpg)
