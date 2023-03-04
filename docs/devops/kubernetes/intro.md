# Intro

## One liner - Kubernetes/Mesos - software tools to manage and coordinate containers

## Borg - Google's container system

## Orchestraction

- The method to automate the management and deployment of your applications and containers
- Centralized decision making

## Choreography

- Distributed decision making

## Containerization - Application containerization is an OS-level virtualization method used to deploy and run distributed applications without launching an entire virtual machine (VM) for each app

## Intro

Kubernetes is a container orchestration tool. It means we are able to tell kubernetes what the state of our cluster should be and it will continuosly run and ensure that the things are in correct state using reconciliation lips.

State means which things should be running, like we want 3 instances of this application running in the cluster, and want 10 instance of other application. We scheule those in and kubernetes coordinates that and spread that across the server.

## It is maintained by CNCF (Cloud Native Computing Foundation)

## Traits

- **Abstraction**
- **Declarative**
- **Immutable**

## Features

- Automatic Binpacking

Automatically places containers based on their resource requirements and other constraints, while not sacrificing availability. Mix critical and best-effort workloads in order to drive up utilization and save even more resources.

- Horizontal Scaling (Scale out)

Scale your application up and down with a simple command, with a UI, or automatically based on CPU usage.

- Automated rollouts and rollbacks

Kubernetes progressively rolls out changes to your application or its configuration, while monitoring application health to ensure it doesn't kill all your instances at the same time. If something goes wrong, Kubernetes will rollback the change for you. Take advantage of a growing ecosystem of deployment solutions.

- Storage Orchestration

Automatically mount the storage system of your choice, whether from local storage, a public cloud provider such as [GCP](https://cloud.google.com/storage/) or [AWS](https://aws.amazon.com/products/storage/), or a network storage system such as NFS, iSCSI, Gluster, Ceph, Cinder, or Flocker.

- Self-healing

Restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.

- Service discovery and load balancing

No need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives containers their own IP addresses and a single DNS name for a set of containers, and can load-balance across them.

- Secret and Configuration Management

Deploy and update secrets and application configuration without rebuilding your image and without exposing secrets in your stack configuration.

- Batch Execution

In addition to services, Kubernetes can manage your batch and CI workloads, replacing containers that fail, if desired.

- Blue/green deployment, canary deployment
- Long running services, but also batch (one-off) jobs
- Overcommit our cluster andevictlow-priority jobs
- Run services withstatefuldata (databases etc.)
- Fine-grained access control definingwhatcan be done bywhomonwhichresources
- Integrating third party services (service catalog)
- Automating complex tasks (operators)
- CronJobs

## Private Kubernetes Cluster

In Kubernetes Engine, a private cluster is a cluster that makes your master inaccessible from the public internet. In a private cluster, nodes do not have public IP addresses, only private addresses, so your workloads run in an isolated environment. Nodes and masters communicate with each other using VPC peering.

In the Kubernetes Engine API, address ranges are expressed as Classless Inter-Domain Routing (CIDR) blocks.

## How do Containers communicate in Kubernetes?

A Pod is a mapping between containers in Kubernetes. A Pod may contain multiple containers. Pods have a flat network hierarchy inside an overlay network and communicate to each other in a flat fashion, meaning that in theory any pod inside that overlay network can speak to any other Pod.

## How do Kubenetes orchestrate Containers?

Kubernetes Containers are scheduled to run based on their scheduling policy and the available resources.

Every Pod that needs to run is added to a queue and the scheduler takes it off the queue and schedules it. If it fails, the error handler adds it back to the queue for later scheduling.

## How do you restrict the communication between Kubernetes Pods?

Depending on the CNI network plugin that you use, if it supports the Kubernetes network policy API, Kubernetes allows you to specify network policies that restrict network access.

Policies can restrict based on IP addresses, ports, and/or selectors. (Selectors are a Kubernetes-specific feature that allow connecting and associating rules or components between each other. For example, you may connect specific volumes to specific Podsbased on labelsby leveraging selectors.)

## Bind and Consume

In the API first approach, APIs are bind to K8s service, to get the important information on the service in real time.

For consume, clients are generated either automatically using CI tools or manually.

## spec

Virtually everthing we create in Kubernetes is created from a spec

How we want the things to be

## Other Tools

Mesos

Docker Swarm

Skaffold

## Managed Service

EKS - Amazon Elastic Container Service

GKE - Google Kubernetes Engine

PKS - <https://pivotal.io/platform/pivotal-container-service>

## Advanced

- Hot standby containers for improving recovery-time of Stateful jobs

<https://issues.apache.org/jira/browse/SAMZA-1992>

- Use of ipvs can be enabled, with the expectation it will become the default, replacing iptables.

<https://www.objectif-libre.com/en/blog/2018/03/19/kubernetes-ipvs>

## Important points

- Since Kubernetes 1.8, swap is disabled
- Container image names cannot be longer than 63 characters
- One container can have two services

## Kubernetes 1.19

<https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints>

<https://kubernetes.io/docs/concepts/services-networking/ingress>

## References

<https://en.wikipedia.org/wiki/Kubernetes>

<https://turbonomic.com/blog/on-technology/forget-k9-its-time-for-k8-k8s-that-is-a-kubernetes-primer-part-i>

<https://blog.freshtracks.io/a-deep-dive-into-kubernetes-metrics-b190cc97f0f6>

Youtube - Kubernets Webinar Series - Kubenetes Architecture 101 by Janakiram & Associates

<https://training.play-with-kubernetes.com/kubernetes-workshop>

[Kubernetes in 5 mins](https://www.youtube.com/watch?v=PH-2FfFD2PU)

<https://www.toptal.com/kubernetes/what-is-kubernetes>

<https://www.toptal.com/devops/interview-questions>

<https://github.com/kelseyhightower/kubernetes-the-hard-way>

Book - Kubernetes: Up and Running, Kelsey Hightower Book

<https://www.simplilearn.com/tutorials/kubernetes-tutorial/kubernetes-interview-questions>

<https://medium.com/containers-101/kubernetes-deployment-antipatterns-part-1-9e7b54a08b9>

## Learning (Container.training)

<https://container.training/kube-selfpaced.yml.html>

<https://github.com/jpetazzo/container.training>

<https://collabnix.github.io/kubelabs>

<https://www.infracloud.io/kubernetes-school>
