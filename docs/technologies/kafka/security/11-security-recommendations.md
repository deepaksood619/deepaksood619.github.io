# Security Recommendations

Before you go, we want to provide you with a couple of general recommendations as well as a security checklist. The checklist won't cover all use cases but it should serve as a useful outline.

## Education

Learn the systems and tools that your organization already uses so that your security team doesn’t have to provide you with a custom solution. This will save setup time now and additional time in the future if you decide to make your Kafka cluster available to more teams in your organization.

## Start with Security in Mind

Securing your Kafka cluster should be a key success metric of your project, rather than an afterthought. It is much easier to start from a secure standpoint in a development environment, rather than to try and add it retroactively to production.

## Checklist

Due to the wide variety of Kafka use cases across industries, it’s impossible to suggest a “do this and you'll never have to worry” solution. However, what follows is a list of items to discuss and have a plan for, and some recommendations that aren’t required but that will help you to start out on the right foot.

### Encrypt the filesystem

- Use an encrypted filesystem and set appropriate ACLs.

### Secure data in transit

- Make sure all traffic to and from your cluster is encrypted using TLS. If your data is particularly sensitive, use end-to-end encryption.
- End-to-end encryption is also recommended if you are using a cloud provider like AWS, Google Cloud, or Azure.

### Set up a system for administering ACLs

- ACLs can quickly become a headache and can introduce security holes if they aren't managed.
- Also make sure you have a plan for decommissioning accounts, either in the event of a breach or in the case of a departing employee.

### Rotate your keys

- This should be done automatically, if possible.

### Dynamically update certificates

- Set your broker certificates to dynamically update before they expire, a standard industry practice that prevents someone from gaining access to all of your data.

### Enable reauthentication

- Set connections.max.reauth.ms to enable reauthentication if you are using SASL, which forces your connections to reestablish their connections and have their credentials verified on an ongoing basis.

### Protect ZooKeeper

- Only your brokers and administrative tools should have access to ZooKeeper, and it should be segmented from other devices on your network; all communication should also be encrypted with TLS.

### Set up and monitor audit logs

- Configure and set up audit logs to track and verify configuration and access to your cluster, as they are one of the best offensive measures you can take to verify and keep your system secure.

### Play, tinker, break things

- Finally, don't be afraid to play around in an environment. Use one of the many Docker-based, fully set up, and configured Kafka clusters from the community or from Confluent to experiment with, and then start over. The more time you spend tinkering, the better prepared you'll be.

Additionally, keep in mind that managed Confluent Cloud removes much of the heavy lifting with respect to ops and security and provides the best cloud Kafka service with enterprise-grade features.
