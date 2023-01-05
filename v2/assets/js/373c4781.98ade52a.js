"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9159],{44993:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(52983);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),m=r,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},80437:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(18249),r=(i(52983),i(44993));const a={sidebar_position:4},o="@modern-js/codesmith-api-git",l={unversionedId:"guides/topic-detail/generator/codesmith/api/git",id:"guides/topic-detail/generator/codesmith/api/git",title:"@modern-js/codesmith-api-git",description:"\u5fae\u751f\u6210\u5668\u4e2d\u4f7f\u7528 git \u76f8\u5173\u64cd\u4f5c\u7684 API \u5c01\u88c5\uff0c\u63d0\u4f9b\u5224\u65ad git \u4ed3\u5e93\uff0c\u521d\u59cb\u5316\u53ca\u63d0\u4ea4\u4ee3\u7801\u7b49\u65b9\u6cd5\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/git.md",sourceDirName:"guides/topic-detail/generator/codesmith/api",slug:"/guides/topic-detail/generator/codesmith/api/git",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/git",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"@modern-js/codesmith-api-fs",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/fs"},next:{title:"@modern-js/codesmith-api-handlebars",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/handlebars"}},p={},d=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"API",id:"api",level:2},{value:"isInGitRepo",id:"isingitrepo",level:3},{value:"initGitRepo",id:"initgitrepo",level:3},{value:"addAndCommit",id:"addandcommit",level:3}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modern-jscodesmith-api-git"},"@modern-js/codesmith-api-git"),(0,r.kt)("p",null,"\u5fae\u751f\u6210\u5668\u4e2d\u4f7f\u7528 git \u76f8\u5173\u64cd\u4f5c\u7684 API \u5c01\u88c5\uff0c\u63d0\u4f9b\u5224\u65ad git \u4ed3\u5e93\uff0c\u521d\u59cb\u5316\u53ca\u63d0\u4ea4\u4ee3\u7801\u7b49\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GitAPI } from '@modern-js/codesmith-api-git';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const gitApi = new GitAPI(generatorCore, generatorContext);\n  await gitApi.initGitRepo();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa GitAPI \u5b9e\u4f8b\uff0c\u53c2\u6570\u548c\u5fae\u751f\u6210\u5668\u51fd\u6570\u53c2\u6570\u4e00\u81f4\uff0c\u4e3a context \u548c generator\uff0c\u5177\u4f53\u4ecb\u7ecd\u8bf7\u770b\u5fae\u751f\u6210\u5668\u9879\u76ee\u7ec4\u6210"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5176\u5b9e\u4f8b\u4e0a API \u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"isingitrepo"},"isInGitRepo"),(0,r.kt)("p",null,"\u5f53\u524d\u76ee\u5f55\u662f\u5426\u4e3a git \u4ed3\u5e93\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cwd?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," git \u547d\u4ee4\u7684\u6267\u884c\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u5fae\u751f\u6210\u5668 ",(0,r.kt)("inlineCode",{parentName:"li"},"outputPath"),"\u3002")),(0,r.kt)("h3",{id:"initgitrepo"},"initGitRepo"),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u4e3a git \u4ed3\u5e93\u3002init \u7684\u9ed8\u8ba4\u5206\u652f\u540d\u53ef\u901a\u8fc7\u751f\u6210\u5668 config \u4e2d\u7684 defaultBranch \u8fdb\u884c\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cwd?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," git \u547d\u4ee4\u7684\u6267\u884c\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u5fae\u751f\u6210\u5668 ",(0,r.kt)("inlineCode",{parentName:"li"},"outputPath"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"force?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," \u5f53\u524d\u76ee\u5f55\u5df2\u7ecf\u4e3a git \u4ed3\u5e93\u65f6\u4f7f\u7528\u8be5\u53c2\u6570\u4f1a\u5f3a\u5236\u6267\u884c git init\u3002")),(0,r.kt)("h3",{id:"addandcommit"},"addAndCommit"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"git add .")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit")," \u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"commitMessage: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," commit \u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"cwd?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," git \u547d\u4ee4\u7684\u6267\u884c\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u5fae\u751f\u6210\u5668 ",(0,r.kt)("inlineCode",{parentName:"li"},"outputPath"),"\u3002")))}s.isMDXComponent=!0}}]);