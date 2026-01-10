# Big Data

Big data is a term used to refer to [data sets](https://en.wikipedia.org/wiki/Data_set) that are too large or complex for traditional [data-processing](https://en.wikipedia.org/wiki/Data_processing) [application software](https://en.wikipedia.org/wiki/Application_software) to adequately deal with.

Data with many cases (rows) offer greater [statistical power](https://en.wikipedia.org/wiki/Statistical_power), while data with higher complexity (more attributes or columns) may lead to a higher [false discovery rate](https://en.wikipedia.org/wiki/False_discovery_rate).

Big data challenges include [capturing data](https://en.wikipedia.org/wiki/Automatic_identification_and_data_capture), [data storage](https://en.wikipedia.org/wiki/Computer_data_storage), curation, [data analysis](https://en.wikipedia.org/wiki/Data_analysis), search, [sharing](https://en.wikipedia.org/wiki/Data_sharing), [transfer](https://en.wikipedia.org/wiki/Data_transmission), [visualization](https://en.wikipedia.org/wiki/Data_visualization), [querying,](https://en.wikipedia.org/wiki/Query_language) updating, [information privacy](https://en.wikipedia.org/wiki/Information_privacy) and data source.

Big data was originally associated with three key concepts: volume, variety, and velocity. Other concepts later attributed with big data are veracity (i.e., how much noise is in the data) and value

## Why Big Data?

- Traditional RDBMS queries isn't sufficient to get useful information out of the huge volume of data
- To search it with traditional tools to find out if a particular topic was trending would take so long that the result would be meaningless by the time it was computed
- Big data come up with a solution to store this data in novel ways in order to make it more accessible, and also to come up with methods of performing analysis on it

## Challenges

- Capturing
- Storing
- Searching
- Sharing
- Analysing
- Visualization

## Big data enabling technologies

- Apache Hadoop
- Hadoop Ecosystem
- HDFS Architecture
- YARN
- NoSQL
- Hive
- Map Reduce
- Apache Spark
- Zookeeper
- Cassandra
- Hbase
- Spark Streaming
- Kafka
- Spark MLib
- GraphX

## Steps for Data Platform

1. Data
2. Query
3. Merge
4. Wrangle
5. Visualize

## Data Wrangling

Data wrangling, sometimes referred to as data munging, is the process of transforming and [mapping data](https://en.wikipedia.org/wiki/Data_mapping) from one "[raw](https://en.wikipedia.org/wiki/Raw_data)" data form into another [format](https://en.wikipedia.org/wiki/Content_format) with the intent of making it more appropriate and valuable for a variety of downstream purposes such as analytics. A data wrangler is a person who performs these transformation operations.

This may include further [munging](https://en.wikipedia.org/wiki/Mung_(computer_term)), [data visualization](https://en.wikipedia.org/wiki/Data_visualization), data aggregation, training a [statistical model](https://en.wikipedia.org/wiki/Statistical_model), as well as many other potential uses. Data munging as a process typically follows a set of general steps which begin with extracting the data in a raw form from the data source, "munging" the raw data using algorithms (e.g. sorting) or parsing the data into predefined data structures, and finally depositing the resulting content into a data sink for storage and future use.

https://en.wikipedia.org/wiki/Data_wrangling

## Links

- http://xyz.insightdataengineering.com/blog/pipeline_map
- [Big data - Wikipedia](https://en.wikipedia.org/wiki/Big_data)
- https://www.semantikoz.com/blog/getting-started-with-hadoop-and-big-data-with-text-and-hive
- https://zerowithdot.com/splitting-to-batches
- https://www.fast.ai/2020/01/07/data-questionnaire
- https://www.digitalocean.com/community/tutorials/an-introduction-to-big-data-concepts-and-terminology
- [The Great Data Closure\| Why Databricks and Snowflake are hitting their ceiling](https://dataopsleadership.substack.com/p/the-great-data-closure-why-databricks)

### [MotherDuck: Big Data is Dead](https://motherduck.com/blog/big-data-is-dead/)

- Data sizes may have gotten marginally larger, but hardware has gotten bigger at an even faster rate
- the era of Big Data is over. It had a good run, but now we can stop worrying about data size and focus on how we’re going to use it to make better decisions
- MOST PEOPLE DON’T HAVE THAT MUCH DATA
- THE STORAGE BIAS IN SEPARATION OF STORAGE AND COMPUTE.
- Instead of "shared nothing" architectures which are hard to manage in real world conditions, shared disk architectures let you grow your storage and your compute independently. The rise of scalable and reasonably fast object storage like S3 and GCS meant that you could relax a lot of the constraints on how you built a database.
- WORKLOAD SIZES ARE SMALLER THAN OVERALL DATA SIZES

[Zero ELT could be the death of the Modern Data Stack | by Hugo Lu | May, 2023 | Medium](https://medium.com/@hugolu87/zero-elt-could-be-the-death-of-the-modern-data-stack-cfdd56c9246d)
