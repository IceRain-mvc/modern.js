"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6253,1010],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(52983);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var m=a.createContext({}),d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(t),u=p,k=l["".concat(m,".").concat(u)]||l[u]||s[u]||o;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,r=new Array(o);r[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},91997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var a=t(18249),p=(t(52983),t(44993)),o=t(3087);const r={sidebar_position:5},i=void 0,m={unversionedId:"apis/app/commands/build",id:"apis/app/commands/build",title:"build",description:"modern build \u547d\u4ee4\u9ed8\u8ba4\u4f1a\u5728 dist/ \u76ee\u5f55\u4e0b\u6784\u5efa\u51fa\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/build.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/build",permalink:"/v2/docs/apis/app/commands/build",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisAppSidebar",previous:{title:"lint",permalink:"/v2/docs/apis/app/commands/lint"},next:{title:"serve",permalink:"/v2/docs/apis/app/commands/serve"}},d={},c=[{value:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef",id:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2}],s={toc:c};function l(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern build [options]\n\nbuild application\n\nOptions:\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help  \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n  --analyze   \u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\uff0c\u67e5\u770b\u5404\u4e2a\u6a21\u5757\u6253\u5305\u540e\u7684\u5927\u5c0f\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"modern build")," \u547d\u4ee4\u9ed8\u8ba4\u4f1a\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"dist/")," \u76ee\u5f55\u4e0b\u6784\u5efa\u51fa\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u3002"),(0,p.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e ",(0,p.kt)("a",{parentName:"p",href:"/docs/configure/app/output/dist-path"},(0,p.kt)("inlineCode",{parentName:"a"},"output.distPath"))," \u6307\u5b9a\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,p.kt)("h2",{id:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef"},"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef"),(0,p.kt)("p",null,"\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"npx modern build --analyze")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u5728\u6253\u5305\u751f\u4ea7\u73af\u5883\u4ee3\u7801\u7684\u540c\u65f6\uff0c\u4ea7\u51fa\u4e00\u4e2a\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\u7684 HTML \u6587\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Bundle Analyzer saved report to /example/dist/report.html\nFile sizes after production build:\n\n  122.35 KB  dist/static/js/885.1d4fbe5a.js\n  2.3 KB     dist/static/js/main.4b8e8d64.js\n  761 B      dist/static/js/runtime-main.edb7cf35.js\n  645 B      dist/static/css/main.0dd3ecc1.css\n")),(0,p.kt)("p",null,"\u624b\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u4e0a\u8ff0 HTML \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u6253\u5305\u4ea7\u7269\u7684\u74e6\u7247\u56fe\uff0c\u5e76\u8fdb\u884c\u5305\u4f53\u79ef\u5206\u6790\u548c\u4f18\u5316\uff1a"),(0,p.kt)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u8be5\u529f\u80fd\u57fa\u4e8e ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," \u5b9e\u73b0\u3002")),(0,p.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,p.kt)(o.default,{mdxType:"CommandTip"}))}l.isMDXComponent=!0},3087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(18249),p=(t(52983),t(44993));const o={},r=void 0,i={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},m={},d=[],c={toc:d};function s(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,p.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,p.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,p.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,p.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,p.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,p.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,p.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,p.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,p.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,p.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,p.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,p.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,p.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,p.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,p.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,p.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,p.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}s.isMDXComponent=!0}}]);