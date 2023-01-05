"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4511,7160],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,f=l["".concat(m,".").concat(u)]||l[u]||c[u]||r;return t?a.createElement(f,p(p({ref:n},d),{},{components:t})):a.createElement(f,p({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},48834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=t(18249),o=(t(52983),t(44993)),r=t(89729);const p={sidebar_position:3},i=void 0,m={unversionedId:"apis/app/commands/test",id:"apis/app/commands/test",title:"test",description:"modern test command need to execute the new command in advance to enable the unit test/integration test.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/commands/test.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/test",permalink:"/v2/en/docs/apis/app/commands/test",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisAppSidebar",previous:{title:"new",permalink:"/v2/en/docs/apis/app/commands/new"},next:{title:"lint",permalink:"/v2/en/docs/apis/app/commands/lint"}},s={},d=[],c={toc:d};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern test [options]\n\nOptions:\n  -h, --help  show command help\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"modern test")," command need to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," command in advance to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"unit test/integration test"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern test")," command will automatically run the test cases, the effect is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern test\n PASS  src/tests/index.test.ts\n  The add method\n    \u2713 should work fine. (2ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.994 s, estimated 1 s\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"files match ",(0,o.kt)("inlineCode",{parentName:"p"},"*.test.(js|ts)")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"api/")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"src/")," will be recognized as test cases by default\u3002")),(0,o.kt)(r.default,{mdxType:"CommandTip"}))}l.isMDXComponent=!0},89729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(18249),o=(t(52983),t(44993));const r={},p=void 0,i={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"The pnpm v6 and pnpm v7 versions do not use the same posture when executing commands. The following should be noted:",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/en/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},m={},s=[],d={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The pnpm v6 and pnpm v7 versions do not use the same posture when executing commands. The following should be noted:"),(0,o.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"When using pnpm to invoke a command in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", if you need to pass arguments to pnpm, you need to put the arguments before the command."),(0,o.kt)("p",{parentName:"admonition"},"For example, execute the prepare command with the pnpm '--filter' parameter:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,o.kt)("p",{parentName:"admonition"},"If you need to pass parameters to a command, you need to put the parameters after the command."),(0,o.kt)("p",{parentName:"admonition"},"For example, in the following ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," configuration:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"The way to carry parameters when executing the command command is:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,o.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,o.kt)("p",{parentName:"admonition"},"In the following ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," configuration:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"If you need to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),","),(0,o.kt)("p",{parentName:"admonition"},"When using pnpm, you need to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"This is because pnpm does not handle command parameters the same as Yarn, but is similar to npm: when not adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," character string, the parameters of pnpm are passed; when using a ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," character string, the parameters of the execution script are passed."),(0,o.kt)("p",{parentName:"admonition"},"In the above example the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option")," is executed, the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," will be passed to pnpm."),(0,o.kt)("p",{parentName:"admonition"},"Summary:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"}," When using pnpm v7, if you pass arguments to pnpm, you need to put the arguments before the command ")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"}," When using pnpm v6, if the parameter passed to pnpm, you do not need to add ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"; if the parameter passed is for script use, you need to add ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," character string "),".")))}c.isMDXComponent=!0}}]);