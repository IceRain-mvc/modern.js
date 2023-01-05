"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5082],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(18249),a=(n(52983),n(44993));const o={title:"Server-side rendering",sidebar_position:3},s=void 0,i={unversionedId:"guides/advanced-features/ssr",id:"guides/advanced-features/ssr",title:"Server-side rendering",description:"In Modern.js, SSR also works out of the box. Developers do not need to write complex server level logic for SSR, nor do they need to care about the operation and maintenance of SSR, or create services. Modern.js have a comprehensive SSR degradation strategy to ensure that pages can run safely.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/advanced-features/ssr.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/ssr",permalink:"/v2/en/docs/guides/advanced-features/ssr",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Server-side rendering",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Custom Web Server",permalink:"/v2/en/docs/guides/advanced-features/web-server"},next:{title:"Static Site Generation",permalink:"/v2/en/docs/guides/advanced-features/ssg"}},l={},d=[{value:"SSR Data Fetch",id:"ssr-data-fetch",level:2},{value:"Keep Rendering Consistent",id:"keep-rendering-consistent",level:2},{value:"Concerned Memory Leaks",id:"concerned-memory-leaks",level:2},{value:"Crop SSR Data",id:"crop-ssr-data",level:2},{value:"Serverless Pre-render",id:"serverless-pre-render",level:2},{value:"Treeshaking",id:"treeshaking",level:2},{value:"Use Environment Variables",id:"use-environment-variables",level:3},{value:"Use File Suffix",id:"use-file-suffix",level:3},{value:"Independent File",id:"independent-file",level:3},{value:"Remote Request",id:"remote-request",level:2},{value:"Stream SSR",id:"stream-ssr",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Modern.js, SSR also works out of the box. Developers do not need to write complex server level logic for SSR, nor do they need to care about the operation and maintenance of SSR, or create services. Modern.js have a comprehensive SSR degradation strategy to ensure that pages can run safely."),(0,a.kt)("p",null,"Enabling SSR is very easy, just set ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/server/ssr"},"'server.ssr'")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "ssr": true\n  }\n}\n')),(0,a.kt)("h2",{id:"ssr-data-fetch"},"SSR Data Fetch"),(0,a.kt)("p",null,"Modern.js provides Data Loader, which is convenient for developers to fetch data under SSR and CSR. Each routing module, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"layout.tsx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"page.tsx"),", can define its own Data Loader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/page.tsx"',title:'"src/routes/page.tsx"'},"export const loader = () => {\n  return {\n    message: 'Hello World',\n  };\n};\n")),(0,a.kt)("p",null,"in the component, the data returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," function can be get data through the Hooks API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default () => {\n  const data = useLoaderData();\n  return <div>{data.message}</div>;\n}\n")),(0,a.kt)("p",null,"Modern.js break the traditional SSR development model and provide users with a user-friendly SSR development experience."),(0,a.kt)("p",null,"And it provides elegant degradation processing. Once the SSR request fails, it will automatically downgrade and restart the request on the browser side."),(0,a.kt)("p",null,"However, developers still need to pay attention to the fallback of data, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," values or data returns that do not as expect. Avoid React rendering errors or messy rendering results when SSR."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When using Data Loader, data fetching happens before rendering, Modern.js still supports fetching data when the component is rendered. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/data-fetch"},"Data Fetch"),"\u3002")),(0,a.kt)("h2",{id:"keep-rendering-consistent"},"Keep Rendering Consistent"),(0,a.kt)("p",null,"In some businesses, it is usually necessary to display different UI displays according to the current operating container environment characteristics, such as ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"UA")," information."),(0,a.kt)("p",null,"If the processing is not careful enough, the rendering results may do not meet the expectations at this time."),(0,a.kt)("p",null,"Here is an example to show the problem when SSR and CSR rendering are inconsistent, add the following code to the component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  typeof window !== 'undefined' ? (\n    <div>\n      browser content\n    </div>\n  ) : null;\n}\n")),(0,a.kt)("p",null,"After starting the app, visit the page and will find that the browser console throws a warning message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Warning: Expected server HTML to contain a matching <div> in <div>.\n")),(0,a.kt)("p",null,"This is caused by the inconsistency between the rendering result and the SSR rendering result when React executes the hydrate logic on the client side. Although the page performs normally, in complex applications, it is likely to cause problems such as DOM hierarchy confusion and style confusion."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For hydrate logic, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#hydrate"},"here"),".")),(0,a.kt)("p",null,"Applications need to maintain the consistency of SSR and CSR rendering results. If there are inconsistencies, it means that this part of the content does not need to be rendered in SSR."),(0,a.kt)("p",null,"Modern.js provide ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-runtime-context"},(0,a.kt)("inlineCode",{parentName:"a"},"<NoSSR>"))," for such content that does not need to be rendered in SSR:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NoSSR } from '@modern-js/runtime/ssr';\n")),(0,a.kt)("p",null,"Outside of elements that do not require SSR, wrap with a ",(0,a.kt)("inlineCode",{parentName:"p"},"NoSSR")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<NoSSR>\n  <div>\n    client content\n  </div>\n</NoSSR>\n")),(0,a.kt)("p",null,"After modifying the code, refresh page found that the previous Waring disappeared. Open the Network window of the browser developer tool to see that the returned HTML document does not contain the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NoSSR")," component package."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-runtime-context"},"'useRuntimeContext'")," can get complete request information, which can be used to ensure that the rendering results of SSR and CSR are consistent.")),(0,a.kt)("h2",{id:"concerned-memory-leaks"},"Concerned Memory Leaks"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"In the SSR, developers need to pay special attention to the problem of memory leaks. Even small memory leaks can affect services..")),(0,a.kt)("p",null,"In SSR, every request triggers the component rendering. So, you need to avoid defining any potentially growing global data, or subscribing to events globally, or creating streams that will not be destroyed."),(0,a.kt)("p",null,"For example, the following code, when using ",(0,a.kt)("a",{parentName:"p",href:"https://redux-observable.js.org/"},"redux-observable"),", developers used to code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEpicMiddleware, combineEpics } from 'redux-observable';\n\nconst epicMiddleware = createEpicMiddleware();\nconst rootEpic = combineEpics();\n\nexport default function Test() {\n  epicMiddleware.run(rootEpic);\n  return <div>Hello Modern.js</div>;\n}\n")),(0,a.kt)("p",null,"Create a Middleware instance ",(0,a.kt)("inlineCode",{parentName:"p"},"epicMiddleware")," outside the component and call epicMiddleware.run inside the component."),(0,a.kt)("p",null,"On the browser side, this code does not cause any problems. But in SSR, the Middleware instance will never be destroyed. Every time the component is rendered and ",(0,a.kt)("inlineCode",{parentName:"p"},"rootEpic")," is called, new event bindings are added internally, causing the entire object to continue to grow larger, which ultimately affects application performance."),(0,a.kt)("p",null,"Such problems in CSR are not easy to detect, so when switching from CSR to SSR, if you are not sure whether the application has such hidden dangers, you can press the application."),(0,a.kt)("h2",{id:"crop-ssr-data"},"Crop SSR Data"),(0,a.kt)("p",null,"In order to keep the data requested in the SSR phase, it can be used directly on the browser side, Modern.js inject the data and state that collected during the rendering process into the HTML."),(0,a.kt)("p",null,"As a result, CSR applications often have a large amount of interface data and the state of the components is not crop. If SSR is used directly, the rendered HTML size may be too large."),(0,a.kt)("p",null,"At this time, SSR not only cannot bring an improvement in the user experience, but may have the opposite effect."),(0,a.kt)("p",null,"Therefore, when using SSR, ",(0,a.kt)("strong",{parentName:"p"},"developers need to do reasonable weight loss for the application"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pay attention to the first screen, you can only request the data needed for the first screen in SSR, and render the rest on the browser side."),(0,a.kt)("li",{parentName:"ol"},"Removes the data independent with render from the data returned by the interface.")),(0,a.kt)("h2",{id:"serverless-pre-render"},"Serverless Pre-render"),(0,a.kt)("p",null,"Modern.js provide Serverless Pre-rendering(SPR) to improve SSR performance."),(0,a.kt)("p",null,"SPR uses pre-rendering and caching to provide the responsive performance of static Web for SSR pages. It allows SSR applications to have the responsiveness and stability of static Web pages, while keeping data dynamically updated."),(0,a.kt)("p",null,"Using SPR in the Modern.js is very simple, just add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PreRender>")," component, and the page where the component is located will automatically open SPR."),(0,a.kt)("p",null,"This mock a component that uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoaderData")," API, and the request in the Data Loader takes 2s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLoaderData } from '@modern-js/runtime/router';\n\nexport const loader = async () => {\n  await new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(null);\n    }, 2000);\n  });\n\n  return {\n    message: 'Hello Modern.js',\n  };\n};\n\nexport default () => {\n  const data = useLoaderData();\n  return <div>{data?.message}</div>;\n};\n")),(0,a.kt)("p",null,"After executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," command and opening the page, it is obvious that the page needs to wait 2s before returning."),(0,a.kt)("p",null,"The next is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PreRender>")," component, which can be exported directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/ssr "),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { PreRender } from '@modern-js/runtime/ssr';\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," component in the routing component and set the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," to indicate that the expiration time of the rendering result is 5s:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<PreRender interval={5} />\n")),(0,a.kt)("p",null,"After modification, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run build && pnpm run serve")," to start the application and open the page."),(0,a.kt)("p",null,"When open page for the first time, it is no different from the previous rendering, and there is also a 2s delay."),(0,a.kt)("p",null,"Refresh page, and the page opens instantly, but at this time, the page data has not changed due to the refresh, because the cache has not expired."),(0,a.kt)("p",null,"Wait 5s, refresh the page again, the data of the page is still unchanged. Refresh the page again The data changes, but the page still responds almost instantaneously."),(0,a.kt)("p",null,"This is because in the previous request, the SPR has asynchronously obtained the new rendering result in the background, and the page requested this time is the version that has been cached in the server."),(0,a.kt)("p",null,"It is conceivable that when ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," is set to 1, users can have the responsive experience of a static page."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more detail, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/ssr/pre-render"},(0,a.kt)("inlineCode",{parentName:"a"},"<PreRender>")),"\u3002")),(0,a.kt)("h2",{id:"treeshaking"},"Treeshaking"),(0,a.kt)("p",null,"When SSR is enabled, Modern.js will use the same entry to build both the SSR Bundle and the CSR Bundle. Therefore, the Web API in the SSR Bundle, or the Node API in the CSR Bundle, can lead to runtime errors."),(0,a.kt)("p",null,"Web API into a component is usually to do some global listening, or to get browser-related data, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"document.addEventListener('load', () => {\n  console.log('document load');\n});\nconst App = () => {\n  return <div>Hello World</div>\n}\nexport default App;\n")),(0,a.kt)("p",null,"The Node API is introduced in the component file, usually because of the use of Data Loader, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import fse from 'fs-extra';\nexport const loader = () => {\n  const file = fse.readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n")),(0,a.kt)("h3",{id:"use-environment-variables"},"Use Environment Variables"),(0,a.kt)("p",null,"For the first case, we can directly use Modern.js built-in environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"MODERN_TARGET")," to remove useless code at build time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"if (process.env.MODERN_TARGET === 'browser') {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/env-vars"},"environment variables"),".")),(0,a.kt)("h3",{id:"use-file-suffix"},"Use File Suffix"),(0,a.kt)("p",null,"In the second case, the Treeshaking method does not guarantee that the code is completely separated. Modern.js also supports the packaging file of SSR Bundle and CSR Bundle products through the file suffixed with ",(0,a.kt)("inlineCode",{parentName:"p"},".node."),"."),(0,a.kt)("p",null,"For example, the import of ",(0,a.kt)("inlineCode",{parentName:"p"},"fs-extra")," in the code, when it is directly referenced to the component, will cause the CSR to load an error. You can create ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".node.ts")," files of the same name as a layer of proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="compat.ts"',title:'"compat.ts"'},"export { readFileSync } from 'fs-extra';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="compat.node.ts"',title:'"compat.node.ts"'},"export const readFileSync: any = () => {};\n")),(0,a.kt)("p",null,"use ",(0,a.kt)("inlineCode",{parentName:"p"},"./compat")," directly into the file. At this time, files with the ",(0,a.kt)("inlineCode",{parentName:"p"},".node.ts")," suffix will be used first in the SSR environment, and files with the ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," suffix will be used in the CSR environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { readFileSync } from './compat'\n\nexport const loader = () => {\n  const file = readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n")),(0,a.kt)("h3",{id:"independent-file"},"Independent File"),(0,a.kt)("p",null,"Both of the above methods will bring some burden to the developer. Modern.js based on ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes"},"Nested Routing")," developed and designed ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/data-fetch"},"Data Fetch")," to separate CSR and SSR code\u3002"),(0,a.kt)("h2",{id:"remote-request"},"Remote Request"),(0,a.kt)("p",null,"When initiating remote requests in SSR, developers sometimes use request tools. Some interfaces need to pass user cookies, which developers can get through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/data-fetch#route-loader"},"'useRuntimeContext'")," API to achieve."),(0,a.kt)("p",null,"It should be noted, the request header of the HTML request is obtained, which may not be applicable to remote requests, so ",(0,a.kt)("strong",{parentName:"p"},"must not")," pass through all request headers."),(0,a.kt)("p",null,"In addition, some backend interfaces, or general gateways, will verify according to the information in the request header, and full pass-through is prone to various problems that are difficult to debug. It is recommended that ",(0,a.kt)("strong",{parentName:"p"},"pass-through on demand"),"."),(0,a.kt)("p",null,"Be sure to filter the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," field if you really need to pass through all request headers."),(0,a.kt)("h2",{id:"stream-ssr"},"Stream SSR"),(0,a.kt)("p",null,"Modern.js supports streaming rendering in React 18, the default rendering mode can be modified with the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "ssr": {\n      "mode": "stream"\n    }\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"At present Modern.js built-in data fetch does not support streaming rendering. If app need it, developers can build it according to the demo of React Stream SSR.")))}c.isMDXComponent=!0}}]);