export default {
  title: 'Z-UI',
  dest: '/dist',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '@zoer98/z-ui',
    nav: [
      { text: '指南', link: '/guide/index' },
      { text: '组件', link: '/compoents/button' },
      { text: '版本日志', link: '/version' },
      {
        text: '其他',
        items: [
          { text: '英文/en', link: '/guide/en' },
          { text: '团队', link: '/team' },
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
          { text: '版本日志', link: '/version' },
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/zoer98/z-ui/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdatedText: '最后更新',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present zoer98'
    }
  }
}
