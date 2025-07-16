import {
  defineConfig
} from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Aalenia',
  description: 'Home of the Aalenian Modifications Path of Titans (PoT) modding team and associated PoT community servers',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  themeConfig: {
//logo
    logo: '/favicon.png',
//social
    socialLinks: [
      { icon: 'discord', link: 'https://discord.aalenia.com' },
      { icon: 'trello', link: 'https://trello.com/b/cWqYilaz/aalenianmodifications' },
      { icon: 'github', link: 'https://github.com/kwiamwis' },
      { icon: 'paypal', link: 'https://www.paypal.me/kwiamwis' },
    ],
//nav
    nav: [
      { text: 'Mods', link: '/mods/utilities' },
      { text: 'Servers', link: '/servers/survival' },
      { text: 'Guidelines', link: '/guidelines' },
      { text: 'About', link: '/about' },
      {
        text: 'Resources',
        items: [
          { text: 'PoT Modding Teams', link: '/teams'},
          { text: 'PoT Hosting Wiki', link: 'https://hosting.pathoftitans.wiki/' },
          { text: 'PoT Modding Wiki', link: 'https://ugc.alderongames.com/login' },
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
