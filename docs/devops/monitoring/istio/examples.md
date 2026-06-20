---
slug: /devops/monitoring/istio/examples
title: Istio VirtualService Examples
description: Explore practical examples of Istio VirtualService configurations for routing traffic in microservices.
created: 2023-03-05
updated: 2023-03-07
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
name: productpage
spec:
hosts:

- productpage
http:
- route:
- destination:
host: productpage
subset: v1

---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
name: reviews
spec:
hosts:

- reviews
http:
- route:
- destination:
host: reviews
subset: v1

---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
name: ratings
spec:
hosts:

- ratings
http:
- route:
- destination:
host: ratings
subset: v1

---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
name: details
spec:
hosts:

- details
http:
- route:
- destination:
host: details
subset: v1

---
