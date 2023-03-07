# Variables

## Defining Variables

- **variables.tf**

## Assigning Variables

There are multiple ways to assign variables. Below is also the order in which variable values are chosen. The following is the descending order of precedence in which variables are considered.

## Command-line flags

You can set variables directly on the command-line with the-varflag. Any command in Terraform that inspects the configuration accepts this flag, such asapply, plan, andrefresh:

`$ terraform apply -var 'region=us-east-2'`

Once again, setting variables this way will not save them, and they'll have to be input repeatedly as commands are executed.

## From a file

To persist variable values, create a file and assign variables within this file. Create a file namedterraform.tfvarswith the following contents:

`region = "us-east-2"`

For all files which matchterraform.tfvarsor*.auto.tfvarspresent in the current directory, Terraform automatically loads them to populate variables. If the file is named something else, you can use the-var-fileflag directly to specify a file. These files are the same syntax as Terraform configuration files. And like Terraform configuration files, these files can also be JSON.

We don't recommend saving usernames and password to version control, but you can create a local secret variables file and use-var-fileto load it.

You can use multiple-var-filearguments in a single command, with some checked in to version control and others not checked in. For example:

`terraform apply -var-file="secret.tfvars" -var-file="production.tfvars"`

## From environment variables

Terraform will read environment variables in the form of TF_VAR_name to find the value for a variable. For example, theTF_VAR_regionvariable can be set to set theregionvariable.

Note: Environment variables can only populate string-type variables. List and map type variables must be populated via one of the other mechanisms.

## UI Input

If you executeterraform applywith certain variables unspecified, Terraform will ask you to input their values interactively. These values are not saved, but this provides a convenient workflow when getting started with Terraform. UI input is not recommended for everyday use of Terraform.

## Variable Defaults

If no value is assigned to a variable via any of these methods and the variable has adefaultkey in its declaration, that value will be used for the variable.

## Data Types

### Lists

Lists are defined either explicitly or implicitly

```bash
# implicitly by using brackets [...]
variable "cidrs" { default = [] }

# explicitly
variable "cidrs" { type = list }
```

You can specify lists in a terraform.tfvars file:
`cidrs = [ "10.0.0.0/16", "10.1.0.0/16" ]`

### Maps

We've replaced our sensitive strings with variables, but we still are hard-coding AMIs. Unfortunately, AMIs are specific to the region that is in use. One option is to just ask the user to input the proper AMI for the region, but Terraform can do better than that withmaps.

Maps are a way to create variables that are lookup tables. An example will show this best. Let's extract our AMIs into a map and add support for the us-west-2 region as well:

```json
variable "amis" {
  type = "map"
  default = {
    "us-east-1" = "ami-b374d5a5"
    "us-west-2" = "ami-4b32be2b"
  }
}
```

A variable can have amaptype assigned explicitly, or it can be implicitly declared as a map by specifying a default value that is a map. The above demonstrates both.

Then, replace the aws_instance with the following:

```json
resource "aws_instance" "example" {
  ami           = var.amis[var.region]
  instance_type = "t2.micro"
}
```

The square-bracket index notation used here is an example of how themaptype expression is accessed as a variable, with `[var.region]` referencing thevar.amisdeclaration for dynamic lookup.

Although it is not used in this example, themaptype expression can also use a static value lookup directly with `var.amis["us-east-1"]`

#### Assigning Maps

We set defaults above, but maps can also be set using the-varand-var-filevalues. For example:

`$ terraform apply -var 'amis={ us-east-1 = "foo", us-west-2 = "bar" }'`

*Note: Even if every key will be assigned as input, the variable must be established as a map by setting its default to {}.*

Here is an example of setting a map's keys from a file. Starting with these variable definitions:

```json
variable "region" {}

variable "amis" {
type = "map"
}
```

You can specify keys in aterraform.tfvarsfile:

```json
amis = {
    "us-east-1" = "ami-abc123"
    "us-west-2" = "ami-def456"
}
```

And access them via resource interpolation:

```json
output "ami" {
    value = aws_instance.example.ami
}
```

Like so:

`terraform apply -var region=us-west-2`

## Output Variables

Outputs are a way to tell Terraform what data is important. This data is outputted whenapplyis called, and can be queried using theterraform outputcommand.

```json
output "ip" {
    value = aws_eip.ip.public_ip
}
```

This defines an output variable named "ip". The name of the variable must conform to Terraform variable naming conventions if it is to be used as an input to other modules. Thevaluefield specifies what the value will be, and almost always contains one or more interpolations, since the output data is typically dynamic. In this case, we're outputting the public_ip attribute of the elastic IP address.

Multiple output blocks can be defined to specify multiple output variables.
