# Serverless Tools

- **OpenFaas**: Offers Docker and Kubernetes support with an active community. Managed with faas-cli, it uses Prometheus for metrics and offers prebuilt triggers and runtimes. Installation via Brew and deployment to Kubernetes using Helm or raw YAML.
- **OpenWhisk**: Apache project supported by IBM and Adobe. Main concepts include Actions, Triggers, Feeds, Alarms, and Rules. Supports deployment on Kubernetes, Mesos, OpenShift, and Compose but recommends Kubernetes. Complex architecture written in Scala.
- **Kubeless**: Described as the most Kubernetes-native. Easy installation and simple architecture using Custom Resource Definitions. No scale-to-zero functionality at the time of writing.
- **Knative**: Developed mainly by Google and Pivotal, with contributions from Red Hat and IBM. Comprised of Building, Serving, and Eventing components. Dependent on Istio and offers Google Cloud Run as a managed service. Provisioning complexity and cost considerations.
- **Fission**: Focused on developer productivity and high performance, specifically for Kubernetes. Offers Environment, Function, and Trigger concepts. Active community and features like canary deployments and live-reload. Components scalability concerns.

[6 Serverless Frameworks on Kubernetes You Need to Know](https://www.appvia.io/blog/serverless-on-kubernetes)

## knative

Kubernetes-based platform to build, deploy, and manage modern serverless workloads

https://cloud.google.com/knative

https://github.com/knative/serving

https://medium.com/@pczarkowski/introduction-to-knative-b93a0b9aeeef

https://github.com/knative/docs

## Apache OpenWhisk (Incubating)

Apache OpenWhisk (Incubating) is an open source, distributed [Serverless](https://en.wikipedia.org/wiki/Serverless_computing) platform that executes functions (fx) in response to events at any scale. OpenWhisk manages the infrastructure, servers and scaling using Docker containers so you can focus on building amazing and efficient applications.

The OpenWhisk platform supports a programming model in which developers write functional logic (called [Actions](https://github.com/apache/incubator-openwhisk/blob/master/docs/actions#openwhisk-actions)), in any supported programming language, that can be dynamically scheduled and run in response to associated events (via [Triggers](https://github.com/apache/incubator-openwhisk/blob/master/docs/triggers_rules#creating-triggers-and-rules)) from external sources ([Feeds](https://github.com/apache/incubator-openwhisk/blob/master/docs/feeds#implementing-feeds)) or from HTTP requests. The project includes a REST API-based Command Line Interface (CLI) along with other tooling to support packaging, catalog services and many popular container deployment options.

### Architecture

![image](../../media/Technologies-Apache-Others-image2.jpg)

https://openwhisk.apache.org

## Fission

Open Source, Cloud-native Serverless Framework.

- Write short-lived functions in any language, and map them to HTTP requests (or other event triggers).
- Deploy functions instantly with one command. There are no containers to build, and no Docker registries to manage.

### Performance: 100msec cold start

Fission maintains a pool of "warm" containers that each contain a small dynamic loader. When a function is first called, i.e. "cold-started", a running container is chosen and the function is loaded. This pool is what makes Fission fast: cold-start latencies are typically about 100msec.

### Concept

Fission has three main concepts: Functions, Environments, and Triggers

### Functions

A Fission function is something that Fission executes. It's usually a module with one entry point, and that entry point is a function with a certain interface. A number of programming languages are supported for Functions.

### Environments

Environments are the language-specific parts of Fission. An Environment contains just enough software to build and run a Fission Function.

### Triggers

Functions are invoked on the occurrence of an event; a Trigger is what configures Fission to use that event to invoke a function. In other words, a Trigger is a binding of events to function invocations.

### Other Concepts

#### ARCHIVES

An Archive is a zip file containing source code or compiled binaries. Archives with runnable functions in them are called Deployment

Archives; those with source code in them are called Source Archives.

#### PACKAGES

A Package is a Fission object containing a Deployment Archive and a Source Archive. A Package also references a certain environment.

When you create a Package with a Source Archive, Fission automatically builds it using the appropriate builder environment and adds a Deployment Archive to the package.

#### SPECIFICATIONS

Specifications (specs for short) are simply YAML config files containing the objects we've spoken about so far - Functions, Environments, Triggers, Packages, and Archives.

https://fission.io

https://github.com/fission/fission

## Serverless

**The Serverless Framework** – Makes it easy to use AWS Lambda and other managed cloud services to build applications that auto-scale, cost nothing when idle, and result in radically low maintenance.

The Serverless Framework is a command-line tool with approachable YAML syntax to deploy both your code and cloud infrastructure needed to make tons of serverless application use-cases, like APIs, front-ends, data pipelines and scheduled tasks. It's a multi-language framework that supports Node.js, Typescript, Python, Go, Java, and more. It's also completely extensible via over 1,000 plugins which add more serverless use-cases and workflows to the Framework.

Serverless Framework V4 CLI is free for developers and organizations making less than $2 million annually, but requires an account or a license key.

### Features

- **Build More, Manage Less:** Innovate faster by spending less time on infrastructure management.
- **Maximum Versatility:** Tackle diverse serverless use cases, from APIs and scheduled tasks to web sockets and data pipelines.
- **Automated Deployment:** Streamline development with code and infrastructure deployment handled together.
- **Local Development:** Route events from AWS to your local AWS Lambda code to develop faster without having to deploy every change.
- **Ease of Use:** Deploy complex applications without deep cloud infrastructure expertise, thanks to simple YAML configuration.
- **Language Agnostic:** Build in your preferred language – Node.js, Python, Java, Go, C#, Ruby, Swift, Kotlin, PHP, Scala, or F#.
- **Complete Lifecycle Management:** Develop, deploy, monitor, update, and troubleshoot serverless applications with ease.
- **Scalable Organization:** Structure large projects and teams efficiently by breaking down large apps into Services to work on individually or together via Serverless Compose.
- **Effortless Environments:** Seamlessly manage development, staging, and production environments.
- **Customization Ready:** Extend and modify the Framework's functionality with a rich plugin ecosystem.
- **Vibrant Community:** Get support and connect with a passionate community of Serverless developers.

### Commands

```bash
# install
npm i serverless -g

# update
serverless update

# use
serverless

# deploy
serverless deploy

# local development
pip install werkzeug boto3
pip install -r requirements.txt
serverless plugin install -n serverless-dynamodb-local
serverless dynamodb install
serverless dev
```

[GitHub - serverless/serverless: ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero costs when idle, and require minimal maintenance using AWS Lambda and other managed cloud services.](https://github.com/serverless/serverless)

[Getting Started with Serverless Framework - YouTube](https://www.youtube.com/watch?v=KQRGM9_eqIw)

[Serverless Framework V.4 GA – Overview - YouTube](https://www.youtube.com/watch?v=UQL_PPJUFOU)

[Serverless was a big mistake... says Amazon - YouTube](https://www.youtube.com/watch?v=qQk94CjRvIs)

[Serverless MCP - Introduction - YouTube](https://www.youtube.com/watch?v=FW6IpZv_xUU)

## Others

- [GitHub - zappa/Zappa: Serverless Python](https://github.com/zappa/Zappa)
