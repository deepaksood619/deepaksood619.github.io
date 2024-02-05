# Concepts & Overview

## Kubernetes Objects

We use **Kubernetes API objects**to describe our cluster'sdesired state: what applications or other workloads you want to run, what container images they use, the number of replicas, what network and disk resources you want to make available, and more.

The basic Kubernetes objects include:

- [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
- [Service](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Volume](https://kubernetes.io/docs/concepts/storage/volumes/)
- [Namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

In addition, Kubernetes contains a number of **higher-level abstractions called Controllers.** Controllers build upon the basic objects, and provide additional functionality and convenience features. They include:

- [ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)
- [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)
- [Job](https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/)

Kubernetes Objectsare persistent entities in the Kubernetes system. Kubernetes uses these entities to represent the state of your cluster. Specifically, they can describe:

- What containerized applications are running (and on which nodes)
- The resources available to those applications
- The policies around how those applications behave, such as restart policies, upgrades, and fault-tolerance

A Kubernetes object is a "record of intent"--once you create the object, the Kubernetes system will constantly work to ensure that object exists. By creating an object, you're effectively telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster'sdesired state.

## Labels and Selectors

- Key/value pairs associated with Kubernetes objects
- Used to organize and select subsets of objects
- Attached to objects at creation time but modified at any time
- Labels are the essential glue to associate one API object with other
    - **Replication Controller** -> Pods

    Replication Controller means that I tell kubernetes that I want this container and I want 4 copies of it.

    - Service -> Pods
    - Pods -> Nodes

- First metadata in deployment along with labels describes the deployment itself. It gives a labelfor that actual deployment
- the second selector, is actually a selector for the deployment to apply to the pod that the deployment is describing. Therefore pod labels and selector must match each other
- Thetemplateis actually apodTemplate. It describes a pod that is launched.

## Object Spec and Status

Every Kubernetes object includes two nested object fields that govern the object's configuration: the object spec and the object **status**. Thespec, which you must provide, describes your **desired state** for the object--the characteristics that you want the object to have. The status describes the **actual state** of the object, and is supplied and updated by the Kubernetes system. At any given time, the Kubernetes Control Plane actively manages an object's actual state to match the desired state you supplied.

**Names** - All objects in the Kubernetes REST API are unambiguously identified by a Name and a UID

**Namespaces**

Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces

### Hierarchical Namespaces

[Kubernetes](https://www.linkedin.com/feed/hashtag/?keywords=kubernetes&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6700424364623503361) has introduced the feature of the hierarchical namespace.!!!

Till now we have the namespaces for logical grouping of components in Kubernetes but it was not flexible enough to meet common use cases.

That's why they have introduced the hierarchical namespaces which will work on policy inheritance and delegated access control which means now you don't need cluster admin permission to create [namespaces](https://www.linkedin.com/feed/hashtag/?keywords=namespaces&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6700424364623503361). The namespace owner can create the hierarchical namespace with his/her own access.

This concept of ownership enables two additional types of behaviours:

- **Policy inheritance:** if one namespace is a child of another, policy objects such as RBAC RoleBindings are [copied from the parent to the child](https://github.com/kubernetes-sigs/multi-tenancy/blob/master/incubator/hnc/docs/user-guide/concepts#basic-propagation).
- **Delegated creation:** you usually need cluster-level privileges to create a namespace, but hierarchical namespaces adds an alternative: [subnamespaces](https://github.com/kubernetes-sigs/multi-tenancy/blob/master/incubator/hnc/docs/user-guide/concepts#basic-subns), which can be manipulated using only limited permissions in the parent namespace.

https://kubernetes.io/blog/2020/08/14/introducing-hierarchical-namespaces

**Labels** - Labelsare key/value pairs that are attached to objects, such as pods. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object

**Label Selectors** - Via a label selector, the client/user can identify a set of objects.The API currently supports two types of selectors: equality-based and set-based

#### Equality-based requirement

Equality or inequality based requirements allow filtering by label keys and values. Matching objects must satisfy all of the specified label constraints, though they may have additional labels as well. Three kinds of operators are admitted `=`,`==`,`!=`. The first two represent equality (and are simply synonyms), while the latter represents inequality.

For example:

```yaml
environment = production
tier != frontend
```

#### Set-based requirement

Set-based label requirements allow filtering keys according to a set of values. Three kinds of operators are supported: in, notin and exists(only the key identifier).

For example:

```yaml
environment in (production, qa)
tier notin (frontend, backend)
partition
!partition
```

### Annotations

You can use Kubernetes annotations to attach arbitrary **non-identifying metadata** to objects. Clients such as tools and libraries can retrieve this metadata.

`kubectl annotate po nginx1 nginx2 nginx3 description='my description'`

https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

### Field Selectors

*Field selectors* let you [select Kubernetes resources](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects) based on the value of one or more resource fields.

`kubectl get pods --field-selector status.phase=Running`

### Kubernetes Object Management

The **kubectl** command-line tool supports several different ways to create and manage Kubernetes objects.

#### Management Techniques

| Management technique             | Operates on          | Recommended environment | Supported writers | Learning curve |
|------------------|-------------|------------------|-------------|-----------|
| Imperative commands              | Live objects         | Development projects    | 1+                | Lowest         |
| Imperative object configuration  | Individual files     | Production projects     | 1                 | Moderate       |
| Declarative object configuration | Directories of files | Production projects     | 1+                | Highest        |

#### Imperative Commands

When using imperative commands, a user operates directly on live objects in a cluster. The user provides operations to thekubectlcommand as arguments or flags.

This is the simplest way to get started or to run a one-off task in a cluster. Because this technique operates directly on live objects, it provides no history of previous configurations.

#### Imperative Object Configuration

In imperative object configuration, the kubectl command specifies the operation (create, replace, etc.), optional flags and at least one file name. The file specified must contain a full definition of the object in YAML or JSON format.

#### Declarative Object Configuration

When using declarative object configuration, a user operates on object configuration files stored locally, however the user does not define the operations to be taken on the files. Create, update, and delete operations are automatically detected per-object by **kubectl**. This enables working on directories, where different operations might be needed for different objects.

## Kubernetes Control Plane

Once you've set your desired state, the **Kubernetes Control Plane** works to make the cluster's current state match the desired state. To do so, Kubernetes performs a variety of tasks automatically-such as starting or restarting containers, scaling the number of replicas of a given application, and more.

The Control Plane maintains a record of all of the Kubernetes Objects in the system, and runs continuous control loops to manage those objects' state. At any given time, the Control Plane's control loops will respond to changes in the cluster and work to make the actual state of all the objects in the system match the desired state that you provided.

The Kubernetes Control Plane consists of a collection of processes running on your cluster:

## Kubernetes Master Components

The "master" refers to a collection of processes managing the cluster state. Typically these processes are all run on a single node in the cluster, and this node is also referred to as the master. The master can also be replicated for availability and redundancy.

TheKubernetes Master is a collection of processes that run on a single node in your cluster, which is designated as the master node.

### kube-apiserver

Component on the master that exposes the Kubernetes API. It is the front-end for the Kubernetes control plane.

The kube-apiserver is central to the operation of the Kubernetes cluster.

All calls, both internal and external traffic, are handled via this agent. All actions are accepted and validated by this agent, and it is the only agent which connects to the etcd database. As a result, it acts as a master process for the entire cluster, and acts as a frontend of the cluster's shared state. **Each API call goes through three steps: authentication, authorization, and several admission controllers.**

### kube-controller-manager

Component on the master that runs [controllers](https://kubernetes.io/docs/admin/kube-controller-manager/) (A control loop that watches the shared state of the cluster through the apiserver and make changes attempting to move the current state towards the desired state).

The kube-controller-manager is a core control loop daemon which interacts with the kube-apiserver to determine the state of the cluster. If the state does not match, the manager will contact the necessary controller to match the desired state. There are several controllers in use, such as endpoints, namespace, and replication.

### kube-scheduler

Component on the master that watches newly created pods that have no node assigned, and selects a node for them to run on.

The kube-scheduler uses an algorithm to determine which node will host a Pod of containers. The scheduler will try to view available resources (such as volumes) to bind, and then try and retry to deploy the Pod based on availability and success.

There are several ways you can affect the algorithm, or a custom scheduler could be used instead. You can also bind a Pod to a particular node, though the Pod may remain in a pending state due to other settings.

One of the first settings referenced is if the Pod can be deployed within the current quota restrictions. If so, then the taints and tolerations, and labels of the Pods are used along with those of the nodes to determine the proper placement.

### etcd

Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.

The state of the cluster, networking, and other persistent information is kept in an etcd database, or, more accurately, ab+treekey-value store. Rather than finding and changing an entry, values are always appended to the end. Previous copies of the data are then marked for future removal by a compaction process. It works with curl and other HTTP libraries, and provides reliable watch queries.

Simultaneous requests to update a value all travel via the kube-apiserver, which then passes along the request to etcd in a series. The first request would update the database. The second request would no longer have the same version number, in which case the kube-apiserver would reply with an error 409 to the requester. There is no logic past that response on the server side, meaning the client needs to expect this and act upon the denial to update.

There is a master database along with possible followers. They communicate with each other on an ongoing basis to determine which will be master, and determine another in the event of failure. While very fast and potentially durable, there have been some hiccups with some features like whole cluster upgrades. Starting with v1.15.1, kubeadm allows easy deployment of a multi-master cluster with stacked etcd or an external database cluster.

### cloud-controller-manager

[cloud-controller-manager](https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/) runs controllers that interact with the underlying cloud providers.

Various types of cloud controller manager are

- Node controller - It checks and confirms that node is deleted properly after it has been stopped
- Route controller - Manages the traffic routes in the underlying cloud infrastructure
- Volume controller - Manages the storage volume and interacts with the cloud provider to orchestrate volume
- Service controller - Reponsible for the management of cloud which provides load balancers.

Remaining in beta as of v1.16, the cloud-controller-manager interacts with agents outside of the cloud. It handles tasks once handled by kube-controller-manager. This allows faster changes without altering the core Kubernetes control process. Each kubelet must use the cloud-provider-external settings passed to the binary.

## Kubernetes Node Components

The nodes in a cluster are the machines (VMs, physical servers, etc) that run your applications and cloud workflows. The Kubernetes master controls each node; you'll rarely interact with nodes directly.

Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment.

### [kubelet](https://kubernetes.io/docs/admin/kubelet/)

which communicates with the Kubernetes Master.

An agent that runs on each node in the cluster. It makes sure that containers are running in a pod.

The kubelet takes a set of PodSpecs that are provided through various mechanisms and ensures that the containers described in those PodSpecs are running and healthy. The kubelet doesn't manage containers which were not created by Kubernetes.

The Kubelet is responsible for a few things:

1. Registering the node it's running on with the Kubernetes API server
2. Monitoring machine metrics such as RAM, CPU, and disk usage and periodically reporting the health and status of those metrics to the API server.
3. Watching the API server and ensuring that pods which were scheduled to that node are running and reporting their runtime status back to the Kubernetes API server
4. Provide access to pods for API's likekubectl logsandkubectl exec(these requests get forwarded from the Kubernetes API server)

**Monitoring Kubelet** - https://sysdig.com/blog/how-to-monitor-kubelet

### [kube-proxy](https://kubernetes.io/docs/admin/kube-proxy/)

a network proxy which reflects Kubernetes networking services on each node.

[kube-proxy](https://kubernetes.io/docs/admin/kube-proxy/) enables the Kubernetes service abstraction by maintaining network rules on the host and performing connection forwarding.

Every Kubernetes node runs a **kube-proxy**. **kube-proxy** maps virtual IP addresses to services and creates the required routes in the system so that pods can communicate with each other.

The kube-proxy is in charge of managing the network connectivity to the containers. It does so through the use of iptables entries. It also has the userspace mode, in which it monitors Services and Endpoints using a random high-number port to proxy traffic. Use of ipvs can be enabled, with the expectation it will become the default, replacing iptables.

### Container Runtime

The container runtime is the software that is responsible for running containers. Kubernetes supports several runtimes:[Docker](http://www.docker.com/), [rkt](https://coreos.com/rkt/), [runc](https://github.com/opencontainers/runc) and any OCI [runtime-spec](https://github.com/opencontainers/runtime-spec) implementation.

## Kubernetes Addons

Addons are pods and services that implement cluster features. The pods may be managed by Deployments, ReplicationControllers, and so on. Namespaced addon objects are created in the **kube-system** namespace.

1. DNS (Kube-DNS)
2. WebUI (Dashboard)
3. Container Resource Monitoring
4. Cluster-level Logging
5. Kubectl (Command line interface)

## Naming Convention

- `<kind>_<name>.yaml`

## References

https://kubernetes.io/docs/concepts

https://kubernetes.io/docs/concepts/overview/components

https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects

https://kubernetes.io/docs/concepts/overview/object-management-kubectl/overview
