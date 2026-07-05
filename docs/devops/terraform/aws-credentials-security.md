---
slug: /terraform-aws-credentials-security
title: Securing AWS Credentials in Terraform
description: Best practices for managing and securing AWS credentials in Terraform across local development and CI/CD pipelines
created: 2026-07-05
updated: 2026-07-05
---

The absolute golden rule is **never hardcode your access keys or secrets directly into your `.tf` files.** Here are the best practices for managing and securing AWS credentials in Terraform, ranging from local development to automated CI/CD pipelines.

## Local Development Methods

When running Terraform locally on your machine, rely on tools outside of Terraform to handle your credentials.

### AWS CLI Profile (Recommended)

Configure your credentials using the AWS CLI (`aws configure`). Terraform automatically detects the default profile in your `~/.aws/credentials` file.

If you use multiple profiles, you can specify the profile in your provider block without exposing the keys:

```hcl
provider "aws" {
  region  = "us-east-1"
  profile = "my-custom-profile"
}
```

### Environment Variables

You can export your AWS credentials as environment variables in your terminal before running Terraform. Terraform will automatically pick them up.

```bash
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
export AWS_REGION="us-east-1"
```

## CI/CD and Automation Methods

When running Terraform in a pipeline (like GitHub Actions, GitLab CI, or Jenkins), you want to avoid long-lived static credentials altogether.

### OpenID Connect (OIDC)

This is the modern standard for CI/CD. Instead of storing long-lived AWS keys in GitHub/GitLab, you establish a trust relationship between your CI/CD provider and AWS. The pipeline requests short-lived, temporary credentials to run Terraform.

### IAM Roles / Instance Profiles

If you are running Terraform from an EC2 instance, an EKS cluster, or AWS CodeBuild, attach an IAM Role to that compute resource. Terraform will automatically assume the role and use its temporary credentials without any extra configuration.

## Using Secret Management Systems

If you need to pass specific secrets (like database passwords or API keys) *into* your Terraform code to create resources, use a dedicated secrets manager.

### AWS Secrets Manager / Systems Manager Parameter Store

You can use Terraform data sources to fetch secrets at runtime.

```hcl
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "my-database-password"
}

resource "aws_db_instance" "default" {
  # ... other config ...
  password = data.aws_secretsmanager_secret_version.db_password.secret_string
}
```

### HashiCorp Vault

If you use Vault, the Vault provider can dynamically generate AWS credentials or fetch static secrets at runtime.

## Terraform Cloud / Enterprise

If you use HashiCorp's managed services (Terraform Cloud or Terraform Enterprise), you can store AWS credentials as **Workspace Variables**. Ensure you mark the variables as `sensitive` so they are encrypted, hidden from the UI, and never printed in the console logs.

## Secure Your State File

Even if you don't hardcode credentials, Terraform often saves the passwords, keys, and tokens it generates in plain text inside the `terraform.tfstate` file.

To secure this:

1. **Never commit `terraform.tfstate` to version control (Git).** Add it to your `.gitignore`.
2. **Use a Remote Backend:** Store your state file securely in an AWS S3 bucket.
3. **Enable Encryption and Locking:** Enable Server-Side Encryption (SSE-S3 or KMS) on the S3 bucket to encrypt the state file at rest, and use a DynamoDB table to handle state locking.

```hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
```

## Links

- [AWS Provider Authentication - Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration)
- [Terraform Backend S3 Configuration](https://www.terraform.io/docs/backends/types/s3.html)
- [AWS Security Best Practices](cloud/aws/security-identity-compliance/security-guidelines.md)
