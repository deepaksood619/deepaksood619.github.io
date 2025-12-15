# PyFlink

PyFlink is a Python API for Apache Flink that allows you to build scalable batch and streaming workloads, such as real-time data processing pipelines, large-scale exploratory data analysis, Machine Learning (ML) pipelines and ETL processes. If you’re already familiar with Python and libraries such as Pandas, then PyFlink makes it simpler to leverage the full capabilities of the Flink ecosystem. Depending on the level of abstraction you need, there are two different APIs that can be used in PyFlink:

- The **PyFlink Table API** allows you to write powerful relational queries in a way that is similar to using SQL or working with tabular data in Python.
- At the same time, the **PyFlink DataStream API** gives you lower-level control over the core building blocks of Flink, [state](https://nightlies.apache.org/flink/flink-docs-master/docs/concepts/stateful-stream-processing/) and [time](https://nightlies.apache.org/flink/flink-docs-master/docs/concepts/time/), to build more complex stream processing use cases.

## Links

- [PyFlink Docs — pyflink-docs version master](https://pyflink.readthedocs.io/en/main/index.html)
- [List: Pyflink Kafka Getting Started - Table API, UDFs and more | Curated by Diptiman Raichaudhuri | Medium](https://diptimanrc.medium.com/list/pyflink-kafka-getting-started-table-api-udfs-and-more-ff5bf8d9d41a)
- [GitHub - diptimanr/kafka\_flink\_getting\_started: pyflink Table API and FLink SQL on Kafka](https://github.com/diptimanr/kafka_flink_getting_started)
	- [kafka\_flink\_getting\_started/06\_kafka\_pyflink\_tableapi\_tumbling\_window.py at master · diptimanr/kafka\_flink\_getting\_started · GitHub](https://github.com/diptimanr/kafka_flink_getting_started/blob/master/06_kafka_pyflink_tableapi_tumbling_window.py)
