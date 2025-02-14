# Concepts

## Predicate

A WHERE clause is a predicate. Retrieving records from a database using a projection statement like SELECT and combining it with any other clause that limits or filters your result set is considered to be a predicate. A predicate is an assertion which returns true or false. Only the true path affects the result set

A predicate defines a logical condition being applied to rows in a table. SQL Predicates are found on the tail end of clauses, functions, and SQL expressions in existing query statements. It is an expression that evaluates to **TRUE**, **FALSE**, or **UNKNOWN**. Predicates are used in the search condition of **WHERE** clauses and **HAVING** clauses, the join conditions of **FROM** clauses, and other constructs where a Boolean value is required.

In the line:

`JOIN Country ON Customer.countryCode = Country.countryCode`

The `Customer.countryCode = Country.countryCode` part is called a Predicate.

And in the line:

`WHERE Country.nickName IN ('USA', 'UK', 'Japan')`

The `Country.nickName IN ('USA', 'UK', 'Japan')` part is also called a Predicate.

A predicate is simply the formal name for when an expression is used to evaluate a TRUE or FALSE condition (or sometimes UNKNOWN if a TRUE/FALSE value can't be determined)

The Transact-SQL language supports the following predicates:

- In Operator
- Exists function
- Between Operator
- Like Operator
- All and any Operator
- Like

https://www.quora.com/What-is-a-predicate-in-SQL

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

## Others

### NULL

http://www-cs-students.stanford.edu/~wlam/compsci/sqlnulls
