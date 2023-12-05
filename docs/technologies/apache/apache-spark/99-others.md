# Others

## Data Types

### DecimalType()

Represents arbitrary-precision signed decimal numbers. Backed internally by `java.math.BigDecimal`. A `BigDecimal` consists of an arbitrary precision integer **unscaled value** and a 32-bit **integer scale**.

But what it really means? Let’s break it down:

DecimalType() stores two operands (Precision and Scale), this way avoids storing trailing zeros.

- Precision - Number of digits in the Unscaled value
- Unscaled value - Value without the floating-point (i.e 4.33 the unscaled value would be 433)
- Scale - Number of digits to the right of the decimal point ( i.e 4.33 the scale is 2)

[Pyspark Data Types - Explained. The ins and outs—Data types… | by Diogo Veloso | BiLD Journal | Medium](https://medium.com/bild-journal/pyspark-data-types-explained-feb5e6f83c43)

## Optimization

https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-partitions.html#aws-glue-programming-etl-partitions-writing

https://towardsdatascience.com/apache-spark-optimization-toolkit-17cf3e491992

https://github.com/aws-samples/aws-glue-samples/blob/master/examples/join_and_relationalize

https://thedataguy.in/aws-glue-custom-output-file-size-and-fixed-number-of-files

- Option 1: groupFiles
- Option 2: groupFiles while reading from S3
- Option 3: Repartition

https://medium.com/enigma-engineering/things-i-wish-id-known-about-spark-when-i-started-one-year-later-edition-d767430181ed

[Performance Tuning - Spark 3.3.2 Documentation](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

## Bucketing

Bucketing is an optimization technique in Apache Spark SQL. Data is allocated among a specified number of buckets, according to values derived from one or more bucketing columns. Bucketing improves performance by shuffling and sorting data prior to downstream operations such as table joins. The tradeoff is the initial overhead due to shuffling and sorting, but for certain data transformations, this technique can improve performance by avoiding later shuffling and sorting.

This technique is useful for dimension tables, which are frequently used tables containing primary keys. It is also useful when there are frequent join operations involving large and small tables.

[Best Practices for Bucketing in Spark SQL | by David Vrba | Towards Data Science](https://towardsdatascience.com/best-practices-for-bucketing-in-spark-sql-ea9f23f7dd53)

[Bucketing in Spark](https://www.clairvoyant.ai/blog/bucketing-in-spark)

## Shuffling

**Apache Spark processes queries by distributing data over multiple nodes and calculating the values separately on every node.** However, occasionally, **the nodes need to exchange the data**. After all, that’s the purpose of Spark - processing data that doesn’t fit on a single machine.

**Shuffling is the process of exchanging data between partitions**. As a result, data rows can move between worker nodes when their source partition and the target partition reside on a different machine.

[What is shuffling in Apache Spark, and when does it happen? | Bartosz Mikulski](https://www.mikulskibartosz.name/shuffling-in-apache-spark/)

[Spark Basics | Shuffling - YouTube](https://www.youtube.com/watch?v=ffHboqNoW_A)

[Spark SQL Shuffle Partitions - Spark By Examples](https://sparkbyexamples.com/spark/spark-shuffle-partitions/?expand_article=1)

[Apache Spark : The Shuffle](https://www.linkedin.com/pulse/apache-spark-shuffle-akhil-pathirippilly-mana/)

[35. Databricks & Spark: Interview Question - Shuffle Partition - YouTube](https://www.youtube.com/watch?v=Kmb_pm8AQCE)

## SparkML

https://spark.apache.org/docs/latest/ml-pipeline.html

https://towardsdatascience.com/a-neanderthals-guide-to-apache-spark-in-python-9ef1f156d427
