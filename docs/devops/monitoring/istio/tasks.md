# Tasks

## Traffic Management

Istio's traffic management model relies on theEnvoyproxies that are deployed along with your services. All traffic that your mesh services send and receive (data planetraffic) is proxied through Envoy, making it easy to direct and control traffic around your mesh without making any changes to your services.

<https://istio.io/docs/concepts/traffic-management>

- Request Routing
- Fault Injection
- Traffic Shifting
- TCP Traffic Shifting
- Request Timeouts
- Circuit Breaker
- Mirroring (Shadowing / Shadow rollout / dark launching)
- [Ingress](https://istio.io/docs/tasks/traffic-management/ingress/)
  - [Ingress Gateways](https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/)
  - [Secure Gateways (File Mount)](https://istio.io/docs/tasks/traffic-management/ingress/secure-ingress-mount/)
  - [Secure Gateways (SDS)](https://istio.io/docs/tasks/traffic-management/ingress/secure-ingress-sds/)
  - [Ingress Gateway without TLS Termination](https://istio.io/docs/tasks/traffic-management/ingress/ingress-sni-passthrough/)
  - [Kubernetes Ingress with Cert-Manager](https://istio.io/docs/tasks/traffic-management/ingress/ingress-certmgr/)
- [Egress](https://istio.io/docs/tasks/traffic-management/egress/)
  - [Accessing External Services](https://istio.io/docs/tasks/traffic-management/egress/egress-control/)
  - [Egress TLS Origination](https://istio.io/docs/tasks/traffic-management/egress/egress-tls-origination/)
  - [Egress Gateways](https://istio.io/docs/tasks/traffic-management/egress/egress-gateway/)
  - [Egress Gateways with TLS Origination](https://istio.io/docs/tasks/traffic-management/egress/egress-gateway-tls-origination/)
  - [Egress using Wildcard Hosts](https://istio.io/docs/tasks/traffic-management/egress/wildcard-egress-hosts/)
  - [Monitoring and Policies for TLS Egress](https://istio.io/docs/tasks/traffic-management/egress/egress_sni_monitoring_and_policies/)
  - [Kubernetes Services for Egress Traffic](https://istio.io/docs/tasks/traffic-management/egress/egress-kubernetes-services/)
  - [Using an External HTTPS Proxy](https://istio.io/docs/tasks/traffic-management/egress/http-proxy/)

## Security

- [Authentication](https://istio.io/docs/tasks/security/authentication/)
  - [Automatic mutual TLS](https://istio.io/docs/tasks/security/authentication/auto-mtls/)
  - [Authentication Policy](https://istio.io/docs/tasks/security/authentication/authn-policy/)
  - [Mutual TLS Deep-Dive](https://istio.io/docs/tasks/security/authentication/mutual-tls/)
  - [Mutual TLS over HTTPS](https://istio.io/docs/tasks/security/authentication/https-overlay/)
  - [Mutual TLS Migration](https://istio.io/docs/tasks/security/authentication/mtls-migration/)
- [Citadel Configuration](https://istio.io/docs/tasks/security/citadel-config/)
  - [Plugging in External CA Key and Certificate](https://istio.io/docs/tasks/security/citadel-config/plugin-ca-cert/)
  - [Citadel Health Checking](https://istio.io/docs/tasks/security/citadel-config/health-check/)
  - [Provisioning Identity through SDS](https://istio.io/docs/tasks/security/citadel-config/auth-sds/)
  - [Configure Citadel Service Account Secret Generation](https://istio.io/docs/tasks/security/citadel-config/ca-namespace-targeting/)
- [Authorization](https://istio.io/docs/tasks/security/authorization/)
  - [Authorization for HTTP traffic](https://istio.io/docs/tasks/security/authorization/authz-http/)
  - [Authorization for TCP traffic](https://istio.io/docs/tasks/security/authorization/authz-tcp/)
  - [Authorization for groups and list claims](https://istio.io/docs/tasks/security/authorization/rbac-groups/)
  - [Authorization Policy Trust Domain Migration](https://istio.io/docs/tasks/security/authorization/authz-td-migration/)
- [Istio DNS Certificate Management](https://istio.io/docs/tasks/security/dns-cert/)
- [Istio Webhook Management [Experimental]](https://istio.io/docs/tasks/security/webhook/)

## Policies

- [Enabling Policy Enforcement](https://istio.io/docs/tasks/policy-enforcement/enabling-policy/)
- [Enabling Rate Limits](https://istio.io/docs/tasks/policy-enforcement/rate-limiting/)
- [Control Headers and Routing](https://istio.io/docs/tasks/policy-enforcement/control-headers/)
- [Denials and White/Black Listing](https://istio.io/docs/tasks/policy-enforcement/denial-and-list/)

## Observability

- [Metrics](https://istio.io/docs/tasks/observability/metrics/)
  - [Collecting Metrics](https://istio.io/docs/tasks/observability/metrics/collecting-metrics/)
  - [Collecting Metrics for TCP services](https://istio.io/docs/tasks/observability/metrics/tcp-metrics/)
  - [Querying Metrics from Prometheus](https://istio.io/docs/tasks/observability/metrics/querying-metrics/)
  - [Visualizing Metrics with Grafana](https://istio.io/docs/tasks/observability/metrics/using-istio-dashboard/)
- [Logs](https://istio.io/docs/tasks/observability/logs/)
  - [Collecting Logs](https://istio.io/docs/tasks/observability/logs/collecting-logs/)
  - [Getting Envoy's Access Logs](https://istio.io/docs/tasks/observability/logs/access-log/)
  - [Logging with Fluentd](https://istio.io/docs/tasks/observability/logs/fluentd/)
- [Distributed Tracing](https://istio.io/docs/tasks/observability/distributed-tracing/)
  - [Overview](https://istio.io/docs/tasks/observability/distributed-tracing/overview/)
  - [Jaeger](https://istio.io/docs/tasks/observability/distributed-tracing/jaeger/)
  - [Zipkin](https://istio.io/docs/tasks/observability/distributed-tracing/zipkin/)
  - [LightStep](https://istio.io/docs/tasks/observability/distributed-tracing/lightstep/)
- [Visualizing Your Mesh](https://istio.io/docs/tasks/observability/kiali/)
- [Remotely Accessing Telemetry Addons](https://istio.io/docs/tasks/observability/gateways/)
