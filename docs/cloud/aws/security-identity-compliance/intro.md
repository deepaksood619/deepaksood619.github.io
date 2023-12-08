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

## Tools

### AWS Audit Manager

![aws-audit-manager](../../../media/Screenshot%202023-12-08%20at%206.33.06PM.jpg)

[AWS Audit Manager Demo 2021 | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=v2o1d76ZSf8&ab_channel=AmazonWebServices)

### AWS Security Hub

Automate AWS security checks and centralize security alerts

#### Features

1. Simple multi-account setup via AWS Organizations
2. Cross-region and cross-account aggregation of findings
3. Automated security checks (standards and controls)
4. Integrations with AWS services and partner products for finding aggregation
5. Automated response and remediation

#### Key use cases

- CSPM - Cloud Security Posture Management
- SIEM - Security Information and Event Management
- SOAR - Security Orchestration, Automation, and Response

[AWS Security Hub](https://aws.amazon.com/security-hub/)

[An Overview of AWS Security Hub | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=oBac-GAoZJ8&ab_channel=AmazonWebServices)

### Security Hub vs Audit Manager

For small organizations with not a lot of assets and findings that Security Hub on its own is probably sufficient. For larger organizations or those that have lots of assets and finding, Audit Manager can be extremely helpful on cutting down the noise of everything else and helping your or your external auditors focus on their task at hand.

[AWS Audit Manager vs Security Hub : r/aws](https://www.reddit.com/r/aws/comments/w55i9m/aws_audit_manager_vs_security_hub/)

### ScoutSuite

Scout Suite is an open source multi-cloud security-auditing tool, which enables security posture assessment of cloud environments. Using the APIs exposed by cloud providers, Scout Suite gathers configuration data for manual inspection and highlights risk areas. Rather than going through dozens of pages on the web consoles, Scout Suite presents a clear view of the attack surface automatically.

The following cloud providers are currently supported/planned:

- Amazon Web Services
- Microsoft Azure
- Google Cloud Platform
- Alibaba Cloud (alpha)
- Oracle Cloud Infrastructure (alpha)

https://github.com/nccgroup/ScoutSuite

#### Running scoutsuite (Download scoutsuite repo)

`python scout.py aws --profile zen`

https://github.com/tensult/cloud-reports

[**https://www.verygoodsecurity.com/control**](https://www.verygoodsecurity.com/control)

https://github.com/toniblyx/my-arsenal-of-aws-security-tools

https://cloudcustodian.io

## Compliances

### PCI Compliance

The Payment Card Industry Data Security Standard (PCI-DSS) is a set of requirements intended to ensure that all companies that process, store, or transmit credit card information maintain a secure environment.

- Payment Card Industry-Data Security Standard (PCI-DSS)
- Payment Application-Data Security Standard (PA-DSS)

[GitHub - jivoi/offsec\_pdfs: :heavy\_check\_mark: your offsec knowledge](https://github.com/jivoi/offsec_pdfs)

### SOC Compliance (Service Organization Control)

SOC compliance is a certification that shows a service organization has completed a third-party audit and has certain controls in place. The most common types of SOC compliance are SOC 1, SOC 2, and SOC 3. There are also SOC for Cybersecurity and SOC for Supply Chain certifications.

SOC 2 compliance is a voluntary certification that shows an organization's commitment to information security. It covers five pillars, called Trust Services Criteria (TSC): Security, Availability, Processing integrity, Confidentiality, Privacy.

SOC 2 compliance may help organizations avoid data breaches and the financial and reputational damage that can result. It can also increase an organization's brand reputation and give it a competitive advantage.

SOC 2, aka **Service Organization Control Type 2**, is a cybersecurity compliance framework developed by the American Institute of Certified Public Accountants (AICPA). The primary purpose of SOC 2 is to ensure that third-party service providers store and process client data in a secure manner.
