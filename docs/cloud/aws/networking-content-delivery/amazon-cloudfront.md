## Amazon CloudFront

Amazon CloudFront is a global Content Delivery Network (CDN) service which securely delivers website's dynamic, static, and streaming content by making it available from a global network of edge locations. Amazon CloudFront supports all types of files that can be served overHTTP.

### Usage

CloudFront makes use of Edge locations to deliver content to end-users. Edge locations are located in most of the major cities around the world and are specifically used by AWS CloudFront (CDN) for distribution of content. CloudFront is seamlessly integrated with other AWS services including AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and AWS Lambda to run custom code close to your viewers.

When a user requests for content that is served with Amazon CloudFront, the user is routed to the edge location that provides the lowest latency (time delay). As a result that content is delivered with better performance than if the user had accessed the content from a data center farther away.

If the content is already in the edge location with the lowest latency, Amazon CloudFront delivers it immediately. If the content is not currently in that edge location, Amazon CloudFront retrieves it from an Amazon S3 bucket or an HTTP server that was identified as the source for the definitive version of your content.

Amazon CloudFront caches content at edge locations for a period of time specified by the provider.

Amazon CloudFront supports all files that can be served over HTTP. These files include dynamic web pages, such as HTML or PHP pages along with any popular static files that are part of your web application, such as website images, audio, video, media files or software downloads.

### Durability & availability

Since CloudFront is an edge cache, Amazon CloudFront does not provide durable storage. The origin server, such as Amazon S3 or a web server running on Amazon EC2, provides the durable file storage needed. But CloudFront provides high availability by using a distributed global network of edge locations. Amazon constantly monitors and optimizes the network paths which provide content for both availability and performance.

### Security

CloudFront is a highly secure CDN that provides both network and application level protection. CloudFront customers benefit from the automatic protection of AWS Shield (DDoS protection service) Standard, at no additional charge. CloudFront is also seamlessly integrated with AWS WAF (Web Application Firewall) and AWS Shield Advanced to help protect your applications from more sophisticated threats and DDoS attacks.

https://www.mitrai.com/tech-guide/eight-types-of-aws-storage-services-explained

### Pricing / Cost Optimization

[Cost-Optimizing your AWS architectures by utilizing Amazon CloudFront features | Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/cost-optimizing-your-aws-architectures-by-utilizing-amazon-cloudfront-features/)

## Links

- [cdn-content-delivery-network](cloud/others/cdn-content-delivery-network.md)
- [cdn-comparison](cloud/others/cdn-comparison.md)
- [What you need to know when invalidating files - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/invalidation-specifying-objects.html)
