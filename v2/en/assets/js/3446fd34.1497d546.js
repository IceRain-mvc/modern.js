"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4842],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var o=n(18249),r=(n(52983),n(44993));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n")),(0,r.kt)("p",null,"Whether to disable Source Map generation."),(0,r.kt)("admonition",{title:"What is a Source Map",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Source Map is an information file that saves the source code mapping relationship. It records each location of the compiled code and the corresponding pre-compilation location. With Source Map, you can directly view the source code when debugging the compiled code.")),(0,r.kt)("p",null,"By default, Builder's Source Map generation rules are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In development build, SourceMap of JS files and CSS files will be generated, which is convenient for debugging."),(0,r.kt)("li",{parentName:"ul"},"In production build, the Source Map of JS files will be generated for debugging and troubleshooting online problems; the Source Map of CSS files will not be generated.")),(0,r.kt)("p",null,"If the project does not need Source Map, you can turned off it to speed up the compile speed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n")),(0,r.kt)("p",null,"If you want to enable Source Map in development and disable it in the production, you can set to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n")),(0,r.kt)("p",null,"If you need to individually control the Source Map of JS files or CSS files, you can refer to the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n")))}i.isMDXComponent=!0;const l={title:"output.disableSourceMap",sidebar_label:"disableSourceMap"},u=void 0,p={unversionedId:"configure/app/output/disable-source-map",id:"configure/app/output/disable-source-map",title:"output.disableSourceMap",description:"This configuration is Modern.js Builder configuration, more detail can see output.disableSourceMap\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/disable-source-map.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/disable-source-map",permalink:"/v2/en/docs/configure/app/output/disable-source-map",draft:!1,tags:[],version:"current",frontMatter:{title:"output.disableSourceMap",sidebar_label:"disableSourceMap"},sidebar:"configsAppSidebar",previous:{title:"disableNodePolyfill",permalink:"/v2/en/docs/configure/app/output/disable-node-polyfill"},next:{title:"disableTsChecker",permalink:"/v2/en/docs/configure/app/output/disable-ts-checker"}},c={},s=[],d={toc:s};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-disablesourcemap"},"output.disableSourceMap"),"\u3002")),(0,r.kt)(i,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);