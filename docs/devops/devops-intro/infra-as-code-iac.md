# Infra as Code IaC

Infrastructure as Code (IaC) is a paradigm that manages and tracks infrastructure configuration in files rather than manually or graphical user interfaces. This allows for more scalable infrastructure configuration and more importantly allows for transparent tracking of changes through usually versioning system

Configuration management systems are software systems that allow managing an environment in a consistent, reliable, and secure way.

By using an optimized domain-specific language (DSL) to define the state and configuration of system components, multiple people can work and store the system configuration of thousands of servers in a single place.

## History

CFEngine was among the first generation of modern enterprise solutions for configuration management.

Their goal was to have a reproducible environment by automating things such as installing software and creating and configuring users, groups, and responsibilities.

Second generation systems brought configuration management to the masses. While able to run in standalone mode, Puppet and Chef are generally configured in master/agent mode where the master distributes configuration to the agents.

Ansible is new compared to the aforementioned solutions and popular because of the simplicity. The configuration is stored in YAML and there is no central server. The state configuration is transferred to the servers through SSH (or WinRM, on Windows) and then executed. The downside of this procedure is that it can become slow when managing thousands of machines.

## Orchestration

A common orchestration solution that is cloud-provider-agnostic is Terraform. While it is closely tied to each cloud, it provides a common state definition language that defines resources (like virtual machines, networks, and subnets) and data (which references existing state on the cloud.)

## VPC or VNet

Cloud providers allow fine grained control over the network plane for isolation of components and resources. In general there are a lot of similarities among the usage concepts of the cloud providers. But as you go into the details there are some fundamental differences between how various cloud providers handle this segregation.

In Azure this is called a Virtual Network (VNet), while AWS and Google Cloud Engine (GCE) call this a Virtual Private Cloud (VPC).

These technologies segregate the networks with subnets and use non-globally routable IP addresses.

Routing differs among these technologies. While customers have to specify routing tables themselves in AWS, all resources in Azure VNets allow the flow of traffic using the system route.

Security policies also contain notable differences between the various cloud providers.

## Tools

- [Terraform](devops/terraform/readme.md)
- CloudFormation
- Ansible
- [Terratest \| Automated tests for your infrastructure code.](https://terratest.gruntwork.io/)
- [GitHub - pulumi/pulumi: Pulumi - Infrastructure as Code in any programming language 🚀](https://github.com/pulumi/pulumi)
	- [Pulumi - Infrastructure as Code in Any Programming Language](https://www.pulumi.com/)
	- [OpenTofu vs. Terraform \| Pulumi Docs](https://www.pulumi.com/docs/iac/concepts/vs/terraform/opentofu/)
- [System Initiative](https://www.systeminit.com/)
	- [System Initiative is the Future](https://www.systeminit.com/blog/system-initiative-is-the-future)
	- [System Initiative Getting Started Tutorial - YouTube](https://www.youtube.com/watch?v=7vrIJmP49IE)
	- [GitHub - systeminit/si: The System Initiative software](https://github.com/systeminit/si)
	- [Getting Started \| System Initiative Docs](https://docs.systeminit.com/tutorials/getting-started)
	- [Getting Started \| System Initiative Docs](https://docs.systeminit.com/tutorials/getting-started)
- [AI-Driven DevOps Platform \| Scoutflo - Fast, Secure Infrastructure Delivery](https://scoutflo.com/)
	- Bugs, not production ready
- [Hybrid Cloud Management Solutions from Morpheus and Dell Technologies](https://morpheusdata.com/hybrid-cloud-solutions/aws/)
	- [A Technical Introduction to Morpheus Data Hybrid Cloud Management - YouTube](https://www.youtube.com/watch?v=lBZnPsWJEGs&ab_channel=TechFieldDay)
	- [What is Morpheus? A Whiteboard Platform Overview - YouTube](https://www.youtube.com/watch?v=BExbacAhoGc&ab_channel=MorpheusData%2CrecentlyacquiredbyHPE)

### Digital Rebar

Digital Rebar (aka DRP) is a self-managed hardware-neutral data center automation platform for provisioning and managing [infrastructure as code](https://rackn.com/2020/03/24/infrastructure-as-code-repost-devops-com/)(IaC). It was designed with a cloud-native architecture focus and integrates deeply with API driven configuration tools like Ansible and Terraform. It fully replaces bare metal provisioners like [Cobbler](https://rackn.com/products/enterprise/cobbler/), [Foreman](https://rackn.com/products/enterprise/foreman/) or [MaaS](https://rackn.com/products/enterprise/maas/).

#### Key Features

##### Platform Capabilities

- API-driven infrastructure-as-code automation
- Multi-boot workflows using composable and reusable building blocks
- Event driven actions via Websockets API
- Extensible Plug-in Model for public, vendor and internal enhancements
- Dynamic Workflow Contexts (allows using APIs when agents cannot be run)
- Distributed Multi-Site Management
- Integrated Secure Boot, SSO and Highly Available options.
- Supports ALL orchestration tools including Chef, Puppet, Ansible, SaltStack, Bosh, Terraform, etc

##### Open Ecosystem Plugins

- RAID, IPMI, Redfish, and BIOS Configuration
- Cloud-like pooling capabilities
- Classification engine for automated workflow
- https://rackn.com/rebar
- Foreman - Manage Proc file-based applications - https://github.com/ddollar/foreman

## References

https://www.toptal.com/devops/interview-questions
