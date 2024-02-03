# Tools

## AWS Audit Manager

![aws-audit-manager](../../../media/Screenshot%202023-12-08%20at%206.33.06PM.jpg)

[AWS Audit Manager Demo 2021 | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=v2o1d76ZSf8&ab_channel=AmazonWebServices)

## AWS Security Hub

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

## Security Hub vs Audit Manager

For small organizations with not a lot of assets and findings that Security Hub on its own is probably sufficient. For larger organizations or those that have lots of assets and finding, Audit Manager can be extremely helpful on cutting down the noise of everything else and helping your or your external auditors focus on their task at hand.

[AWS Audit Manager vs Security Hub : r/aws](https://www.reddit.com/r/aws/comments/w55i9m/aws_audit_manager_vs_security_hub/)

## ScoutSuite

Scout Suite is an open source multi-cloud security-auditing tool, which enables security posture assessment of cloud environments. Using the APIs exposed by cloud providers, Scout Suite gathers configuration data for manual inspection and highlights risk areas. Rather than going through dozens of pages on the web consoles, Scout Suite presents a clear view of the attack surface automatically.

The following cloud providers are currently supported/planned:

- Amazon Web Services
- Microsoft Azure
- Google Cloud Platform
- Alibaba Cloud (alpha)
- Oracle Cloud Infrastructure (alpha)

[GitHub - nccgroup/ScoutSuite: Multi-Cloud Security Auditing Tool](https://github.com/nccgroup/ScoutSuite)

[Docker Image · nccgroup/ScoutSuite Wiki · GitHub](https://github.com/nccgroup/ScoutSuite/wiki/Docker-Image)

### Running scoutsuite (Download scoutsuite repo)

```bash
python scout.py aws --profile zen

# View a summary of image vulnerabilities and recommendations
docker scout quickview clickhouse/clickhouse-server

# View vulnerabilities
docker scout cves clickhouse/clickhouse-server

# View base image update recommendations
docker scout recommendations clickhouse/clickhouse-server
```

https://github.com/tensult/cloud-reports

[**https://www.verygoodsecurity.com/control**](https://www.verygoodsecurity.com/control)

https://github.com/toniblyx/my-arsenal-of-aws-security-tools

https://cloudcustodian.io

## OpenSCAP

Security Content Automation Protocol ([SCAP](https://www.open-scap.org/#)) is U.S. standard maintained by National Institute of Standards and Technology ([NIST](https://www.open-scap.org/#)).

[GitHub - OpenSCAP/openscap: NIST Certified SCAP 1.2 toolkit](https://github.com/OpenSCAP/openscap)

## Trivy

Trivy is a comprehensive and versatile security scanner. Trivy has _scanners_ that look for security issues, and _targets_ where it can find those issues.

Targets (what Trivy can scan):

- Container Image
- Filesystem
- Git Repository (remote)
- Virtual Machine Image
- Kubernetes
- AWS

Scanners (what Trivy can find there):

- OS packages and software dependencies in use (SBOM)
- Known vulnerabilities (CVEs)
- IaC issues and misconfigurations
- Sensitive information and secrets
- Software licenses

[GitHub - aquasecurity/trivy: Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more](https://github.com/aquasecurity/trivy)

[Trivy Home - Trivy](https://trivy.dev/)
