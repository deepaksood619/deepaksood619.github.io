# ETL (Extract Transform Load)

In [computing](https://en.wikipedia.org/wiki/Computing), **extract, transform, load**(**ETL**) refers to a process in [database](https://en.wikipedia.org/wiki/Database) usage and especially in [data warehousing](https://en.wikipedia.org/wiki/Data_warehouse).

- Data extraction is where data is extracted from homogeneous or heterogeneous data sources
- Data transformationis where the data is transformed for storing in the proper format or structure for the purposes of querying and analysis
- Data loadingwhere the data is loaded into the final target database, more specifically, an [operational data store](https://en.wikipedia.org/wiki/Operational_data_store), [data mart](https://en.wikipedia.org/wiki/Data_mart), or data warehouse.
Since the data extraction takes time, it is common to execute the three phases in parallel. While the data is being extracted, another transformation process executes while processing the data already received and prepares it for loading while the data loading begins without waiting for the completion of the previous phases.

![image](../../media/ETL-(Extract-Transform-Load)-image1.jpg)

<https://www.toptal.com/etl/interview-questions>
