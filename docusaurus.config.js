/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'graphql-go/graphql',
  tagline: 'Open source to enjoy',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/graphql-go.ico',
  organizationName: 'LuisIzarra', // Usually your GitHub org/user name.
  projectName: 'example-graphql-go/graphql', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'graphql-go/graphql',
      logo: {
        alt: 'My Site Logo',
        src: 'img/graphql-go.png',
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
              label: 'Overview',
              to: '/docs/tutorial-basics/overview',
            },
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
      copyright: `Copyright © ${new Date().getFullYear()} GraphQL-Go Open Source.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
