# Capacity Modes

DynamoDB has two capacity modes, Provisioned and On-Demand. You can switch between these modes once every 24 hours.

### Provisioned

Provisioned Throughput Capacity is the maximum amount of capacity your application is allowed to read or write per second from a table or index

- Provisioned is suited for predictable or steady state workloads
- RCUs is Read Capacity Unit
- WCUsis Write Capacity Unit

You should enable Auto Scaling with Provisioned capacity mode. In this mode, you set a floor and ceiling for the capacity you wish the table to support. DynamoDB will automatically add and remove capacity to between these values on your behalf and throttle calls that go above the ceiling for too long.

If you go beyond your provisioned capacity, you'll get an Exception: `ProvisionedThroughputExceededException(throttling)`

Throttling is when requests are blocked due to read or write frequency higher than set thresholds. E.g. exceeding set provisioned capacity, partitions splitting, table/index capacity mismatch.

### On-Demand

On-Demand Capacity is pay per request. So you pay only for what you use.

- On-Demand is suited for new or unpredictable workloads
- The throughput is only limited by the default upper limits for a table (40K RCUs and 40K WCUs)
- Throttling can occurif you exceed double your previous peak capacity (high water mark) within 30 minutes. For example, if you previously peaked to a maximum of 30,000 ops/sec, you could not peak immediately to 90,000 ops/sec, but you could to 60,000 ops/sec.
- Since there is no hard limit,On-Demand could become very expensivebased on emerging scenarios

## Calculating Reads and Writes

### Calculating Reads (RCU)

A read capacity unitrepresents:

- one strongly consistent read per second,
- or two eventually consistent reads per second,
- for an item up to 4 KB in size.

How to calculate RCUs for strong

- Round data up to nearest 4.
- Divide data by 4
- Times by number of reads

Here's an example:

- 50 reads at 40KB per item. (40/4) x 50 = 500 RCUs
- 10 reads at 6KB per item. (8/4) x 10 = 20 RCUs
- 33 reads at 17KB per item. (20/4) x 33 = 132 RCUs

How to calculate RCUs for eventual

- Round data up to nearest 4.
- Divide data by 4
- Times by number of reads
- Divide final number by 2
- Round up to the nearest whole number

Here's an example:

- 50 reads at 40KB per item. (40/4) x 50 / 2 = 250 RCUs
- 11 reads at 9KB per item. (12/4) x 11 / 2 = 17 RCUs
- 14 reads at 24KB per item. (24/4) x 14 / 2 = 35 RCUs

### Calculating Writes (Writes)

A write capacity unit represents:

- one write per second,
- for an item up to 1 KB

How to calculate Writes

- Round data up to nearest 1.
- Times by number of writes

Here's an example:

- 50 writes at 40KB per item. 40 x 50 = 2000 WCUs
- 11 writes at 1KB per item. 1 x 11 = 11 WCUs
- 18 writes at 500 BYTES per item. 1 x 18 = 18 WCUs

## Links

[Considerations when changing read/write Capacity Mode - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/switching.capacitymode.html)

[Amazon DynamoDB auto scaling: Performance and cost optimization at any scale | AWS Database Blog](https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/)
