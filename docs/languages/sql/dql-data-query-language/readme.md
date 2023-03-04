# DQL - Data Query Language

```sql
-- SELECT
select * from mysql.user;

select USER();

SELECT @@global.time_zone, @@session.time_zone;

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

<https://www.mysqltutorial.org/mysql-index/mysql-use-index>
