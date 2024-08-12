# Tools

### Infrastructure Tools

1. Terraform and Ansible for IaC
2. Kubernetes
    1. Ingress Controller - Nginx
3. Docker and docker-compose (for local development)
4. Artifact Repositories
    1. GAR
    2. GCR
    3. Azure Repo
    4. ECR
    5. Nexus
    6. Artifactory
5. Velero for DR
6. Web Servers - Nginx
7. LoadBalancers - HA proxy / Nginx
8. Secrets Manager
    1. Vault
    2. AWS KMS
    3. GCP
    4. Azure Secrets
9. Chaos Engineering - gremlin
10. Documentation tool - Confluence
11. Project Management tool - JIRA
12. Communication tool - Slack / Google chats

### VCS Tools

1. Code Repository
    1. GitHub
    2. GitLab
    3. BitBucket
    4. AWS CodeCommit
2. Code Standardization
3. Pre-commit hooks
    1. detect-aws-credentials
    2. detect-private-key
4. Formatter - black (for python), etc
5. Static Code Analysis
6. SonarQube / CodeScene
7. Linters (based on coding languages)
8. Dependabot (github / gitlab)
    1. [Top Alternatives for Dependabot](https://devdojo.com/yoda/top-dependabot-alternatives)
    2. [Dependency Management with Renovate: Beyond the Limits of Dependabot](https://blog.opstree.com/2024/03/12/dependency-management-with-renovate-beyond-the-limits-of-dependabot/)
    3. [Renovate Docs](https://docs.renovatebot.com/)
    4. [GitHub - renovatebot/tutorial: Renovate Bot Tutorial source](https://github.com/renovatebot/tutorial)
    5. [GitHub - renovatebot/renovate: Home of the Renovate CLI: Cross-platform Dependency Automation by Mend.io](https://github.com/renovatebot/renovate)

### CI Tools

1. Jenkins
2. Secret Scanning - GitLeaks
3. Creds Scanner - Trivy
4. Security Vulnerability - Bandit
5. SAST
    1. Open Source
        1. Bandit
        2. Brakeman
        3. Checkmarx CxSAST with Limited Functionalities
        4. Flawfinder
        5. SonarQube
        6. pylint-secure-coding-standard
        7. SpotBugs (Find Security Bug Plugin)
    2. Enterprise
        1. Checkmarx CxSAST
        2. Kiuwan
        3. Veracode
        4. Fortify
        5. Coverity
        6. IBM Security AppScan
        7. CAST
        8. Qualys - [IT Security and Compliance Platform | Qualys, Inc.](https://www.qualys.com/)
        9. RedHat Advanced Cluster Security For Kubernetes (only K8s)
6. SCA
    1. Open Source
        1. OWSAP Dependency-Check
        2. Retire.js
        3. CycloneDX
        4. OSS Review Toolkit (ORT)
        5. Licenses Golang Package
    2. Enterprise
        1. Black Duck
        2. WhiteSource
        3. Aqua Trivy
        4. JFrog Xray
        5. FOSSA
        6. Snyk
        7. Sonatype Nexus Lifecycle
        8. RedHat Advanced Cluster Security For Kubernetes (Only K8s)
        9. Veracode Software Composition Analysis
7. DAST
    1. Open source - OWASP ZAP
    2. Enterprise - Acunetix
8. License Scanner - License Finder
9. Web App Security - OSWAP
10. Unit Tests
11. Code Coverage

### CD Tools

1. Jenkins
2. Deployment patterns
    1. Canary releases
    2. A/B testing
    3. Vulnerability scanning
    4. Rollbacks
3. Selenium

### Monitoring Tools

1. Prometheus
2. Grafana
3. Alertmanager
4. Service mesh - Istio + kiali
5. APM - Elastalert (free) / newrelic / datadog
6. Distributed tracing - Jaeger

### Logging Tools

1. Elasticsearch + Kibana or Grafana Loki
2. Forwarders - Filebeat / Fluentd / Fluentbit / Logstash
3. Sentry - Application exception management and error tracking tool

### DB Tools

1. New age DBs - MongoDB / Elasticsearch / Cassandra / Redis
2. CDC Tool - Debezium / flyway
3. Event driven system - Kafka
4. Data Warehouses - BigQuery / Redshift / Clickhouse / Databricks
5. Visualization tools - Metabase / Tableau / PowerBI
6. DB migration tools - Liquibase / Flyway

### Modernization Tools

1. Airflow
2. Identity management - Keycloak / Active Directory

### Security Tools

1. WAF and VPN
2. SSO and JWT
3. Security Audits - AWS Audit Manager / ScoutSuite

## Links

[Tech Stack File | StackShare](https://stackshare.io/tech-stack-file)

[🏆 The Top 100 Developer Tools of 2023 | StackShare](https://stackshare.io/posts/top-developer-tools-2023)

[GitHub - one2nc/cloudlens: k9s like CLI for AWS and GCP](https://github.com/one2nc/cloudlens)
