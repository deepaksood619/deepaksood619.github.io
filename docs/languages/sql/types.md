# Types

- **SQL** is a query language to operate on sets.
    It is more or less standardized, and used by almost all relational database management systems: SQL Server, Oracle, MySQL, PostgreSQL, DB2, Informix, etc.
- **PL/SQL** is a proprietary procedural language used by Oracle
- **PL/pgSQL** is a procedural language used by PostgreSQL
- **TSQL** is a proprietary procedural language used by Microsoft in SQL Server.

## PL/SQL

PL/SQL is a combination of SQL along with the procedural features of programming languages.It was developed by Oracle Corporation

### Specialities of PL/SQL

- completely portable, high-performance transaction-processing language.
- provides a built-in interpreted and OS independent programming environment.
- directly be called from the command-line **SQL*Plus interface.**
- Direct call can also be made from external programming language calls to database.
- general syntax is based on that of ADA and Pascal programming language.
- Apart from Oracle, it is available in **TimesTen in-memory database** and **IBM DB2**.

### Features

- PL/SQL is tightly integrated with SQL.
- It offers extensive error checking.
- It offers numerous data types.
- It offers a variety of programming structures.
- It supports structured programming through functions and procedures.
- It supports object-oriented programming.
- It supports the development of web applications and server pages.

<https://www.tutorialspoint.com/plsql/plsql_overview.htm>

## T-SQL (Transact SQL)

T-SQL (Transact-SQL) is a set of programming extensions from Sybase and Microsoft that add several features to the Structured Query Language ([SQL](https://searchsqlserver.techtarget.com/definition/SQL)), including transaction control, exception and error handling, row processing and declared variables.

All applications that communicate with [SQL Server](https://searchsqlserver.techtarget.com/definition/SQL-Server) do so by sending T-SQL statements to the server. T-SQL queries include the SELECT statement, selecting columns, labeling output columns, restricting rows and modifying a search condition.

T-SQL identifiers, meanwhile, are used in all [databases](https://searchsqlserver.techtarget.com/definition/database), [servers](https://whatis.techtarget.com/definition/server), and database objects in SQL Server. These include the following tables, [constraints](https://whatis.techtarget.com/definition/constraint-project-constraint), [stored procedures](https://searchoracle.techtarget.com/definition/stored-procedure), views, columns and [data types](https://searchmicroservices.techtarget.com/definition/data-type). T-SQL identifiers must each have a unique name, are assigned when an object is created and are used to identify an object.

### T-SQL Functions

In addition to SQL Server's built-in functions, users can define functions using T-SQL.

Types of T-SQL functions include:

- Aggregate functions, which operate on a collection of values, but return one summary value.
- Ranking functions, which return a ranking value for every row within a partition.
- Rowset functions, which return an object that can be used as a table reference in SQL statements.
- [Scalar](https://whatis.techtarget.com/definition/scalar) functions, which operate on a single value and return a single value.

SQL Server also supports analytical functions in T-SQL to depict complex analytical tasks. These analytical functions enable IT pros to perform common analysis, such as ranking, percentiles, moving averages and cumulative sums to be expressed in a single SQL statement.

### Difference between T-SQL and SQL

There are three distinct differences between the two.

- While T-SQL is an extension to SQL, SQL is a programming language.
- T-SQL contains procedural programming and local variable, while SQL does not.
- T-SQL is proprietary, while SQL is an open format.

<https://searchsqlserver.techtarget.com/definition/T-SQL>
