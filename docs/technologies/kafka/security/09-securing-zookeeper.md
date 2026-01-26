# Securing ZooKeeper

If you've chosen to run Kafka with ZooKeeper, you will also need to consider how to secure ZooKeeper, as it stores a lot of important cluster configuration and security information, such as ACLs, the list of a cluster's broker members, and partition metadata, and if you are using Kafka's SASL/SCRAM provider for authorization—encrypted versions of user passwords. (Note that if you are using KRaft, you can skip this module entirely.)

Similar to Kafka, there are two ways to secure ZooKeeper: SSL and SASL. No matter which one you use, you’ll need to update your broker configuration with `zookeeper.set.acl=true`, which makes sure that secure ACLs in ZooKeeper are associated with the metadata in ZooKeeper. These ACLs specify that the metadata can be read by everyone but only changed by the brokers. Sensitive metadata, such as SCRAM credentials, is an exception: it can only be read by the brokers by default.

## SSL

SSL client authentication in ZooKeeper uses certificates to authenticate ZooKeeper to brokers and vice versa. There is one difference, however, between the usual Kafka SSL authentication and the SSL here: each broker (as well as CLI tool) accessing ZooKeeper must use the same certificate “Distinguished Name” when accessing it. A certificate’s Distinguished Name is part of the identifying information used to create a certificate. Essentially, the ZooKeeper ACL includes its Distinguished Name and will only authorize brokers with the same one (it will authenticate brokers with other Distinguished Names but will only authorize brokers with the correct one).

A Distinguished Name usually includes the hostname of the entity to which it has been issued, so as to allow the server (ZooKeeper in this case) to verify the hostname. So if you have multiple brokers on multiple machines (i.e., with different hostnames), you may find that they are unable to access ZooKeeper.

The solution to this problem is either to use a wildcard certificate (which includes a wildcard in the hostname), or to use a certificate with a single hostname plus a subject alternative name (SAN), which includes a list of all of the hostnames of the brokers in the cluster. The single hostname will be used in the ACL, while the SAN allows ZooKeeper to verify the actual hostname of the broker.

## SASL (Simple Authentication and Security Layer)

Similar to Kafka, ZooKeeper supports SASL, which you are most likely to use if you need to integrate with an existing Kerberos server, such as Active Directory. For SASL, you should ensure that connections from Kafka brokers to ZooKeeper are encrypted with TLS but not authenticated by setting `ssl.clientAuth=none` in your ZooKeeper configuration. This lets clients connect to ZooKeeper using a TLS-encrypted connection but without a certificate. With SASL for Kerberos, the problem of using the same identity for all brokers for ACL and authorization purposes is easily solved, you just have to make sure that the ZooKeeper client file on each broker is configured with the same principal.

## SSL vs. SASL

SSL has some administrative overhead but is the most popular and is probably the easiest option to use. You also have to periodically update this information before the certificates expire to prevent TLS handshake failures. SASL of course makes sense if you need to integrate with an existing Kerberos server.

You can actually use both, however, use SSL for authentication and use SASL to determine access and grant authorization. This has the benefit of clients not needing to use the same Distinguished Name and thus you won't have to set a unique subject alternative name (SAN).

SSL + SASL

- Able to use either identity
- No need to use same distinguished name
- Ability to use hostnames in the distinguished name

## Network Segmentation

Although the measures we've discussed in this module will help secure ZooKeeper, a final recommendation is to use **network segmentation**. This way only your brokers and administrative tools will have access to ZooKeeper.
