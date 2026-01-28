# Auditing and Monitoring your Confluent Cloud Cluster

Inside each topic, you will find a stream of the permission checks that occur as a user or application attempts to take action that has been protected by your ACLs or RBAC policies. Audit logs track operations to create, delete, and modify Confluent Cloud resources, such as API keys, Kafka clusters, user accounts, service accounts, SSO connections, and connectors.

For example, say an attacker repeatedly tries to open many connections in quick succession using invalid credentials, in an attempt to exhaust broker resources. Your audit logs will keep a record of the attack, who was involved, the sequence of events, and a timestamp. They are also valuable in assisting you when troubleshooting a configuration change. For example, making sure that new users or groups have the access to the correct topics.

![audit-logs-types](https://images.ctfassets.net/gt6dp23g0g38/2PRJMFGDHHYCMfzu6eBOyK/057c67eecd3c3a16c943a49a1be22c5c/audit-logs-types.jpg)

## Benefits of Audit Logs

There are four main advantages of using audit logs:

1. **Gaining insight into events.** They provide insight into situations, such as trying to determine if a particular group of users was successful in authenticating and getting access to the correct broker resources after a new ACL was added.
2. **Improved security.** They enhance security by letting you identify anomalies and unauthorized operations in the historical record so that you can take action as quickly as possible. In the event of a security breach, audit logs provide an official record and help to forensically piece what happened back together.
3. **A greater understanding of impact.** They let you see who, as well as which, services have been impacted by unusual activities, so that you can communicate with stakeholders as the situation progresses.
4. **Evidence of compliance.** If your organization is part of a highly regulated industry, such as financial services, healthcare, government, energy, or high-tech you have certain standards you are required to meet. Audit logs provide a data-documented method of proving compliance.

Within Confluent Cloud audit logs are captured by default and stored in a Kafka topic and as such, can be queried or processed like any other Kafka topic. This allows for near-real-time detection of anomalous audit log events. All audit log messages from your clusters are retained for seven days on an independent cluster. If seven days is not sufficient for your needs, we recommend replicating your logs to another cluster or external system. Users cannot modify, delete, or produce messages directly to the audit log topic, and to consume the messages, users must have an API key specific to the audit log cluster.

To provide industry-backed standardization, audit logs use the CloudEvents specification to define the syntax of the logs. CloudEvents is a vendor-neutral specification that defines the format of event data, and that is rapidly becoming the industry standard for describing event data.

If you have previously used open source or even Confluent Platform versions of Kafka, you’ve most likely had to deal with provisioning disk space for logs, trying to consolidate your logs from multiple brokers, and setting up Log4j to capture your logs. Confluent Cloud handles all of this for you. After you set up and configure your cluster you can start viewing your logs, exporting them, and analyzing them just as you might any other Kafka topic.

## Audit Log Types

There are three audit log types:

1. Authentication events are recorded when a client connects to a Kafka cluster.
2. Authorization events are recorded when a user tries to perform an action, such as altering a config file, creating a partition, etc.
3. Organization events are recorded when a Confluent Cloud service performs an operation or an action, such as creating a new Kafka cluster.

Each event includes context and data about what happened, complete with a unique identifier (ID) and the event source (source), or where the event took place.

There are two main sections for each event:

1. Event context—metadata about the event, including the source, type of event, data content type, subject, and time.
2. Event data—details about the event data, including the service name, the method name, resource name, authentication, authorization, and request.

To see a list of the events that are recorded and some specific examples, review the [Audit Logs](https://docs.confluent.io/cloud/current/monitoring/audit-logging/) section of the Confluent Cloud documentation.

## Audit Log Events

Keep in mind that each audit log record does not contain the contents of the event. Each record only informs you that an event happened and only contains metadata about the event context and event data.

The source of the auditable event message is defined in the Confluent Resource Name (CRN) crn://confluent.cloud/kafka=lkc-a1b2c, which shows that the event occurred in the Kafka cluster lkc-a1b2s.

The type of event, io.confluent.kafka.server/authorization, indicates that the auditable event message was triggered as a result of an authorization check.

The time shows the timestamp for the authorization event.

In the event data properties section, the data payload includes event data details for the authorization event.

The serviceName shows the event occurred in the Kafka cluster lkc-a1b2s.

The methodName shows the authorization was for creating a topic.

The resourceName tells us the topic name is departures.

The authenticationInfo shows that the authenticated user account was 123456, and that authorization was granted to run the operation DescribeConfigs on the topic departures.

The request section includes the request correlation identifier or the unique ID of this specific request, and the client identifier, or where the request came from.

![event-context-data](https://images.ctfassets.net/gt6dp23g0g38/qu24c0vhUOdeJC1pTm01B/3f83e8cd898cb3502695251dd815dc7b/event-context-data.jpg)

While this example covered an authorization event, you will see similar fields in both the authentication and organizational event types.

For a more in-depth overview of all three, review the [Confluent Cloud documentation](https://docs.confluent.io/cloud/current/monitoring/audit-logging/). Each event type is broken down and specific examples of successes and failures are given. The list of events that are available in audit logs is constantly being updated, so be sure to reference the documentation often.

As a reminder, audit logs are only retained for seven days. For some organizations, seven days of log history is enough. For organizations that would like to retain more than that there are a few options:

- Like any other topic, you can replicate and export these logs to another cluster or external system.
- The best way to export your logs would be to use a self-managed sink connector or to replicate the audit logs into a managed Kafka cluster. Then you can use Security Information and Event Management (SIEM) software to manage logs and create alerts.
- This also allows you to create filters and a retention policy that aligns with your business needs.

Be sure to review the documentation for more information.

## Retaining Audit Logs

You can find a tutorial on retaining audit logs in Jonny Mirza’s blog post [Visualize Logs for Simplified Security in Confluent Cloud](https://www.confluent.io/blog/visualize-logs-for-simplified-security-in-confluent-cloud/?session_ref=direct).
