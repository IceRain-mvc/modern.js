"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7697],{44993:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(52983);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52512:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var t=r(18249),a=(r(52983),r(44993));const l={title:"PreRender"},i=void 0,p={unversionedId:"apis/app/runtime/ssr/pre-render",id:"apis/app/runtime/ssr/pre-render",title:"PreRender",description:"\u65e0\u5c55\u793a\u5185\u5bb9\u7684\u9ad8\u9636\u7ec4\u4ef6\uff0c\u901a\u8fc7\u7c7b\u4f3c Helmet \u7684\u65b9\u5f0f\u5b9e\u73b0 SPA \u8def\u7531\u7ea7\u7684\u7f13\u5b58\uff0c\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/ssr/pre-render.md",sourceDirName:"apis/app/runtime/ssr",slug:"/apis/app/runtime/ssr/pre-render",permalink:"/v2/docs/apis/app/runtime/ssr/pre-render",draft:!1,tags:[],version:"current",frontMatter:{title:"PreRender"},sidebar:"apisAppSidebar",previous:{title:"NoSSR",permalink:"/v2/docs/apis/app/runtime/ssr/no-ssr"},next:{title:"hook",permalink:"/v2/docs/apis/app/runtime/bff/hook"}},o={},s=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:s};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u65e0\u5c55\u793a\u5185\u5bb9\u7684\u9ad8\u9636\u7ec4\u4ef6\uff0c\u901a\u8fc7\u7c7b\u4f3c Helmet \u7684\u65b9\u5f0f\u5b9e\u73b0 SPA \u8def\u7531\u7ea7\u7684\u7f13\u5b58\uff0c\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default () => (\n  <>\n    <PreRender interval={5} />\n  </>\n)\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u5957\u5e38\u7528\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u7f13\u5b58\u7684\u89c4\u5219\u3001\u8fc7\u671f\u65f6\u95f4\u3001\u7f13\u5b58\u7b97\u6cd5\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Props {\n  interval: number;\n  staleLimit: number;\n  level: number;\n  include: { header?: string[], query?: string[] };\n  matches: { header?: Record<string, any>, query?: Record<string, any> }\n}\n\nfunction PreRender(props: Props): React.Component\n")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval"),"\uff1a\u8bbe\u7f6e\u7f13\u5b58\u4fdd\u6301\u65b0\u9c9c\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u5728\u8be5\u65f6\u95f4\u5185\uff0c\u5c06\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\uff0c\u5e76\u4e14\u4e0d\u505a\u5f02\u6b65\u6e32\u67d3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"staleLimit"),"\uff1a\u8bbe\u7f6e\u7f13\u5b58\u5b8c\u5168\u8fc7\u671f\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u5728\u8be5\u65f6\u95f4\u5185\uff0c\u7f13\u5b58\u53ef\u4ee5\u88ab\u8fd4\u56de\uff0c\u5e76\u4e14\u4f1a\u505a\u4e00\u6b65\u6e32\u67d3\uff0c\u5426\u5219\u5fc5\u987b\u4f7f\u7528\u91cd\u65b0\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level"),"\uff1a\u8bbe\u7f6e\u7f13\u5b58\u6807\u8bc6\u7684\u8ba1\u7b97\u89c4\u5219\u7b49\u7ea7\uff0c\u901a\u5e38\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"includes")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"matches")," \u4f7f\u7528\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0\uff1a\u8def\u7531\u8def\u5f84\n1\uff1a\u8def\u7531\u8def\u5f84 + \u67e5\u8be2\u5b57\u7b26\u4e32\n2\uff1a\u8def\u7531\u8def\u5f84 + \u8bf7\u6c42\u5934\n3\uff1a\u8def\u7531\u8def\u5f84 + \u67e5\u8be2\u5b57\u7b26\u4e32 + \u8bf7\u6c42\u5934\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includes"),"\uff1a\u8bbe\u7f6e\u9700\u8981\u88ab\u7eb3\u5165\u7f13\u5b58\u6807\u8bc6\u7684\u5185\u5bb9\uff0c\u5728 level \u975e 0 \u65f6\u4f7f\u7528\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"matches"),"\uff1a\u8bbe\u7f6e query \u6216 header \u7684\u503c\u5728\u7f13\u5b58\u6807\u8bc6\u8ba1\u7b97\u4e2d\u7684\u91cd\u5199\u89c4\u5219\uff0c\u901a\u5e38\u7528\u5728\u7f13\u5b58\u5206\u7c7b\u65f6\uff0c\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default function App() {\n  return (\n    <>\n      <PreRender interval={10} />\n      <div>Hello Modern</div>\n    </>\n  )\n}\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5c06 query\u3001header \u4e2d\u6307\u5b9a\u7684\u53c2\u6570\u7eb3\u5165\u7f13\u5b58\u8ba1\u7b97\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/* \u4f7f\u7528 query \u4e2d\u7684 channel \u548c header \u4e2d\u7684 language \u8ba1\u7b97\u7f13\u5b58\u6807\u8bc6 */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} />\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4e0d\u8ba9\u6d4b\u8bd5\u9891\u9053\u5f71\u54cd\u7ebf\u4e0a\u7f13\u5b58\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/* \u5c06 query \u4e2d channel \u503c\u4e3a test_ \u5f00\u5934\u7684\u91cd\u5199\u4e3a testChannel\uff0c\u5426\u5219\u91cd\u5199\u4e3a otherChannel */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} matches={{\n  query: {\n    channel: {\n      "testChannel", "^test_",\n      "otherChannel", ".*"\n    }\n  }\n}} />\n')))}c.isMDXComponent=!0}}]);