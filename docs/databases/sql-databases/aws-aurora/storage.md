# Storage

[AWS re:Invent 2019: [REPEAT 1] Amazon Aurora storage demystified: How it all works (DAT309-R1)](https://www.youtube.com/watch?v=DrtwAOND1Pc)

[Amazon Aurora storage and reliability - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html)

## Cost

| Storage Rate | $0.11per GB-month           |
|--------------|-------------------------------|
| I/O Rate     | $0.22per 1 million requests |

S3 - $0.025per GB

## Storage

The minimum storage is 10GB. Based on your database usage, your Amazon Aurora storage will automatically grow, up to 64 TB, in 10GB increments with no impact to database performance. There is no need to provision storage in advance

![image](../../../media/AWS-Aurora_Storage-image1.jpg)

![image](../../../media/AWS-Aurora_Storage-image2.jpg)

![image](../../../media/AWS-Aurora_Storage-image3.jpg)

![image](../../../media/AWS-Aurora_Storage-image4.jpg)

## Cloud native database architecture

## Traditional database architecture

- Databases are all about I/O
- Design principles for > 40 years
    - Increase I/O bandwidth
    - Decrease number of I/Os

## Aurora approach: Log is the database

![image](../../../media/AWS-Aurora_Storage-image5.jpg)

## Aurora approach: Offload checkpointing to the storage fleet

![image](../../../media/AWS-Aurora_Storage-image6.jpg)

![image](../../../media/AWS-Aurora_Storage-image7.jpg)

![image](../../../media/AWS-Aurora_Storage-image8.jpg)

![image](../../../media/AWS-Aurora_Storage-image9.jpg)

## Durability at scale

![image](../../../media/AWS-Aurora_Storage-image10.jpg)

![image](../../../media/AWS-Aurora_Storage-image11.jpg)

![image](../../../media/AWS-Aurora_Storage-image12.jpg)

![image](../../../media/AWS-Aurora_Storage-image13.jpg)

## Aurora uses segmented storage

- Partition volume into n fixed-size segments
    - Replicate each segment 6 ways into a protection group (PG)
- Trade-off between likelihood of faults and time to repair
    - If segments are too small, failures are more likely
    - If segments are too big, repairs take too long
- Choose the biggest size that lets us repair "fast enough"
    - We currently picked a segment size of 10 GB, as we repair a 10-GB segment in less than a minute

![image](../../../media/AWS-Aurora_Storage-image14.jpg)

## Performance results

![image](../../../media/AWS-Aurora_Storage-image15.jpg)

![image](../../../media/AWS-Aurora_Storage-image16.jpg)

## Global databases

![image](../../../media/AWS-Aurora_Storage-image17.jpg)

![image](../../../media/AWS-Aurora_Storage-image18.jpg)

![image](../../../media/AWS-Aurora_Storage-image19.jpg)

## Fast database cloning

![image](../../../media/AWS-Aurora_Storage-image20.jpg)

![image](../../../media/AWS-Aurora_Storage-image21.jpg)

## Database backtrack

![image](../../../media/AWS-Aurora_Storage-image22.jpg)
