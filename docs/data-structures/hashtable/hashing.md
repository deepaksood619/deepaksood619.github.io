# Hashing

https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial

## Hash Function

A **hash function** is any [function](https://en.wikipedia.org/wiki/Function_(mathematics)) that can be used to map [data](https://en.wikipedia.org/wiki/Data_(computing)) of arbitrary size to data of fixed size. The values returned by a hash function are called *hash values*,*hash codes*, *digests*, or simply *hashes*. The values are used to index a fixed-size table called a *hash table*. Use of a hash function to index a hash table is called *hashing* or *scatter storage addressing*.

## Consistent Hashing

Consistent Hashing is a special kind of hashing such that when a hash table is resized, only K/n keys need to be remapped on average, where K is the number of the keys, and n is the number of slots. In contrast, in most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped because the mapping between the keys and slots are defined by a modular operation.

https://www.akamai.com/es/es/multimedia/documents/technical-publication/consistent-hashing-and-random-trees-distributed-caching-protocols-for-relieving-hot-spots-on-the-world-wide-web-technical-publication.pdf

[The Ultimate Guide to Consistent Hashing | Toptal](https://www.toptal.com/big-data/consistent-hashing)

## Modular based hashing

## Applications

- **Associative arrays:** Hash tables are commonly used to implement many types of in-memory tables. They are used to implement associative arrays (arrays whose indices are arbitrary strings or other complicated objects).
- **Database indexing:** Hash tables may also be used as disk-based data structures and database indices (such as in dbm).
- **Caches:** Hash tables can be used to implement caches i.e. auxiliary data tables that are used to speed up the access to data, which is primarily stored in slower media.
- **Object representation:** Several dynamic languages, such as Perl, Python, JavaScript, and Ruby use hash tables to implement objects.
- Hash Functions are used in various algorithms to make their computing faster
- De-Duplication
  - Remove duplicates
    - Report unique visitors to web site
    - avoid duplicates in search results
    - Do not crawl same page twice
- Symbol tables in compilers
- Blocking network traffic
- Search algorithms (e.g. game tree exploration)
  - use hash table to avoid exploring any configuration (e.g. arrangement of chess pieces) more than once

## How to choose n = # of buckets (When using modulus to hash values to buckets)

1. Choose n to be prime (should be few factors, within constant factor of # of objects in table)

2. not too close to a power of 2

3. not too close to a power of 10

## The load of a hash table

## alpha = # of objects in hash table / # of buckets of hash table

Question - which hash table implementation strategy is feasible for load factors larger than 1 (Answer - Only chaining, because # of objects are greater than # of buckets, so only using linked list for collision can be used)

Therefore load factor for a hash table must be `<< 1`, for constant time operations, since if chaining is used, than we have to use exhaustive search for getting values whose key hash to same place

So if load factor increases, we increase the number of buckets.

A super hash function, that can handle all types of data **does not exists** (for every hash function there exists a pathological data set)

## Solution to pathological data set

- Use a cryptographic hash function (e.g. SHA-2)

This works because it's infeasible to reverse engineer a pathological data set

- Use randomization

Deisgn a family of hash function, and choose randomly. Such that, for all data sets S, "almost all" functions spread out "pretty evenly"

## Universal Hashing

## Perfect Hash Function

A hash function that maps each item into a unique slot is referred to as a perfect hash function.

## Hashing Integer Data Types

- **Identity Hash Function**
- **Trivial Hash Function**
- **Folding Method**
  - The folding method for constructing the hash functions begins by dividing the item into equal-size pieces (the last piece may not be of equal size)
  - These pieces are then added together to give the resulting hash value.- **Mid-square method**
  - We first square the item, and then extract some portion of the resulting digits.
  - For example, if the item were 44, we would first compute 44^2^ = 1936
  - By extracting the middle two digits, 93, and performing the remainder step, we get 93 % 11 = 5- **Division hashing**
- **Algebraic coding**
- **Unique permuatation hashing**
- **Multiplicative hashing**
- **Fibonacci hashing**
- **Zobrist hashing**

## Hashing Variable Length Data

- **Middle and ends**
- **Character folding**
- **Word length folding**
- **Radix conversion hashing**
- **Rolling hash**

## 2-choice Hashing

Explain the 2-choice hashing algorithm for exact-match hash tables.

In the 2-choice hashing algorithm, we use two independent hash functions to compute two separate indices into the hash table. Then, we look at both indices and find whichever one has lower occupancy.We insert a new element at this index. To lookup an element, we again hash the element using both hash functons to find 2 indices, and compare the element against the elements stored at each of the 2 indices.

On what metric is the 2-choice algorithm better than the standard hashing algorithm? Why?

The 2-choice algorithm is better on the metric of likelihood of overflowing the hash tables given a certain number of inserts into the hash table (equivalently, given a certain occupancy ratio). This is because the 2-choice algorithm explicitly favors the hash table location that has lower occupancy, which means that it is less likely to overflow an already full location in the hash table. The standard hashing algorithm, on the other hand, pays no attention to how occupied a location is.

https://en.wikipedia.org/wiki/2-choice_hashing

## 2-left Hashing

A [dictionary](https://xlinux.nist.gov/dads/HTML/dictionary.html) implemented with two [hash tables](https://xlinux.nist.gov/dads/HTML/hashtab.html) of equal size, T1and T2, and two different [hash functions](https://xlinux.nist.gov/dads/HTML/hash.html), h1and h2. A new [key](https://xlinux.nist.gov/dads/HTML/key.html) is put in table 2 only if there are fewer (colliding) keys at T2 [h2(key)] than at T1 [h1(key)], otherwise it is put in table 1. With n keys and two tables of size n/2, the most collisions is 0.69... log2ln n +[O](https://xlinux.nist.gov/dads/HTML/bigOnotation.html)(1) with high probability.

## Hash Table Implementations

- Using Array
- Alternatively, we can implement the hash table with a binary search tree. We can then guarantee an 0(log n) lookup time, since we can keep the tree balanced. Additionally, we may use less space, since a large array no longer needs to be allocated in the very beginning.

## Locality Sensitive Hashing (LSH)

In computer science, locality-sensitive hashing(LSH) is an algorithmic technique that hashes similar input items into the same "buckets" with high probability.(The number of buckets are much smaller than the universe of possible input items.)Since similar items end up in the same buckets, this technique can be used for [data clustering](https://en.wikipedia.org/wiki/Cluster_analysis) and [nearest neighbor search](https://en.wikipedia.org/wiki/Nearest_neighbor_search). It differs from [conventional hashing techniques](https://en.wikipedia.org/wiki/Hash_function) in that hash collisions are maximized, not minimized. Alternatively, the technique can be seen as a way to [reduce the dimensionality](https://en.wikipedia.org/wiki/Dimension_reduction) of high-dimensional data; high-dimensional input items can be reduced to low-dimensional versions while preserving relative distances between items.

Hashing-based approximate [nearest neighbor search](https://en.wikipedia.org/wiki/Nearest_neighbor_search) algorithms generally use one of two main categories of hashing methods: either data-independent methods, such as locality-sensitive hashing (LSH); or data-dependent methods, such as [Locality-preserving hashing](https://en.wikipedia.org/wiki/Locality-preserving_hashing)(LPH).

https://en.wikipedia.org/wiki/Locality-sensitive_hashing

https://towardsdatascience.com/understanding-locality-sensitive-hashing-49f6d1f6134

## Further Reading

- Birthday Paradox
- Pigeonhole Principle

https://en.wikipedia.org/wiki/Hash_function
