# k-ary heap / d-ary heap / d-way heap

K-ary heaps are a generalization of binary heap(K=2) in which each node have K children instead of 2.
Properties:

1. Nearly complete binary tree, with all levels having maximum number of nodes except the last, which is filled in left to right manner.

2. Like Binary Heap, it can be divided into two categories:

   - Max k-ary heap (key at root is greater than all descendants and same is recursively true for all nodes).

   - Min k-ary heap (key at root is greater than all descendants and same is recursively true for all nodes)
3-ary max heap - root node is maximum
of all nodes
10
/ |
7 9 8
/ |  /
4 6 5 7

3-ary min heap -root node is minimum
of all nodes
10
/ |
12 11 13
/ |
14 15 18

The height of a complete k-ary tree with n-nodes is given by logkn.

## Applications of K-ary Heap

- K-ary heap when used in the implementation of [priority queue](http://geeksquiz.com/priority-queue-set-1-introduction/) allows faster decrease key operation as compared to binary heap ( O(log2n)) for binary heap vs O(logkn) for K-ary heap). Nevertheless, it causes the complexity of extractMin() operation to increase to O(k logkn) as compared to the complexity of O(log2n) when using binary heaps for priority queue. This allows K-ary heap to be more efficient in algorithms where decrease priority operations are more common than extractMin() operation.Example:[Dijkstra's](https://www.geeksforgeeks.org/greedy-algorithms-set-6-dijkstras-shortest-path-algorithm/) algorithm for single source shortest path and [Prim's](https://www.geeksforgeeks.org/greedy-algorithms-set-5-prims-minimum-spanning-tree-mst-2/) algorithm for minimum spanning tree
- K-ary heap has better memory cache behaviour than a binary heap which allows them to run more quickly in practice, although it has a larger worst case running time of both extractMin() and delete() operation (both being O(k logkn) ).
