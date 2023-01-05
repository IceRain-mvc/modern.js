"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5237],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:2,title:"\u51fd\u6570\u5199\u6cd5 & \u6846\u67b6\u5199\u6cd5"},i=void 0,p={unversionedId:"guides/advanced-features/bff/type",id:"guides/advanced-features/bff/type",title:"\u51fd\u6570\u5199\u6cd5 & \u6846\u67b6\u5199\u6cd5",description:"\u8fd0\u884c\u65f6\u6846\u67b6\u652f\u6301\u4e5f\u662f BFF \u4e2d\u91cd\u8981\u7684\u4e00\u73af\u3002Modern.js \u652f\u6301\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55 BFF \u7684\u8fd0\u884c\u65f6\u6846\u67b6\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5185\u7f6e\u63d2\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5bf9\u5e94\u6846\u67b6\u7684\u7ea6\u5b9a\u548c\u751f\u6001\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/bff/type.md",sourceDirName:"guides/advanced-features/bff",slug:"/guides/advanced-features/bff/type",permalink:"/v2/docs/guides/advanced-features/bff/type",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u51fd\u6570\u5199\u6cd5 & \u6846\u67b6\u5199\u6cd5"},sidebar:"guidesSidebar",previous:{title:"\u57fa\u7840\u7528\u6cd5",permalink:"/v2/docs/guides/advanced-features/bff/function"},next:{title:"\u8fd0\u884c\u65f6\u6846\u67b6",permalink:"/v2/docs/guides/advanced-features/bff/frameworks"}},d={},s=[{value:"\u51fd\u6570\u5199\u6cd5",id:"\u51fd\u6570\u5199\u6cd5",level:2},{value:"\u6846\u67b6\u5199\u6cd5",id:"\u6846\u67b6\u5199\u6cd5",level:2}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd0\u884c\u65f6\u6846\u67b6\u652f\u6301\u4e5f\u662f ",(0,a.kt)("strong",{parentName:"p"},"BFF")," \u4e2d\u91cd\u8981\u7684\u4e00\u73af\u3002Modern.js \u652f\u6301\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55 BFF \u7684\u8fd0\u884c\u65f6\u6846\u67b6\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5185\u7f6e\u63d2\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5bf9\u5e94\u6846\u67b6\u7684\u7ea6\u5b9a\u548c\u751f\u6001\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u4e2d\u517c\u5bb9\u4e86\u8fd9\u4e9b\u6846\u67b6\u5927\u90e8\u5206\u7684\u89c4\u8303\uff0c\u6bcf\u4e00\u79cd\u6846\u67b6\u90fd\u9700\u8981\u63d0\u4f9b\u4e24\u7c7b\u6269\u5c55\u5199\u6cd5 BFF \u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u5206\u522b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570\u5199\u6cd5"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u6846\u67b6\u5199\u6cd5"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"api/")," \u76ee\u5f55\u7ed3\u6784\u662f\u5426\u4e3a\u6846\u67b6\u5199\u6cd5\u7531\u5bf9\u5e94\u7684\u63d2\u4ef6\u51b3\u5b9a\uff0cModern.js \u5e76\u4e0d\u5173\u5fc3\u3002")),(0,a.kt)("h2",{id:"\u51fd\u6570\u5199\u6cd5"},"\u51fd\u6570\u5199\u6cd5"),(0,a.kt)("p",null,"\u5f53\u63d2\u4ef6\u8ba4\u4e3a\u5f53\u524d\u4e3a\u51fd\u6570\u5199\u6cd5\u65f6\uff0c\u5fc5\u987b\u652f\u6301\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_app.ts")," \u4e2d\u7f16\u5199\u4e2d\u95f4\u4ef6\uff0c\u7528\u6765\u6269\u5c55 BFF \u51fd\u6570\u3002"),(0,a.kt)("p",null,"Modern.js \u4f1a\u6536\u96c6 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_app.ts")," \u4e2d\u7684\u4e2d\u95f4\u4ef6\uff0c\u5e76\u4f20\u9012\u7ed9\u63d2\u4ef6\uff0c\u7531\u63d2\u4ef6\u5c06\u4e2d\u95f4\u4ef6\u6ce8\u5165\u8fd0\u884c\u65f6\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(myMiddleware);\n});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u63d2\u4ef6\u7684\u4e2d\u95f4\u4ef6\u7684\u5199\u6cd5\u4e0d\u4e00\u5b9a\u76f8\u540c\uff0c\u8be6\u60c5\u53ef\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/bff/frameworks"},"\u8fd0\u884c\u65f6\u6846\u67b6"),"\u3002")),(0,a.kt)("h2",{id:"\u6846\u67b6\u5199\u6cd5"},"\u6846\u67b6\u5199\u6cd5"),(0,a.kt)("p",null,"\u6846\u67b6\u5199\u6cd5\u662f\u4e00\u79cd\u4f7f\u7528\u6846\u67b6\u7ed3\u6784\u6765\u6269\u5c55 BFF \u51fd\u6570\u7684\u65b9\u5f0f\u3002\u548c\u51fd\u6570\u5199\u6cd5\u76f8\u6bd4\uff0c\u6846\u67b6\u5199\u6cd5\u867d\u7136\u80fd\u591f\u5229\u7528\u66f4\u591a\u6846\u67b6\u7684\u7ed3\u6784\uff0c\u5728\u590d\u6742\u573a\u666f\u4e0b\u8ba9\u6574\u4e2a BFF Server \u66f4\u52a0\u6e05\u6670\uff0c\u4f46\u4e5f\u76f8\u7684\u66f4\u52a0\u590d\u6742\uff0c\u9700\u8981\u5173\u5fc3\u66f4\u591a\u6846\u67b6\u5c42\u9762\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u6846\u67b6\u5199\u6cd5\u4e2d\uff0c\u6240\u6709\u7684 BFF \u51fd\u6570\u90fd\u9700\u8981\u5199\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/lambda/")," \u76ee\u5f55\u4e0b\uff0c\u5e76\u4e14\u65e0\u6cd5\u4f7f\u7528\u94a9\u5b50\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"_app.[tj]s"),"\u3002"),(0,a.kt)("p",null,"\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u51fd\u6570\u5199\u6cd5\u5c31\u80fd\u8986\u76d6\u5927\u591a\u6570 BFF \u51fd\u6570\u7684\u5b9a\u5236\u9700\u6c42\u3002\u53ea\u6709\u5f53\u4f60\u7684\u9879\u76ee\u670d\u52a1\u7aef\u903b\u8f91\u6bd4\u8f83\u590d\u6742\uff0c\u4ee3\u7801\u9700\u8981\u5206\u5c42\uff0c\u6216\u8005\u9700\u8981\u4f7f\u7528\u66f4\u591a\u6846\u67b6\u7684\u5143\u7d20\u65f6\uff0c\u624d\u9700\u8981\u4f7f\u7528\u6846\u67b6\u5199\u6cd5\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u63d2\u4ef6\u6846\u67b6\u5199\u6cd5\u7684\u76ee\u5f55\u7ed3\u6784\u4e0d\u4e00\u5b9a\u76f8\u540c\uff0c\u8be6\u60c5\u53ef\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/bff/frameworks"},"\u8fd0\u884c\u65f6\u6846\u67b6"),"\u3002")))}c.isMDXComponent=!0}}]);