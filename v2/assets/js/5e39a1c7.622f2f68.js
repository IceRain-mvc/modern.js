"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1614],{44993:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>l});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=c(r),l=o,m=u["".concat(s,".").concat(l)]||u[l]||d[l]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const a={sidebar_position:5,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},i=void 0,p={unversionedId:"guides/advanced-features/bff/bff-proxy",id:"guides/advanced-features/bff/bff-proxy",title:"\u4f7f\u7528 BFF \u4ee3\u7406",description:"\u901a\u8fc7\u914d\u7f6e BFF \u4ee3\u7406\uff0c\u65e0\u9700\u624b\u52a8\u5199\u7801\uff0c\u5373\u53ef\u5bf9 API \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/bff/bff-proxy.md",sourceDirName:"guides/advanced-features/bff",slug:"/guides/advanced-features/bff/bff-proxy",permalink:"/v2/docs/guides/advanced-features/bff/bff-proxy",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},sidebar:"guidesSidebar",previous:{title:"\u8fd0\u884c\u65f6\u6846\u67b6",permalink:"/v2/docs/guides/advanced-features/bff/frameworks"},next:{title:"\u81ea\u5b9a\u4e49 Web Server",permalink:"/v2/docs/guides/advanced-features/web-server"}},s={},c=[],f={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e BFF \u4ee3\u7406\uff0c\u65e0\u9700\u624b\u52a8\u5199\u7801\uff0c\u5373\u53ef\u5bf9 API \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 BFF \u4ee3\u7406\u9700\u786e\u4fdd\u8bf7\u6c42\u80fd\u8fdb\u5165 BFF handler\u3002\uff08\u4f8b\u5982\u8bf7\u6c42\u8def\u5f84\u5fc5\u987b\u5305\u542b bff prefix\uff09")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.server-runtime.config.js")," \u6587\u4ef6\u4e2d\u7f16\u5199\u4ee5\u4e0b BFF \u4ee3\u7406\u914d\u7f6e\uff0c\u4f1a\u5c06\u53d1\u9001\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/v1/topics")," \u7684\u8bf7\u6c42\u4ee3\u7406\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cnodejs.org/api/v1/topics"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.server-runtime.config.js"',title:'"modern.server-runtime.config.js"'},"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6 API \u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/bff/proxy"},"BFF \u4ee3\u7406"),"\u3002\u66f4\u591a Modern.js \u4ee3\u7406\u7684\u80fd\u529b\u53ef\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/proxy"},"\u8c03\u8bd5\u4ee3\u7406"),"\u3002")))}d.isMDXComponent=!0}}]);