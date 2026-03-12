import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({ 

  lastUpdated: true,
  cleanUrls: true,           
  metaChunk: true,    

  head: [['link', {rel: 'icon', href: '/icon.png' }]],

  title: 'Home',
  titleTemplate: 'CoolAid.live',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    search: {
      provider: 'local',
    },

    logo: '/icon.png',
    siteTitle: 'CoolAid | Home',

    outline: 3,

    footer: {
      message: 'Made with ❤️ by Aidan | Powered by VitePress',
      copyright: '© 2026 CoolAid48 - All Rights Reserved'
    },    

    nav: [
      { text: 'About Me', link: '/pages/about' },
      { text: 'My Projects',
        items: [
          { text: 'This Website!', link: '/pages/website' },
          { text: 'Enhanced Keybinds Mod', link: '/pages/enhancedkeybinds' },
          { text: 'NoSignGUI Mod', link: '/pages/nosigngui' },
          { text: 'CoolClubBot for Discord', link: '/pages/coolclubbot' },
        ]
      },
      { text: 'Twitch Community',
        items: [
          { text: 'My Twitch Community', link: '/pages/hardcore' },
          { text: 'Hardcore Hall of Fame', link: '/pages/hof-info' },
          { text: 'Twitch Channel', link: 'https://www.twitch.tv/coolaid48' },
        ]
      },
      { text: 'CoolAid Merch Store', link: 'https://shop.coolaid.live/' },
      { text: 'CoolAid\'s Ko-Fi Page', link: 'https://ko-fi.com/coolaid48' }
    ],

    sidebar: {
      '/pages': [
        {
          text: 'About Me',
          items: [
            { text: 'Introduction', link: '/pages/about' },
            { text: 'PC Setup Specs', link: '/pages/setup-specs' },
            { text: 'My Socials', link: '/pages/socials' },
          ]
        },
        {
          text: 'My Projects',
          items: [
            { text: 'This Website | CoolAid.live', link: '/pages/website' },
            { text: 'Enhanced Keybinds', link: '/pages/enhancedkeybinds' },
            { text: 'NoSignGUI', link: '/pages/nosigngui' },
            { text: 'CoolClubBot', link: '/pages/coolclubbot' },
          ]
        },
        {
          text: 'CoolAid Twitch Community',
          items: [
            { text: 'Hardcore World', link: '/pages/hardcore' },
            { text: 'Mods & Packs List', link: '/pages/mods-packs-list' },
            { text: 'Meet the Homies', link: '/pages/homies' },
            { text: 'Teams & Affiliates', link: '/pages/teams-affiliates' },
          ]
        },
        {
          text: 'The Hall of Fame',
          items: [
            { text: 'What is the HOF? w/ FAQ', link: '/pages/hof-info' },
            { text: 'HOF Application Form', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdO8tFqPqHWK9bx5z2iTWX2G8-tafWylViIJnnAZE4twjISQw/viewform' },
            { text: 'HOF Items List', link: 'https://docs.google.com/spreadsheets/d/145x9910pUwjP6y4u008SjjX_q6jKdTfD7xz55zppjpg/edit?gid=0#gid=0' }
          ]
        }
      ] 
    },

    socialLinks: [
      { icon: 'github',    link: 'https://github.com/CoolAid48' },
      { icon: 'twitch',    link: 'https://www.twitch.tv/coolaid48'},  
      { icon: 'youtube',   link: 'https://www.youtube.com/@CoolAid48'},
      { icon: 'x',         link: 'https://x.com/CoolAid48'},
      { icon: 'bluesky',   link: 'https://bsky.app/profile/coolaid.live'},  
      { icon: 'tiktok',    link: 'https://www.tiktok.com/@coolaid48'},
      { icon: 'instagram', link: 'https://www.instagram.com/coolaid48_/'},
      { icon: 'kofi',      link: 'https://ko-fi.com/coolaid48' }
    ]
  }
})
