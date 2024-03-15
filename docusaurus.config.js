// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Centre',
  tagline: 'QFPay Developer Centre',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://qfpay.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/qf-sdk/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QFPay', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  themes: [
    '@docusaurus/theme-mermaid',
    '@easyops-cn/docusaurus-search-local'
  ],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Developer Centre',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.jpg',
          width: 112,
          height: 20,
        },
        items: [
          {
            to: 'docs/Preparation',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
            className: 'qf-display-link'
          },
          {
            to: 'docs/Preparation',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Integration',
            className: 'qf-display-link'
          },
          {
            type: 'search',
            position: 'left',
            className: 'qf-search-bar'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Sign In',
            className: 'qf-display-link-blue',
          },
          {
            type: 'html',
            position: 'left',
            value: '<div class="qf-nav-menu"><a href="/qf-sdk/">Home</a><a href="/qf-sdk/docs/Preparation/introduction">Integration</a><a>Resources</a></div>'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `QFPay Haojin Fintech Limited / iFlare Hong Kong Limited / Q Square Company Limited © ${new Date().getFullYear()}  |  Unit A, 27/F, West Gate Tower, 7 Wing Hong Street, Lai Chi Kok, Kowloon, Hong Kong |  All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'php', 'json'],
      },
    }),
};

export default config;
