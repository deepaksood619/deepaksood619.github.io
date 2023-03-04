# Traffic Management

Istio's easy rules configuration and traffic routing lets you control the flow of traffic and API calls between services. Istio simplifies configuration of service-level properties like circuit breakers, timeouts, and retries, and makes it a breeze to set up important tasks like A/B testing, canary rollouts, and staged rollouts with percentage-based traffic splits.

With better visibility into your traffic, and out-of-box failure recovery features, you can catch issues before they cause problems, making calls more reliable, and your network more robust -- no matter what conditions you face.

Istio's traffic management model relies on theEnvoyproxies that are deployed along with your services. All traffic that your mesh services send and receive (data planetraffic) is proxied through Envoy, making it easy to direct and control traffic around your mesh without making any changes to your services.

In order to direct traffic within your mesh, Istio needs to know where all your endpoints are, and which services they belong to. To populate its ownservice registry, Istio connects to a service discovery system. For example, if you've installed Istio on a Kubernetes cluster, then Istio automatically detects the services and endpoints in that cluster.

Using this service registry, the Envoy proxies can then direct traffic to the relevant services. Most microservice-based applications have multiple instances of each service workload to handle service traffic, sometimes referred to as a load balancing pool. By default, the Envoy proxies distribute traffic across each service's load balancing pool using a round-robin model, where requests are sent to each pool member in turn, returning to the top of the pool once each service instance has received a request.

- [Virtual services](https://istio.io/docs/concepts/traffic-management/#virtual-services)
- [Destination rules](https://istio.io/docs/concepts/traffic-management/#destination-rules)
- [Gateways](https://istio.io/docs/concepts/traffic-management/#gateways)
- [Service entries](https://istio.io/docs/concepts/traffic-management/#service-entries)
- [Sidecars](https://istio.io/docs/concepts/traffic-management/#sidecars)

## Virtual Services

- A virtual service lets you configure how requests are routed to a service within an Istio service mesh, building on the basic connectivity and discovery provided by Istio and your platform. Each virtual service consists of a set of routing rules that are evaluated in order, letting Istio match each given request to the virtual service to a specific real destination within the mesh. Your mesh can require multiple virtual services or none depending on your use case.
- Service subsets

apiVersion: networking.istio.io/v1alpha3

kind: VirtualService

metadata:

name: reviews

spec:

hosts:

- reviews

http:

- match:

- headers:

end-user:

exact: jason

route:

- destination:

host: reviews

subset: v2

- route:

- destination:

host: reviews

subset: v3

## Destination Rules

You can think of virtual services as how you route your traffictoa given destination, and then you use destination rules to configure what happens to trafficforthat destination. Destination rules are applied after virtual service routing rules are evaluated, so they apply to the traffic's "real" destination.

In particular, you use destination rules to specify named service subsets, such as grouping all a given service's instances by version. You can then use these service subsets in the routing rules of virtual services to control the traffic to different instances of your services.

Destination rules also let you customize Envoy's traffic policies when calling the entire destination service or a particular service subset, such as your preferred load balancing model, TLS security mode, or circuit breaker settings.

## Load Balancing Options

- Round-robin
- Random
- Weighted
- Least requests

apiVersion: networking.istio.io/v1alpha3

kind: DestinationRule

metadata:

name: my-destination-rule

spec:

host: my-svc

trafficPolicy:

loadBalancer:

simple: RANDOM

subsets:

- name: v1

labels:

version: v1

- name: v2

labels:

version: v2

## trafficPolicy

loadBalancer:

simple: ROUND_ROBIN

- name: v3

labels:

version: v3

## Sticky session

trafficPolicy:
loadBalancer:
consistentHash:
httpHeaderName: x-user

<https://dev.to/peterj/what-are-sticky-sessions-and-how-to-configure-them-with-istio-1e1a>

## Gateways

Gatewaydescribes a load balancer operating at the edge of the mesh receiving incoming or outgoing HTTP/TCP connections. The specification describes a set of ports that should be exposed, the type of protocol to use, SNI configuration for the load balancer, etc.

You use a [gateway](https://istio.io/docs/reference/config/networking/gateway/#Gateway) to manage inbound and outbound traffic for your mesh, letting you specify which traffic you want to enter or leave the mesh. Gateway configurations are applied to standalone Envoy proxies that are running at the edge of the mesh, rather than sidecar Envoy proxies running alongside your service workloads.

Unlike other mechanisms for controlling traffic entering your systems, such as the Kubernetes Ingress APIs, Istio gateways let you use the full power and flexibility of Istio's traffic routing. You can do this because Istio's Gateway resource just lets you configure layer 4-6 load balancing properties such as ports to expose, TLS settings, and so on. Then instead of adding application-layer traffic routing (L7) to the same API resource, you bind a regular Istio [virtual service](https://istio.io/docs/concepts/traffic-management/#virtual-services) to the gateway. This lets you basically manage gateway traffic like any other data plane traffic in an Istio mesh.

Gateways are primarily used to manage ingress traffic, but you can also configure egress gateways. An egress gateway lets you configure a dedicated exit node for the traffic leaving the mesh, letting you limit which services can or should access external networks, or to enable [secure control of egress traffic](https://istio.io/blog/2019/egress-traffic-control-in-istio-part-1/) to add security to your mesh, for example. You can also use a gateway to configure a purely internal proxy.

apiVersion: networking.istio.io/v1alpha3

kind: Gateway

metadata:

name: ext-host-gwy

spec:

selector:

app: my-gateway-controller

servers:

- port:

number: 443

name: https

protocol: HTTPS

hosts:

- ext-host.example.com

tls:

mode: SIMPLE

serverCertificate: /tmp/tls.crt

privateKey: /tmp/tls.key

## Service Entries

You use a [service entry](https://istio.io/docs/reference/config/networking/service-entry/#ServiceEntry) to add an entry to the service registry that Istio maintains internally. After you add the service entry, the Envoy proxies can send traffic to the service as if it was a service in your mesh. Configuring service entries allows you to manage traffic for services running outside of the mesh, including the following tasks:

- Redirect and forward traffic for external destinations, such as APIs consumed from the web, or traffic to services in legacy infrastructure.
- Define [retry](https://istio.io/docs/concepts/traffic-management/#retries), [timeout](https://istio.io/docs/concepts/traffic-management/#timeouts), and [fault injection](https://istio.io/docs/concepts/traffic-management/#fault-injection) policies for external destinations.
- Run a mesh service in a Virtual Machine (VM) by [adding VMs to your mesh](https://istio.io/docs/examples/virtual-machines/).
- Logically add services from a different cluster to the mesh to configure a [multicluster Istio mesh](https://istio.io/docs/setup/install/multicluster/gateways/#configure-the-example-services) on Kubernetes.

You don't need to add a service entry for every external service that you want your mesh services to use. By default, Istio configures the Envoy proxies to passthrough requests to unknown services. However, you can't use Istio features to control the traffic to destinations that aren't registered in the mesh.

You can configure virtual services and destination rules to control traffic to a service entry in a more granular way, in the same way you configure traffic for any other service in the mesh.

apiVersion: networking.istio.io/v1alpha3

kind: ServiceEntry

metadata:

name: svc-entry

spec:

hosts:

- ext-svc.example.com

ports:

- number: 443

name: https

protocol: HTTPS

location: MESH_EXTERNAL

resolution: DNS

## Sidecars

By default, Istio configures every Envoy proxy to accept traffic on all the ports of its associated workload, and to reach every workload in the mesh when forwarding traffic. You can use a [sidecar](https://istio.io/docs/reference/config/networking/sidecar/#Sidecar) configuration to do the following:

- Fine-tune the set of ports and protocols that an Envoy proxy accepts.
- Limit the set of services that the Envoy proxy can reach.

You might want to limit sidecar reachability like this in larger applications, where having every proxy configured to reach every other service in the mesh can potentially affect mesh performance due to high memory usage.

You can specify that you want a sidecar configuration to apply to all workloads in a particular namespace, or choose specific workloads using aworkloadSelector.

apiVersion: networking.istio.io/v1alpha3

kind: Sidecar

metadata:

name: default

namespace: bookinfo

spec:

egress:

- hosts:

- "./*"

- "istio-system/*"

## Network resilience and testing

- **Timeouts**
- **Retries**
- **Circuit breakers**
- **Fault injection**

<https://istio.io/docs/concepts/traffic-management>

## Ingress

- **Ingress Gateways**
- **Ingress (Kubernetes)**
- **Secure Gateways**
- **Ingress Gateway without TLS Termination**

<https://istio.io/docs/tasks/traffic-management/ingress>

## External and internal services

Internal services are defined as services which are part of your platform and are considered to be in the mesh. For internal services, Istio control plane provides all the required configuration to the sidecars by default. For example, in Kubernetes clusters, Istio configures the sidecars for all Kubernetes services to preserve the default Kubernetes behavior of all services being able to communicate with other.

External services are services which are not part of your platform i.e. services which are outside of the mesh. For external services, Istio provides two options, first to block all external service access (enabled by settingglobal.outboundTrafficPolicy.modetoREGISTRY_ONLY) and second to allow all access to external service (enabled by settingglobal.outboundTrafficPolicy.modetoALLOW_ANY). The default option for this setting (as of Istio 1.3) is to allow all external service access.

This is where the BlackHole and Passthrough clusters are used.

- **BlackHoleCluster**

The BlackHoleCluster is a virtual cluster created in the Envoy configuration whenglobal.outboundTrafficPolicy.modeis set toREGISTRY_ONLY. In this mode, all traffic to external service is blocked unless [service entries](https://istio.io/latest/docs/reference/config/networking/service-entry) are explicitly added for each service. To implement this, the default virtual outbound listener at0.0.0.0:15001which uses [original destination](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/service_discovery#original-destination) is setup as a TCP Proxy with the BlackHoleCluster as the static cluster. The configuration for the BlackHoleCluster looks like this:

{
"name": "BlackHoleCluster",
"type": "STATIC",
"connectTimeout": "10s"
}

As you can see, this cluster is static with no endpoints so all the traffic will be dropped. Additionally, Istio creates unique listeners for every port/protocol combination of platform services which gets hit instead of the virtual listener if the request is made to an external service on the same port. In that case, the route configuration of every virtual route in Envoy is augmented to add the BlackHoleCluster like this:

{
"name": "block_all",
"domains": [
"*"
],
"routes": [
{
"match": {
"prefix": "/"
},
"directResponse": {
"status": 502
}
}
]
}

The route is setup as [direct response](https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/route/route_components.proto#envoy-api-field-route-route-direct-response) with502response code which means if no other routes match the Envoy proxy will directly return a502HTTP status code.

- **PassthroughCluster**

The PassthroughCluster is a virtual cluster created in the Envoy configuration whenglobal.outboundTrafficPolicy.modeis set toALLOW_ANY. In this mode, all traffic to any external service external is allowed. To implement this, the default virtual outbound listener at0.0.0.0:15001which usesSO_ORIGINAL_DST, is setup as a TCP Proxy with the PassthroughCluster as the static cluster. The configuration for the PassthroughCluster looks like this:

{
"name": "PassthroughCluster",
"type": "ORIGINAL_DST",
"connectTimeout": "10s",
"lbPolicy": "ORIGINAL_DST_LB",
"circuitBreakers": {
"thresholds": [
{
"maxConnections": 102400,
"maxRetries": 1024
}
]
}
}

This cluster uses the [original destination load balancing](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/service_discovery#original-destination) policy which configures Envoy to send the traffic to the original destination i.e. passthrough.

Similar to the BlackHoleCluster, for every port/protocol based listener the virtual route configuration is augmented to add the PassthroughCluster as the default route:

{
"name": "allow_any",
"domains": [
"*"
],
"routes": [
{
"match": {
"prefix": "/"
},
"route": {
"cluster": "PassthroughCluster"
}
}
]
}

Prior to Istio 1.3, there were no metrics reported or if metrics were reported there were no explicit labels set when traffic hit these clusters, resulting in lack of visibility in traffic flowing through the mesh.

<https://istio.io/latest/blog/2019/monitoring-external-service-traffic>
