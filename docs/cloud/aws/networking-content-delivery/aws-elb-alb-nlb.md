# AWS ELB / ALB / NLB

Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones. Elastic Load Balancing offers three types of load balancers that all feature the high availability, automatic scaling, and robust security necessary to make your applications fault tolerant.

## Application Load Balancer

This load balancer operates at Layer 7 of the OSI model. It can be used to load-balance HTTP and HTTPS applications and can invoke Lambda functions, among several other features.

ALBs only support HTTP/HTTPS (Layer 7) and WebSocket protocols. They do not support Layer 4 protocols such as TCP or UDP.

[IP address types for your Application Load Balancer - Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-ip-address-type.html)

### Path based routing

I believe that you are getting this error because the services in question do not expect to receive paths prefixed with `/expressapp` and `/expressapp2`. When the ALB forwards traffic to your service, the path remains intact.

Stripping off the prefix cannot be handled by ALB. If you don't have access to the source code of the apps, you will need to use some kind of reverse-proxy like nginx to rewrite the urls before sending them onto the app.

[amazon web services - AWS Application Load Balancer (ALB) path based routing not functioning as expected - Stack Overflow](https://stackoverflow.com/questions/45216486/aws-application-load-balancer-alb-path-based-routing-not-functioning-as-expect)

[ChatGPT - Stripping Path Prefix](https://chatgpt.com/share/67a11208-da34-8005-8004-7c625373e55b)

### Domain based routing / Host based routing

[New – Host-Based Routing Support for AWS Application Load Balancers \| AWS News Blog](https://aws.amazon.com/blogs/aws/new-host-based-routing-support-for-aws-application-load-balancers/)

### Secure Sockets Layer certificate (SSL certificate) with SNI

You can host multiple TLS secured applications, each with its own TLS certificate, behind a single load balancer. To use SNI, all you need to do is bind multiple certificates to the same secure listener on your load balancer. ALB will automatically choose the optimal TLS certificate for each client.

ALB’s smart certificate selection goes beyond SNI. In addition to containing a list of valid domain names, certificates also describe the type of key exchange and cryptography that the server supports, as well as the signature algorithm (SHA2, SHA1, MD5) used to sign the certificate.

With SNI support AWS makes it easy to use more than one certificate with the same ALB. The most common reason you might want to use multiple certificates is to handle different domains with the same load balancer. It’s always been possible to use wildcard and subject-alternate-name (SAN) certificates with ALB, but these come with limitations. Wildcard certificates only work for related subdomains that match a simple pattern and while SAN certificates can support many different domains, the same certificate authority has to authenticate each one. That means you have to reauthenticate and reprovision your certificate every time you add a new domain.

## Network Load Balancer (NLB)

Used for extreme performance, this load balancer operates at Layer 4 of the OSI model. It can, therefore, load-balance any kind of TCP traffic and can handle large amounts of requests with low latency.

- Doesn't support security groups

A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second. After the load balancer receives a connection request, it selects a target from the target group for the default rule. It attempts to open a TCP connection to the selected target on the port specified in the listener configuration.

### Request Routing and IP Addresses

If you specify targets using an **instance ID**, traffic is routed to instances using the **primary private IP address specified in the primary network interface** for the instance. The load balancer rewrites the destination IP address from the data packet before forwarding it to the target instance.

If you specify targets using **IP addresses**, you can route traffic to an instance using **any private IP address from one or more network interfaces**. This enables multiple applications on an instance to use the same port. Note that each network interface can have its security group. The load balancer rewrites the destination IP address before forwarding it to the target.

[Network Load Balancers now support Security groups \| Containers](https://aws.amazon.com/blogs/containers/network-load-balancers-now-support-security-groups/)

## Classic Load Balancer

This load balancer operates at Layer 4 or Layer 7 of the OSI model. It is now mostly used for legacy applications that run on EC2-Classic since application load balancers provide more features.

Provides SSL Termination for MQTT messages over ssl, and all the further communication happen over TCP inside the VPC network.

https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html

## Gateway Load Balancer

Gateway Load Balancers enable you to deploy, scale, and manage virtual appliances, such as firewalls, intrusion detection and prevention systems, and deep packet inspection systems. It combines a transparent network gateway (that is, a single entry and exit point for all traffic) and distributes traffic while scaling your virtual appliances with the demand.

[Gateway Load Balancer](https://aws.amazon.com/elasticloadbalancing/gateway-load-balancer/)

[What is a Gateway Load Balancer? - Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html)

## Product comparisons

If you need flexible application management, we recommend that you use an Application Load Balancer. If extreme performance and static IP is needed for your application, we recommend that you use a Network Load Balancer. If you have an existing application that was built within the EC2-Classic network, then you should use a Classic Load Balancer.

https://aws.amazon.com/elasticloadbalancing/features

### Static IPs

[Find the IP address used by a load balancer to forward traffic to web servers \| AWS re:Post](https://repost.aws/knowledge-center/elb-find-load-balancer-ip)

The IP addresses for Classic Load Balancers and Application Load Balancers change over time. Don't use this information to statically configure your applications to point to these IP addresses.

## Authentication in ALB

https://aws.amazon.com/blogs/aws/built-in-authentication-in-alb

When you create a load balancer, you must choose whether to make it an internal load balancer or an internet-facing load balancer.

https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html

## ALB Logs

### request_processing_time

The total time elapsed (in seconds, with millisecond precision) from the time the load balancer received the request until the time it sent it to a target.

This value is set to -1 if the load balancer can't dispatch the request to a target. This can happen if the target closes the connection before the idle timeout or if the client sends a malformed request.

This value can also be set to -1 if the registered target does not respond before the idle timeout.

### target_processing_time

The total time elapsed (in seconds, with millisecond precision) from the time the load balancer sent the request to a target until the target started to send the response headers.

This value is set to -1 if the load balancer can't dispatch the request to a target. This can happen if the target closes the connection before the idle timeout or if the client sends a malformed request.

This value can also be set to -1 if the registered target does not respond before the idle timeout.

### response_processing_time

The total time elapsed (in seconds, with millisecond precision) from the time the load balancer received the response header from the target until it started to send the response to the client. This includes both the queuing time at the load balancer and the connection acquisition time from the load balancer to the client.

This value is set to -1 if the load balancer can't send the request to a target. This can happen if the target closes the connection before the idle timeout or if the client sends a malformed request.

### elb_status_code

The status code of the response from the load balancer.

### target_status_code

The status code of the response from the target. This value is recorded only if a connection was established to the target and the target sent a response. Otherwise, it is set to -.

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html

## ALB Health Checks

If the Auto Scaling group (ASG) is using EC2 as the health check type and the Application Load Balancer (ALB) is using its in-built health check, there may be a situation where the ALB health check fails because the health check pings fail to receive a response from the instance. At the same time, ASG health check can come back as successful because it is based on EC2 based health check. Therefore, in this scenario, the ALB will remove the instance from its inventory, however, the Auto Scaling Group will fail to provide the replacement instance. This can lead to the scaling issues mentioned in the problem statement.

## Links

[Intermittent HTTP 502 error with Amazon (AWS) load balancher and Apache - Server Fault](https://serverfault.com/questions/1031647/intermittent-http-502-error-with-amazon-aws-load-balancher-and-apache)

- Ensure you're not using Apache's event MPM module (default) when behind a ALB/ELB. It dynamically closes connections. Try worker MPM.
