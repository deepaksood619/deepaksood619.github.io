# Design

## How do you design a self-healing distributed service?

Any system that is supposed to be capable of healing itself needs to be able to handle faults and partitioning (i.e. when part of the system cannot access the rest of the system) to a certain extent.

For databases, a common way to deal with partition tolerance is to use a quorum for writes. This means that every time something is written, a minimum number of nodes must confirm the write.

The minimum number of nodes necessary to gracefully recover from a single-node fault is three nodes. That way the healthy two nodes can confirm the state of the system.

For cloud applications, it is common to distribute these three nodes across three availability zones.

## Describe a centralized logging solution

Logging solutions are used for monitoring system health. Both events and metrics are generally logged, which may then be processed by alerting systems. Metrics could be storage space, memory, load or any other kind of continuous data that is constantly being monitored. It allows detecting events that diverge from a baseline.

In contrast, event-based logging might cover events such as application exceptions, which are sent to a central location for further processing, analysis, or bug-fixing.

A commonly used open-source logging solution is the Elasticsearch-Kibana-Logstash (ELK) stack. Stacks like this generally consist of three components:

1. A storage component, e.g. Elasticsearch.

2. A log or metric ingestion daemon such as Logstash or Fluentd. It is responsible for ingesting large amounts of data and adding or processing metadata while doing so. For example, it might add geolocation information for IP addresses.

3. A visualization solution such as Kibana to show important visual representations of system state at any given time.

Most cloud solutions either have their own centralized logging solutions that contain one or more of the aforementioned products or tie them into their existing infrastructure. AWS CloudWatch, for example, contains all parts described above and is heavily integrated into every component of AWS, while also allowing parallel exports of data to AWS S3 for cheap long-term storage.

Another popular commercial solution for centralized logging and analysis both on premise and in the cloud is Splunk. Splunk is considered to be very scalable and is also commonly used as **Security Information and Event Management (SIEM)** system and has advanced table and data model support.

## [AWS] How do you setup a Virtual Private Cloud (VPC)?

VPCs on AWS generally consist of a CIDR with multiple subnets. AWS allows one internet gateway (IG) per VPC, which is used to route traffic to and from the internet. The subnet with the IG is considered the public subnet and all others are considered private.

The components needed to create a VPC on AWS are described below:

- The creation of an empty VPC resource with an associated CIDR.
- Apublicsubnet in which components will be accessible from the internet. This subnet requiresan associated IG.
- Aprivatesubnet that can access the internet through aNAT gateway. The NAT gateway is positioned inside the public subnet.
- A route table for each subnet.
- Two routes: One routing traffic through the IG and one routing through the NAT gateway, assigned to their respective route tables.
- The route tables are then associated to their respective subnets.
- A security group then controls which inbound and outbound traffic is allowed.

This methodology is conceptually similar to physical infrastructure.

## References

<https://www.toptal.com/devops/interview-questions>
