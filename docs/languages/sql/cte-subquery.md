# CTE / Subquery

## SQL Subqueries

- A subquery is a SQL query within a query.
- Subqueries are nested queries that provide data to the enclosing query.
- Subqueries can return individual values or a list of records
- Subqueries must be enclosed with parenthesis

https://www.dofactory.com/sql/subquery

### Scalar Subquery

A scalar subquery returns a single value (one column and one row) to be used by the outer query.

### Correlated subqueries

Subqueries which are dependent on the main query are called correlated subqueries

```sql
--- We want to find all countries whose area is equal to or smaller than the minimum city area in that particular country. In other words, if there is a country smaller than its smallest city, it will be shown. Why would we use such a query? It can be very convenient if we want to check whether there any are errors in our database. If this query returned anything other than nothing, we would know that something fishy is going on in our records.
SELECT * FROM country WHERE area <= (
  SELECT MIN(area) FROM city WHERE city.country_id = country.id
);
```

What's the new piece here? Take a look at the `WHERE` clause in the subquery. That's right, it uses `country.id`. Which country does it refer to? The country from the **main clause** of course. This is the secret behind correlated subqueries - if you ran the subquery alone, your database would say:

'Hey, you want me to compare `city.country_id` to `country.id`, but there are tons of ids in the table `country`, so I don't know which one to choose'.

But if you run the instruction as a subquery and the main clause browses the table `country`, then the database will each time compare `country.id` from the subquery with the current `country.id` from the main clause.

Just remember the golden rule: **subqueries can use tables from the main query, but the main query can't use tables from the subquery!**

#### Use Alias when using same table in correlated subqueries

```sql
SELECT * FROM city main_city WHERE population > (
  SELECT AVG(population) FROM city  average_city
  WHERE average_city.country_id = main_city.country_id
);
```

#### Others

```sql
-- ALL with correlated subqueries
SELECT * FROM trip main_trip WHERE price >= ALL (
  SELECT price FROM trip sub_trip
  WHERE main_trip.city_id = sub_trip.city_id
);

-- EXISTS and NOT EXISTS with correlated subqueries
SELECT * FROM city WHERE NOT EXISTS (
  SELECT * FROM trip WHERE city_id = city.id
);

-- The above query compares city trips and hiking trips which last the same number of dates. It then returns all hiking trips which are cheaper than any city trip of the same duration.
SELECT * FROM hiking_trip WHERE price < ANY (
  SELECT price FROM trip WHERE trip.days = hiking_trip.days
);
```

## SQL CTEs (Common Table Expressions)

The Common Table Expressions (CTE) were introduced into standard SQL in order to simplify various classes of SQL Queries for which a derived table was just unsuitable. CTE was introduced in SQL Server 2005, the common table expression (CTE) is a temporary named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement. You can also use a CTE in a CREATE a view, as part of the view's SELECT query. In addition, as of SQL Server 2008, you can add a CTE to the new MERGE statement.

```sql
with abc as (
 select * from table1
),
xyz as (
 select * from table2
)
select * from abc join xyz on abc.id = xyz.id;
```

https://dev.to/helenanders26/why-you-should-use-sql-ctes-25lk

https://www.geeksforgeeks.org/cte-in-sql

https://www.essentialsql.com/introduction-common-table-expressions-ctes

[Learn to Use a Recursive CTE in SQL Query - StrataScratch](https://www.stratascratch.com/blog/learn-to-use-a-recursive-cte-in-sql-query)
