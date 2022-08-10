"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4071],{54852:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||i;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81298:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(86215),a=(t(49231),t(54852));const i={sidebar_position:3},l="addPartial",o={unversionedId:"apis/generator/plugin/file/addPartial",id:"apis/generator/plugin/file/addPartial",title:"addPartial",description:"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Partial \u7247\u6bb5\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863Partials\u3002",source:"@site/docs/apis/generator/plugin/file/addPartial.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/addPartial",permalink:"/docs/apis/generator/plugin/file/addPartial",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"addHelper",permalink:"/docs/apis/generator/plugin/file/addHelper"},next:{title:"addFile",permalink:"/docs/apis/generator/plugin/file/addFile"}},p={},s=[{value:"name",id:"name",level:2},{value:"str",id:"str",level:2}],d={toc:s};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addpartial"},"addPartial"),(0,a.kt)("p",null,"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Partial \u7247\u6bb5\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#partials"},"Partials"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  addPartial: (name: string, str: Handlebars.Template) => void;\n  ...\n};\n")),(0,a.kt)("h2",{id:"name"},"name"),(0,a.kt)("p",null,"partial\u540d\u79f0\u3002"),(0,a.kt)("h2",{id:"str"},"str"),(0,a.kt)("p",null,"partial \u6a21\u677f\u5b57\u7b26\u4e32\u3002"))}c.isMDXComponent=!0}}]);