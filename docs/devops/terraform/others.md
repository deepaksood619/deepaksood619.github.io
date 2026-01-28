# Others

## Tools

[Terraform stacks, explained](https://www.hashicorp.com/blog/terraform-stacks-explained)

### Atlantis

- [Terraform Pull Request Automation | Atlantis](https://www.runatlantis.io/)
- [How to setup Atlantis for Infrastructure GitOps - YouTube](https://www.youtube.com/watch?v=uhHt45TJpok)
- [How to run GitOps process with Run Atlantis - YouTube](https://www.youtube.com/watch?v=IbL9DLAc__M)
- [How to setup GitOps with terragrunt and Atlantis - YouTube](https://www.youtube.com/watch?v=9OIaVCkiK-s)

### Terragrunt

Terragrunt is a thin wrapper that provides extra tools for keeping your configurations DRY, working with multiple Terraform modules, and managing remote state.

[Terragrunt | Terraform wrapper](https://terragrunt.gruntwork.io/)

Terraform Modules - [GitHub - asyrafnorafandi/terraform-modules-template: This repository is to be used as a Terraform Module Boilerplate to quickly get started in writing your own Terraform Modules](https://github.com/asyrafnorafandi/terraform-modules-template)

### Gruntwork

Your entire infrastructure. Defined as code. In about a day

[Gruntwork | DevOps as a Service](https://gruntwork.io/)

## Others

- Puppet
- AWS CloudFormation
- [Terratest \| Automated tests for your infrastructure code.](https://terratest.gruntwork.io/)

### OpenTofu

The open source infrastructure as code tool.

Previously named OpenTF, OpenTofu is a fork of Terraform that is open-source, community-driven, and managed by the Linux Foundation.

OpenTofu is an OSS tool for building, changing, and versioning infrastructure safely and efficiently. OpenTofu can manage existing and popular service providers as well as custom in-house solutions.

The key features of OpenTofu are:

- **Infrastructure as Code**: Infrastructure is described using a high-level configuration syntax. This allows a blueprint of your datacenter to be versioned and treated as you would any other code. Additionally, infrastructure can be shared and re-used.
- **Execution Plans**: OpenTofu has a "planning" step where it generates an execution plan. The execution plan shows what OpenTofu will do when you call apply. This lets you avoid any surprises when OpenTofu manipulates infrastructure.
- **Resource Graph**: OpenTofu builds a graph of all your resources, and parallelizes the creation and modification of any non-dependent resources. Because of this, OpenTofu builds infrastructure as efficiently as possible, and operators get insight into dependencies in their infrastructure.
- **Change Automation**: Complex changesets can be applied to your infrastructure with minimal human interaction. With the previously mentioned execution plan and resource graph, you know exactly what OpenTofu will change and in what order, avoiding many possible human errors.

#### Links

- [OpenTofu](https://opentofu.org/)
- [GitHub - opentofu/opentofu: OpenTofu lets you declaratively manage your cloud infrastructure.](https://github.com/opentofu/opentofu)
- [OpenTofu Joins CNCF: New Home for Open Source IaC Project - The New Stack](https://thenewstack.io/opentofu-joins-cncf-new-home-for-open-source-iac-project/)

## Terraform vs CloudFormation

For your IaC project on AWS, choose CloudFormation, because:

1. CloudFormation makes a distinction between code (i.e., templates) and instantiations of the code (i.e., stacks). In Terraform, there is no such distinction.
2. Terraform doesn't handle basic dependency management very well.

https://www.toptal.com/terraform/terraform-vs-cloudformation
