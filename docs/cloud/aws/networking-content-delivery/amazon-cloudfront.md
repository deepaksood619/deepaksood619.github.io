## Amazon CloudFront

Amazon CloudFront is a global Content Delivery Network (CDN) service which securely delivers website's dynamic, static, and streaming content by making it available from a global network of edge locations. Amazon CloudFront supports all types of files that can be served over HTTP.

## Usage

CloudFront makes use of Edge locations to deliver content to end-users. Edge locations are located in most of the major cities around the world and are specifically used by AWS CloudFront (CDN) for distribution of content. CloudFront is seamlessly integrated with other AWS services including AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and AWS Lambda to run custom code close to your viewers.

When a user requests for content that is served with Amazon CloudFront, the user is routed to the edge location that provides the lowest latency (time delay). As a result that content is delivered with better performance than if the user had accessed the content from a data center farther away.

If the content is already in the edge location with the lowest latency, Amazon CloudFront delivers it immediately. If the content is not currently in that edge location, Amazon CloudFront retrieves it from an Amazon S3 bucket or an HTTP server that was identified as the source for the definitive version of your content.

Amazon CloudFront caches content at edge locations for a period of time specified by the provider.

Amazon CloudFront supports all files that can be served over HTTP. These files include dynamic web pages, such as HTML or PHP pages along with any popular static files that are part of your web application, such as website images, audio, video, media files or software downloads.

Amazon CloudFront uses standard cache control headers you set on your files to identify static and dynamic content. You can use **different origins** for different types of content on a single site – e.g. Amazon S3 for static objects, Amazon EC2 for dynamic content, and custom origins for third-party content.

## Durability & availability

Since CloudFront is an edge cache, Amazon CloudFront does not provide durable storage. The origin server, such as Amazon S3 or a web server running on Amazon EC2, provides the durable file storage needed. But CloudFront provides high availability by using a distributed global network of edge locations. Amazon constantly monitors and optimizes the network paths which provide content for both availability and performance.

## Security

CloudFront is a highly secure CDN that provides both network and application level protection. CloudFront customers benefit from the automatic protection of AWS Shield (DDoS protection service) Standard, at no additional charge. CloudFront is also seamlessly integrated with AWS WAF (Web Application Firewall) and AWS Shield Advanced to help protect your applications from more sophisticated threats and DDoS attacks.

CloudFront **only supports ACM certificates that are created in the us-east-1 (N. Virginia) Region**. Even if the content resides in a different Region (like eu-west-2), a public certificate for HTTPS on a custom domain name must originate from us-east-1. This certificate is used to secure content access through CloudFront over HTTPS.

https://www.mitrai.com/tech-guide/eight-types-of-aws-storage-services-explained

## Pricing / Cost Optimization

[Cost-Optimizing your AWS architectures by utilizing Amazon CloudFront features | Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/cost-optimizing-your-aws-architectures-by-utilizing-amazon-cloudfront-features/)

### CloudFront Price Classes

Price classes provide you an option to lower the prices you pay to deliver content out of Amazon CloudFront. By default, Amazon CloudFront minimizes end-user latency by delivering content from its entire global network of edge locations. However, because we charge more where our costs are higher, this means that you pay more to deliver your content with low latency to end users in some locations. Price classes let you reduce your delivery prices by excluding Amazon CloudFront’s more expensive edge locations from your Amazon CloudFront distribution.

CloudFront price classes allow you to optimize costs by selecting the geographic regions your content is served from. The three classes are **Price Class All (all edge locations worldwide), Price Class 200 (most regions, excluding South America and Australia/New Zealand), and Price Class 100 (only North America, Europe, and Israel)**. Choosing a lower price class can reduce costs but may result in higher latency for users in excluded regions.

#### Price Class options

- **Price Class All:** Uses all CloudFront edge locations globally. This offers the best performance but is the most expensive.
- **Price Class 200:** Excludes some regions, such as South America and Australia/New Zealand. It provides a balance between performance and cost.
- **Price Class 100:** Includes only the cheapest regions: North America, Europe, and Israel. This is the most cost-effective option but can lead to increased latency for users outside of these areas.

#### How price class affects costs

- **Data transfer costs:** The cost of data transfer out of CloudFront varies by region. By selecting a lower price class, you exclude more expensive regions, which can lower your overall data transfer costs.
- **Performance:** Users in regions excluded by your chosen price class may experience slower performance because their requests are served from a more distant edge location.

## Others

- **Amazon CloudFront can route to multiple origins based on the content type**
	- You can configure a single Amazon CloudFront web distribution to serve different types of requests from multiple origins. For example, if you are building a website that serves static content from an Amazon Simple Storage Service (Amazon S3) bucket and dynamic content from a load balancer, you can serve both types of content from a Amazon CloudFront web distribution.
- **Use an origin group with primary and secondary origins to configure Amazon CloudFront for high-availability and failover**
	- You can set up Amazon CloudFront with origin failover for scenarios that require high availability. To get started, you create an origin group with two origins: a primary and a secondary. If the primary origin is unavailable or returns specific HTTP response status codes that indicate a failure, CloudFront automatically switches to the secondary origin.
	- To set up origin failover, you must have a distribution with at least two origins. Next, you create an origin group for your distribution that includes two origins, setting one as the primary. Finally, you create or update a cache behavior to use the origin group.
- **Use field level encryption in Amazon CloudFront to protect sensitive data for specific content**
	- Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data—and have the credentials to decrypt it—are able to do so.
	- To use field-level encryption, when you configure your Amazon CloudFront distribution, specify the set of fields in POST requests that you want to be encrypted, and the public key to use to encrypt them. You can encrypt up to 10 data fields in a request. (You can’t encrypt all of the data in a request with field-level encryption; you must specify individual fields to encrypt.)
- **Georestriction**
	- [Restrict the geographic distribution of your content - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html)
	- You can use geo restriction, also known as geo blocking, to prevent users in specific geographic locations from accessing content that you're distributing through a Amazon CloudFront distribution.
- **Origin Access Control (OAC) is the recommended method for granting CloudFront permission to upload to (write into) an S3 bucket securely.** OAC supersedes the older Origin Access Identity (OAI) approach and supports both read and write operations. This allows you to restrict direct access to the S3 bucket and ensure that only CloudFront can act as a secure intermediary for uploads.

## Links

- [cdn-content-delivery-network](cloud/others/cdn-content-delivery-network.md)
- [cdn-comparison](cloud/others/cdn-comparison.md)
- [What you need to know when invalidating files - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/invalidation-specifying-objects.html)
