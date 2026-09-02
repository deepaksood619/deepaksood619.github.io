---
slug: /confluent-cloud-client-quotas
title: Confluent Cloud Client Quotas
description: Assign per-service-account ingress/egress throughput quotas on Confluent Cloud Kafka clusters.
created: 2026-09-02
updated: 2026-09-02
---

Confluent Cloud client quotas let you assign individual ingress/egress throughput limits to different service accounts, so each application or workload gets independently controlled throughput on a shared cluster.

## Key Points

- A quota applies to a service account **principal**, not to an individual API key — use separate service accounts for workloads that need separate quota controls.
- Quotas control **ingress** (produce) and **egress** (consume) byte rates independently per principal.
- Client quotas require an **Enterprise, Freight, or Dedicated** Kafka cluster; **Basic and Standard** clusters do not support them.
- Useful for multi-tenant clusters where multiple applications/teams share one cluster and need isolated throughput guarantees.

## Creating Quotas via CLI

Create a quota for one service account:

```bash
confluent kafka quota create app-a-quota \
  --cluster lkc-12345 \
  --ingress 1000000 \
  --egress 2000000 \
  --principals sa-app-a
```

Create another quota for a different service account:

```bash
confluent kafka quota create app-b-quota \
  --cluster lkc-12345 \
  --ingress 5000000 \
  --egress 5000000 \
  --principals sa-app-b
```

## Links

- [Client Quotas Overview - Confluent Cloud](https://docs.confluent.io/cloud/current/clusters/client-quotas.html)
- [Cluster Types](technologies/confluent/cloud/confluent-cluster-types.md)
- [Client Throughput Optimization](technologies/confluent/cloud/confluent-cloud-client-throughput-optimization.md)
