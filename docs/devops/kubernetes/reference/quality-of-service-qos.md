# Quality of Service (QoS)

CPU requests are made in CPU units, each unit being a millicore / millicpu, using mille - the Latin word for thousand. Thus a request for .7 of a CPU would be 700 millicore.

One CPU, in Kubernetes, is equivalent to:

- 1 AWS vCPU
- 1 GCP Core
- 1 Azure vCore
- 1 Hyperthread on a bare-metal Intel processor with Hyperthreading.

When Kubernetes creates a Pod it assigns one of these QoS classes to the Pod:

## Guaranteed

- Every Container in the Pod must have a memory limit and a memory request, and they must be the same.
- Every Container in the Pod must have a CPU limit and a CPU request, and they must be the same.

```
resources:
    limits:
        memory: "200Mi"
        cpu: "700m"
    requests:
        memory: "200Mi"
        cpu: "700m"
```

### Criteria

For a Pod to be given a QoS class of `Guaranteed`:

- Every Container in the Pod must have a memory limit and a memory request.
- For every Container in the Pod, the memory limit must equal the memory request.
- Every Container in the Pod must have a CPU limit and a CPU request.
- For every Container in the Pod, the CPU limit must equal the CPU request.

## Burstable

- The Pod does not meet the criteria for QoS class Guaranteed.
- At least one Container in the Pod has a memory or CPU request

```
resources:
    limits:
        memory: "200Mi"
    requests:
        memory: "100Mi"
```

### Criteria

A Pod is given a QoS class of `Burstable` if:

- The Pod does not meet the criteria for QoS class `Guaranteed`.
- At least one Container in the Pod has a memory or CPU request or limit.

## BestEffort

- For a Pod to be given a QoS class of BestEffort, the Containers in the Pod must not have any memory or CPU limits or requests.

You can use ephemeral-storage for managing local ephemeral storage. Each Container of a Pod can specify one or more of the following:

- spec.containers[].resources.limits.ephemeral-storage
- spec.containers[].resources.requests.ephemeral-storage

### Criteria

A Pod has a QoS class of `BestEffort` if it doesn't meet the criteria for either `Guaranteed` or `Burstable`. In other words, a Pod is `BestEffort` only if none of the Containers in the Pod have a memory limit or a memory request, and none of the Containers in the Pod have a CPU limit or a CPU request. Containers in a Pod can request other resources (not CPU or memory) and still be classified as `BestEffort`.

## Memory QoS with cgroup v2

FEATURE STATE: `Kubernetes v1.22 [alpha]`

Memory QoS uses the memory controller of cgroup v2 to guarantee memory resources in Kubernetes. Memory requests and limits of containers in pod are used to set specific interfaces `memory.min` and `memory.high` provided by the memory controller. When `memory.min` is set to memory requests, memory resources are reserved and never reclaimed by the kernel; this is how Memory QoS ensures memory availability for Kubernetes pods. And if memory limits are set in the container, this means that the system needs to limit container memory usage; Memory QoS uses `memory.high` to throttle workload approaching its memory limit, ensuring that the system is not overwhelmed by instantaneous memory allocation.

Memory QoS relies on QoS class to determine which settings to apply; however, these are different mechanisms that both provide controls over quality of service.

## Some behavior is independent of QoS class

- Any Container exceeding a resource limit will be killed and restarted by the kubelet without affecting other Containers in that Pod.
- If a Container exceeds its resource request and the node it runs on faces resource pressure, the Pod it is in becomes a candidate for [eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/). If this occurs, all Containers in the Pod will be terminated. Kubernetes may create a replacement Pod, usually on a different node.
- The resource request of a Pod is equal to the sum of the resource requests of its component Containers, and the resource limit of a Pod is equal to the sum of the resource limits of its component Containers.
- The kube-scheduler does not consider QoS class when selecting which Pods to [preempt](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#preemption). Preemption can occur when a cluster does not have enough resources to run all the Pods you defined.

https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod

https://kubernetes.io/docs/concepts/configuration/manage-resources-containers

https://www.replex.io/blog/everything-you-need-to-know-about-kubernetes-quality-of-service-qos-classes

[Pod Quality of Service Classes | Kubernetes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/)
