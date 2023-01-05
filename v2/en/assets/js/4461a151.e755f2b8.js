"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4406],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(18249),i=(n(52983),n(44993));const o={title:"useRuntimeContext"},a=void 0,u={unversionedId:"apis/app/runtime/core/use-runtime-context",id:"apis/app/runtime/core/use-runtime-context",title:"useRuntimeContext",description:"This function is mainly used to get the runtime context and can only be used in function components.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/core/use-runtime-context.md",sourceDirName:"apis/app/runtime/core",slug:"/apis/app/runtime/core/use-runtime-context",permalink:"/v2/en/docs/apis/app/runtime/core/use-runtime-context",draft:!1,tags:[],version:"current",frontMatter:{title:"useRuntimeContext"},sidebar:"apisAppSidebar",previous:{title:"useModuleApps",permalink:"/v2/en/docs/apis/app/runtime/core/use-module-apps"},next:{title:"defineConfig",permalink:"/v2/en/docs/apis/app/runtime/app/define-config"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function is mainly used to get the runtime context and can only be used in function components."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport function App() {\n  const runtimeContext = useRuntimeContext();\n  return <div>Hello World</div>\n}\n")),(0,i.kt)("h2",{id:"function-signature"},"Function Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type RuntimeContext = {\n  request: {\n    params: Record<string, string>;\n    pathname: string;\n    query: Record<string, string>;\n    headers: IncomingHttpHeaders;\n    cookie: string;\n  };\n  store: ReduckStore;\n}\n\nfunction useRuntimeContext(): RuntimeContext;\n")),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request"),": additional information in the request context.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),": dynamic parameters in the request path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pathname"),": the pathname of the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": the query of the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers"),": the header info of the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cookie"),": the cookie of the request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"store"),": when the runtime.state is enabled, this value is the reduck global ",(0,i.kt)("inlineCode",{parentName:"li"},"store"),".")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRuntimeContext } from '@modern-js/runtime';\nimport { fooModel } from '@/common/models';\n\nfunction App() {\n  const { store } = useRuntimeContext();\n\n  const [state, actions] = store.use(fooModel);\n\n  return <div>state: {state}</div>\n}\n")))}c.isMDXComponent=!0}}]);