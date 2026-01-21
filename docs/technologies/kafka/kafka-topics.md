# Kafka Topics

- A topic is a category of messages in Kafka
- The producers publish the messages into topics
- The consumers read the messages from topics
- A topic is divided into one or more partitions
- A partition is also known as a commit log
- Each partition contains an ordered set of messages
- Each message is identified by its offset in the partition
- Messages are added at one end of the partition and consumed at the other

## Kafka Topics Explained: How Events Are Organized

In Apache Kafka®, **topics** are the core abstraction for storing and processing data. Unlike traditional databases where data is stored in **tables** and updated with each new event, Kafka uses **logs** to record every event in sequence. This means that instead of replacing old values, each new event is simply **appended** to the log, preserving the entire history. For example, if you’re monitoring a smart thermostat, every temperature reading is added as a new event in the log, allowing you to track changes over time.

Each event in a topic is called a **message**, and it consists of three main parts:

- A **key**, which identifies the source of the event (like a thermostat ID or user ID).
- A **value**, which contains the actual data (like the temperature reading or the click action).
- A **timestamp**, which marks the exact time the event was produced.

Messages in a topic are **immutable**—once written, they cannot be changed. This guarantees a reliable and consistent history of events. If you want to transform or filter data, you don’t modify the original topic; instead, you **create a new topic** that reflects those changes. This keeps Kafka’s logs clean and traceable.

It’s important to understand that **topics are not queues**. In a queue, when you read a message, it’s gone—nobody else can read it. But in a Kafka topic, messages remain available for multiple consumers to read independently. This allows for **replayability** and fault tolerance, as data can be processed multiple times without being lost.

Kafka also supports **log compaction**. If you only care about the latest state of each key (e.g., the most recent temperature reading from each thermostat), you can enable compaction to remove old versions, keeping your storage lean without losing important information.

Finally, you can configure **retention policies** to manage storage efficiently, choosing how long Kafka should keep data—whether it’s **forever**, for a set number of days, or until it’s compacted.

In summary, Kafka topics are powerful, immutable logs that allow you to store, process, and replay streams of events reliably, while keeping full historical context intact.

[Kafka Topics Explained: How Events Are Organized](https://developer.confluent.io/courses/apache-kafka/topics/)

## Kafka Topic Naming Convention and Best Practices

The most important best practice for Kafka topic naming is to use a clear, consistent, and semantically meaningful convention that avoids fields likely to change over time, and to enforce these conventions across your organization.

### Key Kafka Topic Naming Best Practices

- **Use a Structured Naming Convention:**
    Group topics into namespaces based on business processes, products, or originating systems. Common patterns include:
    - Internal topics: `<product>.<system>.<event-type>(.<version>)`
    - Business process topics: `<product>.<process>.<event-type>(.<version>)`
    - Kafka Connect topics: `<product>.connect.<source-system>.<event-type>(.<version>)`
- **Semantic Versioning:**
    If schemas evolve in a backward-incompatible way, increment the major version in the topic name (e.g., `payments.funds-check-status.1`). The initial version (v0) is implicit and does not need to be appended.
- **Avoid Volatile Fields:**
    Do not include fields in topic names that are likely to change, such as owner names, service names, or product names. Instead, focus on the data's business meaning.
- **Do Not Couple to Applications:**
    Avoid naming topics after the applications that produce or consume them. Topic names should reflect the data, not the software using it.
- **Enforce Naming Conventions:**
    - Disable automatic topic creation (`auto.topic.creation=false`) to prevent ad hoc topic names.
    - Use CI/CD pipelines to automate and enforce topic creation and naming.
- **Field Components to Consider:**
    - Product
    - Public/Private (internal vs. external consumption)
    - Message Type (purpose or intent)
    - Scope (ETL, tracking, queueing, etc.)
    - Dataset Name
    - Data Name
    - Data Type (e.g., AVRO, JSON)
- **Separators and Allowed Characters:**
    - Use periods (`.`) to separate fields, and dashes (`-`) as word separators.
    - Allowed characters: `[a-zA-Z0-9._-]`
    - Avoid mixing underscores and dots in the same cluster, as they may be treated as equivalent in some contexts.
    - Do not start topic names with an underscore (`_`), as this is reserved for internal topics.
- **Length Limitations:**
    - Topic names must not exceed 249 characters, to ensure compatibility with Kafka's partition folder naming.
- **Cluster Linking and Environment Considerations:**
    - If using cluster linking, consider prefixing topic names with the region or environment for clarity and to avoid conflicts.

### Example Topic Names

|Use Case|Example Topic Name|
|---|---|
|Internal|`payments.core.transaction.1`|
|Business Process|`retail.orders.placed.2`|
|Kafka Connect|`crm.connect.salesforce.customer-update.1`|

### Recommended Strategy: "The 5-Field Standard"

If you are starting from scratch, adopt this specific template. It strikes the best balance between detail and brevity:

`<domain>.<service>.<entity>.<event>.<version>`

1. **Domain:** High-level business area (`ecomm`, `fin`, `iot`).
2. **Service:** The producer application (`checkout-api`, `fraud-detector`).8
3. **Entity:** The noun (`cart`, `suspicious-ip`).
4. **Event:** The verb/state (`abandoned`, `flagged`).
5. **Version:** Schema version (`v1`).

**Result:** `ecomm.checkout-api.cart.abandoned.v1`

### Good vs. Bad Examples

| **Structure**    | **Topic Name**               | **Verdict**  | **Reason**                                                                 |
| ---------------- | ---------------------------- | ------------ | -------------------------------------------------------------------------- |
| **Flat**         | `orders`                     | ❌ **Bad**    | Too vague. Whose orders? What schema?                                      |
| **Mixed**        | `Billing_Invoices_Generated` | ❌ **Bad**    | Inconsistent casing; hard to parse programmatically.                       |
| **No Version**   | `marketing.clicks`           | ⚠️ **Risky** | Hard to migrate if the click schema changes dramatically.                  |
| **Metric Clash** | `app.topic_name`             | ❌ **Bad**    | Mixes `.` and `_`. Messes up JMX metrics.                                  |
| **Hierarchical** | `sales.na.orders.created.v2` | ✅ **Good**   | Clear ownership (Sales NA), entity (orders), event (created), and version. |
| **Technical**    | `connect-cluster.configs`    | ✅ **Good**   | Standard internal naming for Kafka Connect.                                |

### Additional Tips

- Build topic names from most general to most specific.
- Plan for future growth and cross-team usage.
- Document your naming convention and educate all Kafka users in your organization.
