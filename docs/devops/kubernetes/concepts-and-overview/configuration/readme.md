# Configuration

- [Configuration Best Practices](https://kubernetes.io/docs/concepts/configuration/overview/)
- [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)
- [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [Managing Resources for Containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)
- [Pod Overhead](https://kubernetes.io/docs/concepts/configuration/pod-overhead/)
- [Resource Bin Packing for Extended Resources](https://kubernetes.io/docs/concepts/configuration/resource-bin-packing/)
- [Organizing Cluster Access Using kubeconfig Files](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)
- [Pod Priority and Preemption](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/)

## Assigning pods to nodes

- [nodeSelector](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector)
- [Interlude: built-in node labels](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#built-in-node-labels)
- [Node isolation/restriction](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-isolation-restriction)
- [Affinity and anti-affinity](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity)

https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-node-affinity
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: kubernetes.io/e2e-az-name
            operator: In
            values:
            - e2e-az1
            - e2e-az2
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 1
        preference:
          matchExpressions:
          - key: another-node-label-key
            operator: In
            values:
            - another-node-label-value
  containers:
  - name: with-node-affinity
    image: k8s.gcr.io/pause:2.0
```

- [nodeName](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodename)

https://kubernetes.io/docs/concepts/configuration/assign-pod-node

## Taints and Tolerations

- [Taint based Evictions](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#taint-based-evictions)
- [Taint Nodes by Condition](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#taint-nodes-by-condition)

https://kubernetes.io/docs/concepts/configuration/taint-and-toleration

https://docs.microsoft.com/en-us/azure/aks/operator-best-practices-advanced-scheduler#provide-dedicated-nodes-using-taints-and-tolerations

Node affinity is a property of Pods that attracts them to a set of nodes (either as a preference or a hard requirement). Taints are theopposite --they allow a node to repel a set of pods. Tolerations are applied to pods, and allow (but do not require) the pods to schedule onto nodes with matching taints.

## Pods Priority and Preemption

- [How to use priority and preemption](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#how-to-use-priority-and-preemption)
- [How to disable preemption](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#how-to-disable-preemption)
- [PriorityClass](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#priorityclass)
- [Pod priority](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority)
- [Preemption](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#preemption)
- [Debugging Pod Priority and Preemption](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#debugging-pod-priority-and-preemption)
- [Interactions of Pod priority and QoS](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#interactions-of-pod-priority-and-qos)

https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption

## Configmaps

A ConfigMap is an API object used to store non-confidential data in key-value pairs.[Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a [volume](https://kubernetes.io/docs/concepts/storage/volumes/).

A ConfigMap allows you to decouple environment-specific configuration from your [container images](https://kubernetes.io/docs/reference/glossary/?all=true#term-image), so that your applications are easily portable.

ConfigMaps can be consumed in various ways:

- Pod environmental variables from single or multiple ConfigMaps
- Use ConfigMap values in Pod commands
- Populate Volume from ConfigMap
- Add ConfigMap data to specific path in Volume
- Set file names and access mode in Volume from ConfigMap data
- Can be used by system components and controllers

Like secrets, you can use ConfigMaps as environment variablesor using a volume mount. Theymust exist prior to being used by a Pod, unless marked asoptional. They also reside in a specific namespace.

```yaml
env:
- name: SPECIAL_LEVEL_KEY
   valueFrom:
      configMapKeyRef:
      name: special-config
      key: special.how
```

With volumes, youdefine a volume with theconfigMaptype in your podand mount it where it needs to be used.

```yaml
volumes:
- name: config-volume
   configMap:
    name: special-config
```

https://kubernetes.io/docs/concepts/configuration/configmap

## Secrets vs ConfigMaps

1. Use secrets for things which are actually secret like API keys, credentials, etc
2. Use config map for not-secret configuration data

In the future there will likely be some differentiators for secrets like rotation or support for backing the secret API w/ HSMs, etc. In general we like intent-based APIs, and the intent is definitely different for secret data vs. plain old configs.
