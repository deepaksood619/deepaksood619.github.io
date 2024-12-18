# Proxy

The initial use case for the proxy is just load balancing: spread the incoming requests across the active set of pods. In addition to making the service IP highly available, this also enables splitting traffic across versions for canary testing and more generally for A/B testing. It is also the mechanism used for a progressive rollout of a new version.

As described thus far, the proxy operates at Layer 4 (L4), working at the level of TCP and IP. This is sufficient for basic services and works well with legacy applications that expect DNS, an IP address, and a port number. Services are at layer 7 (L7) typically use HTTPS requests, which provide more information and thus enable more sophisticated policies. Longer term, we expect L4 to be used for coarse-grained access control (to a cluster or a namespace within a cluster), and L7 to be used to implement the more complex policies required by modern enterprises and dynamic applications. These L7 policies can be managed using modern source control mechanisms that include explicit review and acceptance of source code changes (e.g. GitOps).

The proxy is also a great point for telemetry: it can measure service-level indicators (SLIs) for the service, such as request latency and throughput, without needing to know anything about the service (a hallmark of decoupling). It can also health check pods and remove them from duty, and its telemetry provides one basis for auto-scaling the service.

We discuss two different uses of proxies in the next two sections.

- The first kind manages the traffic among services within an application, which is sometimes called "East-West" traffic based on the typical architecture diagram with users on top (North) and services spread left to right (West to East).

- The second kind is a more traditional user-facing proxy, which manages traffic into the application (North-South) and provides user authentication, access control, various kinds of API management and mediation.

## Types of Proxy

### Transparent Proxy (gateway)

- Doesn't change the content
- Only looks at Layer3/4 (IP and Port only)
- One TCP Connection with packet switching

### HTTP Proxy

- Two TCP connections
- Looks through the content
- Changes the content
- Provides anonymity (optionally)
- Used in service mesh (Linkerd - upgrades protocol)

### Socks Proxy (Socks5 proxy server)

And one of the most different between the **socks proxy** and **HTTP proxy** is, socks proxy can use on lots of different application, HTTP proxy can ONLY be used to handle HTTP request, the socks proxies can be used to FTP, ICQ MSN, Outlook, TheBat, Skype..and so on, And the commonly used ports of the proxy server are，

- Ports of HTTP Proxy: 80/8080
- Ports ofSOCKS proxy: 1080

### DNS Proxy

- The DNS proxy relays DNS requests to the current public network DNS server, then DNS proxy server transfer the replies to the client device.
- Though the DNS proxy use Cache, The DNS proxy is tracking the public DNS requests to monitor the configiration if previous resolution fails.

### Forward Proxy

Forward proxy can be used by the client to [bypass firewall restrictions](https://www.linuxbabe.com/ubuntu/shadowsocks-libev-proxy-server-ubuntu-16-04-17-10) in order to visit websites that are blocked by school, government, company etc. If a website blocked an IP range from visiting the website, then a person in that IP range can use forward proxy to hide the real IP of the client so that person can visit the website and maybe leave some spam comments. However forward proxy might be detected by the website administrator. There are some paid proxy service that has numerous proxy systems around the world so that they can change your IP address every time your visit a new web page and this makes it harder for website administrators to detect.

**The object of the forwarding proxy is the Client, and the object of the reverse proxy server is the server**

### Reverse Proxy

In [computer networks](https://en.wikipedia.org/wiki/Computer_network), areverse proxyis a type of [proxy server](https://en.wikipedia.org/wiki/Proxy_server) that retrieves resources on behalf of a [client](https://en.wikipedia.org/wiki/Client_(computing)) from one or more [servers](https://en.wikipedia.org/wiki/Server_(computing)). These resources are then returned to the client, appearing as if they originated from the proxy server itself.Unlike a [forward proxy](https://en.wikipedia.org/wiki/Forward_proxy), which is an intermediary for its associated clients to contact any server, a reverse proxy is an intermediary for its associated servers to be contacted by any client. In other words, aproxyacts on behalf of the client(s), while areverse proxyacts on behalf of the server(s).

Quite often, popular web servers use reverse-proxying functionality, shielding application frameworks of weaker HTTP capabilities. In this context, "weaker" means limitations in ability to handle excessive load, and limitation in handling the entire variety of request formats that can adhere to HTTP(S) 1.x, HTTP(S) 2.x, or requests which may be hard to detect. A reverse proxy in such cases could transform HTTPS requests into HTTP requests, buffer incoming requests based on the load of the "shielded" server(s), handle cookies/session data, or transform one request into multiple requests and then synthesize the responses, among other possibilities.

#### Uses of reverse proxies

- Reverse proxies can hide the existence and characteristics of an [origin server](https://en.wikipedia.org/wiki/Origin_server) or servers.
- [Application firewall](https://en.wikipedia.org/wiki/Application_firewall) features can protect against common web-based attacks, like a [denial-of-service attack (DoS)](https://en.wikipedia.org/wiki/Denial-of-service_attack) or distributed denial-of-service attacks (DDoS). Without a reverse proxy, removing malware or initiating [takedowns](https://en.wikipedia.org/wiki/Notice_and_take_down), for example, can become difficult.
- In the case of [secure websites](https://en.wikipedia.org/wiki/Secure_website), a web server may not perform [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)[encryption](https://en.wikipedia.org/wiki/Encryption) itself, but instead offloads the task to a reverse proxy that may be equipped with [TLS acceleration](https://en.wikipedia.org/wiki/TLS_acceleration) hardware. (See [TLS termination proxy](https://en.wikipedia.org/wiki/TLS_termination_proxy).)
- A reverse proxy can [distribute the load](https://en.wikipedia.org/wiki/Load_balancing_(computing)) from incoming requests to several servers, with each server serving its own application area. In the case of reverse proxying in the neighbourhood of [web servers](https://en.wikipedia.org/wiki/Web_server), the reverse proxy may have to rewrite the [URL](https://en.wikipedia.org/wiki/URL) in each incoming request in order to match the relevant internal location of the requested resource.
- A reverse proxy can reduce load on its origin servers by [caching](https://en.wikipedia.org/wiki/Web_cache)[static content](https://en.wikipedia.org/wiki/Static_web_page), as well as [dynamic content](https://en.wikipedia.org/wiki/Dynamic_web_page)- synonym:[web acceleration](https://en.wikipedia.org/wiki/Web_accelerator). Proxy caches of this sort can often satisfy a considerable number of website requests, greatly reducing the load on the origin server(s).
- A reverse proxy can optimize content by [compressing](https://en.wikipedia.org/wiki/HTTP_compression) it in order to speed up loading times.
- In a technique named "spoon-feed"a dynamically generated page can be produced all at once and served to the reverse proxy, which can then return it to the client a little bit at a time. The program that generates the page need not remain open, thus releasing server resources during the possibly extended time the client requires to complete the transfer.
- Reverse proxies can operate wherever multiple web-servers must be accessible via a single public IP address. The web servers listen on different ports in the same machine, with the same local IP address or, possibly, on different machines and different local IP addresses altogether. The reverse proxy analyzes each incoming request and delivers it to the right server within the [local area network](https://en.wikipedia.org/wiki/Local_area_network).
- Reverse proxies can perform [A/B testing](https://en.wikipedia.org/wiki/A/B_testing) and [multivariate testing](https://en.wikipedia.org/wiki/Multivariate_testing_in_marketing) without placing JavaScript tags or code into pages.
- A reverse proxy can add basic HTTP access authentication to a web server that does not have any authentication.

https://en.wikipedia.org/wiki/Reverse_proxy

### Anonymous proxy

Anonymous proxies are a commonly used type of proxy. They never pass your IP address to the website you are browsing although they will identify themselves as a proxy in the request. This helps keep your browsing activity private.

When you don't want targeted ads following you around the internet or you don't want your location attached to your request, these are some standard proxies to use. This is usually enough to get around most targeting activities, but there is still a chance that your information might be revealed.

### High anonymity proxy

These proxies are the most secure type because they don't pass along your IP address and personal data and they don't identify themselves as a proxy when making requests. They also sporadically change the IP address they use for requests. That's what allows high anonymity proxies to give you the most privacy online.

The TOR browser uses this type of proxy. Since the IP address changes occasionally, that makes it extremely hard for servers to keep track of what traffic belongs to what client. If you don't want to be tracked, this is the best option.

### Distorting proxy

A distorting proxy works similarly to an anonymous proxy except it passes an IP that is purposely false. It identifies itself as a proxy and uses that false IP address in requests. This is great when you want to appear as if you were in specific location.

This is useful when you want to get around specific content restrictions. It's like you get to choose the IP address you want the proxy to use.

### Residential proxy

Residential proxies are proxies that use real IP addresses. That means they are the addresses of real computers. These are the best types of proxies to use because they look like regular clients to servers.

Any of the proxy types discussed so far can be a residential proxy. As long as the proxy's IP address is associated with a physical device, these types of proxies tend to be undetectable and they get around some of the geographic problems other proxy types have.

### Data center proxy

These are kind of the opposite of residential proxies. Data center proxies have computer generated IP addresses that aren't attached to a real device. It's like having a proxy in the cloud.

An advantage to this kind of proxy is their speed. Usually cloud service providers have incredible internet connections that give you speeds you couldn't get otherwise. Although they would all share similar IP addresses, one server could host hundreds of data center proxies.

### Public proxy

Of all the proxy types, these are the most insecure, unreliable proxies available. They can go down at any moment and many are set up by hackers to steal data. The only reason people still use them is because they are free.

While it isn't difficult to find lists of free public proxies, it is a challenge to find good ones. You never know who these proxies are hosted by and it's a huge gamble to send any of your sensitive information through one. Any number of users can be on a public proxy at any time and there's no one regulating who uses it.

### Private proxy

Private proxies have some ambiguity around what they are because they're defined by the provider offering the service. This could mean your proxy can only be used by one client at a time or that your proxy needs authentication before you can use it. These are like more reliable versions of public proxies.

A private proxy can be transparent or have high anonymity, similar to some of the others above like the residential or data center proxy. This proxy type has more to do with who can connect to it than how it handles your requests.

### Dedicated proxy

A dedicated proxy is like a specific type of private proxy. It just means that the proxy can't be shared by multiple clients at the same time. So only one client can connect and send requests.

This helps prevent the IP address of the proxy from getting banned by different websites and services. It's one of the ways that a proxy provider can control who has access to the proxy to make sure that it isn't being abused.

### Shared proxy

These are some of the cheapest proxies available and they work similar to shared servers. Clients pool together and split the cost of the proxy and they can all access it at the same time. Shared proxies have a more complex architecture because they handle a lot of requests at the same time.

Depending on how resources are allocated on the shared proxy, requests might be slower than over your own IP address. Because it's handling multiple requests from multiple users, the configurations of these types of proxies is more critical than the others.

### Rotating proxy

Rotating proxies work a little differently from the others. Every time a client connects to the proxy, a new IP address is created for it. So they never use the same IP address more than once.

Every time a client sends a request a new IP address is generated. This is how proxies like the TOR browser work to keep your anonymity. A rotating proxy provides a high level of security and privacy when combined with some of the other types.

### SSL proxy

These proxies follow the same protocol as HTTPS requests. The 'S' in HTTPS means SSL which means your web requests are secure between your client and the server you're trying to get to.

That means you get even more security because all of your requests through the proxy are encrypted. Most proxies should be using this by default, but there is still a chance you'll run into some that use HTTP.

https://www.freecodecamp.org/news/what-is-a-proxy-server-in-english-please

## Reverse Proxy vs Load Balancers

- A [reverse proxy](https://www.nginx.com/resources/glossary/reverse-proxy-server) accepts a request from a client, forwards it to a server that can fulfill it, and returns the server's response to the client.
- A [load balancer](https://www.nginx.com/resources/glossary/load-balancing) distributes incoming client requests among a group of servers, in each case returning the response from the selected server to the appropriate client.

## Forward Proxy vs Reverse Proxy

A forward proxy is a server that sits between user devices and the internet.

A forward proxy is commonly used for:

1. Protect clients
2. Avoid browsing restrictions
3. Block access to certain content

A reverse proxy is a server that accepts a request from the client, forwards the request to web servers, and returns the results to the client as if the proxy server had processed the request.

A reverse proxy is good for:

1. Protect servers
2. Load balancing
3. Cache static contents
4. Encrypt and decrypt SSL communications

![Forward proxy vs reverse proxy](../../media/Pasted%20image%2020240705001243.jpg)

## Links

[Load Balancer](devops/devops-intro/load-balancer.md)
