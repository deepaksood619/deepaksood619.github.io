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

**swizzling** - allows **deeper site customizations**

swizzling permits to **swap a theme component with your own implementation**, and it comes in 2 patterns

- [**Ejecting**](https://docusaurus.io/docs/swizzling#ejecting): creates a **copy** of the original theme component, which you can fully **customize**
- [**Wrapping**](https://docusaurus.io/docs/swizzling#wrapping): creates a **wrapper** around the original theme component, which you can **enhance**

### Plugins

- [📦 plugin-client-redirects | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects)
- [📦 plugin-ideal-image | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)
- [📦 plugin-google-gtag | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)
- [📦 plugin-content-docs | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)
- [Serving Optimized Docusaurus Images with Rehype, Markdown and Cloudinary - DevJams Episode #21 - YouTube](https://www.youtube.com/watch?v=9oBWMDK0Av4)
- [Docusaurus](https://docusaurus.io/docs/api/themes/@docusaurus/theme-live-codeblock)
- [GitHub - Arsero/docusaurus-graph: The Docusaurus GraphView Plugin is an open source plugin designed to generate a graph view from your Docusaurus documentation files.](https://github.com/Arsero/docusaurus-graph)

### Upgrading from v2 to v3

[Announcing Docusaurus 3.0 | Docusaurus](https://docusaurus.io/blog/releases/3.0)

[Upgrading to Docusaurus v3 | Docusaurus](https://docusaurus.io/docs/migration/v3)

```bash
# check if all files compile successfully
npx docusaurus-mdx-checker
```

### Upgrading minor versions

To upgrade a minor version in Docusaurus v3, simply open your `package.json` file, locate the `"@docusaurus/core"` dependency, and change the minor version number to the desired one, then run `npm install` or `yarn install` to install the updated version and its dependencies; ensure all "@docusaurus" packages are updated to the same minor version for consistency.

```bash
npm i @docusaurus/core@latest @docusaurus/plugin-google-gtag@latest @docusaurus/plugin-ideal-image@latest @docusaurus/plugin-pwa@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/types@latest
```

## Search

[Search | Docusaurus](https://docusaurus.io/docs/search)

### Local Search (not compatible with v3)

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

[Releases · cmfcmf/docusaurus-search-local](https://github.com/cmfcmf/docusaurus-search-local/releases)

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

## CMS

- [I was looking for a Docusaurus-friendly CMS : r/Docusaurus](https://www.reddit.com/r/Docusaurus/comments/1geqz1q/i_was_looking_for_a_docusaurusfriendly_cms/)
- [A minimal CMS for Docusaurus | Spinal](https://spinalcms.com/cms-for-docusaurus/)
- [Docusaurus | Decap CMS | Open-Source Content Management System](https://decapcms.org/docs/docusaurus/)
- [Gitten - Your Git Assistant](https://www.insightest.app/apps/gitten/#/)
- [Docusaurus](https://docusaurus.io/feature-requests/p/make-content-editing-easier)

## Links

- [Docusaurus](https://docusaurus.io/docs/blog)
- [GitHub - webbertakken/awesome-docusaurus: A curated list of awesome Docusaurus resources.](https://github.com/webbertakken/awesome-docusaurus)
- [Docusaurus](https://docusaurus.io/docs/seo)
- [johnnyreilly | johnnyreilly](https://johnnyreilly.com/)
