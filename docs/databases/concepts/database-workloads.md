# Database Workloads

## OLTP (On-line Transaction Processing)

Transactions

groups of read and write requests that occur together as atomic units

OLTP is characterized by a large number of short on-line transactions (INSERT, UPDATE, DELETE). The main emphasis for OLTP systems is put on very fast query processing, maintaining data integrity in multi-access environments and an effectiveness measured by number of transactions per second. In OLTP database there is detailed and current data, and schema used to store transactional databases is the entity model (usually 3NF).- Most likely to have data from the past hour

- Data is inserted and updated more often
- Typically uses an operational database

## OLAP (On-line Analytical Processing)

is characterized by relatively low volume of transactions. Queries are often very complex and involve aggregations. For OLAP systems a response time is an effectiveness measure. OLAP applications are widely used by Data Mining techniques. In OLAP database there is aggregated, historical data, stored in multi-dimensional schemas (usually star schema).- Typically uses a data warehouse

- Help business with decision making and problem solving
- Queries a large amount of data

### Differences between OLTP and OLAP system design

| | **OLTP System Online Transaction Processing (Operational System)** | **OLAP System Online Analytical Processing (Data Warehouse)** |
|---|---|---|
| **Source of data** | Operational data; OLTPs are the original source of the data. | Consolidation data; OLAP data comes from the various OLTP Databases |
| **Purpose of data** | To control and run fundamental business tasks | To help with planning, problem solving, and decision support |
| **What the data** | Reveals a snapshot of ongoing business processes | Multi-dimensional views of various kinds of business activities |
| **Inserts and Updates** | Short and fast inserts and updates initiated by end users | Periodic long-running batch jobs refresh the data |
| **Queries** | Relatively standardized and simple queries Returning relatively few records | Often complex queries involving aggregations |
| **Processing Speed** | Typically very fast | Depends on the amount of data involved; batch data refreshes and complex queries may take many hours; query speed can be improved by creating indexes |
| **Space Requirements** | Can be relatively small if historical data is archived | Larger due to the existence of aggregation structures and history data; requires more indexes than OLTP |
| **Database Design** | Highly normalized with many tables | Typically de-normalized with fewer tables; use of star and/or snowflake schemas |
| **Backup and Recovery** | Backup religiously; operational data is critical to run the business, data loss is likely to entail significant monetary loss and legal liability | Instead of regular backups, some environments may consider simply reloading the OLTP data as a recovery method |

1. ClickHouse
2. Druid
3. Pinot

https://medium.com/@leventov/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7

## RTAP - Real Time Analytic Processing

Stream processing

## HTAP - Hybrid Transaction + Analytical Processing

OLTP + OLAP together on the same database instance

- TiDB

[Hybrid transactional/analytical processing - Wikipedia](https://en.wikipedia.org/wiki/Hybrid_transactional/analytical_processing)
