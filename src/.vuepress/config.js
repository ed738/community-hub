const { description } = require('../../package')

module.exports = {
  title: 'The Optimism Community Hub',
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'docs',
        link: '/docs/',
      },
      {
        text: 'tutorial',
        link: '/tutorial/',
      },
      {
        text: 'FAQs',
        link: '/faqs/',
      },
      {
        text: 'optimism',
        link: 'https://optimism.io'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          children: [''],
          collapsable: false,
          sidebarDepth: 1,
        }
      ],
      '/compare/': [
        {
          children: [''],
          collapsable: false,
          sidebarDepth: 1,
        }
      ],
      '/faqs/': [
        {
          children: [''],
          collapsable: false,
          sidebarDepth: 1,
        }
      ]
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
