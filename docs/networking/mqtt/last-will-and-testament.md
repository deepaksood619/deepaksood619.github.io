# Last Will and Testament

Because MQTT is often used in scenarios that include unreliable networks, it's reasonable to assume that some of the MQTT clients in these scenarios will occasionally disconnect ungracefully. An ungraceful disconnect can occur due to loss of connection, empty batteries, or many other reasons. Knowing whether a client disconnected gracefully (with an MQTTDISCONNECT message) or ungracefully (without a disconnect message), helps you respond correctly. The Last Will and Testament feature provides a way for clients to respond to ungraceful disconnects in an appropriate way.

In MQTT, you use the Last Will and Testament (LWT) feature to notify other clients about an ungracefully disconnected client. Each client can specify its last will message when it connects to a broker. The last will message is a normal MQTT message with a topic, retained message flag, QoS, and payload. The broker stores the message until it detects that the client has disconnected ungracefully. In response to the ungraceful disconnect, the broker sends the last-will message to all subscribed clients of the last-will message topic. If the client disconnects gracefully with a correct DISCONNECT message, the broker discards the stored LWT message.

LWT helps you implement various strategies when the connection of a client drops (or at least inform other clients about the offline status).

## How do you specify a LWT message for a client?

Clients can specify an LWT message in the CONNECT message that initiates the connection between the client and the broker.

## When does a broker send the LWT message?

According to the [MQTT 3.1.1 specification](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/mqtt-v3.1.1.html), the broker must distribute the LWT of a client in the following situations:

- The broker detects an I/O error or network failure.
- The client fails to communicate within the defined Keep Alive period.
- The client does not send a DISCONNECT packet before it closes the network connection.
- The broker closes the network connection because of a protocol error.

## Best Practices - When should you use LWT?

LWT is a great way to notify other subscribed clients about the unexpected loss of connection of another client. In real-world scenarios, LWT is often combined with [retained messages](https://www.hivemq.com/blog/mqtt-essentials-part-8-retained-messages/) to store the state of a client on a specific topic. For example, client1 first sends a CONNECT message to the broker with a lastWillMessage that has "Offline" as the payload, the lastWillRetain flag set to true, and the lastWillTopic set to client1/status. Next, the client sends a PUBLISH message with the payload "Online" and the retained flag set to true to the same topic (client1/status). As long as client1 stays connected, newly-subscribed clients to the client1/status topic receive the "Online" retained message. If client1 disconnects unexpectedly, the broker publishes the LWT message with the payload "Offline" as the new retained message. Clients that subscribe to the topic while client1 is offline, receive the LWT retained message ("Offline") from the broker. This pattern of retained messages keeps other clients up to date on the current status of client1 on a specific topic.

## References

<https://www.hivemq.com/blog/mqtt-essentials-part-9-last-will-and-testament>
