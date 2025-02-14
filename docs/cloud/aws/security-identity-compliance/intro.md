# Security, Identity and Compliance

1. AWS Identity & Access Management (IAM) - Manage User Access and Encryption Keys
2. Amazon Cloud Directory - Create Flexible Cloud-native Directories
3. Amazon Cognito - Identity Management for your Apps
4. AWS Single Sign-On - Cloud Single Sign-On (SSO) Service
5. Amazon GuardDuty - Managed Threat Detection Service
    1. [Amazon GuardDuty](https://aws.amazon.com/guardduty/)
    2. Amazon GuardDuty combines ML and integrated threat intelligence from AWS and leading third parties to help protect your AWS accounts, workloads, and data from threats.
6. AWS Direct Connect - Dedicated Network Connection to AWS
7. Amazon Inspector - Analyze Application Security
8. Amazon Macie - Discover, Classify, and Protect Your Data
    1. Amazon Macie is a data security service that uses machine learning (ML) and pattern matching to discover and help protect your sensitive data.
    2. [What is Amazon Macie? | Amazon Web Services - YouTube](https://youtu.be/RR4MtDl09Vk)
9. AWS Certificate Manager - Provision, Manage, and Deploy SSL/TLS Certificates
10. AWS CloudHSM - Hardware-based Key Storage for Regulatory Compliance
11. AWS Directory Service - Host and Manage Active Directory
12. AWS Key Management Service - Managed Creation and Control of Encryption Keys
13. AWS Organizations - Policy-based Management for Multiple AWS Accounts
14. AWS Shield - DDOS Protection
15. AWS WAF - Filter Malicious Web Traffic

[AWS Startup Security Baseline (AWS SSB) - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-startup-security-baseline/welcome.html)

## Security Groups

- Cluster security group - It is designed to allow all traffic from the control plane and managed node groups to flow freely between each other
- Node security group - It is designed to allow traffic between worker nodes, or allowing a service like rds, redshift

## Cryptography & PKI

- [AWS Cryptographic Services Overview](https://docs.aws.amazon.com/crypto/?id=docs_gateway)
- [AWS PKI Services Overview](https://docs.aws.amazon.com/crypto/?id=docs_gateway)
- [AWS CloudHSM](https://docs.aws.amazon.com/cloudhsm/?id=docs_gateway)
- [AWS Key Management Service (AWS KMS)](https://docs.aws.amazon.com/kms/?id=docs_gateway)

    AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications. AWS KMS is a secure and resilient service that uses hardware security modules that have been validated under FIPS 140-2, or are in the process of being validated, to protect your keys. AWS KMS is integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs.

    https://aws.amazon.com/kms

 [Use Key Management Service (AWS KMS) to securely manage Ethereum accounts: Part 1 | AWS Database Blog](https://aws.amazon.com/blogs/database/part1-use-aws-kms-to-securely-manage-ethereum-accounts/)

- [AWS Crypto Tools](https://docs.aws.amazon.com/aws-crypto-tools/?id=docs_gateway)
- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/?id=docs_gateway)
- [AWS Certificate Manager Private Certificate Authority](https://docs.aws.amazon.com/acm/?id=docs_gateway)

### AWS Shared Responsibility Model

![aws-shared-responsibility-model](../../../media/Screenshot%202023-12-08%20at%206.30.28PM.jpg)

## Others

Open-source SAST tools such as [**Semgrep**](https://www.jit.io/blog/semgrep-to-uncover-log4j-vulnerabilities), Bandit, or  KICS can help you find vulnerabilities and compliance issues in your code.

[GitHub - ossf/scorecard: OpenSSF Scorecard - Security health metrics for Open Source](https://github.com/ossf/scorecard)

[Security Checks Simplified: How to Implement Best Practices with Ease - YouTube](https://youtu.be/ldAeZtTKqgE?si=nuG2CHeYqmmO1uDz)
