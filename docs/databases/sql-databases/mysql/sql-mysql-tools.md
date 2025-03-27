# SQL / MySQL Tools

## Monitoring

https://www.percona.com/doc/percona-monitoring-and-management/index.html

## MySQL Diagnostic Manager (Monyog)

[Top 5 MySQL Monitoring tools 2021](https://www.eversql.com/top-5-mysql-monitoring-tools)

[Monyog | Monitor MySQL Databases Configuration in Real-Time | Webyog](https://www.webyog.com/product/monyog)

## Testing

### mysqlslap

It's a benchmarking tool that can help DBAs and developers load test their database servers.

mysqlslap can emulate a large number of client connections hitting the database server at the same time. The load testing parameters are fully configurable and the results from different test runs can be used to fine-tune database design or hardware resources.

https://www.digitalocean.com/community/tutorials/how-to-measure-mysql-query-performance-with-mysqlslap

## Optimizations

### MySQLTuner

https://github.com/major/MySQLTuner-perl

https://github.com/pdufault/mysqlfragfinder/blob/master/mysqlfragfinder.sh

### Mysqlreport

Mysqlreport transforms the values from SHOW STATUS into an easy-to-read report that provides an in-depth understanding of how well MySQL is running. mysqlreport is a better alternative (and practically the only alternative) to manually interpreting SHOW STATUS.

### Event Reduce

An algorithm to optimize database queries that run multiple times

https://github.com/pubkey/event-reduce

### SQLCheck

SQL anti-patterns can slow down queries, but often it takes experienced DBAs and developers poring over code to identify and resolve them.

Four categories of anti-pattern:

- Logical database design
- Physical database design
- Query
- Application development

Sqlcheck can be targeted at varying risk levels, categorized as low, medium, or high risk. This is helpful if your list of anti-patterns is large, since you can prioritize the queries with the greatest performance impact.All you need to do to get started is gather a list of your distinct queries into a file and then pass them as an argument to the tool.

https://github.com/jarulraj/sqlcheck

### Others

[AI-Powered Automatic PostgreSQL & MySQL Tuning | OtterTune](https://ottertune.com/)

## Maintenance Scripts

https://jonlabelle.com/snippets/view/shell/mysql-database-maintenance-script

Backup + Optimize - https://github.com/mmerian/MySQL-Maint/blob/master/mysql_maint.sh

InnoDB stores data using a page-allocation method and does not suffer from fragmentation in the same way that legacy storage engines (such as MyISAM) will. When considering whether or not to run optimize, consider the workload of transactions that your server will process:

- Some level of fragmentation is expected. InnoDB only fills pages 93% full, to leave room for updates without having to split pages.
- Delete operations might leave gaps that leave pages less filled than desired, which could make it worthwhile to optimize the table.
- Updates to rows usually rewrite the data within the same page, depending on the data type and row format, when sufficient space is available. See Section 14.10.5, "How Compression Works for InnoDB Tables" and Section 14.12.1, "Overview of InnoDB Row Storage".
- High-concurrency workloads might leave gaps in indexes over time, as InnoDB retains multiple versions of the same data due through its MVCC mechanism. See Section 14.5.12, "InnoDB Multi-Versioning".

## Orchestrator

orchestrator is a MySQL high availability and replication management tool, runs as a service and provides command line access, HTTP API and Web interface.

https://github.com/openark/orchestrator

## CueObserve

Anomaly detection on SQL data warehouses and databases

https://github.com/cuebook/cueobserve

https://cueobserve.cuebook.ai

## Others

- [Best Oracle Developer and Administrator Database Tools | Free Trial](https://www.quest.com/products/toad-for-oracle/)
