import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Dooit",
  description: "Documentation for Dooit",
  base: "/dooit/",
  lastUpdated: true,
  themeConfig: {
    repo: "dooit-org/dooit-extras",
    docsDir: "site/docs",
    editLink: {
      pattern: "https://github.com/dooit-org/dooit/edit/main/site/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/getting_started/installation" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/getting_started/installation" },
          {
            text: "Default Config File",
            link: "/getting_started/default_config",
          },
        ],
      },
      {
        text: "Backend API",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Introduction", link: "/backend/introduction" },
          { text: "Workspace", link: "/backend/workspace" },
          { text: "Todo", link: "/backend/todo" },
        ],
      },
      {
        text: "Configuration",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Events", link: "/configuration/events" },
          { text: "Themes", link: "/configuration/theme" },
          { text: "Keys", link: "/configuration/keys" },
          { text: "Formatter", link: "/configuration/formatter" },
          { text: "Layout", link: "/configuration/layout" },
          { text: "Bar", link: "/configuration/bar" },
          { text: "Dashboard", link: "/configuration/dashboard" },
        ],
      },
      {
        text: "Extra",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Dooit Extras", link: "/extra/dooit_extras" },
          { text: "Moving from v2", link: "/extra/moving_from_v2" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/dooit-org/dooit" },
      { icon: "discord", link: "https://discord.com/invite/WA2ER9MBWa" },
      { icon: "twitter", link: "https://twitter.com/kraanzu" },
    ],
    search: {
      provider: "local",
    },
  },
});
