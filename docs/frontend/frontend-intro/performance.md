# Performance

### Steps to build a hyper-light website

1. **Identify** the most active page on your website
2. **Build** a new version of that page from scratch with a singular focus on optimization
3. **Assemble** all the HTML, CSS and JS into a single "hyper-light" HTML page
4. **Serve** the hyper-light page behind a CDN with compression and HTTP/2 pipelining
5. **Measure** both the original page, uncached, and the hyper-light page
6. **Analyze** the results

### Things you want to KEEP doing

- Server real content, preferably dynamically
- Responsive layouts
- Responsive images
- Sprites
- SVG graphics
- Accessibility

### Things you want to STOP doing

- Ads and social media trackers
- CMS integrations
- JS libraries
- CSS layouts via frameworks
- Lazy loading
- JS and CSS compilation
- Custom web fonts

[Hyper Lightweight Websites](https://www.youtube.com/watch?v=VUwyYhNO63I)

## 8 tips to boost frontend performance

1. **Compression** - Compress files and minimize data size before transmission to reduce network load.
2. **Selective Rendering/Windowing** - Display only visible elements to optimize rendering performance. For example, in a dynamic list, only render visible items.
3. **Modular Architecture with Code Splitting** - Split a bigger application bundle into multiple smaller bundles for efficient loading.
4. **Priority-Based Loading** - Prioritize essential resources and visible (or above-the-fold) content for a better user experience.
5. **Pre-loading** - Fetch resources in advance before they are requested to improve loading speed.
6. **Tree Shaking or Dead Code Removal** - Optimize the final JS bundle by removing dead code that will never be used.
7. **Pre-fetching** - Proactively fetch or cache resources that are likely to be needed soon.
8. **Dynamic Imports** - Load code modules dynamically based on user actions to optimize the initial loading times.

![Frontend Performance Cheatsheet](../../media/Pasted%20image%2020240605180411.jpg)

[Post from ByteByteGo - YouTube](https://www.youtube.com/channel/UCZgt6AzoyjslHTC9dz0UoTw/community?lb=Ugkxb9-E5Z6uubpOMMwxhQQ1NT4RTYC-yP_u)
