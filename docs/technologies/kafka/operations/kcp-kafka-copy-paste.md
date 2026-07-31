---
slug: kcp-kafka-copy-paste
title: kcp-kafka-copy-paste
description: Automated Kafka migration toolkit for zero-cut migrations to Confluent Cloud using CC Gateway, Cluster Linking, and KCP CLI orchestration
created: 2026-06-24
updated: 2026-07-30
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

### IAM Role / Policy Required

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "MSKScanPermissions",
      "Effect": "Allow",
      "Action": [
        "kafka:ListClustersV2",
        "kafka:ListReplicators",
        "kafka:ListVpcConnections",
        "kafka:GetCompatibleKafkaVersions",
        "kafka:GetBootstrapBrokers",
        "kafka:ListConfigurations",
        "kafka:DescribeClusterV2",
        "kafka:ListKafkaVersions",
        "kafka:ListNodes",
        "kafka:ListClusterOperationsV2",
        "kafka:ListScramSecrets",
        "kafka:ListClientVpcConnections",
        "kafka:GetClusterPolicy",
        "kafka:DescribeConfigurationRevision",
        "kafka:DescribeReplicator"
      ],
      "Resource": "*"
    },
    {
      "Sid": "MSKClusterConnect",
      "Effect": "Allow",
      "Action": [
        "kafka-cluster:Connect",
        "kafka-cluster:DescribeCluster"
      ],
      "Resource": "*"
    },
    {
      "Sid": "MSKTopicActions",
      "Effect": "Allow",
      "Action": [
        "kafka:ListTopics",
        "kafka:DescribeTopic",
        "kafka-cluster:DescribeTopic",
        "kafka-cluster:DescribeTopicDynamicConfiguration"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CostMetricsScanPermissions",
      "Effect": "Allow",
      "Action": [
        "cloudwatch:GetMetricData",
        "ce:GetCostAndUsage",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:ListMetrics"
      ],
      "Resource": "*"
    },
    {
      "Sid": "MSKNetworkingScanPermission",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeSubnets"
      ],
      "Resource": "*"
    },
    {
      "Sid": "MSKConnectScanPermissions",
      "Effect": "Allow",
      "Action": [
        "kafkaconnect:ListConnectors",
        "kafkaconnect:DescribeConnector"
      ],
      "Resource": "*"
    }
  ]
}
```

### Step 1: Discover MSK Clusters

Find all MSK clusters in your AWS account:

```bash
# Install kcp
curl -fsSL https://raw.githubusercontent.com/confluentinc/kcp/main/install.sh | sh

# Discover clusters in a region
kcp discover --region us-east-2

# Or scan all regions
kcp discover --all-regions

kcp discover --cluster-arn arn:aws:kafka:REGION:ACCOUNT_ID:cluster/CLUSTER_NAME/CLUSTER_ID

kcp discover --region ap-south-1,us-east-1 --metrics-granularity 1h --skip-topics
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
kcp ui --state-file kcp-state.json
# Upload kcp-state.json
# Shows: Costs, Cluster details, Metrics, Topics, Connectors, ACLs, Clients
# http://localhost:5556/

kcp report plan --state-file kcp-state.json

# Or generate CLI reports
kcp report costs --state-file kcp-state.json
kcp report metrics --state-file kcp-state.json
```

### Step 5: Generate Migration Assets / Commands

```bash
# Generate Terraform for Confluent Cloud resources
kcp create-asset target-infra \
    --state-file kcp-state.json \
    --source-cluster-id "arn:aws:kafka:us-east-2:492737776546:cluster/kcp-msk-cluster/abc-6841-402f-b8d1-abc-3" \
    --needs-environment \
    --env-name "kcp-migration-demo" \
    --needs-cluster \
    --cluster-name "migrated-from-msk" \
    --cluster-type "dedicated" \
    --cluster-availability "SINGLE_ZONE" \
    --cluster-cku 1 \
    --output-dir "target_infra"

#  Key parameters:
#   - --state-file kcp-state.json - Uses scan data
#   - --source-cluster-id - Which MSK cluster to migrate from
#   - --needs-environment + --env-name - Create new CC environment
#   - --needs-cluster + --cluster-name - Create new CC cluster
#   - --cluster-type dedicated - Dedicated cluster (vs enterprise)
#   - --cluster-cku 1 - 1 Confluent Kafka Unit sizing
#   - --output-dir target_infra - Where to write Terraform files

kcp create-asset target-infra --state-file kcp-state.json

# Generate Cluster Linking config (data replication)
kcp create-asset migration-infra --state-file kcp-state.json

# Generate topic migration scripts
kcp create-asset migrate-topics --state-file kcp-state.json
kcp create-asset migrate-topics --state-file kcp-state.json

# mode mirror
kcp create-asset migrate-topics \
  --state-file "kcp-state.json" \
  --cc-type "commercial" \
  --source-type "msk" \
  --cluster-id "arn:aws:kafka:us-east-2:492737776546:cluster/kcp-msk-cluster/abc-6841-402f-b8d1-abc-3" \
  --mode "mirror" \
  --target-cluster-id "lkc-12345" \
  --target-rest-endpoint "https://pkc-xxxx.us-east-2.aws.confluent.cloud:443" \
  --cluster-link-name "my-cluster-link" \
  --output-dir "target_infra"

# mode new
kcp create-asset migrate-topics \
  --state-file "kcp-state.json" \
  --cc-type "commercial" \
  --source-type "msk" \
  --cluster-id "arn:aws:kafka:us-east-2:492737776546:cluster/kcp-msk-cluster/abc-6841-402f-b8d1-abc-3" \
  --mode "new" \
  --target-cluster-id "lkc-12345" \
  --target-rest-endpoint "https://pkc-xxxx.us-east-2.aws.confluent.cloud:443" \
  --output-dir "target_infra"

kcp create-asset migrate-topics  --state-file "kcp-state.json"  --cc-type "commercial"  --source-type "msk"  --cluster-id "arn:aws:kafka:us-east-2:492737776546:cluster/kcp-msk-cluster/abc-6841-402f-b8d1-abc-3"  --mode "new"  --target-cluster-id "lkc-12345"  --target-rest-endpoint "https://pkc-xxxx.us-east-2.aws.confluent.cloud:443"  --output-dir "target_infra"

# Migrate ACLs to CC RBAC
kcp create-asset migrate-acls --state-file kcp-state.json

# discover connectors
kcp create-asset migrate-connectors connector-utility --state-file kcp-state.json

# Migrate connectors
kcp create-asset migrate-connectors msk --state-file kcp-state.json

kcp create-asset migrate-connectors self-managed
Required Flags:
      --state-file string
      --cc-environment-id string
      --cc-cluster-id string
      --cc-api-key string
      --cc-api-secret string
Source Flags:
      --source-type string
      --cluster-id string

# needs access to msk cluster
kcp create-asset migrate-connectors msk \
  --state-file "kcp-state.json" \
  --cluster-id "arn:aws:kafka:us-east-2:492737776546:cluster/kcp-msk-cluster/abc-6841-402f-b8d1-abc-3" \
  --cc-environment-id "env-12345" \
  --cc-cluster-id "lkc-12345" \
  --cc-api-key "DUMMY_API_KEY" \
  --cc-api-secret "DUMMY_API_SECRET" \
  --output-dir "target_infra"

kcp create-asset migrate-connectors msk  --state-file "kcp-state.json"  --cluster-id "arn:aws:kafka:us-east-2:492737776546:cluster/kcp-msk-cluster/abc-6841-402f-b8d1-abc-3"  --cc-environment-id "env-12345"  --cc-cluster-id "lkc-12345"  --cc-api-key "DUMMY_API_KEY"  --cc-api-secret "DUMMY_API_SECRET"  --output-dir "target_infra"

# Migrate schemas
kcp create-asset migrate-schemas --state-file kcp-state.json
kcp create-asset migrate-schemas --state-file kcp-state.json --url http://localhost:8081
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

## Troubleshooting Common Issues

### Issue 1: Authentication Failed (SASL/SCRAM)

**Error:** `SASL Authentication failed: Authentication failed during authentication due to invalid credentials`

**Root causes:**

1. Wrong username/password in credentials file
2. Secret not associated with the cluster
3. Wrong secret being used

**Solution:**

```bash
# Step 1: Find which secrets are actually associated with the cluster
aws kafka list-scram-secrets \
  --cluster-arn "arn:aws:kafka:region:account:cluster/name/uuid" \
  --region us-east-2

# Step 2: Get credentials from the CORRECT secret
aws secretsmanager get-secret-value \
  --secret-id "SECRET_NAME_FROM_STEP_1" \
  --region us-east-2 \
  --query SecretString --output text | jq

# Step 3: Update msk-credentials.yaml with correct username/password
```

**Real example:** Cluster had secret `AmazonMSK_kcp-ec2-user-secrets-manager` associated, but we were using `AmazonMSK_kcp-msk-tao-cluster_scram` which was NOT associated.

### Issue 2: Network Timeout (Private Endpoints)

**Error:** `dial tcp 172.32.44.231:9092: i/o timeout`

**Root cause:** MSK cluster has private VPC endpoints, not accessible from local machine

**Solution:**

```bash
# Check if cluster has public access
aws kafka describe-cluster-v2 \
  --cluster-arn "$CLUSTER_ARN" \
  --region us-east-2 \
  --query 'ClusterInfo.Provisioned.BrokerNodeGroupInfo.ConnectivityInfo.PublicAccess.Type'

# If PUBLIC access enabled, check security groups
aws kafka describe-cluster \
  --cluster-arn "$CLUSTER_ARN" \
  --region us-east-2 \
  --query 'ClusterInfo.BrokerNodeGroupInfo.SecurityGroups' \
  --output text

# Add your IP to security group
MY_IP=$(curl -s ifconfig.me)
aws ec2 authorize-security-group-ingress \
  --group-id sg-xxxxx \
  --protocol tcp \
  --port 9196 \
  --cidr $MY_IP/32 \
  --region us-east-2
```

**If private only:** Run kcp from EC2 instance in same VPC

```bash
# Generate bastion host Terraform
kcp create-asset bastion-host --state-file kcp-state.json

# SSH to bastion and run kcp from there
ssh ec2-user@bastion-ip
```

### Issue 3: Scanned 0 Clusters

**Error:** `Scan completed successfully. Scanned 0 cluster(s)`

**Root causes:**

1. Wrong credentials file format
2. Missing `regions:` top-level key
3. Network/auth issue (check verbose logs)

**Solution:**

Correct format:

```yaml
regions:  # REQUIRED top-level key
- name: us-east-2
  clusters:
  - name: cluster-name
    arn: arn:aws:kafka:region:account:cluster/name/uuid
    auth_method:
      sasl_scram:
        use: true
        username: "user"
        password: "pass"
        mechanism: SHA512
```

**Wrong format** (missing `regions:`):

```yaml
clusters:  # ❌ WRONG - will scan 0 clusters
  - name: cluster-name
```

### Issue 4: Terraform Variable Missing

**Error:** `No value for required variable subnet_cidr_ranges`

**Root cause:** kcp generates Terraform expecting private link setup even when not needed

**Solution:**

Add to `inputs.auto.tfvars`:

```bash
subnet_cidr_ranges = []
```

Or regenerate without `--needs-private-link` flag.

### Issue 5: AWS Session Expired

**Error:** `Your session has expired. Please reauthenticate using 'aws login'`

**Solution:**

```bash
# Re-authenticate
aws login

# Or export temporary credentials
export AWS_ACCESS_KEY_ID="..."
export AWS_SECRET_ACCESS_KEY="..."
export AWS_SESSION_TOKEN="..."
```

## Migration Validation Checklist

### Pre-Migration Baseline

Capture MSK state before migration:

```bash
# 1. Topic inventory
kafka-topics --bootstrap-server $MSK_BOOTSTRAP --list > msk-topics-baseline.txt
kafka-topics --bootstrap-server $MSK_BOOTSTRAP --describe > msk-topics-details.txt

# 2. Consumer groups
kafka-consumer-groups --bootstrap-server $MSK_BOOTSTRAP --list > msk-groups-baseline.txt

# 3. Consumer lag
for group in $(kafka-consumer-groups --bootstrap-server $MSK_BOOTSTRAP --list); do
  echo "=== $group ===" >> msk-lag-baseline.txt
  kafka-consumer-groups --bootstrap-server $MSK_BOOTSTRAP --group $group --describe >> msk-lag-baseline.txt
done

# 4. ACLs
kafka-acls --bootstrap-server $MSK_BOOTSTRAP --list > msk-acls-baseline.txt

# 5. kcp baseline report
kcp report metrics --state-file kcp-state.json > msk-metrics-baseline.txt
```

### Post-Migration Validation

After migration, verify:

#### 1. Topic Count & Names

```bash
# Create CC kafka.properties
cat > kafka.properties <<EOF
bootstrap.servers=pkc-xxxxx.us-east-2.aws.confluent.cloud:9092
security.protocol=SASL_SSL
sasl.mechanism=PLAIN
sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="API_KEY" password="API_SECRET";
EOF

# Compare topic counts
MSK_COUNT=$(kafka-topics --bootstrap-server $MSK_BOOTSTRAP --list | wc -l)
CC_COUNT=$(kafka-topics --command-config kafka.properties --bootstrap-server $CC_BOOTSTRAP --list | wc -l)

echo "MSK Topics: $MSK_COUNT"
echo "CC Topics: $CC_COUNT"

# Find missing topics
comm -23 \
  <(kafka-topics --bootstrap-server $MSK_BOOTSTRAP --list | sort) \
  <(kafka-topics --command-config kafka.properties --bootstrap-server $CC_BOOTSTRAP --list | sort) \
  > missing-topics.txt

if [ -s missing-topics.txt ]; then
  echo "⚠️ MISSING TOPICS:"
  cat missing-topics.txt
else
  echo "✅ All topics migrated"
fi
```

#### 2. Partition Counts

```bash
for topic in $(kafka-topics --bootstrap-server $MSK_BOOTSTRAP --list); do
  MSK_PARTS=$(kafka-topics --bootstrap-server $MSK_BOOTSTRAP --describe --topic $topic | grep PartitionCount | awk '{print $2}')
  CC_PARTS=$(kafka-topics --command-config kafka.properties --bootstrap-server $CC_BOOTSTRAP --describe --topic $topic 2>/dev/null | grep PartitionCount | awk '{print $2}')

  if [ "$MSK_PARTS" != "$CC_PARTS" ]; then
    echo "⚠️ MISMATCH: $topic - MSK:$MSK_PARTS CC:$CC_PARTS"
  fi
done
```

#### 3. Consumer Group Lag

```bash
# Check lag on CC cluster
for group in $(kafka-consumer-groups --command-config kafka.properties --bootstrap-server $CC_BOOTSTRAP --list | head -10); do
  echo "=== $group ==="
  kafka-consumer-groups --command-config kafka.properties --bootstrap-server $CC_BOOTSTRAP --group $group --describe
done
```

#### 4. RBAC Validation

```bash
# Check service account has correct permissions
confluent iam rbac role-binding list \
  --principal User:sa-xxxxx \
  --cloud-cluster lkc-xxxxx \
  --current-environment

# Expected roles:
# - CloudClusterAdmin
# - DataSteward (environment level)
# - ResourceOwner (Schema Registry)
```

#### 5. Connectivity Test

```bash
# Produce test message
echo "test-message" | kafka-console-producer \
  --bootstrap-server $CC_BOOTSTRAP \
  --producer.config kafka.properties \
  --topic test-migration

# Consume test message
kafka-console-consumer \
  --bootstrap-server $CC_BOOTSTRAP \
  --consumer.config kafka.properties \
  --topic test-migration \
  --from-beginning \
  --max-messages 1
```

### Critical Validation Checklist

**Before declaring migration complete:**

- [ ] Topic count matches (MSK == CC)
- [ ] Partition count matches per topic
- [ ] Consumer groups migrated
- [ ] Consumer lag `<1000` messages
- [ ] Service accounts have correct RBAC
- [ ] API keys created and working
- [ ] Schemas migrated (if using Schema Registry)
- [ ] Connectors migrated and running
- [ ] Client applications can connect to CC
- [ ] No authentication errors
- [ ] Monitoring configured in CC UI
- [ ] Terraform state saved

### Rollback Decision Criteria

**Rollback to MSK if:**

- Data loss detected (message count mismatch)
- Consumer lag `>10,000` and growing
- Application errors `>5%` of requests
- Critical consumer group missing
- Authentication failures after cutover

## Hands-On Learnings

**Key blockers encountered:**

1. **Wrong SCRAM secret** - Cluster used `AmazonMSK_kcp-ec2-user-secrets-manager` but we initially tried `AmazonMSK_kcp-msk-tao-cluster_scram`
   - **Fix:** Always run `aws kafka list-scram-secrets` first

2. **Security group blocking port 9196** - Public cluster but security group didn't allow our IP
   - **Fix:** Add IP to security group rules

3. **Credentials file format** - Missing top-level `regions:` key
   - **Fix:** Use exact format from `original_creds.yaml` example

4. **Private VPC endpoints** - Most production MSK clusters are private-only
   - **Fix:** Run kcp from EC2 bastion or enable public access

## Zero-cut Migrations

With **Zero-cut Migrations**, clients make one change: update the bootstrap URL to point at the gateway. That's done in advance, no urgency. When the operator is ready to cut over, could be days later, could be weeks, they run one command. KCP fences traffic, waits for lag to hit zero, promotes the topics, flips routing to Confluent Cloud, and resumes traffic. Clients resume on CC. Operator is in full control the whole time: pick a single topic, a group of topics, or the whole cluster.

### Cut over carefully

- For **sink connectors**: pause the MSK connector, deploy the Confluent Cloud equivalent against replicated topics, and start from the correct offset.
- For **source connectors**: pause the source connector, capture the last source offset from internal offset storage, then start the Confluent Cloud connector from that point.

### Core Architecture

Zero-cut migrations route all Kafka client traffic through a Kafka-aware proxy gateway deployed in (or adjacent to) the source cluster's network. The gateway forwards to source while Cluster Linking replicates, then atomically flips to Confluent Cloud once replication lag is zero.

**Three Main Components:**

1. **KCP CLI**
   - Orchestrates cutover via three commands: `kcp migration init`, `kcp migration lag-check`, `kcp migration execute`
   - Can be installed as a Confluent CLI plugin
   - Apache 2.0 licensed, free to use

2. **CC Gateway (Confluent Cloud Gateway)**
   - Kafka protocol proxy deployed in (or adjacent to) the source cluster's network
   - Handles auth translation between source credentials and Confluent Cloud credentials
   - Switches routing to Confluent Cloud at cutover, all without a restart
   - Deployed on Kubernetes via Confluent for Kubernetes
   - **Requires Confluent Platform license** (Confluent Cloud Gateway Add-On)
   - Org-scoped: one license covers all Confluent Cloud clusters in a customer's org
   - Trial mode supports up to 4 routes

3. **Cluster Linking**
   - Replicates topics from the source cluster to the destination in real time, including consumer offset synchronization
   - Available on Dedicated and Enterprise cluster types only
   - Consumer offset sync (`consumer.offset.sync.enable=true`) must be enabled before migration

### Client Experience During Cutover

During cutover, clients see `BROKER_NOT_AVAILABLE` with message "Migration to Confluent Cloud in progress. Your client will automatically retry"

- Triggers automatic retries in all standard Kafka clients (Java, Python, Go, librdkafka) - no code changes required
- Brief partial downtime window of approximately 60 seconds
- Single bootstrap URL change for clients - that's the entire ask

### Authentication Support

**Supported source → destination combinations:**

- mTLS → CC SASL/PLAIN, CC mTLS, CC OAuth
- SASL/SCRAM → CC SASL/PLAIN, CC OAuth
- Unauthenticated → all CC auth types

**Not supported:**

- **IAM** (requires pre-migration to SCRAM or mTLS)
- SCRAM → CC mTLS

**Two auth modes via `--auth-mode`:**

- `dest_swap`: clients present source credentials, gateway swaps for CC
- `source_swap`: clients present CC credentials, gateway swaps for source

**CRITICAL:** IAM clients must migrate to SCRAM or mTLS before gateway onboarding

### Migration Execution Process

**Prerequisites:**

- Gateway deployed in Kubernetes
- Cluster Linking configured and replicating
- Client already pointing at gateway bootstrap URL
- Three gateway CR files prepared

**Execution steps:**

```bash
# 1. Initialize migration (validates setup, creates migration plan)
kcp migration init

# 2. Monitor replication lag in real-time
kcp migration lag-check

# 3. Perform cutover in four phases: Pre-flight, Block, Promote, Switch+unblock
kcp migration execute
```

**Cutover phases:**

1. **Pre-flight**: Validates setup
2. **Block**: Fences traffic to source cluster
3. **Promote**: Promotes mirror topics via Cluster Linking
4. **Switch+unblock**: Flips routing to CC and resumes traffic

### Key Constraints & Limitations

- **IAM not supported**: IAM authentication requires migration to SCRAM or mTLS first
- **Consumer offset sync required**: Must be enabled on cluster link before migration
- **One-way promotion**: Topic promotion via Cluster Linking is one-way
  - Rollback after promotion: possible (no data loss) but the cluster link is broken
- **Cluster type requirement**: Cluster Linking only available on Dedicated and Enterprise clusters
- **Licensing**: CC Gateway requires Confluent Cloud Gateway Add-On license (org-scoped)

### Benefits

- Fully orchestrated cutover: gateway fencing, mirror topic promotion, traffic routing flip, all automated
- Real-time lag and offset monitoring so you pick the right window before and during the migration
- Auth swap built in: unauthenticated clusters can migrate to Confluent cloud with minimal client changes
- Works for any Kafka-compatible cluster migration
- Operator in full control: pick a single topic, a group of topics, or the whole cluster

## Connect Migration Utility

The **Connect Migration Utility** is the recommended tool to translate configs to their fully managed equivalents, including some class/version conversions and offset-preservation support.

[GitHub - confluentinc/connect-migration-utility · GitHub](https://github.com/confluentinc/connect-migration-utility/)

[Migrate Kafka Connectors to Fully Managed—Fast](https://www.confluent.io/blog/migrate-self-fully-managed-connectors/)

## Links

- [GitHub - confluentinc/kcp](https://github.com/confluentinc/kcp) ⭐ 27 (Kafka Copy Paste)
- [KCP Documentation](https://confluentinc.github.io/kcp/0.8.7/)
- [Getting Started with Zero-Cut Migrations](https://confluentinc.github.io/kcp/0.8.7/getting-started-with-zero-cut-migrations/)
- [Demo: Migrate to Confluent Cloud with Kafka Copy Paste (KCP) - YouTube](https://www.youtube.com/watch?v=9EflgaCNzhE)
- [Migrate with kcp - Confluent Cloud Docs](https://docs.confluent.io/cloud/current/clusters/migrate-kcp.html)
