# UTM and SiteMap

## Urchin Tracking Module(UTM)

Urchin Tracking Module(UTM) parameters are five variants of [URL parameters](https://en.wikipedia.org/wiki/Query_string) used by marketers to track the effectiveness of online [marketing campaigns](https://en.wikipedia.org/wiki/Marketing_campaign) across traffic sources and publishing media. They were introduced by [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics)' predecessor [Urchin](https://en.wikipedia.org/wiki/Urchin_(software)) and, consequently, are supported [out-of-the-box](https://en.wikipedia.org/wiki/Out_of_the_box_(feature)) by Google Analytics. The UTM parameters in a URL identify the campaign that refers traffic to a specific website, and attributes the browser's [website session](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_session) and the sessions after that until the campaign attribution window expires to it. The parameters can be parsed by analytics tools and used to populate reports.Example URL, UTM parameters highlighted, after the question mark `(?)`:

https://www.example.com/page?utm_content=buffercf3b2&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer

| **Parameter** | **Purpose** | **Example** |
|---|---|---|
| utm_source | Identifies which site sent the traffic, and is a required parameter. Identify the advertiser, site, publication, etc. that is sending traffic to your property, for example: example, paisa_bazar, google, ns, gam. | utm_source=Google |
| utm_medium | Identifies what type of link was used, such ascost per clickor email. The advertising or marketing medium, for example: cpc, banner, email newsletter. | utm_medium=cpc |
| utm_campaign | Identifies a specific product promotion or strategic campaign. The individual campaign name, slogan, promo code, etc. for a product. | utm_campaign=spring_sale |
| utm_term | Identifies search terms. Identify paid search keywords. If you're manually tagging paid keyword campaigns, you should also use utm_term to specify the keyword. | utm_term=running+shoes |
| utm_content | Identifies what specifically was clicked to bring the user to the site, such as abanner ador atext link. It is often used for A/B testing and content-targeted ads. Used to differentiate similar content, or links within the same ad. For example, if you have two call-to-action links within the same email message, you can use utm_content and set different values for each so you can tell which version is more effective. | utm_content=logolinkor utm_content=textlink |

**Examples**

`?utm_campaign=shanghaiupgrade_12apr23&utm_medium=social&utm_source=twitter`

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
