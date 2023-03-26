# Beap (Bi-Parental Heap)

Beap, short for bi-parental heap, introduced by Ian Munro and Hendra Suwanda. In this data structure a node usually has two parents (unless it is the first or last on a level) and two children (unless it is on the last level). What separates the beap from Williams' heap is that beap allows sublinear search

Unlike a heap, a beap allows [sublinear](https://en.wikipedia.org/wiki/Sublinear) search.

![image](../../media/Beap-(Bi-Parental-Heap)-image1.jpg)

**Performance**

The height of the structure is approximately `√n`. Also, assuming the last level is full, the number of elements on that level is also `√n`. In fact, because of these properties all basic operations (insert, remove, find) run in `0(√n)` time on average. Find operations in the heap can be 0(n) in the worst case. Removal and insertion of new elements involves propagation of elements up or down (much like in a heap) in order to restore the beap invariant. An additional perk is that beap provides constant time access to the smallest element and 0(√n) time for the maximum element.

## Advantages

The main advantage of the beap is that it can be fully implemented in-place - only data nodes need to be present (no pointers or other extra information is required). However, this structure should be used with care since it is not 0(logn)or does it perform much better than a vector for small values of n.
