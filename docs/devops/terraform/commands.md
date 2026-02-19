# Commands

`Usage: terraform [-version] [-help] <command> [args]`

The available commands for execution are listed below. The primary workflow commands are given first, followed by less common or more advanced commands.

## Main commands

```bash
brew install terraform

init          Prepare your working directory for other commands
validate      Check whether the configuration is valid
plan          Show changes required by the current configuration
apply         Create or update infrastructure
destroy       Destroy previously-created infrastructure
```

## Workflow

```bash
# basic
terraform init
terraform plan
terraform apply
terraform destroy

# advanced
terraform init
terraform plan -out=tfplan
terraform show tfplan
# or to review in JSON format
terraform show -json tfplan

terraform apply tfplan

terraform output resource-ids
```

## Global options (use these before the subcommand, if any)

```bash
-chdir=DIR    Switch to a different working directory before executing the
   given subcommand.
-help         Show this help output, or the help for a specified subcommand.
-version      An alias for the "version" subcommand.
```

## All other commands

```bash
console       Try Terraform expressions at an interactive command prompt
fmt           Reformat your configuration in the standard style
force-unlock  Release a stuck lock on the current workspace
get           Install or upgrade remote Terraform modules
graph         Generate a Graphviz graph of the steps in an operation
import        Associate existing infrastructure with a Terraform resource
login         Obtain and save credentials for a remote host
logout        Remove locally-stored credentials for a remote host
metadata      Metadata related commands
output        Show output values from your root module
providers     Show the providers required for this configuration
refresh       Update the state to match remote systems
show          Show the current state or a saved plan
state         Advanced state management
taint         Mark a resource instance as not fully functional
test          Experimental support for module integration testing
untaint       Remove the 'tainted' state from a resource instance
version       Show the current Terraform version
workspace     Workspace management
```

### Terraform refresh

The `terraform refresh` command reads the current settings from all managed remote objects and updates the Terraform state to match.

### Terraform import

Terraform supports bringing your existing infrastructure under its management. By importing resources into Terraform, you can consistently manage your infrastructure using a common workflow.

#### 1. The `terraform import` CLI Command

This is the traditional method, available in all Terraform versions.

- **Process:**
    1. Manually write a resource block in your `.tf` configuration file that represents the existing resource.
    2. Identify the unique, provider-specific ID of the resource from your cloud provider's console or CLI.
    3. Run the command using the syntax: `terraform import [options] ADDRESS ID`. The `ADDRESS` is the resource path in your configuration (e.g., `aws_instance.example`), and `ID` is the cloud provider's resource ID (e.g., `i-abcd1234`).
    4. Run `terraform plan` to verify that no unintended changes will be applied, then run `terraform apply`.
- **Limitation:** This method only updates the Terraform state file; it does not automatically generate the HCL configuration code for you. You must write the configuration manually beforehand.

#### 2. The Declarative `import` Block (Terraform v1.5+)

This approach is more automated, predictable, and suitable for CI/CD pipelines.

- **Process:**
    1. Define an `import` block in your configuration file (e.g., `imports.tf`) with the destination resource address (`to`) and the provider-specific resource ID (`id`).
    2. Optionally, you can run `terraform plan -generate-config-out=generated.tf` to have Terraform automatically generate the matching HCL code in a specified file.
    3. Run `terraform apply` to perform the import and add the resource to your state file.
- **Advantage:** This method allows for importing multiple resources at once and enables you to preview the import operation during the `plan` phase.

#### Examples

```bash
terraform plan -generate-config-out=generated.tf

terraform import aws_instance.example i-abcd1234

# Example: Import into Module
terraform import module.foo.aws_instance.bar i-abcd1234
```

- [Import existing infrastructure resources \| Terraform \| HashiCorp Developer](https://developer.hashicorp.com/terraform/cli/import)
	- [terraform import command reference \| Terraform \| HashiCorp Developer](https://developer.hashicorp.com/terraform/cli/commands/import)
- [Import Terraform configuration \| Terraform \| HashiCorp Developer](https://developer.hashicorp.com/terraform/tutorials/state/state-import)
