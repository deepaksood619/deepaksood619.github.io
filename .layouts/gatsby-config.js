const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Deep Notes",
  shortName: "Deep Notes",
  description:
  "Accumulating thoughts, knowledge, tips and anything that is worth keeping a note of.",
  twitterName: "deepaksood619",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://deepaksood619.github.io/",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/deepaksood619/deepaksood619.github.io/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/deepaksood619",
          },
        ],
        editUrl:
          "https://github.com/deepaksood619/deepaksood619.github.io/tree/master/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
