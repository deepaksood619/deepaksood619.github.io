# Apache Storm

Apache Storm

Apache Storm is a stream processing framework that focuses on extremely low latency and is perhaps the best option for workloads that require near real-time processing. It can handle very large quantities of data with and deliver results with less latency than other solutions.

Stream Processing Model

Storm stream processing works by orchestrating DAGs (Directed Acyclic Graphs) in a framework it calls **topologies**. These topologies describe the various transformations or steps that will be taken on each incoming piece of data as it enters the system.

The topologies are composed of:

- **Streams**: Conventional data streams. This is unbounded data that is continuously arriving at the system.
- **Spouts**: Sources of data streams at the edge of the topology. These can be APIs, queues, etc. that produce data to be operated on.
- **Bolts**: Bolts represent a processing step that consumes streams, applies an operation to them, and outputs the result as a stream. Bolts are connected to each of the spouts, and then connect to each other to arrange all of the necessary processing. At the end of the topology, final bolt output may be used as an input for a connected system.

The idea behind Storm is to define small, discrete operations using the above components and then compose them into a topology. By default, Storm offers at-least-once processing guarantees, meaning that it can guarantee that each message is processed at least once, but there may be duplicates in some failure scenarios. Storm does not guarantee that messages will be processed in order.

In order to achieve exactly-once, stateful processing, an abstraction called **Trident** is also available. To be explicit, Storm without Trident is often referred to as **Core Storm**. Trident significantly alters the processing dynamics of Storm, increasing latency, adding state to the processing, and implementing a micro-batching model instead of an item-by-item pure streaming system.

Storm users typically recommend using Core Storm whenever possible to avoid those penalties. With that in mind, Trident's guarantee to processes items exactly once is useful in cases where the system cannot intelligently handle duplicate messages. Trident is also the only choice within Storm when you need to maintain state between items, like when counting how many users click a link within an hour. Trident gives Storm flexibility, even though it does not play to the framework's natural strengths.

Trident topologies are composed of:

- **Stream batches**: These are micro-batches of stream data that are chunked in order to provide batch processing semantics.
- **Operations**: These are batch procedures that can be performed on the data.

Advantages and Limitations

Storm is probably the best solution currently available for near real-time processing. It is able to handle data with extremely low latency for workloads that must be processed with minimal delay. Storm is often a good choice when processing time directly affects user experience, for example when feedback from the processing is fed directly back to a visitor's page on a website.

Storm with Trident gives you the option to use micro-batches instead of pure stream processing. While this gives users greater flexibility to shape the tool to an intended use, it also tends to negate some of the software's biggest advantages over other solutions. That being said, having a choice for the stream processing style is still helpful.

Core Storm does not offer ordering guarantees of messages. Core Storm offers at-least-once processing guarantees, meaning that processing of each message can be guaranteed but duplicates may occur. Trident offers exactly-once guarantees and can offer ordering between batches, but not within.

In terms of interoperability, Storm can integrate with Hadoop's YARN resource negotiator, making it easy to hook up to an existing Hadoop deployment. More than most processing frameworks, Storm has very wide language support, giving users many options for defining topologies.

Summary

For pure stream processing workloads with very strict latency requirements, Storm is probably the best mature option. It can guarantee message processing and can be used with a large number of programming languages. Because Storm does not do batch processing, you will have to use additional software if you require those capabilities. If you have a strong need for exactly-once processing guarantees, Trident can provide that. However, other stream processing frameworks might also be a better fit at that point.
