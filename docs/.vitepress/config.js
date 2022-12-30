export default {
  title: 'Z-UI',
  themeConfig: {
    siteTitle: '@zoer98/z-ui',
    nav: [
      { text: '指南', link: '/guide/index' },
      { text: '组件', link: '/compoents/button' },
      {
        text: '其他',
        items: [
          { text: '英文/en', link: '/guide/en' },
        ]
      }
    ],
    sidebar: [
      {
        text: '开始指南',
        items: [
          { text: '介绍', link: '/guide/index' },
          { text: '快速开始', link: '/guide/getting-started' },
        ]
      },
      {
        text: '组件配置',
        items: [
          { text: 'button', link: '/compoents/button' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/zoer98/z-ui/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present zoer98'
    }
  }
}

import index from '../../static/index.css'