# Kafka Authentication Basics

One way that Kafka provides security is through built-in authentication. Similar to checking an ID, authentication is the act of verifying the identity of an entity requesting access to a system component. In a Kafka-based system, there are many different interactions that begin with participants authenticating the components with which they are communicating.

For example, when a connection is established between a client (a user, application, or service) and a broker, each side of the connection will usually wish to verify the other. The same holds true when two brokers connect—each may verify the other. A final authentication scenario is a broker accessing ZooKeeper, whereby the broker may be required to authenticate before being allowed to access sensitive cluster metadata.

![kafka-authentication](https://images.ctfassets.net/gt6dp23g0g38/52QdRSvoyTGzFRoWqBQqbW/ccacd458236c96683253c50321d23898/kafka-authentication.jpg)

## KafkaPrincipal

Internally in Kafka, a client's identity is represented using a `KafkaPrincipal` object, or principal. So, for example, if you connect to Kafka and authenticate with a username and password, the principal associated with the connection will represent your username.

Your principal is assigned your authorizations in the target system, as we will learn in the Authorization module, and it is also used to log details of any permissible operation you perform—as we will learn in the Audit Logs module.

![kafkaprincipal](https://images.ctfassets.net/gt6dp23g0g38/42KafqureH7lTVyvb6ndoM/c4af1b4f77b81e6163004de4df2fdaca/kafkaprincipal.jpg)

Note that all requests are assigned a principal, even if authentication hasn't been enabled for a connection. In this case, the principal associated with the connection would be `ANONYMOUS`, and granting access to this type of user, particularly in a production environment, should generally be avoided.

## Configuring Authentication: Listeners and Security Protocols

You can configure authentication for client-broker communication and broker-broker communication independently, but the available authentication mechanisms are the same. Essentially, when configuring the broker, you specify listeners, which determine the hostname or IP address and port that can be used to reach the broker. Each listener also specifies the security protocol needed to authenticate, whether SSL or SASL_SSL. Note that a broker can be configured with more than one listener, i.e., it can use various address/port/security protocol combinations.

![listener-security](https://images.ctfassets.net/gt6dp23g0g38/cFiBBzYkUFBfqBhQecm9s/4e25ab599a3e0577c371bb3a319fa350/listener-security.jpg)

The following broker configuration snippet specifies three listeners for a broker: an external network listener, an internal listener, and an inter-broker listener (the inter-broker and internal listeners are configured to use SSL, the external listener SASL_SSL):

```ini
listeners=EXTERNAL://:9092,INTERNAL://10.0.0.2:9093,BROKER://10.0.0.2:9094
advertised.listeners=EXTERNAL://broker1.example.com:9092,INTERNAL:// broker1.local:9093,BROKER://broker1.local:9094
listener.security.protocol.map=EXTERNAL:SASL_SSL,INTERNAL:SSL,BROKER:SSL
inter.broker.listener.name=BROKER
```

Relatedly, here is a config snippet for a client, specifying that SASL_SSL should be used to communicate with the listed bootstrap servers:

```ini
security.protocol=SASL_SSL
bootstrap.servers=broker1.example.com:9092,broker2.example.com:9092
```
