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

https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf

https://en.wikipedia.org/wiki/Web_application_firewall

https://developers.cloudflare.com/firewall/cf-firewall-rules/actions

## DDOS Blackhole routing

DDoS blackhole routing/filtering (sometimes called blackholing), is a countermeasure to mitigate a [DDoS attack](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/) in which network traffic is routed into a "black hole," and is lost. When blackhole filtering is implemented without specific restriction criteria, both legitimate and malicious network traffic is routed to a null route or black hole and dropped from the network. When using protocols that are connectionless such as [UDP](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/), no notification of the dropped data will be returned to the source. With connection oriented protocols like [TCP](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/), which require a handshake to connect with the target system, a notification will be returned if the data is dropped.

https://www.freecodecamp.org/news/protect-against-ddos-attacks

## Intrusion Detection System

Intrusion detection is the process of monitoring your network traffic and analyzing it for signs of possible intrusions, such as exploit attempts and incidents that may be imminent threats to your network. For its part, intrusion prevention is the process of performing intrusion detection and then stopping the detected incidents, typically done by dropping packets or terminating sessions. These security measures are available as intrusion detection systems (IDS) and intrusion prevention systems (IPS), which are part of [network security](https://www.juniper.net/us/en/research-topics/what-is-network-security.html) measures taken to detect and stop potential incidents and are included functionality within [next-generation firewalls (NGFW)](https://www.juniper.net/us/en/solutions/next-gen-firewall.html).

[What is IDS and IPS? | Juniper Networks US](https://www.juniper.net/us/en/research-topics/what-is-ids-ips.html)

### OSSEC

**OSSEC (Open Source HIDS SECurity)** is a [free](https://en.wikipedia.org/wiki/Free_software "Free software"), [open-source](https://en.wikipedia.org/wiki/Open-source_software "Open-source software") [host-based intrusion detection system](https://en.wikipedia.org/wiki/Host-based_intrusion_detection_system) (HIDS). It performs [log analysis](https://en.wikipedia.org/wiki/Log_analysis "Log analysis"), integrity checking, [Windows registry](https://en.wikipedia.org/wiki/Windows_registry "Windows registry") monitoring, [rootkit](https://en.wikipedia.org/wiki/Rootkit "Rootkit") detection, time-based alerting, and active response. It provides intrusion detection for most operating systems, including [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD "OpenBSD"), [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD"), [OS X](https://en.wikipedia.org/wiki/OS_X "OS X"), [Solaris](https://en.wikipedia.org/wiki/Solaris_(operating_system) "Solaris (operating system)") and [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows"). OSSEC has a centralized, cross-platform architecture allowing multiple systems to be easily monitored and managed. OSSEC has a log analysis engine that is able to correlate and analyze logs from multiple devices and formats.

[OSSEC - Wikipedia](https://en.wikipedia.org/wiki/OSSEC)

### Wazuh

Wazuh is a free and open source security platform that unifies XDR and SIEM capabilities. It protects workloads across on-premises, virtualized, containerized, and cloud-based environments.

[Wazuh - Open Source XDR. Open Source SIEM.](https://wazuh.com/)

[Getting started with Wazuh · Wazuh documentation](https://documentation.wazuh.com/current/getting-started/index.html)

### Suricata

Suricata is a high performance, open source network analysis and threat detection software used by most private and public organizations, and embedded by major vendors to protect their assets.

[Home - Suricata](https://suricata.io/)

## Palo Alto

### VM Series - Virtual Machine

VM-Series is the virtualized form factor of the Palo Alto Networks next-generation firewall. To meet the growing need for inline security across diverse cloud and virtualization use cases, you can deploy the VM-Series firewall on a wide range of private and public cloud computing environments such as VMware, Cisco ACI and ENCS, KVM, OpenStack, Amazon Web Services, Microsoft public and private cloud, OCI, and Google Cloud Platform.

[VM-Series](https://docs.paloaltonetworks.com/vm-series)

[Set Up a VM-Series Firewall on an ESXi Server](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/set-up-a-vm-series-firewall-on-an-esxi-server)

[Perform Initial Configuration on the VM-Series Firewall](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/set-up-the-vm-series-firewall-on-hyper-v/install-the-vm-series-firewall-on-hyper-v/perform-initial-configuration-on-the-vm-series-firewall)

### CN Series Container Firewalls - Container

The Palo Alto Networks CN-Series containerized firewall is the best-in-class next-generation firewall purpose built to secure the Kubernetes environments against modern application attacks and data exfiltration. The CN-Series firewall enables network security teams to gain full application (Layer-7) visibility into Kubernetes environments, dynamically scale network security without compromising DevOps agility, and align with the demands of modern DevOps teams to easily manage CN-Series.

CN-Series firewalls can be easily deployed using DevOps friendly tools including Helm charts and Terraform templates. CN-Series Firewalls can be managed from Panorama—the same management console as all Palo Alto Networks firewalls—giving network security teams a single pane of glass to manage their organizations’ overall network security posture.  It is recommended to deploy CN-Series firewall using Helm Charts for a seamless deployment experience.

[CN-Series](https://docs.paloaltonetworks.com/cn-series)
