# Aggregation Queries

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

-- group by all
SELECT car_model, count(DISTINCT city) AS count FROM dealer GROUP BY ALL;
```

#### GROUP BY ALL

A shorthand notation to add all `SELECT`-list expressions not containing aggregate functions as `group_expression`s. If no such expression exist `GROUP BY ALL` is equivalent to omitting the `GROUP BY` clause which results in a global aggregation.

[GROUP BY clause | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-groupby.html)

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

### Is this a valid query?

```sql
SELECT city, COUNT(*) FROM census WHERE COUNT(*) > 5
GROUP BY city ORDER BY COUNT(*) DESC
```

no, GROUP BY happens after WHERE, so you can't use aggregations in a WHERE

Use `HAVING COUNT(*) > 5` instead instead of WHERE

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

Returns the value of an `expr1` associated with the maximum value of `expr2` in a group.

This function can also be invoked as a [window function](https://docs.databricks.com/sql/language-manual/sql-ref-window-functions.html) using the `OVER` clause.

This function is non-deterministic if `expr2` is not unique within the group.

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

## Databricks aggregate functions

|Function|Description|
|---|---|
|[any(expr)](https://docs.databricks.com/sql/language-manual/functions/any.html)|Returns true if at least one value of `expr` in the group is true.|
|[any_value(expr[,ignoreNull])](https://docs.databricks.com/sql/language-manual/functions/any_value.html)|Returns any random value of `expr` for a group of rows.|
|[approx_count_distinct(expr[,relativeSD])](https://docs.databricks.com/sql/language-manual/functions/approx_count_distinct.html)|Returns the estimated number of distinct values in `expr` within the group.|
|[approx_percentile(expr,percentage[,accuracy])](https://docs.databricks.com/sql/language-manual/functions/approx_percentile.html)|Returns the approximate percentile of the `expr` within the group.|
|[approx_top_k(expr[,k[,maxItemsTracked]])](https://docs.databricks.com/sql/language-manual/functions/approx_top_k.html)|Returns the top `k` most frequently occurring item values in an `expr` along with their approximate counts.|
|[array_agg(expr)](https://docs.databricks.com/sql/language-manual/functions/array_agg.html)|Returns an array consisting of all values in `expr` within the group.|
|[avg(expr)](https://docs.databricks.com/sql/language-manual/functions/avg.html)|Returns the mean calculated from values of a group.|
|[bit_and(expr)](https://docs.databricks.com/sql/language-manual/functions/bit_and.html)|Returns the bitwise `AND` of all input values in the group.|
|[bit_or(expr)](https://docs.databricks.com/sql/language-manual/functions/bit_or.html)|Returns the bitwise `OR` of all input values in the group.|
|[bit_xor(expr)](https://docs.databricks.com/sql/language-manual/functions/bit_xor.html)|Returns the bitwise `XOR` of all input values in the group.|
|[bool_and(expr)](https://docs.databricks.com/sql/language-manual/functions/bool_and.html)|Returns true if all values in `expr` are true within the group.|
|[bool_or(expr)](https://docs.databricks.com/sql/language-manual/functions/bool_or.html)|Returns true if at least one value in `expr` is true within the group.|
|[collect_list(expr)](https://docs.databricks.com/sql/language-manual/functions/collect_list.html)|Returns an array consisting of all values in `expr` within the group.|
|[collect_set(expr)](https://docs.databricks.com/sql/language-manual/functions/collect_set.html)|Returns an array consisting of all unique values in `expr` within the group.|
|[corr(expr1,expr2)](https://docs.databricks.com/sql/language-manual/functions/corr.html)|Returns Pearson coefficient of correlation between a group of number pairs.|
|[`count(*)`](https://docs.databricks.com/sql/language-manual/functions/count.html)|Returns the total number of retrieved rows in a group, including rows containing null.|
|[`count(expr[, …]`)](https://docs.databricks.com/sql/language-manual/functions/count.html)|Returns the number of rows in a group for which the supplied expressions are all non-null.|
|[count_if(expr)](https://docs.databricks.com/sql/language-manual/functions/count_if.html)|Returns the number of true values for the group in `expr`.|
|[count_min_sketch(expr, epsilon, confidence, seed)](https://docs.databricks.com/sql/language-manual/functions/count_min_sketch.html)|Returns a count-min sketch of all values in the group in `expr` with the `epsilon`, `confidence` and `seed`.|
|[covar_pop(expr1,expr2)](https://docs.databricks.com/sql/language-manual/functions/covar_pop.html)|Returns the population covariance of number pairs in a group.|
|[covar_samp(expr1,expr2)](https://docs.databricks.com/sql/language-manual/functions/covar_samp.html)|Returns the sample covariance of number pairs in a group.|
|[every(expr)](https://docs.databricks.com/sql/language-manual/functions/every.html)|Returns true if all values of `expr` in the group are true.|
|[first(expr[,ignoreNull])](https://docs.databricks.com/sql/language-manual/functions/first.html)|Returns the first value of `expr` for a group of rows.|
|[first_value(expr[,ignoreNull])](https://docs.databricks.com/sql/language-manual/functions/first_value.html)|Returns the first value of `expr` for a group of rows.|
|[hll_sketch_agg(expr[,lgConfigK])](https://docs.databricks.com/sql/language-manual/functions/hll_sketch_agg.html)|Returns a HyperLogLog sketch used to approximate a distinct values count.|
|[hll_union_agg(expr[,allowDifferentLgConfigK])](https://docs.databricks.com/sql/language-manual/functions/hll_union_agg.html)|Aggregates HyperLogLog sketches for a group of rows.|
|[kurtosis(expr)](https://docs.databricks.com/sql/language-manual/functions/kurtosis.html)|Returns the kurtosis value calculated from values of a group.|
|[last(expr[,ignoreNull])](https://docs.databricks.com/sql/language-manual/functions/last.html)|Returns the last value of `expr` for the group of rows.|
|[last_value(expr[,ignoreNull])](https://docs.databricks.com/sql/language-manual/functions/last_value.html)|Returns the last value of `expr` for the group of rows.|
|[max(expr)](https://docs.databricks.com/sql/language-manual/functions/max.html)|Returns the maximum value of `expr` in a group.|
|[max_by(expr1,expr2)](https://docs.databricks.com/sql/language-manual/functions/max_by.html)|Returns the value of an `expr1` associated with the maximum value of `expr2` in a group.|
|[mean(expr)](https://docs.databricks.com/sql/language-manual/functions/mean.html)|Returns the mean calculated from values of a group.|
|[median(expr)](https://docs.databricks.com/sql/language-manual/functions/median.html)|Returns the median calculated from values of a group.|
|[min(expr)](https://docs.databricks.com/sql/language-manual/functions/min.html)|Returns the minimum value of `expr` in a group.|
|[min_by(expr1, expr2)](https://docs.databricks.com/sql/language-manual/functions/min_by.html)|Returns the value of an `expr1` associated with the minimum value of `expr2` in a group.|
|[mode(expr)](https://docs.databricks.com/sql/language-manual/functions/mode.html)|Returns the most frequent, not `NULL`, value of `expr` in a group.|
|[percentile(expr, percentage [,frequency])](https://docs.databricks.com/sql/language-manual/functions/percentile.html)|Returns the exact percentile value of `expr` at the specified `percentage`.|
|[percentile_approx(expr,percentage[,accuracy])](https://docs.databricks.com/sql/language-manual/functions/percentile_approx.html)|Returns the approximate percentile of the `expr` within the group.|
|[percentile_cont(pct) WITHIN GROUP (ORDER BY key)](https://docs.databricks.com/sql/language-manual/functions/percentile_cont.html)|Returns the interpolated percentile of the `key` within the group.|
|[percentile_disc(pct) WITHIN GROUP (ORDER BY key)](https://docs.databricks.com/sql/language-manual/functions/percentile_disc.html)|Returns the discrete percentile of the `key` within the group.|
|[regr_avgx(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_avgx.html)|Returns the mean of `xExpr` calculated from values of a group where `xExpr` and `yExpr` are NOT NULL.|
|[regr_avgy(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_avgy.html)|Returns the mean of `yExpr` calculated from values of a group where `xExpr` and `yExpr` are NOT NULL.|
|[regr_count(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_count.html)|Returns the number of non-null value pairs `yExpr`, `xExpr` in the group.|
|[regr_intercept(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_intercept.html)|Returns the intercept of the uni-variate linear regression line in a group where `xExpr` and `yExpr` are NOT NULL.|
|[regr_r2(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_r2.html)|Returns the coefficient of determination from values of a group where `xExpr` and `yExpr` are NOT NULL.|
|[regr_slope(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_slope.html)|Returns the slope of the linear regression line of non-null value pairs `yExpr`, `xExpr` in the group.|
|[regr_sxx(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_sxx.html)|Returns the sum of squares of the `xExpr` values of a group where `xExpr` and `yExpr` are NOT NULL.|
|[regr_sxy(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_sxy.html)|Returns the sum of products of `yExpr` and `xExpr` calculated from values of a group where `xExpr` and `yExpr` are NOT NULL.|
|[regr_syy(yExpr, xExpr)](https://docs.databricks.com/sql/language-manual/functions/regr_syy.html)|Returns the sum of squares of the `yExpr` values of a group where `xExpr` and `yExpr` are NOT NULL.|
|[skewness(expr)](https://docs.databricks.com/sql/language-manual/functions/skewness.html)|Returns the skewness value calculated from values of a group.|
|[some(expr)](https://docs.databricks.com/sql/language-manual/functions/some.html)|Returns true if at least one value of `expr` in a group is `true`.|
|[std(expr)](https://docs.databricks.com/sql/language-manual/functions/std.html)|Returns the sample standard deviation calculated from the values within the group.|
|[stddev(expr)](https://docs.databricks.com/sql/language-manual/functions/stddev.html)|Returns the sample standard deviation calculated from the values within the group.|
|[stddev_pop(expr)](https://docs.databricks.com/sql/language-manual/functions/stddev_pop.html)|Returns the population standard deviation calculated from values of a group.|
|[stddev_samp(expr)](https://docs.databricks.com/sql/language-manual/functions/stddev_samp.html)|Returns the sample standard deviation calculated from values of a group.|
|[sum(expr)](https://docs.databricks.com/sql/language-manual/functions/sum.html)|Returns the sum calculated from values of a group.|
|[try_avg(expr)](https://docs.databricks.com/sql/language-manual/functions/try_avg.html)|Returns the mean calculated from values of a group, NULL if there is an overflow.|
|[try_sum(expr)](https://docs.databricks.com/sql/language-manual/functions/try_sum.html)|Returns the sum calculated from values of a group, NULL if there is an overflow.|
|[var_pop(expr)](https://docs.databricks.com/sql/language-manual/functions/var_pop.html)|Returns the population variance calculated from values of a group.|
|[var_samp(expr)](https://docs.databricks.com/sql/language-manual/functions/var_samp.html)|Returns the sample variance calculated from values of a group.|
|[variance(expr)](https://docs.databricks.com/sql/language-manual/functions/variance.html)|Returns the sample variance calculated from values of a group.|

### COUNT_IF

```sql
SELECT
COUNT_IF(col1 = 'abc' AND col2 IN ('abc', 'xyz')) AS cUser
FROM table_name
WHERE status = 'ACTIVE'
```

## Links

[Window Functions](languages/sql/dql-data-query-language/window-functions.md)
