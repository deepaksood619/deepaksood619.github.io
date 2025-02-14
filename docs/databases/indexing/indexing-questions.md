# Indexing Questions

[**https://use-the-index-luke.com/3-minute-test/mysql**](https://use-the-index-luke.com/3-minute-test/mysql)

## Question 1

Is the following index a good fit for the query?

```sql
CREATE INDEX tbl_idx ON tbl (date_column)
```

```sql
SELECT COUNT(*)
  FROM tbl
 WHERE EXTRACT(YEAR FROM date_column) = 2017
```

Your answer:

- **Good fit**: No need to change anything
- **Bad fit**: Changing the index or query could improve performance

### Answer

**Bad fit**: Changing the index or query could improve performance

Wrapping the table column in a function renders this index mostly useless for this query.

Note that the database could still read the full index end to end. Although this can be faster than reading the full table end to end, it is still not very efficient and considered not solution to this problem.

## Question 2

Is the following index a good fit for the query?

```sql
CREATE INDEX tbl_idx ON tbl (a, date_column)
```

```sql
SELECT *
  FROM tbl
 WHERE a = 12
 ORDER BY date_column DESC
 LIMIT 1
```

Your answer:

- **Good fit**: No need to change anything
- **Bad fit**: Changing the index or query could improve performance

### Answer

**Good fit**: No need to change anything

The statement can run as an [indexed top-N query](https://use-the-index-luke.com/sql/partial-results/top-n-queries). It performs just a [B-tree traversal (_log(n)_)](https://use-the-index-luke.com/sql/anatomy/the-tree) and a single table access.

The trick is that the index supports the `where` clause as well as the `order by` clause. The database uses the index to find the last entry that matches the `where` clause and takes it as result. Even though there is an `order by` clause, there is no need to sort any rows.

## Question 3

Is the following index a good fit for **both queries**?

```sql
CREATE INDEX tbl_idx ON tbl (a, b)
```

```sql
SELECT *
  FROM tbl
 WHERE a = 38
   AND b = 1
```

```sql
SELECT *
  FROM tbl
 WHERE b = 1
```

Your answer:

- **Good fit**: No need to change anything
- **Bad fit**: Changing the index or a query could improve performance

### Answer

**Bad fit**: Changing the index or a query could improve performance

The index covers the first query only, the second query cannot use the index efficiently.

Note that the database could still read the full index end to end. Although this can be faster than reading the full table end to end, it is still not very efficient and considered not solution to this problem.

Changing the index column order makes the index suitable for both queries—without additional overhead. The index should therefore look like this (columns exchanged):

```sql
CREATE INDEX tbl_idx ON tbl (b, a)
```

## Question 4

Is the following index a good fit for the query?

```sql
CREATE INDEX tbl_idx ON tbl (text)
```

```sql
SELECT *
  FROM tbl
 WHERE text LIKE 'TJ%'
```

Your answer:

- **Good fit**: No need to change anything
- **Bad fit**: Changing the index or query could improve performance

### Answer

**Good fit**: No need to change anything

Although `like` expressions starting with a wild card character (`%` or `_`) cannot use this index efficiently, a pattern that has the wild card character at the very end can! Even if the wild card character is in the middle, the index is still useful.

## Question 5

This question is different. First consider the following index and query:

```sql
CREATE INDEX tbl_idx ON tbl (a, date_column)
```

```sql
SELECT date_column, count(*)
  FROM tbl
 WHERE a = 38
 GROUP BY date_column
```

Let’s say this query returns at least a few rows and that there is no other index on this table.

To implement a new functional requirement, another condition (`b = 1`) is added to the `where` clause:

```sql
SELECT date_column, count(*)
  FROM tbl
 WHERE a = 38
   AND b = 1
 GROUP BY date_column
```

How will the change affect performance:

- **Same**: Query performance stays about the same
- **Not enough information**: Definite answer cannot be given
- **Slower**: Query takes more time
- **Faster**: Query take less time

### Answer

**Same**: Query performance stays about the same

Wrong! The query will be slower.

The index happened to have all required data (columns) for the original query. It can run as so-called [index-only scan](https://use-the-index-luke.com/sql/clustering/index-only-scan-covering-index), which doesn’t need to access the actual table at all.

Accessing any column that is not part of the index prevents this optimization so that the database must look into the actual table for each row that qualifies the original `where` clause to see if it also satisfies the new filter. Even if the new filter removes _all_ rows, it does so after incurring additional work. Although the grouping has fewer rows to aggregate, this cannot compensate for the additional table look-ups.
