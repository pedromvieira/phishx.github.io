const { description } = require('../../package')

module.exports = {
  title: 'Documentation',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#008060' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  base: '/',
  locales: {
    '/': {
      lang: 'English',
      label: 'English',
      selectText: 'Languages',
      ariaLabel: 'Documentation',
      title: 'Documentation',
      description: 'PhishX Documentation',
    },
    '/pt/': {
      lang: 'Português',
      label: 'Português',
      selectText: 'Idiomas',
      ariaLabel: 'Idiomas',
      title: 'Documentação',
      description: 'Documentação da PhishX',
    }
  },
  themeConfig: {
    repo: '',
    activeHeaderLinks: true,
    editLinks: false,
    displayAllHeaders: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: 'https://cdn.phishx.io/img/phishx/phishx_logo_gray.png',
    locales: {
      '/': {
        lang: 'English',
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Documentation',
        title: 'Documentation',
        description: 'PhishX Documentation',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          }
        ],
        sidebar: {
          '/en/guide': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        }
      },
      '/pt/': {
        lang: 'Português',
        label: 'Português',
        selectText: 'Idiomas',
        ariaLabel: 'Idiomas',
        title: 'Documentação',
        description: 'Documentação da PhishX',
        nav: [
          {
            text: 'Guia',
            link: '/pt/guide/'
          }
        ],
        sidebar: {
          '/pt/guide': [
            {
              title: 'Guia',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        }
      }
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
