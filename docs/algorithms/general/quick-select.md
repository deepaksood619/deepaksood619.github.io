---
slug: /algorithms/general/quick-select
title: Understanding Randomized Quickselect Algorithm
description: Explore the Quick Select algorithm to find the kth smallest item in linear time using a partitioning method.
created: 2023-03-05
last_update: 2024-02-05
---
Randomized quickselect, a quicksort variant which finds the kth smallest item in linear time.

Goal - Given an array of N items, find a kth smallest item.

## Quick-select

- Partition array so that:
    - Entry a[j] is in place.
    - No larger entry to the left of j
    - No smaller entry to the right of j
- Takes linear time on average

![image](../../media/Quick-Select-image1.jpg)
