# MQTT vs HTTP

- MQTT transfers data as a byte array and publish/subscribe model, which makes it perfect for resource-constrained devices and help to save battery.
- Besides, publish/subscribe model provides clients with independent existence from one another and enhance the reliability of the whole system. When one client is out of order the whole system can keep on working properly.
- Throughput of MQTT is 93 times faster than HTTP's.
- Besides, in comparison to HTTP, MQTT Protocol ensures high delivery guarantees. There are 3 levels of Quality of Services
- MQTT also provides users with options of Last will & Testament and Retained messages. The first means that in case of unexpected disconnection of a client all subscribed clients will get a message from a broker. Retained message means that a newly subscribed client will get an immediate status update.
- MQTT has pretty short specification. There are only CONNECT, PUBLISH, SUBSCRIBE, UNSUBSCRIBE and DISCONNECT types that are significant for developers. Whereas HTTP specifications are much longer.
- MQTT has a very short message header and the smallest packet message size of 2 bytes. Using text message format by HTTP protocol allows it to compose lengthy headers and messages. It helps to eliminate troubles because it can be read by humans, but at the same time it's needless for resource-constrained devices.
- The real advantage of MQTT over HTTP occurs when we reuse the single connection for sending multiple messages in which the average response per message converges to around 40 ms and the data amount per message converges to around 400 bytes. Note that in the case of HTTP, these reductions simply aren't possible.
- The conclusion we can draw is that when choosing MQTT over HTTP, it's really important to reuse the same connection as much as possible. If connections are set up and torn down frequently just to send individual messages, the efficiency gains are not significant compared to HTTP.
    - The greatest efficiency gains can be achieved through MQTT's increase in information density for each payload message.
    - The most straightforward approach is to reduce the payload size where more data can be transmitted in each payload, which can be achieved through choosing proper compression and package methods based on the type of the data being generated. For instance, protobuf is an efficient way to serialize structured data.
