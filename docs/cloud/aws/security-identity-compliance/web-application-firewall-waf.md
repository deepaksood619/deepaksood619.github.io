# Web Application Firewall (WAF)

AWS WAF can be deployed on Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync. As part of Amazon CloudFront it can be part of your Content Distribution Network (CDN) protecting your resources and content at the Edge locations. As part of the Application Load Balancer it can protect your origin web servers running behind the ALBs. As part of Amazon API Gateway, it can help secure and protect your REST APIs. As part of AWS AppSync, it can help secure and protect your GraphQL APIs.

You can protect the following resource types:
- Amazon CloudFront distribution
- Amazon API Gateway REST API
- Application Load Balancer
- AWS AppSync GraphQL API
- Amazon Cognito user pool
- AWS App Runner service
- AWS Verified Access instance
- AWS Amplify

AWS WAF is tightly integrated with Amazon CloudFront and the Application Load Balancer (ALB), services that AWS customers commonly use to deliver content for their websites and applications. When you use AWS WAF on Amazon CloudFront, **your rules run in all AWS Edge Locations, located around the world close to your end-users. This means security doesn’t come at the expense of performance.** Blocked requests are stopped before they reach your web servers. When you use AWS WAF on Application Load Balancer, your rules run in the region and can be used to protect internet-facing as well as internal load balancers.

## Actions

- **Allow** the requests to go to the protected resource for processing and response.
- **Block** the requests.
- **Count** the requests.
- Run **CAPTCHA** or **Challenge** checks against requests to verify human users and standard browser use

## AWS WAF Components

### web ACLs 

You use a web access control list (web ACL) to protect a set of AWS resources. You create a web ACL and define its protection strategy by adding rules. Rules define criteria for inspecting web requests and they specify the action to take on requests that match their criteria. You also set a default action for the web ACL that indicates whether to block or allow through any requests that the rules haven't already blocked or allowed. For more information about web ACLs, see [Configuring protection in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl.html).

A web ACL is an AWS WAF resource.

### Protection pack (Web ACL)s

In the new console, protection packs are the new location for your web ACLs. During setup, you provide information about your apps and resources. AWS WAF recommends a protection pack tailored to your scenario, and then creates a web ACL that contains rules, rule groups, and actions defined by the protection pack (web ACL) you choose. For more information about protection packs (web ACLs), see [Configuring protection in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl.html).

A protection pack (web ACL) is an AWS WAF resource.

### Rules

Each rule contains a statement that defines the inspection criteria, and an action to take if a web request meets the criteria. When a web request meets the criteria, that's a match. You can configure rules to block matching requests, allow them through, count them, or run bot controls against them that use CAPTCHA puzzles or silent client browser challenges. For more information about rules, see [AWS WAF rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html).

A rule is not an AWS WAF resource. It only exists in the context of a protection pack (web ACL) or rule group.

### Rule groups

You can define rules directly inside a protection pack (web ACL) or in reusable rule groups. AWS Managed Rules and AWS Marketplace sellers provide managed rule groups for your use. You can also define your own rule groups. For more information about rule groups, see [AWS WAF rule groups](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-groups.html).

A rule group is an AWS WAF resource.

### web ACL capacity units (WCUs)

AWS WAF uses WCUs to calculate and control the operating resources that are required to run your rules, rule groups, protection packs (web ACLs), or web ACLs.

A WCU is not an AWS WAF resource. It only exists in the context of a protection pack (web ACL), rule, or rule group.

## Dashboards

Dashboards available through new provide unified visibility into your security posture through these visualizations:

**Traffic insight recommendations** – AWS Threat Intelligence monitors your previous 2 weeks of allowed traffic, analyzes vulnerabilities, and provides the following:

- Traffic-based rule suggestions
- Application-specific security recommendations
- Protection optimization guidance

**Summary** – Shows request counts for all traffic during a specified time range. You can use the following criteria to filter traffic data:

- **Rule** – Filter by the individual rules in the protection pack.
- **Actions** – Show counts for specific actions taken on traffic like Allow, Block, Captcha, and Challenge.
- **Traffic type** – Only show counts for specific traffic types like anti-DDoS or bots.
- **Time range** – Choose from a selection of predefined time ranges, or set a custom range.
- **Local or UTC time** – You can set your preferred time format.

**Protection activity** – Visualizes your protection rules and how their order contributes to terminating actions.

- **Traffic flow through your rules** – Show the traffic flow through your rules. Switch from **Sequential rules view** to **Non-sequential rules view** to see how rule order affects outcomes.
- **Rule actions and their outcomes** – Shows the terminating actions that a rule took on traffic in the specified time period.

**Action totals** – A chart that visualizes the total number of actions taken on requests during a specified time range. Use the **Overlay last 3 hours** option to compare the current time range with the previous 3 hour time window. You can filter data by:

- **Allow action**
- **Total actions**
- **Captcha actions**
- **Challenge actions**
- **Block actions**

**All rules** – A chart that visualizes metrics for all rules in the protection pack.
- Use the **Overlay last 3 hours** option to compare the current time range with the previous 3 hour time window.

**Overview Dashboard** – Provides a comprehensive, graphical view of your security status, including the following:

- **Traffic characteristics** – See an overview of traffic by origin, attack types, or by the device type of the clients that sent requests.
- **Rule characteristics** – A breakdown of attacks by the 10 most common rules and termnating actions.
- **Bots** – Visualize bot activity, detection, categories, and bot-related signal labels.
- **Anti-DDoS** – An overview of detected and mitigated layer 7 DDoS activity.

## Protection Packs

Preconfigured protection packs leverage AWS's security expertise to deliver instant protection templates for specific industries and workload types like APIs, PHP applications, and web services. These templates are continuously optimized to ensure up-to date security without requiring deep deployment expertise. Gain continuous security recommendations to strengthen overall security posture.

### How are protection packs different than Managed Rules for AWS WAF?

A rule pack is a logical selection of rules based on your application needs created and maintained by AWS to protect against common web threats.  
  
AWS Managed Rules for AWS WAF is a managed service that provides protection against application vulnerabilities or other unwanted traffic. You have the option of selecting one or more rule groups from AWS Managed Rules for each web ACL, up to the maximum web ACL capacity unit (WCU) limit.

### Do protection packs cost extra?

Protection packs are part of AWS Managed Rules and are priced according to AWS WAF pricing.

### Can I see what's inside a protection pack?

Yes, you can view rules and in the edit workflow, modify the rules within a protection pack. You have full visibility and control over the rules they contain.

## FAQs

### How does AWS WAF block or allow traffic?

As the underlying service receives requests for your web sites, it forwards those requests to AWS WAF for inspection against your rules. Once a request meets a condition defined in your rules, AWS WAF instructs the underlying service to either block or allow the request based on the action you define.

### Can I use AWS WAF to protect web sites not hosted in AWS?

Yes, AWS WAF is integrated with Amazon CloudFront, which supports custom origins outside of AWS.

### Which types of events can AWS WAF help me to stop?

AWS WAF helps protects your website from common attack techniques like SQL injection and Cross-Site Scripting (XSS). In addition, you can create rules that can block or rate-limit traffic from specific user-agents, from specific IP addresses, or that contain particular request headers.

### What is Rate-based Rule in AWS WAF?

Rate-based Rules are type of Rule that can be configured in AWS WAF, allowing you to specify the number of web requests that are allowed by a client IP in a trailing, continuously updated, 5 minute period. If an IP address breaches the configured limit, new requests will be blocked until the request rate falls below the configured threshold.

### What are the use cases for the Rate-based Rule?

Here are some popular use cases customers can address with Rate-based rules:

- I want to block or count an IP address when that IP address exceeds the configured threshold rate (configurable in web requests per trailing 5 minute period)
- I want to know which IP address are currently being blocked because they exceeded the configured threshold rate
- I want IP addresses that have been added to the block list to be automatically removed when they are no longer violating the configured threshold rate
- I want to exempt certain high-traffic source IP ranges from being blocked by my Rate-based rules

### Can I use Rate-based rule to limit access to a certain parts of my Webpage?

Yes. Here is an example. Suppose that you want to limit requests to the login page on your website. To do this, you could add the following string match condition to a rate-based rule:

- The Part of the request to filter on is “URI”.
- The Match Type is “Starts with”.
- A Value to match is “/login” (this need to be whatever identifies the login page in the URI portion of the web request)

Additionally, you would specify a Rate Limit of, say, 15,000 requests per 5 minutes. Adding this rate-based rule to a web ACL will limit requests to your login page per IP address without affecting the rest of your site.

### Can I exempt certain high-traffic source IP ranges from being blocked by my Rate-based Rule(s)?

Yes. You can do this by having a separate IP match condition that allows the request within the Rate-base Rule.

### How do I monitor the effectiveness of my security rules?

A unified, actionable dashboard combines native AWS security metrics, real-time threat monitoring, and rule performance data—enabling teams to quickly identify and respond to threats through event pattern analysis, blocked requests, and automated alerts. From this comprehensive interface, security teams can analyze trends, tune protections, and access continuous recommendations to strengthen overall security posture. Additionally, a dedicated partner solutions page streamlines access to specialized protections from AWS Marketplace, making it easy to discover and deploy additional security capabilities.

[FAQs - AWS WAF - Amazon Web Services (AWS)](https://aws.amazon.com/waf/faqs/)

## Managed Rules for AWS WAF

Managed Rules are an easy way to deploy pre-configured rules to protect your applications common threats like application vulnerabilities like OWASP, bots, or Common Vulnerabilities and Exposures (CVE). AWS Managed Rules for AWS WAF are managed by AWS, whereas Managed Rules from AWS Marketplace is managed by third-party security sellers.

### How can I subscribe to Managed Rules through AWS Marketplace?

You can subscribe to a Managed Rule provided by a Marketplace security Seller from the AWS WAF console or from the AWS Marketplace. All subscribed Managed Rules will be available for you to add to an AWS WAF web ACL.

### Can I use Managed Rules along with my existing AWS WAF rules?

Yes, you can use Managed Rules along with your custom AWS WAF rules. You can add Managed Rules to your existing AWS WAF web ACL to which you might have already added your own rules.

### Will Managed Rules add to my existing AWS WAF limit on number of rules?

The number of rules inside a Managed Rule does not count towards your limit. However, each Managed Rule added to your web ACL will count as 1 rule.

### How can I disable a Managed Rule?

You can add a Managed Rule to a web ACL or remove it from the web ACL anytime. The Managed Rules are disabled once you disassociate a Managed Rule from any web ACLs.

### How can I test a Managed Rule?

AWS WAF allows you to configure a “count” action for a Managed Rule, which counts the number of web requests that are matched by the rules inside the Managed Rule. You can look at the number of counted web requests to estimate how many of your web requests would be blocked if you enable the Managed Rule.

## Pricing

AWS WAF charges based on the number of web access control lists (web ACLs) that you create, the number of rules that you add per web ACL, and the number of web requests that you receive. There are no upfront commitments.

A Rate-based Rule costs the same as a regular AWS WAF Rule which is $1 per rule per WebACL per month.

AWS Shield Advanced customers get limited usage of AWS WAF as part of their subscription.

For logging with Amazon CloudWatch Logs (Standard and Infrequent Access), other Vended Logs destinations, you receive up to 500 bytes of log delivery per WAF request at no additional charge. Any usage beyond the discounted usage is billed by Amazon CloudWatch based on WAF specific Vended Logs pricing. The per GB rate for WAF-specific vended logs pricing matches the [CloudWatch Vended Logs pricing per region](https://aws.amazon.com/cloudwatch/pricing/). WAF logs specific charges will show under the VendedLog-Bytes-WAFlogs (for CW-Standard), S3-Egress-Bytes-WAFLogs (for S3), and VendedLogIA-Bytes-WAFlogs (for CW-IA) usage types.

**Components**
1. AWS WAF
2. Bot Control
3. Fraud Control
4. DDoS Protection

**Managed rule groups from AWS Marketplace**

When you subscribe to a managed rule group provided by an AWS Marketplace seller, you will be charged additional fees based on the price set by the seller. These charges are in addition to the AWS WAF fees described earlier.

[Pricing - AWS WAF - Amazon Web Services (AWS)](https://aws.amazon.com/waf/pricing/)

### Amplify WAF Pricing

- WAF will charge an estimated $8 per month (pro-rated hourly) + $1.40 for 1M requests per month
- In addition to WAF, Amplify will charge $15 per month (pro-rated hourly)

## Links

- [waf-logging](cloud/aws/security-identity-compliance/waf-logging.md)
- [Web Application Firewall - Web API Protection - AWS WAF - AWS](https://aws.amazon.com/waf/)
- [How AWS WAF works - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works.html)
- [AWS WAF - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html)
