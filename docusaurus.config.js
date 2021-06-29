/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'graphql-go/graphql',
  tagline: 'Open source to enjoy',
  url: 'https://LuisIzarra.github.io',
  baseUrl: '/example-graphql-go/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/GraphQL_Logo.ico',
  organizationName: 'LuisIzarra', // Usually your GitHub org/user name.
  projectName: 'example-graphql-go', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: process.env.API_KEY,
      indexName: 'graphql-go',
      contextualSearch: true,
      appId: 'UGS24YL5EO',
      searchParameters: {},
    },
    navbar: {
      title: 'graphql-go/graphql',
      logo: {
        alt: 'My Site Logo',
        src: 'img/GraphQL_Logo.png',
      },
      hideOnScroll: true,
      title: 'graphql-go/graphql',
      logo: {
        alt: 'graphql-go/graphql Logo',
        src: 'img/GraphQL_Logo.png',
        srcDark: 'img/GraphQL_Logo.png',
      },      
      items: [       
        {
          href: '/docs/tutorial-basics/overview',
          label: 'Docs',
          position: 'left',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/graphql-go/graphql',          
          label: 'GitHub',
          position: 'right',
        }, 
        {
          href: "https://github.com/graphql-go/graphql/stargazers",
          label: "GitHub Stargazers",
          position: "right",
          className: "github-stargazers",
        }, 
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },      
      ],                   
    },        
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/tutorial-basics/overview',
            },
            {
              label: 'Runnning a GraphQL API',
              to: '/docs/intro'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/graphql-go/graphql',
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
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/graphql-go/graphql',
            },            
          ],          
        },
      ],    
      copyright: `Copyright © ${new Date().getFullYear()} GraphQL-Go The Go gopher was designed by <a href="http://reneefrench.blogspot.com/">Renee French</a>.</br>
      The design is licensed under the Creative Commons 3.0 Attributions license. Read this <a href="https://blog.golang.org/gopher">article</a> for more details.</br>
      Design by Moriah Rich, illustration by Ariel Mashraki.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/LuisIzarra/example-graphql-go/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/LuisIzarra/example-graphql-go/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
};
