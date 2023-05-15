const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Zwx's blog", //导航栏
  description: 'Aal izz well 一切顺利',
  base: '/Blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  themeConfig,
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: '1c5e6d54f6e6d1951627',
          clientSecret: '4f472d489922395b3078ab618d9d168438b257bd',
          repo: 'Blog',
          owner: 'Zwx',
          admin: ['Zwx'],
          distractionFreeMode: false,
          id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- document.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body:"<%- document.title %>：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
		// [
		// 	 'cursor-effects',
		// 	 {
		// 			size: 2, // size of the particle, default: 2
		// 			shape: ['circle'], // shape of the particle, default: 'star'
		// 			zIndex: 999999999, // z-index property of the canvas, default: 999999999
		// 	 },
		// ],
  ]

}
