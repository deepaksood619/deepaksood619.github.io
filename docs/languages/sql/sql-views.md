# SQL Views

Database Administrator and Database Users will face two challenges: writing complex SQL queries and securing database access. Sometimes SQL queries become more complicated due to the use of multiple joins, subqueries, and [GROUP BY](https://www.datacamp.com/community/tutorials/group-by-having-clause-sql) in a single query. To simplify such queries, you can use some proxy over the original table. Also, Sometimes from the security side, the database administrator wants to restrict direct access to the database. For example, if a table contains various columns but the user only needs 3 columns of data in such case DBA will create a virtual table of 3 columns. For both purposes, you can use the view. Views can act as a proxy or virtual table. Views reduce the complexity of SQL queries and provide secure access to underlying tables.

The view is a query stored in the data dictionary, on which the user can query just like they do on tables. It does not use the physical memory, only the query is stored in the data dictionary. It is computed dynamically, whenever the user performs any query on it. Changes made at any point in view are reflected in the actual base table.

A view is a stored query. When you create a database view, the database stores the SQL you gave it. Then, when you come along and query that view, the database takes the stored view query, adds in the extras from the query against the view, and executes it.

The view has primarily two purposes:

- Simplify the complex SQL queries.
- Provide restriction to users from accessing sensitive data.

## Types of Views

- **Simple View:** A view based on only a single table, which doesn't contain GROUP BY clause and any functions. The view is not physically materialized. Instead, the query is run every time the view is referenced in a query.
- **Complex View:** A view based on multiple tables, which contain GROUP BY clause and functions.
- **Inline View:** A view based on a subquery in FROM Clause, that subquery creates a temporary table and simplifies the complex query.
- **Materialized View:** A view that stores the definition as well as data. It creates replicas of data by storing it physically. MySQL does not provide Materialized Views by itself

| **Key**             | **Views**                                                                                                                                                                                                                    | **Materialized Views**                                                                                                                                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Definition**      | Technically, the View of a table is a logical virtual copy of the table created by the "select query", but the result is not stored anywhere in the disk.                                                                    | Whenever we need the data, we need to fire the query. So, the user always gets the updated or latest data from the original tables. Materialized views are also the logical virtual copy of data−driven by the "select query", but the result of the query will get stored in the table or disk. |
| **Storage**         | In Views the resulting tuples of the query expression is not get storing on the disk only the query expression is stored on the disk.                                                                                        | In case of Materialized views both query expression and resulting tuples of the query get stored on the disk.                                                                                                                                                                                    |
| **Query Execution** | The query expression is stored on the disk and not its result, so the query expression gets executed every time when the user tries to fetch the data from it so that the user will get the latest updated value every time. | The result of the query gets stored on the disk and hence the query expression does not get executed every time when user try to fetch the data so that user will not get the latest updated value if it get changed in database.                                                                |
| **Cost Effective**  | As Views does not have any storage cost associated with it so they also does not have any update cost associated with it.                                                                                                    | Materialized Views have a storage cost associated with it so also have update cost associated with it.                                                                                                                                                                                           |
| **Design**          | Views in SQL are designed with a fixed architecture approach due to which there is an SQL standard of defining a view.                                                                                                       | Materialized Views in SQL are designed with a generic architecture approach, so there is no SQL standard for defining it, and its functionality is provided by some databases systems as an extension.                                                                                           |
| **Usage**           | Views are generally used when data is to be accessed infrequently and data in table get updated on frequent basis.                                                                                                           | Materialized Views are used when data is to be accessed frequently and data in table not get updated on frequent basis.                                                                                                                                                                          |

[Difference between Views and Materialized Views in SQL](https://www.tutorialspoint.com/difference-between-views-and-materialized-views-in-sql)

https://www.datacamp.com/community/tutorials/materialized-views-postgresql

https://www.datacamp.com/community/tutorials/views-in-sql

https://www.mysqltutorial.org/mysql-views-tutorial.aspx
