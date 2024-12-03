# Docusaurus

```bash
npx create-docusaurus@latest my-website classic

cd my-website

npm start

# npx docusaurus start

# http://localhost:3000

# Search
npm install --save @easyops-cn/docusaurus-search-local
# config - https://github.com/easyops-cn/docusaurus-search-local

# https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa
npm install --save @docusaurus/plugin-pwa

npm install --save @docusaurus/plugin-google-gtag

npm install --save @docusaurus/plugin-ideal-image

# Build and serve
npm run build
npm run serve

# Publishes the website to GitHub pages
npm deploy
```

https://docusaurus.io/docs

[Architecture | Docusaurus](https://docusaurus.io/docs/next/advanced/architecture)

https://wiki.nikiv.dev/

[Docusaurus authentication with Firebase | by Thomasdevshare | Medium](https://medium.com/@thomasdevshare/docusaurus-authentication-with-firebase-c824da24bc51)

### Extensions

[Swizzling | Docusaurus](https://docusaurus.io/docs/swizzling)

**swizzling** - allows **deeper site customizations**

swizzling permits to **swap a theme component with your own implementation**, and it comes in 2 patterns

- [**Ejecting**](https://docusaurus.io/docs/swizzling#ejecting): creates a **copy** of the original theme component, which you can fully **customize**
- [**Wrapping**](https://docusaurus.io/docs/swizzling#wrapping): creates a **wrapper** around the original theme component, which you can **enhance**

### Plugins

- [📦 plugin-client-redirects | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects)
- [📦 plugin-ideal-image | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)
- [📦 plugin-google-gtag | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)
- [📦 plugin-content-docs | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)
- [Serving Optimized Docusaurus Images with Rehype, Markdown and Cloudinary - DevJams Episode #21 - YouTube](https://www.youtube.com/watch?v=9oBWMDK0Av4)

### Upgrading from v2 to v3

[Announcing Docusaurus 3.0 | Docusaurus](https://docusaurus.io/blog/releases/3.0)

[Upgrading to Docusaurus v3 | Docusaurus](https://docusaurus.io/docs/migration/v3)

```bash
# check if all files compile successfully
npx docusaurus-mdx-checker
```

## Search

[Search | Docusaurus](https://docusaurus.io/docs/search)

### Local Search

```json
themes: [
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        ({
            hashed: true,
            docsRouteBasePath: '/',
            highlightSearchTermsOnTargetPage: true,
        }),
    ],
],
```

### Algolia

[Run your own | DocSearch by Algolia](https://docsearch.algolia.com/docs/legacy/run-your-own/)

```json
algolia: {
    // The application ID provided by Algolia
    appId: 'X3OY8NGHVH',

    // Public API key: it is safe to commit it
    apiKey: '55231a2d373a93253025c5b165065e15',

    indexName: 'deepaksood619io',

    // Optional: see doc section below
    contextualSearch: true,

    // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    externalUrlRegex: 'external\\.com|domain\\.com',

    // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
    },

    // Optional: Algolia search parameters
    searchParameters: {},

    // Optional: path for search page that enabled by default (`false` to disable it)
    searchPagePath: 'search',

    //... other Algolia params
},
```

[Crawler Admin Console](https://crawler.algolia.com/)
