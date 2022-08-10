"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1790],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,v=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(86215),r=(n(49231),n(54852));const o={title:"useModuleApps",sidebar_position:7},i=void 0,p={unversionedId:"apis/runtime/app/use-module-apps",id:"apis/runtime/app/use-module-apps",title:"useModuleApps",description:"\u8fd4\u56de\u6240\u6709\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\uff0c\u7528\u4e8e\u53ef\u81ea\u7531\u63a7\u5236\u8def\u7531\u3002",source:"@site/docs/apis/runtime/app/use-module-apps.md",sourceDirName:"apis/runtime/app",slug:"/apis/runtime/app/use-module-apps",permalink:"/docs/apis/runtime/app/use-module-apps",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"useModuleApps",sidebar_position:7},sidebar:"apisSidebar",previous:{title:"useModuleApp",permalink:"/docs/apis/runtime/app/use-module-app"},next:{title:"bootstrap",permalink:"/docs/apis/runtime/app/bootstrap"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd4\u56de\u6240\u6709\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\uff0c\u7528\u4e8e\u53ef\u81ea\u7531\u63a7\u5236\u8def\u7531\u3002"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModuleApps } from '@modern-js/plugin-garfish';\n")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be5 API \u5728\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u5148\u5f00\u542f\u5fae\u524d\u7aef\u3002"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModuleApps() => Record<string, React.FC<any>>")),(0,r.kt)("p",null,"\u5206\u522b\u8fd4\u56de\u5305\u88f9\u6bcf\u4e2a\u5b50\u5e94\u7528\u540e\u7684 React \u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u9700\u8981\u5148\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"defineConfig({\n  runtime: {\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: 'Home',\n            entry: 'http://www.home.com'\n          },\n          {\n            name: 'Contact',\n            entry: 'http://www.contact.com'\n          },\n        ]\n      }\n    }\n  }\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"function App() {\n  const { Home, Contact } = useModuleApps();\n\n  return <div>\n    Master APP\n    <Route exact path='/home'>\n      <Home />\n    </Route>\n    <Route exact path='/home'>\n      <Contact />\n    </Route>\n  </div>;\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useModuleApps()")," \u83b7\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact")," \u5b50\u5e94\u7528\u7ec4\u4ef6\uff08\u540d\u79f0\u548c\u914d\u7f6e\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u5bf9\u5e94\uff09\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u666e\u901a\u7684 React \u7ec4\u4ef6\u4e00\u6837\u53bb\u52a0\u8f7d\u5b50\u5e94\u7528\u3002"))}c.isMDXComponent=!0}}]);