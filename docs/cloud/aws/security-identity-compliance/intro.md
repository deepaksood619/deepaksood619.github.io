# Security, Identity and Compliance

1. AWS Identity & Access Management (IAM) - Manage User Access and Encryption Keys
2. Amazon Cloud Directory - Create Flexible Cloud-native Directories
3. Amazon Cognito - Identity Management for your Apps
4. AWS Single Sign-On - Cloud Single Sign-On (SSO) Service
5. Amazon GuardDuty - Managed Threat Detection Service
6. AWS Direct Connect - Dedicated Network Connection to AWS
7. Amazon Inspector - Analyze Application Security
8. Amazon Macie - Discover, Classify, and Protect Your Data
9. AWS Certificate Manager - Provision, Manage, and Deploy SSL/TLS Certificates
10. AWS CloudHSM - Hardware-based Key Storage for Regulatory Compliance
11. AWS Directory Service - Host and Manage Active Directory
12. AWS Key Management Service - Managed Creation and Control of Encryption Keys
13. AWS Organizations - Policy-based Management for Multiple AWS Accounts
14. AWS Shield - DDOS Protection
15. AWS WAF - Filter Malicious Web Traffic

## Security Groups

- Cluster security group - It is designed to allow all traffic from the control plane and managed node groups to flow freely between each other
- Node security group - It is designed to allow traffic between worker nodes, or allowing a service like rds, redshift

## Cryptography & PKI

- [AWS Cryptographic Services Overview](https://docs.aws.amazon.com/crypto/?id=docs_gateway)
- [AWS PKI Services Overview](https://docs.aws.amazon.com/crypto/?id=docs_gateway)
- [AWS CloudHSM](https://docs.aws.amazon.com/cloudhsm/?id=docs_gateway)
- [AWS Key Management Service (AWS KMS)](https://docs.aws.amazon.com/kms/?id=docs_gateway)

    AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications. AWS KMS is a secure and resilient service that uses hardware security modules that have been validated under FIPS 140-2, or are in the process of being validated, to protect your keys. AWS KMS is integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs.

    <https://aws.amazon.com/kms>

 [Use Key Management Service (AWS KMS) to securely manage Ethereum accounts: Part 1 | AWS Database Blog](https://aws.amazon.com/blogs/database/part1-use-aws-kms-to-securely-manage-ethereum-accounts/)

- [AWS Crypto Tools](https://docs.aws.amazon.com/aws-crypto-tools/?id=docs_gateway)
- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/?id=docs_gateway)
- [AWS Certificate Manager Private Certificate Authority](https://docs.aws.amazon.com/acm/?id=docs_gateway)

## Tools

## ScoutSuite

Scout Suite is an open source multi-cloud security-auditing tool, which enables security posture assessment of cloud environments. Using the APIs exposed by cloud providers, Scout Suite gathers configuration data for manual inspection and highlights risk areas. Rather than going through dozens of pages on the web consoles, Scout Suite presents a clear view of the attack surface automatically.

The following cloud providers are currently supported/planned:

- Amazon Web Services
- Microsoft Azure
- Google Cloud Platform
- Alibaba Cloud (alpha)
- Oracle Cloud Infrastructure (alpha)

<https://github.com/nccgroup/ScoutSuite>

## Running scoutsuite (Download scoutsuite repo)

`python scout.py aws --profile zen`

<https://github.com/tensult/cloud-reports>

[**https://www.verygoodsecurity.com/control**](https://www.verygoodsecurity.com/control)

<https://github.com/toniblyx/my-arsenal-of-aws-security-tools>

<https://cloudcustodian.io>

## Compliances

## PCI COMPLIANCE

The Payment Card Industry Data Security Standard (PCIDSS) is a set of requirements intended to ensure that all companies that process, store, or transmit credit card information maintain a secure environment.
