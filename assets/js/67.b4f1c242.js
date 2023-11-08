(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{405:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"解决ios-h5支付宝支付不能跳回app的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决ios-h5支付宝支付不能跳回app的问题"}},[t._v("#")]),t._v(" 解决ios H5支付宝支付不能跳回App的问题")]),t._v(" "),s("p",[s("code",[t._v("这种做法只适合 APP -> 浏览器 -> 支付宝的支付形式")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://opendocs.alipay.com/open/203/105285/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档的原话"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("在 IOS 系统中，唤起支付宝 App 支付完成后，不会自动回到浏览器或商户 App。用户可手工切回到浏览器或商户 App；支付宝 H5 收银台会自动跳转回商户 return_url 指定的页面。")])]),t._v(" "),s("p",[t._v("官方文档这么说可能是不让你修改里面的"),s("code",[t._v("fromAppUrlScheme")]),t._v("值把，目前原因未知")]),t._v(" "),s("p",[t._v("1.当我们在webview 支付宝支付的时候，页面会加载支付宝返回的页面链接（如果浏览器访问的话，会直接跳到支付宝，在webview的话，就不会跳过去，需要点击 "),s("code",[t._v("继续付款")]),t._v(" 才会跳转，所以我们要对这里的 "),s("code",[t._v("继续付款")]),t._v(" 的按钮进行处理），如图：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://xin.img.alicbin.com/img/image-20211218094741915.png",alt:"image-20211218094741915"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("2.H5支付，这里就不贴代码了，其实就是前端发起请求，后端返回一个 form 表单，将他 v-html 渲染在页面上，在执行 setTimeout(()=>{document.forms[0].submit();},300) ，就可以了，具体参考网上代码。")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("3.首页我们要了解为什么会跳到支付宝APP，我们首先要了解下 "),s("code",[t._v("URL Scheme")]),t._v(" ，每个APP都有单独"),s("code",[t._v("URL Scheme")]),t._v(" ，除非恶意软件，它是能在浏览器输入访问的话，就会跳到对应的APP的一个东西，这里推荐一个网站，能查对应APP的"),s("code",[t._v("URL Scheme")]),t._v(":"),s("a",{attrs:{href:"https://sharecuts.cn/app/333206289",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sharecuts.cn/app/333206289"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("当我们点击继续付款的话，会出现(可以拿H5页面去测试，在log报错会出现这一条):")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("alipay://alipayclient/?xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("解码为(网站："),s("a",{attrs:{href:"http://tool.chinaz.com/tools/urlencode.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://tool.chinaz.com/tools/urlencode.aspx"),s("OutboundLink")],1),t._v(")：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('alipay://alipayclient/?{"requestType":"SafePay","fromAppUrlScheme":"alipays","dataString":"h5_route_token=\\"xxxxxxxxxxxxxxxxx\\"&is_h5_route=\\"true\\"&h5_route_senior=\\"true\\""}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("我们看到了 "),s("code",[t._v("alipay:")]),t._v("这个东西就是跳转到支付宝APP的东西，点击的话他在 IOS 上是   "),s("code",[t._v("点击 -> 链接到Safari-> 跳转到支付宝")]),t._v("，这里我们要对这段链接进行拦截并修改里面的"),s("code",[t._v("fromAppUrlScheme")]),t._v("的值，改成为你 公司的APP 的URL Scheme，这里我们看 "),s("code",[t._v("fromAppUrlScheme")]),t._v(" 的值为 "),s("code",[t._v("alipays")]),t._v("所以，支付成功后还是留在 支付宝")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("4.理解1、2两点之后我们在webview进行拦截，直接贴代码：")]),t._v(" "),s("p",[t._v("原理：这段代码是，拦截我们点击按钮跳转的链接，并修改里面的"),s("code",[t._v("fromAppUrlScheme")]),t._v("的值，实现跳转")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #ifdef APP-PLUS")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemInfoSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentWebview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$getAppWebview")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentWebview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t \n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拦截支付宝点击支付的按钮跳转，并修改里面的 fromAppUrlScheme 值")]),t._v("\n\t\t\twv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("overrideUrlLoading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reject'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*alipay\\:\\/\\/.*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("alipays")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.xxx.com://'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\tplus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'跳转支付宝成功:'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #endif")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[s("code",[t._v("注：我们使用 plus.runtime.openURL 会报一个错，会出现 报错code:-3,msg:此功能不支持，这是因为iOS平台需要通过设置appInf的action属性（Scheme）进行查询，在iOS9以后需要添加白名单才可查询。")])]),t._v(" "),s("p",[t._v('设置 在manifest.json文件的"plus"->"distribute"->"ios"下添加 urltypes 和 urlschemewhitelist  节点数据如下：')]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ios"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"urltypes"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"urlidentifier"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.xxx.www"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"urlschemes"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.xxx.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//名字随便取，不过要跟上面的拦截修改一致，拦截的话后面记得加上 ://，相关配置文章看我最后发的链接")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"urlschemewhitelist"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alipay"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("code",[t._v("注：保存后提交App云端打包后才能生效 或者自定义基座运行")])]),t._v(" "),s("blockquote",[s("p",[t._v("iOS平台设置UrlSchemes："),s("a",{attrs:{href:"https://ask.dcloud.net.cn/article/64",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ask.dcloud.net.cn/article/64"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("iOS平台设置应用访问白名单："),s("a",{attrs:{href:"https://ask.dcloud.net.cn/article/434",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ask.dcloud.net.cn/article/434"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);