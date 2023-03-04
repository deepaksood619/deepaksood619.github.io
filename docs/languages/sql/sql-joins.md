# SQL Joins

The SQLJoinsclause is used to combine records from two or more tables in a database. A JOIN is a means for combining fields from two tables by using values common to each.

A SQL join is a Structured Query Language (SQL) instruction to combine data from two sets of data (i.e. two tables).

## Types of Joins

### Inner Join

The inner join is probably the most commonly-used type of join in SQL. Inner joins return all rows from two or more tables that meet the join condition.

![image](../../media/SQL-Joins-image1.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
INNER JOIN TableB
ON A.columnName = B.columnName;
```

### Left [Outer] Join

The left outer join (sometimes abbreviated to left join) returns all rows from theleft-hand table specified in the ON condition andonlythe rows from theright-hand table that meet the join condition.

![image](../../media/SQL-Joins-image2.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
LEFT OUTER JOIN TableB
ON A.columnName = B.columnName
```

### Left [Outer] Join without Intersection

This join is a variant on the basic left outer join, but instead, it returns all rows from theleft-hand table specified in the ON condition that also meet the join condition andnoneof the rows from theright-hand table that meet the join condition.

![image](../../media/SQL-Joins-image3.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
LEFT OUTER JOIN TableB
ON A.columnName = B.columnName
WHERE B.columnName IS NULL
```

### Right [Outer] Join

The right outer join (sometimes abbreviated to right join) returns all rows from theright-hand table specified in the ON condition andonlythe rows from theleft-hand table that meet the join condition.

![image](../../media/SQL-Joins-image4.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
RIGHT OUTER JOIN TableB
ON A.columnName = B.columnName
```

### Right [Outer] Join without Intersection

This join is a variant on the basic right outer join, but instead, it returns all rows from theright-hand table specified in the ON condition that also meet the join condition andnoneof the rows from theleft-hand table that meet the join condition.

![image](../../media/SQL-Joins-image5.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
RIGHT OUTER JOIN TableB
ON A.columnName = B.columnName
WHERE A.columnName IS NULL
```

### Full [Outer] Join

The full outer join (sometimes abbreviated to full join) returns all rows from both tables named in the ON condition where the join condition isnotmet (including NULL values).

![image](../../media/SQL-Joins-image6.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
FULL JOIN TableB
ON A.columnName = B.columnName
```

### Full [Outer] Join without Intersection

This variant of the full outer join (sometimes abbreviated to full join) returns all rows from both tables named in the ON condition where the join condition isnotmet (excluding NULL values).

![image](../../media/SQL-Joins-image7.jpg)

Sample SQL

```sql
SELECT columns
FROM TableA
FULL JOIN TableB
ON A.columnName = B.columnName
WHERE A.columnName IS NULL
OR B.columnName IS NULL
```

- **Self Join -** is used to join a table to itself as if the table were two tables, temporarily renaming at least one table in the SQL statement

- **Cartesian Join -** returns the Cartesian product of the sets of records from the two or more joined tables

- **Cross Join -** A CROSS JOIN joins everything with everything. There is no need to provide a key to join on and it can result in a very big data set

## Join Algorithms

### [nested loop join](https://en.wikipedia.org/wiki/Nested_loop_join)

Anested loop joinis a naive [algorithm](https://en.wikipedia.org/wiki/Algorithm) that joins two sets by using two nested [loops](https://en.wikipedia.org/wiki/Loop_(computing)).

For each value in the first data set. SQL Server loops through the second data set looking for matches

### [sort-merge join](https://en.wikipedia.org/wiki/Sort-merge_join)

The basic problem of a join algorithm is to find, for each distinct value of the join attribute, the set of [tuples](https://en.wikipedia.org/wiki/Tuple) in each relation which display that value. The key idea of the sort-merge algorithm is to first sort the relations by the join attribute, so that interleaved linear scans will encounter these sets at the same time.

In practice, the most expensive part of performing a sort-merge join is arranging for both inputs to the algorithm to be presented in sorted order. This can be achieved via an explicit sort operation (often an [external sort](https://en.wikipedia.org/wiki/External_sort)), or by taking advantage of a pre-existing ordering in one or both of the join relations. The latter condition, called interesting order, can occur because an input to the join might be produced by an index scan of a tree-based index, another merge join, or some other plan operator that happens to produce output sorted on an appropriate key. Interesting orders need not be serendipitous: the optimizer may seek out this possibility and choose a plan that is suboptimal for a specific preceding operation if it yields an interesting order that one or more downstream nodes can exploit.

Used to join two data sets that are already sorted using the same key. A row from each source is obtained. If the rows match they are joined. If the rows do not match the lower vaue row is discarded and a new row is obtained from that source

<https://en.wikipedia.org/wiki/Sort-merge_join>

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

<https://en.wikipedia.org/wiki/Hash_join>

## Others

- Left Anti Join - [Left anti join - Power Query](https://learn.microsoft.com/en-us/power-query/merge-queries-left-anti)
- Right Anti Join - [Right anti join - Power Query](https://learn.microsoft.com/en-us/power-query/merge-queries-right-anti)

## References

<http://www.sql-join.com/sql-join-types>

<https://www.freecodecamp.org/news/sql-joins-tutorial>

[Spark Joins](../../technologies/apache/apache-spark/joins)
