# Others

## Facts

MySQL has hard limit of **4096 columns per table**, but the effective maximum may be less for a given table. The exact column limit depends on several factors: The maximum row size for a table constrains the number (and possibly size) of columns because the total length of all columns cannot exceed this size

- CREATE SCHEMA is a synonym for CREATE DATABASE as of MySQL 5.0.2

https://dev.mysql.com/doc/refman/5.7/en/innodb-limits.html

A table can contain a maximum of 64 [secondary indexes](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_secondary_index)

- MySQL Unique Index with NULL values

  [mysql-unique-index-with-nulls](https://dba.stackexchange.com/questions/156498/mysql-unique-index-with-nulls-actual-solution-anyone)

  [Dealing with MySQL nulls and unique constraint](https://medium.com/@aleksandrasays/dealing-with-mysql-nulls-and-unique-constraint-d260f6b40e60)

## mysql client

```bash
brew install mysql-client

echo 'export PATH="/usr/local/opt/mysql-client/bin:$PATH"' >> ~/.bash_profile

source ~/.bash_profile
apt-get install -y default-mysql-client
mysql -u root -p kollectai -h localhost

mysql -h host -D database -u developer -p password

mysql -u developer -p password -h host -D database

mysql --user=user --host=host --database=database --password=password -A

show databases;

use mysql;

show tables;

select * from mysql.user;

GRANT ALL PRIVILEGES ON *.* TO 'root';
```

## cobar

Cobar is a proxy for sharding databases and tables, compatible with MySQL protocol and MySQL SQL grama, underlying storage only support MySQL for support foreground business more simple, stable, efficient and safety.

- **Sharding:** You can add new MySQL instance as your business grows.
- **High availability:** Both Cobar server and underlying MySQL is clustered, business will not suffer with single node fail.
- **Compatible with MySQL protocol:** Use Cobar as MySQL. You can replace MySQL with Cobar to power your application.

https://github.com/alibaba/cobar

## InnoDB

InnoDB is a [storage engine](https://en.wikipedia.org/wiki/Database_engine) for the [database management system](https://en.wikipedia.org/wiki/Database_management_system)[MySQL](https://en.wikipedia.org/wiki/MySQL). Since the release of MySQL 5.5.5 in 2010, it replaced [MyISAM](https://en.wikipedia.org/wiki/MyISAM) as MySQL's default table type. It provides the standard [ACID](https://en.wikipedia.org/wiki/ACID)-compliant [transaction](https://en.wikipedia.org/wiki/Database_transaction) features, along with [foreign key](https://en.wikipedia.org/wiki/Foreign_key) support ([Declarative Referential Integrity](https://en.wikipedia.org/wiki/Declarative_Referential_Integrity)). It is included as standard in most [binaries](https://en.wikipedia.org/wiki/Binaries) distributed by [MySQL AB](https://en.wikipedia.org/wiki/MySQL_AB), the exception being some [OEM](https://en.wikipedia.org/wiki/Original_equipment_manufacturer) versions

## mariadb

MariaDB is a community-developed, commercially supported [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) of the [MySQL](https://en.wikipedia.org/wiki/MySQL)[relational database management system](https://en.wikipedia.org/wiki/Relational_database_management_system)(RDBMS), intended to remain [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software) under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License). Development is led by some of the original developers of MySQL, who forked it due to concerns over its [acquisition](https://en.wikipedia.org/wiki/Takeover) by [Oracle Corporation](https://en.wikipedia.org/wiki/Oracle_Corporation) in 2009.

MariaDB intended to maintain high compatibility with MySQL, ensuring a drop-in replacement capability with library binary parity and exact matching with MySQL [APIs](https://en.wikipedia.org/wiki/Application_programming_interface) and commands. However, new features diverge more.It includes new [storage engines](https://en.wikipedia.org/wiki/Storage_engine) like [Aria](https://en.wikipedia.org/wiki/Aria_(storage_engine)), [ColumnStore](https://en.wikipedia.org/wiki/InfiniDB), and [MyRocks](https://en.wikipedia.org/wiki/MyRocks).

Its lead developer/CTO is [Michael "Monty" Widenius](https://en.wikipedia.org/wiki/Michael_Widenius), one of the founders of [MySQL AB](https://en.wikipedia.org/wiki/MySQL_AB) and the founder of Monty Program AB. On 16 January 2008, MySQL AB announced that it had agreed to be acquired by [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) for approximately $1 billion. The acquisition completed on 26 February 2008. Sun was then bought the following year by Oracle Corporation. MariaDB is named after Monty's younger daughter, Maria. (MySQL is named after his other daughter, My.)

Editors

- MySQLWorkbench
- Windows - [Database Workbench - MariaDB Knowledge Base](https://mariadb.com/kb/en/database-workbench/)
- [Sequel Pro](https://sequelpro.com/)
- [Heidi Sql](http://www.heidisql.com/)
- [SQLyog](https://www.webyog.com/)

[mariadb-report - MariaDB Knowledge Base](https://mariadb.com/kb/en/mariadb-report/)

## MySQL 5 vs MySQL 8

https://mysqlserverteam.com/whats-new-in-mysql-8-0-generally-available

Upgrade Checker - https://mysqlserverteam.com/upgrading-to-mysql-8-0-here-is-what-you-need-to-know

MySQL 8.0 brought enormous changes and modifications that were pushed by the Oracle MySQL Team.

- Physical files have been changed. For instance, *.frm,*.TRG, *.TRN, and*.par [no longer exist](https://dev.mysql.com/worklog/task/?id=8216).
- Tons of new features have been added such as [CTE](https://dev.mysql.com/doc/refman/8.0/en/with.html)(Common Table Expressions), [Window Functions](https://dev.mysql.com/doc/refman/8.0/en/window-functions.html), [**Invisible Indexes**](https://dev.mysql.com/doc/refman/8.0/en/invisible-indexes.html), regexp (or Regular Expression)--the latter has been changed and now provides full Unicode support and is multibyte safe.
- Data dictionary has also changed. It's now incorporated with a transactional data dictionary that stores information about database objects. Unlike previous versions, dictionary data was stored in metadata files and non-transactional tables.
- Security has been improved with the new addition of caching_sha2_password which is now the default authentication replacing mysql_native_password and offers more flexibility but tightened security which must use either a secure connection or an unencrypted connection that supports password exchange using an RSA key pair.
- **The benchmark results reveals that there has been an impressive improvement, not only on managing read workloads, but also on a high read/write workload comparing to MySQL 5.7.**
- https://dev.mysql.com/doc/refman/8.0/en/create-index.html#create-index-functional-key-parts
- Resource Groups
    - https://dev.mysql.com/doc/refman/5.7/en/user-resources.html
    - https://dzone.com/articles/mysql-8-load-fine-tuning-with-resource-groups

## Important

- Removed Query Cache
- Dual Passwords

## Debugging / Errors

[MySQL "Got an error reading communication packet"](https://www.percona.com/blog/mysql-got-an-error-reading-communication-packet-errors/)

[Resolve the communication packets error in Amazon RDS for MySQL | AWS re:Post](https://repost.aws/knowledge-center/rds-mysql-communication-packet-error)

## ProxySQL

ProxySQL is a high performance, high availability, protocol aware proxy for MySQL and forks (like Percona Server and MariaDB). All the while getting the unlimited freedom that comes with a GPL license.

Its development is driven by the lack of open source proxies that provide high performance.

[ProxySQL](https://www.proxysql.com/) is a high-performance SQL proxy. ProxySQL runs as a daemon watched by a monitoring process. The process monitors the daemon and restarts it in case of a crash to minimize downtime.

The daemon accepts incoming traffic from *MySQL* clients and forwards it to backend *MySQL* servers.

The proxy is designed to run continuously without needing to be restarted. Most configuration can be done at runtime using queries similar to SQL statements. These include runtime parameters, server grouping, and traffic-related settings.

[GitHub - sysown/proxysql: High-performance MySQL proxy with a GPL license.](https://github.com/sysown/proxysql)

[ProxySQL - A High Performance Open Source MySQL Proxy](https://proxysql.com/)

[Load balancing with ProxySQL - Percona XtraDB Cluster](https://docs.percona.com/percona-xtradb-cluster/5.7/howtos/proxysql.html)

## Resources

https://dev.mysql.com/doc/refman/5.7/en/glossary.html

https://github.com/shlomi-noach/awesome-mysql

[GitHub - MyCATApache/Mycat2: MySQL Proxy using Java NIO based on Sharding SQL,Calcite ,simple and fast](https://github.com/MyCATApache/Mycat2)

[Schema migrations — MySQL for Developers — PlanetScale](https://planetscale.com/learn/courses/mysql-for-developers/schema/schema-migrations)
