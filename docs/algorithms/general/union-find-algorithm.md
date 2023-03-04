# Union-Find Algorithm

A union-find algorithm is an algorithm that performs two operations on a disjoint-set data structure -

1. Find - Determine which subset a particular element is in.

2. Union - Join two subsets into a single subset.

Used for **dynamic connectivity**

Given a set on N objects -

- Union Command - connect two objects

- Find/connected query command - is there a path connecting two objects

We assume "is connected to" is an equivalence relation:

- Reflexive: p is connected to p (Connected to itself)
- Symmetric: if p is connected to q, then q is connected to p
- Transitive: if p is connected to q and q is connected to r, then p is connected to r.

## Connected Components - Maximal set of objects that are mutually connected

- Find query: Check if two objects are in the same component

- Union Command: Replace components containing two objects with their union.

## Quick-find (Eager approach)

Setting all the id to parent in Union step

## Quick-union (lazy approach)

Only setting the last component's id to parent, Creating a tree like DS whose root represents the parent. Int root(int i) is used for finding the parent and checking if two elements are connected

## Optimizations

1. Weighted Quick Union (Union by rank / Union by height)
    - Modify quick-union to avoid tall trees
    - Keep track of size of each tree
    - Balance by joining root of smaller tree to root of larger tree

2. Path Compression

Just after computing the root of p, set the id of each examined node to point to that root.

## Complexity

Without any optimizations, Union and Find will take O(n)

With both optimizations i.e. Union by Rank and Path Compression, the time complexity is O(α(V)) where α is inverse Ackermann function. This value is < 5 for any value of n that can be written in this physical universe, so disjoint set operations take place in essentially constant time

Any sequence of M union-find ops on N objects makes <= c(N+M lg* N) array acccesses.

| N        | lg* N |
|----------|--------|
| 1        | 0      |
| 2        | 1      |
| 4        | 2      |
| 16       | 3      |
| 65536    | 4      |
| 2^65536 | 5      |

Here lg* N is called Iterate log function (It's the number of times you have to take the log event to get 1).

Analysis can be improved to N + M α (M, N)

Here α is called Ackermann function.

| Algorithm                      | worst-case time |
|--------------------------------|-----------------|
| Quick-find                     | M N             |
| Weighted QU                    | N + M log N     |
| QU + path compression          | N + M log N     |
| Weighted QU + path compression | N + M lg* N    |

M union-find operations on a set of N objects

## Code Snippets

1. Find

## function *Find*(x)

if x.parent != x
x.parent := *Find*(x.parent)
return x.parent

2. Union

## function *Union*(x, y)

xRoot := *Find*(x)
yRoot := *Find*(y)

// x and y are already in the same set
if xRoot == yRoot
return

// x and y are not in same set, so we merge them
if xRoot.rank < yRoot.rank
xRoot.parent := yRoot
else if xRoot.rank > yRoot.rank
yRoot.parent := xRoot
else
//Arbitrarily make one root the new parent
yRoot.parent := xRoot
xRoot.rank := xRoot.rank + 1

## Applications

1. Check whether a graph contains a cycle or not

2. Percolation

3. Dynamic Connectivity

4. Connected Components

5. Least common ancestor

6. Equivalence of finite state automata

7. Kruskal's minimum spanning tree

## Union-Find vs DFS

The union-find algorithm is best suited for situations where the equivalence relationship is changing, i.e., there are "Union" operations which need to be performed on your set of partitions. Given a fixed undirected graph, you don't have the equivalence relationships changing at all - the edges are all fixed. OTOH, if you have a graph with new edges being added, DFS won't cut it. While DFS is asymptotically faster than union-find, in practice, the likely deciding factor would be the actual problem that you are trying to solve.

## Static graph - DFS

## Dynamic graph - Union-find
