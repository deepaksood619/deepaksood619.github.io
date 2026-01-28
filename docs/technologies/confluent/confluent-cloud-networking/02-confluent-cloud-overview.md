# Confluent Cloud Overview

## What Connects with Confluent Cloud?

![what-connects-with-confluent-cloud](https://images.ctfassets.net/gt6dp23g0g38/5D6etJe7slzcaeGC00yzF5/e0365a27599d3cde89ce6607972b6bde/what-connects-with-confluent-cloud.jpg)

Let’s talk about Confluent Cloud.

There are two main ways to interact with Confluent Cloud—through our “data plane” and through our “control plane.” The data plane is where your data lives in Confluent Cloud. The control plane is where a lot of management, maintenance, and operations take place.

### Data Plane

Let’s look at the data plane first, which is made up of the services that actually store your business data in Confluent Cloud. This data falls into two categories:

- In the data plane, we run a fully managed Schema Registry, which is accessed over the internet.
- Also in the data plane, we have a concept referred to as “Confluent network.” This consists of the Confluent cluster itself, as well as any fully managed ksqlDB instances or connectors you may be running. These are the services that are affected by your network configuration—choosing one of the options we describe later in this course, such as a secure public endpoint, or a peering connection, or a Private Link connection, will all affect these services.
- Most resources in Confluent Cloud are accessed by something in your environment—this is always one-way communication. For example, your Kafka client apps will access the Confluent cluster using the Kafka wire protocol and access the Schema Registry using https.
- Managed connectors are a little bit different. These are integrations that will need access to your data sources and data sinks. If you want to run fully managed connectors, the network will have to be configured so that the connectors running in the Confluent network can access your data services.

### Control Plane

Now let’s look at the control plane where a lot of the management, maintenance, and operations take place. Through these internet-accessible endpoints, you can:

- Provision and manage Confluent Cloud and all of the resources in the data plane
- Monitor the health and performance of your Confluent Cloud resources
- Track access to Confluent Cloud resources via audit logs

One quick thing to call out—in order to see data in a Confluent Cloud UI, you need access to both the data plane and the control plane. If you want to read or write data into a Kafka topic in the Confluent UI, for example, you’ll need to run your client (which is usually a browser) somewhere that has access to both the Confluent data plane and Confluent control plane.

## Enterprise Cloud Deployment Patterns

![cloud-deployment-patterns](https://images.ctfassets.net/gt6dp23g0g38/1STMYXl3XGLmFl8gO6h0iI/0351ee080a2040486f847c6b7a7536ca/cloud-deployment-patterns.jpg)

Before we delve into the details of cloud networking options, it will help to go over some of the topologies that are seen as enterprises expand into the cloud. Your organization may have a topology similar to one of these:

- **Topology A** can be construed as a one-time migration or a steady state condition. The steady state use case is where data from on premises is continually sent to the cloud.
- With **Topology B** data is sent in both directions between on-premises and cloud deployments.
- **Topology C** captures a scenario where datacenters cater to local markets and the cloud installations are used to aggregate the data either for global views or global features.
- **Topology D** involves multi-region or multicloud deployments for business continuity disaster recovery (BCDR) or for cloud-agnostic platform deployments. Avoiding cloud lock-in and vendor management are other reasons cited for multicloud deployments. Additionally mergers and acquisitions may force the adoption and maintenance of multicloud footprints as well.

## What, Where, How?

![what-where-how](https://images.ctfassets.net/gt6dp23g0g38/3ZpiR7Db31OeWtn3RFdjkk/522f0d6e32405aa9d3aa71948561be9f/what-where-how.jpg)

As you make decisions around your network architecture, here are the things you should be thinking about:

First, what are we connecting?

- What types of clients, applications, and services are going to be interacting with Confluent Cloud?
- Do we have to worry about multicloud or multi-region architectures? How are we going to handle replication?
- What type of data infrastructure are we going to be integrating with Confluent? Do we have self-hosted data sources or sinks? What about third-party data SaaS or PaaS providers?

Next, where are we connecting from? Are our clients running on premises? In the cloud? Do we have users that need to be able to access from corporate networks or even home offices? Do we need to be able to access data across clouds?

Last, how do we want to connect to Confluent Cloud? Do we have requirements for private networking?

As you can see, there are lots of different permutations of what, where, and how to consider. The dotted lines in the image show one such permutation: you have source data in a local datacenter that you want to connect to Confluent Cloud, and Private Link is the preferred networking option after considering all factors.

## Confluent Cloud Connectivity Options

![Confluent-Cloud-Connectivity-Options](https://images.ctfassets.net/gt6dp23g0g38/1m7aIJcDlXozP3GFYMTW2F/2299c50baf43bfc87586c95ae54f2387/Confluent-Cloud-Connectivity-Options.jpg)

What are the connectivity options? At a high level, we have these four:

1. **Secured public endpoints**
    - Accessing Confluent Cloud via secure public endpoints—these are public IP addresses that are accessed over the internet
    - TLS v1.2 data encryption in transit
2. **VPC/VNet peering**
    - Directly connect (or peer) the Confluent network with your cloud network
    - Traffic never traverses the public backbone of a cloud provider or public internet
3. **AWS Transit Gateway**
    - In AWS, extension of peering is where the Confluent network is peered to a Transit Gateway, which is basically a cloud router
    - Connects multiple VPCs and remote networks using a single gateway
4. **AWS/Azure Private Link**
    - One-way communication between your network and Confluent Cloud
    - Only allows connections to be initiated from customer VPC/VNet toward Confluent Cloud

Secure public endpoints are the easiest, default way of connecting. VPC peering is common across all public cloud providers, but comes with some drawbacks. Private Link and Transit Gateway provide more powerful capabilities, but aren’t available in all providers.
