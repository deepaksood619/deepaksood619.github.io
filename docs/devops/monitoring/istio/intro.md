# Istio

## Circuit Breaker

A way to prevent a service from being bombarded with requests if the back end reports trouble and can't fulfill the requests in a timely way

Istio is an open platform for **providing** a uniform way to integrate microservices, manage traffic flow across microservices, enforce policies and aggregate telemetry data. Istio's control plane provides an abstraction layer over the underlying cluster management platform, such as Kubernetes, Mesos, etc

Istio deploys a proxy (called a sidecar) next to each service. All of the traffic meant for a service goes to the proxy, which uses policies to decide how, when, or if that traffic should go on to the service. Istio also enables sophisticated DevOps techniques such as canary deployments, **circuit breakers**, fault injection, and more.

Istio manages a group of proxies that tie together the components of a service mesh. The mesh represents the set of services inside of a larger user-facing application. Istio manages service-to-service traffic (East-West) and relies on proxies in front of each service. This enables client-side load balancing across services instances as well as ingress capabilities, such as A/B testing and canary releases for user-facing services. Mesh proxies also enable egress capabilities such as timeouts, retries and circuit breakers and improve fault tolerance when routing to external web services.Critically, Istio provides systematic centralized management of these proxies, and thus of the policies they implement. This is arguably the most important form of decoupling: decoupling the policies from the services. In particular, this allows developers to avoid encoding policies inside the services, which means they can change the policies without redeploying the service. Instead, to change policies they just update the configuration of the relevant proxies. Because the management is centralized, it is easy to be consistent across all of the services, and it's possible to apply updates in a controlled rollout to improve safety.

## Features

- Code Independent (Polyglot)
- Intelligent Routing and Load-Balancing
    - A/B Tests
    - Smarter Canary Releases
- Chaos: Fault Injection
- Resilience
    - Circuit Breakers
    - Retries, Failovers
- Observability: Metrics and Tracing
- Fleet wide policy enforcement
- A pluggable policy layer and configuration API supporting access controls, rate limits and quotas.
- Automatic load balancing for HTTP, gRPC, WebSocket, and TCP traffic.
- Automatic metrics, logs, and traces for all traffic within a cluster, including cluster ingress and egress.
- Secure service-to-service communication in a cluster with strong identity-based authentication and authorization.
- Blackbox telemetry (get all the metrics without changing the code)

## Dashboard (Kiali)

Kialilets you monitor, visualize, and configure the Istio Service Mesh from within a single user interface. Kiali lets you view configurations, monitor traffic flow between services, and analyze traces. It provides visibility into features likes service health, request routing, circuit breakers, request rate, traffic flow, error rates, and more.

## Features

- [Observability Features](https://kiali.io/documentation/features/#_observability_features)
    - [Graph](https://kiali.io/documentation/features/#_graph)
        - [Graph: Health](https://kiali.io/documentation/features/#_graph_health)
        - [Graph: Drill-Down](https://kiali.io/documentation/features/#_graph_drill_down)
        - [Graph: Side-Panel](https://kiali.io/documentation/features/#_graph_side_panel)
        - [Graph: Traffic Animation](https://kiali.io/documentation/features/#_graph_traffic_animation)
        - [Graph: Graph Types](https://kiali.io/documentation/features/#_graph_graph_types)
    - [Detail Views](https://kiali.io/documentation/features/#_detail_views)
        - [Detail: Metrics](https://kiali.io/documentation/features/#_detail_metrics)
        - [Detail: Services](https://kiali.io/documentation/features/#_detail_services)
        - [Detail: Workloads](https://kiali.io/documentation/features/#_detail_workloads)
        - [Detail: Runtimes Monitoring Dashboards](https://kiali.io/documentation/features/#_detail_runtimes_monitoring_dashboards)
    - [Distributed Tracing](https://kiali.io/documentation/features/#_distributed_tracing)
- [Configuration and Validation Features](https://kiali.io/documentation/features/#_configuration_and_validation_features)
    - [Istio Configuration](https://kiali.io/documentation/features/#_istio_configuration)
    - [Validations](https://kiali.io/documentation/features/#_validations)
    - [Istio Wizards](https://kiali.io/documentation/features/#_istio_wizards)
        - [Weighted Routing Wizard](https://kiali.io/documentation/features/#_weighted_routing_wizard)
        - [Matching Routing Wizard](https://kiali.io/documentation/features/#_matching_routing_wizard)
        - [Suspend Traffic Wizard](https://kiali.io/documentation/features/#_suspend_traffic_wizard)
        - [Advanced Options](https://kiali.io/documentation/features/#_advanced_options)
        - [More Wizard examples](https://kiali.io/documentation/features/#_more_wizard_examples)
- [Multi-cluster support](https://kiali.io/documentation/features/#_multi_cluster_support)

https://kiali.io/documentation/features

https://dzone.com/articles/visualizing-the-istio-service-mesh-using-kiali

## Metrics

https://www.datadoghq.com/blog/istio-metrics

## References

https://github.com/istio/istio

https://developers.redhat.com/topics/service-mesh

https://buoyant.io/2017/04/25/whats-a-service-mesh-and-why-do-i-need-one

https://github.com/redhat-developer-demos/istio-tutorial

https://medium.freecodecamp.org/how-to-get-istio-up-and-running-1935dc7cfb90

Hello Istio with Kubernetes Engine

https://google.qwiklabs.com/games/505/labs/1608

App Modernization with Istio Using Mixer to Apply Policies

https://google.qwiklabs.com/games/505/labs/1609

https://blog.christianposta.com/microservices/istio-as-an-example-of-when-not-to-do-microservices

https://engineering.hellofresh.com/everything-we-learned-running-istio-in-production-part-2-ff4c26844bfb
