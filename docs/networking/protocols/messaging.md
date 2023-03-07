# Messaging

For Messaging consider it like email, not between people but between different apps on different machines. A message is typically some container-like format with some extra metadata naming the sender and the recipent(s), maybe timestamps and serial numbers. All you can do in a messaging system is basically to send a message to a particular address. Whether or when the resident at that address responds is not possible to determine -- just like email in that sense. For a large scale example of a messaging system we have the internet itself. The very much hyped REST interactions of online services is also an example where messaging is starting to show success.

1. **Messaging Systems**

   - HTTP and Email

   - REST(ful) web services

   - Dbus

   - Protocol Buffers

   - GraphQL

## AMQP vs MQTT

Essentially both AMQP (speaking for the 0.9.1 version) and MQTT implement a publish/subscribe messaging pattern. Both protocols rely on intermediate queuing/store-and-forward techniques to reduce or eliminate message loss in case a client loses the connection to the broker. The main conceptual difference is that in MQTT one client (identified by a 'unique' client id), has one TCP connection to the broker and only a single "queue". As a consequence, even if a client has multiple subscriptions all messages end up in the same queue. In contrast, with AMQP a queue is a resource on the broker and is decoupled from the client, multiple clients can consume the same queue e.g. for load balancing purposes. So a client can create many queues and decide if and when to consume messages. Moreover, a AMQP connection, which is just a TCP connection, is multiplexed via logical channels, enabling the development of highly performant consumers and publishers.

## See also

- Message Oriented Architecture (MOM)
