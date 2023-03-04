# Observability

Istio's robust tracing, monitoring, and logging features give you deep insights into your service mesh deployment. Gain a real understanding of how service performance impacts things upstream and downstream with Istio's monitoring features, while its custom dashboards provide visibility into the performance of all your services and let you see how that performance is affecting your other processes.

Istio's Mixer component is responsible for policy controls and telemetry collection. It provides backend abstraction and intermediation, insulating the rest of Istio from the implementation details of individual infrastructure backends, and giving operators fine-grained control over all interactions between the mesh and infrastructure backends.

All these features let you more effectively set, monitor, and enforce SLOs on services. Of course, the bottom line is that you can detect and fix issues quickly and efficiently.

Istio generates detailed telemetry for all service communications within a mesh. This telemetry providesobservabilityof service behavior, empowering operators to troubleshoot, maintain, and optimize their applications -- without imposing any additional burdens on service developers. Through Istio, operators gain a thorough understanding of how monitored services are interacting, both with other services and with the Istio components themselves.

Istio generates the following types of telemetry in order to provide overall service mesh observability:

- [**Metrics**](https://istio.io/docs/concepts/observability/#metrics)

Istio generates a set of service metrics based on the four "golden signals" of monitoring (latency, traffic, errors, and saturation). Istio also provides detailed metrics for the [mesh control plane](https://istio.io/docs/ops/deployment/architecture/). A default set of mesh monitoring dashboards built on top of these metrics is also provided.

To monitor service behavior, Istio generates metrics for all service traffic in, out, and within an Istio service mesh. These metrics provide information on behaviors such as the overall volume of traffic, the error rates within the traffic, and the response times for requests.

In addition to monitoring the behavior of services within a mesh, it is also important to monitor the behavior of the mesh itself. Istio components export metrics on their own internal behaviors to provide insight on the health and function of the mesh control plane.

- Proxy-level metrics
- Service-level metrics
- Control plane metrics

- [**Distributed Traces**](https://istio.io/docs/concepts/observability/#distributed-traces)

Istio generates distributed trace spans for each service, providing operators with a detailed understanding of call flows and service dependencies within a mesh.

- [**Access Logs**](https://istio.io/docs/concepts/observability/#access-logs)

As traffic flows into a service within a mesh, Istio can generate a full record of each request, including source and destination metadata. This information enables operators to audit service behavior down to the individual [workload instance](https://istio.io/docs/reference/glossary/#workload-instance) level.
