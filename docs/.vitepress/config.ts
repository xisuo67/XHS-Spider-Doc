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
      ['link', { rel: 'icon', href: '/XHS-Spider-Doc/favicon.ico' }],
      [
        'meta',
        {
          name: 'keywords',
          content: '小红书数据采集,批量下载,搬运,二创,去水印,小红书,数据采集,XHS,XHS.Spider',
        },
      ],
      [
        'meta',
        {
          name: 'description',
          content: '小红书数据采集,网站图片,搬运,二创,视频资源批量下载工具,颜值超高的数据采集工具（批量下载,视频提取,图片,去水印等）',
        },
      ],
      //https://www.jsdelivr.com/package/npm/@fancyapps/ui
      [
        'link',
        {
          rel: 'stylesheet',
          href: '/XHS-Spider-Doc/fancybox/fancybox.css',
        },
      ],
      [
        'script',
        {
          src: '/XHS-Spider-Doc/fancybox/fancybox.umd.js',
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
    description: '小红书数据采集,小红书,数据采集,搬运,二创,批量下载,网站图片,视频资源批量下载工具,颜值超高的数据采集工具（批量下载,视频提取,图片,去水印等）',
    lang: 'zh-CN',
    base: '/XHS-Spider-Doc/',
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
        pattern: 'https://github.com/xisuo67/XHS-Spider-Doc/edit/main/docs/:path',
        text: '在 github 上编辑此页',
      },
      footer: {
        message: '友情链接<a href="https://www.yuanxuegu.com/" target="_blank" rel="nofollow" style="color:var(--vp-c-brand-light);white-space: nowrap;">猿学谷</a>',
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
          text: '下载 & 授权',
          items: [
            {
              text: '🥦 下载',
              items: [
                {
                  text: 'XHS.Spider下载(github)',
                  link: 'https://github.com/xisuo67/XHS-Spider/releases',
                },
                // {
                //   text: 'XHS.Spider下载(gitee)',
                //   link: 'https://gitee.com/chuyia/XHS-Spider/releases',
                // },
                {
                  text: 'XHS.Spider下载(国内下载地址)',
                  link: '/backend/download'
                },
              ],
            },
            {
              text: '🏠 授权管理',
              items: [
                {
                  text: '申请授权',
                  link: '/backend/licensesDoc',
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
              { text:'环境安装',link: '/backend/install' },
              { text:'特别说明',link: '/backend/illustrate' },
              { text:'授权管理',link: '/backend/licensesDoc' },
              { text: '软件下载', link: '/backend/download' },
              { text: 'bug反馈 & 功能建议', link: '/backend/new-BugOrFunction' },
            ],
          },
          {
            text: '系统功能',
            collapsed: false,
            items: [
            { text: '首页', link: '/backend/system/home' },
            { text: '搜索', link: '/backend/system/search' },
            { text: '关注', link: '/backend/system/follow' },
            { text: '批量导入', link: '/backend/system/import' },
            { text: '采集评论', link: '/backend/system/comment' },
            { text: '设置', link: '/backend/system/setting' },
            { text: '下载服务设置', link: '/backend/system/downloadSetting' },
          ],
          },
          {
            text: '免责声明',
            collapsed: false,
            items: [{ text: '郑重声明', link: '/backend/stated' },{ text: '风险声明', link: '/backend/risk' }],
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
