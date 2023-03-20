# Kimball / Inmon Architecture

For designing a data warehouse, there are two most common architectures named **Kimball** and **Inmon.**

## Kimball

Kimball’s approach to designing a Datawarehouse was introduced by **Ralph Kimball**. This approach starts with recognizing the business process and questions that Dataware house has to answer. These sets of information are being analyzed and then documented well. The [Extract Transform Load (ETL)](https://www.geeksforgeeks.org/etl-process-in-data-warehouse/) software brings all data from multiple data sources called data marts and then is loaded into a common area called staging. Then this is transformed into an OLAP cube.

### Applications

- Setup and Built are quick.
- Generating report against multiple star schema is very successful.
- Database operations are very effective.
- Occupies less space in the database and management is easy.

![](https://media.geeksforgeeks.org/wp-content/uploads/20200717001130/Kimball.png)

## Inmon

Inmon’s approach to designing a Datawarehouse was introduced by **Bill Inmon**. This approach starts with a corporate data model. This model recognizes key areas and also takes care of customers, products, and vendors. This model serves for the creation of a detailed logical model which is used for major operations. Details and models are then used to develop a physical model. This model is normalized and makes data redundancy less. This is a complex model that is difficult to be used for business purposes for which data marts are created and each department is able to use it for their purposes.

### Applications

- The data warehouse is very flexible to changes.
- Business processes can be understood very easily.
- Reports can be handled across enterprises.
- ETL process is very less prone to errors.

![](https://media.geeksforgeeks.org/wp-content/uploads/20200717001348/Inmon.png)

## Difference between Kimball and Inmon

| Parameters | Kimball | Inmon |
| --- | --- | --- |
| Introduced by | Introduced by Ralph Kimball. | Introduced by Bill Inmon. |
| Approach | It has a Bottom-Up Approach for implementation. | It has Top-Down Approach for implementation. |
| Data Integration | It focuses on Individual business areas. | It focuses on Enterprise-wide areas. |
| Building Time | It is efficient and takes less time. | It is complex and consumes a lot of time. |
| Cost | It has iterative steps and is cost-effective. | Initial cost is huge and the development cost is low. |
| Skills Required | It does not need such skills but a generic team will do the job. | It needs specialized skills to make work. |
| Maintenance | Here maintenance is difficult. | Here maintenance is easy. |
| Data Model | It prefers data to be in the De-normalized model. | It prefers data to be in a normalized model. |
| Data Store Systems | In this, source systems are highly stable. | In this, source systems have a high rate of change. |

[Inmon or Kimball: Which approach is suitable for your data warehouse? | Computer Weekly](https://www.computerweekly.com/tip/Inmon-or-Kimball-Which-approach-is-suitable-for-your-data-warehouse)

[Difference between Kimball and Inmon - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-kimball-and-inmon/)
