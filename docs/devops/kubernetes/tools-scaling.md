# Kubernetes Scaling Tools

## Kubernetes Autoscaler

[Cluster Autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler)- a component that automatically adjusts the size of a Kubernetes Cluster so that all pods have a place to run and there are no unneeded nodes. Works with GCP, AWS and Azure. Version 1.0 (GA) was released with kubernetes 1.8.

https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler

https://github.com/helm/charts/tree/master/stable/cluster-autoscaler

[GitHub - kubernetes/autoscaler: Autoscaling components for Kubernetes](https://github.com/kubernetes/autoscaler)

## [Vertical Pod Autoscaler](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) / VPA

A set of components that automatically adjust the amount of CPU and memory requested by pods running in the Kubernetes Cluster. Current state - beta

https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler

https://medium.com/infrastructure-adventures/vertical-pod-autoscaler-deep-dive-limitations-and-real-world-examples-9195f8422724

[https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/#](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/)

## Goldilocks

https://github.com/FairwindsOps/goldilocks

Goldilocks is a utility that can help you identify a starting point for resource requests and limits.

[goldilocks Documentation](https://goldilocks.docs.fairwinds.com/)

[Addon Resizer](https://github.com/kubernetes/autoscaler/tree/master/addon-resizer)- a simplified version of vertical pod autoscaler that modifies resource requests of a deployment based on the number of nodes in the Kubernetes Cluster. Current state - beta.

https://github.com/kubernetes/autoscaler

## [Karpenter](https://karpenter.sh/)

Just-in-time Nodes for Any Kubernetes Cluster

Karpenter automatically launches just the right compute resources to handle your cluster's applications. It is designed to let you take full advantage of the cloud with fast and simple compute provisioning for Kubernetes clusters.

- **Watching** for pods that the Kubernetes scheduler has marked as unschedulable
- **Evaluating** scheduling constraints (resource requests, nodeselectors, affinities, tolerations, and topology spread constraints) requested by the pods
- **Provisioning** nodes that meet the requirements of the pods
- **Removing** the nodes when the nodes are no longer needed

[GitHub - aws/karpenter-provider-aws: Karpenter is a Kubernetes Node Autoscaler built for flexibility, performance, and simplicity.](https://github.com/aws/karpenter-provider-aws)

## Others

- [Keda](devops/kubernetes/keda.md)
