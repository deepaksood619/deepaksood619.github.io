# Outline Documentation

1. Overview

   - What is kubernetes

   - Kubernetes Components

   - The Kubernetes API

   - Working with Kubernetes Objects

       - Undestanding Kubernetes Objects

       - Names

       - Namespaces

       - Labels and Selectors

       - Annotations

       - Field Selectors

       - Recommended Labels

   - Object Management using kubectl

       - Kubernetes Object Management

       - Managing Kubernetes Objects Using Imperative Commands

       - Imperative Management of Kubernetes Objects Using Configuration Files

       - Declarative Management of Kubernetes Objects Using Configuration Files

2. Kubernetes Architecture

   - Nodes

   - Master-Node communication

   - Concepts Underlying the Cloud Controller Manager

3. Containers

   - Images

   - Container Environment Variables

   - Runtime Class

   - Container Lifecycle Hooks

4. Workloads

   - Pods

       - Pod Overview

       - Pods

       - Pod Lifecycle

       - Init Containers

       - Pod Preset

       - Disruptions

   - Controllers

       - ReplicaSet

       - ReplicationController

       - Deployments

       - StatefulSets

       - DaemonSet

       - Garbage Collection

       - TTL Controller for Finished Resources

       - Jobs - Run to Completion

       - CronJob

5. Services, Load Balancing, and Networking

   - Services

   - DNS for Services and Pods

   - Connecting Applications with Services

   - Ingress

   - Network Policies

   - Adding entries to Pod /etc/hosts with HostAliases

6. Storage

   - Volumes

   - Persistant Volumes

   - Volume Snapshots

   - Storage Classes

   - Volume Snapshot Classes

   - Dynamic Volume Provisioning

   - Node-specific Volume Limits

7. Configuration

   - Configuration Best Practices

   - Managing Compute Resources for Containers

   - Assigning Pods to Nodes

   - Taints and Tolerations

   - Secrets

   - Organizing Cluster Access Using kubeconfig Files

   - Pod Priority and Preemtion

   - Scheduler Performance Tuning

8. Policies

   - Resource Quotas

   - Pod Security Policies

9. Cluster Administration

   - Cluster Administration Overview

   - Certificates

   - Cloud Providers

   - Managing Resources

   - Cluster Networking

   - Logging Architecture

   - Configuring kubelet Garbage Collection

   - Federation

   - Proxies in Kubernetes

   - Controller manager metrics

   - Installing Addons

10. Extending Kubernetes

- Extending your Kubernetes Cluster

- Extending the Kubernetes API

  - Extending the Kubernetes API with the aggregation layer

  - Custom Resources

- Compute, Storage, and Networking Extensions

  - Network Plugins

  - Device Plugins

- Service Catalog

- Poseidon-Firmament - An alternate scheduler

## Concepts

[Overview](https://kubernetes.io/docs/concepts/overview/)

Get a high-level outline of Kubernetes and the components it is built from.

[Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/)

The architectural concepts behind Kubernetes.

[Containers](https://kubernetes.io/docs/concepts/containers/)

Technology for packaging an application along with its runtime dependencies.

[Workloads](https://kubernetes.io/docs/concepts/workloads/)

Understand Pods, the smallest deployable compute object in Kubernetes, and the higher-level abstractions that help you to run them.

[Services, Load Balancing, and Networking](https://kubernetes.io/docs/concepts/services-networking/)

Concepts and resources behind networking in Kubernetes.

[Storage](https://kubernetes.io/docs/concepts/storage/)

Ways to provide both long-term and temporary storage to Pods in your cluster.

[Configuration](https://kubernetes.io/docs/concepts/configuration/)

Resources that Kubernetes provides for configuring Pods.

[Security](https://kubernetes.io/docs/concepts/security/)

Concepts for keeping your cloud-native workload secure.

[Policies](https://kubernetes.io/docs/concepts/policy/)

Policies you can configure that apply to groups of resources.

[Scheduling and Eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/)

In Kubernetes, scheduling refers to making sure that Pods are matched to Nodes so that the kubelet can run them. Eviction is the process of proactively failing one or more Pods on resource-starved Nodes.

[Cluster Administration](https://kubernetes.io/docs/concepts/cluster-administration/)

Lower-level detail relevant to creating or administering a Kubernetes cluster.

[Extending Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/)

Different ways to change the behavior of your Kubernetes cluster.

<https://kubernetes.io/docs/concepts>

## Tasks

[Install Tools](https://kubernetes.io/docs/tasks/tools/)

Set up Kubernetes tools on your computer.

[Administer a Cluster](https://kubernetes.io/docs/tasks/administer-cluster/)

Learn common tasks for administering a cluster.

[Configure Pods and Containers](https://kubernetes.io/docs/tasks/configure-pod-container/)

Perform common configuration tasks for Pods and containers.

[Manage Kubernetes Objects](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/)

Declarative and imperative paradigms for interacting with the Kubernetes API.

[Inject Data Into Applications](https://kubernetes.io/docs/tasks/inject-data-application/)

Specify configuration and other data for the Pods that run your workload.

[Run Applications](https://kubernetes.io/docs/tasks/run-application/)

Run and manage both stateless and stateful applications.

[Run Jobs](https://kubernetes.io/docs/tasks/job/)

Run Jobs using parallel processing.

[Access Applications in a Cluster](https://kubernetes.io/docs/tasks/access-application-cluster/)

Configure load balancing, port forwarding, or setup firewall or DNS configurations to access applications in a cluster.

[Monitoring, Logging, and Debugging](https://kubernetes.io/docs/tasks/debug-application-cluster/)

Set up monitoring and logging to troubleshoot a cluster, or debug a containerized application.

[Extend Kubernetes](https://kubernetes.io/docs/tasks/extend-kubernetes/)

Understand advanced ways to adapt your Kubernetes cluster to the needs of your work environment.

[TLS](https://kubernetes.io/docs/tasks/tls/)

Understand how to protect traffic within your cluster using Transport Layer Security (TLS).

[Manage Cluster Daemons](https://kubernetes.io/docs/tasks/manage-daemon/)

Perform common tasks for managing a DaemonSet, such as performing a rolling update.

[Service Catalog](https://kubernetes.io/docs/tasks/service-catalog/)

Install the Service Catalog extension API.

[Networking](https://kubernetes.io/docs/tasks/network/)

Learn how to configure networking for your cluster.

[Extend kubectl with plugins](https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/)

Extend kubectl by creating and installing kubectl plugins.

[Manage HugePages](https://kubernetes.io/docs/tasks/manage-hugepages/scheduling-hugepages/)

Configure and manage huge pages as a schedulable resource in a cluster.

[Schedule GPUs](https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/)

Configure and schedule GPUs for use as a resource by nodes in a cluster.

<https://kubernetes.io/docs/tasks>

<https://kubernetes.io/docs/home>
