const path = require('path')

const announcementBarContent = `🌟好耶 是新的博客网站`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '郭惟一的博客',
  titleDelimiter: '-',
  url: 'https://blog.gwy.fun/',
  baseUrl: '/',
  favicon: 'https://www.gwy.fun/zhan/1.ico',
  organizationName: 'guoweiyi',
  projectName: 'blog',
  tagline: '郭惟一',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'https://www.gwy.fun/zhan/logo.jpg',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content:'郭惟一'
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: '郭惟一',
      logo: {
        alt: '郭惟一',
        src: 'https://www.gwy.fun/zhan/logo.jpg',
        srcDark: 'https://www.gwy.fun/zhan/logo.jpg',
      },
      hideOnScroll: true,
      items: [
        {
          label: '博客/动态',
          position: 'right',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '笔记',
              to: 'docs/skill/',
            }
          ],
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '友链',
          position: 'right',
          to: 'friends',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客/动态',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '项目',
              to: 'project',
            }
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/guoweiyi',
            },
            {
              label: 'B站',
              href: 'https://space.bilibili.com/501962640',
            },
            {
              label: '网易云',
              href: 'https://music.163.com/#/user/home?id=1542829210',
            }
          ],
        },
        {
          title: '更多',
          items: [{
            label: '友链',
            position: 'right',
            to: 'friends',
          }, {
            label: '导航',
            position: 'right',
            to: 'website',
          },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >晋公网安备 14010602060567号 | 晋ICP备19001447号-1</a></p><p>Copyright © 2023 - 郭惟一 Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: '5ZS6VKQ2HV',
      apiKey: 'd146f6a6f56acefe7116b6647f75ea08',
      indexName: 'suoyin',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'guoweiyi/blog',
      repoId: 'R_kgDOIv74Cg',
      category: 'General',
      categoryId: 'DIC_kwDOIv74Cs4CTf5_',
      mapping: 'title',
      lang: 'zh-CN',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/guoweiyi',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=2168522719&amp;site=qq',
      cloudmusic: 'https://music.163.com/#/user/home?id=1542829210',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/guoweiyi/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '郭惟一',
          copyright: `Copyright © 郭惟一 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">晋公网安备 14010602060567号 | 晋ICP备19001447号-1</a></p>`,
        },
      }
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'https://www.gwy.fun/zhan/logo.jpg',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config