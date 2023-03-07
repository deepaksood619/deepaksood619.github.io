# Web Vitals

<https://web.dev/vitals>

Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

## Largest Contentful Paint (LCP)

Measures **loadingperformance**. To provide a good user experience, LCP should occur within2.5 secondsof when the page first starts loading.

## First Input Delay (FID)

Measures **interactivity**. To provide a good user experience, pages should have a FID of less than100 milliseconds.

## Cumulative Layout Shift (CLS)

Measures**visual stability**. To provide a good user experience, pages should maintain a CLS of less than0.1.

Cumulative Layout Shift (CLS) is an important, user-centric metric for measuring [visual stability](https://web.dev/user-centric-performance-metrics/#types-of-metrics) because it helps quantify how often users experience unexpected layout shifts - a low CLS helps ensure that the page is [delightful](https://web.dev/user-centric-performance-metrics/#questions).

<https://web.dev/cls>

## Paints

## Server Side Rendering

First Paint

First Meaningful paint

First contentful paint

First interaction

## Time To First Byte (TTFB)

Time to first byte(TTFB) is a measurement used as an indication of the responsiveness of a [webserver](https://en.wikipedia.org/wiki/Webserver) or other [network](https://en.wikipedia.org/wiki/Computer_network) resource.

TTFB measures the duration from the user or client making an HTTP request to the first byte of the page being received by the client's browser. This time is made up of the socket connection time, the time taken to send the HTTP request, and the time taken to get the first byte of the page. Although sometimes misunderstood as a post-DNS calculation, the original calculation of TTFB in networking always includes [network latency](https://en.wikipedia.org/wiki/Network_latency) in measuring the time it takes for a resource to begin loading. Often, a smaller (faster) TTFB size is seen as a benchmark of a well-configured server application. For example, a lower time to first byte could point to fewer dynamic calculations being performed by the [webserver](https://en.wikipedia.org/wiki/Dynamic_web_page), although this is often due to caching at either the DNS, server, or application level. More commonly, a very low TTFB is observed with statically served [web pages](https://en.wikipedia.org/wiki/Web_page), while larger TTFB is often seen with larger, dynamic data requests being pulled from a [database](https://en.wikipedia.org/wiki/Database).

<https://en.wikipedia.org/wiki/Time_to_first_byte>

## Timing breakdown phases explained (Timing Tab Chrome Dev Tools)

- **Queueing:** The browser queues requests when:
  - There are higher priority requests.
  - There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
  - The browser is briefly allocating space in the disk cache
- **Stalled:** The request could be stalled for any of the reasons described inQueueing.
- **DNS Lookup:** The browser is resolving the request's IP address.
- **Proxy negotiation:** The browser is negotiating the request with a [proxy server](https://en.wikipedia.org/wiki/Proxy_server).
- **Request sent:** The request is being sent.
- **ServiceWorker Preparation:** The browser is starting up the service worker.
- **Request to ServiceWorker:** The request is being sent to the service worker.
- **Waiting (TTFB):** The browser is waiting for the first byte of a response. TTFB stands for Time To First Byte. This timing includes 1 round trip of latency and the time the server took to prepare the response.
- **Content Download:** The browser is receiving the response.
- **Receiving Push:** The browser is receiving data for this response via HTTP/2 Server Push.
- **Reading Push:** The browser is reading the local data previously received.

<https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation>

## Chrome Dev Tools

`cmd + opt + i` - Chrome Inspector

## cmd + shift + p - Commands pallet

screenshot - For capture of screen

```js
> : For commands

>: Disable Javascript
```

<https://developer.chrome.com/docs/devtools/javascript/disable>

<https://dev.to/yashints/chrome-devtools-can-do-that-4a8l>

<https://www.freecodecamp.org/news/learn-how-to-use-the-chrome-devtools-to-troubleshoot-websites>
