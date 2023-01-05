"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6246],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(18249),a=(r(52983),r(44993));const i={sidebar_position:6},o="@modern-js/codesmith-api-ejs",l={unversionedId:"guides/topic-detail/generator/codesmith/api/ejs",id:"guides/topic-detail/generator/codesmith/api/ejs",title:"@modern-js/codesmith-api-ejs",description:"An API wrapper for file operations using [ejs] (https://ejs.co/) in microgenerators, providing a way to render individual template files and folders.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/codesmith/api/ejs.md",sourceDirName:"guides/topic-detail/generator/codesmith/api",slug:"/guides/topic-detail/generator/codesmith/api/ejs",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/ejs",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"@modern-js/codesmith-api-handlebars",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/handlebars"},next:{title:"@modern-js/codesmith-api-npm",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/npm"}},p={},s=[{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"renderTemplate",id:"rendertemplate",level:3},{value:"renderTemplateDir",id:"rendertemplatedir",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modern-jscodesmith-api-ejs"},"@modern-js/codesmith-api-ejs"),(0,a.kt)("p",null,"An API wrapper for file operations using ","[ejs]"," (",(0,a.kt)("a",{parentName:"p",href:"https://ejs.co/"},"https://ejs.co/"),") in microgenerators, providing a way to render individual template files and folders."),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EjsAPI } from '@modern-js/codesmith-api-ejs';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const ejsAPI = new EjsAPI(generator);\n  await ejsAPI.renderTemplate(\n     material.get('templates/a.js'),\n     target: 'b.js',\n     { data: \"data\" }\n   );\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create EjsAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."),(0,a.kt)("li",{parentName:"ul"},"Just call the API on its example.")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"rendertemplate"},"renderTemplate"),(0,a.kt)("p",null,"Render a single template file."),(0,a.kt)("p",null,"Parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"templateResource: ",(0,a.kt)("inlineCode",{parentName:"li"},"FsResource"),". Template file resource, used by  ",(0,a.kt)("inlineCode",{parentName:"li"},"context.materials.get(<filename>)"),"."),(0,a.kt)("li",{parentName:"ul"},"target: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". Target file path name."),(0,a.kt)("li",{parentName:"ul"},"parameters?: ",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string>"),". Render parameter.")),(0,a.kt)("h3",{id:"rendertemplatedir"},"renderTemplateDir"),(0,a.kt)("p",null,"Render template folder."),(0,a.kt)("p",null,"Parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"material: ",(0,a.kt)("inlineCode",{parentName:"li"},"FsMaterial"),". The material context of the current microgenerator execution."),(0,a.kt)("li",{parentName:"ul"},"findGlob: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". Template file matches the regular."),(0,a.kt)("li",{parentName:"ul"},"target: ",(0,a.kt)("inlineCode",{parentName:"li"},"(globMatch: string) => string"),". The target file path generation function, the parameter is ",(0,a.kt)("inlineCode",{parentName:"li"},"resourceKey.")),(0,a.kt)("li",{parentName:"ul"},"options?: ",(0,a.kt)("inlineCode",{parentName:"li"},"RenderTemplateDirOptions"),". Glob Find the file configuration, the specific function viewable is here ","[glob]"," (",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/glob"},"https://www.npmjs.com/package/glob"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type RenderTemplateDirOptions = {\n  nodir?: boolean;\n  dot?: boolean;\n  ignore?: string | readonly string[];\n};\n")))}d.isMDXComponent=!0}}]);