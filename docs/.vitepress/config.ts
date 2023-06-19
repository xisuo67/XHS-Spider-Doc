import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

/**
 * 找不到配置字段，按住 Ctrl + 鼠标移动到对应字段上点击，
 * 去 xxx.d.ts 类型定义文件中找相对应字段
 */
export default withPwa(
  defineConfig({
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      [
        'meta',
        {
          name: 'keywords',
          content: 'doc、XHS、xhs-spider-doc、xhs、spider、xisuo67、爬虫、小红书、数据采集',
        },
      ],
      [
        'meta',
        {
          name: 'description',
          content: '🎉🎉🔥小红书数据采集、网站图片、视频资源批量下载工具，颜值超高的数据采集工具（批量下载，视频提取，图片，去水印等）',
        },
      ],
      //https://www.jsdelivr.com/package/npm/@fancyapps/ui
      [
        'link',
        {
          rel: 'stylesheet',
          href: '/fancybox/fancybox.css',
        },
      ],
      [
        'script',
        {
          src: '/fancybox/fancybox.umd.js',
        },
      ],
      // [
      //   "script",
      //   {},
      //   `var _hmt = _hmt || [];
      //   (function() {
      //     var hm = document.createElement("script");
      //     hm.src = "";
      //     var s = document.getElementsByTagName("script")[0];
      //     s.parentNode.insertBefore(hm, s);
      //   })();
      //   `,
      // ],
    ],
    markdown: {
      config: (md) => {
        md.use(mdItCustomAttrs, 'image', {
          'data-fancybox': 'gallery',
        })
      },
    },
    title: 'XHS.Spider颜值超高的数据采集工具',
    description: '🎉🎉🔥小红书数据采集、网站图片、视频资源批量下载工具，颜值超高的数据采集工具（批量下载，视频提取，图片，去水印等）',
    lang: 'zh-CN',
    base: '/',
    lastUpdated: true,
    ignoreDeadLinks: true,
    cleanUrls: false,
    themeConfig: {
      siteTitle: 'XHS.Spider',
      // logo: '/images/logo-mini.svg',
      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              displayDetails: '显示详细列表',
              footer: {
                navigateText: '切换',
                selectText: '选择',
                closeText: '关闭',
              },
            },
          },
        },
      },
      outlineTitle: '导航目录',
      darkModeSwitchLabel: '外观',
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '返回顶部',
      outline: 'deep',
      lastUpdatedText: '上次更新',
      editLink: {
        pattern: 'https://github.com/xisuo67/XHS-Spider-Doc/edit/master/docs/:path',
        text: '在 github 上编辑此页',
      },
      footer: {
        // message: '',
        copyright:
          'MIT Licensed | Copyright © 2023-xisuo67 <a href="https://github.com/xisuo67/" target="_blank" rel="nofollow" style="color:var(--vp-c-brand-light);white-space: nowrap;">鄂ICP备17022556号-1</a>',
      },
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
      nav: [
        { text: '文档', link: '/backend/introduce', activeMatch: '/backend/' },
        {
          text: '下载 & 源码',
          items: [
            {
              text: '🥦 下载',
              items: [
                {
                  text: 'XHS.Spider下载',
                  link: 'https://github.com/xisuo67/XHS-Spider/releases',
                },
              ],
            },
            {
              text: '🏠 github源码地址',
              items: [
                {
                  text: 'XHS-Spider(master分支最新)',
                  link: 'https://github.com/xisuo67/XHS-Spider',
                },
              ],
            }
          ],
        },
        {
          text: '更新记录',
          items: [
            {
              text: '更新日志',
              link: 'https://github.com/xisuo67/XHS-Spider/blob/main/CHANGELOG.md',
            },
            {
              text: 'B站（bilibili）',
              link: 'https://space.bilibili.com/3493083607993010',
            },
          ],
        },
        {
          text: '参与 & 支持',
          link: '/support',
          activeMatch: '/support/',
        },
      ],
      sidebar: {
        '/backend/': [
          {
            text: '起步',
            collapsed: false,
            items: [
              { text: '简介', link: '/backend/introduce' },
              { text: '软件下载', link: '/backend/download' },
              { text: 'bug反馈 & 功能建议', link: '/backend/new-BugOrFunction' },
            ],
          },
          {
            text: '免责声明',
            collapsed: false,
            items: [{ text: '郑重声明', link: '/backend/stated' }],
          },
          {
            text: '其它',
            collapsed: false,
            items: [
              { text: '常见问题', link: '/backend/faq' },
              { text: '加群交流学习', link: '/backend/add-group' },
            ],
          },
        ],
      },
    },
  })
)
