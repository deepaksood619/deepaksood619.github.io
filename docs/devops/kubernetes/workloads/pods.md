# Pods

APodis the basic building block of Kubernetes--the smallest and simplest unit in the Kubernetes object model that you create or deploy. A Pod represents a running process on your cluster.

A Pod encapsulates an application container (or, in some cases, multiple containers), storage resources, a unique network IP, and options that govern how the container(s) should run. A Pod represents a unit of deployment:**a single instance of an application in Kubernetes,** which might consist of either a single container or a small number of containers that are tightly coupled and that share resources.

- Group of one or more containers that are always co-located, co-scheduled, and run in a shared context
- Containers in the same pod have the same hostman
- Each pod is isolated by
  - Process ID (PID) namespace
  - Network namespace
  - Interprocess Communication (IPC) namespace
  - Unix Time Sharing (UTS) namespace
- Alternative to a VM with multiple processes
- A Pod does not provide self-healing functionality. It is **ephemeral**. When a Pod dies, it's gone.

Pods in a Kubernetes cluster can be used in two main ways:

- **Pods that run a single container.** The "one-container-per-Pod" model is the most common Kubernetes use case; in this case, you can think of a Pod as a wrapper around a single container, and Kubernetes manages the Pods rather than the containers directly.
- **Pods that run multiple containers that need to work together**. A Pod might encapsulate an application composed of multiple co-located containers that are tightly coupled and need to share resources. These co-located containers might form a single cohesive unit of service--one container serving files from a shared volume to the public, while a separate "sidecar" container refreshes or updates those files. The Pod wraps these containers and storage resources together as a single manageable entity.

Each Pod is meant to run a single instance of a given application. If you want to scale your application horizontally (e.g., run multiple instances), you should use multiple Pods, one for each instance. In Kubernetes, this is generally referred to asreplication. Replicated Pods are usually created and managed as a group by an abstraction called a Controller.

Pods provide two kinds of **shared resources** for their constituent container:

## Networking

Each Pod is assigned a unique IP address. Every container in a Pod shares the network namespace, including the IP address and network ports. Containersinside a Podcan communicate with one another usinglocalhost. When containers in a Pod communicate with entitiesoutside the Pod, they must coordinate how they use the shared network resources (such as ports).

## Storage

A Pod can specify a set of shared storagevolumes. All containers in the Pod can access the shared volumes, allowing those containers to share data. Volumes also allow persistent data in a Pod to survive in case one of the containers within needs to be restarted.

## Use of Pods

Pods can be used to host vertically integrated application stacks (e.g. LAMP), but their primary motivation is to support co-located, co-managed helper programs, such as:

- content management systems, file and data loaders, local cache managers, etc.
- log and checkpoint backup, compression, rotation, snapshotting, etc.
- data change watchers, log tailers, logging and monitoring adapters, event publishers, etc.
- proxies, bridges, and adapters
- controllers, managers, configurators, and updaters

## Controllers

A Controller can create and manage multiple Pods for you, handling replication and rollout and providing self-healing capabilities at cluster scope. For example, if a Node fails, the Controller might automatically replace the Pod by scheduling an identical replacement on a different Node.

Some examples of Controllers that contain one or more pods include:

- [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

## Pod Template

Pod templates are pod specifications which are included in other objects, such as [Replication Controllers](https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/), [Jobs](https://kubernetes.io/docs/concepts/jobs/run-to-completion-finite-workloads/), and [DaemonSets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/). Controllers use Pod Templates to make actual pods.

## Init Containers

A [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) can have multiple Containers running apps within it, but it can also have one or more Init Containers, which are run before the app Containers are started.

Init Containers are exactly like regular Containers, except:

- They always run to completion.
- Each one must complete successfully before the next one is started.

## Pod Presets

A **Pod Preset** is an API resource for injecting additional runtime requirements into a Pod at creation time.

## Ephemeral Containers

A special type of container that runs temporarily in an existing [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) to accomplish user-initiated actions such as troubleshooting. You use ephemeral containers to inspect services rather than to build applications.

Ephemeral containers differ from other containers in that they lack guarantees for resources or execution, and they will never be automatically restarted, so they are not appropriate for building applications. Ephemeral containers are described using the sameContainerSpecas regular containers, but many fields are incompatible and disallowed for ephemeral containers.

<https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers>

1. Which deployment method would allow the most flexibility, multiple applications per pod or one per Pod?

One per pod

2. Which deployment method allows for the most granular scalability?

One per pod

3. Which have the best inter-container performance?

Multiple per pod

4. How many IP addresses are assigned per pod?

One

5. What are some ways containers can communicate within the same pod?

IPC, loopback or shared filesystem access.

6. What are some reasons you should have multiple containers per pod?

Lean containers may not have functionality like logging. Able to maintain lean execution but add functionality as necessary, like Ambassadors and Sidecar containers.

- args: override Docker images'sCMD
- command: override Docker images'sEntrypoint
