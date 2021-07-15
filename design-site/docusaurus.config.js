const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    // ...
      plugins: ['@docusaurus/theme-live-codeblock'],
      themeConfig: {
        liveCodeBlock: {
          /**
           * The position of the live playground, above or under the editor
           * Possible values: "top" | "bottom"
           */
          playgroundPosition: 'bottom',
        },
      },
// ...
  title: 'Pipeline UI',
  tagline: 'Integrating Algorand and React',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'headline-design', // Usually your GitHub org/user name.
  projectName: 'pipeline-ui', // Usually your repo name.
  themeConfig: {
        announcementBar: {
          id: 'announcementBar-1', // Increment on change
          content:
            '⭐️ If you like PIPELINE-UI, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/headline-design/pipeline-ui">GitHub</a>! ⭐',
          backgroundColor: '#fafbfc', // Defaults to `#fff`.
          textColor: '#091E42', // Defaults to `#000`.
          isCloseable: false, // Defaults to `true`.
        },
      navbar: {
        title: 'PIPELINE-UI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started-B',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/headline-design',
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
                to: '/docs/getting-started-B',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/headline_crypto',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/headline-design',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HEADLINE INC. Built with PIPELINE-UI.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
              'https://github.com/headline-design/pipeline-ui/blob/main/design-site',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://headline.dev/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
