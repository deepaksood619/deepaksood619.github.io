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
- [GitHub - unclecode/crawl4ai: 🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & Scraper. Don't be shy, join here: https://discord.gg/jP8KfhDhyN](https://github.com/unclecode/crawl4ai)
- [Overview - Reducto API](https://docs.reducto.ai/overview)
