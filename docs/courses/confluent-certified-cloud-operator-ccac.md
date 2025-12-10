# Confluent Certified Cloud Operator (CCAC)

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

## Sample Questions

**Question:** A production Kafka cluster in Confluent Cloud is experiencing consumer lag issues. Which of the following is the most effective first step to identify the root cause of this performance problem?

1. Immediately increase the number of partitions for all topics to improve parallelism
2. **Review consumer group metrics and partition assignment distribution in the Confluent Cloud monitoring dashboard**
3. Restart all consumer applications to reset their connection to the Kafka brokers
4. Increase the replication factor for all topics to improve fault tolerance

**Detailed Explanation:** The most effective first step when troubleshooting consumer lag is to gather data through monitoring and metrics analysis. The Confluent Cloud monitoring dashboard provides comprehensive insights into consumer group performance, including lag metrics, partition assignment distribution, consumption rates, and throughput patterns. This data-driven approach allows you to identify whether the lag is caused by uneven partition distribution, slow consumers, network issues, or resource constraints. Option A is incorrect because increasing partitions without understanding the root cause may not solve the problem and can create additional complexity. Option C is wrong as restarting consumers is a reactive approach that doesn't address underlying issues and may cause additional disruption. Option D is incorrect because replication factor affects fault tolerance, not consumer performance, and changing it unnecessarily increases storage costs and network overhead.

1. Your security team requires all production applications be deployed with AWS Private Link networking. Which two Kafka cluster types could be used to meet this requirement?
	1. Basic
	2. Standard
	3. **Enterprise**
	4. **Dedicated**
	5. Advanced

2. You are creating a new topic for an application which will have several concurrent consumers in a single consumer group. What configuration setting will you need to carefully tune in order to meet this requirement?
	1. **num.partitions**
	2. retention.ms
	3. cleanup.policy
	4. retention.bytes
	5. flush.ms

8. Your organization’s usage of Confluent Cloud has grown and onboarding new user accounts has been error prone and adds to the administrative burden on the operations team. What changes can you make to streamline onboarding new users and simplify identity management for Confluent Cloud?
	1. **Enable Single sign-on (SSO) on Confluent Cloud for your organization’s identity provider**
	2. Have each team create a Confluent Cloud organization and allow them to manage their own organization users
	3. Create service accounts for each team to share
	4. Create one user/password pair for each team and let the team share a single user to access Confluent Cloud.

[Confluent Cloud Certified Operator (CCAC) certification Prep \| Udemy](https://www.udemy.com/course/confluent-cloud-certified-operator-ccac/)
