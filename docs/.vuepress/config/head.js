// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  // ['link', { rel: 'icon', href: '/img/logo.jpg' }], //favicons，资源放在public文件夹
  ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/67888115?s=400&u=3c698799bb4be34b847bae0d11e0c3363d852440&v=4' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: 'cv编程',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  [
    'script',
    {
      'data-ad-client': 'ca-pub-7828333725993554',
      async: 'async',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },
  ], // 网站关联Google AdSense 与 html格式广告支持
	['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
	['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }]

]
