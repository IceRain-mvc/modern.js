"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6367],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const i={title:"Head"},l=void 0,o={unversionedId:"apis/app/runtime/utility/head",id:"apis/app/runtime/utility/head",title:"Head",description:"\u7528\u4e8e\u7ed9 ` \u5143\u7d20\u5185\u6dfb\u52a0 html \u5143\u7d20\uff08\u5982 title\u3001meta\u3001script \u7b49\uff09\uff0c\u652f\u6301 SSR`\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/utility/head.md",sourceDirName:"apis/app/runtime/utility",slug:"/apis/app/runtime/utility/head",permalink:"/v2/docs/apis/app/runtime/utility/head",draft:!1,tags:[],version:"current",frontMatter:{title:"Head"},sidebar:"apisAppSidebar",previous:{title:"CSS-In-JS API",permalink:"/v2/docs/apis/app/runtime/utility/css-in-js"},next:{title:"loadable",permalink:"/v2/docs/apis/app/runtime/utility/loadable"}},p={},c=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u7528\u6cd5",id:"\u66f4\u591a\u7528\u6cd5",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u4e8e\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," \u5143\u7d20\u5185\u6dfb\u52a0 html \u5143\u7d20\uff08\u5982 title\u3001meta\u3001script \u7b49\uff09\uff0c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR"),"\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Helmet } from '@modern-js/runtime/head';\n\nexport default () => (\n  <Helmet>...</Helmet>\n)\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Helmet } from \'@modern-js/runtime/head\';\n\nfunction IndexPage() {\n  return (\n    <div>\n      <Helmet>\n        <title>My page title</title>\n        <meta name="viewport" content="initial-scale=1.0, width=device-width" />\n      </Helmet>\n      <p>Hello Modern.js!</p>\n    </div>\n  )\n}\n\nexport default IndexPage\n')),(0,a.kt)("h2",{id:"\u66f4\u591a\u7528\u6cd5"},"\u66f4\u591a\u7528\u6cd5"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"react-helmet"),"\u3002"))}m.isMDXComponent=!0}}]);