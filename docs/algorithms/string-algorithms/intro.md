# Intro

## Subarray/substring

A subbarray is a **contiguous** part of array. An array that is inside another array. For example, consider the array [1, 2, 3, 4], There are 10 non-empty sub-arrays. The subbarays are (1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4) and (1,2,3,4). In general, for an array/string of size n, there are**n*(n+1)/2**non-empty subarrays/subsrings.

## Subsequence

A subsequence is a sequence that can be derived from another sequence by zero or more elements, without changing the order of the remaining elements.

For the same example, there are 15 sub-sequences. They are (1), (2), (3), (4), (1,2), (1,3),(1,4), (2,3), (2,4), (3,4), (1,2,3), (1,2,4), (1,3,4), (2,3,4), (1,2,3,4). More generally, we can say that for a sequence of size n, we can have (**2n-1**) non-empty sub-sequences in total.

*A string example to differentiate:*Consider strings "geeksforgeeks" and "gks". "gks" is a subsequence of "geeksforgeeks" but not a substring. "geeks" is both a subsequence and subarray. Every subarray is a subsequence. More specifically, **Subsequence is a generalization of substring.**
