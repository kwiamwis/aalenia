import {
  defineConfig
} from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Aalenia',
  description: 'Home of the Aalenian Modifications Path of Titans (PoT) modding team and associated PoT community servers',
  head: [['link', { rel: 'icon', type: 'image/svg', href: '/LargeLogo.png' }]],
  themeConfig: {
//logo
    logo: '/LargeLogo.png',
//social
    socialLinks: [
      { icon: 'discord', link: 'https://discord.aalenia.com' },
      { icon: 'trello', link: 'https://trello.aalenia.com' },
      { icon: 'github', link: 'https://github.com/kwiamwis' },
      { icon: 'paypal', link: 'https://www.paypal.me/kwiamwis' },
    ],
//nav
    nav: [
      { text: 'Mods', link: '/mods/utilities' },
      { text: 'Servers', link: '/servers/survival' },
      { text: 'Guidelines', link: '/guidelines' },
      { text: 'Bug Reports', link: '/bugs' },
      { text: 'About', link: '/about' },
      {
        text: 'Resources',
        items: [
          {
            text: 'PoT Info',
            items: [
              { text: 'PoT Character Stats', link: 'https://guides.gsh-servers.com/path-of-titans/guides/curve-overrides/' },
              { text: 'AG Status', link: 'https://status.alderongames.com/' },
            ]
          },
          {
            text: 'PoT Support',
            items: [
              { text: 'AG Bug Reports', link: 'https://bugtracker.alderongames.com/' },
              { text: 'AG Support', link: 'https://support.alderongames.com/' },
              { text: 'Bug Tracker Skins', link: 'https://support.alderongames.com/hc/en-us/articles/34352973267481-How-do-I-get-a-Bugtracker-skin' },
            ]
          },
          {
            text: 'PoT Dev',
            items: [
              { text: 'PoT Hosting Wiki', link: 'https://hosting.pathoftitans.wiki/' },
              { text: 'AG Modding', link: 'https://ugc.alderongames.com/login' },
            ]
          },
          {
            text: 'Paleohistory',
            items: [
              { text: 'Prehistoric Globes', link: 'https://dinosaurpictures.org/ancient-earth' },
              { text: 'Stratigraphy', link: 'https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf' },
            ]
          },
          {
            text: 'Discord Info',
            items: [
              { text: 'Mentions', link: 'https://discord.com/developers/docs/reference#message-formatting' },
              { text: 'Timestamps', link: 'https://sesh.fyi/timestamp/' },
              { text: 'Styling', link: 'https://fsymbols.com/letters/' },
              { text: 'Markdown', link: 'https://www.markdownguide.org/tools/discord/' },
              { text: 'Giveaways', link: 'https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html' },
            ]
          },
          {
            text: 'Discord Dev',
            items: [
              { text: 'Wiki', link: 'https://discord.com/developers/applications' },
              { text: 'Embed Limits', link: 'https://www.pythondiscord.com/pages/guides/python-guides/discord-embed-limits/' },
            ]
          },
        ]
      },
    ],
// sidebar
    sidebar: {
// mods
      '/mods/': [
        {
          text: 'Mods',
          items:[
            {
              text: 'Utilities',
              link: '/mods/utilities',
            },
            {
              text: 'Relay',
              link: '/mods/relay',
            },
            {
              text: 'Flora',
              link: '/mods/flora',
            },
            {
              text: 'Fauna',
              link: '/mods/fauna',
            },
          ]
        },
        {
          text: 'Applications',
          items:[
            {
              text: 'DupaBot',
              link: '/mods/dupabot',
            },
          ]
        },
      ],
// servers
      '/servers/': [
        {
          text: 'Survival',
          link: '/servers/survival',
        },
        {
          text: 'PvP',
          link: '/servers/pvp',
        },
      ],
    },
  }
});
