# DevTron

Devtron deeply integrates with products across the lifecycle of microservices, i.e., CI, CD, security, cost, debugging, and observability via an intuitive web interface.

#### Devtron Features

##### Application-level Resource grouping for easier Debugging

Devtron groups your Kubernetes objects deployed via Helm charts and display them in a slick UI for easier monitoring or debugging. Access pod logs and resource manifests right from the Devtron UI and even edit them!

##### Centralized Access Management

Control and give customizable view-only, edit access to users on Project, Environment and Application levels

##### Deploy, Manage and Observe on multiple clusters

Deploy and manage Helm charts, applications across multiple Kubernetes clusters (hosted on multiple clouds/on-prem) right from a single Devtron setup

#### Integrations

Devtron is designed to be modular, and its functionality can be easily extended with the help of integrations.

##### CI/CD Integration

[Devtron CI/CD with GitOps](https://github.com/devtron-labs/devtron#install-devtron-with-cicd-integration) integration is used to automate the builds and deployments and enables the software development teams to focus on meeting the business requirements, code quality, and security.

- Devtron leverages Kubernetes auto-scaling and centralized caching to give you unlimited cost-efficient CI workers.
- Supports pre-CI and post-CI integrations for code quality monitoring.
- Seamlessly integrates with Clair for image vulnerability scanning.
- Supports different deployment strategies: Blue/Green, Rolling, Canary, and Recreate.
- Implements GitOps to manage the state of Kubernetes applications.
- Integrates with ArgoCD for continuous deployment.
- Checks logs, events, and manifests or exec inside containers for debugging.
- Provides deployment metrics like; deployment frequency, lead time, change failure rate, and mean-time recovery.
- Seamlessly integrates with Grafana for continuous application metrics like CPU and memory usage, status code, throughput, and latency on the dashboard.

#### Architecture

![image](https://github.com/devtron-labs/devtron/raw/main/assets/Architecture.jpg)

[Devtron | A Software Platform for Kubernetes Application Management](https://devtron.ai/)

[GitHub - devtron-labs/devtron: Tool integration platform for Kubernetes](https://github.com/devtron-labs/devtron)

[Devtron Full Platform Walkthrough - August 2023 - YouTube](https://www.youtube.com/watch?v=_CjYBSKCog0&ab_channel=Devtron)

[Devtron Implementation and Configuration - YouTube](https://www.youtube.com/watch?v=IQLkmnbuNaM&ab_channel=MichaelLevan)

[Easy CI/CD Pipelines on Kubernetes - YouTube](https://www.youtube.com/watch?v=Me75w2kfQ0I&ab_channel=Devtron)
