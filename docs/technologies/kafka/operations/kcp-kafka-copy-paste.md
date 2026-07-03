---
slug: kcp-kafka-copy-paste
title: kcp-kafka-copy-paste
description: A comprehensive command-line tool for planning and executing Kafka migrations to Confluent Cloud.
created: 2026-06-24
updated: 2026-07-03
---
## Intro

- Simplify and streamline your Kafka migration journey to Confluent Cloud!
- kcp helps you migrate your Kafka setups to Confluent Cloud by providing tools to:
	- **Scan** and identify resources in existing Kafka deployments.
	- **Create** reports for migration planning and cost analysis.
	- **Generate** migration assets and infrastructure configurations.
- Kcp is our new, open-sourced migration toolkit that automates the most painful parts of moving from MSK to Confluent Cloud.
	- **Migrate in Days:** kcp automates the manual, error-prone tasks of discovery and planning, provisioning, and data migration, turning the hands-on migration activity time from 4-6 weeks into a 2-3 days process.
	- **Automated Discovery & Costing:** A single command scans the customer's entire MSK cluster, providing a detailed inventory and a real cost model based on actual usage to use in the TCO calculator.
	- **Terraform Automation:** kcp generates pre-filled Terraform and Ansible scripts to automatically provision the equivalent Confluent Cloud resources.
	- **Data and Component Migration:** kcp securely replicates data via external Cluster Linking and automates the conversion and migration of components like ACLs, connectors, and more.

## Workflow

The typical migration flow:

1. **Discover / scan** — `kcp discover` (MSK) or `kcp scan clusters` (MSK or Apache Kafka) to build `kcp-state.json`.
2. **Report** — `kcp report costs` and `kcp report metrics` for cost and utilization analysis. Alternatively, use the `kcp ui` for fine-grained analysis.
3. **Generate migration assets for data migration** — `kcp create-asset target-infra`, `migration-infra`, `migrate-topics`, `migrate-schemas`, `migrate-acls`, `migrate-connectors`.
4. **Initialize and execute client switchover** — `kcp migration init` followed by `kcp migration execute`.

## Quick Start

### Step 1: Discover MSK Clusters

Find all MSK clusters in your AWS account:

```bash
# Install kcp
curl -fsSL https://raw.githubusercontent.com/confluentinc/kcp/main/install.sh | sh

# Discover clusters in a region
kcp discover --region us-east-2

# Or scan all regions
kcp discover --all-regions
```

**Output:** Lists all MSK cluster names and ARNs

### Step 2: Create Credentials File

kcp needs to connect to your MSK cluster. Create `msk-credentials.yaml`:

```yaml
regions:
- name: us-east-2
  clusters:
  - name: my-cluster
    arn: arn:aws:kafka:us-east-2:123456789:cluster/my-cluster/uuid
    auth_method:
      # For unauthenticated clusters (port 9092)
      unauthenticated_plaintext:
        use: true
      
      # OR for SASL/SCRAM (port 9096)
      # sasl_scram:
      #   use: true
      #   username: "admin"
      #   password: "password-from-secrets-manager"
      #   mechanism: SHA512
      
      # OR for IAM (port 9098) - NOT supported for zero-cut migrations
      # iam:
      #   use: true
```

**Get SASL/SCRAM credentials from AWS Secrets Manager:**

```bash
# Find secret name
aws secretsmanager list-secrets --region us-east-2 \
  --query 'SecretList[?contains(Name, `msk`)].Name' --output table

# Get credentials
aws secretsmanager get-secret-value \
  --secret-id "AmazonMSK_cluster-name_scram" \
  --region us-east-2 \
  --query SecretString --output text | jq
```

### Step 3: Scan the Cluster

Deep analysis of your MSK cluster:

```bash
kcp scan clusters \
  --source-type msk \
  --state-file kcp-state.json \
  --credentials-file msk-credentials.yaml \
  --verbose
```

**What it scans:**
- All topics, partitions, configs
- Consumer groups and lag
- ACLs and permissions
- Throughput and storage metrics
- Schema Registry (if configured)
- Connectors (if using MSK Connect)

**Output:** `kcp-state.json` (contains complete cluster inventory)

**Common issues:**

```bash
# Timeout errors → MSK cluster has private endpoints
# Solution 1: Run kcp from EC2 in the same VPC
ssh ec2-user@bastion-host
# Install kcp and run scan from there

# Solution 2: Enable public access (if allowed)
# Check security group allows your IP on port 9096
```

### Step 4: Analyze Costs & Metrics

```bash
# View in UI (interactive dashboard)
kcp ui
# Upload kcp-state.json
# Shows: Costs, Cluster details, Metrics, Topics, Connectors, ACLs, Clients

# Or generate CLI reports
kcp report costs --state-file kcp-state.json
kcp report metrics --state-file kcp-state.json
```

### Step 5: Generate Migration Assets

```bash
# Generate Terraform for Confluent Cloud resources
kcp create-asset target-infra --state-file kcp-state.json

# Generate Cluster Linking config (data replication)
kcp create-asset migration-infra --state-file kcp-state.json

# Generate topic migration scripts
kcp create-asset migrate-topics --state-file kcp-state.json

# Migrate ACLs to CC RBAC
kcp create-asset migrate-acls --state-file kcp-state.json

# Migrate connectors
kcp create-asset migrate-connectors --state-file kcp-state.json

# Migrate schemas
kcp create-asset migrate-schemas --state-file kcp-state.json
```

**What you get:**
- Terraform files to provision CC cluster
- Ansible playbooks for Cluster Linking
- Topic configs matching MSK settings
- ACL → RBAC conversion (IAM ACLs require manual conversion)

### Step 6: Execute Migration

```bash
# Initialize zero-cut migration
kcp migration init --state-file kcp-state.json

# Execute cutover (when ready)
kcp migration execute --state-file kcp-state.json
```

## Common Workflows

### Network Access Troubleshooting

Most MSK clusters are private (VPC-only). Check bootstrap server visibility:

```bash
aws kafka get-bootstrap-brokers \
  --cluster-arn "$CLUSTER_ARN" \
  --region us-east-2
```

**Output shows:**
- `BootstrapBrokerString` (PLAINTEXT, port 9092)
- `BootstrapBrokerStringTls` (TLS, port 9094)
- `BootstrapBrokerStringSaslScram` (SASL/SCRAM, port 9096)
- `BootstrapBrokerStringSaslIam` (IAM, port 9098)

**If addresses show `172.x.x.x` → Private endpoints:**

```bash
# Option 1: Run from EC2 bastion in same VPC
kcp create-asset bastion-host --state-file kcp-state.json
# Generates EC2 Terraform

# Option 2: Check if cluster has public access enabled
aws kafka describe-cluster-v2 \
  --cluster-arn "$CLUSTER_ARN" \
  --region us-east-2 \
  --query 'ClusterInfo.Provisioned.BrokerNodeGroupInfo.ConnectivityInfo.PublicAccess.Type'
```

### MSK Authentication Methods

See [Amazon MSK Authentication](../../../cloud/aws/analytics/amazon-msk.md#authentication-methods) for detailed comparison of:
- Unauthenticated (PLAINTEXT)
- TLS mutual authentication (mTLS)
- SASL/SCRAM
- IAM authentication

**Critical for migration:** IAM auth is NOT supported by Confluent Cloud Gateway, so zero-cut migrations require enabling SASL/SCRAM or unauthenticated access on MSK first.

### CLI Help

```bash
A comprehensive CLI tool for planning and executing kafka cluster migrations to confluent cloud. Docs: https://confluentinc.github.io/kcp/0.8.7/

Usage:
  kcp [command]

Available Commands:
  completion   Generate the autocompletion script for the specified shell
  create-asset Generate infrastructure and migration assets
  discover     Multi-region, multi cluster discovery scan of AWS MSK
  docs         Show the documentation URL for this build
  help         Help about any command
  migration    Commands for migrating using CPC Gateway.
  report       Generate reports (costs, metrics, migration plan) from kcp scan data
  scan         Scan AWS resources for migration planning
  state        Operate on kcp-state.json files
  ui           Start the UI
  update       Update the kcp binary to the latest version
  version      Show version information

Flags:
  -h, --help      help for kcp
      --verbose   Enable verbose logging to console

Use "kcp [command] --help" for more information about a command.
```

## Zero-cut Migrations

With **Zero-cut Migrations**, clients make one change: update the bootstrap URL to point at the gateway. That's done in advance, no urgency. When the operator is ready to cut over, could be days later, could be weeks, they run one command. KCP fences traffic, waits for lag to hit zero, promotes the topics, flips routing to Confluent Cloud, and resumes traffic. Clients resume on CC. Operator is in full control the whole time: pick a single topic, a group of topics, or the whole cluster.

- Fully orchestrated cutover: gateway fencing, mirror topic promotion, traffic routing flip, all automated
- Real-time lag and offset monitoring so you pick the right window before and during the migration
- Auth swap built in: unauthenticated clusters can migrate to Confluent cloud with minimal client changes
- Works for any Kafka cluster migration that is Kafka compatible
- Single bootstrap URL change for clients. That's the entire ask for clients.

One gap: IAM is not supported by CC gateway at the moment.

## Links

- [GitHub - confluentinc/kcp](https://github.com/confluentinc/kcp) ⭐ 27 (Kafka Copy Paste)
- [KCP](https://confluentinc.github.io/kcp/0.8.7/)
- [Demo: Migrate to Confluent Cloud with Kafka Copy Paste (KCP) - YouTube](https://www.youtube.com/watch?v=9EflgaCNzhE)
