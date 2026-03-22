import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({ 

  lastUpdated: true,
  cleanUrls: true,           
  metaChunk: true,   

  title: 'CoolAid.live',
  description: "A cool VitePress site",
  head: [ 
    ['link', {rel: 'icon', href: '/icon.png' }],
    // Open Graph meta tags for Discord Embed Stuff
    ['meta', { property: 'og:title', content: 'CoolAid.live' }],                                           // Discord Embed Title
    ['meta', { property: 'og:description', content: 'My own static website built using VitePress!' }],     // Discord Embed Description
    ['meta', { property: 'og:image', content: 'https://coolaid.live/icon.png' }],                          // Site icon
    ['meta', { name: 'theme-color', content: '#0257B3' }]                                                // Embed color
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: '/icon.png',
    siteTitle: 'CoolAid | Home',
    outline: 3,

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/coolaid48/coolaid.live/edit/main/docs/:path',
      text: 'Update these pages on GitHub'
    },

    footer: {
      message: 'Made with ❤️ by Aidan | Powered by VitePress',
      copyright: '© 2026 CoolAid48 - All Rights Reserved'
    },    

    nav: [
      { text: 'About Me', 
        items: [
            { text: 'Introduction', link: '/pages/introduction' },
            { text: 'My Socials', link: '/pages/socials' },
            { text: 'PC Setup Specs', link: '/pages/setup-specs' },
            { text: 'This Website', link: '/pages/website' },
            { text: 'CoolClubBot', link: '/pages/coolclubbot' },
        ]
      },
      { text: 'My Mods',
        items: [
            { text: 'NoSignGUI', link: '/pages/mods/disablesigngui' },
            { text: 'Enhanced Keybinds', link: '/pages/mods/enhancedkeybinds' },
            { text: 'Dynamic Raid Radius', link: '/pages/mods/drsr' },
            { text: 'Disenchant Curses', link: '/pages/mods/disenchant-curses' },
            { text: 'Hands Off My Block', link: '/pages/mods/hands-off-my-block' },
            { text: 'NoMoreJumpscares', link: '/pages/mods/nomorejumpscares' },
            { text: 'More Search Bars', link: '/pages/mods/more-search-bars' },
            { text: 'Toggle Beacon Beams', link: '/pages/mods/toggle-beacon-beams' },
        ]
      },
      { text: 'Twitch Community',
        items: [
          { text: 'Hardcore World', link: '/pages/hardcore' },
          { text: 'Mods & Packs List', link: '/pages/mods-packs-list' },
          { text: 'Teams & Affiliates', link: '/pages/teams-affiliates' },
          { text: 'Meet the Homies', link: '/pages/homies' },
          { text: 'Hardcore Hall of Fame', link: '/pages/hof-info' },
          { text: 'Twitch Channel', link: 'https://www.twitch.tv/coolaid48' },
        ]
      },
      { text: 'CoolAid Merch Store', link: 'https://shop.coolaid.live/' },
      { text: 'My Ko-Fi Page', link: 'https://ko-fi.com/coolaid48' }
    ],

    sidebar: {
      '/pages': [
        {
          text: 'About Me',
          items: [
            { text: 'Introduction', link: '/pages/introduction' },
            { text: 'My Socials', link: '/pages/socials' },
            { text: 'PC Setup Specs', link: '/pages/setup-specs' },
            { text: 'This Website', link: '/pages/website' },
            { text: 'CoolClubBot', link: '/pages/coolclubbot' },
          ]
        },
        {
          text: 'My Minecraft Mods',
          items: [
            { text: 'NoSignGUI', link: '/pages/mods/disablesigngui' },
            { text: 'Enhanced Keybinds', link: '/pages/mods/enhancedkeybinds' },
            { text: 'Dynamic Raid Radius', link: '/pages/mods/drsr' },
            { text: 'Disenchant Curses', link: '/pages/mods/disenchant-curses' },
            { text: 'Hands Off My Block', link: '/pages/mods/hands-off-my-block' },
            { text: 'NoMoreJumpscares', link: '/pages/mods/nomorejumpscares' },
            { text: 'More Search Bars', link: '/pages/mods/more-search-bars' },
            { text: 'Toggle Beacon Beams', link: '/pages/mods/toggle-beacon-beams' },
          ]
        },
        {
          text: 'CoolAid Twitch Community',
          items: [
            { text: 'Hardcore World', link: '/pages/hardcore' },
            { text: 'Mods & Packs List', link: '/pages/mods-packs-list' },
            { text: 'Teams & Affiliates', link: '/pages/teams-affiliates' },
            { text: 'Meet the Homies', link: '/pages/homies' },
          ]
        },
        {
          text: 'The Hall of Fame',
          items: [
            { text: 'Hall of Fame FAQ', link: '/pages/hof-info' },
            { text: 'HOF Application Form', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdO8tFqPqHWK9bx5z2iTWX2G8-tafWylViIJnnAZE4twjISQw/viewform' },
            { text: 'Hall of Fame Items List', link: 'https://docs.google.com/spreadsheets/d/145x9910pUwjP6y4u008SjjX_q6jKdTfD7xz55zppjpg/edit?gid=0#gid=0' },
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
