# Gatsby

Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

Gatsby is a modern web framework for blazing fast websites.

- Go Beyond Static Websites.Get all the benefits of static websites with none of the limitations. Gatsby sites are fully functional React apps, so you can create high-quality, dynamic web apps, from blogs to e-commerce sites to user dashboards.
- Choose your Rendering Options.You can choose alternative [rendering options](https://gatsbyjs.com/docs/conceptual/rendering-options/), namely Deferred Static Generation (DSG) and Server-Side Rendering (SSR), in addition to Static Site Generation (SSG) - on a per-page basis. This type of granular control allows you to optimize for performance and productivity without sacrificing one for the other.
- Use a Modern Stack for Every Site.No matter where the data comes from, Gatsby sites are built using React and GraphQL. Build a uniform workflow for you and your team, regardless of whether the data is coming from the same backend.
- Load Data From Anywhere.Gatsby pulls in data from any data source, whether it's Markdown files, a headless CMS like Contentful or WordPress, or a REST or GraphQL API. Use source plugins to load your data, then develop using Gatsby's uniform GraphQL interface.
- Performance Is Baked In.Ace your performance audits by default. Gatsby automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources, and more to ensure your site is fast - no manual tuning required.

- Better SEO
- File System Routing
- Data fetching from local files, during build time
- Plugin system
- GraphQL for data

```bash
# installation
npm install -g gatsby-cli
gatsby --version

# using npm
npm init gatsby
npm run develop

# setting up gatsby via gatsby cli
gatsby new
gatsby develop
gatsby develop -H 0.0.0.0 -p 8001

gatsby build
gatsby build --prefix-paths
```

https://www.gatsbyjs.org

https://github.com/gatsbyjs/gatsby

### Plugins

Configure the plugin in your site’s gatsby-config.js file.

```bash
npm install plugin-name

npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
```

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    {
      resolve: "plugin-name",
      options: {
        // Check the plugin README for what options go in here
      }
    },
  ]
}
```

#### Plugin - `gatsby-plugin-image`

```js
import { StaticImage } from 'gatsby-plugin-image'

<StaticImage
alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
/>
```

#### Plugin - `gatsby-plugin-mdx`

gatsby-plugin-mdx is a transformer plugin that lets you use MDX in your site. With MDX, you can create text content with Markdown formatting and embedded React components.

https://www.gatsbyjs.com/plugins

### Querying data

Gatsby has a powerful feature called the data layer that you can use to pull data into your site from anywhere. Want to keep your blog posts in WordPress, your store products in Shopify, and your user data in Airtable? No problem! With Gatsby’s data layer, you can combine data from multiple sources, which lets you choose the best platform for each type of data.

Gatsby’s data layer is powered by a technology called GraphQL. GraphQL is a query language with a special syntax that lets you ask for the data you need inside a component.

https://www.gatsbyjs.com/docs/tutorial/part-4

### Themes

https://gatsby-theme-document.netlify.app

https://github.com/codebushi/gatsby-theme-document

```bash
npm install gatsby-theme-primer-wiki

gatsby new document-site https://github.com/codebushi/gatsby-theme-document-example
cd document-site
npm install --force
gatsby develop
```

https://rocketdocs.gatsbyjs.io/usage/using-yaml-files

## Optimizations

https://www.gatsbyjs.com/docs/how-to/performance/improving-build-performance/#query-only-needed-fields-in-createpages
