# AWS ELB

Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones. Elastic Load Balancing offers three types of load balancers that all feature the high availability, automatic scaling, and robust security necessary to make your applications fault tolerant.

- **Application Load Balancer**

This load balancer operates at Layer 7 of the OSI model. It can be used to load-balance HTTP and HTTPS applications and can invoke Lambda functions, among several other features.

- **Network Load Balancer (NLB)**

Used for extreme performance, this load balancer operates at Layer 4 of the OSI model. It can, therefore, load-balance any kind of TCP traffic and can handle large amounts of requests with low latency.

- Doesn't support security groups

- **Classic Load Balancer**

This load balancer operates at Layer 4 or Layer 7 of the OSI model. It is now mostly used for legacy applications that run on EC2-Classic since application load balancers provide more features.

Provides SSL Termination for MQTT messages over ssl, and all the further communication happen over TCP inside the VPC network.

<https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html>

## Product Comparisions

If you need flexible application management, we recommend that you use an Application Load Balancer. If extreme performance and static IP is needed for your application, we recommend that you use a Network Load Balancer. If you have an existing application that was built within the EC2-Classic network, then you should use a Classic Load Balancer.

<https://aws.amazon.com/elasticloadbalancing/features>

## Authentication in ALB

<https://aws.amazon.com/blogs/aws/built-in-authentication-in-alb>

When you create a load balancer, you must choose whether to make it an internal load balancer or an internet-facing load balancer.

<https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html>

## ALB Logs

request_processing_time

The total time elapsed (in seconds, with millisecond precision) from the time the load balancer received the request until the time it sent it to a target.

This value is set to -1 if the load balancer can't dispatch the request to a target. This can happen if the target closes the connection before the idle timeout or if the client sends a malformed request.

This value can also be set to -1 if the registered target does not respond before the idle timeout.

target_processing_time

The total time elapsed (in seconds, with millisecond precision) from the time the load balancer sent the request to a target until the target started to send the response headers.

This value is set to -1 if the load balancer can't dispatch the request to a target. This can happen if the target closes the connection before the idle timeout or if the client sends a malformed request.

This value can also be set to -1 if the registered target does not respond before the idle timeout.

response_processing_time

The total time elapsed (in seconds, with millisecond precision) from the time the load balancer received the response header from the target until it started to send the response to the client. This includes both the queuing time at the load balancer and the connection acquisition time from the load balancer to the client.

This value is set to -1 if the load balancer can't send the request to a target. This can happen if the target closes the connection before the idle timeout or if the client sends a malformed request.

elb_status_code

The status code of the response from the load balancer.

target_status_code

The status code of the response from the target. This value is recorded only if a connection was established to the target and the target sent a response. Otherwise, it is set to -.

<https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html>
