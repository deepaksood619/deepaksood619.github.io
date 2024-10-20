# SEO / ASO

### SEO - Search Engine Optimization

### SMO - Social Media Optimization

### SEM - Search Engine Marketing

### ASO - App Store Optimization

### SEM - Search Engine Marketing

Search engine marketing is the practice of marketing a business using paid advertisements that appear on search engine results pages (or [SERPs](https://www.wordstream.com/serp)). Advertisers bid on keywords that users of services such as Google and Bing might enter when looking for certain products or services, which gives the advertiser the opportunity for their ads to appear alongside results for those search queries.

https://blog.hubspot.com/marketing/search-engine-marketing

## Tools

[GitHub - serpapi/awesome-seo-tools: Curated list of awesome SEO tools](https://github.com/serpapi/awesome-seo-tools)

[GitHub - madawei2699/awesome-seo: Google SEO Research and Web Traffic Monetization](https://github.com/madawei2699/awesome-seo)

[Moz - Google Algorithm Update History](https://moz.com/google-algorithm-change)

#### SEO Sites

- [Semrush - Online Marketing Can Be Easy](https://semrush.com/)
- [SerpApi: Google Search API](https://serpapi.com/)
- https://developers.google.com/speed/pagespeed/insights
- https://sitechecker.pro
- https://seositecheckup.com/seo-audit/www.example.com
- https://www.seoptimer.com/deepaksood619.github.io
- https://app.neilpatel.com/en/seo_analyzer/site_audit
- https://answerthepublic.com
- https://stories.google
- https://purifycss.online
- https://moz.com
- [Rich Results Test - Google Search Console](https://search.google.com/test/rich-results)
- [POP: On-Page SEO & Content Optimization Tool Suite](https://www.pageoptimizer.pro/)

## Black Hat SEO

Black hat SEO refers to a set of practices that are used to increases a site or page's rank in search engines through means that violate the search engines' terms of service.

It's crucial to realize that implementing Black Hat SEO tactics and strategies can get your site banned from search engines, excluding you from the number one traffic referral source on the Internet.

- Content Automation
- Doorway Pages
- Hidden Text or Links
- [Keyword](https://www.wordstream.com/keywords) Stuffing
- Reporting a Competitor (or [Negative SEO](https://www.wordstream.com/blog/ws/2012/04/20/negative-seo))
- Sneaky Redirects
- Cloaking
- Link Schemes
- Guest Posting Networks
- Link Manipulation (including buying links)
- Article Spinning
- Link Farms, Link Wheels or Link Networks
- Rich Snippet Markup Spam
- Automated Queries to Google
- Creating pages, subdomains, or domains with [duplicate content](https://www.wordstream.com/duplicate-content)
- Pages with malicious behavior, such as phishing, viruses, trojans, and other malware

https://www.wordstream.com/black-hat-seo

https://unamo.com/blog/seo/8-risky-black-hat-seo-techniques-used-today

https://blog.hubspot.com/marketing/black-hat-seo

https://www.searchenginejournal.com/11-black-hat-techniques-can-kill-seo-campaign/180601/#close

## White Hat SEO

Generally, white hat SEO refers to any practice that improves your search rankings on a search engine results page ([SERP](https://www.wordstream.com/serp)) while maintaining the integrity of your website and staying within the search engines' terms of service. These tactics stay within the bounds as [defined](http://googlewebmastercentral.blogspot.com/2008/11/googles-seo-starter-guide.html) by Google.

https://www.wordstream.com/white-hat-seo

https://www.searchenginejournal.com/7-white-hat-seo-techniques-to-double-traffic/182243

cloudinary.com / imagekit with cloudfront for fast image CDN

## Search Engine Results Page (SERP)

https://www.wordstream.com/serp

[Review Snippet (Review, AggregateRating) Structured Data | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

```html
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      {
      "@context": "https://schema.org/",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "Book",
        "image": details.cover_image_url,
        "name": details.title,
      },
      "ratingValue": details?.avg_rating - Math.floor(details?.avg_rating) !== 0
        ? details?.avg_rating.toFixed(1)
        : details.avg_rating,
      "bestRating": "10",
      "ratingCount": details.num_ratings,
      "reviewCount": details.num_reviews
    })
  }}
/>
```

[AggregateRating - Schema.org Type](https://schema.org/AggregateRating)

[Schema.org - Schema.org](https://schema.org/)

## Rich Results

Rich results are experiences on Google surfaces, such as Search, that go beyond the standard blue link. Rich results can include carousels, images or other non-textual elements.

[Mark Up FAQs with Structured Data | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

[Rich Results Test - Google Search Console](https://search.google.com/test/rich-results)

## Siphoning

In the context of SEO (Search Engine Optimization), Siphoning refers to the act of stealing another website's traffic. Methods for stealing that traffic can include wholesale copying of webpages (that have been slightly altered to redirect visitors elsewhere), using keywords and keyword phrases that "belong" to the targetted website, cybersquatting, etc.

In order to build a **site optimized for organic search engine rankings,** it is important to implement certain standards throughout the code. These include:

- Specifying analttag on images
- Using the correct HTML tags for content hierarchy i.e.,`<h1> / <h2> / <h3> and </p>`
- Connect the site to the company's social pages
- Add an XML sitemap
- Avoid broken links
- Use vanity/friendly URLs (human readable)
- Add a robots.txt file - [Test your robots.txt with the robots.txt Tester - Search Console Help](https://support.google.com/webmasters/answer/6062598?hl=en&sjid=16145421751025675359-AP)
- Integrate Google analytics (or alternative)
- Specify a favicon, bonus for specifying browser specific icons
- Ensure lightning fast page load time
- Avoid JavaScript errors
- Optimize assets (including minification)
- Enable and force SSL
- Specify unique titles for each page without exceeding 70 characters
- Include a meta description on each page
- Ensure there is enough content with enough relevant keywords (search engines will penalize your site if all pages are one-sentence pages)
- Leverage browser caching
- Avoid W3C markup validation errors
- Specify relevant meta tags

## Latent Semantic Indexing (LSI)

LSI (latent semantic indexing) keywords are words or phrases that are conceptually related to a target keyword. So if you wanted your page to rank for “credit cards,” then LSI keywords would be “money,” “credit score,” and “interest rate.”

Latent semantic analysis (LSA) is a mathematical method for finding conceptually related words in textual data. In other words, it’s how you find LSI keywords.

Google doesn’t use latent semantic indexing because it’s old technology. And it was developed as a method for finding results in smaller document sets—not the entire web.

[What Are LSI Keywords & Why They Don‘t Matter](https://www.semrush.com/blog/lsi-keywords/)

[What are LSI Keywords? And Do They Help With SEO?](https://backlinko.com/hub/seo/lsi)

[What are LSI keywords? How to use them in SEO](https://surferseo.com/blog/lsi-keywords-for-seo/)

[LSI Keywords: What are They and Do They Matter?](https://ahrefs.com/blog/lsi-keywords/)

## Optimize a website

Optimizing websites is an art that few are familiar with. The more the engineer is able to list off the top of their head, the more likely they are to do all of the following naturally as they code instead of having to return later.

(Also, typically a professionally constructed site should score over 75 percent when analyzed by [gtmetrix.com](https://gtmetrix.com/), which can also serve as a checklist.)

- Optimize all assets
- Place all assets on a separate, cookie-free domain. Using a CDN is best
- Avoid inline JavaScript and CSS
- Enable gzipping
- Ensure all code is minified
- Defer parsing of JavaScript
- Usesrcsetfor responsive images
- Leverage browser caching
- Reduce DNS lookups
- Avoid duplicate code
- Avoid URL redirects
- Enable HTTP keep-alive
- Serve scaled images
- Use image sprites where appropriate
- Prefer asynchronous resources
- Specify the character set at server level
- Avoid CSS@import
- Specify a cache validator
- Minimize request size
- Avoid bad requests and 404s
- Specify image dimensions
- Reduce cookie size
- Make fewer HTTP requests, i.e., load as few external resources as possible
- Avoid unnecessary images; where possible, use CSS
- Ensure no validation errors with W3C

## Urchin Tracking Module(UTM)

Urchin Tracking Module(UTM)parametersare five variants of [URL parameters](https://en.wikipedia.org/wiki/Query_string) used by marketers to track the effectiveness of online [marketing campaigns](https://en.wikipedia.org/wiki/Marketing_campaign) across traffic sources and publishing media. They were introduced by [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics)' predecessor [Urchin](https://en.wikipedia.org/wiki/Urchin_(software)) and, consequently, are supported [out-of-the-box](https://en.wikipedia.org/wiki/Out_of_the_box_(feature)) by Google Analytics. The UTM parameters in a URL identify the campaign that refers traffic to a specific website, and attributes the browser's [website session](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_session) and the sessions after that until the campaign attribution window expires to it. The parameters can be parsed by analytics tools and used to populate reports.Example URL, UTM parameters highlighted, after the question mark `(?)`:

https://www.example.com/page?utm_content=buffercf3b2&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer

| **Parameter** | **Purpose** | **Example** |
|---|---|---|
| utm_source | Identifies which site sent the traffic, and is a required parameter. Identify the advertiser, site, publication, etc. that is sending traffic to your property, for example: example, paisa_bazar, google, ns, gam. | utm_source=Google |
| utm_medium | Identifies what type of link was used, such ascost per clickor email. The advertising or marketing medium, for example: cpc, banner, email newsletter. | utm_medium=cpc |
| utm_campaign | Identifies a specific product promotion or strategic campaign. The individual campaign name, slogan, promo code, etc. for a product. | utm_campaign=spring_sale |
| utm_term | Identifies search terms. Identify paid search keywords. If you're manually tagging paid keyword campaigns, you should also use utm_term to specify the keyword. | utm_term=running+shoes |
| utm_content | Identifies what specifically was clicked to bring the user to the site, such as abanner ador atext link. It is often used for A/B testing and content-targeted ads. Used to differentiate similar content, or links within the same ad. For example, if you have two call-to-action links within the same email message, you can use utm_content and set different values for each so you can tell which version is more effective. | utm_content=logolinkor utm_content=textlink |

**Examples**

- `?utm_campaign=shanghaiupgrade_12apr23&utm_medium=social&utm_source=twitter`

https://en.wikipedia.org/wiki/UTM_parameters

https://neilpatel.com/blog/the-ultimate-guide-to-using-utm-parameters

## SiteMap

### Difference between scanned pages and add pages in sitemap

A sitemap is a file that lists the pages of a website, and provides information about the structure and organization of the content on the site. There are two types of pages that can be listed in a sitemap: scanned pages and added pages.

Scanned pages are those that have been automatically detected by a sitemap generator tool. The tool scans the website and creates a list of all the pages it finds, including the page's URL, last modification date, and other information. The sitemap generator tool uses algorithms to determine which pages are most important and should be included in the sitemap.

Added pages, on the other hand, are pages that have been manually added to the sitemap by the website owner or administrator. These pages may not have been automatically detected by the sitemap generator tool, but are still considered important and should be included in the sitemap. This allows website owners to ensure that all the important pages on their site are included in the sitemap, even if they haven't been automatically detected.

In summary, scanned pages are those that have been automatically detected by a sitemap generator tool, while added pages are those that have been manually added to the sitemap. Both types of pages are important for ensuring that a sitemap accurately reflects the structure and organization of a website's content.

[Page Indexing report - Search Console Help](https://support.google.com/webmasters/answer/7440203)

[URL Inspection Tool - Search Console Help](https://support.google.com/webmasters/answer/9012289)

[What Is a Sitemap | Google Search Central &nbsp;|&nbsp; Documentation &nbsp;|&nbsp; Google Developers](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

[Build and Submit a Sitemap Google Search Central Documentation Google Developers](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

[Sitemap Generator Tool- Free Unlimited Sitemap Generator | W3Era SEO Tools](https://www.w3era.com/tool/xml-sitemap-generator/) - upto 5000 pages

[Sitemap Generator. Create XML Sitemaps Online](https://www.mysitemapgenerator.com/) - upto 500 pages

## Canonical URL

First and foremost, before we even define a canonical tag, if there is one piece of information you take from this guide, let it be this: Canonical tags are not directives like Robots.txt file.

This means Google views canonical tags as a strong hint, but at the end of the day, it considers many signals and decides whether to honor them.

Now that we have the golden rule out of the way, let’s get into what it is!

The canonical tag came into play in 2009 as an HTML tag found in the source code to tell search engines which URL is the master version of a page. This can be leveraged to tell Google what page variation it should index for users.

A canonical tag is the HTML tag itself on a page, but the "canonical" - now, that’s a bit different.

There are two simple ways to define the canonical variations: a user-declared canonical and a Google-declared canonical.

- **User-declared canonical:** This is precisely what it says; it’s the canonical specified in the canonical tag.
- **Google-declared canonical:** This is the URL Google chooses to honor as the canonical.

### How Canonical Tags Can Be Helpful For SEO

1. You Choose The Canonical Tag
2. Duplicate Content
3. Google Uses Canonicals As Its Main Source
4. May Help With Crawl Budget
5. Consolidate Link Signals
6. Content Syndication

[What is a Canonical URL? A Guide for SEO](https://www.searchenginejournal.com/what-is-a-canonical-url/469636/#close)

## Deep Linking vs Deferred deep linking

While deep linking is used to re-engage existing customers who have the app, deferred deep linking is used to encourage non-users to download the app.

A deep link is a mobile message that takes a user who has the client’s app to a specific page in the app, rather than going immediately to the app’s default home page. Deferred deep linking is a form of deep linking that is deferred until someone downloads and opens the app. It allows users to go directly to the location they desire within an app. Deferred deep linking is used when a customer does not have the app installed. When a customer interacts with a promotion that includes a deferred deep link, the link will direct them to the app store to download the app. When the customer opens the app, it will go to the customer’s desired page within the app.

[What is Deferred Deep Linking and How does It Work | Optimove](https://www.optimove.com/resources/learning-center/deferred-deep-linking)

## PDP SEO

https://ecommercetuners.com/seo-for-ecommerce-product-detail-pages

## AMP - Accelerated Mobile Pages

AMP is a web component framework that you can use to easily create user-first websites, stories, emails, and ads.

[AMP on Google  |  Google for Developers](https://developers.google.com/amp)

## Subdomain vs subdirectory

Use subdirectory wherever possible

https://www.semrush.com/blog/subdomain-vs-subdirectory

### Trailing Slash

Different content on slash and non-slash URLs is okay for Google, but often is less ideal for users

- Trailing slashes after the domain name don’t matter
- [Should You Have a Trailing Slash at the End of URLs?](https://ahrefs.com/blog/trailing-slash/)
- [Trailing Slashes and SEO - Best Practice Guide | Safari Digital](https://www.safaridigital.com.au/blog/trailing-slash-seo/)
- [GitHub - slorber/trailing-slash-guide: Understand and fix your static website trailing slash issues!](https://github.com/slorber/trailing-slash-guide)
- [To slash or not to slash  |  Google Search Central Blog  |  Google Developers](https://developers.google.com/search/blog/2010/04/to-slash-or-not-to-slash)

## Learning / Courses

- [The 7 Best SEO Courses & Certifications in 2024](https://backlinko.com/seo-certification-guide)

## References

- [Google Crawlers / Crawling](frontend/frontend-intro/google-crawlers-crawling.md)
- https://www.toptal.com/full-stack/interview-questions
- https://neilpatel.com/blog/10-advanced-seo-techniques-thatll-double-your-search-traffic
- https://neilpatel.com/blog/google-ranking
- https://neilpatel.com/blog/get-your-mba-in-seo-with-these-10-guides-and-5-courses
- https://neilpatel.com/blog/seo-for-ecommerce-websites
- https://neilpatel.com/blog/seo-templates
- [React SEO Best Practices and Strategies | Toptal](https://www.toptal.com/react/react-seo-best-practices)
- [I Used ChatGPT to Rank #1 in Google (in One Hour) - YouTube](https://www.youtube.com/watch?v=dHW-izBq2-I)
- [Free SEO Training Series](https://www.youtube.com/playlist?list=PLV7hU9BBDbaQ-j5ZeICBG7dUtOn48Zoaq)
