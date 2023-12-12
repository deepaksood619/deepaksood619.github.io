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

### Why Do We Need a CDN for Your Application?

A Content Delivery Network (CDN) can significantly improve the performance, scalability, and security of your website or application.
Here are some key reasons why you might need a CDN:

- **Faster Load Times:** A CDN stores static content like images, videos, and scripts on servers around the world. This reduces the distance users have to travel to download your content, leading to faster loading times and improved user experience.
- **Increased Scalability:** CDNs can handle sudden traffic spikes by distributing the load across their global network of servers. This ensures your website or application remains accessible and responsive even during peak periods.
- **Reduced Latency:** Latency is the time it takes for data to travel between a user's device and the server. A CDN reduces latency by providing users with content from geographically closer servers, leading to a smoother and more responsive user experience.
- **Enhanced Security:** CDNs can provide a layer of security by filtering out malicious traffic and protecting against DDoS attacks. They can also offload some security tasks from your origin server, improving its performance and reliability.
- **Cost Savings:** By using a CDN, you can offload bandwidth and processing power from your origin server, which can help you save on your hosting costs.

### Types of CDN

#### Pull CDNs

These CDNs deliver content to users upon request. The user's browser requests the content from the CDN, and the CDN delivers it from the closest edge server.

#### Push CDNs

These CDNs proactively push content to edge servers before users request it. This can improve performance further, especially for static content that is frequently accessed.

### What does it actually mean to serve traffic from closer location to User?

Serving traffic from a closer location means delivering content from a nearby server, reducing data travel distance. This minimizes delays, leading to faster access and better user experience.

When content is served from a closer location:

- **Reduced Latency:** With shorter physical distances, the data transmission time decreases, resulting in faster loading times.
- **Improved User Experience:** Quicker access to content leads to a smoother and more responsive experience for users accessing the application or website.
- **Optimized Performance:** By minimizing the travel distance, the overall performance of the application or website improves, enhancing user satisfaction.

### If CDN is closer to user and using the same public internet, then how it's able to serve faster?

Even though the CDN server is using the same public internet as the user, it is able to serve content faster due to several factors:

- **Reduced distance:** The physical distance between the user and the edge server is simply shorter, which means the data has less distance to travel.
- **Optimized infrastructure:** CDNs invest heavily in optimizing their infrastructure to deliver content efficiently. This includes using high-speed connections, powerful servers, and specialized caching technologies.
- **Peering agreements:** CDNs have peering agreements with major internet service providers (ISPs). This allows them to exchange traffic directly with the ISPs' networks, bypassing congested public peering points.
- **Content caching:** CDNs store frequently accessed content on edge servers around the world. This allows them to serve the content directly to users without needing to fetch it from the origin server each time.

### CDN POPs and Edge Caches

**CDN POPs (Point of Presence):** These are strategically located data centers around the world that store cached content. They are responsible for delivering content to users in their respective regions.

**CDN Edge Cache Layer:** This is the layer closest to the user that caches static content. Edge servers are typically located in ISPs' data centers or other internet exchange points. They play a crucial role in delivering content quickly and efficiently to users.

### How CDNs Works Efficiently?

A Content Delivery Network, or CDN, is a network of geographically distributed servers that work together to deliver content to users faster and more efficiently.

Here's how it works:

#### Points of Presence (POPs)

- The CDN establishes **Points of Presence (POPs)** in multiple locations worldwide. These POPs are essentially servers that contain cached copies of static content from your website.
- Each POP serves users in its geographic area, minimizing the distance data needs to travel and improving loading times.

#### Content Caching

- Static content, such as images, videos, and JavaScript files, is cached on the POP servers.
- When a user requests content from your website, the request is first routed to the closest POP.
- If the requested content is cached on the POP, it is served directly to the user from there. This significantly reduces the time it takes for the content to reach the user.

#### Dynamic Acceleration

- For dynamic content, such as HTML pages and personalized content, the CDN acts as a intermediary server.
- When a user requests dynamic content, the request is routed to the closest POP.
- The POP connects to your origin server and fetches the content.
- The content is then delivered to the user from the POP.

#### Edge Logic Computations

- Some CDNs offer the ability to run custom logic on the edge servers. This allows you to perform tasks such as:
  - Modifying content based on the user's location or device.
  - Validating user requests.
  - Blocking malicious traffic.

### How CDNs are Faster Despite Public Internet?

Even though CDNs use the same public internet as your origin server, they can deliver content faster due to several factors:

- **Global Network of Servers:** CDNs have a vast network of geographically distributed servers, which brings content closer to users.
- **Caching:** CDNs cache frequently accessed content on edge servers, eliminating the need to download it from the origin server every time.
- **Content Optimization:** CDNs can optimize content for faster delivery, such as using HTTP compression and image optimization techniques.
- **Advanced Routing:** CDNs use sophisticated routing algorithms to choose the fastest path for delivering content to users.
- **Security Measures:** CDNs can prioritize and filter traffic to reduce congestion and prevent malicious attacks.

These factors combined significantly improve the performance and speed of content delivery compared to using a single origin server.

### Role of Anycast in CDNs

Anycast routing is a technology used in CDNs to direct traffic to the closest available edge server. When a user requests content, the request is sent to the IP address of the nearest PoP. This ensures that users are always connected to the closest server, regardless of their actual location.

Here's how Anycast works:

1. **User request:** A user requests content from a CDN URL.
2. **DNS resolution:** The user's DNS resolver queries the CDN's DNS servers for the location of the closest edge server.
3. **Edge server selection:** The CDN selects the edge server with the best available route to the user.
4. **Content delivery:** The edge server delivers the requested content to the user.

By utilizing Anycast routing, CDNs can ensure optimal performance and user experience by efficiently directing traffic to the closest available server, regardless of the user's actual location.

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
