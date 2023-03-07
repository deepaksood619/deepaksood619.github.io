# Data Warehousing

## Lifecycle Data

In [computing](https://en.wikipedia.org/wiki/Computing), a data warehouse (DW or DWH), also known as an enterprise data warehouse (EDW), is a system used for [reporting](https://en.wikipedia.org/wiki/Business_reporting) and [data analysis](https://en.wikipedia.org/wiki/Data_analysis), and is considered a core component of [business intelligence](https://en.wikipedia.org/wiki/Business_intelligence). DWs are central repositories of integrated data from one or more disparate sources. They store current and historical data in one single place that are used for creating analytical reports for workers throughout the enterprise.

The data stored in the warehouse is [uploaded](https://en.wikipedia.org/wiki/Upload) from the [operational systems](https://en.wikipedia.org/wiki/Operational_system) (such as marketing or sales). The data may pass through an [operational data store](https://en.wikipedia.org/wiki/Operational_data_store) and may require [data cleansing](https://en.wikipedia.org/wiki/Data_cleansing) for additional operations to ensure [data quality](https://en.wikipedia.org/wiki/Data_quality) before it is used in the DW for reporting.

[Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load) (ETL) and [Extract, load, transform](https://en.wikipedia.org/wiki/Extract,_load,_transform) (E-LT) are the two main approaches used to build a data warehouse system.

<https://en.wikipedia.org/wiki/Data_warehouse>

## Data Warehouse vs Database

A data warehouse is specially designed for data analytics, which involves reading large amounts of data to understand relationships and trends across the data. A database is used to capture and store data, such as recording details of a transaction.

| **Characteristics** | **Data Warehouse** | **Transactional Database** |
|:---:|:---:|:---:|
| Suitable workloads | Analytics, reporting, [big data](https://aws.amazon.com/big-data/what-is-big-data/) | Transaction processing |
| Data source | Data collected and normalized from many sources | Data captured as-is from a single source, such as a transactional system |
| Data capture | Bulk write operations typically on a predetermined batch schedule | Optimized for continuous write operations as new data is available to maximize transaction throughput |
| Data normalization | Denormalized schemas, such as the Star schema or Snowflake schema | Highly normalized, static schemas |
| Data storage | Optimized for simplicity of access and high-speed query performance using columnar storage | Optimized for high throughout write operations to a single row-oriented physical block |
| Data access | Optimized to minimize I/O and maximize data throughput | High volumes of small read operations |

## Data Warehouse vs Data Lake

Unlike a data warehouse, a data lake is a centralized repository foralldata, including structured and unstructured. A data warehouse utilizes a pre-defined schema optimized for analytics. In a data lake, the schema is not defined, enabling additional types of analytics like big data analytics, full text search, real-time analytics, and machine learning.

| **Characteristics** | **Data Warehouse** | **Data Lake** |
|:---:|:---:|:---:|
| Data | Relational data from transactional systems, operational databases, and line of business applications | Non-relational and relational data from IoT devices, web sites, mobile apps, social media, and corporate applications |
| Schema | Designed prior to the data warehouse implementation (schema-on-write) | Written at the time of analysis (schema-on-read) |
| Price/Performance | Fastest query results using higher cost storage | Query results getting faster using low-cost storage |
| Data Quality | Highly curated data that serves as the central version of the truth | Any data that may or may not be curated (i.e. raw data) |
| Users | Business analysts, data scientists, and data developers | Data scientists, data developers, and business analysts (using curated data) |
| Analytics | Batch reporting, BI, and visualizations | Machine learning, predictive analytics, data discovery, and profiling |

## Data Warehouse vs Data Mart

A data mart is a data warehouse that serves the needs of a specific team or business unit, like finance, marketing, or sales. It is smaller, more focused, and may contain summaries of data that best serve its community of users.

| **Characteristics** | **Data Warehouse** | **Data Mart** |
|:---:|:---:|:---:|
| Scope | Centralized, multiple subject areas integrated together | Decentralized, specific subject area |
| Users | Organization-wide | A single community or department |
| Data source | Many sources | A single or a few sources, or a portion of data already collected in a data warehouse |
| Size | Large, can be 100's of gigabytes to petabytes | Small, generally up to 10's of gigabytes |
| Design | Top-down | Bottom-up |
| Data detail | Complete, detailed data | May hold summarized data |

## Reference

<https://dzone.com/refcardz/data-warehousing>

<http://www.oracle.com/webfolder/technetwork/tutorials/obe/db/10g/r2/owb/owb10gr2_gs/owb/lesson3/slowlychangingdimensions.htm>

<https://medium.com/@rchang/a-beginners-guide-to-data-engineering-part-ii-47c4e7cbda71>

<https://medium.com/@rchang/a-beginners-guide-to-data-engineering-the-series-finale-2cc92ff14b0>

<https://www.tutorialspoint.com/dwh/index.htm>

<https://www.guru99.com/data-warehouse-architecture.html>

<https://aws.amazon.com/data-warehouse>
