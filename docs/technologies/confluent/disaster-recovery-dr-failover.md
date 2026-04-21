# Disaster Recovery / DR / Failover

## DR Failover

### Disaster Recovery requirements for Kafka clients

When implementing a disaster recovery (“DR”) plan to failover from a primary cluster to a DR cluster, there are several aspects you must design into your Kafka clients, so that they can failover smoothly:

- Clients must bootstrap to the DR cluster once a failover is triggered
- Consumers must be able to tolerate a small number of duplicate messages (“idempotency”)
- Consumers and producers must be tolerant of an RPO (“Recovery-Point Objective”)

### Setting up a Disaster Recovery cluster

For the Disaster Recovery (DR) cluster to be ready to use when disaster strikes, it will need to have an up-to-date copy of the primary cluster’s topic data, consumer group offsets, and ACLs:

- The DR cluster needs up-to-date topic data so that consumers can process messages that they haven’t yet consumed. Consumers that are lagging can continue to process topic data while missing as few messages as possible. Any future consumers you create can process historical data without missing any data that was produced before the disaster. This helps you achieve a low Recovery Point Objective (RPO) when a disaster happens.
- The DR cluster needs up-to-date consumer group offsets so that when the consumers switch over to the DR cluster, they can continue processing messages from the point where they left off. This minimizes the number of duplicate messages the consumers read, which helps you minimize application downtime. This helps you achieve a low Recovery Time Objective (RTO).
- The DR cluster needs up-to-date ACLs so that the producers and consumers can already be authorized to connect to it when they switch over. Having these ACLs already set and up-to-date also helps you achieve a low RTO.

[Cluster Linking for Failover and Disaster Recovery on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/multi-cloud/cluster-linking/dr-failover.html)

### Disaster Recovery in 60 Seconds: A POC for Seamless Client Failover on Confluent Cloud

**Confluent Cloud Gateway** serves as the primary traffic control layer, automatically redirecting all Kafka client traffic to the passive cluster when the active cluster becomes unavailable. This failover applies whether the outage affects a single cluster or an entire cloud service provider (CSP) region, ensuring continuity without requiring client-side changes.

The gateway needs to be very resilient to broker, cluster, or CSP region outages. When your active cluster fails, this setup still requires manual action: You must trigger a failover in the gateway by closing the in-flight connections and switching to passive mode. That will prompt Kafka clients that use the active cluster as an endpoint to re-bootstrap the connection and resume their jobs, but now they’ll produce messages to or consume messages from the passive cluster.

[Building Kafka Client Failover: A 60-Second disaster recovery POC with Confluent Cloud Gateway](https://www.confluent.io/blog/kafka-client-failover-poc-confluent-cloud-gateway/)

## Confluent Cloud Gateway

Confluent Cloud Gateway (Confluent Gateway) is a cloud-native Kafka proxy solution designed to simplify client connectivity, secure access, and cluster management across distributed Kafka environments. It provides a stable, protocol-aware entry point for Kafka clients—abstracting away complex broker lists, inconsistent security settings, and the operational overhead of managing direct client-to-cluster connections.

When deployed between clients and Kafka clusters, Confluent Gateway acts as an intelligent routing layer. As a self-managed solution, it gives you full control over deployment, configuration, and operations, while integrating seamlessly with your existing streaming infrastructure.

Confluent Gateway abstracts the complexity of Kafka connectivity, making modern, secure, and highly available Kafka operations possible for enterprise environments.

Confluent Gateway enables the following use cases:

- Future migrations of on-premises clients to Confluent Cloud without client changes.
- On-premises disaster recovery switchover from one unhealthy cluster to another healthy cluster without client changes, achieving a significant reduction in recovery time.
- Secure external partner access for a private cluster.
- Custom domains for your Kafka listeners.

You deploy Confluent Gateway using Confluent for Kubernetes (CFK).

### Why Cloud Gateway

Cloud Gateway is **protocol-aware** and rewrites Kafka metadata:

- It intercepts Kafka protocol messages and **rewrites broker addresses and metadata**, so clients only ever see **virtualized endpoints**.
- Clients connect to a **route**, and the Gateway forwards traffic to whatever **streaming domain (cluster)** you map that route to.

[Deploy and Manage Confluent Cloud Gateway \| Confluent Documentation](https://docs.confluent.io/cloud/current/cp-component/gateway/overview.html)

## DR Setup for Confluent Cloud Gateway

### 1. What Cloud Gateway actually gives you

From the docs/blog, Cloud Gateway is:

- A **self-managed, cloud-native Kafka protocol proxy** that sits between clients and Kafka clusters and routes traffic via **routes** and **streaming domains**.
- Used for **DR switchover** “from one unhealthy cluster to another healthy cluster without client changes.”
- Deployed by **you**, typically via **Confluent for Kubernetes (CFK)** or Docker; you own sizing, placement, and operations.
- Promoted as the “traffic control layer” for DR, simplifying client failover while Cluster Linking handles replication.

So Cloud Gateway can orchestrate **client failover between Kafka clusters**, but **its own HA is an infrastructure design problem**.

### 2. In-region high availability (intra-region AZ failures)

Treat Cloud Gateway as a **stateless, horizontally scalable proxy**:

1. **Run multiple Gateway instances**
    - Deploy **N replicas** (pods) across **all AZs** of your Kubernetes cluster (or equivalent in your container platform).
    - Use a CFK `Gateway` custom resource (or Helm/YAML) with a `Deployment`/`StatefulSet` that has replicas spread across zones.
2. **Front with a regional L4/L7 load balancer**
    - Create a cloud LB (AWS NLB/ALB, GCP TCP/HTTPS LB, Azure LB/App GW) in the same region.
    - Kafka clients bootstrap to `bootstrap.gw.your-domain.com` (LB DNS).
    - LB distributes connections across healthy Gateway pods. If one node/AZ fails, remaining pods continue serving traffic.
3. **Health checks & autoscaling**
    - Configure **readiness/liveness probes** on the Gateway containers so the LB only routes to healthy instances.
    - Use **HPA** (K8s Horizontal Pod Autoscaler) based on CPU/network to scale out on traffic spikes.
    - Overprovision for **N+1** capacity so losing an AZ doesn’t saturate the survivors.

This gives you HA against **node** and **AZ** outages in a single region. There’s nothing product-specific here; it’s standard HA proxy design applied to Cloud Gateway.

### 3. Cross-region availability (region outage)

To handle a **full region outage**, you must have **at least two independent Gateway deployments in different regions** and a way for clients to reach the surviving one.

A practical pattern:

#### 3.1. Deploy Gateway per region

- **Region A**:

    - K8s/CFK cluster, multiple Gateway replicas, regional LB: `gw-a.your-domain.com`
    - Routes/streaming domains configured for the “active” Kafka cluster (and DR target if using Cluster Linking).
- **Region B (DR)**:

    - Same stack (infra-as-code / GitOps for parity): Gateway replicas, regional LB: `gw-b.your-domain.com`.
    - Initially idle or used for lower-priority traffic. Configured to point to the DR Kafka cluster (mirror/standby).

Cloud Gateway config (routes/streaming domains) is **replicated declaratively** (Git, CFK) so both regions can serve the same logical entrypoints.

#### 3.2. Global routing / DNS failover

Give clients a **single global hostname** and back it with region-aware routing:

- Create `kafka-gw.your-domain.com` as:
    - A **Route 53 / Cloud DNS / Traffic Manager** record with:
        - **Health checks** on the regional LBs (`gw-a`, `gw-b`)
        - **Failover or latency-based routing**:
            - Normal: send traffic to Region A (`gw-a`).
            - On Region A failure: health check fails → DNS starts returning Region B (`gw-b`) only.

From the client’s POV:

- `bootstrap.servers=kafka-gw.your-domain.com:9092` never changes.
- When Region A dies, DNS moves them to Region B’s Gateway. New connections bootstrap there and are routed to the DR Kafka cluster.

You can also explicitly list both regional endpoints in `bootstrap.servers` (e.g., `gw-a,gw-b`) but that can complicate routing semantics; DNS-level failover tends to be simpler.

### 4. Coordinating Gateway failover with Kafka DR

Gateway HA only ensures **reachability**. For a real DR story you still need:

1. **Server-side DR with Cluster Linking**
    - Use **Cluster Linking** between your primary and DR Confluent Cloud clusters for low-latency async replication.
2. **Failover orchestration (RTO control)** - When Region A is down / primary cluster unhealthy, your DR runbook should:
    - Promote mirror topics on DR cluster to **read/write** as part of the failover.
    - Update the **streaming domain mapping** in the surviving region’s Gateway (or both) to point routes at the DR cluster instead of the primary.
    - Optionally automate this with scripts or an operator, similar to the blog’s POC idea of wrapping Gateway failover and Cluster Linking changes in a single operation.

Once that’s done, DNS/global routing sends clients to a **healthy Gateway region**, and that Gateway points to a **writable DR Kafka cluster**.

### 5. Summary design

To make Confluent Cloud Gateway highly available and region-resilient:

- **In a region**: run multiple Gateway instances across AZs behind a regional LB with health checks and autoscaling.
- **Across regions**: deploy identical Gateway stacks in at least two regions, then:
    - Use **global DNS / traffic manager** with health checks for regional failover.
    - Coordinate **Gateway route updates + Cluster Linking promotion** as part of your DR automation.

## Multi Region Confluent Cloud

**Confluent Cloud does not offer a single “stretch” / multi-region Kafka cluster** the way **Multi-Region Clusters (MRC)** work on **Confluent Platform**. MRC is explicitly a **Platform-only feature and not available on Confluent Cloud**.

On Confluent Cloud you get instead:

- **Multi-zone resilience within a region** (for Standard/Enterprise/Dedicated multi-zone clusters).
- **Multi-region architectures** by running **separate clusters in different regions** and using **Cluster Linking** for geo-replication, migration, and DR.

So for multi-region you’d provision one cluster per region and design HA/DR or active-active using **Cluster Linking**, not a single logical multi-region cluster.
