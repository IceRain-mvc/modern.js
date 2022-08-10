"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3724],{54852:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,v=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return t?n.createElement(v,i(i({ref:r},l),{},{components:t})):n.createElement(v,i({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91058:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(86215),a=(t(49231),t(54852));const o={sidebar_position:1},i="Web Server \u7b80\u8ff0",s={unversionedId:"guides/features/server-side/deploy/modern-server/web-server",id:"guides/features/server-side/deploy/modern-server/web-server",title:"Web Server \u7b80\u8ff0",description:"Modern.js \u4e3a\u5e94\u7528\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Web \u670d\u52a1\u5668\uff0c\u65e0\u8bba\u662f\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u6267\u884c dev \u547d\u4ee4\uff0c\u6216\u662f\u6267\u884c build && start \u547d\u4ee4\uff0c\u5728\u4efb\u4f55\u73af\u5883\u4e2d\u7b49\u4ef7\u7684\u6b63\u5f0f\u8fd0\u884c\uff0c\u90fd\u76f4\u63a5\u4f7f\u7528\u4e86 Modern.js \u5185\u7f6e\u7684 Web \u670d\u52a1\u5668\u3002",source:"@site/docs/guides/features/server-side/deploy/modern-server/web-server.md",sourceDirName:"guides/features/server-side/deploy/modern-server",slug:"/guides/features/server-side/deploy/modern-server/web-server",permalink:"/docs/guides/features/server-side/deploy/modern-server/web-server",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 BFF \u4ee3\u7406",permalink:"/docs/guides/features/server-side/bff/bff-proxy"},next:{title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC",permalink:"/docs/guides/features/server-side/deploy/modern-server/use-lambda/aliyun-fc"}},d={},p=[],l={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-server-\u7b80\u8ff0"},"Web Server \u7b80\u8ff0"),(0,a.kt)("p",null,"Modern.js \u4e3a\u5e94\u7528\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Web \u670d\u52a1\u5668\uff0c\u65e0\u8bba\u662f\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\uff0c\u6216\u662f\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"build && start")," \u547d\u4ee4\uff0c\u5728\u4efb\u4f55\u73af\u5883\u4e2d\u7b49\u4ef7\u7684\u6b63\u5f0f\u8fd0\u884c\uff0c\u90fd\u76f4\u63a5\u4f7f\u7528\u4e86 Modern.js \u5185\u7f6e\u7684 Web \u670d\u52a1\u5668\u3002"),(0,a.kt)("p",null,"\u5185\u7f6e\u7684 Web \u670d\u52a1\u5668\u5df2\u7ecf\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u7684\u4ea7\u54c1\u7ea7\u670d\u52a1\u5668"),"\u3002\u5b83\u4e0d\u4ec5\u5305\u542b\u4ea7\u7269\u70ed\u66f4\u65b0\u3001\u672c\u5730 Mock \u6570\u636e\u3001\u4ee3\u7406\u670d\u52a1\u5668\u7b49\u5f00\u53d1\u9636\u6bb5\u9700\u8981\u7684\u80fd\u529b\uff1b\u4e5f\u63d0\u4f9b\u4e86\u81ea\u52a8\u8def\u7531\u5bfb\u5740\u3001\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u3001SSR/SPR \u7b49\u529f\u80fd\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u80fd\u591f\u76f4\u63a5\u88ab Modern.js \u7684\u670d\u52a1\u5668\u6258\u7ba1\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5f3a\u70c8\u63a8\u8350\u5c06\u8fd9\u4e9b\u5185\u5bb9\u4e0a\u4f20\u5230 CDN\u3002"))),(0,a.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u7b80\u5355\u7684\u6267\u884c Modern.js \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," \u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u5e94\u7528\u6b63\u5e38\u542f\u52a8\u4e0e\u8fd0\u884c\u3002\u56e0\u6b64\uff0c\u5728\u4efb\u610f\u62e5\u6709\u6307\u5b9a Node \u73af\u5883\u7684\u5bb9\u5668\u4e2d\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6765\u8fd0\u884c Modern.js \u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u540e\u7eed\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u90fd\u901a\u8fc7\u8fd9\u4e2a Web \u670d\u52a1\u5668\u6765\u8fd0\u884c\u670d\u52a1\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u66f4\u591a Web Server \u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b\u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/features/server-side/web/routes"},"\u4e00\u4f53\u5316 Web"),"\u3011\u3002"))))}c.isMDXComponent=!0}}]);