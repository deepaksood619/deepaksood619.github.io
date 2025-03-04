# JAMstack / CMS

Modern Web-development architecture based on Client-side JavaScript, resuable APIs and prebuild Markup

When we talk about "The Stack," we no longer talk about operating systems, specific web servers, backend programming languages, or databases.

The JAMstack is not about specific technologies. It's a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.

The JAMstack allows people to create websites that are simpler, faster, and more secure than other web development methods. Sites created with the JAMstack are delivered by pre-rendering files that are served directly from a CDN, removing the requirement to manage or run web servers.

- J - client-side JavaScript
- A - reusable API
- M - prebuild Markup
- No restriction on framework or library
- Websites are served as static html files generated from source files, such as markdown using a static side generator like Gatsby
- High performance, generated at deploy time
- Cheaper and easy to scale
- Easy to deploy (Netlify)

https://www.freecodecamp.org/news/jamstack-full-course

## Digital Experience Platform (DXP)

A digital experience platform (DXP) is an integrated set of core technologies that support the composition, management, delivery and optimization of contextualized digital experiences.

[https://www.bloomreach.com/en/blog/2018/01/what-is-digital-experience-platform-dxp.html#](https://www.bloomreach.com/en/blog/2018/01/what-is-digital-experience-platform-dxp.html)

## Web Content Mangement (WCM)

## Content Management System (CMS)

A CMS is used to add content to your website/application. It is great for clients to be able to update their own content

- Tradional CMS - Wordpress, Drupal, Keystone, Enduro
- Headless CMS - Contentful, Prismic.io, Sanity, Strapi

https://www.wpbeginner.com/showcase/best-cms-platforms-compared

## Headless CMS - Strapi

https://strapi.io

DesignAPIs fast, manage content easily

Strapi is the leading open-source headless CMS. It's 100% JS, fully customizable and developer-first

Strapi is a free and open-source headless CMS delivering your content anywhere you need.

- **Keep control over your data.** With Strapi, you know where your data is stored, and you keep full control at all times.
- **Self-hosted.** You can host and scale Strapi projects the way you want. You can choose any hosting platform you want: AWS, Render, Netlify, Heroku, a VPS, or a dedicated server. You can scale as you grow, 100% independent.
- **Database agnostic.** Strapi works with SQL databases. You can choose the database you prefer: PostgreSQL, MySQL, MariaDB, and SQLite.
- **Customizable.** You can quickly build your logic by fully customizing APIs, routes, or plugins to fit your needs perfectly.

### Features

- Modern Admin Panel:Elegant, entirely customizable and a fully extensible admin panel.
- Secure by default:Reusable policies, CORS, CSP, P3P, Xframe, XSS, and more.
- Plugins Oriented:Install the auth system, content management, custom plugins, and more, in seconds.
- Blazing Fast:Built on top of Node.js, Strapi delivers amazing performance.
- Front-end Agnostic:Use any front-end framework (React, Vue, Angular, etc.), mobile apps or even IoT.
- Powerful CLI:Scaffold projects and APIs on the fly.
- SQL databases:Works with PostgreSQL, MySQL, MariaDB, and SQLite.

### Strapi v4 - [Announcing Strapi v4](https://www.youtube.com/watch?v=qWKdF8N8LQU&list=PL7Q0DQYATmvjJyxrLw0xCOKwjv8Bh7yLx)

- https://design-system.strapi.io
- https://design-system-alpha.vercel.app
- https://github.com/strapi/strapi
- https://github.com/strapi/strapi-starter-next-corporate
- https://strapi.io/starters
- https://strapi.io/blog/user-authentication-in-next-js-with-strapi
- https://strapi.io/blog/how-the-strapi-marketing-team-uses-strapi
- https://strapi.io/showcases
- https://itnext.io/5-things-i-love-about-strapi-a-node-js-headless-cms-700b4fec544b
- [Strapi.js Crash Course | Headless CMS](https://www.youtube.com/watch?v=6FnwAbd2SDY)
- [Strapi CMS for content managers](https://www.youtube.com/watch?v=tbFmke56_UA&list=PL7Q0DQYATmvhRKC5UPPKHr9pFrdiGGgME)
- https://strapi.io/blog/virtual-event-starter-template-vercel-strapiconf
- https://strapi.io/blog/how-to-build-a-crud-app-with-react-and-a-headless-cms
- https://marmelab.com/blog/2020/06/18/build-an-application-in-fiften-minutes-using-strapijs.html
- react-admin strapi - https://github.com/nazirov91/ra-strapi-rest
- https://github.com/strapi/foodadvisor
	- strapi admin panel
	- strapi automatic frontend
	- https://strapi.io/demo
- https://jamstack.org/headless-cms
- https://www.contentful.com/r/knowledgebase/what-is-headless-cms
- https://www.storyblok.com/tp/headless-cms-explained
- [**https://www.gatsbyjs.com/docs/how-to/sourcing-data/headless-cms/**](https://www.gatsbyjs.com/docs/how-to/sourcing-data/headless-cms/)

## Popular CMSs

The following CMSs have high popularity among Gatsby users and support key functionality like content previews and incremental builds. If you're choosing between CMSs, we recommend reading the [Choosing Your CMS(s)](https://www.gatsbyjs.com/docs/conceptual/choosing-a-cms/) documentation.

| **CMS** | **Guides** | **Plugin Docs** | **Official Starter** |
|---|---|---|---|
| [Contentful](https://www.contentful.com/) | [guide](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-contentful/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-contentful) | [starter](https://www.gatsbyjs.com/starters/contentful/starter-gatsby-blog/) |
| [WordPress](https://www.wordpress.com/) | [guide](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress) | [starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-wordpress-blog) |
| [Shopify](https://www.shopify.com/) | [guide](https://www.gatsbyjs.com/docs/building-an-ecommerce-site-with-shopify/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-shopify) | [starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-shopify/) |
| [Sanity](https://www.sanity.io/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-sanity) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-sanity/) | [starter](https://github.com/sanity-io/sanity-template-gatsby-portfolio) |
| [Strapi](https://strapi.io/) | [guide](https://www.gatsbyjs.com/guides/strapi/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-strapi) |  |
| [Contentstack](https://www.contentstack.com/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-contentstack) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-contentstack) |  |
| [DatoCMS](https://www.datocms.com/) | [guide](https://www.gatsbyjs.com/guides/datocms/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-datocms) | [starter](https://www.gatsbyjs.com/starters/datocms/gatsby-blog-demo/) |
| [Drupal](https://www.drupal.com/) | [guide](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-drupal/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-drupal) |  |
| [Prismic](https://www.prismic.io/) | [guide](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-prismic/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-prismic) | [starter](https://github.com/prismicio/gatsby-blog) |
| [NetlifyCMS](https://www.netlifycms.org/) | [guide](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-netlify-cms/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cms) | [starter](https://www.gatsbyjs.com/starters/netlify-templates/gatsby-starter-netlify-cms/) |
| Plone (Open Source Enterprise CMS) |  |  |  |
| **Wagtail (Open Source Django CMS) https://wagtail.io** |  |  |  |

## Other CMSs

| CMS | Guides | Plugin Docs | Official Starter |
|---|---|---|---|
| [Cosmic](https://cosmicjs.com/) | [guide](https://docs.cosmicjs.com/guides/gatsby) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-cosmicjs) | [starter](https://github.com/cosmicjs/gatsby-blog-cosmicjs) |
| [ButterCMS](https://buttercms.com/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-buttercms/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-buttercms) |  |
| [Ghost](https://ghost.org/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-ghost/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-ghost/) | [starter](https://www.gatsbyjs.com/starters/TryGhost/gatsby-starter-ghost/) |
| [Kontent by Kentico](https://kontent.ai/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-kentico-kontent) | [docs](https://www.gatsbyjs.com/plugins/@kentico/gatsby-source-kontent) |  |
| [Directus](https://directus.io/) |  | [docs](https://www.gatsbyjs.com/plugins/@directus/gatsby-source-directus/) |  |
| [GraphCMS](https://graphcms.com/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-graphcms) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-graphql) |  |
| [Storyblok](https://www.storyblok.com/) | [guide](https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-storyblok) |  |
| [Cockpit](https://getcockpit.com/) |  | [docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-cockpit) |  |
| [CraftCMS](https://craftcms.com/) |  | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-craftcms) |  |
| [Agility CMS](https://agilitycms.com/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-agilitycms/) | [docs](https://www.gatsbyjs.com/plugins/@agility/gatsby-source-agilitycms/) |  |
| [Prepr CMS](https://prepr.io/) | [guide](https://docs.prepr.io/docs/frontend-integrations/v1/gatsby) |  |  |
| [Forestry](https://forestry.io/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-forestry/) |  |  |
| [Gentics Mesh](https://getmesh.io/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-gentics-mesh) |  |  |
| [Seams-CMS](https://seams-cms.com/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-seams-cms) |  |  |
| [Builder.io](https://www.builder.io/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-builder-io/) | [docs](https://www.gatsbyjs.com/plugins/@builder.io/gatsby/) | |
|[Flotiq](https://flotiq.com/) | [guide](https://www.gatsbyjs.com/docs/sourcing-from-flotiq/) | [docs](https://www.gatsbyjs.com/plugins/gatsby-source-flotiq) | |

[GitHub - outline/outline: The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.](https://github.com/outline/outline)

[Decap CMS | Open-Source Content Management System](https://decapcms.org/)

[KeystoneJS: The superpowered Node.js Headless CMS for developers - Keystone 6](https://keystonejs.com/)

## sites.google.com - Great UI and functionalities

https://sites.google.com/view/deepak-sood

## Frontmatter

Front Matter is an essential Visual Studio Code extension that simplifies working and managing your markdown articles. We created the extension to support many static-site generators like Hugo, Jekyll, Hexo, NextJs, Gatsby, and more.

The extension brings Content Management System (CMS) capabilities straight within Visual Studio Code. For example, you can keep a list of the used tags, categories, create content, and so much more.

https://frontmatter.codes

https://github.com/estruyf/vscode-front-matter

https://pages.cloudflare.com

Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.

## Links

- [Static Site Generators](frontend/others/static-site-generators.md)
- [Docusaurus](frontend/others/docusaurus.md)
