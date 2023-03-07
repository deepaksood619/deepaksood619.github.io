# Documentation

## Providers

Theproviderblock is used to configure the named provider, in our case "aws". A provider is responsible for creating and managing resources. A provider is a plugin that Terraform uses to translate the API interactions with the service. A provider is responsible for understanding API interactions and exposing resources. Because Terraform can interact with any API, almost any infrastructure type can be represented as a resource in Terraform.

Multiple provider blocks can exist if a Terraform configuration manages resources from different providers. To add multiple providers in your configuration, declare the providers and create resources associated with those providers. If your configuration creates a new AWS instance in your environment and you need to add that instance to your Datadog monitoring, you would declare the providers sequentially and then declare your resources for each. In the example below, using multiple providers enables us to pass the instance information directly into the monitoring query.

## Resources

Theresourceblock defines a resource that exists within the infrastructure. A resource might be a physical component such as an EC2 instance, or it can be a logical resource such as a Heroku application.

The resource block has two strings before opening the block: the resource type and the resource name. In our example, the resource type is "aws_instance" and the name is "example." The prefix of the type maps to the provider. In our case "aws_instance" automatically tells Terraform that it is managed by the "aws" provider.

## Dependencies (Implicit and Explicit)

By studying the resource attributes used in interpolation expressions, Terraform can automatically infer when one resource depends on another. In the example above, the reference toaws_instance.example.idcreates animplicit dependencyon theaws_instancenamedexample.

Terraform uses this dependency information to determine the correct order in which to create the different resources. In the example above, Terraform knows that theaws_instancemust be created before theaws_eip.

Implicit dependencies via interpolation expressions are the primary way to inform Terraform about these relationships, and should be used whenever possible.

Sometimes there are dependencies between resources that arenotvisible to Terraform. Thedepends_onargument is accepted by any resource and accepts a list of resources to createexplicit dependenciesfor.

For example, perhaps an application we will run on our EC2 instance expects to use a specific Amazon S3 bucket, but that dependency is configured inside the application code and thus not visible to Terraform. In that case, we can usedepends_onto explicitly declare the dependency

## Non-dependent resources

If new resource does not depend on any other resource, it can be created in parallel with the other resources. Where possible, Terraform will perform operations concurrently to reduce the total time taken to apply changes.

## Provisioners

provisioners to initialize instances when they're created.

If you're using an image-based infrastructure (perhaps with images created with [Packer](https://www.packer.io/)), then what you've learned so far is good enough. But if you need to do some initial setup on your instances, then provisioners let you upload files, run shell scripts, or install and trigger other software like configuration management tools, etc.

This adds aprovisionerblock within theresourceblock. Multipleprovisionerblocks can be added to define multiple provisioning steps. Terraform supports [multiple provisioners](https://www.terraform.io/docs/provisioners/index.html), but for this example we are using thelocal-execprovisioner.

## local-exec

Thelocal-execprovisioner executes a command locally on the machine running Terraform.

## remote-exec

Another useful provisioner isremote-execwhich invokes a script on a remote resource after it is created. This can be used to run a configuration management tool, bootstrap into a cluster, etc. In order to use aremote-execprovisioner, you must choose ansshorwinrmconnection in the form of aconnectionblock within the provisioner.

## Failed Provisioners and Tainted Resources

If a resource successfully creates but fails during provisioning, Terraform will error and mark the resource as "tainted". A resource that is tainted has been physically created, but can't be considered safe to use since provisioning failed.

When you generate your next execution plan, Terraform will not attempt to restart provisioning on the same resource because it isn't guaranteed to be safe. Instead, Terraform will remove any tainted resources and create new resources, attempting to provision them again after creation.

Terraform also does not automatically roll back and destroy the resource during the apply when the failure happens, because that would go against the execution plan: the execution plan would've said a resource will be created, but does not say it will ever be deleted. If you create an execution plan with a tainted resource, however, the plan will clearly state that the resource will be destroyed because it is tainted.

## Destroy Provisioners

Provisioners can also be defined that run only during a destroy operation. These are useful for performing system cleanup, extracting data, etc.

For many resources, using built-in cleanup mechanisms is recommended if possible (such as init scripts), but provisioners can be used if necessary.

## Modules

Up to this point, we've been configuring Terraform by editing Terraform configurations directly. As our infrastructure grows, this practice has a few key problems: a lack of organization, a lack of reusability, and difficulties in management for teams.

Modulesin Terraform are self-contained packages of Terraform configurations that are managed as a group. Modules are used to create reusable components, improve organization, and to treat pieces of infrastructure as a black box.

## Remote Backend

Terraform supports team-based workflows with a feature known as [remote backends](https://www.terraform.io/docs/backends/index.html). Remote backends allow Terraform to use a shared storage space for state data, so any member of your team can use Terraform to manage the same infrastructure.
