# Examples

```bash
#Variables
variable "region" {
 default = "us-east-1"
}

provider "aws” {
 profile = “default”
 region = var.region
}

resource "aws_instance" "example” {
 ami = "ami-2757f631”
 instance_type = "t2.micro”

 provisioner "local-exec" {
  command = "echo ${aws_instance.example.public_ip} > ip_address.txt"
 }
}

resource "aws_eip" "ip" {
 vpc = true
 instance = aws_instance.example.id
}

## Explicit Dependency Example
# New resource for the S3 bucket our application will use.
resource "aws_s3_bucket" "example" {
 # NOTE: S3 bucket names must be unique across _all_ AWS accounts, so
 # this name must be changed before applying this example to avoid naming
 # conflicts.
 bucket = "terraform-getting-started-guide"
 acl = "private"
}

# Change the aws_instance we declared earlier to now include "depends_on"
resource "aws_instance" "example" {
 ami = "ami-2757f631" instance_type = "t2.micro"

 # Tells Terraform that this EC2 instance must be created only after the
 # S3 bucket has been created.
 depends_on = [aws_s3_bucket.example]
}

# remote-exec provisioner example
resource "aws_key_pair" "example" {
  key_name = "examplekey"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "web" {
  key_name = aws_key_pair.example.key_name
  # ...

 connection {
    type     = "ssh"
    user     = "root"
    private_key = file("~/.ssh/id_rsa")
    host     = self.public_ip
  }

  provisioner "remote-exec" {
    inline = [
      "sudo amazon-linux-extras enable nginx1.12",
      "sudo yum -y install nginx",
      "sudo systemctl start nginx"
    ]
  }
}

#Terraform consul module
 terraform {
   required_version = "0.11.11"
 }

 provider "aws" {
   access_key = "AWS ACCESS KEY"
   secret_key = "AWS SECRET KEY"
   region     = "us-east-1"
 }

 module "consul" {
   source      = "hashicorp/consul/aws"
   num_servers = "3"
}
```
