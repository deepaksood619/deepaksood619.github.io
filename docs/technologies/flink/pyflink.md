# PyFlink

PyFlink is a Python API for Apache Flink that allows you to build scalable batch and streaming workloads, such as real-time data processing pipelines, large-scale exploratory data analysis, Machine Learning (ML) pipelines and ETL processes. If you’re already familiar with Python and libraries such as Pandas, then PyFlink makes it simpler to leverage the full capabilities of the Flink ecosystem. Depending on the level of abstraction you need, there are two different APIs that can be used in PyFlink:

- The **PyFlink Table API** allows you to write powerful relational queries in a way that is similar to using SQL or working with tabular data in Python.
- At the same time, the **PyFlink DataStream API** gives you lower-level control over the core building blocks of Flink, [state](https://nightlies.apache.org/flink/flink-docs-master/docs/concepts/stateful-stream-processing/) and [time](https://nightlies.apache.org/flink/flink-docs-master/docs/concepts/time/), to build more complex stream processing use cases.

## User Defined Functions (UDFs)

A [user-defined function (UDF)](https://docs.confluent.io/cloud/current/flink/concepts/user-defined-functions.html#flink-sql-udfs) extends the capabilities of Confluent Cloud for Apache Flink® and enables you to implement custom logic beyond what is supported by SQL. For example, you can implement functions like encoding and decoding a string, performing geospatial calculations, encrypting and decrypting fields, or reusing an existing library or code from a third-party supplier.

Confluent Cloud for Apache Flink supports UDFs written in Java and Python.

- **Java UDFs**: Package your custom function and its dependencies into a JAR file and upload it as an artifact to Confluent Cloud. Register the function in a Flink database by using the [CREATE FUNCTION](https://docs.confluent.io/cloud/current/flink/reference/statements/create-function.html#flink-sql-create-function) statement, and invoke your UDF in Flink SQL or the [Table API](https://docs.confluent.io/cloud/current/flink/reference/table-api.html#flink-table-api). Confluent Cloud provides the infrastructure to run your code.

- **Python UDFs (early access)**: Package your custom function and its dependencies into a Python package and upload it as an artifact to Confluent Cloud. Register the function in a Flink database by using the [CREATE FUNCTION](https://docs.confluent.io/cloud/current/flink/reference/statements/create-function.html#flink-sql-create-function) statement, and invoke your UDF in Flink SQL. Confluent Cloud provides the infrastructure to run your code.

- [Create a User-Defined Function with Confluent Cloud for Apache Flink \| Confluent Documentation](https://docs.confluent.io/cloud/current/flink/how-to-guides/create-udf.html)
- [List: Pyflink Kafka Getting Started - Table API, UDFs and more | Curated by Diptiman Raichaudhuri | Medium](https://diptimanrc.medium.com/list/pyflink-kafka-getting-started-table-api-udfs-and-more-ff5bf8d9d41a)
- [Fetching Title#xncr](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/user_defined_functions/)

### User Defined Aggregate Functions (UDAF)

User-Defined Aggregate Functions (UDAFs) are user-programmable routines that operate on multiple rows at once to return a single aggregated value for each group defined by a GROUP BY clause or a window function. They are a mechanism for extending analytic engines and databases with custom logic not available in built-in functions like SUM(), AVG(), or COUNT().

## Links

- [PyFlink Docs — pyflink-docs version master](https://pyflink.readthedocs.io/en/main/index.html)
- [GitHub - diptimanr/kafka\_flink\_getting\_started: pyflink Table API and FLink SQL on Kafka](https://github.com/diptimanr/kafka_flink_getting_started)
	- [kafka\_flink\_getting\_started/06\_kafka\_pyflink\_tableapi\_tumbling\_window.py at master · diptimanr/kafka\_flink\_getting\_started · GitHub](https://github.com/diptimanr/kafka_flink_getting_started/blob/master/06_kafka_pyflink_tableapi_tumbling_window.py)
