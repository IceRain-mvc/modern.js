(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{366:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"拆包最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆包最佳实践"}},[t._v("#")]),t._v(" 拆包最佳实践")]),t._v(" "),s("p",[t._v("良好的拆包策略对于提升应用的加载性能是十分重要的，可以充分利用浏览器的缓存机制，减少请求数量，加快页面加载速度。")]),t._v(" "),s("p",[t._v("在 Builder 中内置了多种拆包策略，可以满足大部分应用的需求，你也可以根据自己的业务场景，自定义拆包配置。")]),t._v(" "),s("h2",{attrs:{id:"拆包策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆包策略"}},[t._v("#")]),t._v(" 拆包策略")]),t._v(" "),s("blockquote",[s("p",[t._v("Builder 的拆包配置集中在 "),s("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-chunksplit"}},[t._v("performance.chunkSplit")]),t._v(" 中。")],1)]),t._v(" "),s("p",[t._v("Builder 中包括如下的拆包策略：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("split-by-experience")]),t._v(": 根据经验内置拆分策略（由 Builder 根据经验制定的拆分策略）。")]),t._v(" "),s("li",[s("code",[t._v("split-by-module")]),t._v(": 根据模块进行拆分，每一个 NPM 包就是一个 chunk。")]),t._v(" "),s("li",[s("code",[t._v("all-in-one")]),t._v(": 业务代码和第三方代码都在一个 chunk 中。")]),t._v(" "),s("li",[s("code",[t._v("single-vendor:")]),t._v(" 第三方代码在一个 vendor chunk 中。")]),t._v(" "),s("li",[s("code",[t._v("split-by-size")]),t._v(": 根据模块大小进行拆分。")])]),t._v(" "),s("h3",{attrs:{id:"split-by-experience"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-experience"}},[t._v("#")]),t._v(" split-by-experience")]),t._v(" "),s("h4",{attrs:{id:"分包策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包策略"}},[t._v("#")]),t._v(" 分包策略")]),t._v(" "),s("p",[t._v("根据以往的经验，内置的拆分组包括：")]),t._v(" "),s("ul",[s("li",[t._v("React (react, react-dom)")]),t._v(" "),s("li",[t._v("Router (react-router, react-router-dom, history)")]),t._v(" "),s("li",[t._v("Polyfill (core-js, @babel/runtime)")]),t._v(" "),s("li",[t._v("Semi (@ies/semi, @douyinfe/semi-ui)")]),t._v(" "),s("li",[t._v("Arco (@arco-design/web-react)")]),t._v(" "),s("li",[t._v("Lodash (lodash, lodash-es)")])]),t._v(" "),s("p",[t._v("这种拆包策略将常用的包进行分组，然后拆分为单独的 Chunk，一般 Chunk 的数量不会很多，适合绝大部分应用，同时也是我们推荐的拆包策略。")]),t._v(" "),s("h4",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"split-by-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-module"}},[t._v("#")]),t._v(" split-by-module")]),t._v(" "),s("h4",{attrs:{id:"分包策略-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包策略-2"}},[t._v("#")]),t._v(" 分包策略")]),t._v(" "),s("p",[t._v("将每一个 NPM 包拆分为一个 Chunk。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("这样会最细化地拆分 node_modules，同时在 HTTP/2 下因为多路复用会加快资源的加载时间，不过在非 HTTP/2 的环境下因为 HTTP 队头阻塞问题需要慎用。")])]),t._v(" "),s("h4",{attrs:{id:"配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"all-in-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-in-one"}},[t._v("#")]),t._v(" all-in-one")]),t._v(" "),s("h4",{attrs:{id:"分包策略-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包策略-3"}},[t._v("#")]),t._v(" 分包策略")]),t._v(" "),s("p",[t._v("此分包策略将业务代码、第三方依赖打包在同一个 Chunk 中。")]),t._v(" "),s("h4",{attrs:{id:"配置-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-3"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all-in-one'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"single-vendor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-vendor"}},[t._v("#")]),t._v(" single-vendor")]),t._v(" "),s("h4",{attrs:{id:"分包策略-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包策略-4"}},[t._v("#")]),t._v(" 分包策略")]),t._v(" "),s("p",[t._v("此分包策略将第三方依赖打包在一个 Chunk 中，业务代码打包在另外的 Chunk 中。")]),t._v(" "),s("h4",{attrs:{id:"配置-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-4"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single-vendor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"split-by-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-size"}},[t._v("#")]),t._v(" split-by-size")]),t._v(" "),s("h4",{attrs:{id:"分包策略-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包策略-5"}},[t._v("#")]),t._v(" 分包策略")]),t._v(" "),s("p",[t._v("该策略下，设置 "),s("code",[t._v("minSize")]),t._v("、"),s("code",[t._v("maxSize")]),t._v(" 为一个固定值后，Webpack 会自动进行拆分，无需干预。")]),t._v(" "),s("h4",{attrs:{id:"配置-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-5"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-size'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义拆包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义拆包"}},[t._v("#")]),t._v(" 自定义拆包")]),t._v(" "),s("p",[t._v("除了使用内置的拆包策略外，你也可以通过 Builder 自定义拆包功能来满足更多的定制化需求。自定义拆包分为两部分:")]),t._v(" "),s("ul",[s("li",[t._v("自定义拆包分组")]),t._v(" "),s("li",[t._v("自定义原生 webpack 拆包配置")])]),t._v(" "),s("p",[t._v("值得注意的是，这两种自定义拆包能力可以和内置的拆包策略一起使用，也就是说，你可以使用内置的拆包策略来拆分常用的包，然后再使用自定义拆包功能来拆分其他的包。")]),t._v(" "),s("h3",{attrs:{id:"自定义分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义分组"}},[t._v("#")]),t._v(" 自定义分组")]),t._v(" "),s("p",[t._v("Builder 支持自定义拆包分组，这样比内置拆包策略更灵活，同时比手写 webpack 配置更简单。比如:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      forceSplitting"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 lodash 拆分为一个 Chunk")]),t._v("\n        lodash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules\\/lodash")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules\\/lodash-es")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过 "),s("code",[t._v("forceSplitting")]),t._v(" 配置，你可以很方便把某些包拆分为一个 Chunk。")]),t._v(" "),s("h3",{attrs:{id:"自定义-webpack-拆包配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-webpack-拆包配置"}},[t._v("#")]),t._v(" 自定义 webpack 拆包配置")]),t._v(" "),s("p",[t._v("除了使用自定义分组外，你还可以通过 "),s("code",[t._v("override")]),t._v(" 配置项来自定义原生 webpack 拆包配置，比如:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      override"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        minSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中 "),s("code",[t._v("override")]),t._v(" 中的配置会和 webpack 的配置进行合并，具体配置项请参考 "),s("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 官方文档"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);