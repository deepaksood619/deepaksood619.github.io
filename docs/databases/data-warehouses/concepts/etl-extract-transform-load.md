# ETL (Extract Transform Load)

In [computing](https://en.wikipedia.org/wiki/Computing), **extract, transform, load** (**ETL**) refers to a process in [database](https://en.wikipedia.org/wiki/Database) usage and especially in [data warehousing](https://en.wikipedia.org/wiki/Data_warehouse).

- Data extraction is where data is extracted from homogeneous or heterogeneous data sources
- Data transformation is where the data is transformed for storing in the proper format or structure for the purposes of querying and analysis
- Data loading where the data is loaded into the final target database, more specifically, an [operational data store](https://en.wikipedia.org/wiki/Operational_data_store), [data mart](https://en.wikipedia.org/wiki/Data_mart), or data warehouse.

Since the data extraction takes time, it is common to execute the three phases in parallel. While the data is being extracted, another transformation process executes while processing the data already received and prepares it for loading while the data loading begins without waiting for the completion of the previous phases.

![image](../../../media/ETL-(Extract-Transform-Load)-image1.jpg)

https://www.toptal.com/etl/interview-questions

## ELT - (Extract, Load, Transform)

ETL is the order that these steps are traditionally performed in. ETL is great for putting data into the right format, stripping out unnecessary columns, and masking fields relating to GDPR compliance.

However, ELT has become a more popular approach when used in conjunction with data lake architecture. The data arrives quickly as it does not have to be altered in any way. The data scientist can then use just the data they need, quickly get results, and not have to deal with delays if a transformation step fails.

Considerations need to be made around how reliable the data is in its raw form. Each data scientist or end-user will need to apply the same logic and business rules when conducting analysis to keep results consistent.

## Datastage

Datastage is an ETL tool which extracts data, transform and load data from source to the target. The data sources might include sequential files, indexed files, relational databases, external data sources, archives, enterprise applications, etc. DataStage facilitates business analysis by providing quality data to help in gaining business intelligence.

https://www.guru99.com/datastage-tutorial.html
