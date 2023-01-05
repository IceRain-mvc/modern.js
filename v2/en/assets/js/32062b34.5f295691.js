"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2375],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(18249),a=(t(52983),t(44993));const i={title:"Middleware"},o=void 0,s={unversionedId:"apis/app/runtime/web-server/middleware",id:"apis/app/runtime/web-server/middleware",title:"Middleware",description:"Used to extend Modern.js built-in Web Server, only SSR requests are handled by these middleware.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/web-server/middleware.md",sourceDirName:"apis/app/runtime/web-server",slug:"/apis/app/runtime/web-server/middleware",permalink:"/v2/en/docs/apis/app/runtime/web-server/middleware",draft:!1,tags:[],version:"current",frontMatter:{title:"Middleware"},sidebar:"apisAppSidebar",previous:{title:"Hook",permalink:"/v2/en/docs/apis/app/runtime/web-server/hook"},next:{title:"CSS-In-JS API",permalink:"/v2/en/docs/apis/app/runtime/utility/css-in-js"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Input",id:"input",level:3},{value:"Example",id:"example",level:2},{value:"Tracking",id:"tracking",level:3},{value:"Inject Tools &amp; Data",id:"inject-tools--data",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Used to extend Modern.js built-in Web Server, only SSR requests are handled by these middleware."),(0,a.kt)("p",null,"Unlike ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/web-server/hook"},"Hook"),", middleware can be extended using the framework plugin."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more detail, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/web-server"},"Extend Web Server"),"\u3002")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = async (context, next) => {}\nexport const middleware: Middleware[] = [\n  async (context, next) => {},\n  async (context, next) => {},\n]\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u8be5 API \u524d\uff0c\u8bf7\u5148\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u65b0\u5efa\u300cWeb Server \u6269\u5c55\u300d\u6e90\u7801\u76ee\u5f55\u3002"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\n? \u65b0\u5efa\u300cWeb Server \u6269\u5c55\u300d\u6e90\u7801\u76ee\u5f55\n"))),(0,a.kt)("h2",{id:"function-signature"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MiddlewareContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      get: (key: string) => string;\n      set: (key: string, value: string) => void;\n      delete: () => void;\n      clear: () => void;\n      apply: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n    locals: Record<string, any>;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n  source: {\n    req: IncomingMessage;\n    res: ServerResponse;\n  };\n};\n\ntype RequestHandler = (context: Context, next: NextFunction) => Promise<void> | void;\n")),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context"),": Middleware context.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"response"),": provides a series of methods to process the response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request"),": provides a series of methods to get request info."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source"),": provides Node.js native ",(0,a.kt)("inlineCode",{parentName:"li"},"req")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"res")," object\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"next"),": call next listener\uff08not affect the server process, only current hook\uff09\u3002")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"tracking"},"Tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const Middleware = () => async (ctx, next) => {\n  const start = Date.now();\n  ctx.res.once('finish', () => {\n    console.log(Date.now() - start);\n  });\n}\n")),(0,a.kt)("h3",{id:"inject-tools--data"},"Inject Tools & Data"),(0,a.kt)("p",null,"Modern.js provides ",(0,a.kt)("inlineCode",{parentName:"p"},"res.locals")," to store local variables for the current request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const Middleware = () => async (ctx, next) => {\n  ctx.res.locals.id = 'Modern.js';\n  ctx.res.locals.rpc = createRpcInstance();\n});\n")))}c.isMDXComponent=!0}}]);