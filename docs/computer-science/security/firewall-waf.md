# Firewall WAF

## Web Application Firewall (WAF)

A WAF creates a shield between a web app and the Internet; this shield can help mitigate many common attacks.

A WAF or Web Application [Firewall](https://www.cloudflare.com/learning/security/what-is-a-firewall/) helps protect web applications by filtering and monitoring [HTTP](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) traffic between a web application and the Internet.It typically protects web applications from attacks such as [cross-site forgery](https://www.cloudflare.com/learning/security/threats/cross-site-request-forgery/), [cross-site-scripting (XSS)](https://www.cloudflare.com/learning/security/threats/cross-site-scripting/), file inclusion, and [SQL injection](https://www.cloudflare.com/learning/security/threats/sql-injection/), among others. A WAF is a protocol [layer 7](https://www.cloudflare.com/learning/ddos/what-is-layer-7/) defense (in the [OSI model](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)).

By deploying a WAF in front of a web application, a shield is placed between the web application and the Internet. While a proxy server protects a client machine's identity by using an intermediary, a WAF is a type of [reverse-proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/), protecting the server from exposure by having clients pass through the WAF before reaching the server.
A WAF operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic.The value of a WAF comes in part from the speed and ease with which policy modification can be implemented, allowing for faster response to varying attack vectors; during a [DDoS attack](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack), rate limiting can be quickly implemented by modifying WAF policies.

## Blacklist and Whitelist WAFs

A WAF that operates based on a blacklist (negative security model) protects against known attacks. Think of a blacklist WAF as a club bouncer instructed to deny admittance to guests who don't meet the dress code. Conversely, a WAF based on a whitelist (positive security model) only admits traffic that has been pre-approved. This is like the bouncer at an exclusive party, he or she only admits people who are on the list. Both blacklists and whitelists have their advantages and drawbacks, which is why many WAFs offer a hybrid security model, which implements both.

## Implementation Techniques

### Network-based WAF

A network-based WAF is generally hardware-based. Since they are installed locally they minimize latency, but network-based WAFs are the most expensive option and also require the storage and maintenance of physical equipment.

### Host-based WAF

A host-based WAF may be fully integrated into an application's software. This solution is less expensive than a network-based WAF and offers more customizability. The downside of a host-based WAF is the consumption of local server resources, implementation complexity, and maintenance costs. These components typically require engineering time, and may be costly.

### Cloud-based WAF

[Cloud](https://www.cloudflare.com/learning/cloud/what-is-the-cloud/)-based WAFs offer an affordable option that is very easy to implement; they usually offer a turnkey installation that is as simple as a change in [DNS](https://www.cloudflare.com/learning/ddos/glossary/domain-name-system-dns/) to redirect traffic. Cloud-based WAFs also have a minimal upfront cost, as users pay monthly or annually for security as a service. Cloud-based WAFs can also offer a solution that is consistently updated to protect against the newest threats without any additional work or cost on the user's end. The drawback of a cloud-based WAF is that users hand over the responsibility to a third-party, therefore some features of the WAF may be a black box to them.

<https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf>

<https://en.wikipedia.org/wiki/Web_application_firewall>

<https://developers.cloudflare.com/firewall/cf-firewall-rules/actions>

## DDOS Blackhole routing

DDoS blackhole routing/filtering (sometimes called blackholing), is a countermeasure to mitigate a [DDoS attack](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/) in which network traffic is routed into a "black hole," and is lost. When blackhole filtering is implemented without specific restriction criteria, both legitimate and malicious network traffic is routed to a null route or black hole and dropped from the network. When using protocols that are connectionless such as [UDP](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/), no notification of the dropped data will be returned to the source. With connection oriented protocols like [TCP](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/), which require a handshake to connect with the target system, a notification will be returned if the data is dropped.

<https://www.freecodecamp.org/news/protect-against-ddos-attacks>
