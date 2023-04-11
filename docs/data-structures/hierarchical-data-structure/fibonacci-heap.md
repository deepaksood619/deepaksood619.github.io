# Fibonacci Heap

## Key Points

- Running Time: O(E + V log V)
- Find minimum takes constant O(1) amortized time.
- Insert and decrease key also take constant amortized time
- Deletion takes O(log N) amortized time.

Data Structure for Priority Queue Operations, consisting of a collection of Heap Ordered Trees.

A Fibonacci heap is a collection of [trees](https://en.wikipedia.org/wiki/Tree_data_structure) satisfying the [minimum-heap property](https://en.wikipedia.org/wiki/Minimum-heap_property), that is, the key of a child is always greater than or equal to the key of the parent. This implies that the minimum key is always at the root of one of the trees. Compared with binomial heaps, the structure of a Fibonacci heap is more flexible. The trees do not have a prescribed shape and in the extreme case the heap can have every element in a separate tree. This flexibility allows some operations to be executed in a [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) manner, postponing the work for later operations. For example, merging heaps is done simply by concatenating the two lists of trees, and operation *decrease key* sometimes cuts a node from its parent and forms a new tree.

Lazily defer consolidation under next delete-min

## Running Time

- Find Min: **Θ(1)** [Same as both Binary and Binomial]
- Delete Min: **O(Log n)** [Θ(Log n) in both Binary and Binomial]
- Insert: **Θ(1)** [Θ(Log n) in Binary and Θ(1) in Binomial]
- Decrease-Key: **Θ(1)** [Θ(Log n) in both Binary and Binomial]
- Merge: **Θ(1)** [Θ(m Log n) or Θ(m+n) in Binary and Θ(Log n) in Binomial]

## Below are some interesting facts about Fibonacci Heap

- The reduced time complexity of Decrease-Key has importance in Dijkstra and Prim algorithms. With Binary Heap, time complexity of these algorithms is O(VLogV + ELogV). If Fibonacci Heap is used, then time complexity is improved to O(VLogV + E)
- Although Fibonacci Heap looks promising time complexity wise, it has been found slow in practice as hidden constants are high.
- Fibonacci heap are mainly called so because Fibonacci numbers are used in the running time analysis. Also, every node in Fibonacci Heap has degree at most O(log n) and the size of a subtree rooted in a node of degree k is at least Fk+2, where Fkis the kth Fibonacci number.
