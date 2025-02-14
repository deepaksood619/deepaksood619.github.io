# Technologies / Tools

## MySQL Workbench / MySQLWorkbench

https://dev.mysql.com/doc/workbench/en/wb-performance-explain.html

https://www.mysql.com/products/workbench

https://dev.to/realtrevorfaux/8-new-sql-tools-that-will-change-how-you-work-in-2020-n63

- Preferences > SQL Editor > DBMS connection read timeout interval (in seconds) > 3000
- Edit>Format>Beautify Query - Shortcut - `CMD+B`
- `*.*test` - search all objects that include test in their name
- `*.test` - search all objects that names start with test
- CMD+Enter - Run query
- CMD + T - New Tab
- Performance Reports
	- select * from sys.x$statements_with_full_table_scans;
	- select * from sys.`x$statements_with_runtimes_in_95th_percentile`;
	- [Preventing SQL statements from getting truncated by MySQL's Workbench in \`Performance Reports\` section - Stack Overflow](https://stackoverflow.com/questions/28778857/preventing-sql-statements-from-getting-truncated-by-mysqls-workbench-in-perfor)
	- Set `Edit>Preferences>SQL Execution` and set `Max. Field Value Length to Display` = 1024
	- show variables like '%performance_schema_max_digest_length%';
	-

[MySQL - MySQL Workbench - 11 Keyboard Shortcuts](http://download.nust.na/pub6/mysql/doc/workbench/en/wb-keys.html)

### Others

- Data Grip

## NoSQL Workbench

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html

## DBeaver - Universal Database Tool

DBeaver is an SQL client and a database administration tool. For [relational databases](https://en.wikipedia.org/wiki/Relational_database) it uses the [JDBC](https://en.wikipedia.org/wiki/JDBC) API to interact with databases via a JDBC driver. For other databases ([NoSQL](https://en.wikipedia.org/wiki/NoSQL)) it uses proprietary database drivers. It provides an editor that supports [code completion](https://en.wikipedia.org/wiki/Autocomplete) and [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting). It provides a plugin architecture (based on the [Eclipse](https://en.wikipedia.org/wiki/Eclipse_(software)) plugins architecture) that allows users to modify much of the application's behavior to provide database-specific functionality or features that are database-independent. This is a desktop application written in [Java](https://en.wikipedia.org/wiki/Java_platform) and based on [Eclipse](https://en.wikipedia.org/wiki/Eclipse_(software)) platform.

Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases. Supports all popular databases: MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix, Presto, etc.

With DBeaver you are able to manipulate with your data like in a regular spreadsheet, create analytical reports based on records from different data storages, export information in an appropriate format. For advanced database users DBeaver suggests a powerful SQL-editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more.

Out-of-the box DBeaver supports more than 80 databases.

Having usability as its main goal, DBeaver offers:

- Carefully designed and implemented User Interface
- Support of Cloud datasources
- Support for Enterprise security standard
- Capability to work with various extensions for integration with Excel, Git and others.
- Great number of features
- Multiplatform support

https://dbeaver.io

https://github.com/dbeaver/dbeaver

### Shortcuts

- `ctrl + ]` - New sql script
- `ctrl + \` - Run query in new tab
- `ctrl + enter` - Run query in same tab
- `ctrl + /` - toggle line comment
- `ctrl + shift + f` - format query
- `ctrl + shift + c` - advanced copy after `ctrl + a` on output to copy all rows with headers to clipboard
- `ctrl + shift + e` - show execution plan
- `opt + up/down` - move next or previous query in open editor
- `cmd + option + up/down` - duplicate query

### Settings

- ResultSet fetch size - 1000
- show line numbers
- SQL Editor > Formatting > Keyword Case: Upper

### Import large data

- Open new connection (s): Yes
- Use transactions: Yes
- **Do Commit after row insert**: 100000 (increase more if large rows and less columns)
- **Use multi-row Insert**: Yes
- **Multi-row insert batch size**: 5000 (increase more if large rows and less columns)
- Skip bind values: No
- Disable batches: No
- Ignore duplicate rows: No
- Method for duplicate key case:
- Transfer auto-generated columns: Yes
- Disable referential integrity: No
- **Use bulk load**: Yes
- Truncate before load: No

## Teradata

Analytics, Data Lakes and Data Warehouses Unified in the Cloud

## Jepsen

Jepsen is an effort to improve the safety of distributed databases, queues, consensus systems, etc.

[Distributed Systems Safety Research](https://jepsen.io/)

[Jepsen 13 • Kyle Kingsbury • YOW! 2020 - YouTube](https://www.youtube.com/watch?v=_TD31etxb_w)

## Others

[GitHub - harelba/q: q - Run SQL directly on delimited files and multi-file sqlite databases](https://github.com/harelba/q)

[Rapydo | Cloud Database Automation](https://www.rapydo.io/)

[Cloud Data Management Solution, AWS Backup and Recovery | NIMESA](https://nimesa.io/)

[Sequel Pro](https://sequelpro.com/)
