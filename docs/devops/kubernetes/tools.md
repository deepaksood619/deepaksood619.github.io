# Tools

https://devops-stack.io

An all-in-one Kubernetes stack using ArgoCD and Terraform as base components

https://github.com/camptocamp/devops-stack

![Kubernetes Tools Stack Wheel](../../media/Pasted%20image%2020240310093826.jpg)

## Tanka

Grafana Tanka is the robust configuration utility for your [Kubernetes](https://kubernetes.io/) cluster, powered by the unique [Jsonnet](https://jsonnet.org/) language

https://tanka.dev

https://github.com/grafana/tanka

https://grafana.com/oss/tanka

## Plugins

### kubectl tree

https://ahmet.im/blog/kubectl-tree

### kubectl access-matrix

### krew

Installation - [Installing · Krew](https://krew.sigs.k8s.io/docs/user-guide/setup/install/#bash)

```bash
kubectl krew install ctx
kubectl krew install ns
```

https://github.com/kubernetes-sigs/krew

### ketall

https://github.com/corneliusweig/ketall

https://github.com/ishantanu/awesome-kubectl-plugins

## Minikube

### Features

Minikube supports Kubernetes features such as

- DNS
- NodePorts
- ConfigMaps and Secrets
- Dashboards
- Container Runtime: Docker, [rkt](https://github.com/rkt/rkt), [CRI-O](https://github.com/kubernetes-incubator/cri-o) and [containerd](https://github.com/containerd/containerd)
- Enabling CNI (Container Network Interface)
- Ingress

### Commands

```bash
minikube version
minikube start
minikube stop
minikube ip
minikube status
```

https://kubernetes.io/docs/tutorials/hello-minikube

## Kops (Kubernetes Operations)

The easiest way to get a production grade Kubernetes cluster up and running.

Production Grade K8s Installation, Upgrades, and Management

### What is kops?

We like to think of it askubectlfor clusters.

kopshelps you create, destroy, upgrade and maintain production-grade, highly available, Kubernetes clusters from the command line. AWS (Amazon Web Services) is currently officially supported, with GCE in beta support , and VMware vSphere in alpha, and other platforms planned.

https://github.com/kubernetes/kops

## kubeadm

kubeadm helps you bootstrap a minimum viable Kubernetes cluster that conforms to best practices.

https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm

## Stern / logs

Stern allows you to tail multiple pods on Kubernetes and multiple containers within the pod. Each result is color coded for quicker debugging.

The query is a regular expression so the pod name can easily be filtered and you don't need to specify the exact id (for instance omitting the deployment id). If a pod is deleted it gets removed from tail and if a new pod is added it automatically gets tailed.

When a pod contains multiple containers Stern can tail all of them too without having to do this manually for each one. Simply specify thecontainerflag to limit what containers to show. By default all containers are listened to.

```bash
brew install stern
stern decision-engine

Tail the gateway container running inside of the envvars pod on staging
    stern --context staging --container gateway envvars
Show auth activity from 15min ago with timestamps
    stern -t --since 15m auth
Follow the development of some-new-feature in minikube
    stern --context minikube some-new-feature
View pods from another namespace
stern --namespace kube-system kubernetes-dashboard
```

https://github.com/wercker/stern

## Kubetail

```bash
kubectl get pods
kubetail app2
kubetail alertdriver -n example
kubetail "cp-kafka-connect-*" --regex -c cp-kafka-connect-server -n kafka
```

https://github.com/johanhaleby/kubetail

## Kubectl aliases

https://github.com/ahmetb/kubectl-aliases

https://ahmet.im/blog/kubectl-aliases

## Kubedirector

KubeDirector uses standard Kubernetes (K8s) facilities of custom resources and API extensions to implement stateful scaleout application clusters. This approach enables transparent integration with K8s user/resource management and existing K8s clients and tools.

https://github.com/bluek8s/kubedirector

## kustomize

Customization of kubernetes YAML configurations

```bash
kubectl apply --kustomize

# -k, --kustomize='': Process a kustomization directory. This flag can't be used together with -f or -R.

/base
/overlays
```

https://github.com/kubernetes-sigs/kustomize

https://blog.scottlowe.org/2019/09/13/an-introduction-to-kustomize

https://www.youtube.com/watch?v=5gsHYdiD6v8

## k9s

K9s provides a curses based terminal UI to interact with your Kubernetes clusters. The aim of this project is to make it easier to navigate, observe and manage your applications in the wild. K9s continually watches Kubernetes for changes and offers subsequent commands to interact with observed Kubernetes resources.

```bash
brew install derailed/k9s/k9s

curl -fsSLO https://github.com/derailed/k9s/releases/download/v0.32.4/k9s_Linux_amd64.tar.gz

tar -xzvf k9s_Linux_amd64.tar.gz
mv k9s /usr/bin

k9s -n <namespace>
ctrl + r - refresh
ctrl + h - toggle header
ctrl + a - show all resources
shift + f - port forward

f - show port forward
ctrl + d - delete port forward

# Shortcuts
    ? (shift + /) - help show commands
    :q - quit
    :a - api resources
    :h - help
```

https://github.com/derailed/k9s

## Kubenav

https://github.com/kubenav/kubenav

## kubens / kubectx

Switch faster between clusters and namespaces in kubectl

```bash
# for arm
curl -fsSLO https://github.com/ahmetb/kubectx/releases/download/v0.9.5/kubectx_v0.9.5_linux_arm64.tar.gz

tar -xzvf kubectx_v0.9.5_linux_arm64.tar.gz
mv kubectx /usr/bin

brew install kubectx

kubectl krew install ctx
kubectl krew install ns
```

https://github.com/ahmetb/kubectx

## Kubernetes-clients

https://github.com/kubernetes-client/python

https://github.com/hjacobs/pykube

https://srcco.de/posts/kubernetes-and-python.html

## Sloop

Key features:

1. Allows you to find and inspect resources that no longer exist (example: discover what host the pod from the previous deployment was using).
2. Provides timeline displays that show rollouts of related resources in updates to Deployments, ReplicaSets, and StatefulSets.
3. Helps debug transient and intermittent errors.
4. Allows you to see changes over time in a Kubernetes application.
5. Is a self-contained service with no dependencies on distributed storage.

https://github.com/salesforce/sloop

## Skaffold

Skaffold is a command line tool that facilitates continuous development for Kubernetes applications. You can iterate on your application source code locally then deploy to local or remote Kubernetes clusters. Skaffold handles the workflow for building, pushing and deploying your application. It also provides building blocks and describe customizations for a CI/CD pipeline.

https://github.com/GoogleContainerTools/skaffold

## telepresence

Local development against a remote Kubernetes or OpenShift cluster

Telepresence allows you to run your code locally while still:

1. Giving your code access to Services in a remote Kubernetes cluster.
2. Giving your code access to cloud resources like AWS RDS or Google PubSub.
3. Allowing Kubernetes to access your code as if it were in a normal pod within the cluster.

telepresence --swap-deployment api-v3 --namespace staging --expose 8000

https://github.com/telepresenceio/telepresence

## kubefwd

kubefwd is a command line utility built to port forward multiple [services](https://kubernetes.io/docs/concepts/services-networking/service/) within one or more [namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) on one or more Kubernetes clusters.kubefwduses the same port exposed by the service and forwards it from a loopback IP address on your local workstation.kubefwdtemporally adds domain entries to your/etc/hostsfile with the service names it forwards.

https://github.com/txn2/kubefwd

## Kubernetes Event Exporter

This tool allows exporting the often missed Kubernetes events to various outputs so that they can be used for observability or alerting purposes.

https://github.com/opsgenie/kubernetes-event-exporter

https://engineering.opsgenie.com/how-to-export-kubernetes-events-for-observability-and-alerting-a9b4a953363d

## Cloud Code

Cloud Code comes with tools to help you write, deploy, and debug cloud-native applications quickly and easily. Extensions to IDEs such as Visual Studio Code and IntelliJ are provided to let you rapidly iterate, debug, and deploy code to Kubernetes.

https://cloud.google.com/code

## ksync

```bash
ksync init --upgrade # for new cluster
ksync create --pod=test $(pwd) /app
ksync create --local-read-only --pod=test --reload=false --name=test $(pwd) /app
ksync create --selector=app=app $(pwd)/ksync /code
ksync get
ksync watch

# Available Commands:
    clean       Remove installed pieces
    create      Create a new spec
    delete      Delete an existing spec
    doctor      Troubleshoot and verify your setup is correct.
    get         Get all specs.
    help        Help about any command
    init        Prepare ksync.
    reload      Reload a remote spec.
    update      Update ksync to the latest version.
    version     View the versions of both the local binary and remote service.
    watch       Watch configured specs and start syncing files when required
```

https://github.com/ksync/ksync

## cdk8s

cdk8sis an open-source software development framework for defining Kubernetes applications and reusable abstractions using familiar programming languages and rich object-oriented APIs.cdk8sapps synthesize into standard Kubernetes manifests which can be applied to any Kubernetes cluster.

https://cdk8s.io

https://www.youtube.com/watch?v=QcF_6ZSEd5k

https://github.com/awslabs/cdk8s

https://medium.com/flant-com/kubernetes-apps-developers-tools-97cd6ccae7dd

## KubeWatch

kubewatch is a Kubernetes watcher that currently publishes notification to available collaboration hubs/notification channels. Run it in your k8s cluster, and you will get event notifications through webhooks.

https://github.com/bitnami-labs/kubewatch

https://github.com/helm/charts/tree/master/stable/kubewatch

## BotKube

BotKube integration with Slack or Mattermost helps you monitor your Kubernetes cluster, debug critical deployments and gives recommendations for standard practices by running checks on the Kubernetes resources. You can also ask BotKube to execute kubectl commands on k8s cluster which helps debugging an application or cluster.

[https://www.botkube.io](https://www.botkube.io/)

https://www.botkube.io/installation/slack

https://github.com/infracloudio/botkube

## Zulip - Chat for distributed system

https://zulip.com

## KubeSlack

kube-slack is a monitoring service for Kubernetes. When a pod has failed, it will publish a message in Slack channel.

https://github.com/wongnai/kube-slack

## k3s

Lightweight Kubernetes. Easy to install, half the memory, all in a binary less than 40mb.

Great for

- Edge
- IoT
- CI
- ARM
- Situations where a PhD in k8s clusterology is infeasible

https://github.com/rancher/k3s

https://containerjournal.com/2019/08/01/powering-edge-with-kubernetes-a-primer

## Lens

Lens is the only IDE you'll ever need to take control of your Kubernetes clusters. It is a standalone application for MacOS, Windows and Linux operating systems. It is open source and free.

https://k8slens.dev

https://github.com/lensapp/lens

## Kind

[kind](https://sigs.k8s.io/kind) is a tool for running local Kubernetes clusters using Docker container "nodes".

kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

```bash
kind create cluster
kind get clusters
kubectl cluster-info --context kind-kind
kind delete cluster
```

https://kind.sigs.k8s.io

[How to run Kubernetes locally with Kind - YouTube](https://www.youtube.com/watch?v=m-IlbCgSzkc)

## Node Problem Detector

node-problem-detector aims to make various node problems visible to the upstream layers in cluster management stack. It is a daemon which runs on each node, detects node problems and reports them to apiserver. node-problem-detector can either run as a [DaemonSet](http://kubernetes.io/docs/admin/daemons/) or run standalone.

https://github.com/kubernetes/node-problem-detector

## Kube linter / kubelinter

https://github.com/stackrox/kube-linter

https://opensource.com/article/21/1/kubelinter

https://github.com/instrumenta/kubeval

kubevalis a tool for validating a Kubernetes YAML or JSON configuration file. It does so using schemas generated from the Kubernetes OpenAPI specification, and therefore can validate schemas for multiple versions of Kubernetes.

https://learnk8s.io/validating-kubernetes-yaml

## Headlamp

https://kinvolk.io/blog/2020/11/shining-a-light-on-the-kubernetes-user-experience-with-headlamp

## Shipa

Cloud native application management framework built to manage the full application lifecycle in an application-centric fashion.

https://www.shipa.io

https://www.youtube.com/watch?v=PW44JaAlI_8

## Kubecost

- https://www.infracloud.io/blogs/kubernetes-cost-reporting-using-kubecost
- Others - [GitHub - robscott/kube-capacity: A simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster](https://github.com/robscott/kube-capacity)
- [Kubernetes Requests and Limits: A Practical Guide and Solutions](https://blog.kubecost.com/blog/requests-and-limits/)
- [Kubecost | Kubernetes cost monitoring and management](https://www.kubecost.com/)
- [OpenCost — open source cost monitoring for cloud native environments](https://www.opencost.io/)
- [Cluster Controller | 2.2 (latest) | Kubecost Docs](https://docs.kubecost.com/install-and-configure/advanced-configuration/cluster-controller)
- [Kubecost 2.0: Advanced Network Monitoring - YouTube](https://www.youtube.com/watch?v=sdWIWjfA_NM&ab_channel=Kubecost)
- [See How OpenCost Tracks Your Kubernetes Costs and Cloud Billing - YouTube](https://www.youtube.com/watch?v=lCP4Ci9Kcdg&ab_channel=Kubecost)
- [Kubecost 2.0: Collections Demo - YouTube](https://www.youtube.com/watch?v=Ek_ZdCfKy18&ab_channel=Kubecost)
- [Kubecost 2.0: Getting Started - YouTube](https://www.youtube.com/watch?v=AtBptqHbonk&ab_channel=Kubecost)
- [Kubernetes Pod Price: How to Calculate | by Bohdan Lykhitko | Medium](https://medium.com/@bohdan.lykhitko/kubernetes-pod-price-how-to-calculate-a976315e02b)
- [Kubernetes instance calculator](https://learnk8s.io/kubernetes-instance-calculator)

## Others

- https://www.getporter.dev
- https://spot.io/products/ocean
- [GitHub - spekt8/spekt8: Visualize your Kubernetes cluster in real time](https://github.com/spekt8/spekt8)
- [GitHub - aquasecurity/kube-bench: Checks whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark](https://github.com/aquasecurity/kube-bench)
- [GitHub - kubeshark/kubeshark: The API traffic analyzer for Kubernetes providing real-time K8s protocol-level visibility, capturing and monitoring all traffic and payloads going in, out and across containers, pods, nodes and clusters. Inspired by Wireshark, purposely built for Kubernetes](https://github.com/kubeshark/kubeshark)
