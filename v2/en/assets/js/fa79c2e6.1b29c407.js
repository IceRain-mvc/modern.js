"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1895],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_position:7},o="@modern-js/codesmith-api-npm",l={unversionedId:"guides/topic-detail/generator/codesmith/api/npm",id:"guides/topic-detail/generator/codesmith/api/npm",title:"@modern-js/codesmith-api-npm",description:"The NPM API encapsulation in the microgenerator provides a common method for installing dependencies of different NPM package management tools.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/codesmith/api/npm.md",sourceDirName:"guides/topic-detail/generator/codesmith/api",slug:"/guides/topic-detail/generator/codesmith/api/npm",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/npm",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"@modern-js/codesmith-api-ejs",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/ejs"},next:{title:"\u4ecb\u7ecd",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/introduction"}},p={},s=[{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"npmInstall",id:"npminstall",level:3},{value:"yarnInstall",id:"yarninstall",level:3},{value:"pnpmInstall",id:"pnpminstall",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modern-jscodesmith-api-npm"},"@modern-js/codesmith-api-npm"),(0,a.kt)("p",null,"The NPM API encapsulation in the microgenerator provides a common method for installing dependencies of different NPM package management tools."),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NpmAPI } from '@modern-js/codesmith-api-npm';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const npmApi = new NpmAPI(generator);\n  await npmApi.pnpmInstall();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create NpmAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Just call the API on its example."))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"npminstall"},"npmInstall"),(0,a.kt)("p",null,"Install dependency using npm."),(0,a.kt)("p",null,"Parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cwd?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". The execution directory of the install command, the default is microgenerator ",(0,a.kt)("inlineCode",{parentName:"li"},"outputPath"),".")),(0,a.kt)("h3",{id:"yarninstall"},"yarnInstall"),(0,a.kt)("p",null,"Install dependency using yarn."),(0,a.kt)("p",null,"Parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cwd?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". The execution directory of the install command, the default is microgenerator ",(0,a.kt)("inlineCode",{parentName:"li"},"outputPath"),".")),(0,a.kt)("h3",{id:"pnpminstall"},"pnpmInstall"),(0,a.kt)("p",null,"Install dependency using pnpm."),(0,a.kt)("p",null,"Parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cwd?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". The execution directory of the install command, the default is microgenerator ",(0,a.kt)("inlineCode",{parentName:"li"},"outputPath"),".")))}m.isMDXComponent=!0}}]);