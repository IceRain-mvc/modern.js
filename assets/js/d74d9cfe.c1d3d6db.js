"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8411],{54852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(86215),a=(r(49231),r(54852));const i={title:"Serverless \u5f00\u53d1\u8303\u5f0f"},o=void 0,s={unversionedId:"guides/tutorials/c09-bff/9.1-serverless",id:"guides/tutorials/c09-bff/9.1-serverless",title:"Serverless \u5f00\u53d1\u8303\u5f0f",description:"\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u7528\u6765\u6e32\u67d3\u8054\u7cfb\u4eba\u5217\u8868\u7684\u6570\u636e\uff0c\u90fd\u6765\u81ea\u4ee3\u7801\u4e2d\u7684 Mock \u6570\u636e\u3002",source:"@site/docs/guides/tutorials/c09-bff/9.1-serverless.md",sourceDirName:"guides/tutorials/c09-bff",slug:"/guides/tutorials/c09-bff/9.1-serverless",permalink:"/docs/guides/tutorials/c09-bff/9.1-serverless",tags:[],version:"current",frontMatter:{title:"Serverless \u5f00\u53d1\u8303\u5f0f"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.2-file-based-routing"},next:{title:"\u542f\u7528 BFF",permalink:"/docs/guides/tutorials/c09-bff/9.2-enable-bff"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u7528\u6765\u6e32\u67d3\u8054\u7cfb\u4eba\u5217\u8868\u7684\u6570\u636e\uff0c\u90fd\u6765\u81ea\u4ee3\u7801\u4e2d\u7684 Mock \u6570\u636e\u3002"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 BFF \u83b7\u53d6\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u56de\u987e\u4e0b\u4e0a\u4e00\u7ae0\u8282 Demo \u4e2d\u7684\u8054\u7cfb\u4eba\u5217\u8868\u5e94\u7528\uff0c\u5b83\u6709\u591a\u79cd\u8fd0\u884c\u65b9\u5f0f\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pnpm run dev")," - \u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u7528\u4e8e\u8c03\u8bd5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pnpm run build && pnpm run start")," - \u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6b63\u5f0f\u8fd0\u884c")),(0,a.kt)("p",null,"\u65e0\u8bba\u54ea\u79cd\u65b9\u5f0f\uff0c\u6574\u4e2a\u5e94\u7528\u5728\u8fd0\u884c\u65f6\uff08runtime\uff09\u90fd\u662f\u4e00\u4e2a\u3010 Universal App \u3011\uff0c\u65e2\u6709\u5ba2\u6237\u7aef\u90e8\u5206\uff08\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u7684 App \u4ee3\u7801\u548c\u6846\u67b6\u4ee3\u7801\uff09\uff0c\u4e5f\u6709\u670d\u52a1\u5668\u7aef\u90e8\u5206\uff08\u6846\u67b6\u5185\u7f6e\u7684 Static Web Server \u6216 SSR Server\uff0c\u5728 SSR \u73af\u8282\u8fd0\u884c\u7684 App \u4ee3\u7801\u548c\u6846\u67b6\u4ee3\u7801\uff09\u3002"),(0,a.kt)("p",null,"\u4f46\u5f00\u53d1\u8005\u5bf9\u670d\u52a1\u5668\u51e0\u4e4e\u662f\u65e0\u611f\u77e5\u7684\uff0c\u5f00\u53d1\u73af\u8282\u5e76\u6ca1\u6709\u4e13\u95e8\u5199 server \u4ee3\u7801\uff0c\u8fd0\u884c\u548c\u90e8\u7f72\u7684\u65f6\u5019\uff0c\u4e5f\u4e0d\u8ddf\u5177\u4f53 server \u6253\u4ea4\u9053\uff0c\u4e0d\u9700\u8981\u8fd0\u7ef4 server\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u4ea7\u54c1\u672c\u8eab\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u5f00\u53d1\u8303\u5f0f\uff0c\u6211\u4eec\u79f0\u4f5c Serverless Web Development\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u7684 SSR \u6280\u672f\uff0c\u6211\u4eec\u79f0\u4f5c Serverless SSR\uff0c\u5b9e\u73b0\u4e86 SSR \u5728\u5f00\u53d1\u3001\u8fd0\u884c\u3001\u90e8\u7f72\u5168\u6d41\u7a0b\u4e2d\u7684 Serverless\u3002"),(0,a.kt)("p",null,"\u4ece\u672c\u8282\u5f00\u59cb\uff0c\u6211\u4eec\u8981\u63a5\u89e6 Serverless Web Development \u7684\u53e6\u4e00\u90e8\u5206\uff1aServerless BFF\uff0c\u8ddf SSR \u4e00\u6837\uff0c\u80fd\u5b9e\u73b0 ",(0,a.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/apigateway.html"},"BFF\uff08Backends for Frontends\uff09"),"\u5728\u5f00\u53d1\u3001\u8fd0\u884c\u3001\u90e8\u7f72\u5168\u6d41\u7a0b\u4e2d\u7684 Serverless\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6211\u4eec\u8fd9\u91cc\u8bf4\u7684 BFF\uff0c\u4e0d\u662f\u6307\u4efb\u610f\u7684\u9762\u5411\u5ba2\u6237\u7aef\u7a0b\u5e8f\u7684\u670d\u52a1\u5668\u7aef API\uff0c\u800c\u662f\u662f\u66f4\u7eaf\u7cb9\u3001\u72ed\u4e49\u7684 BFF\uff0c\u6307\u4e13\u95e8\u670d\u52a1\u7279\u5b9a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u3001\u7279\u5b9a\u4ea7\u54c1 UI \u9700\u6c42\u7684\u670d\u52a1\u5668\u7aef API\u3002"),(0,a.kt)("p",{parentName:"div"},"\u8fd9\u79cd API \u66f4\u9002\u5408\u8ddf\u5ba2\u6237\u7aef\u4ee3\u7801\u5728\u4e00\u8d77\u5b9e\u73b0\u3001\u8c03\u8bd5\u3001\u8fd0\u884c\u548c\u90e8\u7f72\uff0c\u7531\u540c\u4e00\u4e2a/\u6279\u5f00\u53d1\u8005\u8d1f\u8d23\u3002"),(0,a.kt)("p",{parentName:"div"},"\u7b80\u5355\u60c5\u51b5\u4e0b\u8fd9\u79cd API \u505a\u7684\u662f\u5bf9\u66f4\u5e95\u5c42 API\uff08\u6bd4\u5982\u5404\u79cd\u5fae\u670d\u52a1\uff09\u7684\u805a\u5408\u3001\u6620\u5c04\u3001\u88c1\u526a\u3001\u4ee3\u7406\u7b49\uff0c\u590d\u6742\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u8bbf\u95ee\u6570\u636e\u5b58\u50a8\uff08\u6bd4\u5982\u5e94\u7528\u6570\u636e\u5e93\u3001\u7f13\u5b58\u7b49\uff09\uff0c\u6709\u670d\u52a1\u5668\u7aef Model \u7b49\u4e1a\u52a1\u903b\u8f91\u5206\u5c42\uff0c\u4f46\u90fd\u503e\u5411\u4e8e\u53ea\u7ef4\u62a4\u5f88\u8584\u7684\u4e00\u5c42\u670d\u52a1\u5668\u7aef\u4e1a\u52a1\u903b\u8f91\u3002"))))}u.isMDXComponent=!0}}]);