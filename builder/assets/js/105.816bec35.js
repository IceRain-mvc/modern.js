(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{328:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"引用样式资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用样式资源"}},[s._v("#")]),s._v(" 引用样式资源")]),s._v(" "),t("p",[s._v("Builder 内置多种常用的样式资源处理方式，包括 Less / Sass 预处理器、PostCSS、CSS Modules、CSS 内联和 CSS 压缩。")]),s._v(" "),t("p",[s._v("除此之外，Builder 也提供了多个配置项来自定义样式资源的处理规则。")]),s._v(" "),t("h2",{attrs:{id:"使用-less、sass-和-stylus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-less、sass-和-stylus"}},[s._v("#")]),s._v(" 使用 Less、Sass 和 Stylus")]),s._v(" "),t("p",[s._v("Builder 内置了社区流行的 CSS 预处理器，包括 Less 和 Sass。")]),s._v(" "),t("p",[s._v("默认情况下，你不需要对 Less 和 Sass 进行任何配置。如果你有自定义 loader 配置的需求，可以通过配置 "),t("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-less"}},[s._v("tools.less")]),s._v("、"),t("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-sass"}},[s._v("tools.sass")]),s._v(" 来进行设置。")],1),s._v(" "),t("p",[s._v("你也可以在 Builder 中使用 Stylus，只需要安装 Builder 提供的 Stylus 插件即可，使用方式请参考 "),t("RouterLink",{attrs:{to:"/plugins/plugin-stylus.html"}},[s._v("Stylus 插件")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"使用-postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-postcss"}},[s._v("#")]),s._v(" 使用 PostCSS")]),s._v(" "),t("p",[s._v("Builder 内置了 "),t("a",{attrs:{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),t("OutboundLink")],1),s._v(" 来转换 CSS 代码。你可以通过 "),t("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-postcss"}},[s._v("tools.postcss")]),s._v(" 来配置 postcss-loader。")],1),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  tools"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("postcss")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" viewportPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-px-to-viewport'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        viewportWidth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("375")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("postcssOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("viewportPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("在默认情况下，我们开启了 "),t("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[s._v("autoprefixer"),t("OutboundLink")],1),s._v(" 来自动补齐 CSS 的浏览器前缀。如果你需要配置目标浏览器，可使用 "),t("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-overridebrowserslist"}},[s._v("output.overrideBrowserslist")]),s._v(" 进行配置。")],1),s._v(" "),t("h2",{attrs:{id:"使用-css-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-css-modules"}},[s._v("#")]),s._v(" 使用 CSS Modules")]),s._v(" "),t("p",[s._v("请阅读 "),t("RouterLink",{attrs:{to:"/guide/basic/css-modules.html"}},[s._v("使用 CSS Modules")]),s._v(" 章节来了解 CSS Modules 的完整用法。")],1),s._v(" "),t("h2",{attrs:{id:"css-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-压缩"}},[s._v("#")]),s._v(" CSS 压缩")]),s._v(" "),t("p",[s._v("通常情况下，在生产环境我们会将 CSS、JS 等静态资源进行压缩，以达到更好的传输效率。")]),s._v(" "),t("p",[s._v("Builder 通过 "),t("a",{attrs:{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-minimizer-webpack-plugin"),t("OutboundLink")],1),s._v(" 在生产环境构建时自动压缩 CSS 代码（底层使用的压缩工具为 "),t("a",{attrs:{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cssnano"),t("OutboundLink")],1),s._v("）。")]),s._v(" "),t("p",[s._v("你可以通过 "),t("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-minifycss"}},[s._v("tools.minifyCss")]),s._v(" 配置项来修改 "),t("code",[s._v("css-minimizer-webpack-plugin")]),s._v("的配置。")],1),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("关于 cssnano")]),s._v(" "),t("p",[s._v("cssnano 是一个用于优化和压缩 CSS 文件的工具。它通过删除未使用的规则、合并相同的规则、移除注释和空白符以及转换长度单位等方式来减小 CSS 文件的体积，从而提升网站的加载速度。")])]),s._v(" "),t("h2",{attrs:{id:"内联-css-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内联-css-文件"}},[s._v("#")]),s._v(" 内联 CSS 文件")]),s._v(" "),t("p",[s._v("默认情况下，Builder 会把 CSS 提取为独立的 "),t("code",[s._v(".css")]),s._v(" 文件，并输出到构建产物目录。")]),s._v(" "),t("p",[s._v("如果你希望将样式内联到 JS 文件中，可以将 "),t("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-disablecssextract"}},[s._v("output.disableCssExtract")]),s._v(" 设置为 "),t("code",[s._v("true")]),s._v(" 来禁用 CSS 提取逻辑。当浏览器请求到 JS 文件后，JS 将动态地向 HTML 插入 "),t("code",[s._v("<style>")]),s._v(" 标签，以此加载 CSS 样式。")],1),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    disableCssExtract"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("这将会增大你的 JS Bundle 体积，因此通常情况下，不太建议禁用 CSS 提取逻辑。")]),s._v(" "),t("h2",{attrs:{id:"引用-node-modules-里的样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用-node-modules-里的样式"}},[s._v("#")]),s._v(" 引用 node_modules 里的样式")]),s._v(" "),t("p",[s._v("你可以直接引用 node_modules 里的样式文件。")]),s._v(" "),t("ul",[t("li",[s._v("在组件中引用：")])]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/App.tsx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引用 Arco Design 样式：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@arco-design/web-react/dist/css/arco.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("在样式文件中引用：")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* src/App.css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 引用 normalize.css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* https://github.com/necolas/normalize.css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normalize.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);