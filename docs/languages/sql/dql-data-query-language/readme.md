# DQL - Data Query Language

## Gotchas / Keep in mind

- ORDER BY can be done on only those columns that are in SELECT

```sql
-- in MySQL this doesn't return NULL rows
select * from table_name where column != 'abc';

-- use ::DATE selects 2023-03-16 too but between without DATE doesn't

t.createdAt::DATE BETWEEN '2023-02-23' and '2023-03-16'

t.createdAt BETWEEN '2023-02-23' AND '2023-03-16'

-- IS NOT TRUE selects null rows too and != TRUE don't give null rows
isFlag IS NOT TRUE
isFlag != TRUE
```

```sql
-- SELECT
select * from mysql.user;

select USER();

-- SELECT
SELECT column_name FROM table_name;
SELECT statements are used to fetch data from a database. Every query will begin with SELECT

-- SELECT DISTINCT
SELECT DISTINCT column_name FROM table_name;

SELECT DISTINCT specifies that the statement is going to be a query that returns unique values in the specified column(s).

-- SELECT INTO
SELECT *
INTO new_table_name [IN externaldatabase]
FROM old_table_name
or
SELECT column_name(s)
INTO new_table_name [IN externaldatabase]
FROM old_table_name

-- SELECT TOP
SELECT TOP number|percent column_name(s)
FROM table_name
```

## USE INDEX

MySQL provides an alternative way that allows you to recommend the indexes that the query optimizer should by using an index hint calledUSE INDEX.

`SELECT select_list FROM table_name USE INDEX(index_list) WHERE condition`

In this syntax, theUSE INDEXinstructs the queryoptimizer to use one of the named indexes to find rows in the table.

Notice that when you recommend the indexes to use, the queryoptimizer may either decide to use them or not depending on the query plan that it comes up with.

https://www.mysqltutorial.org/mysql-index/mysql-use-index

## Transpose

```sql
SELECT
    id,
    MAX(CASE WHEN Feetype = 'Revenue Fee' THEN amountFeeRatio END) AS RevenueFeeAmount,
    MAX(CASE WHEN Feetype = 'Revenue Fee' THEN usdEquivalentFeeRatio END) AS RevenueFeeUSDEquivalent,
    MAX(CASE WHEN Feetype = 'Maintanence Fee' THEN amountFeeRatio END) AS MaintanenceFeeAmount,
    MAX(CASE WHEN Feetype = 'Maintanence Fee' THEN usdEquivalentFeeRatio END) AS MaintanenceFeeUSDEquivalent
FROM test_table
GROUP BY id limit 100;
```

[Multiple options to transposing rows into columns](https://www.sqlshack.com/multiple-options-to-transposing-rows-into-columns/)

### Crosstab

```sql
select *
from crosstab(
    'select
    role,
    type,
    sum(duration) as total_minutes
from work
group by role, type
order by type',
    'select distinct type from work order by type'
) as ct(
    role text,
    "Cleaning" text,
    "Food preparation" text
);
```

[PostgreSQL: Documentation: 15: F.43. tablefunc](https://www.postgresql.org/docs/current/tablefunc.html)

**[Transpositions in SQL. How to handle dynamic transposition… | by Jerry Zhang | Towards Data Science](https://towardsdatascience.com/transpositions-in-sql-c1cf724dfa2a)**

## Date Time Operations

#### date_part, group by week

An INTEGER where 0 = Monday and 6 = Sunday.

```sql
SELECT
 ftps.id,
 date_part('year', createdAt::date) as year,
 date_part('week', createdAt::date) AS week,
 count(*) as c
FROM
 test ftps
GROUP BY
 ftps.id,
 year,
 week
```

[PostgreSQL: Documentation: 8.1: Date/Time Functions and Operators](https://www.postgresql.org/docs/8.1/functions-datetime.html)

[weekday function | Databricks on AWS](https://docs.databricks.com/sql/language-manual/functions/weekday.html)

## Links

[A Deep Dive in How Slow SELECT \* is - YouTube](https://www.youtube.com/watch?v=wybjsKtA9hI&ab_channel=HusseinNasser)
