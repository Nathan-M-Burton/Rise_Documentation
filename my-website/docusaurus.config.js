// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RISE Video Production',
  tagline: '',
  favicon: 'img/uo.jpg',

  // Set the production url of your site here
  url: 'https://Nathan-M-Burton.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment '/<projectName>/'
  baseUrl: '/Rise_Documentation/',

  // GitHub pages deployment config.
  organizationName: 'Nathan-M-Burton',
  projectName: 'Rise_Documentation',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/testback.png',
      navbar: {
        title: 'RISE SOP',
        logo: {
          alt: 'My Site Logo',
          src: 'img/yg.png',
          width: 28,
          height: 100,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Trainings',
          },
          {
            href: 'https://github.com/Nathan-M-Burton/Rise_Documentation/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label: 'OVPRI',
            href: 'https://research.uoregon.edu/',
          },
          {
            label: 'Email Me',
            href: 'mailto:nburton6@uoregon.edu',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/Nathan-M-Burton/Rise_Documentation',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rise SOP by Nathan Burton`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
