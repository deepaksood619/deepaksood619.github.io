# Linkerd

## Ultralight service mesh for Kubernetes

For example, when a request is made to a service through Linkerd, a very simplified timeline of events is as follows:

1. Linkerd applies dynamic routing rules to determine which service the requester intended. Should the request be routed to a service in production or in staging? To a service in a local datacenter or one in the cloud? To the most recent version of a service that's being tested or to an older one that's been vetted in production? All of these routing rules are dynamically configurable, and can be applied both globally and for arbitrary slices of traffic.

2. Having found the correct destination, Linkerd retrieves the corresponding pool of instances from the relevant service discovery endpoint, of which there may be several. If this information diverges from what Linkerd has observed in practice, Linkerd makes a decision about which source of information to trust.

3. Linkerd chooses the instance most likely to return a fast response based on a variety of factors, including its observed latency for recent requests.

4. Linkerd attempts to send the request to the instance, recording the latency and response type of the result.

5. If the instance is down, unresponsive, or fails to process the request, Linkerd retries the request on another instance (but only if it knows the request is idempotent).

6. If an instance is consistently returning errors, Linkerd evicts it from the load balancing pool, to be periodically retried later (for example, an instance may be undergoing a transient failure).

7. If the deadline for the request has elapsed, Linkerd proactively fails the request rather than adding load with further retries.

8. Linkerd captures every aspect of the above behavior in the form of metrics and distributed tracing, which are emitted to a centralized metrics system.

## References

<https://linkerd.io>

<https://github.com/linkerd/linkerd2>

<https://linkerd.io/2020/12/03/why-linkerd-doesnt-use-envoy>
