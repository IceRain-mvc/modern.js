"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1168],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(86215),r=(n(49231),n(54852));const o={title:"\u4f7f\u7528\u81ea\u63a7\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b"},i=void 0,l={unversionedId:"guides/tutorials/c08-client-side-routing/8.1-code-based-routing",id:"guides/tutorials/c08-client-side-routing/8.1-code-based-routing",title:"\u4f7f\u7528\u81ea\u63a7\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u521b\u5efa\u5e94\u7528\u5165\u53e3\u3002",source:"@site/docs/guides/tutorials/c08-client-side-routing/8.1-code-based-routing.md",sourceDirName:"guides/tutorials/c08-client-side-routing",slug:"/guides/tutorials/c08-client-side-routing/8.1-code-based-routing",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.1-code-based-routing",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u81ea\u63a7\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u7ba1\u7406\u5e94\u7528\u5165\u53e3\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand"},next:{title:"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.2-file-based-routing"}},p={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u521b\u5efa\u5e94\u7528\u5165\u53e3\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5b66\u4e60\u5982\u4f55\u4e3a\u5165\u53e3\u589e\u52a0\u3010 \u5ba2\u6237\u7aef\u8def\u7531 \u3011\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5206\u522b\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"landing-page")," \u589e\u52a0\u5ba2\u6237\u7aef\u8def\u7531\u903b\u8f91\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contacts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"landing-page")," \u8fd9\u4e24\u4e2a\u5165\u53e3\uff0c\u90fd\u662f\u901a\u8fc7 CLI \u81ea\u52a8\u521b\u5efa\u51fa\u6765\u7684\uff0c\u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\u6211\u4eec\u6ca1\u6709\u4fee\u6539\u5165\u53e3\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u56e0\u6b64\u6bcf\u4e2a\u5165\u53e3\u7684\u5ba2\u6237\u7aef\u8def\u7531\u90fd\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n});\n")),(0,r.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u5df2\u7ecf\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u589e\u52a0\u4e86 Archive \u6309\u94ae\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u5ba2\u6237\u7aef\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"/archives"),"\uff0c\u8bbf\u95ee\u8fd9\u4e2a\u8def\u7531\u65f6\uff0c\u53ea\u663e\u793a\u5df2\u5b58\u6863\u7684\u8054\u7cfb\u4eba\uff0c\u800c\u539f\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u7ee7\u7eed\u663e\u793a\u6240\u6709\u8054\u7cfb\u4eba\u3002"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contacts/App.tsx"),"\uff0c\u5728\u539f\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockData")," \u4e0b\u65b9\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"mockArchivedData"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nconst mockArchivedData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n]);\n")),(0,r.kt)("p",null,"\u5728\u6587\u4ef6\u9876\u90e8\u5f15\u5165 ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"React Router")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Switch")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"React Helmet")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Helmet")," \u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Route, Switch } from '@modern-js/runtime/router';\nimport { Helmet } from '@modern-js/runtime/head';\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u7ec4\u4ef6\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u5199\u4e24\u4e2a\u8def\u7531\uff0c\u5206\u522b\u7528\u4e0d\u540c\u7684 mock \u6570\u636e\u6e32\u67d3\u5217\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <div className="container lg mx-auto">\n      <Switch>\n        <Route path="/" exact={true}>\n          <Helmet>\n            <title>All</title>\n          </Helmet>\n          <List\n            dataSource={mockData}\n            renderItem={info => <Item key={info.name} info={info} />}\n          />\n        </Route>\n        <Route path="/archives" exact={true}>\n          <Helmet>\n            <title>Archives</title>\n          </Helmet>\n          <List\n            dataSource={mockArchivedData}\n            renderItem={info => <Item key={info.name} info={info} />}\n          />\n        </Route>\n      </Switch>\n    </div>\n  );\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Modern.js \u9ed8\u8ba4\u96c6\u6210\u4e86 react-helmet\uff0c\u65e0\u9700\u5b89\u88c5\u4f9d\u8d56\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u7ed3\u5408 SSR \u4f7f\u7528\uff0c\u6ee1\u8db3 SEO \u9700\u6c42\u3002"),(0,r.kt)("p",{parentName:"div"},"Modern.js \u4e5f\u9ed8\u8ba4\u96c6\u6210\u4e86 react-router\uff0c\u65e0\u9700\u5b89\u88c5\u4f9d\u8d56\u548c\u81ea\u5df1\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," \u7b49\u6837\u677f\u4ee3\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528 Route\u3001Switch \u7b49\u7ec4\u4ef6\u5b9e\u73b0\u8def\u7531\u903b\u8f91\u3002"))),(0,r.kt)("p",null,"React Router v4+ \u6709\u4e24\u79cd\u7528\u6cd5\uff0c\u4e00\u79cd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"component-based")," \u7684\uff0c\u4e00\u79cd\u662f\u57fa\u4e8e\u5168\u5c40\u914d\u7f6e\u7684\u3002\u8fd9\u4e24\u79cd\u90fd\u7531\u5f00\u53d1\u8005\u81ea\u5df1\u7528\u4ee3\u7801\u6765\u63a7\u5236\u5ba2\u6237\u7aef\u8def\u7531\u903b\u8f91\uff0c\u6240\u4ee5\u6211\u4eec\u628a\u8fd9\u79cd\u6a21\u5f0f\u79f0\u4f5c\u3010",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u3011\u3002"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/contacts"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5b8c\u6574\u7684\u8054\u7cfb\u4eba\uff0c\u9875\u9762\u7684\u6807\u9898\u662f All\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/display.png",alt:"display"})),(0,r.kt)("p",null,"\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/contacts/archives"),"\uff0c\u53ea\u4f1a\u770b\u5230\u5df2\u5b58\u6863\u7684\u8054\u7cfb\u4eba\uff0c\u9875\u9762\u7684\u6807\u9898\u662f Archives\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/display1.png",alt:"display1"})),(0,r.kt)("p",null,"\u67e5\u770b\u9875\u9762 HTML \u6e90\u7801\uff0c\u53ef\u4ee5\u770b\u5230\u4e24\u4e2a\u9875\u9762\u7684\u5185\u5bb9\u662f\u4e00\u6837\uff0c\u662f\u5728\u5ba2\u6237\u7aef\u9488\u5bf9\u4e0d\u540c URL \u6e32\u67d3\u4e0d\u540c\u5185\u5bb9\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u6211\u4eec\u589e\u52a0\u4e00\u4e2a\u7b80\u5355\u7684\u5bfc\u822a\u680f\uff0c\u8ba9\u7528\u6237\u80fd\u5728\u4e24\u4e2a\u5217\u8868\u4e4b\u95f4\u5207\u6362"),"\u3002"),(0,r.kt)("p",null,"\u6253\u5f00 src/contacts/App.tsx\uff0c\u5728\u9876\u90e8\u5bfc\u5165 Radio \u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { List, Radio } from 'antd';\n")),(0,r.kt)("p",null,"\u7136\u540e\u5c06 UI \u6700\u9876\u90e8\u8fdb\u884c\u4fee\u6539\uff0c\u589e\u52a0\u4e00\u7ec4\u5355\u9009\u6846"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3-8}","{3-8}":!0},'return (\n  <div className="container lg mx-auto">\n    <div className="h-16 p-2 flex items-center justify-center">\n      <Radio.Group onChange={handleSetList} value={currentList}>\n        <Radio value="/">All</Radio>\n        <Radio value="/archives">Archives</Radio>\n      </Radio.Group>\n    </div>\n    <Switch>\n')),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u6765\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"currentList")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"handleSetList"),"\u3002"),(0,r.kt)("p",null,"\u5f15\u5165\u4e24\u4e2a React Hook\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory"),"\uff0c\u4ee5\u53ca Ant Design \u7684\u4e8b\u4ef6\u7c7b\u578b\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react';\nimport { List, Radio, RadioChangeEvent } from 'antd';\nimport { Route, Switch, useHistory } from '@modern-js/runtime/router';\n")),(0,r.kt)("p",null,"\u6700\u540e\u5728 App \u7ec4\u4ef6\u91cc\u589e\u52a0\u5c40\u90e8\u72b6\u6001\u548c\u76f8\u5173\u903b\u8f91\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2-8}","{2-8}":!0},"function App() {\n  const history = useHistory();\n  const [currentList, setList] = useState(history.location.pathname || '/');\n  const handleSetList = (e: RadioChangeEvent) => {\n    const { value } = e.target;\n    setList(value);\n    history.push(value);\n  };\n")),(0,r.kt)("p",null,"\u5230\u8fd9\u91cc\u5c31\u5df2\u7ecf\u5b8c\u6210\u4e86\u9875\u9762\u5bfc\u822a\u680f\u5b9e\u73b0\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u67e5\u770b\u6548\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/display2.png",alt:"display2"})),(0,r.kt)("p",null,"\u70b9\u51fb\u5bfc\u822a\u680f\u4e2d Archives\uff0c\u53ef\u4ee5\u770b\u5230\u5355\u9009\u6846\u7684\u9009\u4e2d\u72b6\u6001\u548c URL \u90fd\u4f1a\u53d8\u5316\uff0c\u9875\u9762\u6ca1\u6709\u5237\u65b0\uff0c\u53ea\u53d1\u751f\u4e86 CSR\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c06 contacts \u5165\u53e3\u7684 SSR \u9009\u9879\u5f00\u542f\u540e\uff08",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/server/ssr"},"\u914d\u7f6e\u6559\u7a0b"),"\uff09\uff0c\u91cd\u65b0\u8bbf\u95ee\u4e24\u4e2a\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230 HTML \u5185\u5bb9\u662f\u4e0d\u540c\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728 SSR \u9636\u6bb5\u9875\u9762\u5c31\u6267\u884c\u4e86\u5ba2\u6237\u7aef\u8def\u7531\u7684\u903b\u8f91\uff0cHTML \u91cc\u5df2\u7ecf\u5305\u542b\u4e86\u6700\u7ec8\u7684\u6e32\u67d3\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/contacts/archives"),"\uff0c\u70b9\u51fb\u9876\u90e8\u5355\u9009\u6846\uff0c\u53ef\u4ee5\u770b\u5230\u5728\u6709 SSR \u7684\u60c5\u51b5\u4e0b\uff0cCSR \u4e0d\u53d7\u5f71\u54cd\uff0c\u8ddf\u5f00\u542f SSR \u4e4b\u524d\u7684\u6548\u679c\u4e00\u81f4\uff0c\u5b9e\u73b0\u4e86 UX \u7684\u6700\u5927\u5316\uff08\u9996\u5c4f SSR\uff0c\u540e\u7eed\u4ea4\u4e92 CSR\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c08/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);