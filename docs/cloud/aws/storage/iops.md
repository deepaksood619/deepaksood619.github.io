# IOPS

[What You Need to Know About IOPS](https://cloudcasts.io/article/what-you-need-to-know-about-iops)

**IOPS are Input / Output Operations per Second.**

- Each operation is a read/write to/from a disk volume
- Each operation can vary in the amount of data being read/written.

How are IOPS calculated? Buckle up.

### Sneaky Thing #1: Calculating IOPS

> TL;DR: If an I/O operation is > `256 KiB`, the operation is split into multiple operations.

In AWS, each operation is capped at `256 KiB` of data. Operations over `256 KiB` are split into multiple operations.

This means that if you perform an operation of `1024 KiB`, that's 4 IOPS (`1024/256 = 4`).

### IOPS Limits

> TL;DR: You can hit your IOPS limits more quickly if each operation is large (> than `256 KiB`).

I won't call this one sneaky, as IOPS limits are what every article on the internet talks about (and what AWS documentation seems to concentrate on).

Your workloads may do a lot of operations, or they may do large operations.

If a workload is doing many operations, it may hit a volume's cap of IOPS.

Additionally, _larger_ operations may increase the IOPS count, making you reach IOPS limits more quickly.

### Sneaky Thing #2: Throughput Limits

> TL;DR: You can easily hit throughput limits before IOPS limits.

This is where IOPS get a bit more interesting.

**It's possible, perhaps even likely, to hit a volume's throughput limits before hitting IOPS limits**.

In other words, you may not reach the IOPS your disk is capable of providing because you're reading/writing too much data at once.

**Here's an example:** If your operations are `256 KiB` in size, and the volume's max throughput is `250 MiB/s`, then the volume can only reach 1000 IOPS.

This is because `1000 * 256 KiB = 250 MiB`. In other words, 1000 IOPS of `256 KiB` sized read/write operations is hitting the throughput limit of `250 MiB/s`.

> Where did I get those numbers for this example? Somewhat arbitrarily:
>
> `256 KiB` is the cap before an operation is split into multiple IOPS.
>
> `250 MiB/s` is a gp2's volume max throughput

The actual throughput limit varies by disk type (gp2 vs gp3) and their throughput settings. Max throughput it hit 334 GB storage on gp2.

- GP2 throughput is [calculated by this math](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#GP2Throughput).
    - You increase your gp2 throughput by provisioning more storage
- GP3 throughput is set explicity (you pay extra if you configure anything over `125 MB/s`)
    - You can explicitly increase a gp3 volume's throughput

> For added fun, EC2 instances have their own throughput limitations that you may hit as well. It seems like this is less likely on newer instance types, but keep an eye on your instance network I/O charts.

### Sneaky Thing #3: Volume Queue

It's possible to have _pending_ I/O operations on a device ("device", meaning a disk drive).

Higher values are bad - it means the volume isn't keeping up with the IOPS being requested.

There's a CloudWatch metric named `VolumeQueueLength` (or just Queue Length in the web UI) that describes this. **More details on that below.**

## GP2 vs GP3 EBS

Let's take a quick break on "sneaky" things to talk about the most common volume types - gp2 or gp3.

GP3 exists (and you should use them), but gp2 volume types are still the default when creating an EC2 instance, and are all you can get for RDS databases.

Here's what to know about them.

### GP2 Volumes

**GP2** volumes scale IOPS with the size of the drive. [You get 3 IOPS for every GB of storage](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_gp2). You get a minimum of 100 IOPS for disks below 33.33333 GB.

Your throughput scales up with storage aslso. As noted [calculating gp2 throughput](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#GP2Throughput) is annoying. GP2 throughput caps out at `250 MiB/s`.

### Sneaky Thing #4: GP2 & Burstable IOPS

GP2 volumes of less than 1000 GB can burst up to 3000 IOPS. These use a credit system. Once you run out of burst credits the volume is reduced to its baseline amount of IOPS.

Burst credits increase over time while the IOPS count is under the volume's baseline IOPS.

After 1000 GB in storage size, you're given 3000 IOPS (because math: 3 IOPS per GB at 1000 GB is 3000 IOPS) and there's no longer any bursting available to the volume.

**The only aspect of gp2 volumes you directly control is the amount of storage (in Gigabytes) in a volume.**

For the longest time, AWS was happy to allow you to work through IOPS and throughput limitations by buying more storage than you needed.

### GP3 Volumes

**GP3** volumes are the newer type. They're cheaper (at their baseline) than GP2, and provide _consistent_ performance. No bursting.

**GP3 should be your go-to volume type.**

These volumes start at 3000 IOPS and 125 MB/s throughput (extremely reasonable vs gp2, where you probably have something like 100 IOPS and less throughput).

You can size IOPS and throughput independently ([for a fee](https://aws.amazon.com/ebs/general-purpose/)).

> Migrating from gp2 to gp3 is very easy - essentially just a API call or a few clicks in the console. However there may be a speed penality while AWS "optimizes" the EBS drive after changing to gp3.

Being able to size gp3 drives in this way gives you the ability to be cost effective in sizing your volumes. For example, you create create a 30 GB volume but bump up the throughput much higher.

Using gp3 can be more [price-efficient than purchasing provisioned IOPS drives such as io2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html).

## Is my EBS Volume a Bottleneck?

OK, so how do you know if your EBS volumes are a bottleneck?

You need to watch certain metrics in CloudWatch. Here are the important ones.

### Volume Metrics

The following metrics are associated with EBS volumes within CloudWatch, not to EC2 instances.

#### `BurstBalance`

This metric is a percentage, applying to gp2 volumes (and a few others that have bursting).

GP2 volumes can burst up to 3000 IOPS.

As a volume bursts beyond its base IOPS, the burst balance decreases. Reaching 0% of its burst balance means the volume will be capped at it's baseline IOPS - as low as 100.

GP3 volumes don't have any bursting, so those will not have a `BurstBalance` metric.

#### `VolumeQueueLength`

This measures the number of operations "pending" - waiting to be processed by the EBS volume. A higher (or growing) number is bad.

If your queue length is high, it means your workload is doing more operations than the volume can handle. This is indicitive of some combination of too many operations and/or too much data throughput.

**What is a high queue length?** AWS doesn't have a great answer - basically saying ["it depends!"](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html#ebs-io-volume-queue).

I happen to manage some overly-provisioned volumes, and can look at mine to serve as a baseline for what you see (your mileage may vary).

What I see is that lighter workloads are well below a value of 1, something like `0.00008`.

For heavy workloads, this number is usually below 2 with occasional spikes, all below a value of 10.

#### `Volume[Read/Write][Bytes/Ops]`

This set of metrics tells you how many bytes are being read/written, and how many operations are happening.

Higher values aren't necessarily bad, although certainly something to watch for (especially relative to your baseline usage).

Things to look for here are spikes that never seem to go above a certain threshold, indicating they've reached a maximum (either max operations per second, or max bytes it can read/write before hitting the throughput limit).

### Instance Metrics

The following metrics are associated with EC2 instances within CloudWatch, not to volumes.

Nitro/EBS Optimized EC2 instances have some (somewhat mysterious) metrics associated with them.

The following metrics are found in CloudWatch related to EC2 instances, but they don't appear in the Monitoring tab for a given instance in the EC2 web console.

1. `EBSByteBalance%`
2. `EBSIOBalance%`
3. `EBS[Read/Write]Bytes`
4. `EBS[Read/Write]Ops`

The explanation for these appear to speak to a "burst bucket" that's related to the EC2 instance itself, and not indivisual volumes. However I, for the life of me, cannot find concrete information on what these metrics are measuring.

Here's what I can find information about them:

1. [This AWS blog post from 2018](https://aws.amazon.com/blogs/compute/improving-application-performance-and-reducing-costs-with-amazon-ebs-optimized-instance-burst-capability/)
2. [CloudWatch Metrics for EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html#ebs-metrics-nitro)
3. [This page on EBS-Optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html#ebs-optimization-performance)

Despite me going crazy not being able to find out what these metrics are really measuring, the last link has a useful explanation of these metrics and how to use them:

> You can use the `EBSIOBalance%` and `EBSByteBalance%` metrics to help you determine whether your instances are sized correctly. [...] These metrics are expressed as a percentage. **Instances with a consistently low balance percentage are candidates to size up. Instances where the balance percentage never drops below 100% are candidates for downsizing.**

## RDS Instance Storage & Metrics

RDS-related CloudWatch metrics don't separate the EBS volumes from the database instance itself.

RDS metrics of note (for non-Aurora databases) include similar ones to what we saw above:

1. Burst Balance (depending on volume size, as gp2 volumes at 1000 GB already have 3000 IOPS)
2. Queue Depth
3. Read/Write Throughput
4. Read/Write/Total IOPS

### Sneaky Thing #5: RDS Instance Storage

**As of this writing, RDS doesn't support using GP3**. This means you'll need to provision more storage to increase your IOPS and throughput.

> You can also use io2 volumes - these are a "provisioned IOPS" type of volume, where you pay for a certain number of IOPS. This is typically more expensive than just adding more gp2 storage, but do the math yourself to see for your case.

One _extremely_ popular "trick" (if lighting money on fire is a trick) is to scale an RDS's gp2 volume up to 5,334 GB.

This not only removes any bursting (remember, bursting goes away at 1,000 GB of gp2 storage), but also reaches the max gp2 IOPS of 16,000. Max throughput it hit 334 GB storage on gp2.

You can see a table of storage size vs IOPS and burst duration (how long a sustained burst will last) in the [table here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_gp2), just below the graph.

**Scaling RDS storage is one-way.** Once you scale-up, you can't scale down (without creating a new RDS instance and migrating data over).

If you're looking to remove EBS bottlenecks in your RDS instance, you may find that giving your database 1000 GB is sufficient as a starting point.

At a price of `$0.115` per GB (us-east-1 and us-east-2), getting 1,000 GB of storage is a monthly cost of `$115.00` for single-az and `$230.00` for multi-az.

At a price of `$0.115` per GB (us-east-1 and us-east-2), getting 5,334 GB of storage is a monthly cost of `$613.41` for single-az and `$1226.82` for multi-az.

> Don't feel bad if that price point seems shockingly high. I was surprised to find that many companies wouldn't bat an eye at this added expense and had to recalibrate my ideas of how much money is thrown at AWS.

### Aurora EBS Performance

Aurora is a special case. When creating an Aurora database, you'll notice that you don't really get any data volume configuration.

What kind of performance can you expect? The only clue I found was [at the very end of this blog article](https://aws.amazon.com/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/).

It seems to suggest that your limitation is in the available throughput given to the underlying instance size, rather than any EBS volume limitation:

> If your workload requires higher IOPS performance and higher throughput, you may plan to migrate to Aurora, which is a high-performance, highly available and cost-effective solution suitable for high throughput workloads...
>
> While using Aurora, make sure that there is technically no limit of IOPS but throughput could be limited to the underlying Aurora instance limit. For better throughput, go for a higher Aurora instance class.

(I'm pretty sure that's meant to be read as "there is technically no limit in IOPS", rather than a directive for us, Aurora users, to make sure there are no IOPS limits via available configuration options).

## Sneaky Thing #6: Using Snapshots

One thing to note is that when creating EBS drives from a snapshot, [you don't get that drives maximum performance right away](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSPerformance.html#initialize).

There are steps you can do to get around this, if needed. AWS calls the process "initialization". You can read about it in the link above, or use the [Fast Restore](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html) feature - be sure to read about its limits.

**More interesting (and slightly hidden) is that this also applies to RDS databases that were restored from a snapshot.**
