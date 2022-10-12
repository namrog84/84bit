// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://www.84bit.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/namrog84/84bit/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/namrog84/84bit/tree/main/docusaurus/com84bit/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-unreal",
        path: "docs-unreal",
        routeBasePath: "docs-unreal",
        editUrl: "https://github.com/namrog84/84bit/",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "docs-blender",
    //     path: "docs-blender",
    //     routeBasePath: "docs-blender",
    //     editUrl: "https://github.com/namrog84/84bit/tree/main/docusaurus/com84bit/",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "84bit",
        logo: {
          alt: "84bit Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Unreal",
            to: "docs-unreal/intro",
            position: "left",
          },
          // {
          //   label: "Blender",
          //   to: "docs-blender/intro",
          //   position: "left",
          // },
          {
            label: "Blog",
            to: "/blog",
            position: "left",
          },
          {
            label: "About",
            type: "doc",
            docId: "intro",
            position: "left",
          },
          {
            href: "https://github.com/namrog84/84bit",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Unreal Docs",
            items: [
              {
                label: "Unreal",
                to: "/docs-unreal/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/unreal-slackers",
              },
              {
                label: "Unreal Engine",
                href: "https://www.unrealengine.com/en-US",
              },
              {
                label: "Unreal Forums",
                href: "https://forums.unrealengine.com/",
              },
              {
                label: "Unreal Learn",
                href: "https://www.unrealengine.com/en-US/learn",
              },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/namrog84/84bit/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
