---
slug: /devops/kubernetes/workloads/others
title: Understanding Pod Disruption Budgets
description: Learn how PodDisruptionBudget (PDB) helps maintain application availability by controlling pod disruptions in Kubernetes.
created: 2023-03-05
last_update: 2023-12-05
---
## Disruptions

An Application Owner can create a **PodDisruptionBudget** object (PDB) for each application. A PDB limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions. For example, a quorum-based application would like to ensure that the number of replicas running is never brought below the number needed for a quorum. A web front end might want to ensure that the number of replicas serving load never falls below a certain percentage of the total.

https://kubernetes.io/docs/concepts/workloads/pods/disruptions
