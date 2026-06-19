---
slug: /devops/cicd/argocd
title: ArgoCD Workflows and Pipelines
description: Discover ArgoCD's container-native workflow engine for Kubernetes, enabling
  efficient CI/CD and parallel job orchestration with GitOps.
created: '2026-05-09'
last_update: '2026-05-19'
---

# ArgoCD

### Workflows and Pipelines

Container native workflow engine for Kubernetes supporting both DAG and step based workflows

Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. Argo Workflows is implemented as a Kubernetes CRD.

- Define workflows where each step in the workflow is a container.
- Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a graph (DAG).
- Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo Workflows on Kubernetes.
- Run CI/CD pipelines natively on Kubernetes without configuring complex software development products.

### Continuous Delivery

Declarative Continuous Delivery following Gitops

Application definitions, configurations, and environments should be declarative and version controlled. Application deployment and lifecycle management should be automated, auditable, and easy to understand.

### Advanced Deployment Controller

Additional Kubernetes deployment strategies such as Blue-Green and Canary

### Events

Event based dependency manager for Kubernetes

What Argo does differently is how they manage the actual CI/CD. It is specifically developed for Kubernetes and integrates with it through CRD's (Custom Resource Definitions). It defines a new CRD which is the 'Workflow'. In this workflow you define what needs to happen by laying out steps in a yaml format. Each step runs inits own Docker containeron your own Kubernetes cluster.

### Others

- [GitHub - argoproj/argo-workflows: Workflow Engine for Kubernetes · GitHub](https://github.com/argoproj/argo) ⭐ 17k
- [Home \| Argo](https://argoproj.github.io)
- https://argoproj.github.io/argo-rollouts
- https://argoproj.github.io/argo-events/setup/kafka

## Overview

**ArgoCD** is a declarative, GitOps continuous delivery tool for Kubernetes. It automatically syncs your K8s cluster state with Git repository configurations.

**Type:** Continuous Delivery (GitOps)

**Key Features:**

- Declarative GitOps-based continuous delivery
- Automated deployment and lifecycle management
- Multi-cluster, multi-tenant support
- Visual UI for application state and diff
- Automated drift detection and self-healing
- SSO integration (SAML, OIDC, LDAP)
- RBAC for multi-team environments
- Webhook integrations

**Architecture:** Kubernetes-native, runs as K8s controllers

## Core Concepts

### GitOps Workflow

```text
[Git Repository]
    ↓ (Git commit/push)
[ArgoCD detects change]
    ↓ (Compare desired vs actual)
[Sync if different]
    ↓ (Apply manifests)
[Kubernetes Cluster]
```

**Principles:**

1. **Git as single source of truth** - All desired state in Git
2. **Declarative** - Kubernetes manifests describe desired state
3. **Automated** - Automatic sync from Git to cluster
4. **Auditable** - Full history in Git
5. **Self-healing** - Detect and correct drift

### Components

**ArgoCD Server:**

- API server + Web UI
- Application management
- Repository/cluster management
- RBAC enforcement

**Repository Server:**

- Maintains local cache of Git repositories
- Generates Kubernetes manifests
- Supports Helm, Kustomize, Jsonnet

**Application Controller:**

- Monitors applications
- Compares desired state (Git) vs actual state (K8s)
- Triggers sync operations

**Dex (Optional):**

- SSO/OIDC provider integration
- User authentication

**Redis:**

- Caching layer
- Temporary data storage

## Installation

### Quick Start (Non-HA)

```bash
# Create namespace
kubectl create namespace argocd

# Install ArgoCD
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Wait for pods
kubectl wait --for=condition=Ready pods --all -n argocd --timeout=300s

# Get initial admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# Port forward to access UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Access at https://localhost:8080
# Username: admin
# Password: (from above command)
```

### Production Install (HA)

```bash
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml
```

**Differences:**

- Multiple replicas of argocd-server
- Multiple replicas of argocd-repo-server
- Redis HA cluster (3 replicas)
- argocd-application-controller runs as StatefulSet

### Helm Install

```bash
helm repo add argo https://argoproj.github.io/argo-helm
helm repo update

helm install argocd argo/argo-cd \
  --namespace argocd \
  --create-namespace \
  --set server.service.type=LoadBalancer
```

### CLI Installation

```bash
# macOS
brew install argocd

# Linux
curl -sSL -o argocd https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64
chmod +x argocd
sudo mv argocd /usr/local/bin/

# Login
argocd login localhost:8080 --username admin --password <password>

# Change password
argocd account update-password
```

## Application Configuration

### Basic Application Manifest

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  # Source repository
  source:
    repoURL: https://github.com/myorg/myapp
    targetRevision: HEAD
    path: k8s/overlays/production

  # Destination cluster
  destination:
    server: https://kubernetes.default.svc
    namespace: production

  # Sync policy
  syncPolicy:
    automated:
      prune: true      # Delete resources not in Git
      selfHeal: true   # Auto-sync on drift
      allowEmpty: false
    syncOptions:
      - CreateNamespace=true
    retry:
      limit: 5
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m
```

### Using Helm Charts

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp-helm
  namespace: argocd
spec:
  source:
    repoURL: https://charts.example.com
    chart: myapp
    targetRevision: 1.2.3
    helm:
      releaseName: myapp
      values: |
        replicaCount: 3
        image:
          tag: v1.2.3
      parameters:
        - name: service.type
          value: LoadBalancer

  destination:
    server: https://kubernetes.default.svc
    namespace: production

  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

### Using Kustomize

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp-kustomize
  namespace: argocd
spec:
  source:
    repoURL: https://github.com/myorg/myapp
    targetRevision: main
    path: overlays/production
    kustomize:
      images:
        - myapp:v1.2.3
      commonLabels:
        environment: production
      namePrefix: prod-

  destination:
    server: https://kubernetes.default.svc
    namespace: production
```

## CLI Operations

### Application Management

```bash
# List applications
argocd app list

# Get application details
argocd app get myapp

# Create application
argocd app create myapp \
  --repo https://github.com/myorg/myapp \
  --path k8s/overlays/production \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace production

# Sync application
argocd app sync myapp

# Sync with prune
argocd app sync myapp --prune

# Delete application
argocd app delete myapp

# Enable auto-sync
argocd app set myapp --sync-policy automated

# Disable auto-sync
argocd app set myapp --sync-policy none

# Set auto-prune
argocd app set myapp --auto-prune

# Set self-heal
argocd app set myapp --self-heal
```

### Diff and Sync

```bash
# Show diff between Git and cluster
argocd app diff myapp

# Show manifest
argocd app manifests myapp

# Sync specific resource
argocd app sync myapp --resource Deployment:myapp

# Rollback to previous sync
argocd app rollback myapp

# History
argocd app history myapp
```

### Repository Management

```bash
# Add repository
argocd repo add https://github.com/myorg/myapp

# Add private repo (SSH)
argocd repo add git@github.com:myorg/myapp.git \
  --ssh-private-key-path ~/.ssh/id_rsa

# Add private repo (HTTPS)
argocd repo add https://github.com/myorg/myapp \
  --username myuser \
  --password mytoken

# List repos
argocd repo list

# Remove repo
argocd repo rm https://github.com/myorg/myapp
```

### Cluster Management

```bash
# Add external cluster
argocd cluster add my-cluster

# List clusters
argocd cluster list

# Remove cluster
argocd cluster rm https://cluster-api-server
```

## Web UI Features

### Application View

**Overview:**

- Application health status
- Sync status (synced/out-of-sync)
- Last sync time
- Git revision

**Resource Tree:**

- Visual DAG of all K8s resources
- Health status per resource
- Pod logs viewer
- Events viewer
- Resource diff viewer

**App Details:**

- Parameters and source
- Sync policy configuration
- Sync history
- Manifest preview

### Operations

- **Manual Sync** - Trigger deployment
- **Refresh** - Fetch latest Git state
- **Hard Refresh** - Clear cache and refresh
- **Rollback** - Revert to previous sync
- **Terminate** - Kill running sync operation

## Multi-Cluster Management

### Register Additional Clusters

```bash
# List contexts
kubectl config get-contexts

# Add cluster
argocd cluster add <context-name>

# Example
argocd cluster add staging-cluster
argocd cluster add production-cluster
```

### Deploy to Multiple Clusters

**ApplicationSet:**

```yaml
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: myapp-multicluster
  namespace: argocd
spec:
  generators:
    - list:
        elements:
          - cluster: staging
            url: https://staging.k8s.local
            namespace: staging
          - cluster: production
            url: https://prod.k8s.local
            namespace: production

  template:
    metadata:
      name: '{{cluster}}-myapp'
    spec:
      source:
        repoURL: https://github.com/myorg/myapp
        targetRevision: HEAD
        path: 'overlays/{{cluster}}'
      destination:
        server: '{{url}}'
        namespace: '{{namespace}}'
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
```

## Advanced Features

### Projects

Logical grouping of applications with RBAC:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: myproject
  namespace: argocd
spec:
  description: My Project

  # Source repos
  sourceRepos:
    - 'https://github.com/myorg/*'

  # Destination clusters/namespaces
  destinations:
    - namespace: 'production'
      server: https://kubernetes.default.svc
    - namespace: 'staging'
      server: https://kubernetes.default.svc

  # Cluster resource whitelist
  clusterResourceWhitelist:
    - group: '*'
      kind: '*'

  # Namespace resource blacklist
  namespaceResourceBlacklist:
    - group: ''
      kind: ResourceQuota

  # Roles
  roles:
    - name: developer
      policies:
        - p, proj:myproject:developer, applications, get, myproject/*, allow
        - p, proj:myproject:developer, applications, sync, myproject/*, allow
```

### Sync Windows

Restrict sync operations to specific time windows:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: myproject
spec:
  syncWindows:
    - kind: allow
      schedule: '0 9-17 * * 1-5'  # Mon-Fri, 9am-5pm
      duration: 8h
      applications:
        - '*-production'
    - kind: deny
      schedule: '0 0-6 * * *'  # Midnight-6am daily
      duration: 6h
      applications:
        - '*'
```

### Sync Hooks

Execute jobs during sync operations:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: db-migrate
  annotations:
    argocd.argoproj.io/hook: PreSync
    argocd.argoproj.io/hook-delete-policy: HookSucceeded
spec:
  template:
    spec:
      containers:
      - name: migrate
        image: myapp:latest
        command: ["npm", "run", "migrate"]
      restartPolicy: Never
```

**Hook Types:**

- `PreSync` - Before applying manifests
- `Sync` - During manifest application
- `PostSync` - After all resources are healthy
- `SyncFail` - When sync fails
- `Skip` - Skip resource

**Delete Policies:**

- `HookSucceeded` - Delete after successful execution
- `HookFailed` - Delete after failed execution
- `BeforeHookCreation` - Delete previous hook before creating new one

### Resource Hooks and Waves

Control deployment order:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: database
  annotations:
    argocd.argoproj.io/sync-wave: "0"  # Deploy first
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  annotations:
    argocd.argoproj.io/sync-wave: "1"  # Deploy after wave 0
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  annotations:
    argocd.argoproj.io/sync-wave: "2"  # Deploy last
```

## Integration with CI/CD

### CI builds, ArgoCD deploys (Recommended)

**GitHub Actions + ArgoCD:**

```yaml
name: CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # Build and push Docker image
      - uses: actions/checkout@v4
      - name: Build Docker
        run: |
          docker build -t myapp:${{ github.sha }} .
          docker push myapp:${{ github.sha }}

      # Update K8s manifest in Git
      - name: Update manifest
        run: |
          git clone https://github.com/myorg/k8s-manifests
          cd k8s-manifests
          sed -i "s|image: myapp:.*|image: myapp:${{ github.sha }}|" deployment.yaml
          git commit -am "Update image to ${{ github.sha }}"
          git push

      # ArgoCD automatically syncs the change
```

### Image Updater

Auto-update image tags in Git:

```bash
# Install ArgoCD Image Updater
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj-labs/argocd-image-updater/stable/manifests/install.yaml
```

**Annotate application:**

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  annotations:
    argocd-image-updater.argoproj.io/image-list: myimage=myregistry/myapp
    argocd-image-updater.argoproj.io/myimage.update-strategy: semver
    argocd-image-updater.argoproj.io/write-back-method: git
```

## RBAC Configuration

### User Management

```bash
# Create local user
argocd account update-password \
  --account developer \
  --new-password password123

# List users
argocd account list
```

### Configure RBAC

**argocd-rbac-cm ConfigMap:**

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-rbac-cm
  namespace: argocd
data:
  policy.default: role:readonly
  policy.csv: |
    # Developers can view and sync apps
    p, role:developer, applications, get, */*, allow
    p, role:developer, applications, sync, */*, allow
    p, role:developer, repositories, get, *, allow

    # DevOps can do everything
    p, role:devops, applications, *, */*, allow
    p, role:devops, clusters, *, *, allow
    p, role:devops, repositories, *, *, allow
    p, role:devops, projects, *, *, allow

    # Group mappings (from SSO)
    g, developers, role:developer
    g, devops-team, role:devops
```

### SSO Integration (OIDC)

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-cm
  namespace: argocd
data:
  url: https://argocd.example.com
  oidc.config: |
    name: Google
    issuer: https://accounts.google.com
    clientID: <client-id>
    clientSecret: <client-secret>
    requestedScopes:
      - openid
      - profile
      - email
```

## Monitoring and Alerts

### Prometheus Metrics

ArgoCD exposes metrics at `/metrics`:

- `argocd_app_info` - Application metadata
- `argocd_app_sync_total` - Sync counters
- `argocd_app_health_status` - Health status
- `argocd_app_k8s_request_total` - K8s API calls

### Grafana Dashboard

```bash
# Import official dashboard
# Dashboard ID: 14584
```

### Webhook Notifications

**Slack:**

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-notifications-cm
  namespace: argocd
data:
  service.slack: |
    token: $slack-token
  template.app-deployed: |
    message: |
      Application {{.app.metadata.name}} is now running new version.
  trigger.on-deployed: |
    - when: app.status.operationState.phase in ['Succeeded']
      send: [app-deployed]
```

## Best Practices

### Repository Structure

**Option 1: Mono-repo**

```text
my-app/
├── src/                 # Application code
├── k8s/
│   ├── base/           # Base manifests
│   └── overlays/
│       ├── dev/
│       ├── staging/
│       └── production/
└── .github/
    └── workflows/
```

**Option 2: Separate repos**

```text
app-code-repo/          # Application code + Dockerfile
k8s-manifests-repo/     # Kubernetes manifests only
├── apps/
│   ├── app1/
│   └── app2/
└── clusters/
    ├── staging/
    └── production/
```

### Application Organization

- **One app per microservice** - Easier to manage
- **Use ApplicationSets** - For multi-cluster/multi-env
- **Leverage Projects** - Logical grouping + RBAC
- **Enable auto-sync with caution** - Start manual, enable for stable apps

### Security

- **Enable RBAC** - Restrict access per team
- **Use SSO** - Integrate with company IdP
- **Least privilege** - Limit cluster permissions
- **Private repos** - Use SSH keys or tokens
- **Audit logs** - Enable and review regularly

### Performance

- **Resource limits** - Set CPU/memory for ArgoCD components
- **Prune old resources** - Enable auto-prune
- **Refresh interval** - Default 3min, adjust as needed
- **Cache tuning** - Configure Redis appropriately

## Argo Rollouts (Advanced Deployments)

Progressive delivery controller for K8s:

```bash
kubectl create namespace argo-rollouts
kubectl apply -n argo-rollouts -f https://github.com/argoproj/argo-rollouts/releases/latest/download/install.yaml
```

### Canary Deployment

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: myapp
spec:
  replicas: 5
  strategy:
    canary:
      steps:
        - setWeight: 20
        - pause: {duration: 1m}
        - setWeight: 40
        - pause: {duration: 1m}
        - setWeight: 60
        - pause: {duration: 1m}
        - setWeight: 80
        - pause: {duration: 1m}
  template:
    spec:
      containers:
        - name: myapp
          image: myapp:v2
```

### Blue-Green Deployment

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: myapp
spec:
  replicas: 3
  strategy:
    blueGreen:
      activeService: myapp-active
      previewService: myapp-preview
      autoPromotionEnabled: false
  template:
    spec:
      containers:
        - name: myapp
          image: myapp:v2
```

## Troubleshooting

### Application Not Syncing

```bash
# Check sync status
argocd app get myapp

# Force refresh
argocd app get myapp --refresh

# Hard refresh (clear cache)
argocd app get myapp --hard-refresh

# Check diff
argocd app diff myapp

# Manual sync
argocd app sync myapp
```

### Application Stuck in Progressing

```bash
# Check resource status
kubectl get all -n <namespace>

# Check events
kubectl get events -n <namespace>

# Check pod logs
kubectl logs -n <namespace> <pod-name>

# Terminate operation
argocd app terminate-op myapp
```

### Repository Connection Issues

```bash
# Test connection
argocd repo get https://github.com/myorg/myapp

# Check credentials
kubectl get secret -n argocd

# Re-add repository
argocd repo rm https://github.com/myorg/myapp
argocd repo add https://github.com/myorg/myapp
```

### High Memory Usage

```bash
# Increase limits
kubectl edit deployment argocd-repo-server -n argocd

# Clear cache
kubectl delete pod -n argocd -l app.kubernetes.io/name=argocd-repo-server
```

## Common Patterns

### Environment Promotion

```text
[Dev] --manual sync--> [Staging] --manual sync--> [Production]
```

**Git branching:**

- `main` → Production
- `staging` → Staging
- `develop` → Dev

**App config:**

```yaml
# Production app
targetRevision: main
path: overlays/production

# Staging app
targetRevision: staging
path: overlays/staging

# Dev app
targetRevision: develop
path: overlays/dev
```

### Multi-Tenant Setup

```yaml
# Project per team
kind: AppProject
metadata:
  name: team-a
spec:
  sourceRepos:
    - 'https://github.com/team-a/*'
  destinations:
    - namespace: 'team-a-*'
      server: '*'
```

## Resources

### Official Documentation

- [ArgoCD Docs](https://argo-cd.readthedocs.io/)
- [Getting Started](https://argo-cd.readthedocs.io/en/stable/getting_started/)
- [User Guide](https://argo-cd.readthedocs.io/en/stable/user-guide/)
- [Operator Manual](https://argo-cd.readthedocs.io/en/stable/operator-manual/)

### Related Projects

- [Argo Workflows](https://argoproj.github.io/workflows/)
- [Argo Rollouts](https://argoproj.github.io/argo-rollouts/)
- [Argo Events](https://argoproj.github.io/argo-events/)

### Learning Resources

- [GitOps with ArgoCD](https://www.youtube.com/watch?v=MeU5_k9ssrs)
- [ArgoCD Tutorial](https://www.youtube.com/watch?v=c4v7wGqKcEY)
- [GitOps Best Practices](https://www.weave.works/technologies/gitops/)

### Community

- [GitHub](https://github.com/argoproj/argo-cd) ⭐ 23k
- [Slack](https://argoproj.github.io/community/join-slack)
- [CNCF Landscape](https://landscape.cncf.io/)

## See Also

- [CI/CD Comparison](devops/cicd/comparison.md)
- [GitHub Actions](devops/cicd/github-actions.md)
- [Flux](devops/others/other-cicd.md#flux)
- [Kubernetes Tools](devops/kubernetes/tools.md)
