# Time complexities

## list

The Average Case assumes parameters generated uniformly at random.

Internally, a list is represented as an array; the largest costs come from growing beyond the current allocation size (because everything must move), or from inserting or deleting somewhere near the beginning (because everything after that must move). If you need to add/remove at both ends, consider using a collections.deque instead.

| Operation                                                                | Average Case | [Amortized Worst Case](http://en.wikipedia.org/wiki/Amortized_analysis) |
|------------------------|--------------------|----------------------------|
| Copy                                                                     | O(n)         | O(n)                                                                    |
| Append[1]                                                              | O(1)         | O(1)                                                                    |
| Pop last                                                                 | O(1)         | O(1)                                                                    |
| Pop intermediate                                                         | O(k)         | O(k)                                                                    |
| Insert                                                                   | O(n)         | O(n)                                                                    |
| Get Item                                                                 | O(1)         | O(1)                                                                    |
| Set Item                                                                 | O(1)         | O(1)                                                                    |
| Delete Item                                                              | O(n)         | O(n)                                                                    |
| Iteration                                                                | O(n)         | O(n)                                                                    |
| Get Slice                                                                | O(k)         | O(k)                                                                    |
| Del Slice                                                                | O(n)         | O(n)                                                                    |
| Set Slice                                                                | O(k+n)       | O(k+n)                                                                  |
| Extend[1]                                                              | O(k)         | O(k)                                                                    |
| [Sort](http://svn.python.org/projects/python/trunk/Objects/listsort.txt) | O(n log n)   | O(n log n)                                                              |
| Multiply                                                                 | O(nk)        | O(nk)                                                                   |
| x in s                                                                   | O(n)         |                                                                        |
| min(s), max(s)                                                           | O(n)         |                                                                        |
| Get Length                                                               | O(1)         | O(1)                                                                    |

## collections.deque

A deque (double-ended queue) is represented internally as a doubly linked list. (Well, a list of arrays rather than objects, for greater efficiency.) Both ends are accessible, but even looking at the middle is slow, and adding to or removing from the middle is slower still.

| Operation  | Average Case | Amortized Worst Case |
|------------|--------------|----------------------|
| Copy       | O(n)         | O(n)                 |
| append     | O(1)         | O(1)                 |
| appendleft | O(1)         | O(1)                 |
| pop        | O(1)         | O(1)                 |
| popleft    | O(1)         | O(1)                 |
| extend     | O(k)         | O(k)                 |
| extendleft | O(k)         | O(k)                 |
| rotate     | O(k)         | O(k)                 |
| remove     | O(n)         | O(n)                 |

## set

| Operation                         | Average case                                                                  | Worst Case                                     | notes                                          |
|-------------------------|-------------|--------------------|--------------|
| x in s                            | O(1)                                                                          | O(n)                                           |                                               |
| Union s|t                        | [O(len(s)+len(t))](https://wiki.python.org/moin/TimeComplexity_%28SetCode%29) |                                               |                                               |
| Intersection s&t                  | O(min(len(s), len(t))                                                         | O(len(s) * len(t))                            | replace "min" with "max" if t is not a set |
| Multiple intersection s1&s2&..&sn |                                                                              | (n-1)*O(l) where l is max(len(s1),.., len(sn)) |                                               |
| Difference s-t                    | O(len(s))                                                                     |                                               |                                               |
| s.difference_update(t)            | O(len(t))                                                                     |                                               |                                               |
| Symmetric Difference s^t         | O(len(s))                                                                     | O(len(s) * len(t))                            |                                               |
| s.symmetric_difference_update(t)  | O(len(t))                                                                     | O(len(t) * len(s))                            |                                               |

- As seen in the[source code](http://svn.python.org/projects/python/trunk/Objects/setobject.c) the complexities for set difference s-t or s.difference(t) (set_difference()) and in-place set difference s.difference_update(t) (set_difference_update_internal()) are different! The first one is O(len(s)) (for every element in s add it to the new set, if not in t). The second one is O(len(t)) (for every element in t remove it from s). So care must be taken as to which is preferred, depending on which one is the longest set and whether a new set is needed.
- To perform set operations like s-t, both s and t need to be sets. However you can do the method equivalents even if t is any iterable, for example s.difference(l), where l is a list.

## dict

The Average Case times listed for dict objects assume that the hash function for the objects is sufficiently robust to make collisions uncommon. The Average Case assumes the keys used in parameters are selected uniformly at random from the set of all keys.

Note that there is a fast-path for dicts that (in practice) only deal with str keys; this doesn't affect the algorithmic complexity, but it can significantly affect the constant factors: how quickly a typical program finishes.

| Operation      | Average Case | Amortized Worst Case |
|----------------|--------------|----------------------|
| Copy[2]      | O(n)         | O(n)                 |
| Get Item       | O(1)         | O(n)                 |
| Set Item[1]  | O(1)         | O(n)                 |
| Delete Item    | O(1)         | O(n)                 |
| Iteration[2] | O(n)         | O(n)                 |

<https://wiki.python.org/moin/TimeComplexity>
