# Data Lake

Also called Data Swamp

The idea is to have a single store for all of the raw data that anyone in an organization might need to analyze. Commonly people use Hadoop to work on the data in the lake.

The data lake stores *raw* data, in whatever form the data source provides. There is no assumptions about the schema of the data, each data source can use whatever schema it likes. It's up to the consumers of that data to make sense of that data for their own purposes.

It is important that all data put in the lake should have a clear provenance in place and time. Every data item should have a clear trace to what system it came from and when the data was produced.

The data lake is schemaless.

## References

[Data Lake | Martin Fowler](https://martinfowler.com/bliki/DataLake.html)

[4 Guiding Principles for Modern Data Lake Architecture | Upsolver](https://www.upsolver.com/blog/four-principles-data-lake-architecture)
