"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9413],{44993:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(52983);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=p,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(18249),p=(r(52983),r(44993));const i={title:"renderApp"},a=void 0,o={unversionedId:"apis/app/runtime/testing/renderApp",id:"apis/app/runtime/testing/renderApp",title:"renderApp",description:"render \u51fd\u6570\u7528\u4e8e\u6d4b\u8bd5\u666e\u901a\u7ec4\u4ef6\uff0crenderApp \u51fd\u6570\u7528\u4e8e\u6d4b\u8bd5\u5e94\u7528\u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/testing/renderApp.md",sourceDirName:"apis/app/runtime/testing",slug:"/apis/app/runtime/testing/renderApp",permalink:"/v2/docs/apis/app/runtime/testing/renderApp",draft:!1,tags:[],version:"current",frontMatter:{title:"renderApp"},sidebar:"apisAppSidebar",previous:{title:"render",permalink:"/v2/docs/apis/app/runtime/testing/render"}},l={},c=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u7528\u4e8e\u6d4b\u8bd5\u666e\u901a\u7ec4\u4ef6\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"renderApp")," \u51fd\u6570\u7528\u4e8e\u6d4b\u8bd5\u5e94\u7528\u7ec4\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp } from '@modern-js/runtime/testing';\n")),(0,p.kt)("p",null,"\u5e94\u7528\u7ec4\u4ef6\u6307\u5305\u542b\u4e00\u4e9b Modern.js \u4e0a\u4e0b\u6587\u7684\u7ec4\u4ef6\uff0c\u5982 App \u6839\u7ec4\u4ef6\uff0c\u4f7f\u7528\u4e86 Model \u7684 Container \u7b49\u3002\u5bf9\u4e8e\u8fd9\u7c7b\u7ec4\u4ef6\u7684\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"renderApp")," \u51fd\u6570\uff0c\u4f1a\u81ea\u52a8\u6309\u7167\u5f53\u524d ",(0,p.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u914d\u7f6e\uff0c\u5305\u88f9\u4e0a\u5bf9\u5e94\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"),(0,p.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"renderApp")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"/v2/docs/apis/app/runtime/testing/render"},"render")," \u5b8c\u5168\u4e00\u81f4\u3002"),(0,p.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp } from '@modern-js/runtime/testing';\nimport App from './App';\n\ndescribe('test', () => {\n  it('test App', () => {\n    const { getByText } = renderApp(<App />);\n    expect(getByText('Hello Modern!')).toBeInTheDocument();\n  });\n});\n")))}u.isMDXComponent=!0}}]);