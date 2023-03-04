# Intro

Apache Hadoop is a processing framework that exclusively provides batch processing. Hadoop was the first big data framework to gain significant traction in the open-source community. Based on several papers and presentations by Google about how they were dealing with tremendous amounts of data at the time, Hadoop reimplemented the algorithms and component stack to make large scale batch processing more accessible.

Modern versions of Hadoop are composed of several components or layers, that work together to process batch data:

- HDFS: HDFS is the distributed filesystem layer that coordinates storage and replication across the cluster nodes. HDFS ensures that data remains available in spite of inevitable host failures. It is used as the source of data, to store intermediate processing results, and to persist the final calculated results.
- YARN: YARN, which stands for Yet Another Resource Negotiator, is the cluster coordinating component of the Hadoop stack. It is responsible for coordinating and managing the underlying resources and scheduling jobs to be run. YARN makes it possible to run much more diverse workloads on a Hadoop cluster than was possible in earlier iterations by acting as an interface to the cluster resources.
- MapReduce: MapReduce is Hadoop's native batch processing engine.

## Batch Processing Model

The processing functionality of Hadoop comes from the MapReduce engine. MapReduce's processing technique follows the map, shuffle, reduce algorithm using key-value pairs. The basic procedure involves:

- Reading the dataset from the HDFS filesystem
- Dividing the dataset into chunks and distributed among the available nodes
- Applying the computation on each node to the subset of data (the intermediate results are written back to HDFS)
- Redistributing the intermediate results to group by key
- "Reducing" the value of each key by summarizing and combining the results calculated by the individual nodes
- Write the calculated final results back to HDFS

## Advantages and Limitations

Because this methodology heavily leverages permanent storage, reading and writing multiple times per task, it tends to be fairly slow. On the other hand, since disk space is typically one of the most abundant server resources, it means that MapReduce can handle enormous datasets. This also means that Hadoop's MapReduce can typically run on less expensive hardware than some alternatives since it does not attempt to store everything in memory. MapReduce has incredible scalability potential and has been used in production on tens of thousands of nodes.

As a target for development, MapReduce is known for having a rather steep learning curve. Other additions to the Hadoop ecosystem can reduce the impact of this to varying degrees, but it can still be a factor in quickly implementing an idea on a Hadoop cluster.

Hadoop has an extensive ecosystem, with the Hadoop cluster itself frequently used as a building block for other software. Many other processing frameworks and engines have Hadoop integrations to utilize HDFS and the YARN resource manager.

## Summary

Apache Hadoop and its MapReduce processing engine offer a well-tested batch processing model that is best suited for handling very large data sets where time is not a significant factor. The low cost of components necessary for a well-functioning Hadoop cluster makes this processing inexpensive and effective for many use cases. Compatibility and integration with other frameworks and engines mean that Hadoop can often serve as the foundation for multiple processing workloads using diverse technology.
