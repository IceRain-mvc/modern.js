"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4620],{44993:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(18249),a=(t(52983),t(44993));const o={title:"Alias",sidebar_position:8},i=void 0,s={unversionedId:"guides/basic-features/alias",id:"guides/basic-features/alias",title:"Alias",description:"Modern.js allow aliases in JS and CSS\uff0cand the following aliases are built in:",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/basic-features/alias.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/alias",permalink:"/v2/en/docs/guides/basic-features/alias",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Alias",sidebar_position:8},sidebar:"guidesSidebar",previous:{title:"Environment Variable",permalink:"/v2/en/docs/guides/basic-features/env-vars"},next:{title:"HTML Template",permalink:"/v2/en/docs/guides/basic-features/html"}},l={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js allow aliases in JS and CSS\uff0cand the following aliases are built in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  '@': '<appDirectory>/src',\n  '@shared': '<appDirectory>/shared',\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When the optional features is enable, the generator will also add built-in aliases dynamically. For example, when BFF is enabled, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@api")," alias will be added by default.")),(0,a.kt)("p",null,"For example, import the modules from the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/common/")," directory in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 common\n\u2502\xa0\xa0 \u251c\u2500\u2500 styles\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 base.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 utils\n\u2502\xa0\xa0     \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 App.tsx\n")),(0,a.kt)("p",null,"the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import utils from '@/src/common/utils';\nimport '@/src/common/styles/base.css';\n")),(0,a.kt)("p",null,"Modern.js also provides a way to config aliases. Adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"@common")," alias as an example. For TypeScript projects, you only need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions.paths")," under the project root directory ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "paths": {\n      "@/*": [\n        "./src/*"\n      ],\n      "@/common/*": [\n        "./src/common/*"\n      ]\n    }\n  },\n}\n')),(0,a.kt)("p",null,"JavaScript project can config by ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/alias"},(0,a.kt)("inlineCode",{parentName:"a"},"source.alias"))," in ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common'\n    }\n  }\n});\n")),(0,a.kt)("p",null,"for more detail, see \u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/alias"},"API - source.alias"),"\u3011\u3002"))}u.isMDXComponent=!0}}]);