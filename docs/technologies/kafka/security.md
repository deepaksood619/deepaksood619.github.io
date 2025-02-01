# Security

With a standard Kafka setup, any user or application can write any messages to any topic, as well as read data from any topics.

## Problems Security is solving

Kafka Security has three components:

### Encryption of data in-flight using SSL / TLS

This allows your data to be encrypted between your producers and Kafka and your consumers and Kafka. This is a very common pattern everyone has used when going on the web. That’s the "S" of HTTPS (that beautiful green lock you see everywhere on the web).

### Authentication using SSL or SASL

This allows your producers and your consumers to authenticate to your Kafka cluster, which verifies their identity. It’s also a secure way to enable your clients to endorse an identity. Why would you want that? Well, for authorization!

### Authorization using ACLs

Once your clients are authenticated, your Kafka brokers can run them against access control lists (ACL) to determine whether or not a particular client would be authorised to write or read to some topic.

[Introduction to Apache Kafka Security 🔒 | by Stéphane Maarek | Medium](https://medium.com/@stephane.maarek/introduction-to-apache-kafka-security-c8951d410adf)
