# Aggregation / Analytical Queries / SQL Analytics

## Aggregate functions perform calculations based on sets of rows

Unlike aggregate functions, **analytic functions** return a (potentially different) value for each row in the original table.

All analytic functions have an **OVER** clause, which defines the sets of rows used in each calculation.

TheOVERclause has three (optional) parts:

- The **PARTITION BY** clause divides the rows of the table into different groups
- The **ORDER BY** clause defines an ordering within each partition.
- The final clause (ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) is known as a**window frame** clause. It identifies the set of rows used in each calculation. We can refer to this group of rows as a **window**. (Actually, analytic functions are sometimes referred to as **analytic window functions** or simply **window functions**!)

![image](../../../media/DQL-Data-Query-Language_Aggregation-Analytical-Queries-SQL-Analytics-image1.jpg)

There are many ways to write window frame clauses:

- ROWS BETWEEN 1 PRECEDING AND CURRENT ROW- the previous row and the current row.
- ROWS BETWEEN 3 PRECEDING AND 1 FOLLOWING- the 3 previous rows, the current row, and the following row.
- ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING- all rows in the partition.

## Functions

### AVG

AVG() is an aggregate function that returns the average value for a numeric column.

```sql
SELECT AVG(column_name)
FROM table_name;
```

### COUNT

COUNT() is a function that takes the name of a column as an argument and counts the number of rows where the column is not NULL.

```sql
SELECT COUNT(column_name)
FROM table_name;

-- To count all rows
SELECT COUNT(*) FROM table_name;
```

### DIFFERENCE

```sql
SELECT MAX(POPULATION) - MIN(POPULATION)
FROM CITY;
```

### MAX

MAX() is a function that takes the name of a column as an argument and returns the largest value in that column.

```sql
SELECT MAX(column_name)
FROM table_name;
```

### MIN

MIN() is a function that takes the name of a column as an argument and returns the smallest value in that column.

```sql
SELECT MIN(column_name)
FROM table_name;
```

### ROUND

ROUND() is a function that takes a column name and an integer as an argument. It rounds the values in the column to the number of decimal places specified by the integer.

```sql
SELECT ROUND(column_name, integer)
FROM table_name;
```

### SUM

SUM() is a function that takes the name of a column as an argument and returns the sum of all the values in that column.

```sql
SELECT SUM(column_name)
FROM table_name;
```

### GROUP BY

GROUP BY is a clause in SQL that is only used with aggregate functions. It is used in collaboration with the SELECT statement to arrange identical data into groups.

The GROUP BY statement comes after any WHERE statements, but before ORDER BY or LIMIT

```sql
SELECT COUNT(*)
FROM table_name
GROUP BY column_name;

SELECT ROUND(imdb_rating), COUNT(name) FROM movies GROUP BY 1 ORDER BY 1;
-- Here, the 1 refers to the first column in our SELECT statement, ROUND(imdb_rating)
```

#### Guidelines

- All the dependent columns or columns used in GROUP BY function must form the basis of grouping, hence must be included in GROUP BY clause also
- GROUP BY clause does not support the use of column alias, but the actual names
- GROUP BY clause can only be used with aggregate functions like SUM, AVG, COUNT, MAX, and MIN
- Aggregate functions cannot be used in a GROUP BY clause
  - Use Inner query for solving this
  - Example -

```sql
SELECT
 cp.CoinId,
 cp.createdAt AS max_createdAt,
 COUNT(*) AS count_duplicates
FROM
 coin cp
 INNER JOIN (
  SELECT
   CoinId,
   MAX(createdAt) AS max_createdAt
  FROM
   coin
  GROUP BY
   CoinId
 ) cp_max
 ON cp.CoinId = cp_max.CoinId AND cp.createdAt = cp_max.max_createdAt
GROUP BY
 cp.CoinId,
 cp.createdAt
HAVING
 COUNT(*) > 1;
```

[Using Group functions](https://www.tutorialspoint.com/sql_certificate/using_the_group_functions.htm)

### Examples

```sql
SELECT
    CONCAT(HOUR(create_date),
            ':00-',
            HOUR(create_date) + 1,
            ':00') AS Hours,
    COUNT(*) AS `usage`
FROM
    communication_log
WHERE
    channel = 'sms'
        AND create_date BETWEEN '2021-08-25 00:00:00' AND NOW()
GROUP BY HOUR(create_date);

SELECT create_date, count(*)
FROM communication_log
WHERE
    channel = 'sms'
        AND create_date BETWEEN '2021-08-25 00:00:00' AND NOW()
GROUP BY hour( create_date ) , day( create_date );

SELECT YEAR(create_date),
    MONTH(create_date),
    count(id)
FROM st_customer_detail
GROUP BY YEAR(create_date),
        MONTH(create_date)
ORDER BY YEAR(create_date) DESC, MONTH(create_date) DESC;

SELECT
    template_id, COUNT(*) AS template_count
FROM
    (SELECT
        customer_id, template_id, COUNT(*) AS count
    FROM
        communication_log
    WHERE
        channel = 'sms' AND is_success = 1
            AND create_date BETWEEN NOW() - INTERVAL 16 HOUR AND NOW()
    GROUP BY customer_id , template_id) inner_query
WHERE
    count > 2
GROUP BY template_id
ORDER BY template_count DESC;

-- Department wise bifurcation
select a.channel, a.department, a.name, count(*) from (
SELECT ct.department, ct.channel, ct.name
FROM communication_log cl
LEFT JOIN communication_templates ct ON cl.template_id = ct.name
WHERE cl.id BETWEEN 422020686 AND 435852382
    AND is_success = '1'
GROUP BY cl.id
) a group by a.channel, a.department, a.name;

-- average temperature by hour and month
-- output hours in rows and months in columns
-- transform row as column using CASE
SELECT
    DAY(exam_date),
    AVG(marks),
    round(AVG(CASE WHEN MONTH(exam_date) = 1 THEN marks ELSE 0 END),2) jan,
    round(AVG(CASE WHEN MONTH(exam_date) = 2 THEN marks ELSE 0 END),2) feb,
    round(AVG(CASE WHEN MONTH(exam_date) = 3 THEN marks ELSE 0 END),2) mar,
    round(AVG(CASE WHEN MONTH(exam_date) = 4 THEN marks ELSE 0 END),2) apr,
    round(AVG(CASE WHEN MONTH(exam_date) = 5 THEN marks ELSE 0 END),2) may,
    round(AVG(CASE WHEN MONTH(exam_date) = 6 THEN marks ELSE 0 END),2) june,
    round(AVG(CASE WHEN MONTH(exam_date) = 7 THEN marks ELSE 0 END),2) july,
    round(AVG(CASE WHEN MONTH(exam_date) = 8 THEN marks ELSE 0 END),2) aug,
    round(AVG(CASE WHEN MONTH(exam_date) = 9 THEN marks ELSE 0 END),2) sep,
    round(AVG(CASE WHEN MONTH(exam_date) = 10 THEN marks ELSE 0 END),2) oct,
    round(AVG(CASE WHEN MONTH(exam_date) = 11 THEN marks ELSE 0 END),2) nov,
    round(AVG(CASE WHEN MONTH(exam_date) = 12 THEN marks ELSE 0 END),2) december
FROM
    demo_table
GROUP BY MONTH(exam_date) , DAY(exam_date);

-- count vowels in names in a table
select d_name, sum(
    if (d_name like '%a%', 1, 0)
    + if( d_name like '%e%', 1, 0)
    + if( d_name like '%i%', 1, 0)
    + if( d_name like '%o%', 1, 0)
    + if( d_name like '%u%', 1, 0)
) as vowel_count from (select distinct name as d_name
from demo_table) a group by a.d_name;
```

### max_by, min_by

Returns the value of an `expr1` associated with the maximum value of `expr2` in a group.

This function can also be invoked as a [window function](https://docs.databricks.com/sql/language-manual/sql-ref-window-functions.html) using the `OVER` clause.

This function is non-deterministic if `expr2` is not unique within the group.

```sql
-- max_by
SELECT max_by(x, y) FROM VALUES (('a', 10)), (('b', 50)), (('c', 20)) AS tab(x, y);
>>> b

-- min_by
SELECT min_by(x, y) FROM VALUES (('a', 10)), (('b', 50)), (('c', 20)) AS tab(x, y);
>>> a
```

[max\_by aggregate function | Databricks on AWS](https://docs.databricks.com/sql/language-manual/functions/max_by.html)

[min\_by aggregate function | Databricks on AWS](https://docs.databricks.com/sql/language-manual/functions/min_by.html)
