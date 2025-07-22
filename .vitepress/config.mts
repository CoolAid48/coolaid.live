import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({ 

  lastUpdated: true,
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
    siteTitle: 'CoolAid',

    outline: 3,

    footer: {
      message: 'Made with ❤️ by Aidan ',
      copyright: '© 2025 CoolAid - Powered by Vitepress'
    },    

    nav: [
      { text: 'About Me', link: '/projects/about' },
      { text: 'My Projects',
        items: [
          { text: 'This Website!', link: '/projects/website' },
          { text: 'Enhanced Keybinds Mod', link: '/projects/enhancedkeybinds' },
          { text: 'NoSignGUI Mod', link: '/projects/nosigngui' },
          { text: 'CoolClubBot for Discord', link: '/projects/coolclubbot' },
        ]
      },
      { text: 'Twitch Community',
        items: [
          { text: 'My Twitch Community', link: '/community/introduction' },
          { text: 'Hardcore Hall of Fame', link: '/community/hof-info' },
          { text: 'Twitch Channel', link: 'https://www.twitch.tv/coolaid48' },
        ]
      },
      { text: 'CoolAid Merch Site', link: 'https://coolaid.live/collections/coolaid-merch' },
      { text: 'Join the Discord', link: 'https://discord.gg/y7x8P7fjCx' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `community` directory.
      '/community/': [
        {
          text: 'My Twitch Community',
          items: [
            { text: 'Introduction', link: '/community/introduction' },
            { text: 'Hardcore World', link: '/community/hardcore' },
            { text: 'Mods and Packs List', link: '/community/mods-packs-list' },
            { text: 'Meet the Homies', link: '/community/homies' },
            { text: 'Partners and Teams', link: '/community/partners' },
          ]
        },
        {
          text: 'The Hall of Fame',
          items: [
            { text: 'What is the HOF?', link: '/community/hof-info' },
            { text: 'Hall of Fame FAQ', link: '/community/hof-faq' },
            { text: 'HOF Application Form', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdO8tFqPqHWK9bx5z2iTWX2G8-tafWylViIJnnAZE4twjISQw/viewform' },
            { text: 'HOF Items List', link: 'https://docs.google.com/spreadsheets/d/145x9910pUwjP6y4u008SjjX_q6jKdTfD7xz55zppjpg/edit?gid=0#gid=0' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `coolaid-creations` directory.
      '/projects/': [
        {
          text: 'About Me',
          items: [
            { text: 'Introduction', link: '/projects/about' },
            { text: 'PC Setup Specs', link: '/projects/setup-specs' },
            { text: 'CoolAid\'s Socials', link: '/projects/socials' },
          ]
        },
        {
          text: 'CoolAid\'s Creations',
          items: [
            { text: 'CoolAid.live', link: '/projects/website' },
            { text: 'Enhanced Keybinds', link: '/projects/enhancedkeybinds' },
            { text: 'NoSignGUI', link: '/projects/nosigngui' },
            { text: 'CoolClubBot', link: '/projects/coolclubbot' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github',    link: 'https://github.com/CoolAid48' },
      { icon: 'youtube',   link: 'https://www.youtube.com/@CoolAid48'},
      { icon: 'tiktok',    link: 'https://www.tiktok.com/@coolaid48'},
      { icon: 'bluesky',   link: 'https://bsky.app/profile/coolaid.live'},  
      { icon: 'x',         link: 'https://x.com/CoolAid48'},
      { icon: 'instagram', link: 'https://www.instagram.com/coolaid48_/'}
    ]
  }
})
