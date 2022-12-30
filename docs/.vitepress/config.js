export default {
  title: 'Z-UI',
  dest: '/dist',
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
          { text: 'button - 按钮', link: '/compoents/button' },
          { text: 'input - 输入框', link: '/compoents/input' },
          { text: 'layout - 布局', link: '/compoents/layout' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '团队', link: '/team' },
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/zoer98/z-ui/edit/main/docs/:path',
      text: '在GitHub中编辑'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present zoer98'
    }
  }
}
