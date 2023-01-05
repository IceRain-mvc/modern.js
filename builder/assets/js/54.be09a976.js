(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{277:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"improve-build-performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#improve-build-performance"}},[t._v("#")]),t._v(" Improve Build Performance")]),t._v(" "),e("p",[t._v("Modern.js Builder optimizes build performance by default, but as the project becomes larger, you may encounter some build performance problems.")]),t._v(" "),e("p",[t._v("This document provides some optional speed-up strategies, developers can choose some of them to improve the build performance.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📢 Notice")]),t._v(" "),e("p",[t._v("The strategies in "),e("RouterLink",{attrs:{to:"/en/guide/optimization/optimize-bundle.html"}},[t._v("Bundle Size Optimization")]),t._v(" can also be used to improve build performance, so we won't repeat them here.")],1)]),t._v(" "),e("h2",{attrs:{id:"general-optimization-strategy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general-optimization-strategy"}},[t._v("#")]),t._v(" General optimization strategy")]),t._v(" "),e("p",[t._v("The following are some general optimization strategies, which can speed up the development build and production build, and some of them also optimize the bundle size.")]),t._v(" "),e("h3",{attrs:{id:"upgrade-node-js-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-node-js-version"}},[t._v("#")]),t._v(" Upgrade Node.js version")]),t._v(" "),e("p",[t._v("In general, updating Node.js to the latest "),e("a",{attrs:{href:"https://github.com/nodejs/release#release-schedule",target:"_blank",rel:"noopener noreferrer"}},[t._v("LTS release"),e("OutboundLink")],1),t._v(" will help improve build performance.")]),t._v(" "),e("p",[t._v("Especially for devices with Apple M1/M2 chips, it is recommended to use Node 16 or Node 18.")]),t._v(" "),e("p",[t._v("Node 16 provides Apple Silicon binaries by default, so the performance on M1/M2 models will be greatly improved than Node 14. According to our tests, "),e("strong",[t._v("After switching from Node 14 to Node 16, the compilation speed can be improved by more than 100%")]),t._v(".")]),t._v(" "),e("p",[t._v("You can switch to Node 16 by following steps:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install Node.js v16")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# switch to Node 16")]),t._v("\nnvm use "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set Node 16 as the default version")]),t._v("\nnvm default "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# View Node version")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" -v\n")])])]),e("h3",{attrs:{id:"using-swc-or-esbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-swc-or-esbuild"}},[t._v("#")]),t._v(" Using SWC or esbuild")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://SWC.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SWC"),e("OutboundLink")],1),t._v(" (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on "),e("code",[t._v("Rust")]),t._v(". SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("esbuild"),e("OutboundLink")],1),t._v(" is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance.")]),t._v(" "),e("p",[t._v("Builder provides SWC plugin and esbuild plugin that allow you to use SWC or esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. See:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/plugins/plugin-swc.html"}},[t._v("SWC plugin document")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/plugins/plugin-esbuild.html"}},[t._v("esbuild plugin document")])],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("SWC vs esbuild")]),t._v(" "),e("p",[t._v("The SWC compiled outputs has better compatibility, supports polyfills such as core-js, and has more complete features, so it is recommended to use the SWC plugin first.")])]),t._v(" "),e("h3",{attrs:{id:"avoid-using-ts-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avoid-using-ts-loader"}},[t._v("#")]),t._v(" Avoid using ts-loader")]),t._v(" "),e("p",[t._v("By default, Builder uses Babel to compile TS files. After enabling the "),e("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-tsloader"}},[t._v("tools.tsLoader")]),t._v(" option, "),e("code",[t._v("ts-loader")]),t._v(" will be used to compile TS files.")],1),t._v(" "),e("p",[t._v("Please avoid using "),e("code",[t._v("ts-loader")]),t._v(" because it requires additional parsing and type checking, which will slow down the build.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tools")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove this config")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tsLoader")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("See the "),e("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-tsloader"}},[t._v("tools.tsLoader documentation")]),t._v(" for details.")],1),t._v(" "),e("h2",{attrs:{id:"development-optimization-strategies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-optimization-strategies"}},[t._v("#")]),t._v(" Development optimization strategies")]),t._v(" "),e("p",[t._v("The following are strategies for improve build performance in development environment.")]),t._v(" "),e("h3",{attrs:{id:"enable-lazy-compilation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-lazy-compilation"}},[t._v("#")]),t._v(" Enable Lazy Compilation")]),t._v(" "),e("p",[t._v("You can enable the lazy compilation (i.e. on-demand compilation) to improve the compilation startup speed.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  experiments"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lazyCompilation"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      imports"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      entries"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This is an experimental feature and may not work correctly in some scenarios, see "),e("RouterLink",{attrs:{to:"/en/api/config-experiments.html#experiments-lazycompilation"}},[t._v("experiments.lazyCompilation")]),t._v(" for details.")],1),t._v(" "),e("h3",{attrs:{id:"adjust-source-map-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adjust-source-map-format"}},[t._v("#")]),t._v(" Adjust Source Map format")]),t._v(" "),e("p",[t._v("In order to provide a good debugging experience, Builder uses the "),e("code",[t._v("cheap-module-source-map")]),t._v(" format Source Map by default in the development environment, which is a high-quality Source Map format and will bring certain performance overhead.")]),t._v(" "),e("p",[t._v("You can improve build speed by adjusting the source map format of your development environment.")]),t._v(" "),e("p",[t._v("For example to disable Source Map:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tools")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpackChain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("devtool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Or set the source map format of the development environment to the cheapest "),e("code",[t._v("eval")]),t._v(" format:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tools")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpackChain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("devtool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eval'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("For detailed differences between different Source Map formats, see "),e("a",{attrs:{href:"https://webpack.js.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack - devtool"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"adjust-browserslist-for-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adjust-browserslist-for-development"}},[t._v("#")]),t._v(" Adjust Browserslist for development")]),t._v(" "),e("p",[t._v("This strategy is similar to "),e("RouterLink",{attrs:{to:"/en/guide/optimization/optimize-bundle.html#adjust-browserslist"}},[t._v('"Adjust Browserslist"')]),t._v(", the difference is that we can set different browserslist for development and production environment, thereby reducing the compilation overhead in the development environment.")],1),t._v(" "),e("p",[t._v("For example, you can add the following config to "),e("code",[t._v("package.json")]),t._v(", which means that only the latest browsers are compatible in the development environment, and the actual browsers are compatible in the production environment:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browserslist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"production"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('">0.2%"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not dead"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not op_mini all"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"development"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 1 chrome version"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 1 firefox version"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 1 safari version"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Note that this strategy can lead to some differences in the build result of development production environment.")]),t._v(" "),e("h2",{attrs:{id:"production-optimization-strategies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#production-optimization-strategies"}},[t._v("#")]),t._v(" Production optimization strategies")]),t._v(" "),e("p",[t._v("The following are strategies for improve build performance in production environment.")]),t._v(" "),e("h3",{attrs:{id:"disable-source-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-source-map"}},[t._v("#")]),t._v(" Disable Source Map")]),t._v(" "),e("p",[t._v("If your project does not need Source Map in the production, you can turn it off through the "),e("code",[t._v("disableSourceMap")]),t._v(" config to improve the build speed.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("disableSourceMap")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/en/api/config-output.html#output-disablesourcemap"}},[t._v("output.disableSourceMap")]),t._v(" for details.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);