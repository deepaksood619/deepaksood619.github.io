# Compute

- [Amazon EC2](cloud/aws/compute/amazon-ec2.md)
- [EC2 Instance Types](cloud/aws/compute/ec2-instance-types.md)
- [AWS Lambda](cloud/aws/compute/aws-lambda.md)

## Amazon Elastic Container Service

Run and Manage Docker Containers

## Amazon Elastic Container Service for Kubernetes

Run Managed Kubernetes on AWS

## Amazon Elastic Container Registry

Store and Retrieve Docker Images

## Amazon Lightsail

Launch and Manage Virtual Private Servers

https://aws.amazon.com/lightsail/resources

## AWS Batch

Run Batch Jobs at Any Scale

Available with VM / Spot / ECS / EKS / Fargate

AWS batch lets you run hundreds of thousands of batch and machine learning jobs without installing software or servers. AWS batch is a set of batch management capabilities that enables Engineers to easily run batch Computing jobs at any scale.

1. With AWS batch you package the code specify dependencies then submit your batch job using AWS Management console CLI or sdks number
2. the service dynamically Provisions the optimal quantity and type of compute resources based on the volume and resource requirements of the batch jobs submitted number
3. AWS batch plans schedules and executes your batch Computing workloads using Amazon ECS eks and AWS fargate with an option to utilize spot instances
4. AWS batch is optimized for batch Computing and applications that scale through the execution of multiple jobs in parallel examples include deep learning Financial Risk models and image processing
5. AWS batch supports any job that can be executed as a Docker container jobs specify their memory requirements and the number of virtual CPUs
6. AWS batch also provides the ability to submit jobs that are part of a pipeline this enables you to express any interdependencies that might exist between jobs
7. There is no additional charge for AWS batch you only pay for AWS resources you create to store and run your applications in summary

[AWS Batch: 7 Things You HAVE To Know 🎯 - YouTube](https://www.youtube.com/watch?v=5SKNL9eBj3g&ab_channel=GokceDB)

- [What is AWS Batch and Lightsail service - YouTube](https://www.youtube.com/watch?v=NgyNgStkGW0&ab_channel=HiteshChoudhary)
- [AWS Batch and Hands-On Tutorial on AWS Batch service - YouTube](https://www.youtube.com/watch?v=Ym9HWYFwFS8)

## AWS Elastic Beanstalk

Run and Manage Web Apps

AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.

You can simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.

Deployment modes -

- **All at once:** This is the fastest mode. In this case, Elastic Beanstalk will simply stop all the running instances and then will deploy the new version to these instances.
- **Immutable:** In this mode, Elastic Beanstalk will create a new Auto Scaling Group and deploy the new instances there. Then, if the deployment succeeds, it will replace the old Auto Scaling Group with the newly created one.
- **Rolling:** During the deployment, Elastic Beanstalk will deploy the new application version to some of the currently running instances, and repeat that process until all instances are running the same version. Using this mode, the application will run below capacity, but with zero downtime and no additional costs.
- **Rolling with additional batches:** In this mode, Elastic Beanstalk will make sure there is no capacity reduction. It does so by first starting new instances with the new version of the application, and only then deploying the new version to the old instances.

## AWS Fargate

Run Containers without Managing Servers or Clusters

AWS Fargate is a serverless compute engine for containers that works with both [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/) and [Amazon Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/). Fargate makes it easy for you to focus on building your applications. Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design.

Fargate allocates the right amount of compute, eliminating the need to choose instances and scale cluster capacity. You only pay for the resources required to run your containers, so there is no over-provisioning and paying for additional servers. Fargate runs each task or pod in its own kernel providing the tasks and pods their own isolated compute environment. This enables your application to have workload isolation and improved security by design. This is why customers such as Vanguard, Accenture, Foursquare, and Ancestry have chosen to run their mission critical applications on Fargate.

[AWS Fargate Pricing Explained](https://www.vantage.sh/blog/fargate-pricing)

[Serverless Compute Engine–AWS Fargate Pricing–Amazon Web Services](https://aws.amazon.com/fargate/pricing/)

## AWS Serverless Application Repository

Discover, Deploy, and Publish Serverless Applications

## VMware Cloud on AWS

Build a Hybrid Cloud without Custom Hardware

## [AWS Elastic Kubernetes Service (EKS)](amazon-eks)

## EC2 > Networking > Elastic IP Addresses

An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet; for example, to connect to your instance from your local computer.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html

## EC2 > Networking > ENI

An elastic network interface (referred to as a*network interface*in this documentation) is a logical networking component in a VPC that represents a virtual network card.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html

## Others

- VirtualBox
- AWS EC2
- VMWare player
- Vagrant Environment
- Paralles in mac
