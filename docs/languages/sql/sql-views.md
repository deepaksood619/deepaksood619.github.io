# SQL Views

Database Administrator and Database Users will face two challenges: writing complex SQL queries and securing database access. Sometimes SQL queries become more complicated due to the use of multiple joins, subqueries, and [GROUP BY](https://www.datacamp.com/community/tutorials/group-by-having-clause-sql) in a single query. To simplify such queries, you can use some proxy over the original table. Also, Sometimes from the security side, the database administrator wants to restrict direct access to the database. For example, if a table contains various columns but the user only needs 3 columns of data in such case DBA will create a virtual table of 3 columns. For both purposes, you can use the view. Views can act as a proxy or virtual table. Views reduce the complexity of SQL queries and provide secure access to underlying tables.

The view is a query stored in the data dictionary, on which the user can query just like they do on tables. It does not use the physical memory, only the query is stored in the data dictionary. It is computed dynamically, whenever the user performs any query on it. Changes made at any point in view are reflected in the actual base table.

The view has primarily two purposes:

- Simplify the complex SQL queries.
- Provide restriction to users from accessing sensitive data.

## Types of Views

- **Simple View:**A view based on only a single table, which doesn't contain GROUP BY clause and any functions.

The view is not physically materialized. Instead, the query is run every time the view is referenced in a query.

- **Complex View:**A view based on multiple tables, which contain GROUP BY clause and functions.
- **Inline View:**A view based on a subquery in FROM Clause, that subquery creates a temporary table and simplifies the complex query.
- **Materialized View:**A view that stores the definition as well as data. It creates replicas of data by storing it physically.

MySQL does not provide Materialized Views by itself

<https://www.datacamp.com/community/tutorials/materialized-views-postgresql>

<https://www.datacamp.com/community/tutorials/views-in-sql>

<https://www.mysqltutorial.org/mysql-views-tutorial.aspx>
