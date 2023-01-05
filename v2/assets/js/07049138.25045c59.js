"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9934],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const i={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, Meta>")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u7528\u4e8e\u5728\u591a\u9875\u9762\u7684\u573a\u666f\u4e0b\uff0c\u4e3a\u4e0d\u540c\u7684\u9875\u9762\u8bbe\u7f6e\u4e0d\u540c\u7684 meta \u6807\u7b7e\u3002"),(0,a.kt)("p",null,"\u6574\u4f53\u7528\u6cd5\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," \u4e00\u81f4\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u300c\u5165\u53e3\u540d\u79f0\u300d\u4f5c\u4e3a key \uff0c\u5bf9\u5404\u4e2a\u9875\u9762\u8fdb\u884c\u5355\u72ec\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"metaByEntries")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"meta"),"\uff0c\u56e0\u6b64\u4f1a\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," \u4e2d\u8bbe\u7f6e\u7684\u503c\u3002"),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    meta: {\n      description: 'ByteDance',\n    },\n    metaByEntries: {\n      foo: {\n        description: 'TikTok',\n      },\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u7f16\u8bd1\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684 meta \u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="description" content="TikTok" />\n')),(0,a.kt)("p",null,"\u5176\u4ed6\u9875\u9762\u7684 meta \u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="description" content="ByteDance" />\n')))}o.isMDXComponent=!0;const l={title:"html.metaByEntries",sidebar_label:"metaByEntries"},p=void 0,m={unversionedId:"configure/app/html/meta-by-entries",id:"configure/app/html/meta-by-entries",title:"html.metaByEntries",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.metaByEntries\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/html/meta-by-entries.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/meta-by-entries",permalink:"/v2/docs/configure/app/html/meta-by-entries",draft:!1,tags:[],version:"current",frontMatter:{title:"html.metaByEntries",sidebar_label:"metaByEntries"},sidebar:"configsAppSidebar",previous:{title:"inject",permalink:"/v2/docs/configure/app/html/inject"},next:{title:"meta",permalink:"/v2/docs/configure/app/html/meta"}},c={},s=[],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-metabyentries"},"html.metaByEntries"),"\u3002")),(0,a.kt)(o,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);