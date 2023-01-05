"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1547],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(52983);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(18249),i=(r(52983),r(44993));const o={sidebar_position:9},a="rmFile",l={unversionedId:"guides/topic-detail/generator/plugin/api/file/rmFile",id:"guides/topic-detail/generator/plugin/api/file/rmFile",title:"rmFile",description:"\u5220\u9664\u6587\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/rmFile.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/rmFile",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/rmFile",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"guidesSidebar",previous:{title:"updateModernConfig",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/updateModernConfig"},next:{title:"rmDir",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/rmDir"}},p={},c=[{value:"fileName",id:"filename",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rmfile"},"rmFile"),(0,i.kt)("p",null,"\u5220\u9664\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  rmFile: (fileName: string) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"filename"},"fileName"),(0,i.kt)("p",null,"\u9700\u5220\u9664\u7684\u6587\u4ef6\u540d\u79f0\u6216\u6587\u4ef6\u8def\u5f84\u3002"))}s.isMDXComponent=!0}}]);