# Cheatsheet

## The Basics of DynamoDB

DynamoDBis a fully managed NoSQL key/value and document database.
DynamoDB is suited for workloads with any amount of data thatrequire predictable read and write performanceand automatic scaling from large to small and everywhere in between.
DynamoDB scales up and down to support whateverread and write capacity you specifyper second in provisioned capacity mode. Or you can set it to On-Demand mode and there is little to no capacity planning.

- DynamoDB stores**3 copies** of dataon SSD drivesacross 3 AZsin a region.
- DynamoDB's most common datatypes areB(Binary),N(Number), andS(String)
- Tables consist ofItems(rows) and Items consist ofAttributes(columns)

## Reads and Writes Consistency

DynamoDB can be set to supportEventually Consistent Reads(default) andStrongly Consistent Readson a per-call basis.
Eventually consistent readsdata is returned immediately but data can be inconsistent. Copies of data will be generally consistent in 1 second.
Strongly Consistent Readswill always read from the leader partition since it always has an up-to-date copy. Data will never be inconsistent but latency may be higher. Copies of data will be consistent with a guarantee of 1 second.

## Partitions

APartitionis when DynamoDB slices your table up into smaller chunks of data. This speeds up reads for very large tables.
DynamoDB automatically creates Partitions for:

- Every 10 GB of Data or
- When you exceed RCUs (3000) or WCUs (1000) limits for a single partition
- When DynamoDB sees a pattern of a hot partition, it will split that partition in an attempt to fix the issue.
DynamoDB will try toevenly splitthe RCUs and WCUs across Partitions

## Primary Key Design

Primary keys definewhere and howyour data will be stored in partitions
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

## LSI - Local Secondary index

- Supportsstronglyor eventual consistency reads
- Can only be created with initial table (cannot be modified or and cannot deleted unless also deleting the table)
- Only Composite
- 10GB or less per partition
- Share capacity units with base table
- Must share Partition Key (PK) with base table.

## GSI - Global Secondary Index

- Only eventual consistencyreads (cannot provide strong consistency)
- Can create, modify, or delete at anytime
- Simple and Composite
- Can have whatever attributes as Primary Key (PK) or Secondary Key (SK)
- No size restriction per partition
- Has its own capacity settings (does not share with base table)

## Scan

Your table(s) should be designed in such a way that your workload primary access patterns do not use Scans. Overall, scans should be needed sparingly, for example for an infrequent report.

- Scans through all items in a table and then returns one or more items through filters
- By default returns all attributes for every item (useProjectExpressionto limit)
- Scans are sequential, and you can speed up a scan through parallel scans usingSegmentsandTotal Segments
- Scans can be slow, especially with very large tables and can easily consume your provisioned throughput.
- Scans are one of the most expensive ways to access data in DynamoDB.

## Query

- Find items based on primary key values
- Table must have a composite key in order to be able to query
- By default queries are Eventually Consistent (useConsistentRead Trueto change Strongly Consistent)
- By default returns all attributes for each item found by a query (useProjectExpressionto limit)
- By default is sorted ascending (useScanIndexForwardto False to reverse order to descending)

## Capacity Modes

DynamoDB has two capacity modes,ProvisionedandOn-Demand. You can switch between these modesonce every 24 hours.

## Provisioned

Provisioned Throughput Capacityis the maximum amount of capacity your application is allowedto read or write per secondfrom a table or index

- Provisionedis suited for predictable or steady state workloads
- RCUsis Read Capacity Unit
- WCUsis Write Capacity Unit
You should enable Auto Scaling with Provisionedcapacity mode. In this mode, you set a floor and ceiling for the capacity you wish the table to support. DynamoDB will automatically add and remove capacity to between these values on your behalf and throttle calls that go above the ceiling for too long.
If you go beyond your provisioned capacity, you'll get an Exception: ProvisionedThroughputExceededException(throttling)
Throttlingis whenrequests are blockeddue to read or write frequency higher than set thresholds. E.g. exceeding set provisioned capacity, partitions splitting, table/index capacity mismatch.

## On-Demand

On-Demand Capacityis pay per request. So you pay only for what you use.

- On-Demand is suited forneworunpredictableworkloads
- The throughput is only limited by the default upper limits for a table (40K RCUs and 40K WCUs)
- Throttling can occurif you exceed double your previous peak capacity (high water mark) within 30 minutes. For example, if you previously peaked to a maximum of 30,000 ops/sec, you could not peak immediately to 90,000 ops/sec, but you could to 60,000 ops/sec.
- Since there is no hard limit,On-Demand could become very expensivebased on emerging scenarios

## Calculating Reads and Writes

## Calculating Reads (RCU)

A read capacity unitrepresents:

- one strongly consistent read per second,
- or two eventually consistent reads per second,
- for an item up to 4 KB in size.

How to calculate RCUs forstrong

- Round data up to nearest 4.

- Divide data by 4

- Times by number of reads

Here's an example:

- 50 reads at 40KB per item. (40/4) x 50 = 500 RCUs
- 10 reads at 6KB per item. (8/4) x 10 = 20 RCUs
- 33 reads at 17KB per item. (20/4) x 33 = 132 RCUs

How to calculate RCUs foreventual

- Round data up to nearest 4.

- Divide data by 4

- Times by number of reads

- Divide final number by 2

- Round up to the nearest whole number

Here's an example:

- 50 reads at 40KB per item. (40/4) x 50 / 2 = 250 RCUs
- 11 reads at 9KB per item. (12/4) x 11 / 2 = 17 RCUs
- 14 reads at 24KB per item. (24/4) x 14 / 2 = 35 RCUs

## Calculating Writes (Writes)

A write capacity unitrepresents:

- one write per second,
- for an item up to 1 KB

How to calculateWrites

- Round data up to nearest 1.

- Times by number of writes

Here's an example:

- 50 writes at 40KB per item. 40 x 50 = 2000 WCUs
- 11 writes at 1KB per item. 1 x 11 = 11 WCUs
- 18 writes at 500 BYTES per item. 1 x 18 = 18 WCUs

## DynamoDB Accelerator

DynamoDB Accelerator(DAX)is afully managed in-memory write through cachefor DynamoDB that runs in a cluster

- Reads are eventually consistent
- Incoming requests are evenly distributed across all of the nodes in the cluster.
- DAX can reduce read response times tomicroseconds
DAX is ideal for:
- fastest response times possible
- apps that read a small number of items more frequently
- apps that areread intensive
DAX is not ideal for:
- Apps that require strongly consistent reads
- Apps that do not require microsecond read response times
- Apps that arewrite intensive, or that do not perform much read activity
- If you don't need DAXconsider using ElastiCache

## DynamoDB Transactions

DynamoDB supports transactions via theTransactWriteItemsandTransactGetItemsAPI calls.

Transactionslet you query multiple tables at once and are an all-or-nothing approach (all API calls must succeed).

## Global tables

DynamoDB Global tables provide a fully managed solution for deployingmulti-region, multi-master databases.

## Streams

DynamoDB Streamsallows you to set up a Lambda function triggered every time data is modified in a table to react to changes.Streams do not consume RCUs.

## DynamoDB API

DynamoDB API's most notable commands via CLI: aws dynamodb < command >
aws dynamodbget-itemreturns a set of attributes for the item with the given primary key. If no matching item, then it does not return any data and there will be no Item element in the response.

aws dynamodbput-itemCreates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item.
aws dynamodbupdate-itemEdits an existing item's attributes, or adds a new item to the table if it does not already exist.
aws dynamodbbatch-get-itemreturns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to16 MB of data, which can contain as many as100 items.
aws dynamodbbatch-write-itemputs or deletes multiple items in one or more tables. Can write up to16 MB of data, which can comprise as many as25 put or delete requests. Individual items to be written can beas large as 400 KB.
aws dynamodbcreate-tableadds a new table to your account. Table names must be unique within each Region.
aws dynamodbupdate-tableModifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.
aws dynamodbdelete-tableoperation deletes a table and all of its items.
aws dynamodbtransact-get-itemsis a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. Call can contain up to25 objects. The aggregate size of the items in the transactioncannot exceed 4 MB.
aws dynamodbtransact-write-itemsa synchronous write operation that groups up to25 action requests. These actions can target items in different tables, but not in different AWS accounts or Regions, and no two actions can target the same item.
aws dynamodbqueryfinds items based on primary key values. You can query table or secondary index that has a composite primary key.
aws dynamodbscanreturns one or more items and item attributes by accessing every item in a table or a secondary index.
<https://www.freecodecamp.org/news/ultimate-dynamodb-2020-cheatsheet>
