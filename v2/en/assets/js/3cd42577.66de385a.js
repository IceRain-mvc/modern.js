"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3457],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const o={sidebar_position:4},a="setInput",p={unversionedId:"guides/topic-detail/generator/plugin/api/input/setInput",id:"guides/topic-detail/generator/plugin/api/input/setInput",title:"setInput",description:"Set the problem attribute.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/input/setInput.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/setInput",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/setInput",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"addInputAfter",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/addInputAfter"},next:{title:"setInputValue",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/setInputValue"}},l={},u=[{value:"key",id:"key",level:2},{value:"filed",id:"filed",level:2},{value:"value",id:"value",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setinput"},"setInput"),(0,i.kt)("p",null,"Set the problem attribute."),(0,i.kt)("p",null,"The method is available directly on the context."),(0,i.kt)("p",null,"Its type is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  setInput: (key: string, field: string, value: unknown) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"key"},"key"),(0,i.kt)("p",null,"The problem keyword can be the problem keyword of the Modern.js project solution, or the keyword of the new problem in the generator plugin."),(0,i.kt)("h2",{id:"filed"},"filed"),(0,i.kt)("p",null,"he problem field to be set, you can modify other fields except the key of the current Input, Input specific type definition viewable ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/input/type"},"Customize input related type definition"),"."),(0,i.kt)("h2",{id:"value"},"value"),(0,i.kt)("p",null,"The value of the problem field to be setted. value supports function, the function parameter is the current field value, and the return value needs to be the complete new field value."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For the input options provided by the Modern.js project type, only delete is temporarily supported, and increase is not supported. The increase will cause problems in the logical judgment in the code.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Modify the display name of ",(0,i.kt)("inlineCode",{parentName:"p"},"packageName"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInput('packageName', 'title', \"Show title\");\n")))}c.isMDXComponent=!0}}]);