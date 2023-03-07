# Persistent Session & Queuing Messages

To receive messages from an MQTT broker, a client connects to the broker and creates [subscriptions to the topics](https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/) in which it is interested. If the connection between the client and broker is interrupted during a non-persistent session, these topics are lost and the client needs to subscribe again on reconnect. Re-subscribing every time the connection is interrupted is a burden for constrained clients with limited resources. To avoid this problem, the client can request a persistent session when it connects to the broker. Persistent sessions save all information that is relevant for the client on the broker. TheclientIdthat the client provides when it establishes connection to the broker identifies the session

## What's stored in a persistent session?

In a persistent session, the broker stores the following information (even if the client is offline). When the client reconnects the information is available immediately.

- Existence of a session (even if there are no subscriptions).
- All the subscriptions of the client.
- All messages in a [Quality of Service (QoS)](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/) 1 or 2 flow that the client has not yet confirmed.
- All new QoS 1 or 2 messages that the client missed while offline.
- All QoS 2 messages received from the client that are not yet completely acknowledged.

## How do you start or end a persistent session?

When the client connects to the broker, it can request a persistent session. The client uses acleanSessionflag to tell the broker what kind of session it needs:

- When the clean session flag is set to true, the client does not want a persistent session. If the client disconnects for any reason, all information and messages that are queued from a previous persistent session are lost.
- When the clean session flag is set to false, the broker creates a persistent session for the client. All information and messages are preserved until the next time that the client requests a clean session. If the clean session flag is set to false and the broker already has a session available for the client, it uses the existing session and delivers previously queued messages to the client.

## How does the client know if a session is already stored?

Since MQTT 3.1.1, theCONNACKmessage from the broker contains asession present flag. This flag tells the client if a previously established session is still available on the broker.

## Persistent session on the client side

Similar to the broker, each MQTT client must also store a persistent session. When a client requests the server to hold session data, the client is responsible for storing the following information:

- All messages in a QoS 1 or 2 flow, that are not yet confirmed by the broker.
- All QoS 2 messages received from the broker that are not yet completely acknowledged.

## Best practices

Here are some guidelines that can help you decide when to use a persistent session or a clean session:

## Persistent Session

- The client must get all messages from a certain topic, even if it is offline. You want the broker to queue the messages for the client and deliver them as soon as the client is back online.
- The client has limited resources. You want the broker to store the subscription information of the client and restore the interrupted communication quickly.
- The client needs to resume all QoS 1 and 2 publish messages after a reconnect.

## Clean session

- The client needs only to publish messages to topics, the client does not need to subscribe to topics.You don't want the broker to store session information or retry transmission of QoS 1 and 2 messages.
- The client does not need to get messages that it misses offline.
Persistent sessions are often used for MQTT clients on constrained devices and clients who must not miss any messages for certain topics - not even when they are disconnected. When a client reconnects, the broker will send all missed messages for a subscription with a QoS Level of 1 or 2. Persistent sessions are most useful for clients that subscribe to topics; publishing-only clients don't profit from persistent sessions.

## How long does the broker store messages?

People often ask how long the broker stores the session. The easy answer is: The broker stores the session until the clients comes back online and receives the message. However, what happens if a client does not come back online for a long time?Usually, the memory limit of the operating system is the primary constraint on message storage. There is no standard answer for this scenario. The right solution depends on your use case.

## References

<https://www.hivemq.com/blog/mqtt-essentials-part-7-persistent-session-queuing-messages>
