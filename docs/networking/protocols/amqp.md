# AMQP

## Advanced Message Queuing Protocol (AMQP)

- open standard application layer protocol
- Features -

    1. Reliability

    2. Interoperability

    3. Message orientation

    4. Reliable queuing

    5. Routing/Message delivery (including point-to-point, topic based publish-and-subscribe, trasactions and store-and-forward)

    6. Security- AMQP exchanges route messages directly - in fanout form, by topic, and also based on headers.
AMQP is an open standard for enterprise messaging, designed to support messaging for almost any distributed or business application. It works like instant messaging or email, and the difference towards these available solutions is that AMQP comprises both a network protocol, which speciﬁes the entities (producer/consumer, broker) to interoperate with each other, and a protocol model, which speciﬁes the representation of messages, and the commands to interoperate among the entities. Furthermore, AMQP messages are self-contained, and data content in a message is opaque and immutable. Also, there is no limit for the size of a message; it can either support a 4 GByte message or a 4 KByte one, in any case ensuring security, reliability, and performance.
AMQP mandates the behavior of the messaging provider and client to the extent that implementations from different vendors are interoperable, in the same way as SMTP, HTTP, FTP, etc. have created interoperable systems. Previous standardizations of [middleware](https://en.wikipedia.org/wiki/Middleware) have happened at the API level (e.g.[JMS](https://en.wikipedia.org/wiki/Java_Message_Service)) and were focused on standardizing programmer interaction with different middleware implementations, rather than on providing interoperability between multiple implementations.Unlike JMS, which defines an API and a set of behaviors that a messaging implementation must provide, AMQP is a [wire-level protocol](https://en.wikipedia.org/wiki/Wire_protocol). A wire-level protocol is a description of the format of the data that is sent across the network as a stream of [bytes](https://en.wikipedia.org/wiki/Octet_(computing)). Consequently, any tool that can create and interpret messages that conform to this data format can interoperate with any other compliant tool irrespective of implementation language.
Usage -
- Aadhaar Project - 1.2 billion identities
- Ocean Observatories Initiative - 8 terabytes of data per day

## See also

- Message Oriented Architecture (MOM)
