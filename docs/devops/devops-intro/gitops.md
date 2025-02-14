# GitOps

GitOps is a way of implementing Continuous Deployment for cloud native applications. It focuses on a developer-centric experience when operating infrastructure, by using tools developers are already familiar with, including Git and Continuous Deployment tools.

The core idea of GitOps is having a Git repository that always contains declarative descriptions of the infrastructure currently desired in the production environment and an automated process to make the production environment match the described state in the repository. If you want to deploy a new application or update an existing one, you only need to update the repository - the automated process handles everything else. It's like having cruise control for managing your applications in production

Git is the single source of truth for the desired state of a system

![Gitops Workflow](../../media/Pasted%20image%2020240219154717.jpg)

## GitOps requires three core components

### IaC

GitOps uses a [Git repository](https://about.gitlab.com/blog/2020/11/12/migrating-your-version-control-to-git/) as the single source of truth for infrastructure definitions. Git is an open source version control system that tracks code management changes, and a Git repository is a .git folder in a project that tracks all changes made to files in a project over time. [Infrastructure as code (IaC)](https://about.gitlab.com/topics/gitops/infrastructure-as-code/) is the practice of keeping all infrastructure configuration stored as code. The actual desired state may or may not be not stored as code (e.g., number of replicas or pods).

### MRs

GitOps uses merge requests (MRs) or pull requests (PRs) as the [change mechanism](https://about.gitlab.com/blog/2020/10/13/merge-request-reviewers/) for all infrastructure updates. The MR or PR is where teams can collaborate via reviews and comments and where formal approvals take place. A merge commits to your main (or trunk) branch and serves as an audit log or audit trail.

### CI/CD

GitOps automates infrastructure updates using a Git workflow with [continuous integration and continuous delivery (CI/CD)](https://about.gitlab.com/topics/ci-cd/). When new code is merged, the CI/CD pipeline enacts the change in the environment. Any configuration drift, such as manual changes or errors, is overwritten by GitOps automation so the environment converges on the desired state defined in Git. GitLab uses CI/CD [pipelines](https://about.gitlab.com/blog/2020/12/02/pre-filled-variables-feature/) to manage and implement GitOps automation, but other forms of automation, such as definitions operators, can be used as well.

## What is the difference between GitOps and DevOps?

There are a few key differences between GitOps and DevOps. For one, GitOps relies heavily on automation and tooling to manage and deploy code changes, while DevOps focuses more on communication and collaboration between teams. Additionally, GitOps is typically used in conjunction with containerization technologies like Kubernetes, while DevOps can be used with any type of application.

GitOps is a branch of DevOps that focuses on using Git code repositories to manage infrastructure and application code deployments. The main difference between the two is that in GitOps, the Git repository is the source of truth for the deployment state, while in DevOps, it is the application or server configuration files.

## Key components of a GitOps workflow

There are four key components to a GitOps workflow, a Git repository, a continuous delivery (CD) pipeline, an application deployment tool, and a monitoring system.

1. The Git repository is the source of truth for the application configuration and code.
2. The CD pipeline is responsible for building, testing, and deploying the application.
3. The deployment tool is used to manage the application resources in the target environment.
4. The monitoring system tracks the application performance and provides feedback to the development team.

[GitOps | Gitlab](https://about.gitlab.com/topics/gitops/)

https://devops.com/an-inside-look-at-gitops

[https://www.gitops.tech](https://www.gitops.tech/)
