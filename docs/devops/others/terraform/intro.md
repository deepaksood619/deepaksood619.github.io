# Terraform

Declarative Programming tool for automating infrastructure resource creation

Terraform enables you to safely and predictably create, change, and improve infrastructure. It is an open source tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.

Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions.

Configuration files describe to Terraform the components needed to run a single application or your entire datacenter. Terraform generates an execution plan describing what it will do to reach the desired state, and then executes it to build the described infrastructure. As the configuration changes, Terraform is able to determine what changed and create incremental execution plans which can be applied.

The infrastructure Terraform can manage includes low-level components such as compute instances, storage, and networking, as well as high-level components such as DNS entries, SaaS features, etc.

## Key Features

- **Infrastructure as Code**

Infrastructure is described using a high-level configuration syntax. This allows a blueprint of your datacenter to be versioned and treated as you would any other code. Additionally, infrastructure can be shared and re-used.

- **Execution Plans**

Terraform has a "planning" step where it generates an execution plan. The execution plan shows what Terraform will do when you call apply. This lets you avoid any surprises when Terraform manipulates infrastructure.

- **Resource Graph**

Terraform builds a graph of all your resources, and parallelizes the creation and modification of any non-dependent resources. Because of this, Terraform builds infrastructure as efficiently as possible, and operators get insight into dependencies in their infrastructure.

- **Change Automation**

Complex changesets can be applied to your infrastructure with minimal human interaction. With the previously mentioned execution plan and resource graph, you know exactly what Terraform will change and in what order, avoiding many possible human errors.

## What is Terraform?

Terraform is a tool which makes it easy to write version-controlled infrastructure code. You can use it to orchestrate the infrastructure on more than 100 different service providers like AWS, Alicoud, GCP, Azure, OpenStack and many more.

## Is Terraform a language?

No. Terraform is a tool, which in turn uses Hashicorp Configuration Language (HCL) to describe your infrastructure as a code. HCL is a declarative language, defining the desired state and not the steps needed to be there.

<https://github.com/hashicorp/hcl>

## Workflows

A simple workflow for deployment will follow closely to the steps below. We will go over each of these steps and concepts more in-depth throughout this track, so don't panic if you don't understand the concepts immediately.

- **Scope -** Confirm what resources need to be created for a given project.

- **Author -** Create the configuration file in HCL based on the scoped parameters

- **Initialize -** Runterraform initin the project directory with the configuration files. This will download the correct provider plug-ins for the project.

- **Plan & Apply -** Runterraform planto verify creation process and thenterraform applyto create real resources as well as state file that compares future changes in your configuration files to what actually exists in your deployment environment.

## Configuration

The set of files used to describe infrastructure in Terraform is simply known as a Terraform *configuration*.

## Others - Puppet / AWS CloudFormation

## Terraform vs CloudFormation

For your IaC project on AWS, choose CloudFormation, because:

1. CloudFormation makes a distinction between code (i.e., templates) and instantiations of the code (i.e., stacks). In Terraform, there is no such distinction.

2. Terraform doesn't handle basic dependency management very well.

<https://www.toptal.com/terraform/terraform-vs-cloudformation>

## References

<https://www.toptal.com/devops/terraform-aws-cloud-iac>

<https://www.terraform.io/intro/index.html>

<https://www.terraform.io/intro/use-cases.html>

<https://learn.hashicorp.com/terraform>

<https://medium.com/capital-one-tech/deploying-multiple-environments-with-terraform-kubernetes-7b7f389e622>

<https://github.com/ozbillwang/terraform-best-practices>
