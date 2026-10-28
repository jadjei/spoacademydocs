import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SPO Academy Documentation',
  tagline: 'Business skills for Cardano stake pool operators',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://catalyst.pages.fluid7.co.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitLab pages deployment
  baseUrl: '/spoacademydocs/',

  // GitLab pages deployment config
  organizationName: 'catalyst', // Your GitLab username
  projectName: 'spoacademydocs', // Your repo name
  deploymentBranch: 'gl-pages', // GitLab Pages branch

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jadjei/spoacademydocs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Branded Open Graph / social share card (1200x630). Source SVG alongside.
    image: 'img/spo-academy-social-card.png',
    metadata: [
      {
        name: 'description',
        content:
          'The SPO Academy documentation - business skills for Cardano stake pool operators.',
      },
      {property: 'og:image:alt', content: 'SPO Academy Documentation'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: 'SPO Academy Docs',
      logo: {
        alt: 'SPO Academy Logo',
        src: 'https://spo.academy/images/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://spo.academy',
          label: 'SPO Academy',
          position: 'right',
        },
        {
          href: 'https://github.com/jadjei/spoacademydocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Project Overview',
              to: '/docs/overview',
            },
            {
              label: 'Course Design', 
              to: '/docs/course',
            },
            {
              label: 'Milestones',
              to: '/docs/milestones',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://dsc.gg/fluid7',
            },
            {
              label: 'X',
              href: 'https://x.com/fluid7',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'SPO Academy',
              href: 'https://spo.academy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SPO Academy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
