# Segment Tree

In [computer science](https://en.wikipedia.org/wiki/Computer_science), asegment tree, also known as a statistic tree, is a [tree](https://en.wikipedia.org/wiki/Tree_(data_structure))[data structure](https://en.wikipedia.org/wiki/Data_structure) used for storing information about [intervals](https://en.wikipedia.org/wiki/Interval_(mathematics)), or segments. It allows querying which of the stored segments contain a given point. It is, in principle, a static structure; that is, it's a structure that cannot be modified once it's built. A similar data structure is the [interval tree](https://en.wikipedia.org/wiki/Interval_tree).

A Segment Tree is a data structure that allows answering range queries over an array effectively, while still being flexible enough to allow modifying the array. This includes finding the sum of consecutive array elementsa [l...r]a [l...r], or finding the minimum element in a such a range inO(logn)O(log⁡n)time. Between answering such queries the Segment Tree allows modifying the array by replacing one element, or even change the elements of a whole subsegment (e.g. assigning all elementsa [l...r]a [l...r]to any value, or adding a value to all element in the subsegment).

In general a Segment Tree is a very flexible data structure, and a huge number of problems can be solved with it. Additionally it is also possible to apply more complex operations and answer more complex queries.

In particular the Segment Tree can be easily generalized to larger dimensions. For instance with a two-dimensional Segment Tree you can answer sum or minimum queries over some subrectangle of a given matrix. However only inO(log2n)O(log2⁡n)time.
A segment tree is usually represented in an array.

A segment tree for a setIofnintervals uses [O](https://en.wikipedia.org/wiki/Big_O_notation)(nlogn) storage and can be built inO(nlogn) time. Segment trees support searching for all the intervals that contain a query point inO(logn+k), kbeing the number of retrieved intervals or segments.
One important property of Segment Trees is, that they require only a linear amount of memory. The standard Segment Tree requires 4n4n vertices for working on an array of size n.

Applications of the segment tree are in the areas of [computational geometry](https://en.wikipedia.org/wiki/Computational_geometry), and [geographic information systems](https://en.wikipedia.org/wiki/Geographic_information_systems).

https://cp-algorithms.com/data_structures/segment_tree.html

https://en.wikipedia.org/wiki/Segment_tree
