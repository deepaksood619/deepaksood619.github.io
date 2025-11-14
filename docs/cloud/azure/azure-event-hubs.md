# Azure Event Hubs

Azure Event Hubs is a native data-streaming service in the cloud that can stream millions of events per second, with low latency, from any source to any destination. Event Hubs is compatible with Apache Kafka. It enables you to run existing Kafka workloads without any code changes.

Businesses can use Event Hubs to ingest and store streaming data. By using streaming data, businesses can gain valuable insights, drive real-time analytics, and respond to events as they happen. They can use this data to enhance their overall efficiency and customer experience.

[Azure Event Hubs: Data streaming platform with Kafka support - Azure Event Hubs \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about)

## Key capabilities

### Apache Kafka on Azure Event Hubs

Event Hubs is a multi-protocol event streaming engine that natively supports Advanced Message Queuing Protocol (AMQP), Apache Kafka, and HTTPS protocols. Because it supports Apache Kafka, you can bring Kafka workloads to Event Hubs without making any code changes. You don't need to set up, configure, or manage your own Kafka clusters or use a Kafka-as-a-service offering that's not native to Azure.

Event Hubs is built as a cloud native broker engine. For this reason, you can run Kafka workloads with better performance, better cost efficiency, and no operational overhead.

### Schema Registry in Event Hubs

Azure Schema Registry in Event Hubs provides a centralized repository for managing schemas of event streaming applications. Schema Registry comes free with every Event Hubs namespace. It integrates with your Kafka applications or Event Hubs SDK-based applications.

Schema Registry ensures data compatibility and consistency across event producers and consumers. It enables schema evolution, validation, and governance and promotes efficient data exchange and interoperability.

Schema Registry integrates with your existing Kafka applications and supports multiple schema formats, including Avro and JSON schemas.

### Others

- Real-time processing of streaming events with Stream Analytics
- Explore streaming data with Azure Data Explorer
- Azure functions, SDKs, and the Kafka ecosystem
- Supports Local development with Event Hubs emulator
- Flexible and cost-efficient event streaming
- Scalable
- Supports streaming large messages
	- In most streaming scenarios, data is characterized by being lightweight, typically less than 1 MB, and having a high throughput. There are also instances where messages can't be divided into smaller segments. Event Hubs can **accommodate events up to 20 MB with self-serve scalable** [dedicated clusters](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-dedicated-overview) at no extra charge. This capability allows Event Hubs to handle a wide range of message sizes to ensure uninterrupted business operations.
- Capture streaming data for long-term retention and batch analytics
	- Capture your data in near real time in Azure Blob Storage or Azure Data Lake Storage for long-term retention or micro-batch processing. You can achieve this behavior on the same stream that you use for deriving real-time analytics. Setting up capture of event data is fast.

## Working

Event Hubs provides a unified event streaming platform with a time-retention buffer, decoupling event producers from event consumers. The producer and consumer applications can perform large-scale data ingestion through multiple protocols.

The following diagram shows the main components of Event Hubs architecture.

![Diagram that shows the main components of Event Hubs.](https://learn.microsoft.com/en-us/azure/event-hubs/media/event-hubs-about/components.png)

The key functional components of Event Hubs include:

- **Producer applications**: These applications can ingest data to an event hub by using Event Hubs SDKs or any Kafka producer client.
- **Namespace**: The management container for one or more event hubs or Kafka topics. The management tasks such as allocating streaming capacity, configuring network security, and enabling geo-disaster recovery are handled at the namespace level.
- **Event Hubs/Kafka topic**: In Event Hubs, you can organize events into an event hub or a Kafka topic. It's an append-only distributed log, which can comprise one or more partitions.
- **Partitions**: They're used to scale an event hub. They're like lanes in a freeway. If you need more streaming throughput, you can add more partitions.
- **Consumer applications**: These applications can consume data by seeking through the event log and maintaining consumer offset. Consumers can be Kafka consumer clients or Event Hubs SDK clients.
- **Consumer group**: This logical group of consumer instances reads data from an event hub or Kafka topic. It enables multiple consumers to read the same streaming data in an event hub independently at their own pace and with their own offsets.

[Azure Event Hubs: Data streaming platform with Kafka support - Azure Event Hubs \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about)

## Messages

### ContentType

Azure Event Hubs allows you to specify a `ContentType` for the data contained within an `EventData` object. This property is a MIME type that describes the format of the event body, enabling consumers to understand and process the data appropriately.

Key aspects of `ContentType` in Azure Event Hubs:

- **MIME Type:**

    The `ContentType` property expects a MIME type string, such as `application/json`, `text/plain`, `application/xml`, or any other relevant MIME type that accurately describes the data format.

- **Application-Managed:**

    The `ContentType` is set by the application sending the event and is intended to facilitate coordination between event producers and consumers. It is not automatically inferred or enforced by Event Hubs itself.

- **Consumer Guidance:**

    Consumers of the event stream can use the `ContentType` to make informed decisions about how to deserialize and process the `EventBody`. For example, if the `ContentType` is `application/json`, the consumer would parse the `EventBody` as a JSON object.

- **Flexibility:**

    While common MIME types like JSON or plain text are frequently used, you can define and use custom MIME types if your application requires a specific data format not covered by standard types.

## Reading Bulk Message

- Use **EventHubConsumerClient.receive_batch()** or manual loop using **receive()**.
- Determine the **available message count**.
- If available < `batch_size` → consume immediately.
    - If available ≥ `batch_size` → consume in batches of size `batch_size`.

```python
from azure.eventhub import EventHubConsumerClient

connection_str = "<EVENT_HUB_CONNECTION_STRING>"
consumer_group = "$Default"
eventhub_name = "<EVENT_HUB_NAME>"

BATCH_SIZE = 100  # desired batch size
client = EventHubConsumerClient.from_connection_string(
    conn_str=connection_str,
    consumer_group=consumer_group,
    eventhub_name=eventhub_name,
)

def on_event_batch(partition_context, events):
    if not events:
        return

    total_events = len(events)
    if total_events <= BATCH_SIZE:
        # Process all immediately
        process_events(events)
    else:
        # Process in chunks
        for i in range(0, total_events, BATCH_SIZE):
            chunk = events[i:i + BATCH_SIZE]
            process_events(chunk)

    partition_context.update_checkpoint(events[-1])

def process_events(events):
    print(f"Processing {len(events)} events...")
    for e in events:
        print(f"  Event: {e.body_as_str()}")

with client:
    client.receive_batch(
        on_event_batch=on_event_batch,
        max_batch_size=BATCH_SIZE,
        starting_position="-1"  # from start
    )
```

```json
{
    "version": "2.0",
    "extensions": {
        "eventHubs": {
            "maxEventBatchSize" : 100,
            "minEventBatchSize" : 25,
            "maxWaitTime" : "00:05:00",
            "batchCheckpointFrequency" : 1,
            "prefetchCount" : 300,
        }
    }
}
```

[Azure Event Hub: Receive events as a batch that were sent to hub as individual messages? - Stack Overflow](https://stackoverflow.com/questions/76105351/azure-event-hub-receive-events-as-a-batch-that-were-sent-to-hub-as-individual-m)

### Key Parameters

- **`receive_batch()`** allows you to fetch multiple events at once.
- **`max_batch_size`** defines the maximum number of events per fetch.
- If fewer messages are available, it immediately returns what exists after the **wait time** (default is small; configurable via `max_wait_time`).

### Optional Fine-Tuning

If you want true _immediate reads even when less than batch size_, set:

```python
client.receive_batch(
    on_event_batch=on_event_batch,
    max_batch_size=BATCH_SIZE,
    max_wait_time=0  # return immediately if messages exist
)
```

That ensures:

- If queue has < BATCH_SIZE → return them immediately.
- If queue has > BATCH_SIZE → returns exactly BATCH_SIZE and continues next poll.

[ChatGPT - Azure Event Hub batching](https://chatgpt.com/share/6911d341-db80-8008-9362-97c1f1aa3072)

## Checkpointing / Commit

- Checkpoint too often → overhead.
- Checkpoint too rarely → risk of duplicate processing on restart.

```python
if events and partition_context.sequence_number % 1000 == 0:
    partition_context.update_checkpoint(events[-1])
```

This checkpoints every 1,000 messages.

### Automatic Checkpointing

**When it happens automatically:**

- You use **EventProcessorClient** (Java/.NET) or **EventHubConsumerClient with receive_batch() and checkpoint_store** (Python).
- After each batch or event callback, the SDK automatically updates the checkpoint **for the last successfully processed event**.

```python
from azure.eventhub import EventHubConsumerClient
from azure.eventhub.extensions.checkpointstoreblob import BlobCheckpointStore

checkpoint_store = BlobCheckpointStore.from_connection_string("<BLOB_CONN>", "<CONTAINER>")
client = EventHubConsumerClient.from_connection_string(
    conn_str="<EH_CONN>",
    consumer_group="$Default",
    eventhub_name="<EH_NAME>",
    checkpoint_store=checkpoint_store
)

def on_event(partition_context, event):
    print(f"Event: {event.body_as_str()}")
    partition_context.update_checkpoint(event)  # <- triggers checkpoint

with client:
    client.receive(on_event=on_event, starting_position="-1")
```

- Each event triggers a checkpoint update.
- **Automatic** in the sense that once you call `update_checkpoint()`, the SDK writes the offset into your blob store automatically.
- Ideal for **simple consumers** or **no at-least-once requirement**.

### Manual Checkpointing

You choose _when_ to mark progress.

This gives control for **exactly-once** or **at-least-once** semantics and to avoid checkpointing failed batches.

```python
def on_event_batch(partition_context, events):
    print(f"Received {len(events)} events")

    try:
        process_events(events)
        # checkpoint only after processing is successful
        last_event = events[-1]
        partition_context.update_checkpoint(last_event)
    except Exception as e:
        print(f"Processing failed: {e}, skipping checkpoint")
```

You decide:

- **How frequently** (every N messages, every minute, or end of batch).
- **On success only** (avoid corrupt progress tracking on failure).
- **What to store** (latest processed event only).

## Comparison of Event hubs and Confluent Cloud

### Azure Event Hubs

Azure Event Hubs is a fully managed, real-time data ingestion service designed for large-scale data streaming. It offers seamless integration with the Azure ecosystem, making it ideal for applications within the Azure environment. Event Hubs supports some Kafka APIs, allowing Kafka clients to interact with them without significant modifications.

### Confluent Cloud

Confluent Cloud is a fully managed data streaming platform built on Apache Kafka. It offers a comprehensive suite of tools for data streaming, including stream processing with Apache Flink and data governance features. Confluent Cloud integrates seamlessly with Azure services, providing unified security, management, and billing experience. It supports the full range of Kafka APIs, ensuring compatibility with existing Kafka clients and applications.

### Key Differences

- **Kafka Compatibility:** Event Hubs offers partial Kafka API compatibility, which may not support all Kafka features. In contrast, Confluent Cloud provides full Kafka API compatibility, ensuring seamless integration with existing Kafka clients.
- **Scalability and Features:** Event Hubs can elastically scale but has certain limitations in scalability and advanced features. Confluent Cloud offers a comprehensive suite of tools for data streaming, including stream processing and data governance features, making it suitable for complex enterprise architectures.
- **Integration with Azure:** Both services integrate with Azure, but Confluent Cloud offers a more unified security, management, and billing experience, as well as seamless integration with various Azure services.

## Links

- Azure Events Hub / Azure Event Hub
- [ChatGPT - Epoch Receiver Conflict Fix](https://chatgpt.com/share/685d9105-6864-8005-89e9-35f639cf420f)
- [Avoid duplicate event processing in Event Streaming system \| by Soumyadev Bhattacharyya \| Towards Dev](https://towardsdev.com/avoid-duplicate-event-processing-in-event-streaming-system-6c7efc151a40)
- [**Frequently asked questions - Azure Event Hubs** \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-faq)
- [Overview of features - Azure Event Hubs \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features)
- [Dynamically add partitions to an event hub in Azure Event Hubs - Azure Event Hubs \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-hubs/dynamically-add-partitions)
