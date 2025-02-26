# RDBMS

A relational databaseis a database that organizes information into one or more tables. Here, the relational database contains one table.

A table is a collection of data organized into rows and columns. Tables are sometimes referred to as relations. Here the table is celebs.

A column is a set of data values of a particular type. Here, id, name, andageare the columns.

A row is a single record in a table.

All data stored in a relational database is of a certain data type. Some of the most common data types are:

- INTEGER, a positive or negative whole number
- TEXT, a text string
- DATE, the date formatted as YYYY-MM-DD
- REAL, a decimal value

## SQL Databases

1. [Oracle Database](databases/sql-databases/oracle-database.md)
2. [MySQL](databases/sql-databases/mysql/readme.md)
3. [Postgres](databases/sql-databases/postgres/readme.md)
4. Microsoft SQL Server
5. IBM DB2

## SQL Server / MS SQL / Microsoft SQL Server

- Microsoft owns SQL Server. Like Oracle DB, the code is also close sourced.
- Large enterprise applications mostly use SQL Server. The key difference between Oracle and SQL Server is that SQL Server only supports the Windows Operating System.
- Microsoft offers a free entry-level version called Express but can become very expensive as you scale your application.

### SQL Server Integration Service (SSIS)

SQL Server Integration Services(SSIS) is a component of the [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server) database software that can be used to perform a broad range of [data migration](https://en.wikipedia.org/wiki/Data_migration) tasks.

SSIS is a platform for [data integration](https://en.wikipedia.org/wiki/Data_integration) and [workflow applications](https://en.wikipedia.org/wiki/Workflow_application). It features a [data warehousing](https://en.wikipedia.org/wiki/Data_warehouse) tool used for data [extraction, transformation, and loading (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load). The tool may also be used to automate maintenance of SQL Server databases and updates to multidimensional [cube data](https://en.wikipedia.org/wiki/OLAP_cube).

First released with Microsoft SQL Server 2005, SSIS replaced [Data Transformation Services](https://en.wikipedia.org/wiki/Data_Transformation_Services), which had been a feature of SQL Server since Version 7.0. Unlike DTS, which was included in all versions, SSIS is only available in the "Standard", "Business Intelligence" and "Enterprise" editions.With Microsoft "Visual Studio Dev Essentials" it is now possible to use SSIS with Visual Studio 2017 free of cost so long as it is for development and learning purposes only.

https://en.wikipedia.org/wiki/SQL_Server_Integration_Services

### SQL Server Reporting Service (SSRS)

SQL Server Reporting Services (SSRS) provides a set of on-premises tools and services that create, deploy, and manage mobile and paginated reports.

https://www.toptal.com/sql/oracle-sql-server-differences

https://www.toptal.com/sql/oracle-sql-server-migrations-pt-2

https://www.toptal.com/sql/oracle-sql-server-migrations-pt-3

## Codd's 12 rules

Codd's twelve rules are a set of thirteen rules ([numbered zero to twelve](https://en.wikipedia.org/wiki/Zero-based_numbering)) proposed by [Edgar F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd), a pioneer of the [relational model](https://en.wikipedia.org/wiki/Relational_model) for [databases](https://en.wikipedia.org/wiki/Database), designed to define what is required from a [database management system](https://en.wikipedia.org/wiki/Database_management_system) in order for it to be considered relational, i.e., a [relational database management system](https://en.wikipedia.org/wiki/Relational_database_management_system)(RDBMS). They are sometimes jokingly referred to as Codd's Twelve Commandments.

- Rule 0: The foundation rule
- Rule 1: The information rule
- Rule 2: The guaranteed access rule
- Rule 3: Systematic treatment of null values
- Rule 4: Dynamic online catalog based on the relational model
- Rule 5: The comprehensive data sublanguage rule
- Rule 6: The view updating rule
- Rule 7: Possible for high-level insert, update, and delete
- Rule 8: Physical data independence
- Rule 9: Logical data independence
- Rule 10: Integrity independence
- Rule 11: Distribution independence
- Rule 12: The nonsubversion rule

https://en.wikipedia.org/wiki/Codd%27s_12_rules

## RDBMS Geneology

![RDBMS Geneology](../../media/Screenshot%202024-07-17%20at%201.23.31%20AM.jpg)

[RDBMS Genealogy V6.pdf](https://hpi.de/fileadmin/user_upload/fachgebiete/naumann/projekte/RDBMSGenealogy/RDBMS_Genealogy_V6.pdf)
