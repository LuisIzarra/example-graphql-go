/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "graphql-go/graphql",
  tagline: "An implementation of GraphQL for Go",
  url: "https://LuisIzarra.github.io",
  baseUrl: "/example-graphql-go/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/GraphQL_Logo.ico",
  organizationName: "LuisIzarra", // Usually your GitHub org/user name.
  projectName: "example-graphql-go", // Usually your repo name.
  plugins: ["@docusaurus/plugin-google-analytics"],
  themeConfig: {
    algolia: {
      apiKey: process.env.API_KEY,
      indexName: "graphql-go",
      contextualSearch: true,
      appId: "UGS24YL5EO",
      searchParameters: {},
    },
    navbar: {
      title: "graphql-go/graphql",
      logo: {
        alt: "My Site Logo",
        src: "img/GraphQL_Logo.png",
      },
      hideOnScroll: true,
      title: "graphql-go/graphql",
      logo: {
        alt: "graphql-go/graphql Logo",
        src: "img/GraphQL_Logo.png",
        srcDark: "img/GraphQL_Logo.png",
      },
      items: [
        {
          href: "/docs/tutorial-basics/overview",
          label: "Docs",
          position: "left",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/graphql-go/graphql",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://github.com/graphql-go/graphql/stargazers",
          position: "right",
          className: "github-stargazers",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: false,
          docsPluginId: "default",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/tutorial-basics/overview",
            },
            {
              label: "Runnning a GraphQL API",
              to: "/docs/examples/graphql-api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Gitter",
              href: "https://gitter.im/graphql-go/graphql",
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/graphql-go/graphql",
            },
          ],
        },
      ],
      copyright: `The Go gopher was designed by <a href="http://reneefrench.blogspot.com/">Renee French</a>.</br>
      The design is licensed under the Creative Commons 3.0 Attributions license. Read this <a href="https://blog.golang.org/gopher">article</a> for more details.</br>
      Design by Moriah Rich, illustration by Ariel Mashraki.`,
    },
    googleAnalytics: {
      trackingID: "UA-201621393-1",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/LuisIzarra/example-graphql-go/edit/tree/main/versioned_docs/",
          includeCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/LuisIzarra/example-graphql-go/edit/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "English",
      },
      es: {
        label: "Español",
      },
    },
  },
};
