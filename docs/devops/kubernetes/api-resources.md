# api-resources

### Namespaces

Kubernetes includes a means to segment a single physical cluster into separate logical clusters using namespacing.

### Pods

Whatever the runtime, Kubernetes fundamentally manages a logical grouping of one or more containers called a pod.

### StatefulSets

Kubernetes controllers for managing workloads that require proper management of state.

### ReplicaSet

One of the control loops available in Kubernetes that ensures that the desired number of pods are running.

### Roles

Kubernetes has several access control schemes, and users should always default to role-based access controls to maximize security.

### Ingresses and Load Balancing

In order to expose a service outside a cluster, a user should set up an ingress for layer 7 or define the configuration of a layer 4 load balancer using "type=loadbalancer" in the service definition.

### Deployments

The declarative controller in Kubernetes that manages replicasets of pods.

### Services

Defined by a label, a Kubernetes service is a logical layer that provides IP/DNS/etc. persistence to dynamic pods.

### DaemonSet

A Kubernetes construct that enables users to run a pod on every node in the cluster.

### Jobs and Cronjobs

Kubernetes includes the logic to run jobs, processes that run to completion, and cronjobs - processes that run at specific intervals and run to completion.

### Extension Points

Kubernetes has a number of points to extend its core functionality.

### Custom Resource Definition (CRD)

CRD allows users to extend Kubernetes with custom APIs for different objects beyond the standard ones supported by Kubernetes.

### Container Runtime Interface (CRI)

CRI is a plugin API that enables Kubernetes to support other container runtimes beyond Docker and Containerd.

### Container Network Interface (CNI)

CNI gives users a choice of network overlay that can be used with Kubernetes to add SDN features.

### Container Storage Interface (CSI)

CSI empowers users to support different storage systems through a driver model.

[Container Storage Interface](https://github.com/container-storage-interface/spec/blob/master/spec)(CSI) defines a standard interface for container orchestration systems (like Kubernetes) to expose arbitrary storage systems to their container workloads.

https://github.com/container-storage-interface/spec/blob/master/spec

### Resource Types

| **Resource type** | **Abbreviated alias** |
|---|---|
| apiservices |  |
| certificatesigningrequests | csr |
| clusters |  |
| clusterrolebindings |  |
| clusterroles |  |
| componentstatuses | cs |
| configmaps | cm |
| controllerrevisions |  |
| cronjobs |  |
| customresourcedefinition | crd |
| daemonsets | ds |
| deployments | deploy |
| endpoints | ep |
| events | ev |
| ingresses | ing |
| jobs |  |
| limitranges | limits |
| namespaces | ns |
| networkpolicies | netpol |
| nodes | no |
| persistentvolumeclaims | pvc |
| persistentvolumes | pv |
| poddisruptionbudget | pdb |
| podpreset |  |
| pods | po |
| podsecuritypolicies | psp |
| podtemplates |  |
| replicasets | rs |
| replicationcontrollers | rc |
| resourcequotas | quota |
| rolebindings |  |
| roles |  |
| secrets |  |
| serviceaccounts | sa |
| services | svc |
| statefulsets |  |
| storageclasses |  |

### Outline

```yaml
- API Version: most resource type covered in the exam belongs to thecoregroup and are currently in the versionv1. Several special cases are listed below.
  - v1: Pod, Service, ConfigMap, Secret, PersistentVolumeClaim, Namespace, ServiceAccount, Node
  - apps/v1: Deployment
  - batch/v1: Job
  - batch/v1beta1: CronJob
  - networking.k8s.io/v1: NetworkPolicy
- Object Metadata
  - name:namefield is required and must be unique within a namespace.
  - labels
  - annotations: not queryable
  - namespace
- Resource Type
  - Pod
    - affinity: nodeAffinity, podAffinity
      - preferredDuringSchedulingIgnoredDuringExecution
      - requiredDuringSchedulingIgnoredDuringExecution
    - containers
      - args: override Docker images's CMD
      - command: override Docker images's Entrypoint
      - env
        - name/value
        - name/valueFrom
          - configMapKeyRef: pull env from ConfigMap
            - name/key
          - secretKeyRef: pull env from Secret
      - envFrom
        - configMapRef: convert all items from the specified ConfigMap to environment variables
          - name
        - secretRef: convert all items from the specified Secret to environment variables
      - image
      - imagePullPolicy
        - Always (default)
        - Never
        - ifNotPresent
      - probe: livenessProbe, readinessProbe
        - initialDelaySeconds
        - periodSeconds
        - timeoutSeconds
        - type:
          - exec: run a command
          - httpGet: check a http endpoint
          - tcpSocket: check a tcp socket
      - ports
        - containerPort
        - hostPort
        - protocol
      - resources: limits, requests
        - cpu: e.g. 0.1, 1, 100m, etc.
        - memory: e.g. 128974848, 129e6, 129M, 123Mi, etc.
      - securityContext
        - capabilities: add or drop capabilities. e.g. SYS_ADMIN, AUDIT_CONTROL, etc.
        - runAsGroup
        - runAsUser
      - volumeMounts
    - restartPolicy
      - Always
      - OnFailure
      - Never
    - securityContext
      - runAsGroup: a valid GID
      - runAsUser: a valid UID
    - ServiceAccountName
    - tolerations
      - key
      - operator
        - Exists
        - Equal
      - value
    - volumes
      - configMap
        - name
        - items
          - key/path
      - emptyDir
      - hostPath
      - persistentVolumeClaim
      - secret
  - Deployment
    - replicas
    - selector
      - matchExpressions
      - matchLabels
    - strategy: Recreate or RollingUpdate
    - Pod Template
  - Job
    - activeDeadlineSeconds: job timeout seconds
    - backoffLimit: number of retries
    - completions: the desired number of successfully finished pods the job should be run with
    - parallelism: the maximum desired number of pods the job should run at any given time
    - selector: matchExpressions or matchLabels
    - Job Pod Template: restartPolicy in the pod spec should beNever.
  - CronJob
    - Job Template
    - schedule
  - Service
    - Types
      - ClusterIP
      - NodePort
    - Service Port
      - nodePort: set only when type=NodePort
      - protocol: TCP or UDP
      - port
      - targetPort
  - ConfigMap
  - Secret: values in the Secret must be base64 encoded: `echo -n "<value>" | base64`
  - Node
    - taints
      - key
      - value
      - effect
        - NoSchedule
        - PreferNoSchedule
        - NoExecute
  - PersistentVolumeClaim
    - accessModes
      - ReadWriteOnce
      - ReadOnlyMany
      - ReadWriteMany
    - resources: limits, requests
      - storage: e.g. 8Gi, 128M, etc.
    - selector: matchExpressions or matchLabels
    - storageClassName
  - Namespace
  - ServiceAccount
  - NetworkPolicy
    - policyTypes:
      - Ingress
      - Egress
    - podSelector: matchExpressions or matchLabels
    - ingress
    - egress
```
