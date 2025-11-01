# Messaging Services

[Compare Azure messaging services - Azure Service Bus \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/service-bus-messaging/compare-messaging-services)

[Compare Azure Storage queues and Service Bus queues - Azure Service Bus \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted)

## Choose between Azure messaging services - Event Grid, Event Hubs, and Service Bus

- Azure Event Grid
- Azure Event Hubs
- Azure Service Bus

|Service|Purpose|Type|When to use|
|---|---|---|---|
|Event Grid|Reactive programming|Event distribution (discrete events)|React to status changes|
|Event Hubs|Big data pipeline|Event streaming (series)|Telemetry and distributed data streaming|
|Service Bus|High-value enterprise messaging|Message|Order processing and financial transactions|

## Azure Event Grid

Azure Event Grid is a highly scalable, fully managed Pub Sub message distribution service that offers flexible message consumption patterns using the Message Queueing Telemetry Transport (MQTT) and HTTP protocols. With Azure Event Grid, you can build data pipelines with device data, integrate applications, and build event-driven serverless architectures.

The service provides an eventing backbone that enables event-driven and reactive programming. It uses the publish-subscribe model. Publishers emit events, but have no expectation about how the events are handled. Subscribers decide on which events they want to handle.

Event Grid is deeply integrated with other Azure services and can be integrated with third-party services. It simplifies event consumption and lowers costs by eliminating the need for constant polling. Event Grid efficiently and reliably routes events from Azure and non-Azure resources. It distributes the events to registered subscriber endpoints. The event message has the information you need to react to changes in services and applications.

It has the following characteristics:

- Dynamically scalable
- Low cost
- Serverless
- At least once delivery of an event

Event Grid is offered in two editions: **Azure Event Grid**, a fully managed PaaS service on Azure, and **Event Grid on Kubernetes with Azure Arc**, which lets you use Event Grid on your Kubernetes cluster wherever that is deployed, on-premises or on the cloud. For more information, see [Azure Event Grid overview](https://learn.microsoft.com/en-us/azure/event-grid/overview) and [Event Grid on Kubernetes with Azure Arc overview](https://learn.microsoft.com/en-us/azure/event-grid/kubernetes/overview).

- [Introduction to Azure Event Grid - Azure Event Grid \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-grid/overview)
- [Dead lettering for event subscriptions to namespace topics - Azure Event Grid \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-grid/dead-letter-event-subscriptions-namespace-topics)

## Azure Event Hubs

Azure Event Hubs is a big data streaming platform and event ingestion service. It can receive and process millions of events per second. It facilitates the capture, retention, and replay of telemetry and event stream data. The data can come from many concurrent sources. Event Hubs allows telemetry and event data to be made available to various stream-processing infrastructures and analytics services. It's available either as data streams or bundled event batches. This service provides a single solution that enables rapid data retrieval for real-time processing, and repeated replay of stored raw data. It can capture the streaming data into a file for processing and analysis.

It has the following characteristics:

- Low latency
- Can receive and process millions of events per second
- At least once delivery of an event

[azure-event-hubs](cloud/others/azure/azure-event-hubs.md)

## Azure Service Bus

Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics. The service is intended for enterprise applications that require transactions, ordering, duplicate detection, and instantaneous consistency. Service Bus enables cloud-native applications to provide reliable state transition management for business processes. When handling high-value messages that can't be lost or duplicated, use Azure Service Bus. This service also facilitates highly secure communication across hybrid cloud solutions and can connect existing on-premises systems to cloud solutions.

Service Bus is a brokered messaging system. It stores messages in a "broker" (for example, a queue) until the consuming party is ready to receive the messages. It has the following characteristics:

- Reliable asynchronous message delivery (enterprise messaging as a service) that requires polling. If you're using Service Bus and you need to receive messages without having to poll the queue, you can achieve it by using a **long polling** receive operation using the TCP-based protocols that Service Bus supports.
- Advanced messaging features like first-in and first-out (FIFO), batching/sessions, transactions, dead-lettering, temporal control, routing and filtering, and duplicate detection
- At least once delivery of a message
- Optional ordered delivery of messages
