# Operations

## Load Balancer

Make sure your load balancer configuration forwards to all your worker nodes. This will ensure that the traffic gets forwarded even if some nodes are down.

## To Add a New Port to the IngressGateway

- Add the port to an existingGatewayor configure a new. If it's a TCP service also add the port to theVirtualService, not needed for HTTP since it matches on layer 7 (domain name, etc.).
- Add the port to theingressgateway service. If you are using servicetype: LoadBalancer, you are done.
- Otherwise, open the port in the load balancer and forward traffic to all worker nodes.

## To Add Certificates to an SSL Service

- Add the TLS secrets to the cluster.
- Mount the secret volumes in theingressgateway.
- Configure theGatewayto use the newly created secrets.

<https://blog.jayway.com/2018/10/22/understanding-istio-ingress-gateway-in-kubernetes>

## Deployment

- Architecture
- Deployment Models
- Performance and Scalability
- Pods and Services

## Deployment Models

1. single or multiple cluster

2. single or multiple network

3. single or multiple control plane

4. single or multiple mesh

All combinations are possible, although some are more common than others and some are clearly not very interesting (for example, multiple mesh in a single cluster).

## Cluster models

- Single cluster
- Multiple cluster

## Network models

- Single network
- Multiple networks

## Control plane models

- One cluster per region (lowest availability)
- Multiple clusters per region
- One cluster per zone
- Multiple clusters per zone
- Each cluster (highest availability)

## Identity and trust models

- Trust within a mesh
- Trust between meshes

## Mesh models

- Single mesh
- Multiple meshes

## Tenancy models

- Namespace tenancy
- Cluster tenancy

<https://istio.io/docs/ops/deployment/deployment-models>

## Integrations

- Prometheus
- cert-manager

[cert-manager](https://cert-manager.io/) is a tool that automates certificate management. This can be integrated with Istio gateways to manage TLS certificates.

<https://istio.io/docs/ops/integrations/certmanager>

- Grafana
  - [Mesh Dashboard](https://grafana.com/grafana/dashboards/7639) provides an overview of all services in the mesh.

Provides Global Summary view of the Mesh and shows HTTP/gRPC and TCP workloads in the Mesh.

- [Service Dashboard](https://grafana.com/grafana/dashboards/7636) provides a detailed breakdown of metrics for a service.

Provides metrics about requests and responses for each individual service within the mesh (HTTP/gRPC and TCP). This also provides metrics about client and service workloads for this service.

- [Workload Dashboard](https://grafana.com/grafana/dashboards/7630) provides a detailed breakdown of metrics for a workload.

Provides metrics about requests and responses for each individual workload within the mesh (HTTP/gRPC and TCP). This also provides metrics about inbound workloads and outbound services for this workload.

- [Performance Dashboard](https://grafana.com/grafana/dashboards/11829) monitors the resource usage of the mesh.
- [Control Plane Dashboard](https://grafana.com/grafana/dashboards/7645) monitors the health and performance of the control plane.

<https://istio.io/docs/ops/integrations/grafana>
