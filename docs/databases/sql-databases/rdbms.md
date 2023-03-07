# RDBMS

Arelational databaseis a database that organizes information into one or more tables. Here, the relational database contains one table.
Atableis a collection of data organized into rows and columns. Tables are sometimes referred to asrelations. Here the table iscelebs.
Acolumnis a set of data values of a particular type. Here, id, name, andageare the columns.
Arowis a single record in a table. The first row in thecelebstable has:

- Anidof1
- AnameofJustin Bieber
- Anageof22
All data stored in a relational database is of a certain data type. Some of the most common data types are:
- INTEGER, a positive or negative whole number
- TEXT, a text string
- DATE, the date formatted as YYYY-MM-DD
- REAL, a decimal value

## SQL Databases

1. Oracle Database

2. MySQL

3. Microsoft SQL Server

4. IBM DB2

5. Postgres
1. MySQL

   - MySQL is the most popular open source SQL database. It is typically used for web application development, and often accessed using PHP.

   - The main advantages of MySQL are that it is easy to use, inexpensive, reliable (has been around since 1995) and has a large community of developers who can help answer questions.

   - Some of the disadvantages are that it has been known to suffer from poor performance when scaling, open source development has lagged since Oracle has taken control of MySQL, and it does not include some advanced features that developers may be used to.
2. Oracle DB

   - Oracle corporation owns Oracle DB, and the code is not open source.

   - Oracle DB is for large applications, particularly in the banking industry. Most of the world's top banks run Oracle applications because Oracle offers a powerful combination of technology and comprehensive, pre-integrated business applications, including essential functionality built specifically for banks.

   - The main disadvantage of using Oracle is that it is not free to use like its open source competitors and can be quite expensive.
3. SQL Server

   - Microsoft owns SQL Server. Like Oracle DB, the code is also close sourced.

   - Large enterprise applications mostly use SQL Server. The key difference between Oracle and SQL Server is that SQL Server only supports the Windows Operating System.

   - Microsoft offers a free entry-level version calledExpressbut can become very expensive as you scale your application.

## SQL Server Integration Service (SSIS)

SQL Server Integration Services(SSIS) is a component of the [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server) database software that can be used to perform a broad range of [data migration](https://en.wikipedia.org/wiki/Data_migration) tasks.
SSIS is a platform for [data integration](https://en.wikipedia.org/wiki/Data_integration) and [workflow applications](https://en.wikipedia.org/wiki/Workflow_application). It features a [data warehousing](https://en.wikipedia.org/wiki/Data_warehouse) tool used for data [extraction, transformation, and loading (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load). The tool may also be used to automate maintenance of SQL Server databases and updates to multidimensional [cube data](https://en.wikipedia.org/wiki/OLAP_cube).
First released with Microsoft SQL Server 2005, SSIS replaced [Data Transformation Services](https://en.wikipedia.org/wiki/Data_Transformation_Services), which had been a feature of SQL Server since Version 7.0. Unlike DTS, which was included in all versions, SSIS is only available in the "Standard", "Business Intelligence" and "Enterprise" editions.With Microsoft "Visual Studio Dev Essentials" it is now possible to use SSIS with Visual Studio 2017 free of cost so long as it is for development and learning purposes only.
<https://en.wikipedia.org/wiki/SQL_Server_Integration_Services>

## SQL Server Reporting Service (SSRS)

SQL Server Reporting Services (SSRS) provides a set of on-premises tools and services that create, deploy, and manage mobile and paginated reports.
<https://www.toptal.com/sql/oracle-sql-server-differences>

<https://www.toptal.com/sql/oracle-sql-server-migrations-pt-2>

<https://www.toptal.com/sql/oracle-sql-server-migrations-pt-3>

## Codd's 12 rules

Codd's twelve rulesare a set of thirteen rules ([numbered zero to twelve](https://www.wikiwand.com/en/Zero-based_numbering)) proposed by [Edgar F. Codd](https://www.wikiwand.com/en/Edgar_F._Codd), a pioneer of the [relational model](https://www.wikiwand.com/en/Relational_model) for [databases](https://www.wikiwand.com/en/Database), designed to define what is required from a [database management system](https://www.wikiwand.com/en/Database_management_system) in order for it to be consideredrelational, i.e., a [relational database management system](https://www.wikiwand.com/en/Relational_database_management_system)(RDBMS).They are sometimes jokingly referred to as "Codd's Twelve Commandments".
Rule 0: The foundation rule

Rule 1: The information rule

Rule 2: The guaranteed access rule

Rule 3: Systematic treatment of null values

Rule 4: Dynamic online catalog based on the relational model

Rule 5: The comprehensive data sublanguage rule

Rule 6: The view updating rule

Rule 7: Possible for high-level insert, update, and delete

Rule 8: Physical data independence

Rule 9: Logical data independence

Rule 10: Integrity independence

Rule 11: Distribution independence

Rule 12: The nonsubversion rule
<https://www.wikiwand.com/en/Codd%27s_12_rules>
