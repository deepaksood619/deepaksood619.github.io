# Secure Public Endpoints

## Secure Public Endpoints

![secure-public-endpoints](https://images.ctfassets.net/gt6dp23g0g38/1Jz1pm797k1HVMCesT6j5V/66e0124472f5b89a27f119a30907088d/secure-public-endpoints.jpg)

If you’re just getting started with Confluent Cloud, you’re probably going to start with a cluster that is accessed over a secure public endpoint.

In fact, it’s quite possible that this is the only network connectivity you’ll ever need—this is a secure production-grade solution that greatly simplifies your architecture.

At a very high level—with a secure public endpoint, you can access your Confluent Cloud cluster from anywhere, in a secure fashion.

## Security Features – Encryption in Transit

![encryption-in-transit](https://images.ctfassets.net/gt6dp23g0g38/3oPwBSVJmiNHaQqLMiB0Pd/517c0f6c64417b4fa77d5e0467c7addf/encryption-in-transit.jpg)

All communication from clients—whether that’s Kafka applications and services, Kafka Connect integrations, stream processing, or even just exploring Kafka with the UI or CLI—is encrypted, using industry-standard TLS encryption. This is the same encryption used when you access your bank account or make a credit card payment online—everything is secured in transit.

## Security Features – AuthN/AuthZ

![AuthN-AuthZ](https://images.ctfassets.net/gt6dp23g0g38/3CumAhJ5trLEQFmQojUfaN/a7e2f35f9de7681368d4855dea9daf85/AuthN-AuthZ.jpg)

Additionally, everything in Confluent Cloud requires authentication—in order to talk to Kafka you have to prove your identity, using an API key and secret, in order to access any data. We can also use your identity to validate that you should have access to a specific set of data.

So unless you have a specific infosec requirement, where you need more complex or advanced network connectivity, using a secure public endpoint may actually be both the best and easiest way to use Confluent Cloud.

## Benefits of Secure Public Endpoints

![benenfits-secure-endpoints](https://images.ctfassets.net/gt6dp23g0g38/4qsm5OrS2YQ6VdZtI1u4lK/f3238227518b236e4067a15ff3fca465/benenfits-secure-endpoints.jpg)

With a secure public endpoint, we’re standing up a Kafka cluster that can be accessed from anywhere.

- Kafka clients and services that are running on premises, on a workstation, or in the cloud, can all access the Kafka cluster, without any special network connectivity.
- For example, if you want to access Kafka from an application running in AWS, you can do that—regardless of where in AWS it’s running, as long as the application can access the Confluent Cloud broker’s public endpoint on the internet.
    - Caveat: Because Kafka uses a TCP wire protocol, and not HTTP or HTTPs, access through an HTTP(s) proxy is not supported—if you’re using a secure public endpoint Confluent Cloud cluster, your Kafka clients have to be able to access the internet without a proxy.
- At the same time, if you’re running services in your datacenter, you can also access Kafka, as long as you have the ability to access the internet (again, without a proxy).

## Architecture: Datacenter and/or Cloud

![Datacenter-and-or-Cloud](https://images.ctfassets.net/gt6dp23g0g38/77LqmIBBezT8WreQQGVstJ/95d727f24e9c10de8865bc4408832acd/Datacenter-and-or-Cloud.jpg)

Let’s expand on this a little bit more. With a secure public endpoint, your Confluent cluster is exposed on a set of public endpoints, securely. You can access it from anywhere you need, whether from a cloud provider network, or from your on-premises network.

## Architecture: Fully Managed Connectors

![fully-managed-connectors](https://images.ctfassets.net/gt6dp23g0g38/6JoE6mOIG9gic16fXSkVsT/c22a0dafdb74e227255fe2ab0786ad43/fully-managed-connectors.jpg)

Secure public endpoints allow clients to connect to Confluent Cloud. But there are also situations in which Confluent Cloud may need to connect back to your network. For example, fully managed connectors.

When you’re using a secure public endpoint, managed connectors run in the Confluent Cloud network. Because managed connectors are going to access your data sources and data sinks, your data sources and data sinks need to be accessible over the internet, just like Confluent Cloud is accessible via secure public endpoints. This can be done in one of two ways:

- If you’re using a SaaS provider data source or data sink, your provider may support exposing your data source directly on the internet. Several common examples of this are AWS S3 or Snowflake.
- If you’re using self-managed data sources or data sinks, you’ll need to work with your network team to expose your data source to the internet in a secure way. For example, you may have a TLS-secured database that you expose on a public DNS name, that can be accessed from the Confluent network.

Also, all of this applies to all Confluent Cloud network architectures. If your data sources and sinks can be exposed on internet endpoints, you can use fully managed connectors, regardless of whether you’re using public endpoints, or one of the other options we discuss later in this course, such as a peering configuration, or a Private Link network.

## Architecture: Self-Managed Connectors

![architecture-self-managed-connectors](https://images.ctfassets.net/gt6dp23g0g38/HzpKQzL80uQWVmD1V3CSE/5b0de0effb664d73e195f90ce6e9c9a2/architecture-self-managed-connectors.png)

If you can’t expose your data sources and sinks to the internet, another option is self-managed connectors. In this architecture, you’ll run a connector in your on-premises network. This is a data integration which lives in your environment.

In the case of a self-managed source connector, you’ll run a data integration in your environment that reads from your data source and pushes (or produces) it up to Confluent Cloud using the Confluent Cloud secure public endpoint.

In the case of a self-managed sink connector, you’ll again run a data integration in your environment, this time one that consumes (or reads) from Confluent Cloud using the Confluent Cloud secure public endpoint and writes to your data sink.

Because these self-managed connectors are running in your environment, this architecture actually works regardless of your network architecture—you can do this with secure public endpoints, peered networks, or even Private Link.

## Why Not Secure Public Endpoints?

![why-not-secure](https://images.ctfassets.net/gt6dp23g0g38/1zfxU0HHk0Pe7RhxZ2t5bJ/3bee6d83f9cf14439505ec3876420389/why-not-secure.jpg)

Here are a few reasons why you wouldn’t be able to use secure public endpoints:

- Infosec/security requirements.
    - In certain environments, services don’t have direct access to the internet. As a reminder, Kafka doesn’t use HTTP, and doesn’t work through an HTTP proxy. So if you aren’t able to access the internet directly, you may end up needing a private endpoint. This often comes from an infosec requirement—certain environments require private network connectivity for everything, and we support that in Confluent Cloud.
- Another situation we occasionally encounter is where customers want to run fully managed connectors; these connectors run in the Confluent network, and in a secure public endpoint environment, these can only access endpoints on the public internet. If you’re trying to read or write from a data source or data sink that’s only accessible from within your network, you may want to consider one of the multiple peering options.
- Note that as an alternative to this, if you’re trying to read or write from a data source or data sink that’s only accessible from within your network, you can choose to run a separate connect Kafka cluster in your datacenter (or cloud account) and configure it to read or write data to your Confluent Cloud cluster. Remember that because we’re using secure public endpoints, your Confluent Cloud cluster can be accessed from anywhere that has access to the internet. With this solution you have two clusters: a local one that runs the connectors, and then connects to the one running in Confluent Cloud.
