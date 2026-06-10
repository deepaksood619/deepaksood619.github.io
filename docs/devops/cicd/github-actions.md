# GitHub Actions

## Overview

**GitHub Actions** is GitHub's built-in CI/CD and workflow automation platform that enables you to build, test, and deploy code directly from your GitHub repository.

**Key Features:**

- Workflow automation triggered by GitHub events
- YAML-based configuration (`.github/workflows/`)
- Massive marketplace of reusable actions (10,000+ actions)
- Self-hosted runners for custom environments
- Matrix builds for testing across multiple platforms
- Built-in secrets management
- Free tier for public repositories

## Architecture

### Components

**Workflows:**

- YAML files in `.github/workflows/` directory
- Define automation triggered by events
- Can contain one or more jobs

**Jobs:**

- Set of steps executed on a runner
- Run in parallel by default (configurable)
- Each job runs in fresh virtual environment

**Steps:**

- Individual tasks within a job
- Can run commands or actions
- Execute sequentially within a job

**Actions:**

- Reusable units of code
- From Marketplace or custom-built
- Can be referenced in workflow steps

**Runners:**

- Servers that execute workflows
- GitHub-hosted (Ubuntu, Windows, macOS)
- Self-hosted on your infrastructure

**Events:**

- Triggers for workflows (push, pull_request, schedule, etc.)
- 40+ event types available

### Workflow Execution Model

```text
[GitHub Event]
    → [Workflow Triggered]
        → [Job 1] → [Step 1] → [Step 2] → [Step 3]
        → [Job 2] → [Step 1] → [Step 2]
        → [Job 3] (depends on Job 1)
```

## Basic Workflow Syntax

### Simple CI Workflow

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm test

    - name: Build
      run: npm run build
```

### Matrix Builds

Test across multiple versions/platforms:

```yaml
name: Matrix Build

on: [push]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [18, 20, 22]

    steps:
    - uses: actions/checkout@v4
    - name: Setup Node ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm test
```

### Conditional Execution

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'

    steps:
    - name: Deploy to production
      run: ./deploy.sh
```

## Common Triggers

```yaml
on:
  # Single event
  push:

  # Multiple events
  [push, pull_request]

  # Event with filters
  push:
    branches:
      - main
      - 'releases/**'
    paths:
      - 'src/**'
      - '!docs/**'
    tags:
      - v*

  # Pull request events
  pull_request:
    types: [opened, synchronize, reopened]

  # Scheduled (cron)
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC

  # Manual trigger
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deployment environment'
        required: true
        default: 'staging'

  # Repository dispatch (API-triggered)
  repository_dispatch:
    types: [deploy-event]
```

## Popular Marketplace Actions

### Essential Actions

**Checkout:**

```yaml
- uses: actions/checkout@v4
  with:
    fetch-depth: 0  # Full history
    submodules: true
```

**Setup Languages:**

```yaml
# Node.js
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'

# Python
- uses: actions/setup-python@v5
  with:
    python-version: '3.11'
    cache: 'pip'

# Java
- uses: actions/setup-java@v4
  with:
    distribution: 'temurin'
    java-version: '17'
    cache: 'maven'
```

**Caching:**

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

**Artifacts:**

```yaml
# Upload
- uses: actions/upload-artifact@v4
  with:
    name: build-output
    path: dist/
    retention-days: 7

# Download
- uses: actions/download-artifact@v4
  with:
    name: build-output
    path: dist/
```

### Deployment Actions

**GitHub Pages:**

```yaml
- uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```

**Docker Build/Push:**

```yaml
- uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: user/app:latest
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

**AWS:**

```yaml
- uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1
```

### Quality Checks

**Retry Failed Steps:**

```yaml
- uses: nick-fields/retry@v3
  with:
    timeout_minutes: 10
    max_attempts: 3
    command: npm run integration-tests
```

**Lighthouse CI:**

```yaml
- uses: treosh/lighthouse-ci-action@v11
  with:
    urls: |
      https://example.com
      https://example.com/about
    uploadArtifacts: true
```

**HTML Validation:**

```yaml
- uses: anishathalye/proof-html@v2
  with:
    directory: ./build
```

## Kubernetes Deployment

### Using kubectl

```yaml
name: Deploy to K8s

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Build Docker image
      run: |
        docker build -t myapp:${{ github.sha }} .

    - name: Push to registry
      run: |
        echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
        docker push myapp:${{ github.sha }}

    - name: Setup kubectl
      uses: azure/setup-kubectl@v4
      with:
        version: 'v1.28.0'

    - name: Configure kubeconfig
      run: |
        echo "${{ secrets.KUBECONFIG }}" > kubeconfig
        export KUBECONFIG=kubeconfig

    - name: Deploy to K8s
      run: |
        kubectl set image deployment/myapp myapp=myapp:${{ github.sha }}
        kubectl rollout status deployment/myapp
```

### Using Helm

```yaml
- name: Setup Helm
  uses: azure/setup-helm@v4
  with:
    version: 'v3.13.0'

- name: Deploy with Helm
  run: |
    helm upgrade --install myapp ./helm-chart \
      --set image.tag=${{ github.sha }} \
      --namespace production \
      --wait
```

### Using K8s Actions

```yaml
- uses: azure/k8s-set-context@v4
  with:
    kubeconfig: ${{ secrets.KUBECONFIG }}

- uses: azure/k8s-deploy@v5
  with:
    namespace: production
    manifests: |
      k8s/deployment.yaml
      k8s/service.yaml
    images: myapp:${{ github.sha }}
```

## Self-Hosted Runners

### Running on Kubernetes

**Deployment:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: github-runner
spec:
  replicas: 3
  selector:
    matchLabels:
      app: github-runner
  template:
    metadata:
      labels:
        app: github-runner
    spec:
      containers:
      - name: runner
        image: myoung34/github-runner:latest
        env:
        - name: REPO_URL
          value: https://github.com/myorg/myrepo
        - name: RUNNER_TOKEN
          valueFrom:
            secretKeyRef:
              name: runner-secret
              key: token
        - name: RUNNER_WORKDIR
          value: /tmp/runner
        volumeMounts:
        - name: docker-sock
          mountPath: /var/run/docker.sock
      volumes:
      - name: docker-sock
        hostPath:
          path: /var/run/docker.sock
```

**Reference:** [Self-hosted runners on K8s](https://medium.com/nerd-for-tech/github-actions-self-hosted-runner-on-kubernetes-55d077520a31)

### Using Actions Runner Controller (ARC)

```bash
# Install cert-manager (prerequisite)
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml

# Install ARC
helm install arc \
  --namespace arc-systems \
  --create-namespace \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller

# Create runner scale set
helm install arc-runner-set \
  --namespace arc-runners \
  --create-namespace \
  --set githubConfigUrl="https://github.com/myorg/myrepo" \
  --set githubConfigSecret.github_token="$GITHUB_PAT" \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
```

## Secrets Management

### Repository Secrets

```yaml
steps:
  - name: Use secret
    run: echo "${{ secrets.API_KEY }}"
    env:
      API_KEY: ${{ secrets.API_KEY }}
```

**Setting secrets:**

- GitHub UI: Settings → Secrets → Actions
- GitHub CLI: `gh secret set SECRET_NAME`

**Reference:** [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)

### Environment Secrets

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production  # Uses production environment secrets
    steps:
      - run: ./deploy.sh
        env:
          API_KEY: ${{ secrets.API_KEY }}
```

### OIDC with Cloud Providers

**AWS (no credentials needed):**

```yaml
permissions:
  id-token: write
  contents: read

steps:
  - uses: aws-actions/configure-aws-credentials@v4
    with:
      role-to-assume: arn:aws:iam::123456789012:role/GitHubActionsRole
      aws-region: us-east-1
```

## Advanced Patterns

### Reusable Workflows

**.github/workflows/reusable-deploy.yml:**

```yaml
name: Reusable Deploy

on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
    secrets:
      deploy-token:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: ./deploy.sh ${{ inputs.environment }}
        env:
          TOKEN: ${{ secrets.deploy-token }}
```

**Calling workflow:**

```yaml
jobs:
  prod-deploy:
    uses: ./.github/workflows/reusable-deploy.yml
    with:
      environment: production
    secrets:
      deploy-token: ${{ secrets.PROD_TOKEN }}
```

### Composite Actions

**.github/actions/setup-project/action.yml:**

```yaml
name: Setup Project
description: Install dependencies and cache

runs:
  using: composite
  steps:
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
      shell: bash
```

**Usage:**

```yaml
- uses: ./.github/actions/setup-project
```

### Job Dependencies

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: npm run build

  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: npm test

  deploy:
    needs: [build, test]
    runs-on: ubuntu-latest
    steps:
      - run: ./deploy.sh
```

## Local Testing

### Using Act

```bash
# Install
brew install act

# List workflows
act -l

# Run push event
act push

# Run specific job
act -j test

# Run with secrets
act -s GITHUB_TOKEN=$GITHUB_TOKEN

# Run with custom event
act workflow_dispatch -e event.json
```

**Reference:** [nektos/act](https://github.com/nektos/act) ⭐ 71k

## Performance Optimization

### Caching Strategy

```yaml
- uses: actions/cache@v4
  with:
    path: |
      ~/.npm
      ~/.cache
      node_modules
    key: ${{ runner.os }}-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-deps-
```

### Docker Layer Caching

```yaml
- uses: docker/setup-buildx-action@v3

- uses: docker/build-push-action@v5
  with:
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

### Concurrency Control

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true  # Cancel old runs
```

## Cost Optimization

### Blacksmith - Faster GitHub Runners

**Benefits:**

- 2-3x faster than standard runners
- 50% cost reduction
- Drop-in replacement (no code changes)

```yaml
jobs:
  build:
    runs-on: blacksmith-4vcpu-ubuntu-2204  # Blacksmith runner
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
```

**Links:**

- [Blacksmith](https://blacksmith.sh/)
- [Why Blacksmith?](https://docs.blacksmith.sh/getting-started/why-blacksmith)
- [Overview Video](https://www.youtube.com/watch?v=lZO1HExEvtE)

### Best Practices

- Use self-hosted runners for private repos
- Cache dependencies aggressively
- Run expensive jobs only on main branch
- Use matrix builds judiciously
- Set appropriate artifact retention
- Cancel redundant workflow runs

## Common Workflow Examples

### Node.js CI/CD

```yaml
name: Node.js CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Docker Build and Push

```yaml
name: Docker Build

on:
  push:
    tags:
      - 'v*'

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - uses: docker/metadata-action@v5
        id: meta
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=sha

      - uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

## Troubleshooting

### Common Issues

**"Resource not accessible by integration"**

- Add required permissions to workflow
- Check `permissions:` section

**Workflow not triggering**

- Check event filters (branches, paths)
- Verify workflow file is in `.github/workflows/`
- Check branch protection rules

**Self-hosted runner not connecting**

- Verify network connectivity
- Check runner token validity
- Review runner logs

**Rate limiting**

- Use `GITHUB_TOKEN` for API calls
- Implement retry logic
- Consider self-hosted runners

## Best Practices

1. **Pin action versions** - Use `@v4` not `@main`
2. **Minimize secrets exposure** - Use environment-level secrets
3. **Cache aggressively** - Dependencies, build artifacts
4. **Use matrix builds** - Test across platforms/versions
5. **Fail fast** - Set timeouts, cancel old runs
6. **Secure workflows** - Review third-party actions, use OIDC
7. **Monitor costs** - Use self-hosted for private repos
8. **Document workflows** - Add comments, meaningful names

## Resources

### Official Documentation

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Marketplace](https://github.com/marketplace)
- [Security Guides](https://docs.github.com/en/actions/security-guides)

### Learning Resources

- [GitHub Actions CI/CD Tutorial](https://www.youtube.com/watch?v=cKMO0aeh8GI&ab_channel=CodingTech)
- [Comprehensive Introduction](https://dev.to/bnb/an-unintentionally-comprehensive-introduction-to-github-actions-ci-blm)
- [Deploying to K8s](https://blog.kontena.io/deploying-to-kubernetes-from-github-actions)

### Marketplace Actions

- [Setup Node.js](https://github.com/marketplace/actions/setup-node-js-environment)
- [GitHub Pages Deploy](https://github.com/peaceiris/actions-gh-pages) ⭐ 5.3k
- [Checkout](https://github.com/marketplace/actions/checkout)
- [Retry Step](https://github.com/marketplace/actions/retry-step)
- [Lighthouse CI](https://github.com/marketplace/actions/lighthouse-ci-action)
- [Proof HTML](https://github.com/anishathalye/proof-html) ⭐ 123

### Tools

- [act - Run locally](https://github.com/nektos/act) ⭐ 71k
- [Blacksmith - Faster runners](https://blacksmith.sh/)
- [Actions Toolkit](https://github.com/actions/toolkit) ⭐ 5.8k
- [Azure K8s Actions](https://github.com/Azure/k8s-actions) ⭐ 114

## Github Actions - Workflow automation

- https://github.com/marketplace
- https://github.blog/2019-08-08-github-actions-now-supports-ci-cd
- Sign up for beta - https://github.com/features/actions
- https://dev.to/bnb/an-unintentionally-comprehensive-introduction-to-github-actions-ci-blm
- https://blog.kontena.io/deploying-to-kubernetes-from-github-actions
- https://help.github.com/en/categories/automating-your-workflow-with-github-actions
- https://github.com/Azure/k8s-actions
- https://dev.to/bnb/an-unintentionally-comprehensive-introduction-to-github-actions-ci-blm
- [Continuous Delivery: GitHub Actions (Developer Workflow Automation with GitHub Actions CICD)](https://www.youtube.com/watch?v=cKMO0aeh8GI&ab_channel=CodingTech)

### Blacksmith

- [Blacksmith](https://blacksmith.sh/)
- [Blacksmith - Overview + Get Started - YouTube](https://www.youtube.com/watch?v=lZO1HExEvtE)
- [Why Blacksmith?](https://docs.blacksmith.sh/getting-started/why-blacksmith)

### Github Actions - [Marketplace](https://github.com/marketplace)

- [Setup Node.js environment - GitHub Marketplace](https://github.com/marketplace/actions/setup-node-js-environment)
- [GitHub - peaceiris/actions-gh-pages: GitHub Actions for GitHub Pages 🚀 Deploy static files and publish your site easily. Static-Site-Generators-friendly.](https://github.com/peaceiris/actions-gh-pages) ⭐ 5.3k
- [Checkout - GitHub Marketplace](https://github.com/marketplace/actions/checkout)
- [Retry Step - GitHub Marketplace](https://github.com/marketplace/actions/retry-step)
- [retry action - GitHub Marketplace](https://github.com/marketplace/actions/retry-action)
- [Lighthouse CI Action · Actions · GitHub Marketplace · GitHub](https://github.com/marketplace/actions/lighthouse-ci-action)
- [GitHub - anishathalye/proof-html: A GitHub Action to validate HTML, check links, and more ✅](https://github.com/anishathalye/proof-html) ⭐ 123

**Run github actions locally**

```bash
brew install act
```

https://github.com/nektos/act

**Run github actions on K8s cluster**

https://medium.com/nerd-for-tech/github-actions-self-hosted-runner-on-kubernetes-55d077520a31

**Github Secrets**

[Using secrets in GitHub Actions - GitHub Docs](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)

## See Also

- [CI/CD Comparison](devops/cicd/comparison.md)
- [ArgoCD](devops/cicd/argocd.md)
- [Kubernetes Tools](devops/kubernetes/tools.md)
- [GitLab CI](devops/others/other-cicd.md#gitlabci)
