# Web Scraping

Web Scraping is a technique in which a computer program extracts data from human-readable output coming from websites.

### Download full website

`wget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://example.org`

[Website Copier | Download Sites | Website Ripper - Tools Bug](https://www.toolsbug.com/website-copier-online.php)

### lxml.etree

theXPath - language for XML queries

### beautifulsoup

- super short learning curve
- two function api
    - parse
    - search (find_all)

```python
from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, 'html.parser')

mydivs = soup.find_all("div", {"class": "stylelistrow"})
print(i, soup.body.div.div)
```

### Selenium (for javascript)

### Headless browser

- [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README)
- [Zombie](https://github.com/assaf/zombie)
- [slimerjs](http://slimerjs.org/)
- [puppeteer](https://github.com/GoogleChrome/puppeteer)

## Proxies

- [Best Web Scraping Toolkit - ZenRows](https://www.zenrows.com/)
- [Bright Data - All in One Platform for Proxies and Web Scraping](https://brightdata.com/)

## Links

- https://www.toptal.com/python/web-scraping-with-python
- https://www.freecodecamp.org/news/how-to-scrape-websites-with-python

## AI Tools

- [Scrape and Monitor Data from Any Website with No Code](https://www.browse.ai/)
- [GitHub - laramies/theHarvester: E-mails, subdomains and names Harvester - OSINT](https://github.com/laramies/theHarvester)
- [Overview - Reducto API](https://docs.reducto.ai/overview)
- [GitHub - mendableai/firecrawl: 🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.](https://github.com/mendableai/firecrawl) (37K Stars)
- [GitHub - ScrapeGraphAI/Scrapegraph-ai: Python scraper based on AI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) (19.3K Stars)
- [GitHub - scrapy/scrapy: Scrapy, a fast high-level web crawling & scraping framework for Python.](https://github.com/scrapy/scrapy) (55K Stars)
- [Beautiful Soup Documentation — Beautiful Soup 4.13.0 documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [GitHub - unclecode/crawl4ai: 🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & Scraper. Don't be shy, join here: https://discord.gg/jP8KfhDhyN](https://github.com/unclecode/crawl4ai) (40.8K Stars)
- [GitHub - microsoft/markitdown: Python tool for converting files and office documents to Markdown.](https://github.com/microsoft/markitdown) (61.4K Stars)
- [GitHub - supermemoryai/markdowner: A fast tool to convert any website into LLM-ready markdown data. Built by https://supermemory.ai](https://github.com/supermemoryai/markdowner) (1.5K Stars)
- [GitHub - mendableai/firegeo: 🔥 GEO-powered SaaS starter built with Firecrawl for brand monitoring, auth, and billing](https://github.com/mendableai/firegeo)
- [How to Scrape Data From Any Website Using Deepseek - YouTube](https://www.youtube.com/watch?v=s8ECuA_c1SU)
