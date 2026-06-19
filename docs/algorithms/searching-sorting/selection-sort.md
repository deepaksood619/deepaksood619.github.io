---
slug: /algorithms/searching-sorting/selection-sort
title: Understanding Selection Sort Algorithm
description: Learn about the Selection Sort algorithm, its operations, efficiency,
  and performance characteristics in this concise guide.
created: '2023-03-05'
last_update: '2023-03-07'
---

# Selection Sort

Not stable

For all elements -

- In iteration i, find index min of smallest remaining element
- Swap a[i] and a[min]

![image](../../media/Selection-Sort-image1.jpg)

Proposition - Selection sort uses ~ N^2^ / 2 compares (Quadratic) and N exchanges (Linear)

Running time - Quadratic time, even if input is sorted

Number of exchanges - Linear, at max n exchanges
