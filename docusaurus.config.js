// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deep Notes',
  tagline: 'Second Brain',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://deepaksood619.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deepaksood619', // Usually your GitHub org/user name.
  projectName: 'deepaksood619.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // trailingSlash: undefined, # false, true, both doesn't work
  // false gives all page errors
  // true gives linked pages error from other pages since relative path is used

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // themes: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     ({
  //       hashed: true,
  //       docsRouteBasePath: '/',
  //       highlightSearchTermsOnTargetPage: true,
  //     }),
  //   ],
  // ],

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5616865131274062',
      async: true,
      crossorigin: 'anonymous',
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude: ['**/office/**'],
          editUrl:
            'https://github.com/deepaksood619/deepaksood619.github.io/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-ZSZMJXWSH3',
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: 'GTM-TN3KBF4',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/timeline_compressed.webp',
      navbar: {
        title: 'Deep Notes',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            href: 'https://github.com/deepaksood619',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/deepaksood619/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Deep Notes, Built with ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'X3OY8NGHVH',

        // Public API key: it is safe to commit it
        apiKey: '55231a2d373a93253025c5b165065e15',

        indexName: 'deepaksood619io.tmp',

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'deepaksood619.github.io\\.com|domain\\.com',

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
    }),
    plugins: [
      [
        '@docusaurus/plugin-pwa',
        {
          debug: false,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
            'always',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/logo.webp',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(53, 120, 229)',
            },
          ],
        },
      ],
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 70,
          max: 1030, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: true,
        },
      ],
    ],
};

export default config;
