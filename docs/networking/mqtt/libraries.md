# Libraries

## MQTT BROKER IMPLEMENTATIONS

| **BROKER** | **DESCRIPTION** |
|---|---|
| **mosquitto** | [Opensource] mosquitto is an open source MQTT broker written in C. It fully supports MQTT 3.1 and MQTT 3.1.1 and is very lightweight. Due to its small size, this broker can be used on constrained devices. |
| **Apache ActiveMQ** | ActiveMQ is an open-source multi-protocol message broker with a core written around JMS. It supports MQTT and maps MQTT semantics over JMS. |
| **HiveMQ** | [Enterprise] HiveMQ is a scalable, high-performance MQTT broker suitable for mission critical deployments. It fully supports MQTT 3.1 and MQTT 3.1.1 and has features like websockets, clustering, and an open-source plugin system for Java developers. |
| **RabbitMQ** | [Opensource] RabbitMQ is a scalable, open-source message queue implementation, written in Erlang. It is an AMQP message broker but has an MQTT plugin available. Does not support all MQTT features (e.g. QoS 2). |
| **mosca** | mosca is an open-source MQTT broker written in Node.js. It can operate as standalone or be embedded into any Node. js application. Does not implement all MQTT features (e.g. QoS 2). |
| **RSMB** | RSMB is a message broker by IBM available for personal use. It is written in C and is one of the oldest MQTT broker implementations available. |
| **WebsphereMQ / IBM MQ** | Websphere MQ is a commercial message-oriented middleware by IBM. Fully supports MQTT. |
| **emqtt** | [Opensource, enterprise] Erlang MQTT Broker is a distributed, massively scalable, highly extensible MQTT message broker written in Erlang/OTP. |
| **VerneMQ** | [Opensource] VerneMQ is a high-performance, distributed MQTT broker. It scales horizontally and vertically on commodity hardware to support a high number of concurrent publishers and consumers while maintaining low latency and fault tolerance. VerneMQ is the reliable message hub for your IoT platform or smart products. |

<https://blog.autsoft.hu/choosing-an-mqtt-broker-for-your-iot-project>

<https://en.wikipedia.org/wiki/Comparison_of_MQTT_Implementations>

Public mqtt brokers for testing - <https://github.com/mqtt/mqtt.github.io/wiki/public_brokers>

## MQTT Client Libraries

| LIBRARY                | LANGUAGE                                 | DESCRIPTION                                                                                                                |
|--------------|------------------|-----------------------------------------|
| Eclipse Paho           | C, C++, Java, Javascript, Python, Go, C# | Paho clients are among the most popular client library implementations.                                                    |
| M2MQTT                 | C#                                       | M2MQTT is an MQTT client library for .NET and WinRT.                                                                       |
| Fusesource MQTT Client | Java                                     | The Fusesource MQTT client is a Java MQTT client with 3 different API styles: Blocking, Future-based, and Callback- based. |
| Machine Head           | Clojure                                  | Machine Head is an MQTT client for Clojure. It implements the basic MQTT 3.1 features.                                     |
| MQTT.js                | Javascript                               | MQTT.js is an MQTT client library for Node.js and web applications, available as a npm module.                             |
| ruby-mqtt              | Ruby                                     | ruby-mqtt is an MQTT client available as a Ruby gem. It does not support QoS > 0.                                         |

## MQTT Client Tools

| **CLIENT TOOL** | **OS** | **DESCRIPTION** |
|---|---|---|
| **MQTT.fx** | Windows, Linux, MacOSX | MQTT.fx is a JavaFX application with a clean interface and advanced features like scripting, broker statistics, and templates. |
| **mqtt-spy** | Windows, Linux, MacOSX | mqtt-spy is a JavaFX application that is easy to use and focused on analyzing MQTT subscriptions. There is also a CLI-based daemon application available, which does not need a graphic interface.
| **MQTT Inspector** | iOS | MQTT Inspector is an iOS app that allows detailed analysis of MQTT traffic. Use of the publish/subscribe message types, and complex filterings of received messages, are available. |
| **HiveMQ Websocket Client** | Web browser | The HiveMQ websocket client runs on any modern browser and connects to MQTT brokers via websockets. Very useful if it’s not possible to install a client application on the machine in use, as well as for quick MQTT tests. |
| **MyMQTT** | Android | MyMQTT is an MQTT test application for Android devices. It allows the creation of templates for publishing, which makes it very useful for testing MQTT "on-the-go." |
| **MQTTLens** | Google Chrome | MQTTLens is a Chrome Webapp that can connect to MQTT brokers via TCP and over websockets. This app is easy to grasp and equipped with all the basic MQTT features needed for quick tests. |
| **mosquitto_pub / mosquitto_sub** | Linux, Windows, MacOSX | mosquitto_pub and mosquitto_sub are the best options for publish/subscribe on servers without GUI. It is also great for MQTT task automation. |
