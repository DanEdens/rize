(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{188:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("Rize 是一个提供顶层的、流畅并且可以链式调用的 API 的库，它能让您简单地使用 puppeteer。")]),a._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("完全的 TypeScript 支持")])]),a._v(" "),s("li",[s("p",[a._v("可链式调用的 API")])]),a._v(" "),s("li",[s("p",[a._v("您仍然可以访问底层的 "),s("code",[a._v("puppeteer")]),a._v(" 的浏览器实例和页面实例")])]),a._v(" "),s("li",[s("p",[a._v("提供了很多方便有用的断言方法（用于测试）")])])]),a._v(" "),s("h2",{attrs:{id:"api-参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-参考","aria-hidden":"true"}},[a._v("#")]),a._v(" API 参考")]),a._v(" "),s("p",[a._v("如果您在查找 "),s("code",[a._v("Rize")]),a._v(" 的所有可用的方法，请移步至"),s("a",{attrs:{href:"https://rize.js.org/api/modules/_index_.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[s("code",[a._v("puppeteer")]),a._v(" 是 "),s("code",[a._v("Rize")]),a._v(" 的一个 peer dependency，因此您需要额外地安装 "),s("code",[a._v("puppeteer")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yarn add --dev puppeteer rize\n")])])]),s("p",[a._v("或者通过 npm：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev puppeteer rize\n")])])]),s("p",[a._v("对于中国用户，最好指定 Chromium 的镜像：")]),a._v(" "),s("p",[a._v("对于 Linux 或 macOS 用户：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("PUPPETEER_DOWNLOAD_HOST"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://npm.taobao.org/mirrors yarn add --dev puppeteer rize\n")])])]),s("p",[a._v("Windows 用户：")]),a._v(" "),s("div",{staticClass:"language-batch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-batch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PUPPETEER_DOWNLOAD_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("npm.taobao.org"),s("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("/mirrors")]),a._v(" yarn add "),s("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--dev")]),a._v(" puppeteer rize")]),a._v("\n")])])]),s("p",[a._v("对于 TypeScript 用户，您可能需要安装 "),s("code",[a._v("puppeteer")]),a._v(" 的类型定义文件。这是可选的。如果您需要直接访问 puppeteer 的 API，推荐您安装它：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yarn add --dev @types/puppeteer\n")])])]),s("p",[a._v("或")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @types/puppeteer\n")])])]),s("h2",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),s("p",[a._v("我们推荐使用 ES 风格的 "),s("code",[a._v("import")]),a._v(" 语法：")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Rize "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rize'")]),a._v("\n")])])]),s("p",[a._v("当然，使用 CommonJS 风格的语法也是可以的：")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" Rize "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rize'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("现在我们来创建一个 "),s("code",[a._v("Rize")]),a._v(" 实例：")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" rize "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("这里是一个例子：")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("rize\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://github.com/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'input.header-search-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'node'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("press")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Enter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("waitForNavigation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("assertSee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Node.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 别忘了调用 `end` 方法来退出浏览器！")]),a._v("\n")])])]),s("p",[a._v("现在您可以继续阅读本文档来获取更多信息！")]),a._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),s("p",[a._v("见 "),s("RouterLink",{attrs:{to:"/zh-CN/faq.html"}},[a._v("FAQ")]),a._v(" 页面。")],1),a._v(" "),s("h2",{attrs:{id:"开源许可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开源许可","aria-hidden":"true"}},[a._v("#")]),a._v(" 开源许可")]),a._v(" "),s("p",[a._v("MIT License")]),a._v(" "),s("p",[a._v("Copyright (c) 2018-present Pig Fang")])])},[],!1,null,null,null);t.default=r.exports}}]);