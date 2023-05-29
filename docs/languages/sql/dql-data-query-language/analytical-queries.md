# Analytical Queries

Aggregate functions perform calculations based on sets of rows

Unlike aggregate functions, **analytic functions** return a (potentially different) value for each row in the original table.

All analytic functions have an **OVER** clause, which defines the sets of rows used in each calculation.

The OVER clause has three (optional) parts:

- The **PARTITION BY** clause divides the rows of the table into different groups
- The **ORDER BY** clause defines an ordering within each partition.
- The final clause (ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) is known as a**window frame** clause. It identifies the set of rows used in each calculation. We can refer to this group of rows as a **window**. (Actually, analytic functions are sometimes referred to as **analytic window functions** or simply **window functions**)

![image](../../../media/DQL-Data-Query-Language_Aggregation-Analytical-Queries-SQL-Analytics-image1.jpg)

There are many ways to write window frame clauses:

- **ROWS BETWEEN 1 PRECEDING AND CURRENT ROW** - the previous row and the current row.
- **ROWS BETWEEN 3 PRECEDING AND 1 FOLLOWING** - the 3 previous rows, the current row, and the following row.
- **ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING** - all rows in the partition.
- **ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW** - a window frame that spans from the start of the partition to the current row, inclusive.

The lowest possible bound  is UNBOUNDED PRECEDING (the first row), the current row is CURRENT ROW and the highest possible row is UNBOUNDED FOLLOWING (the last row).

```sql
SELECT time, buy,
  avg(buy) OVER (ORDER BY time rows between 1 preceding and current row) as average_2,
  avg(buy) OVER (ORDER BY time rows between 2 preceding and current row) as average_3
FROM my_table;
```

## Links

[Window Functions](languages/sql/dql-data-query-language/window-functions.md)
