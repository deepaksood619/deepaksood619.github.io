# Which Networking Option Best Fits Your Requirements?

## What, Where, How?

![best-networking-option](https://images.ctfassets.net/gt6dp23g0g38/5PFNaIBQigOWqdq0qiDmxE/981391de69034468de7d064806689685/best-networking-option.jpg)

In the previous modules you learned about various networking architectures for connecting to Confluent Cloud. You should now be better prepared to decide which best matches your specific requirement. As you design a network architecture for Confluent Cloud, you need to keep in mind the data flow, which comes down to three things:

- What services are connecting to Confluent Cloud—what clients are you running, what replication do you have to manage, and where does your data come from and go?
- Where do these services live? Are they running on-premises in a datacenter? Are they running in a cloud provider (in the same region, or a different region, or even in a different cloud provider)? Do you have to access Confluent Cloud from a corporate or home office network?
- How are you connecting to Confluent Cloud? The options are summarized on the next page.

## Connectivity Options and Trade-Offs

![connectivity-options-tradeoffs](https://images.ctfassets.net/gt6dp23g0g38/015UkjpGlEMcFUK03tyqZC/fe6c44adbfba2e1114eb526947b97274/connectivity-options-tradeoffs.jpg)

Each of the cloud networking options have different security behaviors, and varying levels of ease of use and access.

With secure public endpoints, you can access your Confluent Cloud cluster from anywhere. It’s easy to set up, and can be used for clients and services that span from on-premises environments to any private or public cloud.

With VPC or VNet direct peering, your cluster is only accessed over the peering connection. It requires a /16 CIDR range for the Confluent network, and provides bidirectional connectivity from your cloud network to the Confluent Cloud network. This allows managed connectors to access your private network data sources and data sinks.

AWS Transit Gateway builds on a peering network. It only works in AWS, but it removes the requirement for 1:1 peering connections. It also makes connectivity to cloud environments, or even your datacenter, much easier.

Finally, Private Link is a one-way connection that allows your clients to access Confluent Cloud, but not the other way around. It doesn’t require a /16 CIDR range, but it does require a custom zone in your DNS infrastructure. Also, because it uses just a set of endpoints, any client that can access the VPC or VNet where the private endpoints reside can access Confluent Cloud.

## What Connects with Confluent Cloud?

![what-connects-with-confluent-cloud](https://images.ctfassets.net/gt6dp23g0g38/5D6etJe7slzcaeGC00yzF5/e0365a27599d3cde89ce6607972b6bde/what-connects-with-confluent-cloud.jpg)

To sum it all up, this is what Confluent Cloud looks like from a network architecture perspective.

We have the control plane, which is always accessed over the internet, and is used for provisioning, management, and monitoring.

Most importantly, we have the data plane, which has the Internet-accessible schema registry, as well as your “Confluent Network”, which can be accessed over a secure public endpoint, over a peering connection (either directly, or through a transit gateway), or over a Private Link connection.
