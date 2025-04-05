const path = require('path')

const announcementBarContent = ``
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guoweiyi',
  onBrokenLinks: 'warn',
  titleDelimiter: '-',
  url: 'https://www.gwy.fun',
  baseUrl: '/blog',
  favicon: 'https://www.gwy.fun/zhan/1.ico',
  organizationName: 'guoweiyi',
  projectName: 'blog',
  tagline: 'Guoweiyi',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'https://www.gwy.fun/zhan/logo.jpg',
    announcementBar: {
      id: "feature_release", // Any value that will identify this message.
      content: `🌟高考顺利`,// <a href='/blog/yourname'>你的名字重映</a>
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    metadata: [
      {
        name: 'keywords',
        content:'Guoweiyi'
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: 'Guoweiyi',
      logo: {
        alt: 'Guoweiyi',
        src: 'https://www.gwy.fun/zhan/logo.jpg',
        srcDark: 'https://www.gwy.fun/zhan/logo.jpg',
      },
      hideOnScroll: true,
      items: [
        {
          label: '项目/应用',
          position: 'right',
          to: 'project',
        },
        {
          label: '技术笔记/文档',
          position: 'right',
          to: 'docs/skill',
        },
        {
          label: '友链',
          position: 'right',
          to: 'friends',
        },
        {
            label: '标签',
            position: 'right',
            to: 'tags',
        },
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
              label: '笔记',
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
          title: '其他',
          items: [{
            label: '网站外部检测',
            position: 'right',
            to: 'http://stats.gwy.fun/status/1',
          },
        ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >晋公网安备 14010602060567号 | 晋ICP备19001447号-1</a></p><p>Copyright © 2025 - Guoweiyi Built with Docusaurus.</p>`,
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
      matomoUrl: 'https://analyze.gwy.fun/',
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
          trackingID: "G-75FRZ1VWTM",
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
          title: 'Guoweiyi',
          copyright: `Copyright © Guoweiyi 2025 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">晋公网安备 14010602060567号 | 晋ICP备19001447号-1</a></p><script>!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JmbcAjeX5SSnvAbl",ck:"JmbcAjeX5SSnvAbl"});</script>`,
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
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
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
  }
}

module.exports = config
