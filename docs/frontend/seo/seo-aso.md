# SEO / ASO

- SEO - Search Engine Optimization
- SMO - Social Media Optimization
- SEM - Search Engine Marketing
- ASO - App Store Optimization
- SEM - Search Engine Marketing

### SEM - Search Engine Marketing

Search engine marketing is the practice of marketing a business using paid advertisements that appear on search engine results pages (or [SERPs](https://www.wordstream.com/serp)). Advertisers bid on keywords that users of services such as Google and Bing might enter when looking for certain products or services, which gives the advertiser the opportunity for their ads to appear alongside results for those search queries.

https://blog.hubspot.com/marketing/search-engine-marketing

## Search Engine Results Page (SERP)

https://www.wordstream.com/serp

[Review Snippet (Review, AggregateRating) Structured Data | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

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

[Mark Up FAQs with Structured Data | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

- A Frequently Asked Question (FAQ) page contains a list of questions and answers pertaining to a particular topic. Properly marked up FAQ pages may be eligible to have a rich result on Search and an Action on the Google Assistant, which can help your site reach the right users.

[Rich Results Test - Google Search Console](https://search.google.com/test/rich-results)

[Schema Markup validator](https://validator.schema.org/)

[Dataset Structured Data \| Google Search Central  \|  Documentation  \|  Google for Developers](https://developers.google.com/search/docs/appearance/structured-data/dataset)

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

LSI (latent semantic indexing) keywords are words or phrases that are conceptually related to a target keyword. So if you wanted your page to rank for "credit cards," then LSI keywords would be "money," "credit score," and "interest rate."

Latent semantic analysis (LSA) is a mathematical method for finding conceptually related words in textual data. In other words, it’s how you find LSI keywords.

Google doesn’t use latent semantic indexing because it’s old technology. And it was developed as a method for finding results in smaller document sets—not the entire web.

[What Are LSI Keywords & Why They Don‘t Matter](https://www.semrush.com/blog/lsi-keywords/)

[What are LSI Keywords? And Do They Help With SEO?](https://backlinko.com/hub/seo/lsi)

[What are LSI keywords? How to use them in SEO](https://surferseo.com/blog/lsi-keywords-for-seo/)

[LSI Keywords: What are They and Do They Matter?](https://ahrefs.com/blog/lsi-keywords/)

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

### Links

- [AMP on Google  |  Google for Developers](https://developers.google.com/amp)
- [Accelerated Mobile Pages – Index](https://wilsonmar.github.io/accelerated-mobile-pages/)
- [AMP Websites Examples - amp.dev](https://amp.dev/documentation/examples/)
- [Intro to AMP (Accelerated Mobile Pages) - YouTube](https://www.youtube.com/watch?v=lBTCB7yLs8Y)
- [AMP: Accelerated Mobile Pages with Paul Bakaus - YouTube](https://www.youtube.com/watch?v=SOx1XfOjJPI)
- [How AMP achieves its speed - Google I/O 2016 - YouTube](https://www.youtube.com/watch?v=cfekj564rs0)

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

## Google Search Algorithms

- [Moz - Google Algorithm Update History](https://moz.com/google-algorithm-change)

## Learning / Courses

- [The 7 Best SEO Courses & Certifications in 2024](https://backlinko.com/seo-certification-guide)
- [Beginner's Guide to SEO (Search Engine Optimization) - Moz](https://moz.com/beginners-guide-to-seo)
- [GitHub - bmpi-dev/awesome-seo: Google SEO Research and Web Traffic Monetization](https://github.com/bmpi-dev/awesome-seo)

## References

- [Google Crawlers / Crawling](frontend/seo/google-crawlers-crawling.md)
- [Web Vitals](frontend/seo/core-web-vitals.md)
- https://www.toptal.com/full-stack/interview-questions
- https://neilpatel.com/blog/10-advanced-seo-techniques-thatll-double-your-search-traffic
- https://neilpatel.com/blog/google-ranking
- https://neilpatel.com/blog/get-your-mba-in-seo-with-these-10-guides-and-5-courses
- https://neilpatel.com/blog/seo-for-ecommerce-websites
- https://neilpatel.com/blog/seo-templates
- [React SEO Best Practices and Strategies | Toptal](https://www.toptal.com/react/react-seo-best-practices)
- [I Used ChatGPT to Rank #1 in Google (in One Hour) - YouTube](https://www.youtube.com/watch?v=dHW-izBq2-I)
- [Free SEO Training Series](https://www.youtube.com/playlist?list=PLV7hU9BBDbaQ-j5ZeICBG7dUtOn48Zoaq)
- [How to avoid duplicate content - YouTube](https://www.youtube.com/watch?v=VQ0CW1fS2Og)
