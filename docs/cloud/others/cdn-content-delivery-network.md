# CDN (Content Delivery Network)

## CDN (Content Delivery Network)

- Cloudflare - [cloudflare.com/network/](https://www.cloudflare.com/network/)
- fastly
- Cloudfront - [Amazon Cloudfront Locations](https://aws.amazon.com/cloudfront/features/)
- Akamai

### [Use image CDNs to optimize images](https://web.dev/image-cdns/)

- Imagekit
- https://imagekit.io
- Image crop with Focus mode
- https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#focus-fo
- [Serverless Image Handler | AWS Solutions](https://aws.amazon.com/solutions/implementations/serverless-image-handler/)

## Cloudflare

A "Cloudflare Worker" is JavaScript you write that runs on Cloudflare's edge. A "Cloudflare Service Worker" is specifically a worker which handles HTTP traffic and is written against the Service Worker API.

#### What can I do with Service Workers on the edge?

Anything and everything. You're writing code, so the possibilities are infinite. Your Service Worker will intercept all HTTP requests destined for your domain, and can return any valid HTTP response. Your worker can make outgoing HTTP requests to any server on the public internet.

https://blog.cloudflare.com/introducing-cloudflare-workers

A flow diagram of how Cloudflare worker responds to an **HTTP request.**

![image](../../media/Cloud-Others-Others-SAAS-image1.jpg)

https://blog.opstree.com/2020/06/30/cache-using-cloudflare-workers-cache-api

[**https://developers.cloudflare.com/firewall/cf-firewall-rules/actions**](https://developers.cloudflare.com/firewall/cf-firewall-rules/actions)

## Amazon CloudFront

Amazon CloudFront is a global Content Delivery Network (CDN) service which securely delivers website'sdynamic, static, and streaming contentby making it available from a global network of edge locations. Amazon CloudFront supports all types of files that can be served overHTTP.

### Usage

CloudFront makes use of Edge locations to deliver content to end-users. Edge locations are located in most of the major cities around the world and are specifically used by AWS CloudFront (CDN) for distribution of content. CloudFront is seamlessly integrated with other AWS services including AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and AWS Lambda to run custom code close to your viewers.

When a user requests for content that is served with Amazon CloudFront, the user is routed to the edge location that provides the lowest latency (time delay). As a result that content is delivered with better performance than if the user had accessed the content from a data center farther away.

If the content is already in the edge location with the lowest latency, Amazon CloudFront delivers it immediately. If the content is not currently in that edge location, Amazon CloudFront retrieves it from an Amazon S3 bucket or an HTTP server that was identified as the source for the definitive version of your content.

Amazon CloudFront caches content at edge locations for a period of time specified by the provider.

Amazon CloudFront supports all files that can be served over HTTP. These files include dynamic web pages, such as HTML or PHP pages along with any popular static files that are part of your web application, such as website images, audio, video, media files or software downloads.

### Durability & availability

Since CloudFront is anedge cache, Amazon CloudFront does not provide durable storage. The origin server, such as Amazon S3 or a web server running on Amazon EC2, provides the durable file storage needed. But CloudFront provides high availability by using a distributed global network of edge locations. Amazon constantly monitors and optimizes the network paths which provide content for both availability and performance.

### Security

CloudFront is a highly secure CDN that provides both network and application level protection. CloudFront customers benefit from the automatic protection of AWS Shield (DDoS protection service) Standard, at no additional charge. CloudFront is also seamlessly integrated with AWS WAF (Web Application Firewall) and AWS Shield Advanced to help protect your applications from more sophisticated threats and DDoS attacks.

https://www.mitrai.com/tech-guide/eight-types-of-aws-storage-services-explained

## Links

[Guide to AWS Lambda@Edge A/B Testing](https://www.toptal.com/aws/ab-testing-with-aws-lambda-at-edge)

[CDN vs Caching: How They Both Are Different In Work? | by Mark Smith | Medium](https://zrix.medium.com/cdn-vs-caching-how-they-both-are-different-in-work-efd8db89e139)
