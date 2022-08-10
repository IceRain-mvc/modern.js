"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[274],{54852:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>c});var t=a(49231);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?t.createElement(k,i(i({ref:n},s),{},{components:a})):t.createElement(k,i({ref:n},s))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55812:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var t=a(86215),r=(a(49231),a(54852));const o={sidebar_position:1,title:"Loader \u7ba1\u7406"},i=void 0,d={unversionedId:"guides/features/runtime/use-loader",id:"guides/features/runtime/use-loader",title:"Loader \u7ba1\u7406",description:"\u4ec0\u4e48\u662f Loader",source:"@site/docs/guides/features/runtime/use-loader.md",sourceDirName:"guides/features/runtime",slug:"/guides/features/runtime/use-loader",permalink:"/docs/guides/features/runtime/use-loader",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Loader \u7ba1\u7406"},sidebar:"guidesSidebar",previous:{title:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u5206\u5272",permalink:"/docs/guides/features/runtime/code-splitting"},next:{title:"\u8def\u7531\u4f7f\u7528",permalink:"/docs/guides/features/runtime/router"}},l={},p=[{value:"\u4ec0\u4e48\u662f Loader",id:"\u4ec0\u4e48\u662f-loader",level:2},{value:"\u7b80\u5355\u7684 useLoader \u4f7f\u7528",id:"\u7b80\u5355\u7684-useloader-\u4f7f\u7528",level:2},{value:"\u5982\u4f55\u505a\u670d\u52a1\u7aef\u6570\u636e\u7684\u540c\u6b65",id:"\u5982\u4f55\u505a\u670d\u52a1\u7aef\u6570\u636e\u7684\u540c\u6b65",level:2},{value:"useLoader \u964d\u7ea7",id:"useloader-\u964d\u7ea7",level:2},{value:"\u7ed3\u5408 SSG \u4f7f\u7528",id:"\u7ed3\u5408-ssg-\u4f7f\u7528",level:2},{value:"Loader \u7f13\u5b58\u3001\u91cd\u8bd5",id:"loader-\u7f13\u5b58\u91cd\u8bd5",level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:3},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:3},{value:"\u81ea\u52a8\u66f4\u65b0",id:"\u81ea\u52a8\u66f4\u65b0",level:4},{value:"\u624b\u52a8\u66f4\u65b0",id:"\u624b\u52a8\u66f4\u65b0",level:4},{value:"Dependent Loader",id:"dependent-loader",level:2}],s={toc:p};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-loader"},"\u4ec0\u4e48\u662f Loader"),(0,r.kt)("p",null,"\u5f00\u53d1 SSR \u5e94\u7528\uff0c\u670d\u52a1\u7aef\u9884\u52a0\u8f7d\u6570\u636e\u662f\u4e00\u4e2a\u5fc5\u4e0d\u53ef\u5c11\u7684\u6d41\u7a0b\uff0c\u5b83\u901a\u5e38\u5305\u542b\u4ee5\u4e0b 3 \u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u9884\u5148\u8bf7\u6c42\u5e94\u7528\u6e32\u67d3\u6240\u9700\u8981\u7684\u6570\u636e\uff0c\u4f7f\u7528\u83b7\u53d6\u5230\u7684\u6570\u636e\u5728\u670d\u52a1\u7aef\u751f\u6210\u5b8c\u6574 HTML\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u8fd4\u56de HTML \u7684\u540c\u65f6\uff0c\u628a\u8bf7\u6c42\u5230\u7684\u6570\u636e\u540c\u6b65\u5230\u5ba2\u6237\u7aef\uff08\u4e00\u822c\u662f\u901a\u8fc7\u5c06\u6570\u636e\u5e8f\u5217\u5316\uff0c\u63d2\u5165\u5230\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 HTML \u7684 Script \u811a\u672c\u4e2d\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u590d\u7528\u670d\u52a1\u7aef\u9884\u5148\u8bf7\u6c42\u5230\u7684\u6570\u636e\uff0c\u6267\u884c\u540e\u7eed\u903b\u8f91\u3002")),(0,r.kt)("p",null,"Modern.js \u63d0\u51fa\u4e86 Loader \u7684\u6982\u5ff5\uff0c\u5c06\u4e0a\u8ff0\u884c\u4e3a\u8fdb\u884c\u62bd\u8c61\u3002\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u8fd9\u6837\u4e00\u4e2a\u540c\u6784\u7684 API\uff0c\u5904\u7406 SSR \u5e94\u7528\u7684\u6570\u636e\u8bf7\u6c42\uff0cModern.js \u4f1a\u81ea\u52a8\u5904\u7406\u4e0a\u8ff0\u4e09\u4e2a\u6d41\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u7b80\u5355\u7684-useloader-\u4f7f\u7528"},"\u7b80\u5355\u7684 useLoader \u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function App() {\n  const { data, loading, error } = useLoader(async () => {\n    return fetch(url);\n  });\n\n  return ...;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u8fd4\u56de\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\uff08\u6210\u529f\u65f6\u8fd4\u56de\u7684\u6570\u636e\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"loading"),"\uff08Loader \u662f\u5426\u6b63\u5728\u52a0\u8f7d\u4e2d\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\uff08\u5931\u8d25\u65f6\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f\uff09\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u505a\u670d\u52a1\u7aef\u6570\u636e\u7684\u540c\u6b65"},"\u5982\u4f55\u505a\u670d\u52a1\u7aef\u6570\u636e\u7684\u540c\u6b65"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u662f\u4e00\u4e2a Hook \u51fd\u6570\uff0c\u53ef\u4ee5\u5728\u4efb\u610f React \u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"Modern.js")," \u662f\u600e\u4e48\u53bb\u540c\u6b65\u670d\u52a1\u7aef\u9884\u52a0\u8f7d\u7684\u6570\u636e\u5230\u5ba2\u6237\u7aef\u5462?"),(0,r.kt)("p",null,"\u670d\u52a1\u7aef\u5f88\u5bb9\u6613\u628a\u6240\u6709\u52a0\u8f7d\u5230\u7684 Loader \u6267\u884c\u4e00\u904d\uff0c\u5e76\u62ff\u5230\u8fd4\u56de\u7684\u6570\u636e\uff0c\u96be\u70b9\u5728\u4e8e\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u7684\u65f6\u5019\u540c\u6b65\u8fd9\u4efd\u6570\u636e\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"Modern.js")," \u7f16\u8bd1\u7684\u65f6\u5019\u4f1a\u7ed9\u6bcf\u4e00\u4e2a Loader \u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \uff0c\u7528\u4e8e\u6570\u636e\u540c\u6b65\u7684\u6807\u8bb0\u3002\u5982\u4e0b\u662f\u4e00\u4e2a\u7f16\u8bd1\u540e\u7684\u4ea7\u7269\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"var loader = async () => {\n  return fetch(url);\n};\n\nloader.id = 'id1';\n\nconst { data, loading, error } = useLoader(loader);\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u670d\u52a1\u7aef\u8fd0\u884c\u5b8c\u6210\u540e\u4f1a\u4ea7\u751f\u5982\u4e0b\u7ed3\u6784\u7684\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  'id1': {\n    data: 'hello',\n    error: null,\n    loading: false\n  }\n}\n")),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u91cd\u65b0\u8fd0\u884c Loader \u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u81ea\u8eab\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u4ece\u670d\u52a1\u7aef\u9884\u5148\u52a0\u8f7d\u7684\u6570\u636e\u4e2d\u53bb\u67e5\u627e\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5bf9\u5e94\u6570\u636e\uff0c\u5ba2\u6237\u7aef\u4f1a\u91cd\u65b0\u6267\u884c Loader\u3002"),(0,r.kt)("h2",{id:"useloader-\u964d\u7ea7"},"useLoader \u964d\u7ea7"),(0,r.kt)("p",null,"\u5728\u771f\u5b9e\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u670d\u52a1\u7aef\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u53ef\u80fd\u56e0\u4e3a\u5404\u79cd\u539f\u56e0\u51fa\u73b0\u9519\u8bef\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u5c06\u5931\u8d25\u4e86\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u964d\u7ea7\u5230\u5ba2\u6237\u7aef\u91cd\u65b0\u6267\u884c\u3002\n\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u6267\u884c\u5931\u8d25\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  'id1': {\n    data: null,\n    error: 'I was failed',\n    loading: false\n  }\n}\n")),(0,r.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u6267\u884c\u65f6\u53d1\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u5b57\u6bb5\u4e0d\u4e3a\u7a7a\uff0c\u8ba4\u4e3a\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u5728\u670d\u52a1\u7aef\u5931\u8d25\uff0c\u4f1a\u964d\u7ea7\u5230\u5ba2\u6237\u7aef\u91cd\u65b0\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u5408-ssg-\u4f7f\u7528"},"\u7ed3\u5408 SSG \u4f7f\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/server-side/web/ssg"},(0,r.kt)("inlineCode",{parentName:"a"},"SSG"))," \u65f6\uff0c\u9875\u9762\u7684\u8bf7\u6c42\u4f1a\u5206\u4e3a\u4e24\u79cd\u6570\u636e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u7684\uff0c\u5373\u4e0d\u4f1a\u53d8\u66f4\u7684\uff0c\u6211\u4eec\u5e0c\u671b\u5728 SSG \u7f16\u8bd1\u9636\u6bb5\u5c31\u52a0\u8f7d\u8fd9\u90e8\u5206\u6570\u636e\u5e76\u751f\u6210\u5230 HTML \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u7684\uff0c\u4f1a\u9891\u7e41\u53d8\u66f4\u7684\uff0c\u9700\u8981\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u518d\u6b21\u8bf7\u6c42\u8fd9\u90e8\u5206\u6570\u636e\u3002")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7b2c\u4e00\u90e8\u5206\u9700\u8981\u5728 SSG \u7f16\u8bd1\u9636\u6bb5\u4f7f\u7528\u7684\u6570\u636e\uff0c\u6211\u4eec\u53ea\u9700\u8981\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," \u7684\u6807\u8bc6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Home() {\n  const { data: staticData } = useLoader(async () => {\n    return fetch(url1);\n  }, { static: true })\n\n  const { data: dynamicData } = useLoader(async () => {\n    return fetch(url2);\n  })\n\n  return ...\n}\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a Loader \u4f7f\u7528\u7684\u9759\u6001\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"staticData")," \u5728\u7f16\u8bd1\u9636\u6bb5\u5c31\u4f1a\u88ab\u52a0\u8f7d\u52a0\u8f7d\uff0c\u7b2c\u4e8c\u4e2a Loader \u4f7f\u7528\u7684\u52a8\u6001\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamicData")," \u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u624d\u4f1a\u88ab\u8bf7\u6c42\u52a0\u8f7d\u3002"),(0,r.kt)("h2",{id:"loader-\u7f13\u5b58\u91cd\u8bd5"},"Loader \u7f13\u5b58\u3001\u91cd\u8bd5"),(0,r.kt)("h3",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u4e00\u4e2a\u540c\u6837\u529f\u80fd\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u53ef\u80fd\u5728\u591a\u4e2a\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002 Modern.js \u652f\u6301 Loader \u7684\u7f13\u5b58\u548c\u53bb\u91cd\u80fd\u529b\uff0c\u907f\u514d\u989d\u5916\u91cd\u590d\u7684 Loader \u6267\u884c\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u6709\u4e00\u4e2a\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u7684 Loader\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function useUserInfoLoader(username) {\n  return useLoader(\n    async(context, _username) => {\n      return fetch(userUrl, { params: { _username } })\n    },\n    {\n      params: username\n    }   // \u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u8d77\u5230 Loader ID \u4f5c\u7528\n  );\n}\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u4f20\u7ed9\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"\uff0c\u8fd9\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u8d77\u5230 Loader ID \u7684\u4f5c\u7528\u3002Modern.js \u5185\u90e8\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u5e8f\u5217\u5316\u6210\u4e00\u4e2a ID\uff0c\u4f5c\u4e3a Loader \u7684\u552f\u4e00\u6807\u8bc6\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u4f5c\u4e3a ID \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u7f16\u8bd1\u65f6\u751f\u6210\u7684 Loader ID\u3002"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u4e0d\u540c\u7ec4\u4ef6\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useUserInfoLoader")," \u7684\u65f6\u5019\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Home() {\n  const { data } = useUserInfoLoader('bob');\n\n  return ...;\n}\n\nfunction About() {\n  const { data } = useUserInfoLoader('bob');\n  const { data: data1 } = useUserInfoLoader('tom');\n\n  return ...;\n}\n\nfunction App() {\n  return <div>\n    <Home />\n    <About />\n  </div>\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Home")," \u7ec4\u4ef6\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"About")," \u7ec4\u4ef6\u90fd\u6267\u884c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useUserInfoLoader('bob')"),"\uff0c\u6839\u636e\u4e0a\u6587\u6211\u4eec\u77e5\u9053 ",(0,r.kt)("inlineCode",{parentName:"p"},"'bob'")," \u6700\u7ec8\u4f1a\u4f5c\u4e3a Loader \u7684 ID\uff0c\u56e0\u4e3a ID \u662f\u76f8\u7b49\u7684\uff0c\u6240\u4ee5 Modern.js \u5185\u90e8\u53ea\u4f1a\u4fdd\u7559\u4e00\u4e2a Loader \u5b9e\u4f8b\uff0c\u5373\u53ea\u4f1a\u8bf7\u6c42\u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"'bob'")," \u7684\u7528\u6237\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"\u91cd\u8bd5"},"\u91cd\u8bd5"),(0,r.kt)("p",null,"Loader \u8fc7\u671f\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u91cd\u65b0\u6267\u884c Loader \u4ee5\u66f4\u65b0\u6570\u636e\u3002"),(0,r.kt)("p",null,"Modern.js \u4e2d\u63d0\u4f9b\u4e86\u4e24\u79cd\u66f4\u65b0 Loader \u7684\u65b9\u5f0f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u66f4\u65b0")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u66f4\u65b0"),"\u3002"),(0,r.kt)("h4",{id:"\u81ea\u52a8\u66f4\u65b0"},"\u81ea\u52a8\u66f4\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Home({ username }) {\n  const { data, reloading } = useUserInfoLoader(username);\n\n  return ...;\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6539\u9020 ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," \u7ec4\u4ef6\uff0c\u63a5\u6536\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u5b57\u6bb5\u4f5c\u4e3a props\u3002\u90a3\u4e48\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u66f4\u65b0\u7684\u65f6\u5019\uff0c\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"UserInfoLoader")," \u662f\u4f1a\u91cd\u65b0\u6267\u884c\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u91cd\u65b0\u8bf7\u6c42\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u5bf9\u5e94\u7684\u7528\u6237\u4fe1\u606f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," \u4f1a\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u53c2\u6570\u8ba4\u4e3a\u662f\u81ea\u8eab\u7684\u4f9d\u8d56\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u5e8f\u5217\u5316\u540e\u7684\u503c\u66f4\u65b0\u4e86\u7684\u65f6\u5019\uff0c\u5bf9\u5e94 Loader \u624d\u4f1a\u91cd\u65b0\u6267\u884c\uff0c\u66f4\u65b0 Loader \u6570\u636e\uff0c\u5426\u5219\u6cbf\u7528\u4e4b\u524d\u65e7\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"reloading")," \u7684\u503c\u6765\u5224\u65ad\u5f53\u524d\u7684 Loader \u662f\u5426\u5904\u4e8e\u6b63\u5728\u66f4\u65b0\u7684\u72b6\u6001\u4e2d\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a Loader \u66f4\u65b0\u7684\u65f6\u5019\uff0c\u8be5 Loader \u6240\u5728\u7684\u5176\u5b83\u7ec4\u4ef6\u4e5f\u4f1a\u54cd\u5e94 Loader \u66f4\u65b0\uff0c\u8fdb\u884c\u91cd\u65b0\u6e32\u67d3\u3002")))),(0,r.kt)("h4",{id:"\u624b\u52a8\u66f4\u65b0"},"\u624b\u52a8\u66f4\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Home({ username }) {\n  const { data, reloading, reload } = useUserInfoLoader(username);\n\n  return <div>\n    <div>{JSON.stringify(data)}</div>\n    <button onClick={() => reload('kitten')}> reload </button>\n  </div>\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"reload")," \u6309\u94ae\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"reload('kitten')")," \u51fd\u6570\uff0c\u6b64\u65f6\u4f1a\u89e6\u53d1 Loader \u7684\u91cd\u65b0\u6267\u884c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"'kitten'")," \u4f1a\u4f5c\u4e3a\u65b0\u7684\u53c2\u6570\u4f20\u7ed9 Loader \u51fd\u6570\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u7528\u4e4b\u524d\u53c2\u6570\u66f4\u65b0 Loader \u65f6\uff0c\u53ef\u76f4\u63a5\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"reload()"),"\u3002")))),(0,r.kt)("h2",{id:"dependent-loader"},"Dependent Loader"),(0,r.kt)("p",null,"Loader \u83b7\u53d6\u6570\u636e\u662f\u5f02\u6b65\u7684\uff0c\u5f53\u4e00\u4e2a Loader \u7684\u6267\u884c\u4f9d\u8d56\u53e6\u5916\u4e00\u4e2a Loader \u6267\u884c\u5b8c\u6210\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"skip")," \u53c2\u6570\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Home() {\n  const { data, loading } = useLoader(async () => {\n    return new Promise(resolve => setTimeout(resolve, 1000))\n  });\n\n\n  const res = useLoader(async (context, data) => {\n    return fetch(url, { body: data });\n  }, { params: data, skip: loading || !data });\n}\n")),(0,r.kt)("p",null,"\u5f53\u7b2c\u4e00\u4e2a Loader \u6ca1\u6709\u8fd4\u56de\u7684\u65f6\u5019\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a\u7a7a\u3002\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"loading || !data")," \u8df3\u8fc7\u7b2c\u4e8c\u4e2a Loader \u7684\u6267\u884c\u3002\n\u5f53\u7b2c\u4e00\u4e2a Loader \u6210\u529f\u6267\u884c\u5b8c\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"loading || !data")," \u503c\u8f6c\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u7b2c\u4e8c\u4e2a Loader \u4fbf\u5f00\u59cb\u6267\u884c\u4e86\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u7ae0\u4ee3\u7801\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/use-loader"},"use-loader"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003\u3010",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/runtime/container/use-loader"},"useLoader API"),"\u3011\u3002")))))}u.isMDXComponent=!0}}]);