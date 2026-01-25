# Encryption

Encryption uses mathematical techniques to scramble data so that it is unreadable by those who don’t have the right key, and it also protects the data’s integrity so that you can determine if it was tampered with during its journey.

## Client/Cluster

The simplest encryption setup consists of encrypted traffic between clients and the cluster, which is important if clients access the cluster through an unsecured network such as the public internet:

![client-cluster-encryption](https://images.ctfassets.net/gt6dp23g0g38/6rPRkMApd6TiC6sik2WLdq/86ef2c77ca7dc20dee89d6e710f735df/client-cluster-encryption.jpg)

## Client/Cluster – Inter-Broker – Broker/ZooKeeper

The next thing to consider is encrypting traffic between brokers, and between brokers and ZooKeeper. Even private networks can be breached, so you want to be sure the traffic on your private network is resistant to eavesdroppers or anyone who wishes to tamper with it while it is in motion.

![inter-broker-zookeeper](https://images.ctfassets.net/gt6dp23g0g38/5Luln4g06rJrrAcg7mz8Vg/3154ce1a91c49cfce5600ffd29d51373/inter-broker-zookeeper.jpg)

## Client/Cluster – Inter-Broker – Broker/ZooKeeper – Data at Rest

Another thing to consider is your data at rest, which will be extensive as Kafka makes data durable by writing to disk. So you need to think about encrypting your static data, to protect it from anyone who gains unauthorized access to your filesystem.

![data-at-rest](https://images.ctfassets.net/gt6dp23g0g38/4DKr2o2rHRzoCpm9l1CGww/ef593b94bfb394ea126a2ee9093a3c7c/data-at-rest.jpg)

## Other Data Leaks

Finally, there are other ways users could gain unauthorized access to your data, including data residing in memory that could appear in a heap dump, as well as data in logs.

## Encryption Strategies

Next, we will cover the three encryption strategies, in turn, beginning with data in transit, the only type for which Kafka provides direct support.

### Encrypting Data in Transit with SSL

An out-of-the-box Kafka installation doesn’t use encryption, but rather sends everything in the easily intercepted plaintext. Fortunately, as we discussed in the Authentication Basics module, it’s relatively simple to implement SSL or SASL_SSL in order to TLS encrypt data in transit. For this, you'll need a self-signed certificate (primarily for internal environments) or one signed by a certificate authority (a must for production environments).

In the Authentication with SSL and SASL_SSL module, we demonstrated how, in addition to brokers providing certificates to clients, you can also require that clients provide certificates to brokers. This is accomplished by enabling the SSL security protocol and setting `ssl.client.auth=required` in the broker config, and it is sometimes referred to as mutual TLS or mTLS. Conversely, if all you want to do is encrypt and you don’t want to check client certificates (which will reduce the scope of your certificate management duties), you can set set `ssl.client.auth=none`.

TLS uses private-key certificate pairs, and each broker needs its own. Each client does too—if client authentication is enabled. Note that if you want to enable TLS for inter-broker communication, add `security.inter.broker.protocol=SSL` to your broker properties file.

You should keep in mind, that enabling TLS can have a performance impact on your system, because of the CPU overhead needed to encrypt and decrypt data.

### Encrypting Data at Rest

Apache Kafka doesn't provide support for encrypting data at rest, so you'll have to use the whole disk or volume encryption that is part of your infrastructure. Public cloud providers generally provide this, for example, AWS EBS volumes can be encrypted with keys from AWS Key Management Service. For on-premises solutions, you might consider platforms like Vormetric or Gemalto (Thales).

### End-to-End Encryption

By this point in the course, you’ve likely set up some certificates, encrypted your data at rest, and set strict filesystem permissions. However, you may wish to go even further and encrypt your data from start to finish, so that it will show as encrypted even in places like heap dumps and logs. For this, you'll need end-to-end encryption, which in the context of Kafka, uses a key management system that encrypts/decrypts when serialization/deserialization happens. End-to-end encryption provides the greatest amount of security since brokers never see the unencrypted contents of messages:

![key-management-service](https://images.ctfassets.net/gt6dp23g0g38/3k9GOOQfEkf4wxqbkZOuCH/cc216e8d58666a4ea8dc671516591b3d/key-management-service.jpg)

In addition to end-to-end encryption, you should add a **key rotation policy**, since clients will come and go and changes will be made to your system. This ensures that in any security breach the number of compromised messages will be limited to those from the time since your keys were rotated.
