---
slug: /algorithms/searching-sorting/external-sort
title: Understanding External Sort in Unix
description: Explore how Unix uses external sort with R-way merging to efficiently handle large datasets beyond memory limits.
created: 2023-03-05
updated: 2023-03-07
---
![image](../../media/External-Sort-image1.jpg)

![image](../../media/External-Sort-image2.jpg)

![image](../../media/External-Sort-image3.jpg)

## Unix External Sort

Unix Sort uses an External R-Way merge sorting algorithm. It divides the input up into smaller portions (that fit into memory) and then merges each portion together at the end.
