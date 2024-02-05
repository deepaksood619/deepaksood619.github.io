# Documentation

Designing Tables > Choosing a column compression type > Compression Encoding

- [Raw Encoding](https://docs.aws.amazon.com/redshift/latest/dg/c_Raw_encoding.html)
- [AZ64 Encoding](https://docs.aws.amazon.com/redshift/latest/dg/az64-encoding.html)
- [Byte-Dictionary Encoding](https://docs.aws.amazon.com/redshift/latest/dg/c_Byte_dictionary_encoding.html)
- [Delta Encoding](https://docs.aws.amazon.com/redshift/latest/dg/c_Delta_encoding.html)
- [LZO Encoding](https://docs.aws.amazon.com/redshift/latest/dg/lzo-encoding.html)
- [Mostly Encoding](https://docs.aws.amazon.com/redshift/latest/dg/c_MostlyN_encoding.html)
- [Runlength Encoding](https://docs.aws.amazon.com/redshift/latest/dg/c_Runlength_encoding.html)
- [Text255 and Text32k Encodings](https://docs.aws.amazon.com/redshift/latest/dg/c_Text255_encoding.html)
- [Zstandard Encoding](https://docs.aws.amazon.com/redshift/latest/dg/zstd-encoding.html)

A compression encoding specifies the type of compression that is applied to a column of data values as rows are added to a table.

If no compression is specified in a CREATE TABLE or ALTER TABLE statement, Amazon Redshift automatically assigns compression encoding as follows:

- Columns that are defined as sort keys are assigned RAW compression.
- Columns that are defined as BOOLEAN, REAL, or DOUBLE PRECISION data types are assigned RAW compression.
- Columns that are defined as SMALLINT, INTEGER, BIGINT, DECIMAL, DATE, TIMESTAMP, or TIMESTAMPTZ data types are assigned AZ64 compression.
- Columns that are defined as CHAR or VARCHAR data types are assigned LZO compression.

https://docs.aws.amazon.com/redshift/latest/dg/c_Compression_encodings.html

## Concepts

### 1. Blocks

- Column data is persisted to 1 MB immutable blocks
- Blocks are individually encoded with 1 of 12 encodings
- A full block can contain millions of values

### 2. Zone maps

- Goal: eliminates unnecessary I/O
- In-memory block metadata
    - Contains per-block min and max values
    - All blocks automatically have zone maps
    - Effectively prunes blocks that cannot contain data for a given query

### 3. Materialize columns

Goal: Make queries run faster by leveraging zonemaps on the fact tables

Frequently filtered and unchanging dimension values should be materialized within fact tables

- Time dimension tables do not allow for range restricted scans on fact tables
- Materializing temporal values in fact table can give significant performance gains

### 4. Slices

- A slice can be thought of like a virtual compute node
    - Unit of data partitioning
    - Parallel query processing
- Facts about slices
    - Each compute node has either 2 or 16 slices
    - Table rows are distributed to slices
    - A slice processes only its own data

### 5. Best Practices: Table design summary

- Add compression to columns
- Add sort keys on the primary columns that are filtered on
- Materialize often filtered columns from dimension tables into fact tables
- Materialize often calculated values into tables
- Co-locate large tables using DISTSTYLE KEY if the columns do not cause skew
- Avoid distribution keys on temporal columns
- Keep data types as wide as necessay (but no longer than necessary)
    - VARCHAR, CHAR, and NUMERIC

## Redshift Sort Key

Redshift Sort Key determines the order in which rows in a table are stored. Query performance is improved when Sort keys are properly used as it enables query optimizer to read fewer chunks of data filtering out the majority of it.

Redshift Sort Keys allow skipping large chunks of data during query processing. Fewer data to scan means a shorter processing time, thereby improving the query's performance.

[Working with sort keys - Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html)

### Types

#### Compound sort keys

These are made up of all the columns that are listed in the Redshift sort keys definition during the creation of the table, in the order that they are listed. Therefore, it is advisable to put the most frequently used column at the first in the list. COMPOUND is the default sort type. Compound sort keys might speed up joins, GROUP BY and ORDER BY operations, and window functions that use PARTITION BY.

#### Interleaved sort keys

Interleaved sort gives equal weight to each column in the Redshift sort keys. As a result, it can significantly improve query performance where the query uses restrictive predicates (equality operator in WHERE clause) on secondary sort columns.

### Choosing Sorting Keys

- UseInterleaved Sort Keywhen you plan to use one column as Sort Key or when WHERE clauses in your query have highly selective restrictive predicates. Or if the tables are huge. You may want to check table statistics by querying the STV_BLOCKLIST system table. Look for the tables with a high number of 1MB blocks per slice and distributed over all slices.
- UseCompound Sort Key, when you have more that one column as Sort Key, when your query includes JOINS, GROUP BY, ORDER BY and PARTITION BY when your table size is small.
- Don't use aninterleaved sort keyon columns with monotonically increasing attributes, like an identity column, dates or timestamps.

https://hevodata.com/blog/redshift-sort-keys-choosing-best-sort-style

### Data sorting

- Goal: make queries run faster by increasing the effectiveness of zone maps and reducing I/O
- Impact: enables range-restricted scans to prune blocks by leveraging zone maps
- Achieved with the table property SORTKEY defined on one or more columns
- Optimal sort key is dependent on:
    - Query patterns
    - Business requirements
    - Data profile
- Design considerations
    - Sort keys are less beneficial on small tables
    - Define four or less sort key columns - more will result in marginal gains and increased ingestion overhead
- Less then 10000 rows, don't sort, since all will be in a single zone map

https://docs.aws.amazon.com/redshift/latest/dg/c_best-practices-sort-key.html

- To have Amazon Redshift choose the appropriate sort order, specifyAUTOfor the sort key.
- If recent data is queried most frequently, specify the timestamp column as the leading column for the sort key.
    Queries are more efficient because they can skip entire blocks that fall outside the time range.
- If you do frequent range filtering or equality filtering on one column, specify that column as the sort key.
    Amazon Redshift can skip reading entire blocks of data for that column. It can do so because it tracks the minimum and maximum column values stored on each block and can skip blocks that don't apply to the predicate range.
- If you frequently join a table, specify the join column as both the sort key and the distribution key.
    Doing this enables the query optimizer to choose a sort merge join instead of a slower hash join. Because the data is already sorted on the join key, the query optimizer can bypass the sort phase of the sort merge join.
- Place the sort key on columns that are frequently filtered on placing the low cardinality columns first
    - On most fact tables, the first sort key columns should be a temporal column
    - Columns added to a sort key after a high-cardinality column are not effective

https://github.com/awsdocs/amazon-redshift-developer-guide/blob/master/doc_source/c_best-practices-sort-key

## Redshift Distribution Key (DIST Keys)

Redshift DistributionKeys ([DIST Keys](http://docs.aws.amazon.com/redshift/latest/dg/t_Distributing_data.html)) determine where data is stored in Redshift. Clusters store data fundamentally across the compute nodes. Query performance suffers when a large amount of data is stored on a single node.

The query optimizer distributes less number of rows to the compute nodes to perform joins and aggregation on query execution. This redistribution of data can include shuffling of the entire tables across all the nodes.

Uneven distribution of data across computing nodes leads to the skewness of the work a node has to do and you don't want an under-utilised compute node. So the distribution of the data should be uniform. Distribution is per table. So you can select a different distribution style for each of the tables you are going to have in your database.

### Types of Distribution Styles

Amazon Redshift supports three kinds of table distribution styles.

#### Even distribution

This is the default distribution styles of a table.InEven DistributiontheLeadernode of the cluster distributes the data of a table evenly across all slices, using a round-robin approach.

#### Key distribution

The data is distributed across slices by the leader node matching the values of a designated column. So all the entries with the same value in the column end up in the same slice.

#### All distribution

Leader node maintains a copy of the table on all the computing nodes resulting in more space utilisation. Since all the nodes have a local copy of the data, the query does not require copying data across the network. This results in faster query operations. The negative side of usingALLis that a copy of the table is on every node in the cluster. This takes up too much of space and increases the time taken byCopy commandto upload data into Redshift.

### Choosing the right Distribution Styles

The motive in selecting a table distribution style is to minimize the impact of the redistribution by relocating the data where it was prior to the query execution. Choosing the right KEY is not as straightforward as it may seem. In fact, setting wrong DISTKEY can even worsen the query performance.

Choose columns used in the query that leads to least skewness as the DISTKEY. The good choice is the column with maximum distinct values, such as the timestamp. Avoid columns with few distinct values, such as months of the year, payment card types.- If the table(e.g. fact table) is highly de-normalised and no JOIN is required, choose theEVENstyle.

- Choose ALL style for small tables that do not often change. For example, a table containing telephone ISD codes against the country name.
- It is beneficial to select a KEY distribution if a table is used in JOINS. Also, consider the other joining tables and their distribution style.
- If one particular node contains the skew data, the processing on this node will be slower. This results in much longer total query processing time. This query under skewed configuration may take even longer than the query made against the table without a DISTKEY

https://hevodata.com/blog/redshift-distribution-keys

## Data Distribution

Distribution style is a table property which dictates how that table's data is distributed throughout the cluster

- KEY: value is hashed, same value goes to same location (slice)
- ALL: full table data goes to the first slice of every node
- EVEN: round robin
- AUTO: Combines EVEN and ALL

Goals:

- Distribute data evenly for parallel processing
- Minimize data movement during query processing
Summary
- KEY
    - Goals
        - Optimize JOIN performance between large tables by distributing on columns used in the ON clause
        - Optimize INSERT INTO SELECT performance
        - Optimize GROUP BY performance
    - The column that is being distributed on should have a high cardinality and not cause row skew
- ALL
    - Goals
        - Optimize Join performance with dimension tables
        - Reduces disk usage on small tables
        - Small and medium size dimension tables (< 3M rows)
- EVEN
    - If neither KEY or ALL apply
- AUTO
    - Default Distribution - Combines DISTSTYLE ALL and EVEN

https://docs.aws.amazon.com/redshift/latest/dg/c_best-practices-best-dist-key.html

https://docs.aws.amazon.com/redshift/latest/dg/t_Distributing_data.html
