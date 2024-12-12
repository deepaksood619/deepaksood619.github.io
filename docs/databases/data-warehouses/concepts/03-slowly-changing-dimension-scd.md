# Slowly Changing Dimension (SCD)

A Slowly Changing Dimension (SCD) is a dimension that stores and manages both current and historical data over time in a data warehouse. It is considered and implemented as one of the most critical ETL (Extract Transform Load) tasks in tracking the history of dimension records.

There are three types of SCDs and you can use Warehouse Builder to define, deploy, and load all three types of SCDs.

### Type 1 SCDs - Overwriting

In a Type 1 SCD the new data overwrites the existing data. Thus the existing data is lost as it is not stored anywhere else. This is the default type of dimension you create. You do not need to specify any additional information to create a Type 1 SCD.

### Type 2 SCDs - Creating another dimension record

A Type 2 SCD retains the full history of values. When the value of a chosen attribute changes, the current record is closed. A new record is created with the changed data values and this new record becomes the current record. Each record contains the effective time and expiration time to identify the time period between which the record was active.

SCD Type 2 maintains a history of changes by creating a new record for each change that occurs in the source system. Each record is assigned a unique identifier, and it includes the start and end dates for which the record is valid. This technique allows you to track changes in data over time and perform historical analysis.

At the end of a data warehousing process, the SCD Type 2 table will have multiple records for each dimension member, each with a unique identifier, start date, and end date. The end date for the current record will be set to a high value, such as '9999-12-31', indicating that it is the current record and that it has no end date.

### Type 3 SCDs - Creating a current value field

A Type 3 SCD stores two versions of values for certain selected level attributes. Each record stores the previous value and the current value of the selected attribute. When the value of any of the selected attributes changes, the current value is stored as the old value and the new value becomes the current value.

[Slowly changing dimension - Wikipedia](https://en.wikipedia.org/wiki/Slowly_changing_dimension)

[Implement slowly changing dimensions in a data lake using AWS Glue and Delta | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/implement-slowly-changing-dimensions-in-a-data-lake-using-aws-glue-and-delta/)
