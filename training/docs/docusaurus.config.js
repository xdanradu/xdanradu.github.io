module.exports = {
  title: 'frontend-training-2022',
  tagline:
    'JS, CSS, React, Frontend architecture',
  url: 'https://danradu.ro',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  baseUrlIssueBanner: false,
  favicon: 'img/favicon.ico',
  organizationName: 'ike18t',
  projectName: 'ng-mocks',
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'give-a-start',
      content:
        'If you like this training, please support it with a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/xdanradu/xdanradu.github.io">GitHub</a>.',
    },
    navbar: {
      title: 'frontend-training-2022',
      items: [
        {
          to: '/guides',
          label: 'Test examples',
          position: 'left',
        },
        {
          label: 'Try on StackBlitz',
          href: 'https://stackblitz.com',
          position: 'left',
        },
        {
          label: 'Try on CodeSandbox',
          href: 'https://codesandbox.io',
          position: 'left',
        },
        {
          label: 'Run tests on CI',
          href: 'https://satantime.github.io/puppeteer-node/',
        },
        {
          href: 'https://github.com/xdanradu/xdanradu.github.io',
          label: 'GitHub repo',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/@xdanradu/utils',
          label: 'NPM package',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
            {
              label: 'Try on StackBlitz',
              href: 'https://stackblitz.com',
            },
            {
              label: 'Try on CodeSandbox',
              href: 'https://codesandbox.io',
            }
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub repo',
              href: 'https://github.com/xdanradu/xdanradu.github.io',
            },
            {
              label: 'NPM package',
              href: 'https://www.npmjs.com/package/@xdanradu/utils',
            },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'articles',
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: 'https://github.com/xdanradu/xdanradu.github.io/tree/master/training/docs/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
      },
    ],
    '@docusaurus/plugin-sitemap',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EBEPX2CVNW',
      },
    ],
  ],
};
