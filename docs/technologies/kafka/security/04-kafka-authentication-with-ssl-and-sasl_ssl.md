# Kafka Authentication with SSL and SASL_SSL

## Enabling SSL for Kafka

You're likely familiar with SSL from HTTPS websites. When SSL is enabled for a Kafka listener, all traffic for that channel will be encrypted with TLS, which employs digital certificates for identity verification.

### Client-Broker Authentication

When a client opens a connection to a broker under SSL, it verifies the broker's certificate in order to confirm the broker's identity. If it checks out, the client is satisfied, but the broker may also wish to verify the client by certificate, making sure that the `KafkaPrincipal` associated with the connection represents the client’s identity. To ensure that the client’s certificate is checked by the broker, you can set `ssl.client.auth=required`. (Note that you can also set `ssl.client.auth=requested`, which isn't recommended as it only authenticates clients who have a certificate, assigning all others the previously mentioned and problematic ANONYMOUS `KafkaPrincipal`.)

![client-broker-authenticator](https://images.ctfassets.net/gt6dp23g0g38/2yGSnHUgZaEZZZ0lcDUthv/b16b5caab6f586f078fad0488b644588/client-broker-authenticator.jpg)

Since TLS uses certificates, you'll need to generate them and configure your clients and brokers with the appropriate keys and certificates. You will also need to periodically update the certificates before they expire, in order to avoid TLS handshake failures. See the [Kafka documentation](https://kafka.apache.org/documentation/#security) for more details on creating keys and certificates.

Note that by default Kafka clients verify that the hostname in the broker's URL and the hostname in the broker's certificate match. This can be disabled by setting `ssl.endpoint.identification.algorithm` to an empty string on the client, which can be useful in test or dev environments that use self-signed certificates. In production, however, you should always allow hostname verification in order to prevent man-in-the-middle attacks.

### Inter-Broker Authentication

Everything in the previous client-broker authentication section applies to authentication between brokers using SSL. Essentially, the broker initiating the connection functions similarly to the client in the client-broker approach. Use the `inter.broker.listener.name` or `security.inter.broker.protocol` settings to configure listeners for inter-broker communication.

![inter-broker-configuration](https://images.ctfassets.net/gt6dp23g0g38/3HTLaWqQocSd32DICabf9z/a98221403054e33f82df0587bf159886/inter-broker-configuration.png)

## Enabling SASL-SSL for Kafka

SASL-SSL (Simple Authentication and Security Layer) uses TLS encryption like SSL but differs in its authentication process. To use the protocol, you must specify one of the four authentication methods supported by Apache Kafka: GSSAPI, Plain, SCRAM-SHA-256/512, or OAUTHBEARER. One of the main reasons you might choose SASL-SSL over SSL is because you'd like to integrate Kafka, for example, with an existing Kerberos server in your organization, such as Active Directory or LDAP.

![sasl-ssl-kafka](https://images.ctfassets.net/gt6dp23g0g38/5Wg6QMjsyCxBJ1rKJ936qB/12f7a3e3ecbf3ec1ff4de1645946b2b9/sasl-ssl-kafka.jpg)

GSSAPI provides for authentication using Kerberos, PLAIN and SCRAM-SHA-256/512 include username/password mechanisms, and OAUTHBEARER is the machine-to-machine equivalent of single sign-on. Thus keep in mind that apart from SCRAM-SHA-256/512, each of these mechanisms requires integration with third-party servers for production workloads (Kerberos for GSSAPI, a password server for PLAIN, and an OAuth server for OAUTHBEARER). Each will also require time to configure.

## Considerations

- As with security strategies in general, environmental and organizational factors will dictate your choice of protocol and authentication mechanism. SSL is ideally suited for cloud environments while SSL-SASL makes sense for enterprises that already have an authentication server.

- Pay careful attention to your infrastructure, which is likely comprised of many different components across different environments. Use filesystem permissions to restrict access to files containing security information and avoid storing plaintext passwords, including in ZooKeeper (use disk encryption or a secure external file store instead). Also keep in mind that while SASL lets you integrate with lots of external security infrastructure options, these options add to your attack surface, so must also be locked down.

- You should also consider connection management. Because opening a secure connection is an expensive operation, a malicious actor can exploit you by trying to quickly open numerous connections. Use Kafka quotas together with the `connection.failed.authentication.delay.ms` setting to protect against this.

- Finally, be sure to apply rigorous change control procedures when promoting configurations through environments. Loose security settings in test or development environments, such as anonymous users or a lack of certificate hostname verification, can easily be overlooked and inherited by production. Once there, the loose settings can make it hard to diagnose connection and access control issues, or even worse can potentially allow malicious clients into your system.
