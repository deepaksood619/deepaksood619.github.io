# Publish Subscribe Pattern

The publish/subscribe pattern (also known as pub/sub) provides an alternative to traditional client-server architecture. In the client-sever model, a client communicates directly with an endpoint.The pub/sub model**decouples the client that sends a message (the publisher) from the client or clients that receive the messages (the subscribers)**. The publishers and subscribers never contact each other directly. In fact, they are not even aware that the other exists.**The connection between them is handled by a third component (the broker)**. The job of the broker is to filter all incoming messages and distribute them correctly to subscribers.
The most important aspect of pub/sub is the decoupling of the publisher of the message from the recipient (subscriber). This decoupling has several dimensions:

- **Space decoupling:**Publisher and subscriber do not need to know each other (for example, no exchange of IP address and port).
- **Time decoupling:**Publisher and subscriber do not need to run at the same time.
- **Synchronization decoupling:**Operations on both components do not need to be interrupted during publishing or receiving.

## Message Filtering

It's clear that the broker plays a pivotal role in the pub/sub process. But how does the broker manage to filter all the messages so that each subscriber receives only messages of interest? As you'll see, the broker has several filtering options:

## Option 1: Subject-based filtering

This filtering is based on the subject or topic that is part of each message. The receiving client subscribes to the broker for topics of interest. From that point on, the broker ensures that the receiving client gets all message published to the subscribed topics. In general, topics are strings with a hierarchical structure that allow filtering based on a limited number of expressions.

## Option 2: Content-based filtering

In content-based filtering, the broker filters the message based on a specific content filter-language. The receiving clients subscribe to filter queries of messages for which they are interested. A significant downside to this method is that the content of the message must be known beforehand and cannot be encrypted or easily changed.

## Option 3: Type-based filtering

When object-oriented languages are used, filtering based on the type/class of a message (event) is a common practice. For example,, a subscriber can listen to all messages, which are of type Exception or any sub-type.

## Distinction from Message Queues

## A message queue stores message until they are consumed

When you use a message queue, each incoming message is stored in the queue until it is picked up by a client (often called a consumer). If no client picks up the message, the message remains stuck in the queue and waits to be consumed. In a message queue, it is not possible for a message not to be processed by any client, as it is in MQTT if nobody subscribes to a topic.

## A message is only consumed by one client

Another big difference is that in a traditional message queue a message can be processed by one consumer only. The load is distributed between all consumers for a queue. In MQTT the behavior is quite the opposite: every subscriber that subscribes to the topic gets the message.

## Queues are named and must be created explicitly

A queue is far more rigid than a topic. Before a queue can be used, the queue must be created explicitly with a separate command. Only after the queue is named and created is it possible to publish or consume messages. In contrast, MQTT topics are extremely flexible and can be created on the fly.

## References

<https://www.hivemq.com/blog/mqtt-essentials-part2-publish-subscribe>
