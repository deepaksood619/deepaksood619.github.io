---
slug: /devops/kubernetes/services-loadbalancing-and-networking/others
title: Kubernetes DNS for Services and Pods
description: Learn how Kubernetes DNS manages name resolution for services and pods in your cluster.
created: 2023-03-05
last_update: 2023-12-05
---
## DNS for services and pods

Kubernetes DNS schedules a DNS Pod and Service on the cluster, and configures the kubelets to tell individual containers to use the DNS Service's IP to resolve DNS names.

https://kubernetes.io/docs/concepts/services-networking/dns-pod-service
