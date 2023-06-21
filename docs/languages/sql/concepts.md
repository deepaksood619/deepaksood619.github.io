# Concepts

## Predicate

A WHERE clause is a predicate. Retrieving records from a database using a projection statement like SELECT and combining it with any other clause that limits or filters your result set is considered to be a predicate. A predicate is an assertion which returns true or false. Only the true path affects the result set

A predicate defines a logical condition being applied to rows in a table. SQL Predicates are found on the tail end of clauses, functions, and SQL expressions in existing query statements. It is an expression that evaluates to **TRUE**, **FALSE**, or **UNKNOWN**. Predicates are used in the search condition of **WHERE** clauses and **HAVING** clauses, the join conditions of **FROM** clauses, and other constructs where a Boolean value is required.

The Transact-SQL language supports the following predicates:

- In Operator
- Exists function
- Between Operator
- Like Operator
- All and any Operator
- Like

### LIKE Operator

LIKE is an operator that compares column values with a specified pattern. During pattern matching, regular characters must exactly match the characters specified in the character string. The data type of the column can be any character or date data type. There are certain characters within the pattern, called wildcard characters.

I have used four types of wildcards; they are:

- Percent sign (%): It is used to represent or search any string of zero or more characters.
- Underscore (_): It is used to represent or search a single character.
- Bracket ([]): It is used to represent or search any single character within the specified range.
- Caret (^): It is used to represent or search any single character not within the specified range.

`SELECT User_ID, FirstName, LastName, Salary FROM UserDetail WHERE FirstName LIKE '%h%';`

<https://www.quora.com/What-is-a-predicate-in-SQL>

## SQL Subqueries

- A subquery is a SQL query within a query.
- Subqueries are nested queries that provide data to the enclosing query.
- Subqueries can return individual values or a list of records
- Subqueries must be enclosed with parenthesis

<https://www.dofactory.com/sql/subquery>

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

What's the new piece here? Take a look at the `WHERE` clause in the subquery. That's right, it uses `country.id`. Which country does it refer to? The country from the **main clause** of course. This is the secret behind correlated subqueries – if you ran the subquery alone, your database would say:

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

## Comparisons

### EXISTS vs IN vs JOIN

Surprisingly doing a join is usually faster then a large IN statement, this is because the values in the IN are not indexed, so MySQL can not do an index join on them. But this only applies with lots of values - for small number of them using IN could be faster.

Personally, I would use the JOIN method until the point that you see this query becoming a problem. (Which would only happen if you had some very complex conditionals to check, that could get slow to do twice). The join is simpler code, and most likely will be super fast - so don't make things more complicated without a specific reason.

A regular JOIN can be used to find matching values in a subquery. Like EXISTS, JOIN allows one or more columns to be used to find matches. Unlike EXISTS, JOIN isn't as confusing to implement. The downside to JOIN is that if the subquery has any identical rows based on the JOIN predicate, then the main query will repeat rows which could lead to invalid query outputs. Both IN and EXISTS will ignore duplicate values in a subquery. Take extra precaution when joining to a table in this fashion.

[SQL EXISTS vs IN vs JOIN Performance Comparison](https://www.mssqltips.com/sqlservertip/6659/sql-exists-vs-in-vs-join-performance-comparison/)

[Subquery vs. JOIN | LearnSQL.com](https://learnsql.com/blog/subquery-vs-join/)

[MySQL :: MySQL 8.0 Reference Manual :: 8.2.2.1 Optimizing IN and EXISTS Subquery Predicates with Semijoin Transformations](https://dev.mysql.com/doc/refman/8.0/en/semijoins.html)

[T-SQL commands performance comparison - NOT IN vs NOT EXISTS vs LEFT JOIN vs EXCEPT](https://www.sqlshack.com/t-sql-commands-performance-comparison-not-vs-not-exists-vs-left-join-vs-except/)

- methods that use the SQL NOT EXISTS and the LEFT JOIN commands has the least execution costs, and the method that uses the NOT IN command has the heaviest query cost
