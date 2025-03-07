# AWS ELB

Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones. Elastic Load Balancing offers three types of load balancers that all feature the high availability, automatic scaling, and robust security necessary to make your applications fault tolerant.

## Application Load Balancer

This load balancer operates at Layer 7 of the OSI model. It can be used to load-balance HTTP and HTTPS applications and can invoke Lambda functions, among several other features.

[IP address types for your Application Load Balancer - Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-ip-address-type.html)

### Path based routing

I believe that you are getting this error because the services in question do not expect to receive paths prefixed with `/expressapp` and `/expressapp2`. When the ALB forwards traffic to your service, the path remains intact.

Stripping off the prefix cannot be handled by ALB. If you don't have access to the source code of the apps, you will need to use some kind of reverse-proxy like nginx to rewrite the urls before sending them onto the app.

[amazon web services - AWS Application Load Balancer (ALB) path based routing not functioning as expected - Stack Overflow](https://stackoverflow.com/questions/45216486/aws-application-load-balancer-alb-path-based-routing-not-functioning-as-expect)

[ChatGPT - Stripping Path Prefix](https://chatgpt.com/share/67a11208-da34-8005-8004-7c625373e55b)

### Domain based routing / Host based routing

[New – Host-Based Routing Support for AWS Application Load Balancers \| AWS News Blog](https://aws.amazon.com/blogs/aws/new-host-based-routing-support-for-aws-application-load-balancers/)

## Network Load Balancer (NLB)

Used for extreme performance, this load balancer operates at Layer 4 of the OSI model. It can, therefore, load-balance any kind of TCP traffic and can handle large amounts of requests with low latency.

- Doesn't support security groups

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

## Links

[Intermittent HTTP 502 error with Amazon (AWS) load balancher and Apache - Server Fault](https://serverfault.com/questions/1031647/intermittent-http-502-error-with-amazon-aws-load-balancher-and-apache)

- Ensure you're not using Apache's event MPM module (default) when behind a ALB/ELB. It dynamically closes connections. Try worker MPM.
