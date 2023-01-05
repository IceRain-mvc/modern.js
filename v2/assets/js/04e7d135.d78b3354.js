"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6610],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(52983);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=s,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(18249),s=(n(52983),n(44993));const o={sidebar_position:1},a="CSS-in-JS",i={unversionedId:"guides/basic-features/css/css-in-js",id:"guides/basic-features/css/css-in-js",title:"CSS-in-JS",description:"CSS-in-JS \u662f\u4e00\u79cd\u53ef\u4ee5\u5c06 CSS \u6837\u5f0f\u5199\u5728 JS \u6587\u4ef6\u91cc\u7684\u6280\u672f\u3002Modern.js \u96c6\u6210\u4e86\u793e\u533a\u5e38\u7528\u7684 CSS-in-JS \u5b9e\u73b0\u5e93 styled-components\uff0c\u5b83\u4f7f\u7528 JavaScript \u7684\u65b0\u7279\u6027 Tagged template \u7f16\u5199\u7ec4\u4ef6\u7684 CSS \u6837\u5f0f\u3002\u53ef\u4ee5\u76f4\u63a5\u4ece @modern-js/runtime/styled \u5f15\u5165 styled-components \u7684 API \u8fdb\u884c\u4f7f\u7528\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/basic-features/css/css-in-js.md",sourceDirName:"guides/basic-features/css",slug:"/guides/basic-features/css/css-in-js",permalink:"/v2/docs/guides/basic-features/css/css-in-js",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u6570\u636e\u83b7\u53d6",permalink:"/v2/docs/guides/basic-features/data-fetch"},next:{title:"Tailwind CSS",permalink:"/v2/docs/guides/basic-features/css/tailwindcss"}},p={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"css-in-js"},"CSS-in-JS"),(0,s.kt)("p",null,"CSS-in-JS \u662f\u4e00\u79cd\u53ef\u4ee5\u5c06 CSS \u6837\u5f0f\u5199\u5728 JS \u6587\u4ef6\u91cc\u7684\u6280\u672f\u3002Modern.js \u96c6\u6210\u4e86\u793e\u533a\u5e38\u7528\u7684 CSS-in-JS \u5b9e\u73b0\u5e93 ",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),"\uff0c\u5b83\u4f7f\u7528 JavaScript \u7684\u65b0\u7279\u6027 ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"Tagged template")," \u7f16\u5199\u7ec4\u4ef6\u7684 CSS \u6837\u5f0f\u3002\u53ef\u4ee5\u76f4\u63a5\u4ece ",(0,s.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/styled")," \u5f15\u5165 ",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")," \u7684 API \u8fdb\u884c\u4f7f\u7528\u3002"),(0,s.kt)("p",null,"\u5f53\u9700\u8981\u7f16\u5199\u4e00\u4e2a\u5185\u90e8\u5b57\u4f53\u4e3a\u7ea2\u8272\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"div")," \u7ec4\u4ef6\u65f6\uff0c\u53ef\u4ee5\u5982\u4e0b\u5b9e\u73b0\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import styled from '@modern-js/runtime/styled'\n\nconst RedDiv = styled.div`\n  color: red;\n`\n")),(0,s.kt)("p",null,"\u5f53\u9700\u8981\u6839\u636e\u7ec4\u4ef6\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"props")," \u52a8\u6001\u8bbe\u7f6e\u7ec4\u4ef6\u6837\u5f0f\u65f6\uff0c\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"props")," \u7684\u5c5e\u6027 ",(0,s.kt)("inlineCode",{parentName:"p"},"primary")," \u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u6309\u94ae\u7684\u989c\u8272\u4e3a\u767d\u8272\uff0c\u5176\u4ed6\u60c5\u51b5\u4e3a\u7ea2\u8272\uff0c\u5b9e\u73b0\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import styled from \'@modern-js/runtime/styled\'\n\nconst Button = styled.button`\n  color: ${props => props.primary ? "white" : "red"};\n  font-size: 1em;\n`\n')),(0,s.kt)("p",null,"\u5173\u4e8e styled-components \u7684\u66f4\u591a\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003\u3010",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components \u5b98\u7f51"),"\u3011\u3002"),(0,s.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Modern.js \u5185\u90e8\u4f7f\u7528\u4e86 Babel \u63d2\u4ef6 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/styled-components/babel-plugin-styled-components"},"babel-plugin-styled-components"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/styled-components"},(0,s.kt)("inlineCode",{parentName:"a"},"tools.styledComponents"))," \u5bf9\u63d2\u4ef6\u8fdb\u884c\u914d\u7f6e\u3002")),(0,s.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/styled-jsx"},"styled-jsx"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://emotion.sh/"},"Emotion")," \u7b49\u5176\u4ed6 CSS-in-JS \u5e93\uff0c\u9700\u8981\u5148\u5b89\u88c5\u5bf9\u5e94\u5e93\u7684\u4f9d\u8d56\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u8bf7\u53c2\u8003\u5bf9\u5e94\u5e93\u7684\u5b98\u7f51\u3002")))}m.isMDXComponent=!0}}]);