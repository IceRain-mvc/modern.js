"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[900],{54852:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(49231);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=i,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(86215),i=(r(49231),r(54852));const o={sidebar_position:3},a="gitAddAndCommit",p={unversionedId:"apis/generator/plugin/git/gitAddAndCommit",id:"apis/generator/plugin/git/gitAddAndCommit",title:"gitAddAndCommit",description:"\u63d0\u4ea4\u5f53\u524d\u4ed3\u5e93\u53d8\u66f4\u3002",source:"@site/docs/apis/generator/plugin/git/gitAddAndCommit.md",sourceDirName:"apis/generator/plugin/git",slug:"/apis/generator/plugin/git/gitAddAndCommit",permalink:"/docs/apis/generator/plugin/git/gitAddAndCommit",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"initGitRepo",permalink:"/docs/apis/generator/plugin/git/initGitRepo"}},c={},s=[{value:"commitMessage",id:"commitmessage",level:2}],l={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitaddandcommit"},"gitAddAndCommit"),(0,i.kt)("p",null,"\u63d0\u4ea4\u5f53\u524d\u4ed3\u5e93\u53d8\u66f4\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type AfterForgedAPI = {\n  gitAddAndCommit: (commitMessage: string) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"commitmessage"},"commitMessage"),(0,i.kt)("p",null,"\u63d0\u4ea4\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);