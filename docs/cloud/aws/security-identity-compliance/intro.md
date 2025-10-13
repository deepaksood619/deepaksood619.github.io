# Security, Identity and Compliance

1. AWS Identity & Access Management (IAM) - Manage User Access and Encryption Keys
2. Amazon Cloud Directory - Create Flexible Cloud-native Directories
3. AWS Single Sign-On - Cloud Single Sign-On (SSO) Service
4. Amazon GuardDuty - Managed Threat Detection Service
    1. [Amazon GuardDuty](https://aws.amazon.com/guardduty/)
    2. Amazon GuardDuty combines ML and integrated threat intelligence from AWS and leading third parties to help protect your AWS accounts, workloads, and data from threats.
5. AWS Direct Connect - Dedicated Network Connection to AWS
6. Amazon Inspector - Analyze Application Security
7. Amazon Macie - Discover, Classify, and Protect Your Data
    1. Amazon Macie is a data security service that uses machine learning (ML) and pattern matching to discover and help protect your sensitive data.
    2. [What is Amazon Macie? | Amazon Web Services - YouTube](https://youtu.be/RR4MtDl09Vk)
8. AWS Certificate Manager - Provision, Manage, and Deploy SSL/TLS Certificates
9. AWS CloudHSM - Hardware-based Key Storage for Regulatory Compliance
10. AWS Directory Service - Host and Manage Active Directory
11. AWS Key Management Service - Managed Creation and Control of Encryption Keys
12. AWS Organizations - Policy-based Management for Multiple AWS Accounts
13. AWS Shield - DDOS Protection
	1. **AWS Shield Standard is automatically enabled for all AWS customers at no additional cost** and protects against common DDoS attacks on your AWS services like ELB, CloudFront, and Route 53. However, for enhanced protection against more sophisticated attacks, you must explicitly enable and configure AWS Shield Advanced for specific AWS resources.
	2. AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that provides two tiers of protection: **AWS Shield Standard** is automatically included for all AWS customers at no extra cost, offering protection against common network and transport layer DDoS events. **AWS Shield Advanced** provides more sophisticated and customized protection against large and complex attacks, includes access to the AWS Shield Response Team for expert guidance, and offers cost protection for excess data transfer during a DDoS attack.
14. AWS WAF - Filter Malicious Web Traffic

[AWS Startup Security Baseline (AWS SSB) - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-startup-security-baseline/welcome.html)

## Amazon Cognito - Identity Management for your Apps

Amazon Cognito is an identity platform for web and mobile apps. It’s a user directory, an authentication server, and an authorization service for OAuth 2.0 access tokens and AWS credentials. With Amazon Cognito, you can authenticate and authorize users from the built-in user directory, from your enterprise directory, and from consumer identity providers like Google and Facebook.

### User Pools

Create a user pool when you want to authenticate and authorize users to your app or API. User pools are a user directory with both self-service and administrator-driven user creation, management, and authentication. Your user pool can be an independent directory and OIDC identity provider (IdP), and an intermediate service provider (SP) to third-party providers of workforce and customer identities. You can provide single sign-on (SSO) in your app for your organization's workforce identities in SAML 2.0 and OIDC IdPs with user pools. You can also provide SSO in your app for your organization's customer identities in the public OAuth 2.0 identity stores Amazon, Google, Apple and Facebook.

### Identity Pools

Set up an Amazon Cognito identity pool when you want to authorize authenticated or anonymous users to access your AWS resources. An identity pool issues AWS credentials for your app to serve resources to users. You can authenticate users with a trusted identity provider, like a user pool or a SAML 2.0 service. It can also optionally issue credentials for guest users. Identity pools use both role-based and attribute-based access control to manage your users’ authorization to access your AWS resources.

Identity pools don’t require integration with a user pool. An identity pool can accept authenticated claims directly from both workforce and consumer identity providers.

### An Amazon Cognito user pool and identity pool used together

1. Your app user signs in through a user pool and receives OAuth 2.0 tokens.
2. Your app exchanges a user pool token with an identity pool for temporary AWS credentials that you can use with AWS APIs and the AWS Command Line Interface (AWS CLI).
3. Your app assigns the credentials session to your user, and delivers authorized access to AWS services like Amazon S3 and Amazon DynamoDB.

### Links

- [AWS Cognito Course – Authentication and Authorization - YouTube](https://youtu.be/ajExOgOCJXY)
- [What is Amazon Cognito? - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)

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

[Shared responsibility model - Amazon Web Services: Risk and Compliance](https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html)

## Others

Open-source SAST tools such as [**Semgrep**](https://www.jit.io/blog/semgrep-to-uncover-log4j-vulnerabilities), Bandit, or  KICS can help you find vulnerabilities and compliance issues in your code.

[GitHub - ossf/scorecard: OpenSSF Scorecard - Security health metrics for Open Source](https://github.com/ossf/scorecard)

[Security Checks Simplified: How to Implement Best Practices with Ease - YouTube](https://youtu.be/ldAeZtTKqgE?si=nuG2CHeYqmmO1uDz)
