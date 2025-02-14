# High Availability

The concept of high availability originated in the 1960s and 1970s with early military and financial computing systems that needed to be reliable and fault tolerant.

In the Internet age, there has been an explosion of digital applications for e-commerce, payments, delivery, finance, and more. Positive user experiences are crucial for business success. This escalated the need for systems with nearly 100% uptime to avoid losing thousands of users for even brief periods. For example, during a promotional flash sale event, just one minute of downtime could lead to complete failure and reputation damage.

The goal of high availability is to ensure a system or service is available and functional for as close to 100% of the time as possible. While the terms high availability and uptime are sometimes used interchangeably, high availability encompasses more than just uptime measurements.

## How do We Measure High Availability?

Two key concepts are relevant for calculating availability: Mean Time Between Failures (MTBF), and Mean Time To Repair (MTTR).

### MTBF and MTTR

MTBF measures system reliability by totaling a system’s operational time and dividing it by the number of failures over that period. It is typically expressed in hours. A higher MTBF indicates better reliability.

MTTR is the average time required to repair a failed component or system and return it to an operational state. It includes diagnosis time, spare part retrieval, actual repair, testing, and confirmation of operation. MTTR is also typically measured in hours.

As shown in the diagram below, there are two additional related metrics - MTTD (Mean Time To Diagnose) and MTTF (Mean Time To Failure). MTTR can loosely include diagnosis time.

![image](https://ci3.googleusercontent.com/meips/ADKq_NYBmtWg8ZtWVqu2kMjCbPhbviWVW_qvyt1t2BHF8Gro1sg-maRy5oTc5n2U2Xapq5UNIpO6gtyZAo1f6Hk9blORHhKg0Bt3HNq17Ng1Dleg7G1HGDQldRfN66H8XEgjqbWSUd_T9oRaXFwpR3tN5Oi6bV4sh_7D9khHq4LtmkmHvkzanHDfEH0BfY2z8NvjcPscxftmlw6RHX6Lu1OeSG_XOVN-XWGuBuGaxEOT-yCnxR1avZgrJZRnEmt5SchP0wFYJ1IMjKAk-jvOaadK17Q2TZg8KQFmjg51Cyhvr8AIQhBfXMf5b7dTHw=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_1428,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F87444a13-e153-4bdd-afce-b480eafb91a3_1600x834.png)

### The Nines

Together, MTBF and MTTR are critical for calculating system availability. Availability is the ratio of total operational time to the sum of operational time and repair time. Using formulas:

Availability = MTBF + MTTR

For high-availability systems, the goal is to maximize MTBF (less frequent failures) and minimize MTTR (fast recovery from failures). These metrics help teams make informed decisions to improve system reliability and availability.

As shown in the diagram below, calculated availability is often discussed in terms of "nines". Achieving "3 nines" availability allows only 1.44 minutes of downtime per day - challenging for manual troubleshooting. "4 nines" allows only 8.6 seconds of downtime daily, requiring automatic monitoring, alerts, and troubleshooting. This adds requirements like automatic failure detection and rollback planning in system designs.

![image](https://ci3.googleusercontent.com/meips/ADKq_NakHbrmtUvvMKeXuADDa2P7T8x_FcqW5z4GKSixy7nAf7Q8PoCWqODzXw8YDAMBMkuqYZWBzbhKNCAC2RDHbEIVl71pSIp6DXKHWeu2fpXR89qjdLQerWT9IbjVg5nUoWi478Of_Wk8JB7co6bGnKuSRObDhtke2YNDjX1G6hVxyW09N9msn4wBC3uuY1tK-1P7iWzxlQXDP8oI1lLgPwjKPMYfX2PzedThJVkJ-pDZRlvqpumopRJw-ogzjQml0Lzj-Ys9Wd_Ij_Sl6Rz-t04wTHScfL-Qf7SPcwZMWQhivdAxmCqNpQ4LXA=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_1424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63d5256e-b7c0-4b70-b966-d882e6b776d3_1600x959.png)

## Typical Architectures

To achieve "4 nines" availability and beyond, we must consider:

1. System designs - designing for failure using:
    1. Redundancy
    2. Tradeoffs
2. System operations and maintenance - key principles are:
    1. Change management
    2. Capacity management
    3. Automated detection and troubleshooting

### Redundancy

There is only so much we can do to optimize a single instance to be fault-tolerant. High availability is often achieved by adding redundancies. When one instance fails, others take over.

For stateful instances like storage, we also need data replication strategies.

Let's explore common architectures with different forms of redundancy and their tradeoffs.

#### Hot-Cold

In the hot-cold architecture, there is a primary instance that handles all reads and writes from clients, as well as a backup instance. Clients interact only with the primary instance and are unaware of the backup. The primary instance continuously synchronizes data to the backup instance. If the primary fails, manual intervention is required to switch clients over to the backup instance.

![image](https://ci3.googleusercontent.com/meips/ADKq_NYV2h64KcPS3d10YqgVWm8wo5BjHwwC_OCjL98smuz_wmILjWM8BPmUeTvqHfMH4JTqZzBX0xjLdZuB5faBySgSg_2fQP2FK7T9ZftCedTaHE6JLqJCzgX-zLtx3q5LCb9m5M_2KFYlhIooTjUk7Z4QUlNAMp8-2EgvEsweOjkZuSpsg20IsBmAM-TekBFCHbu9XYi1WQuXH2X_3D6OJz6IqI3I6MKSyu_5Su_BLa_9G9n7JVF3wnxR01TFmb2FrlYrJ2qRiSOskKfs0XDr2uPgLustBLxrfjDA5YYARiM-sWimJ-lVbS5Dmg=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_1440,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7f92181a-d1c4-4195-a8d8-dffecb0b6181_1529x945.png)

This architecture is straightforward but has some downsides. The backup instance represents waste resources since it is idle most of the time. Additionally, if the primary fails, there is potential for data loss depending on the last synchronization time. When recovering from the backup, manual reconciliation of the current state is required to determine what data may be missing. This means clients need to tolerate potential data loss and resend missing information.

#### Hot-Warm

The hot-cold architecture wastes resources since the backup instance is under-utilized. The hot-warm architecture optimizes this by allowing clients to read from the secondary/backup instance. If the primary fails, clients can still read from the secondary with reduced capacity.

![image](https://ci3.googleusercontent.com/meips/ADKq_Na6g7CnbSjsLwN95cXullTEW2nLkAbBddXpQG1i9Ke3DMpCvfdssUmrxz5YGMwX1OyOQvm02Gj8deoHB4RwsvJaEbnJZisWsGbxq4LL7JAHYIboW9GEpp2ldRB2tyAmtiE4cDW8qD36O2BDjTwiRzAVX8Wa5_fOQQ5sxmcSab3Zvq_xK1PXK88UtwkWHw459osf87DKTOGCgCteM-raT-aaFITy3j0C07ZuKRU9BSv_zfEsRXSnBm7N11TcA8OvrgOkDq0Y_UstjNXQUZ4dk-e6zIHnqLiV2S9J655yaCyOQwYI7rQTKNlcwA=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_1424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4faf5366-8b4b-4f00-8c38-b8a1f1fe2091_1529x945.png)

Since reads are allowed from the secondary, data consistency between the primary and secondary becomes crucial. Even if the primary instance is functioning normally, stale data could be returned from reads since requests go to both instances.

Compared with hot-cold, the hot-warm architecture is more suitable for read-heavy workloads like news sites and blogs. The tradeoff is potential stale reads even during normal operation in order to utilize resources more efficiently.

#### Hot-Hot

In the hot-hot architecture, both instances act as primaries and can handle reads and writes. This provides flexibility, but it also means writes can occur to both instances, requiring bidirectional state replication. This can lead to data conflicts if certain data needs sequential ordering.

For example, if user IDs are assigned from a sequence, user Bob may end up with ID 10 on instance A while user Alice gets assigned the same ID from instance B. The hot-hot architecture works best when replication needs are minimal, usually involving temporary data like user sessions and activities. Use caution with data requiring strong consistency guarantees.

![image](https://ci3.googleusercontent.com/meips/ADKq_NYh-4wSTCsqeWqfvUMargFUXCVIDhvbOiytAUMldswvwduwGQwNbQZ0BA5Fx1rVad5iEn-ewSLDJ49W_ropDxi10Ov9UcikfOuVSJ6VD-O1hdOa1zzkctSDyhCRv8txPzoVxrZPAfFU4Fo_iBZV3AcFkgLEKnYa7G4wZS-bl8d_53YOX3lFvxS3a-BH6zJG-NGbX4q4hKfkThTz0zNVknuSCp-v23-mLn8-HUnedTTQ6WaA7CY6D7xmFO3VRo7G58l2uf3LEpjSs9eN0H9TIxwSzXkrF_NwkDHa16z4rAMnOOrRk9N8v95HEQ=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_1432,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb712fd8a-96ae-4dc3-88aa-598fafb49f7c_1529x945.png)

[How do We Design for High Availability?](https://blog.bytebytego.com/p/how-do-we-design-for-high-availability)
