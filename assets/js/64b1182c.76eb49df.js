"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6776],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(86215),a=(n(49231),n(54852));const l={sidebar_position:2},o="\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6",i={unversionedId:"guides/features/generator-plugin/use",id:"guides/features/generator-plugin/use",title:"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6",description:"@modern-js/create \u63d0\u4f9b\u4e86 --plugin \u53c2\u6570\u7528\u4e8e\u58f0\u660e\u4f7f\u7528\u7684\u751f\u6210\u5668\u63d2\u4ef6\u3002",source:"@site/docs/guides/features/generator-plugin/use.md",sourceDirName:"guides/features/generator-plugin",slug:"/guides/features/generator-plugin/use",permalink:"/docs/guides/features/generator-plugin/use",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/generator-plugin/abstract"},next:{title:"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/generator-plugin/develop"}},u={},p=[{value:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b",id:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b",level:2},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:3},{value:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",level:4},{value:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",level:4},{value:"\u6267\u884c\u65f6\u673a",id:"\u6267\u884c\u65f6\u673a",level:3},{value:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848-1",level:4},{value:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f-1",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6"},"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin")," \u53c2\u6570\u7528\u4e8e\u58f0\u660e\u4f7f\u7528\u7684\u751f\u6210\u5668\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u76f4\u63a5\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create --plugin <pluginName>\n")),(0,a.kt)("p",null,"plugin \u53c2\u6570\u652f\u6301\u58f0\u660e\u591a\u6b21\uff0c\u4ee3\u8868\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u751f\u6210\u5668\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b"},"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b"),(0,a.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848\uff1a\u76f4\u63a5\u5bf9\u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u5b9a\u5236\u5316\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\uff1a\u57fa\u4e8e\u9ed8\u8ba4\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u521b\u5efa\u5bf9\u5e94\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f\u3002"))),(0,a.kt)("h3",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,a.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u7684\u5206\u7c7b\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," \u4fe1\u606f\u63d0\u4f9b\u3002"),(0,a.kt)("h4",{id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "extend": "mwa" // \u4e09\u4e2a\u5de5\u7a0b\u65b9\u6848\u5206\u522b\u5bf9\u5e94 mwa\u3001module\u3001 monorepo\n    }\n}\n')),(0,a.kt)("h4",{id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "key": "new_solution",\n        "name": "\u65b0\u5de5\u7a0b\u65b9\u6848",\n        "type": "mwa" // \u9664\u4e86\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\uff0c\u8fd9\u91cc\u7c7b\u578b\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49(custom)\u7c7b\u578b\uff0c\u540e\u9762\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\n    }\n}\n')),(0,a.kt)("h3",{id:"\u6267\u884c\u65f6\u673a"},"\u6267\u884c\u65f6\u673a"),(0,a.kt)("p",null,"\u4e0d\u540c\u7c7b\u578b\u7684\u5b9a\u5236\u5de5\u7a0b\u65b9\u6848\u7684\u6267\u884c\u65f6\u673a\u662f\u4e0d\u540c\u7684\u3002"),(0,a.kt)("h4",{id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848-1"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"),(0,a.kt)("p",null,"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b\u7684\u751f\u6210\u5668\u63d2\u4ef6\u4f1a\u5728\u9009\u62e9\u5bf9\u5e94 extend \u7684\u5de5\u7a0b\u65b9\u6848\u540e\u6309\u7167 plugin \u53c2\u6570\u7684\u58f0\u660e\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002"),(0,a.kt)("h4",{id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f-1"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"),(0,a.kt)("p",null,"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\u7684\u751f\u6210\u5668\u63d2\u4ef6\u4f1a\u5728\u9009\u62e9\u5bf9\u5e94\u7c7b\u578b\u7684\u5de5\u7a0b\u65b9\u6848\u4e4b\u540e\u51fa\u73b0\u9009\u62e9\u573a\u666f\u7684\u9009\u9879\uff0c\u9009\u9879\u5217\u8868\u5305\u62ec\u5f53\u524d\u9ed8\u8ba4\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f\u548c\u63d2\u4ef6\u5b9a\u4e49\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u573a\u666f\uff0c\u5c06\u4f1a\u6267\u884c\u5bf9\u5e94\u7684\u751f\u6210\u5668\u63d2\u4ef6\u3002"))}c.isMDXComponent=!0}}]);