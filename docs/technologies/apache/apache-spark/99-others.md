# Others

## Data Types

### DecimalType()

Represents arbitrary-precision signed decimal numbers. Backed internally by `java.math.BigDecimal`. A `BigDecimal` consists of an arbitrary precision integer **unscaled value** and a 32-bit **integer scale**.

But what it really means? Let’s break it down:

DecimalType() stores two operands (Precision and Scale), this way avoids storing trailing zeros.

- Precision — Number of digits in the Unscaled value
- Unscaled value — Value without the floating-point (i.e 4.33 the unscaled value would be 433)
- Scale — Number of digits to the right of the decimal point ( i.e 4.33 the scale is 2)

[Pyspark Data Types — Explained. The ins and outs—Data types… | by Diogo Veloso | BiLD Journal | Medium](https://medium.com/bild-journal/pyspark-data-types-explained-feb5e6f83c43)

## Optimization

<https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-partitions.html#aws-glue-programming-etl-partitions-writing>

<https://towardsdatascience.com/apache-spark-optimization-toolkit-17cf3e491992>

<https://github.com/aws-samples/aws-glue-samples/blob/master/examples/join_and_relationalize>

<https://thedataguy.in/aws-glue-custom-output-file-size-and-fixed-number-of-files>

- Option 1: groupFiles
- Option 2: groupFiles while reading from S3
- Option 3: Repartition

<https://medium.com/enigma-engineering/things-i-wish-id-known-about-spark-when-i-started-one-year-later-edition-d767430181ed>

[Performance Tuning - Spark 3.3.2 Documentation](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

## Bucketing

## SparkML

<https://spark.apache.org/docs/latest/ml-pipeline.html>

<https://towardsdatascience.com/a-neanderthals-guide-to-apache-spark-in-python-9ef1f156d427>
