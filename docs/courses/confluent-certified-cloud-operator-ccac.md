# Confluent Certified Cloud Operator (CCAC)

- **60 multiple choice** questions in **90 minutes​**
- The Certification expires after **two years**

## Product Knowledge

Understanding of:

- Confluent Cloud core concepts, including clusters, client applications, connectors, Stream Governance, and stream processing
- Basic Kafka concepts, Kafka Connect and Operations
- Confluent Cloud security features/offerings
- Cloud architecture, networking and computing
- Monitoring and alerting

| Certification Outline               | Break Down by % |
| ----------------------------------- | --------------- |
| Confluent Cloud Core Concepts       | 17%             |
| Kafka Operations                    | 17%             |
| Confluent Cloud Static Operations   | 14%             |
| Confluent Cloud Dynamic Operations  | 16%             |
| Confluent Cloud Streaming Pipelines | 11%             |
| Confluent Cloud Data Governance     | 13%             |
| Confluent Cloud Resilience          | 11%             |
|                                     | 100%            |

- Cluster types - Basic, Standard, Enterprise and dedicated Confluent Cloud cluster setup.
- Understand accounts, API Keys and authorization for Confluent Cloud.
- Configure Managed connectors
- OIDC provider to authenticate services
- Understanding Audit Logs and Metrics
- Audit logs via cluster linking
- Cluster and schema linking
- Confluent Terraform provider for Infrastructure as Code
- Private Networking
- Schema Governance
- Authentication and Authorization
- Managed Connectors
- Audit logs and metrics

## Concepts

1. **Confluent Cloud Core Concepts**
	1. Differentiate between billable and non-billable cost factors within Confluent Cloud
	2. Differentiate between cluster types including features and limitations
	3. Describe the relationship between different Confluent Cloud resources
	4. List the components and resources that require public networking
	5. Compare responsibilities of the Confluent Cloud role with the self-managed OSK role
2. **Kafka Operations**
	1. Match Kafka keywords to their functions in the Kafka ecosystem
	2. Classify which cluster configurations are and are not exposed in Confluent Cloud
	3. Classify which topic configurations are and are not exposed in Confluent Cloud
	4. Describe the required elements needed to connect to a cluster
	5. Define the key configuration properties associated with topic creation
	6. Understand how to change topic configurations throughout the topic lifecycle
3. **Confluent Cloud Static Operations**
	1. Identify available networking options to provision a cluster
	2. List the different ways to provide access to all UI features with private networking
	3. Describe the options when provisioning a cluster
	4. Define the purpose of an environment
	5. Design integration with the Metrics API
	6. Design the method of capturing audit logs
	7. Define the operations that are captured in the audit log
	8. List the tooling available to provision Confluent Cloud resources
4. **Confluent Cloud Dynamic Operations**
	1. Differentiate Cloud API keys and Cluster API keys
	2. Compare and contrast users and service accounts
	3. Evaluate Terraform/CLI/REST API vs UI for deploying resources
	4. List the best practices for securely onboarding applications
	5. Compare RBAC vs ACLs
	6. Differentiate Confluent Cloud authentication options for users and service accounts
	7. Assess the importance of least privileges for users and applications
5. **Confluent Cloud Streaming Pipelines**
	1. Define the relationship between Connectors and external systems
	2. Describe how Connector tasks relate to performance
	3. Determine when fully-managed connectors can be used and when it's necessary to use self-managed connectors
	4. Define typical requirements to provision a Connector
	5. List the differences between provisioning a ksqlDB cluster and Flink compute pool
	6. Compare application capabilities when using ksqlDB vs Flink
6. **Confluent Cloud Data Governance**
	1. Define the purpose of schemas in Confluent Cloud and how to use them
	2. List the methods of managing the lifecycle of schemas
	3. Match the Stream Governance feature to its purpose
	4. Compare Stream Governance packages
7. **Confluent Cloud Resilience**
	1. Evaluate scenarios when cluster linking and/or schema linking should be used
	2. Differentiate High Availability use cases from Disaster Recovery use-cases
	3. Classify use-cases for DR Readiness
	4. List the benefits of using schema linking in synchronizing data
	5. List the benefits of using cluster linking in synchronizing data
	6. List HA configurations for non-Kafka and SR components

## Questions

1. A production Kafka cluster in Confluent Cloud is experiencing consumer lag issues. Which of the following is the most effective first step to identify the root cause of this performance problem?
	1. Immediately increase the number of partitions for all topics to improve parallelism
	2. **Review consumer group metrics and partition assignment distribution in the Confluent Cloud monitoring dashboard**
	3. Restart all consumer applications to reset their connection to the Kafka brokers
	4. Increase the replication factor for all topics to improve fault tolerance
2. Your security team requires all production applications be deployed with AWS Private Link networking. Which two Kafka cluster types could be used to meet this requirement?
	1. Basic
	2. Standard
	3. **Enterprise**
	4. **Dedicated**
	5. Advanced
3. You are creating a new topic for an application which will have several concurrent consumers in a single consumer group. What configuration setting will you need to carefully tune in order to meet this requirement?
	1. **num.partitions**
	2. retention.ms
	3. cleanup.policy
	4. retention.bytes
	5. flush.ms
4. Your organization’s usage of Confluent Cloud has grown and onboarding new user accounts has been error prone and adds to the administrative burden on the operations team. What changes can you make to streamline onboarding new users and simplify identity management for Confluent Cloud?
	1. **Enable Single sign-on (SSO) on Confluent Cloud for your organization’s identity provider**
	2. Have each team create a Confluent Cloud organization and allow them to manage their own organization users
	3. Create service accounts for each team to share
	4. Create one user/password pair for each team and let the team share a single user to access Confluent Cloud.
5. What will happen if a Kafka producer sends data with acks=0?
    1. The message is only stored in memory
    2. **No acknowledgment is expected; potential data loss**
    3. The broker guarantees delivery
    4. Messages are written to all replicas
6. What happens if you attempt to create a network connection in a region not supported by your selected cloud provider?
    1. **The CLI returns an error**
    2. It silently fails
    3. It defaults to multi-region
    4. The connection is automatically rerouted
7. You observe that consumers are experiencing increased lag. What is the most likely impact?
    1. Data loss
    2. Consumers read duplicate messages
    3. **Consumers take longer to process new messages**
    4. Producers are throttled
8. Which cloud-specific resource must be configured when enabling Private Link for Confluent Cloud on AWS?
    1. Cloud NAT Gateway
    2. **VPC Endpoint Service**
    3. Internet Gateway
    4. Route 53 Resolver
9. In Confluent Cloud, which two components are included in the Stream Governance “Advanced” tier? (Choose two)
    1. **Stream Catalog**
    2. Audit Logs
    3. **Stream Lineage**
    4. Connectors
10. You are planning to organize multiple projects for different teams. What two features should you use to isolate and manage their access? (Choose two)
    1. **Role Bindings**
    2. Multiple Clusters
    3. **Environments**
    4. Regions
11. Which two statements accurately describe how producers interact with partitions in Kafka? (Choose two)
    1. Producers send all messages to partition 0 by default
    2. **A key ensures messages go to the same partition**
    3. Producers manually assign offsets
    4. **Partitioning helps achieve parallelism in message delivery**
12. When creating a Kafka topic in Confluent Cloud, what happens if no replication factor is specified?
    1. **It uses the replication factor of the cluster configuration**
    2. It depends on the environment
    3. It defaults to 1
    4. You must manually specify it; otherwise topic creation fails
13. What is the primary purpose of configuring network access on a Kafka cluster in Confluent Cloud?
    1. To optimize message compression settings
    2. To enable multiple schema versions
    3. **To restrict or allow client access via public or private endpoints**
    4. To limit partition replication
14. Which ksqlDB construct should be used for building materialized views of the latest value per key?
    1. STREAM
    2. SCHEMA
    3. JOIN
    4. **TABLE**
15. You are tasked with designing a multi-region deployment for a streaming application on Confluent Cloud. The application must maintain low latency for users across different geographical locations while ensuring high availability and data consistency. What architectural considerations should you prioritize when setting up your Kafka clusters in Confluent Cloud to meet these requirements?
	1. Deploy a single Kafka cluster in the closest region to the majority of users and use partitioning to manage data distribution.
	2. Set up multiple Kafka clusters in each region and use Confluent Replicator to ensure data consistency across them.
	3. **Implement a multi-region Kafka cluster configuration in Confluent Cloud, leveraging partition leaders in the respective regions to minimize latency while using global data replication for consistency.**
	4. Utilize a single Kafka cluster with a geo-replication strategy but limit the number of partitions to reduce overhead.
16. You are tasked with provisioning a new Kafka cluster in Confluent Cloud to support a high-throughput application with strict latency requirements. The application is expected to handle over a million messages per second and requires low-latency processing. Which configuration should you choose to ensure optimal performance while maintaining cost-effectiveness?
	1. Provision a cluster with the lowest available instance type to minimize costs.
	2. Select a cluster with multiple high-capacity brokers but limit the number of partitions to minimize resource usage.
	3. **Provision a cluster with high-capacity brokers and an appropriate number of partitions to maximize parallelism.**
	4. Choose a multi-region cluster to ensure redundancy, sacrificing some performance for availability.
17. You are managing a Kafka cluster in Confluent Cloud with a replication factor of 3 for your topics. Recently, one of the brokers went down, and you noticed that some partitions have not reached the ISR (In-Sync Replica) state. After the broker is restored, you observe that some messages are missing from the topic. How should you handle this situation to ensure data consistency and availability for your consumers?
	1. Increase the replication factor to 5 for the affected topic and recreate the partitions.
	2. Enable the log retention policy to delete older messages and allow the topic to catch up.
	3. **Manually trigger a leader election for the affected partitions to ensure that the remaining in-sync replicas can take over.**
		1. This option is CORRECT because triggering a leader election allows other in-sync replicas to become leaders, which can help restore availability and ensure consumers can access the latest data.
	4. Reconfigure the replication factor to 1 temporarily to improve performance while the broker is down.
18. You are managing a Confluent Cloud environment for a financial services company that deals with sensitive customer data. Due to regulatory compliance requirements, you need to restrict access to specific Kafka topics based on user roles. The team debates whether to use Access Control Lists (ACLs) or Role-Based Access Control (RBAC) for this purpose. Given the context, which approach is more suitable and why?
	1. Use ACLs to grant permissions to individual users for each topic.
	2. Implement RBAC to define roles that can access multiple topics based on job functions.
	3. **Utilize RBAC to create roles that are tied to regulatory compliance requirements, ensuring users can only access topics relevant to their roles.**
	4. Combine ACLs and RBAC to handle both individual permissions and role-based access.
19. You are tasked with integrating a legacy SQL database with a real-time analytics platform using Kafka Connect in Confluent Cloud. The database has a large volume of historical data and frequent updates. After configuring the JDBC source connector, you notice that the initial data load is taking an unusually long time, and you are concerned about the impact on the performance of your Kafka cluster and downstream consumers. What is the best approach to optimize the initial data load while ensuring minimal disruption to the existing data pipeline
	1. Increase the 'batch.size' configuration in the connector settings to load more records at once.
	2. Set the poll interval.ms' to a lower value to increase the frequency of data fetching from the database.
	3. **Use the 'incrementing.column.name' and 'incrementing offset properties' to perform the initial load in smaller chunks based on the last update timestamps.**
	4. Run the initial load during off-peak hours to minimize the impact on the performance of the Kafka cluster and downstream consumers.

## Links

- [Confluent Cloud Certified Operator (CCAC) certification 2026](https://www.udemy.com/course/confluent-cloud-certified-operator-ccac-/)
- [Free Confluent Cloud Operator Sample Questions and Cert Prep Guide \| VMExam](https://www.vmexam.com/confluent/confluent-ccac-certification-exam-sample-questions)
- [Confluent Cloud Certified Operator (CCAC) – Practice Tests \| Exam Preparation - YouTube](https://www.youtube.com/watch?v=HQct0TWTKjc)
