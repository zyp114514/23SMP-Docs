import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "23SMP",
  description: "23中人自己的SMP",
  themeConfig: {
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
      }
    ],
  }
})
