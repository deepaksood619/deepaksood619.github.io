# Medallion Architecture

## What is a medallion architecture?

A **medallion architecture** is a data design pattern used to logically organize data in a [lakehouse](https://www.databricks.com/glossary/data-lakehouse), with the goal of incrementally and progressively improving the structure and quality of data as it flows through each layer of the architecture (from Bronze ⇒ Silver ⇒ Gold layer tables). Medallion architectures are sometimes also referred to as "**multi-hop**" architectures.

![Building Reliable, Performant Data Pipelines with Delta Lake](../../../media/Pasted%20image%2020230307111403.jpg)

## Benefits of a lakehouse architecture

- Simple data model
- Easy to understand and implement
- Enables incremental ETL
- Can recreate your tables from raw data at any time
- ACID transactions, time travel

## A quick primer on lakehouses

A [**lakehouse**](https://www.databricks.com/product/data-lakehouse) is a new data platform architecture paradigm that combines the best features of data lakes and data warehouses. A modern lakehouse is a highly scalable and performant data platform hosting both raw and prepared data sets for quick business consumption and to drive advanced business insights and decisions. It breaks data silos and allows seamless, secure data access to authorized users across the enterprise on one platform.

![Databricks Lakehouse Platform Architecture](../../../media/Pasted%20image%2020230307111436.jpg)

### Bronze layer (raw data)

The **Bronze layer** is where we land all the data from external source systems. The table structures in this layer correspond to the source system table structures "as-is," along with any additional metadata columns that capture the load date/time, process ID, etc. The focus in this layer is quick Change Data Capture and the ability to provide an historical archive of source (cold storage), data lineage, auditability, reprocessing if needed without rereading the data from the source system.

### Silver layer (cleansed and conformed data)

In the **Silver layer** of the lakehouse, the data from the Bronze layer is matched, merged, conformed and cleansed ("just-enough") so that the Silver layer can provide an "Enterprise view" of all its key business entities, concepts and transactions. (e.g. master customers, stores, non-duplicated transactions and cross-reference tables).

The Silver layer brings the data from different sources into an Enterprise view and enables self-service analytics for ad-hoc reporting, advanced analytics and ML. It serves as a source for Departmental Analysts, Data Engineers and Data Scientists to further create projects and analysis to answer business problems via enterprise and departmental data projects in the Gold Layer.

In the lakehouse data engineering paradigm, typically the ELT methodology is followed vs. ETL - which means only minimal or "just-enough" transformations and data cleansing rules are applied while loading the Silver layer. Speed and agility to ingest and deliver the data in the data lake is prioritized, and a lot of project-specific complex transformations and business rules are applied while loading the data from the Silver to Gold layer. From a data modeling perspective, the Silver Layer has more 3rd-Normal Form like data models. Data Vault-like, write-performant data models can be used in this layer.

### Gold layer (curated business-level tables)

Data in the **Gold layer** of the lakehouse is typically organized in consumption-ready "project-specific" databases. The Gold layer is for reporting and uses more de-normalized and read-optimized data models with fewer joins. The final layer of data transformations and data quality rules are applied here. Final presentation layer of projects such as Customer Analytics, Product Quality Analytics, Inventory Analytics, Customer Segmentation, Product Recommendations, Marking/Sales Analytics etc. fit in this layer. We see a lot of Kimball style star schema-based data models or Inmon style Data marts fit in this Gold Layer of the lakehouse.

So you can see that the data is curated as it moves through the different layers of a lakehouse. In some cases, we also see that lot of Data Marts and EDWs from the traditional RDBMS technology stack are ingested into the lakehouse, so that for the first time Enterprises can do "pan-EDW" advanced analytics and ML - which was just not possible or too cost prohibitive to do on a traditional stack. (e.g. IoT/Manufacturing data is tied with Sales and Marketing data for defect analysis or health care genomics, EMR/HL7 clinical data markets are tied with financial claims data to create a Healthcare Data Lake for timely and improved patient care analytics.)

## Medallion architecture and data mesh

The Medallion architecture is compatible with the concept of a **data mesh.** Bronze and silver tables can be joined together in a "one-to-many" fashion, meaning that the data in a single upstream table could be used to generate multiple downstream tables.

[Different Data Warehousing Modeling Techniques and How to Implement them on the Databricks Lakehouse Platform - The Databricks Blog](https://www.databricks.com/blog/2022/06/24/data-warehousing-modeling-techniques-and-their-implementation-on-the-databricks-lakehouse-platform.html)

## Links

- [What is a Medallion Architecture?](https://www.databricks.com/glossary/medallion-architecture)
- [What is the medallion lakehouse architecture? - Azure Databricks | Microsoft Learn](https://learn.microsoft.com/en-us/azure/databricks/lakehouse/medallion)
- [Implement medallion lakehouse architecture in Fabric - Microsoft Fabric | Microsoft Learn](https://learn.microsoft.com/en-us/fabric/onelake/onelake-medallion-lakehouse-architecture)
- [Implementing Medallion architecture in Snowflake | by Valentin Loghin | Medium](https://medium.com/@valentin.loghin/implementing-medallion-architecture-in-snowflake-4e1539d23c09)
- [Medallion Architecture 101—Inside Bronze, Silver & Gold Layers](https://www.chaosgenius.io/blog/medallion-architecture/)
- [Data Lakehouse Medallion Architecture using Azure Databricks, Delta Lake, and Azure Data Factory | by Amlan Patnaik | Medium](https://medium.com/@amlaninfinity/data-lakehouse-medallion-architecture-using-azure-databricks-delta-lake-and-azure-data-factory-e7635536d001)
