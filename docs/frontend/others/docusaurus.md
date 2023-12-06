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

### Extensions

[Swizzling | Docusaurus](https://docusaurus.io/docs/swizzling)

**swizzling** - allows **deeper site customizations**

swizzling permits to **swap a theme component with your own implementation**, and it comes in 2 patterns:

- [**Ejecting**](https://docusaurus.io/docs/swizzling#ejecting): creates a **copy** of the original theme component, which you can fully **customize**
- [**Wrapping**](https://docusaurus.io/docs/swizzling#wrapping): creates a **wrapper** around the original theme component, which you can **enhance**

### Plugins

[📦 plugin-client-redirects | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects)

[📦 plugin-ideal-image | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)

[📦 plugin-google-gtag | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)

[📦 plugin-content-docs | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)

### Upgrading from v2 to v3

```bash
# check if all files compile successfully
npx docusaurus-mdx-checker
```