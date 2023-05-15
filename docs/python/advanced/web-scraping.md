# Web Scraping

Web Scraping is a technique in which a computer program extracts data from human-readable output coming from websites.

1. lxml.etree

   - theXPath - language for XML queries

2. beautifulsoup

   - super short learning curve

   - two function api

       - parse

       - search (find_all)

from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, 'html.parser')

mydivs = soup.find_all("div", {"class": "stylelistrow"})
print(i, soup.body.div.div)

3. Selenium (for javascript)

4. Headless browser
    - [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README)
    - [Zombie](https://github.com/assaf/zombie)
    - [slimerjs](http://slimerjs.org/)
    - [puppeteer](https://github.com/GoogleChrome/puppeteer)

<https://www.toptal.com/python/web-scraping-with-python>

<https://www.freecodecamp.org/news/how-to-scrape-websites-with-python>

## AI Tools

[Scrape and Monitor Data from Any Website with No Code](https://www.browse.ai/)
