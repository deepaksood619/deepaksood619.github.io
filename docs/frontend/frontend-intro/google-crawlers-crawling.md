# Google Crawlers / Crawling

[How Google Search crawls pages - YouTube](https://www.youtube.com/watch?v=JuK7NnfyEuc)

- Google bot
- Sitemaps

## Web Crawlers

### Use Case

- Search engine
- Copywrite violation detection
- Keyword based finding
    - New analysis (share market)
- Web malware detection
- Web analytics
- Data science data crawlers

### Features

- Politeness / Crawl rate
- DNS query
- Distributed crawling
- Priority crawling
- Duplicate detection
    - Bruteforce
    - Hashing (MD5-SHA1)
    - MinHash
    - SimHash (Google uses this)
    - Fuzzy search
    - Latent semantic indexing
    - Standard boolean model

[System Design distributed web crawler to crawl Billions of web pages | web crawler system design](https://www.youtube.com/watch?v=BKZxZwUgL3Y)

## Crawl rate

Crawl rate is the number of requests a [search engine crawler](https://www.lumar.io/learn/seo/crawlability/search-engine-crawling/) makes to a website in a day and was introduced to reduce server overload. Due to sophisticated algorithms, Google is able to determine and set an optimal crawl budget for individual sites, this is covered within our SEO Office Hours Notes along with further best practice advice.

==If Your Average Server Response Time Goes Up Significantly Because of a CDN Implementation, Google Will Crawl Your Site Less.== This is because Google's crawl rate is based on average response time and server errors. A longer response time can mean that Googlebot is unable to crawl as much of a site as it would ideally like.

Here are some things you can try to increase your site's crawl rate:

- Add new content regularly
- Improve your site's load time
- Include sitemaps
- Improve server response time
- Avoid duplicate content
- Block unwanted pages via Robots
- Optimize images and videos

## Crawl Budget

[Crawl Budget Management For Large Sites | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget)

Crawl budget is determined by two main elements: _crawl capacity limit_ and _crawl demand_.

### Crawl capacity limit

Googlebot wants to crawl your site without overwhelming your servers. To prevent this, Googlebot calculates a _crawl capacity limit_, which is the maximum number of simultaneous parallel connections that Googlebot can use to crawl a site, as well as the time delay between fetches. This is calculated to provide coverage of all your important content without overloading your servers.

The crawl capacity limit can go up and down based on a few factors:

- **Crawl health:** If the site responds quickly for a while, the limit goes up, meaning more connections can be used to crawl. If the site slows down or responds with server errors, the limit goes down and Googlebot crawls less.
- **Google's crawling limits**: Google has a lot of machines, but not infinite machines. We still need to make choices with the resources that we have.

### Crawl demand

Google typically spends as much time as necessary crawling a site, given its size, update frequency, page quality, and relevance, compared to other sites.

The factors that play a significant role in determining crawl demand are:

- **Perceived inventory:** Without guidance from you, Googlebot will try to crawl all or most of the URLs that it knows about on your site. If many of these URLs are duplicates, or you don't want them crawled for some other reason (removed, unimportant, and so on), this wastes a lot of Google crawling time on your site. This is the factor that you can positively control the most.
- **Popularity:** URLs that are more popular on the Internet tend to be crawled more often to keep them fresher in our index.
- **Staleness:** Our systems want to recrawl documents frequently enough to pick up any changes.

Additionally, site-wide events like site moves may trigger an increase in crawl demand in order to reindex the content under the new URLs.

[Google Crawling and Indexing | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/crawling-indexing)

[Google Crawler (User Agent) Overview | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)

## Links

- [SEO / ASO](frontend/frontend-intro/seo-aso.md)
- [Google Search Central - YouTube](https://www.youtube.com/@GoogleSearchCentral)
- [Ahrefs - YouTube](https://www.youtube.com/@AhrefsCom)
- [How Search Works - YouTube](https://www.youtube.com/playlist?list=PLKoqnv2vTMUN83JWBNM6MoBuBcyqhFNY3)