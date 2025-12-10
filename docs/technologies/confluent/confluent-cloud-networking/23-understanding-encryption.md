# Understanding Encryption

Corporate policies, industry standards, and national and international regulations may all require you to protect the privacy and integrity of the data you handle. Encryption uses mathematical techniques to scramble data so that it is meaningless if observed by someone who lacks the necessary key to decrypt it.

![Encryption](../../../media/Screenshot%202025-12-10%20at%2012.59.22%20AM.png)

## Encryption

There are two main areas that are crucial to protect from attackers:

- Your network traffic to and from clients sometimes referred to as “data in motion”
- The data that is stored in Kafka, sometimes referred to as “data at rest”

Confluent Cloud encrypts your data at rest by default and provides Transport Layer Security (TLS) or TLS 1.2 encryption for your data in motion. In addition to these built-in security features, Confluent Cloud also provides the ability to bring your own key (BYOK) for data at rest, and secure networking options including VPC or VNet peering, AWS PrivateLink and Azure Private Link, AWS Transit Gateway, and Google Cloud Private Service Connect.

For more information on the available secure networking options be sure to check out the [Confluent Cloud Networking Course](https://developer.confluent.io/learn-kafka/confluent-cloud-networking/intro/).

## BYOK

BYOK can be a powerful tool for ensuring the security of your data at rest. It addresses three main concerns for organizations:

1. It allows for encryption at the storage layer and lets a user revoke access to the key at will. This renders any encrypted data stored in the cloud vendors’ drives to be unreadable by them.
2. It helps secure data in a scenario where a server’s drive might be subpoenaed. Without access to the key, the data on the drive is essentially unreadable.
3. It checks a box for security compliance. In a few industries, BYOK is a must-have, including banking and finance, healthcare, and government. For others, it may be a requirement from the InfoSec team.

That said, it’s important to keep in mind that BYOK has some limitations and important considerations:

- It will still allow access to the data by the Confluent and cloud platform provider and site reliability engineers (SREs) and engineering teams as long as access to the key is granted.
- It’s only after the key authorization is revoked that access is lost. If you need to ensure that neither Confluent nor the cloud provider has access to your data, you’ll need to use end-to-end encryption. You can find further information on end-to-end encryption in the Confluent documentation.
- With BYOK, key management relies on the customer. By implementing it, you’re taking some responsibilities over from our fully managed solution. You are responsible for making sure that Confluent has access to the necessary keys. If we don’t, the I/O will fail and the cluster won’t function. You will learn how to secure access in the next module.
- Losing access to your self-managed key means the data is essentially gone too. Neither Confluent nor the cloud platform provider will be able to help you retrieve your self-managed key.
- BYOK can only be implemented when a dedicated cluster is created. If you have a cluster that you want to change over, you will need to spin up a new one with BYOK implemented, and then use the replicator tool to migrate your data.
- BYOK is only available for a Dedicated cluster. The option is not available on a basic or standard cluster.
- Confluent does not support manual rotation of the keys. You can, however, set an automatic key rotation policy for your key management service, and that’s fully supported.

## BYOK Details

BYOK will encrypt all the data associated with that cluster, so your tiered storage, ksqlDB, and the like, will be encrypted with BYOK.

Confluent provides BYOK service at no extra cost. You will see a small charge for API access to the cloud provider’s KMS on your AWS or GPC invoice. At the time of publishing, the cost is somewhere around 3 cents US per 10,000 API calls.

You will not see any significant reduction in performance with BYOK-enabled clusters. You will need to make sure that the keys you provide to Confluent Cloud are symmetric; asymmetric keys won’t work.
