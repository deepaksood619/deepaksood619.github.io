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

## Target Utilization

DynamoDB Autoscaling will then vary the provisioned throughput between the maximum and mimumum bounds set. It will aim to keep this throughput provision at the utilization capacity.

> Target utilization is the ratio of consumed capacity units to provisioned capacity units, expressed as a percentage

A good starting point is to ask why not set target utilization to 100%? This sounds efficient, because you will only be paying for the throughput you use. But there is a problem to this:

> DynamoDB auto scaling modifies provisioned throughput settings only when the actual workload stays elevated (or depressed) for a sustained period of several minutes

So, imagine your target utilization is 100% and you have increased demand on your table for 15 minutes. For the first 5 minutes you might be saved by [burst capacity](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html#bp-partition-key-throughput-bursting), in the second lot of 5 minutes you are likely to see database read/write failures as your throughput is exceeded, and then after around 10 minutes Autoscaling should kick in and increase your throughput.

This is the problem you are trying to avoid by setting target utilization (i.e. an increase in demand causing throttling). You need to consider two things

**1) What is the biggest change in throughput capacity usage you see over a time period of 15 minutes expressed as a percentage? Leave this amount of room in your target utilization.**

**2) How much do you care if you have some database throttling? (i.e. some database read/writes fail?) Adjust your target utilization higher or lower depending on your appetite for cost saving versus throttling.**

Lets say you look over one week of data, and find that in a 15 minute period, the largest increase in throughput you see is 20%. That gives you a target utilization of 80% (because then your increased demand is absorbed by autoscaling)*. However lets say you are cautious and you really aren't OK with database throttling, so to be on the safe side, you might go with 70%.

Hope that helps make some decisions. In summary, **your target utilization should be a function of how quickly your throughput capacity changes, and how averse you are to throttling.**

EDIT:*The maths isn't perfect here, but you get the idea I think. And its probably a close enough approximation.

[amazon web services - How to calculate Target Utilization in DynamoDB table? - Stack Overflow](https://stackoverflow.com/questions/50014572/how-to-calculate-target-utilization-in-dynamodb-table)

## Links

[Considerations when changing read/write Capacity Mode - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/switching.capacitymode.html)

[Amazon DynamoDB auto scaling: Performance and cost optimization at any scale | AWS Database Blog](https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/)
