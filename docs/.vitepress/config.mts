import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CCB游乐园",
  description: "都怪王若然",
  lastUpdated : true,
  themeConfig: {
  docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '教程', link: '/blank' }
    ],

    sidebar: [
      {
        text: '快速上手',
        items: [
          { text: 'Java版快速上手(电脑)', link: '/quickstart/je' },
          { text: '基岩版快速上手(手机)', link: '/quickstart/be' }
        ]
      },
      {
        text: 'Java版教程',
        items: [
          { text: '懒人包', link: '/je/jelzpak' },
        ]
      }
    ],
  }
})
