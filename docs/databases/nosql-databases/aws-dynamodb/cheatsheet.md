# Cheatsheet

## The Basics of DynamoDB

DynamoDB is a fully managed NoSQL key/value and document database.
DynamoDB is suited for workloads with any amount of data that require predictable read and write performance and automatic scaling from large to small and everywhere in between.

DynamoDB scales up and down to support what ever read and write capacity you specify per second in provisioned capacity mode. Or you can set it to On-Demand mode and there is little to no capacity planning.

- DynamoDB stores **3 copies** of data on SSD drives across 3 AZs in a region.
- DynamoDB's most common datatypes areB(Binary),N(Number), andS(String)
- Tables consist ofItems(rows) and Items consist ofAttributes(columns)

## Reads and Writes Consistency

DynamoDB can be set to supportEventually Consistent Reads(default) andStrongly Consistent Reads on a per-call basis.

Eventually consistent reads data is returned immediately but data can be inconsistent. Copies of data will be generally consistent in 1 second.

Strongly Consistent Readswill always read from the leader partition since it always has an up-to-date copy. Data will never be inconsistent but latency may be higher. Copies of data will be consistent with a guarantee of 1 second.

## Partitions

A Partition is when DynamoDB slices your table up into smaller chunks of data. This speeds up reads for very large tables.

DynamoDB automatically creates Partitions for:

- Every 10 GB of Data or
- When you exceed RCUs (3000) or WCUs (1000) limits for a single partition
- When DynamoDB sees a pattern of a hot partition, it will split that partition in an attempt to fix the issue.

DynamoDB will try to evenly split the RCUs and WCUs across Partitions

## Primary Key Design

Primary keys define where and how your data will be stored in partitions

The Key schema can be made up of two keys:

- Partition Key (PK) is also known asHASH
- TheSort Key (SK) is also known asRANGE

When using the AWS DynamoDB API eg. CLI, SDK they refer to the PK and SK by their alternative names due to legacy reasons.

Primary key comes in two types:

- SimplePrimary Key (Using only a Partition Key)
- CompositePrimary Key (Using both a Partition and Sort Key)

Key Uniqueness is as follows:

- When creating a Simple Primary Key the PKvalue may be unique
- When creating a Composite Primary Keythe combined PK and SK must be unique

When using a Sort key, records on the partition are logically grouped together in Ascending order.

## Secondary Indexes

DynamoDB has two types of Indexes:

- LSI- Local Secondary index
- GSI- Global Secondary Index

[How indexes work in Distributed Databases, their trade-offs, and challenges - YouTube](https://www.youtube.com/watch?v=eQ3eNd5WbH8&ab_channel=ArpitBhayani)

## LSI - Local Secondary index

- Supports strongly or eventual consistency reads
- Can only be created with initial table (cannot be modified or and cannot deleted unless also deleting the table)
- Only Composite
- 10GB or less per partition
- Share capacity units with base table
- Must share Partition Key (PK) with base table.

## GSI - Global Secondary Index

- Only eventual consistency reads (cannot provide strong consistency)
- Can create, modify, or delete at anytime
- Simple and Composite
- Can have whatever attributes as Primary Key (PK) or Secondary Key (SK)
- No size restriction per partition
- Has its own capacity settings (does not share with base table)

## Scan

Your table(s) should be designed in such a way that your workload primary access patterns do not use Scans. Overall, scans should be needed sparingly, for example for an infrequent report.

- Scans through all items in a table and then returns one or more items through filters
- By default returns all attributes for every item (use Project Expression to limit)
- Scans are sequential, and you can speed up a scan through parallel scans using Segments and Total Segments
- Scans can be slow, especially with very large tables and can easily consume your provisioned throughput.
- Scans are one of the most expensive ways to access data in DynamoDB.

## Query

- Find items based on primary key values
- Table must have a composite key in order to be able to query
- By default queries are Eventually Consistent (use ConsistentRead True to change Strongly Consistent)
- By default returns all attributes for each item found by a query (useProjectExpression to limit)
- By default is sorted ascending (use ScanIndexForward to False to reverse order to descending)

## DynamoDB Accelerator

DynamoDB Accelerator(DAX) is a fully managed in-memory write through cache for DynamoDB that runs in a cluster

- Reads are eventually consistent
- Incoming requests are evenly distributed across all of the nodes in the cluster.
- DAX can reduce read response times to microseconds

DAX is ideal for:

- fastest response times possible
- apps that read a small number of items more frequently
- apps that are read intensive

DAX is not ideal for:

- Apps that require strongly consistent reads
- Apps that do not require microsecond read response times
- Apps that are write intensive, or that do not perform much read activity
- If you don't need DAX consider using ElastiCache

## DynamoDB Transactions

DynamoDB supports transactions via the TransactWriteItems and TransactGetItemsAPI calls.

Transactions let you query multiple tables at once and are an all-or-nothing approach (all API calls must succeed).

## Global tables

DynamoDB Global tables provide a fully managed solution for deploying multi-region, multi-master databases.

## Streams

DynamoDB Streams allows you to set up a Lambda function triggered every time data is modified in a table to react to changes.Streams do not consume RCUs.

## DynamoDB API

DynamoDB API's most notable commands via CLI

`aws dynamodb < command >`

### aws dynamodb get-item

returns a set of attributes for the item with the given primary key. If no matching item, then it does not return any data and there will be no Item element in the response.

### aws dynamodb put-item

Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item.

### aws dynamodb update-item

Edits an existing item's attributes, or adds a new item to the table if it does not already exist.

### aws dynamodb batch-get-item

returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items.

### aws dynamodb batch-write-item

puts or deletes multiple items in one or more tables. Can write up to 16 MB of data, which can comprise as many as25 put or delete requests. Individual items to be written can beas large as 400 KB.

### aws dynamodb create-table

adds a new table to your account. Table names must be unique within each Region.

### aws dynamodb update-table

Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.

### aws dynamodb delete-table

operation deletes a table and all of its items.

### aws dynamodb transact-get-items

is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. Call can contain up to 25 objects. The aggregate size of the items in the transaction cannot exceed 4 MB.

### aws dynamodb transact-write-items

a synchronous write operation that groups up to25 action requests. These actions can target items in different tables, but not in different AWS accounts or Regions, and no two actions can target the same item.

### aws dynamodb query

finds items based on primary key values. You can query table or secondary index that has a composite primary key.

### aws dynamodb scan

returns one or more items and item attributes by accessing every item in a table or a secondary index.

https://www.freecodecamp.org/news/ultimate-dynamodb-2020-cheatsheet
