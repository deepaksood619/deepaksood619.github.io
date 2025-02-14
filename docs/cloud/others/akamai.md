# Akamai

### Offload

In Akamai, offload is ==the percentage of requests that are served from edge servers without needing to reach the origin server==. It's a metric that helps improve user experience and reduce costs.

#### How it works

- Offloading content to edge servers makes it closer to the end user, which speeds up delivery.
- Offloading content reduces the load on the origin server.
- Offloading content can minimize data egress costs.

#### How to measure offload

- The offload metric is calculated as (edge-origin)/edge x 100.
- You can view offload numbers in the Control Center under COMMON SERVICES > Traffic reports.

#### How to increase offload

- Enable caching for as much content as possible.
- Choose a long enough time to live (TTL) for content so that end users don't receive stale content.
