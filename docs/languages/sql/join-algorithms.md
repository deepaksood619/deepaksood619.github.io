# Join Algorithms

### [nested loop join](https://en.wikipedia.org/wiki/Nested_loop_join)

A nested loop join is a naive [algorithm](https://en.wikipedia.org/wiki/Algorithm) that joins two sets by using two nested [loops](https://en.wikipedia.org/wiki/Loop_(computing))

For each value in the first data set. SQL Server loops through the second data set looking for matches

### [sort-merge join](https://en.wikipedia.org/wiki/Sort-merge_join)

The basic problem of a join algorithm is to find, for each distinct value of the join attribute, the set of [tuples](https://en.wikipedia.org/wiki/Tuple) in each relation which display that value. The key idea of the sort-merge algorithm is to first sort the relations by the join attribute, so that interleaved linear scans will encounter these sets at the same time.

In practice, the most expensive part of performing a sort-merge join is arranging for both inputs to the algorithm to be presented in sorted order. This can be achieved via an explicit sort operation (often an [external sort](https://en.wikipedia.org/wiki/External_sort)), or by taking advantage of a pre-existing ordering in one or both of the join relations. The latter condition, called interesting order, can occur because an input to the join might be produced by an index scan of a tree-based index, another merge join, or some other plan operator that happens to produce output sorted on an appropriate key. Interesting orders need not be serendipitous: the optimizer may seek out this possibility and choose a plan that is suboptimal for a specific preceding operation if it yields an interesting order that one or more downstream nodes can exploit.

Used to join two data sets that are already sorted using the same key. A row from each source is obtained. If the rows match they are joined. If the rows do not match the lower vaue row is discarded and a new row is obtained from that source

https://en.wikipedia.org/wiki/Sort-merge_join

#### Interesting order

An interesting order in a sort-merge join occurs when the inputs to the join are produced by:

- An index scan of a tree-based index
- Another merge join
- Some other plan operator that produces output sorted on an appropriate key

A sort-merge join is a common join algorithm in database systems that uses sorting. It's particularly efficient for large datasets that can't fit in memory. The algorithm works by:

1. Sorting both relations on the join attribute
2. Merging the sorted relations by scanning them sequentially
3. Looking for qualifying tuples
4. Dividing the data into smaller chunks
5. Sorting them independently
6. Merging them in a distributed manner

An operator has a flexible order requirement if it has more than one interesting sort order. For example, the merge-join operator has a flexible order requirement because every permutation of the join attributes is an interesting sort order.

### [hash join](https://en.wikipedia.org/wiki/Hash_join)

Hash joins are typically more efficient than nested loops joins, except when the probe side of the join is very small. However, hash joins can only be used to compute equijoins.

The task of a join algorithm is to find, for each distinct value of the join attribute, the set of [tuples](https://en.wikipedia.org/wiki/Tuple#Relational_model) in each relation which have that value.

Hash joins require an [equijoin](https://en.wikipedia.org/wiki/Equijoin) predicate (a [predicate](https://en.wikipedia.org/wiki/Syntactic_predicate) comparing records from one table with those from the other table using a conjunction of equality operators '=' on one or more columns).

- Classic hash join
- Grace hash join
- Hybrid hash join
- Hash anti-join
- Hash semi-join

A hashtable of the smaller data set is created, then SQL Server loops through the larger data set probing the hashtable for matching values. Used when two large data sets must be joined

https://en.wikipedia.org/wiki/Hash_join

### Hash Join vs Merge Join

Hash joins are more efficient for large tables, while merge joins are better for joining sorted tables.

#### Hash joins

- Can only be used for equi-joins
- Are better for joining large amounts of data in an equi-join
- Generally perform better than sort merge joins
- Use a hash table to join equi joins
- Can cause an overflow condition in the hash table if:
    - The hash index is greater than the main memory
    - There are multiple tuples with the same join attribute values

#### Merge joins

- Are faster and use less memory than hash joins
- Are more flexible than hash joins
- Are used to join sorted tables
- Are best for joining large and sorted and non-indexed inputs

The PostgreSQL query planner automatically chooses the most appropriate join algorithm based on the query conditions and table statistics.

[Difference between Hash Join and Sort Merge Join - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-hash-join-and-sort-merge-join/)

[Hash Joins Versus Merge Joins](https://www.vertica.com/docs/9.3.x/HTML/Content/Authoring/AnalyzingData/Optimizations/HashJoinsVs.MergeJoins.htm)

### Left Anti Semi Join

Left Anti Semi Join is the opposite of a [Left Semi Join](http://sqlity.net/en/1348/a-join-a-day-the-left-semi-join/). However, that does not make it a [right semi join](http://sqlity.net/en/1354/a-join-a-day-the-right-semi-join/). Instead "Anti" affects which rows are returned and which aren't. Like the Left Semi Join, the Left Anti Semi Join returns only rows from the left row source. Each row is also returned at most once. And duplicates are also not eliminated. However, other than the Left Semi Join, the Left Anti Semi Join returns only rows for which no match on the right side exists.

[A Join A Day - The Left Anti Semi Join - sqlity.net](https://sqlity.net/en/1360/a-join-a-day-the-left-anti-semi-join/)

## Others

- Left Anti Join - [Left anti join - Power Query](https://learn.microsoft.com/en-us/power-query/merge-queries-left-anti)
- Right Anti Join - [Right anti join - Power Query](https://learn.microsoft.com/en-us/power-query/merge-queries-right-anti)

## Links

[Internals of Physical Join Operators (Nested Loops Join, Hash Match Join & Merge Join) in SQL Server](https://www.sqlshack.com/internals-of-physical-join-operators-nested-loops-join-hash-match-join-merge-join-in-sql-server/)
