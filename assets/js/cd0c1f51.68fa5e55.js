"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1344],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(86215),i=(n(49231),n(54852));const a={sidebar_position:2},l="updateService",o={unversionedId:"apis/runtime/electron/main-process/update-service",id:"apis/runtime/electron/main-process/update-service",title:"updateService",description:"* \u5347\u7ea7\u7ba1\u7406\u670d\u52a1",source:"@site/docs/apis/runtime/electron/main-process/update-service.md",sourceDirName:"apis/runtime/electron/main-process",slug:"/apis/runtime/electron/main-process/update-service",permalink:"/docs/apis/runtime/electron/main-process/update-service",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"winService",permalink:"/docs/apis/runtime/electron/main-process/win-service"},next:{title:"lifecycleService",permalink:"/docs/apis/runtime/electron/main-process/lifecycle-service"}},p={},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"checkForUpdates",id:"checkforupdates",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"quitAndInstall",id:"quitandinstall",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updateservice"},"updateService"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u7ba1\u7406\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E4%B8%BB%E8%BF%9B%E7%A8%8B"},"\u4e3b\u8fdb\u7a0b"),"\u3002")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateService } from '@modern-js/runtime/electron-main';\n")))),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"checkforupdates"},"checkForUpdates"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"updateService.checkForUpdates(options)")),(0,i.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"options\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u68c0\u67e5\u5347\u7ea7\u9009\u9879\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"receiver\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u63a5\u6536\u5347\u7ea7\u8fdb\u5ea6\u6d88\u606f\u7684\u7a97\u53e3\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},"url\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u68c0\u6d4b\u5347\u7ea7\u7248\u672c\u6587\u4ef6\u7684\u5730\u5740\u3002\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"xx.yml")," \u6587\u4ef6\u7684\u7236\u76ee\u5f55\uff09\u3002")))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,i.kt)("p",null,"\u68c0\u67e5\u5e94\u7528\u66f4\u65b0\u3002"),(0,i.kt)("h3",{id:"quitandinstall"},"quitAndInstall"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"updateService.quitAndInstall([isSilent])")),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[isSilent]","\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u662f\u5426\u9759\u9ed8\u5347\u7ea7\u3002")),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise<void>"),"\u3002")),(0,i.kt)("p",null,"\u9000\u51fa\u5e76\u5e94\u7528\u66f4\u65b0\uff0c\u6700\u7ec8\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"electron-updater")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"appUpdater.quitAndInstall(isSilent)"),"\u3002"))}u.isMDXComponent=!0}}]);