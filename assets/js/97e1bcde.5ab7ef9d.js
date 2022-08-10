"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7737],{54852:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28503:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(86215),a=(t(49231),t(54852));const l={sidebar_position:2},o="addHelper",i={unversionedId:"apis/generator/plugin/file/addHelper",id:"apis/generator/plugin/file/addHelper",title:"addHelper",description:"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Help \u51fd\u6570\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863Custom Helpers\u3002",source:"@site/docs/apis/generator/plugin/file/addHelper.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/addHelper",permalink:"/docs/apis/generator/plugin/file/addHelper",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/apis/generator/plugin/file/introduce"},next:{title:"addPartial",permalink:"/docs/apis/generator/plugin/file/addPartial"}},p={},s=[{value:"name",id:"name",level:2},{value:"fn",id:"fn",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addhelper"},"addHelper"),(0,a.kt)("p",null,"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Help \u51fd\u6570\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#custom-helpers"},"Custom Helpers"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  addHelper: (name: string, fn: Handlebars.HelperDelegate) => void;\n  ...\n};\n")),(0,a.kt)("h2",{id:"name"},"name"),(0,a.kt)("p",null,"help \u51fd\u6570\u540d\u79f0\u3002"),(0,a.kt)("h2",{id:"fn"},"fn"),(0,a.kt)("p",null,"help \u51fd\u6570\u5b9e\u73b0\u3002"))}u.isMDXComponent=!0}}]);