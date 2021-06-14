/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'graphql-go/graphql',
  tagline: 'Open source to enjoy',
  url: 'https://github.com/LuisIzarra/example-graphql-go',
  baseUrl: '/example-graphql-go/graphql/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/GraphQL_Logo.ico',
  organizationName: 'LuisIzarra', // Usually your GitHub org/user name.
  projectName: 'example-graphql-go/graphql', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'graphql-go/graphql',
      logo: {
        alt: 'My Site Logo',
        src: 'img/GraphQL_Logo.png',
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
      logo: {
        alt: 'Github stars',
        src: 'https://img.shields.io/github/stars/graphql-go/graphql?style=social',
        href: 'https://github.com/graphql-go/graphql/stargazers',
      },
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
            'https://github.com/graphql-go/graphql',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
