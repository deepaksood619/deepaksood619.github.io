# Introduction to Kafka Security

Security is a primary consideration for any system design, and Apache Kafka® is no exception. **Out of the box, Kafka has relatively little security enabled**, so you need a basic familiarity with authentication, authorization, encryption, and audit logs in Kafka in order to securely put your system into production. This course has been created to quickly get you up to speed on what you need to know.

To secure your Apache Kafka-based system, you must formulate your overall strategy according to several factors: your internal corporate policy, the industry or regulatory requirements that govern your data processing capabilities, and finally the environment in which you plan to deploy your solution.

Of course, adding security often brings performance costs. For example, the CPU overhead of encrypting data can be significant when using a high throughput system like Kafka, **up to 30% in some cases**—even with the optimizations that Kafka uses to reduce this cost. On the other hand, you can't focus purely on performance, or you will probably wind up with a poorly protected system.

## Securing Data Streams in Kafka

A good way to conceptualize the parts that need securing is to consider the way that data (i.e., a message) flows through your Kafka system:

![data-flows-kafka](https://images.ctfassets.net/gt6dp23g0g38/3SGirwsGEX9m20dlIPNw0w/86f2b3fef4c4a6b3189d68f8d034193f/data-flows-kafka.jpg)

The producer begins the message's journey by creating and sending it to the cluster. The message is received by the leader broker, which writes the message to its local log file. Then a follower broker fetches the message from the leader and similarly writes it to its local log file. The leader broker updates the partition state in ZooKeeper and finally, a consumer receives the message from the broker.

## How Kafka Security Works

Each step of this data journey requires that a decision be made. For example, the broker authenticates the client to make sure the message is actually originating from the configured producer. Likewise, the producer verifies that it has a secure connection to the broker before sending any messages. Then before the leader broker writes to its log, it makes sure that the producer is authorized to write to the desired topic. This check also applies to the consumer – it must be authorized to read from the topic.

![authorized-read-topic](https://images.ctfassets.net/gt6dp23g0g38/2PKbpTlVaMm4BHJITrmkdZ/24916176493a1c2ac98fa65e61242ad7/authorized-read-topic.jpg)

## Data Security and Encryption

Throughout the system, data should be encrypted so that it can't be read in transit or at rest. Additionally, all operations should be recorded in an audit log so that there is an audit trail in case something happens, or the behavior of the cluster needs to be verified.

![audit-log](https://images.ctfassets.net/gt6dp23g0g38/6LeZvdxH1WuWx9pgMPhtah/8a59b39b3741934101ff1342c02545f9/audit-log.jpg)

In conclusion, you need to choose the security measures for your system according to the corporate, industry, and environmental requirements particular to your scenario. The informational modules presented in this course detail the tools available to you with respect to Kafka and adjacent technologies, and the exercises teach you how to go about implementing them.

## Problems Security is solving

Kafka Security has three components:

### Encryption of data in-flight using SSL / TLS

This allows your data to be encrypted between your producers and Kafka and your consumers and Kafka. This is a very common pattern everyone has used when going on the web. That’s the "S" of HTTPS (that beautiful green lock you see everywhere on the web).

### Authentication using SSL or SASL

This allows your producers and your consumers to authenticate to your Kafka cluster, which verifies their identity. It’s also a secure way to enable your clients to endorse an identity. Why would you want that? Well, for authorization!

### Authorization using ACLs

Once your clients are authenticated, your Kafka brokers can run them against access control lists (ACL) to determine whether or not a particular client would be authorised to write or read to some topic.

[Introduction to Apache Kafka Security 🔒 | by Stéphane Maarek | Medium](https://medium.com/@stephane.maarek/introduction-to-apache-kafka-security-c8951d410adf)
