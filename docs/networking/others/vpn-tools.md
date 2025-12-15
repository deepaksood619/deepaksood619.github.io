# VPN Tools

## Openvpn

OpenVPN is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) software application that implements [virtual private network](https://en.wikipedia.org/wiki/Virtual_private_network)(VPN) techniques to create secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities. It uses a custom security protocolthat utilizes [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) for key exchange. It is capable of traversing [network address translators](https://en.wikipedia.org/wiki/Network_address_translator)(NATs) and [firewalls](https://en.wikipedia.org/wiki/Firewall_(computing))

OpenVPN allows [peers](https://en.wikipedia.org/wiki/Peer-to-peer) to [authenticate](https://en.wikipedia.org/wiki/Authentication) each other using [pre-shared secret keys](https://en.wikipedia.org/wiki/Pre-shared_key), [certificates](https://en.wikipedia.org/wiki/Public_key_certificate) or [username](https://en.wikipedia.org/wiki/User_(computing))/[password](https://en.wikipedia.org/wiki/Password). When used in a multiclient-server configuration, it allows the server to release an [authentication certificate](https://en.wikipedia.org/wiki/Public_key_certificate) for every client, using [signatures](https://en.wikipedia.org/wiki/Digital_signature) and [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority). It uses the [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) encryption [library](https://en.wikipedia.org/wiki/Library_(computing)) extensively, as well as the [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) protocol, and contains many security and control features.

https://en.wikipedia.org/wiki/OpenVPN

https://openvpn.net

https://medium.com/swlh/creating-a-vpn-with-2-factor-authentication-using-openvpn-and-docker-9569e609151a

## WireGuard

WireGuard is a novel VPN that runs inside the Linux Kernel and utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. It runs over UDP.

https://www.wireguard.com

https://www.freecodecamp.org/news/how-to-set-up-a-vpn-server-at-home

## NGrok

ngrok is a reverse proxy that creates a secure tunnel from a public endpoint to a locally running web service. ngrok captures and analyzes all traffic over the tunnel for later inspection and replay.

Unified Ingress Platform for developers

ngrok combines your reverse proxy, firewall, API gateway, and global load balancing to deliver apps and APIs.

https://ngrok.com

https://github.com/inconshreveable/ngrok

## Secure access service edge (SASE) model

https://pages.awscloud.com/AWSMP-SEC-NetworkSecurity-Edge-SASE-en.html

## Cloudflare Zero Trust

Cloudflare Zero Trust replaces legacy security perimeters with our global network, making the Internet faster and safer for teams around the world.

### Zero Trust access for all of your applications

- Authenticate users on our global network
- Onboard third-party users seamlessly
- Log every event and request

### A Secure Web Gateway to protect users and devices

- Enforce your company’s Acceptable Use Policy (AUP)
- Block risky sites with custom blocklists and built-in threat intel
- Enhance visibility and protection into SaaS applications

### A fast and reliable solution for remote browsing

- Execute all browser code in the cloud
- Mitigate the impact of attacks
- Seamless, lightning-fast end user experience

### A Cloud Access Security Broker to safeguard data in the cloud

- Protect users and sensitive data at rest in SaaS applications
- Detect insider threats and unsanctioned application usage, or Shadow IT
- Ensure best practices to prevent data leaks and compliance violations

### A Data Loss Prevention (DLP) solution to safeguard data in transit

- Detect sensitive data as it moves to and from SaaS applications
- Predefined DLP Profiles to quickly get started
- Log or block DLP matches

[Cloudflare Zero Trust · Cloudflare Zero Trust docs](https://developers.cloudflare.com/cloudflare-one/)

[WARP | 1.1.1.1 - The free app that makes your Internet faster.](https://1.1.1.1/)

## Pritunl

Enterprise Distributed OpenVPN, IPsec and WireGuard Server

Virtualize your private networks across datacenters and provide simple remote access in minutes

Create a cloud vpn with complex site-to-site links, gateway links and provide local network access to remote users. Protect your network traffic and remote users connecting over public connections with secure encryption. All from a simple web interface

### The Most Secure VPN Server

Pritunl provides innovative security features not available from any other provider. Including TPM and Apple Secure Enclave device authentication, a dynamic firewall, SELinux policies, dual web server design and self shutdown notification system

- [GitHub - pritunl/pritunl: Enterprise VPN server](https://github.com/pritunl/pritunl)
- [Pritunl - Open Source Enterprise Distributed OpenVPN, IPsec and WireGuard Server](https://pritunl.com/)
- [Pritunl, a free, self-hosted, open source VPN tunnel with a simple web ui and cross platform clients - YouTube](https://www.youtube.com/watch?v=-okuLsMqnWo)
- [Create your own VPN using Pritunl on Linux VPS 🔥 - YouTube](https://www.youtube.com/watch?v=8Wq7Re3LG5k)

## VPS

A VPS (Virtual Private Server) is a **virtual machine with dedicated resources on a physical server**, offering more control and security than shared hosting but at a lower cost than a dedicated server. It's a popular choice for growing websites and applications that require more power, flexibility, and root access than a typical shared hosting plan provides.

- [What is VPS? - Virtual Private Server Explained - AWS](https://aws.amazon.com/what-is/vps/)
- [What Is a Virtual Private Server (VPS)? \| Google Cloud](https://cloud.google.com/learn/what-is-a-virtual-private-server)
- [The Best Value Cloud VPS Hosting on Earth \| Contabo](https://contabo.com/en/vps/)

## Teleport

DevOps teams use Teleport to access SSH and Windows servers, Kubernetes, databases, AWS Console, and web applications. Teleport prevents phishing by moving away from static credentials towards ephemeral certificates backed by biometrics and hardware identity, and stops attacker pivots with the Zero Trust design.

[Teleport: Identity-Native Infrastructure Access. Faster. More Secure.](https://goteleport.com/)

### Alternative - StrongDM

[StrongDM](https://strongdm.com/) is a Dynamic Access Management ([DAM](https://www.strongdm.com/dynamic-access-management-dam)) platform that extends Privileged Access Management ([PAM](https://www.strongdm.com/privileged-access-management)) to work across any environment on-premises and in the cloud. It is designed to make access [least-privilege](https://www.strongdm.com/blog/principle-of-least-privilege) by default with role-based, attribute-based, and just-in-time access controls. Companies like Humana, SentinelOne, and more have adopted StrongDM to secure access management to all their critical infrastructure.

[Competitors & Alternatives to Teleport 2024 | StrongDM](https://www.strongdm.com/blog/alternatives-to-gravitational-teleport)

## Sshuttle

[GitHub - sshuttle/sshuttle: Transparent proxy server that works as a poor man's VPN. Forwards over ssh. Doesn't require admin. Works with Linux and MacOS. Supports DNS tunneling.](https://github.com/sshuttle/sshuttle)

## Others

- TwinGate - [the END of VPNs?! - YouTube](https://www.youtube.com/watch?v=IYmXPF3XUwo)
	- [Home \| Docs \| Twingate](https://www.twingate.com/docs/)
	- Client
	- Connector
	- Controller
	- Relay
- [AWS Client VPN Download \| Amazon Web Services](https://aws.amazon.com/vpn/client-vpn-download/)
- [Tailscale · Best VPN Service for Secure Networks](https://tailscale.com/)
