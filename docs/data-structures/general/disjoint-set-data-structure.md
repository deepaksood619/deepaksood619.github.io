# Disjoint-Set Data Structure

Also called as union-find data structure or merge-find set, is a DS that keeps track of set of elements partitioned into a number of disjoint (non-overlapping) subset. It provides near constant time operation (bounded by inverse- Ackermann function) to add new sets, to merge existing sets and to determine whether elements are in the same set.

## Representation

A disjoint set forest consists of a number of elements each of which contains an id, a parent pointer and in efficient algorithms, a value called the rank.
The parent pointers of elements are arranged to form one or more [trees](https://en.wikipedia.org/wiki/Tree_data_structure), each representing a set. If an element's parent pointer points to no other element, then the element is the root of a tree and is the representative member of its set. A set may consist of only a single element. However, if the element has a parent, the element is part of whatever set is identified by following the chain of parents upwards until a representative element (one without a parent) is reached at the root of the tree.
Forests can be represented compactly in memory as arrays in which parents are indicated by their array index.

## Operations

1. MakeSet

The *MakeSet*operation makes a new set by creating a new element with a unique id, a rank of 0, and a parent pointer to itself. The parent pointer to itself indicates that the element is the representative member of its own set.

The *MakeSet*operation hasO(1)time complexity.

Pseudocode:

## function *MakeSet*(*x*)

if *x* is not already present:
add *x* to the disjoint-set tree
x.parent := x
x.rank := 0
2. Find

*Find(x)*follows the chain of parent pointers from *x* upwards through the tree until an element is reached whose parent is itself. This element is the root of the tree and is the representative member of the set to which *x* belongs, and may be *x* itself.

*Path compression*, is a way of flattening the structure of the tree whenever *Find*is used on it. Since each element visited on the way to a root is part of the same set, all of these visited elements can be reattached directly to the root. The resulting tree is much flatter, speeding up future operations not only on these elements, but also on those referencing them.

Pseudocode:

## function *Find*(x)

if x.parent != x
x.parent := *Find*(x.parent)
return x.parent
3. Union

*Union(x, y)*uses *Find*to determine the roots of the trees *x* and *y* belong to. If the roots are distinct, the trees are combined by attaching the root of one to the root of the other. If this is done naively, such as by always making *x* a child of*y*, the height of the trees can grow as

. To prevent this*union by rank*is used.

*Union by rank*always attaches the shorter tree to the root of the taller tree. Thus, the resulting tree is no taller than the originals unless they were of equal height, in which case the resulting tree is taller by one node.

To implement*union by rank*, each element is associated with a rank. Initially a set has one element and a rank of zero. If two sets are unioned and have the same rank, the resulting set's rank is one larger; otherwise, if two sets are unioned and have different ranks, the resulting set's rank is the larger of the two. Ranks are used instead of height or depth because path compression will change the trees' heights over time.

Pseudocode:

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
xRoot.rank := xRoot.rank + 1 **Optimizations**

1. Weighted Union (Union by rank)

2. Path Compression during Find

## Time Complexity

Without any optimizations, Union and Find will take O(n)

With both optimizations i.e. Union by Rank and Path Compression, the time complexity is O(x(n)) where x is inverse Ackermann function. This value is < 5 for any value of n that can be written in this physical universe, so disjoint set operations take place in essentially constant time

## Applications

1. Crucial role in finding Minimum Spanning Tree of a graph in Kruskal's algorithm.

2. Keep track of connected components in an undirected graph

## References

<https://en.wikipedia.org/wiki/Disjoint-set_data_structure>
