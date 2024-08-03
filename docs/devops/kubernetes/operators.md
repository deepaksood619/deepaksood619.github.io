# Operators

https://operatorhub.io

## Operators

An Operator is a method of packaging, deploying and managing a Kubernetes application. A Kubernetes application is an application that is both deployed on Kubernetes and managed using the Kubernetes APIs and kubectl tooling.

To be able to make the most of Kubernetes, you need a set of cohesive APIs to extend in order to service and manage your applications that run on Kubernetes. You can think of Operators as the runtime that manages this type of application on Kubernetes.

It builds upon the basic Kubernetes **resource** and **controller** concepts but includes domain or application-specific **knowledge** to automate common tasks.

## Resources

- Pod, ConfigMap, Route

## Controllers

- ReplicaSet, DaemonSet, Deployment

## Domain or Application Specific Knowledge

- Installing
- Self-Heal
- Scale
- Clean up
- Update
- Backup
- Restore

## Operator Framework

1. Operator SDK
2. Operator LifeCycle Manager
3. Operator Metering

[Operator SDK](https://sdk.operatorframework.io/)

[GitHub - kubernetes-sigs/kubebuilder: Kubebuilder - SDK for building Kubernetes APIs using CRDs](https://github.com/kubernetes-sigs/kubebuilder)

## Game Changer

An Operator is nothing more than a set of application-specific custom controllers. So, why is it a game-changer? Well, controllers have direct access to Kubernetes API, which means that they can monitor the cluster, change pods/services, scale up/down, and call endpoints of the running applications, all according to custom rules written inside those controllers.

![image](../../media/DevOps-Kubernetes-Operators-image1.jpg)

As you can see in the figure above, the Operator monitors and analyzes the cluster, and based on a set of parameters, trigger a series of actions to achieve the desired state. This reconciliation process is all over the place in K8s. But not all actions are equal. In our example, we have two distinct categories:

- Infrastructure: Add a new node. The Operator requests via the Kubernetes API to launch a new Pod running Couchbase Server.

- Domain-specific: Add node to the cluster/trigger data rebalancing.The Operator knows how Couchbase works and calls the correct REST endpoint to add the new node to the cluster and trigger data rebalancing.

That is the real power of Operators:they allow you to write an application to fully manage another, and guess which kind stateful applications are the hardest to manage? You are right: databases.

The Operator's ecosystem is growing quickly; for instance, it lets you deploy something very similar to AWS S3.

Finally, Kubernetes provides a cloud-agnostic application deployment and management. It is so powerful that might lead us to treat cloud providers almost like a commodity, as you will be able to migrate freely between them.

https://dzone.com/articles/why-kubernetes-operators-are-a-game-changer

## Custom Resource Definition (CRDs)

Custom Resources/Controllers - https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources

## Capabilities

1. Basic Install - Automated application provisioning and configuration management
2. Seamless Upgrades - Patch and minor version upgrades supported
3. Full Lifecycle - App lifecycle, storage lifecycle (backup, failure recovery)
4. Deep Insights - Metrics, alerts, log processing and workload analysis
5. Auto Pilot - Horizontal/vertical scaling, auto config tuning, abnormal detection, scheduling tuning

## Creating

![image](../../media/DevOps-Kubernetes-Operators-image2.jpg)

## Controllers

![image](../../media/DevOps-Kubernetes-Operators-image3.jpg)

## Operator Lifecycle Manager (OLM)

Enable cluster admins to manage Operators on any Kubernetes cluster (dependency management)

## Kafka Operator

1. Automated Provisioning
    - Configuration for Confluent Platform clusters to achieve zero-touch provisioning.
    - Deployment of clusters across multiple racks or availability zones.
    - Integration with [Persistent Volume Claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) to store data either on local disk or network attached storage.

2. Cluster Management and Operations
    - Automated rolling update of the Confluent Platform clusters after either a Confluent Platform version, configuration, or resource update
    - Elastic scaling of Kafka clusters up or down by updating cluster configuration.
    - Automated data balancing to distribute replicas evenly across all brokers in a Kafka cluster, after new brokers are added to the cluster during a scale up operation, as well as, before existing brokers are deleted from the cluster during a scale down operation.

3. Resiliency
    - Restoration of a Kafka node to a pod with the same broker id, configuration, and Persistent volumes when a Kafka pod dies

4. Monitoring
    - End-to-end data completeness SLA monitoring with Control Center
    - Exposes Prometheus metrics for additional alerting and monitoring

https://www.confluent.io/blog/introducing-the-confluent-operator-apache-kafka-on-kubernetes

https://github.com/krallistic/kafka-operator

## Prometheus Operator

https://github.com/coreos/prometheus-operator/tree/master/contrib/kube-prometheus

## Questions

### Why use Operators in Kubernetes?

Operators automate the management of complex applications by encoding operational knowledge into software, ensuring consistency, repeatability, and scalability in application deployment and management.

### Explain the role of a Custom Resource (CR) in the context of Kubernetes Operators

A Custom Resource is an extension of the Kubernetes API that allows you to define custom objects and their behavior. Operators use Custom Resources to define and manage applications.

### How does an Operator differ from a Controller in Kubernetes?

While both Operators and Controllers extend the Kubernetes API, Operators go beyond basic control loops by automating the management of complex applications. Operators encapsulate domain-specific operational knowledge.

### What is the purpose of the Operator SDK in Kubernetes?

The Operator SDK is a toolkit that helps developers build, test, and package Kubernetes Operators. It provides tools and libraries to simplify the process of creating and maintaining Operators.

### Can you explain the reconcile loop in the context of Kubernetes Operators?

The reconcile loop is a continuous process within an Operator that observes the current state of the system, compares it with the desired state, and takes actions to make the actual state match the desired state.

### How does an Operator handle upgrades or updates to applications?

Operators can include logic to handle upgrades or updates by defining how the changes should be applied to the application instances. This can involve rolling updates, canary releases, etc.

### What are Helm Charts, and how are they related to Kubernetes Operators?

Helm Charts are a package manager for Kubernetes applications. While Helm is a popular tool for packaging, releasing, and managing Kubernetes applications, Operators provide a more sophisticated way to manage application lifecycle and state.

### Explain the concept of Day 2 Operations in the context of Kubernetes Operators

Day 2 Operations refer to the ongoing tasks required to maintain and manage an application in production. Kubernetes Operators automate many Day 2 Operations, such as scaling, backup, and monitoring.

### How does an Operator handle application failures or crashes?

Operators can be designed to handle application failures by implementing strategies like automatic restarts, rolling updates, or triggering alerts for human intervention.

### What is the role of the Operand in the Operator pattern?

The Operand is the instance of a workload created by the Operator. It represents the concrete application instance that the Operator manages.

### Explain the concept of "reified intent" in the context of Operators

Reified intent means capturing and encoding the operational knowledge and best practices of managing an application in the Operator. It allows the Operator to automate actions based on this encoded knowledge.

### How do you scale an application managed by an Operator?

Operators can implement scaling logic in their reconcile loop, monitoring the application's metrics and adjusting the number of replicas or resources accordingly.

### What is the purpose of the Finalizer in Kubernetes Operators?

Finalizers are used to implement pre-delete and post-delete hooks in Kubernetes resources. Operators use Finalizers to perform cleanup operations before deleting an instance of the application.

### Explain the concept of CRD (Custom Resource Definition) in the context of Operators

A CRD defines custom resources and their schema in Kubernetes. It allows Operators to introduce custom objects, extending the Kubernetes API to represent and manage application-specific resources.

### How can you handle secrets or sensitive data in a Kubernetes Operator?

Operators can use Kubernetes Secrets to handle sensitive data. They can be mounted as volumes or passed as environment variables to the application containers.

### What is the purpose of the Event-driven model in Kubernetes Operators?

The event-driven model allows Operators to react to changes in the cluster, triggering reconciliation loops in response to events like a new Custom Resource being created or a Pod crashing.

### How does an Operator handle idempotency in its operations?

Operators should be designed to be idempotent, meaning that applying the same operation multiple times has the same result as applying it once. This ensures consistency and reliability in the management of applications.

### Explain the concept of Operator Composition in Kubernetes

Operator Composition refers to the practice of combining multiple Operators to manage a more complex application stack. Each Operator focuses on a specific aspect of the application, promoting modular and reusable designs.

### What are the challenges or considerations when developing a multi-cluster Kubernetes Operator?

Challenges may include dealing with cluster heterogeneity, handling cross-cluster communication, ensuring consistent behavior across clusters, and addressing security concerns related to multi-cluster deployments.

## References

- https://github.com/operator-framework
- https://coreos.com/operators
- https://github.com/operator-framework/awesome-operators
- https://cloud.google.com/blog/products/containers-kubernetes/best-practices-for-building-kubernetes-operators-and-stateful-apps
- https://github.com/kubernetes-sigs/kubebuilder
- https://book.kubebuilder.io
- https://codeengineered.com/blog/2018/kubernetes-helm-related-tools
- https://medium.com/@cloudark/kubernetes-operators-and-helm-it-takes-two-to-tango-3ff6dcf65619
