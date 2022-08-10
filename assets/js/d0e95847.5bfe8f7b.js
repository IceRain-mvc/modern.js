"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6442],{54852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(86215),o=(r(49231),r(54852));const i={sidebar_position:1,title:"\u5fae\u524d\u7aef\u4ecb\u7ecd"},a=void 0,s={unversionedId:"guides/features/micro-frontend/introduction",id:"guides/features/micro-frontend/introduction",title:"\u5fae\u524d\u7aef\u4ecb\u7ecd",description:"\u968f\u7740\u524d\u7aef\u751f\u6001\u7684\u7e41\u91cd\u4ee5\u53ca Web \u5e94\u7528\u65e5\u76ca\u590d\u6742\u5316\uff0c\u7ed9\u5927\u578b\u9879\u76ee\u7814\u53d1\u6d41\u7a0b\u3001\u8de8\u56e2\u961f\u534f\u4f5c\u7b49\u5e26\u6765\u4e0d\u5c0f\u7684\u6311\u6218\u3002\u5fae\u524d\u7aef\u4ece\u67b6\u6784\u5c42\u9762\u51fa\u53d1\u5c06\u591a\u4e2a\u72ec\u7acb\u4ea4\u4ed8\u7684\u524d\u7aef\u5e94\u7528\u7ec4\u6210\u6574\u4f53\uff0c\u8fd9\u4e9b\u524d\u7aef\u5e94\u7528\u80fd\u591f\u300c\u72ec\u7acb\u5f00\u53d1\u300d\u3001\u300c\u72ec\u7acb\u6d4b\u8bd5\u300d\u3001\u300c\u72ec\u7acb\u90e8\u7f72\u300d\uff0c\u4f46\u662f\u6700\u7ec8\u5728\u7528\u6237\u770b\u6765\u4ecd\u7136\u662f\u5185\u805a\u7684\u5355\u4e2a\u4ea7\u54c1\u3002",source:"@site/docs/guides/features/micro-frontend/introduction.md",sourceDirName:"guides/features/micro-frontend",slug:"/guides/features/micro-frontend/introduction",permalink:"/docs/guides/features/micro-frontend/introduction",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5fae\u524d\u7aef\u4ecb\u7ecd"},sidebar:"guidesSidebar",previous:{title:"\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1\u7f51\u7ad9",permalink:"/docs/guides/features/server-side/deploy/static-hosting"},next:{title:"\u5b50\u5e94\u7528\u8c03\u8bd5",permalink:"/docs/guides/features/micro-frontend/debugging"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u968f\u7740\u524d\u7aef\u751f\u6001\u7684\u7e41\u91cd\u4ee5\u53ca Web \u5e94\u7528\u65e5\u76ca\u590d\u6742\u5316\uff0c\u7ed9\u5927\u578b\u9879\u76ee\u7814\u53d1\u6d41\u7a0b\u3001\u8de8\u56e2\u961f\u534f\u4f5c\u7b49\u5e26\u6765\u4e0d\u5c0f\u7684\u6311\u6218\u3002\u5fae\u524d\u7aef\u4ece\u67b6\u6784\u5c42\u9762\u51fa\u53d1\u5c06\u591a\u4e2a\u72ec\u7acb\u4ea4\u4ed8\u7684\u524d\u7aef\u5e94\u7528\u7ec4\u6210\u6574\u4f53\uff0c\u8fd9\u4e9b\u524d\u7aef\u5e94\u7528\u80fd\u591f\u300c\u72ec\u7acb\u5f00\u53d1\u300d\u3001\u300c\u72ec\u7acb\u6d4b\u8bd5\u300d\u3001\u300c\u72ec\u7acb\u90e8\u7f72\u300d\uff0c\u4f46\u662f\u6700\u7ec8\u5728\u7528\u6237\u770b\u6765\u4ecd\u7136\u662f\u5185\u805a\u7684\u5355\u4e2a\u4ea7\u54c1\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://garfish.top/guide/"},"Garfish")," \u662f\u4e1a\u754c\u6210\u719f\u7684\u5fae\u524d\u7aef\u89e3\u51b3\u65b9\u6848\uff0cModern.js \u4e2d\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://garfish.top/guide/"},"Garfish"),"\u3002"),(0,o.kt)("p",null,"\u5728\u5fae\u524d\u7aef\u7814\u53d1\u6a21\u5f0f\u4e2d\uff0c\u5e94\u7528\u4f1a\u88ab\u5206\u6210 ",(0,o.kt)("strong",{parentName:"p"},"\u4e3b\u5e94\u7528"),"\u3001\u548c ",(0,o.kt)("strong",{parentName:"p"},"\u5b50\u5e94\u7528"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u5e94\u7528\uff1a\u5fae\u524d\u7aef\u9879\u76ee\u7684\u57fa\u5ea7\u5de5\u7a0b\uff0c\u6240\u6709\u5b50\u5e94\u7528\u90fd\u4f1a\u7531\u5b83\u6765\u52a0\u8f7d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\uff1a\u72ec\u7acb\u5f00\u53d1\u3001\u72ec\u7acb\u90e8\u7f72\u7684\u5e94\u7528\uff0c\u6700\u7ec8\u4f1a\u88ab\u4e3b\u5e94\u7528\u52a0\u8f7d\u3002")),(0,o.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\u5feb\u901f\u4e0a\u624b\u4e2d ",(0,o.kt)("a",{parentName:"p",href:"/docs/start/micro-frontend"},"\u5f00\u53d1\u5fae\u524d\u7aef")," \u4e00\u8282\u5b66\u4e60\u5982\u679c\u4f7f\u7528 Modern.js \u5f00\u53d1\u5fae\u524d\u7aef\u4e3b\u5b50\u5e94\u7528\u3002"))}l.isMDXComponent=!0}}]);