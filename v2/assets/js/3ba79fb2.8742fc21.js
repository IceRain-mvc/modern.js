"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3277],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(18249),o=(r(52983),r(44993));const a={sidebar_position:4},i="Monorepo",l={unversionedId:"guides/topic-detail/generator/config/monorepo",id:"guides/topic-detail/generator/config/monorepo",title:"Monorepo",description:"Monorepo \u9879\u76ee\u9ed8\u8ba4\u53ea\u9700\u8981 PackageManager \u914d\u7f6e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/config/monorepo.md",sourceDirName:"guides/topic-detail/generator/config",slug:"/guides/topic-detail/generator/config/monorepo",permalink:"/v2/docs/guides/topic-detail/generator/config/monorepo",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u6a21\u5757",permalink:"/v2/docs/guides/topic-detail/generator/config/module"},next:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/v2/docs/guides/topic-detail/generator/plugin/abstract"}},c={},p=[{value:"\u521b\u5efa\u5b50\u9879\u76ee",id:"\u521b\u5efa\u5b50\u9879\u76ee",level:2},{value:"solution",id:"solution",level:3},{value:"packageName",id:"packagename",level:3},{value:"packagePath",id:"packagepath",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monorepo"},"Monorepo"),(0,o.kt)("p",null,"Monorepo \u9879\u76ee\u9ed8\u8ba4\u53ea\u9700\u8981 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common#packagemanager"},"PackageManager \u914d\u7f6e"),"\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u5b50\u9879\u76ee"},"\u521b\u5efa\u5b50\u9879\u76ee"),(0,o.kt)("p",null,"Monorepo \u9879\u76ee\u652f\u6301\u901a\u8fc7\u4f7f\u7528 new \u547d\u4ee4\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u5b50\u9879\u76ee\u7c7b\u578b\u652f\u6301\u5e94\u7528\u3001\u6d4b\u8bd5\u5e94\u7528\u3001\u6a21\u5757\u3001\u5185\u90e8\u6a21\u5757\uff0c\u9664\u4e86\u5e94\u7528\u548c\u6a21\u5757\u5404\u81ea\u7684\u914d\u7f6e\u5916\uff0c\u8fd9\u91cc\u8fd8\u9700\u8981\u4e00\u4e9b\u901a\u7528\u7684\u5b50\u9879\u76ee\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"solution"},"solution"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u7c7b\u578b(solution)\uff0c\u4e0d\u540c\u5b50\u9879\u76ee\u7c7b\u578b\u5b57\u6bb5\u4e3a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528(mwa)"),(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\uff08\u6d4b\u8bd5\uff09(mwa_test)"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757(module)"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757\uff08\u5185\u90e8\uff09(inner_module)")),(0,o.kt)("h3",{id:"packagename"},"packageName"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u540d\u79f0(packageName)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"packagepath"},"packagePath"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u8def\u5f84(packagePath)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"))}s.isMDXComponent=!0}}]);