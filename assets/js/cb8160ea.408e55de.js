"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7004],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(86215),r=(n(49231),n(54852));const o={title:"api/app.[tj]s",sidebar_position:2},p=void 0,s={unversionedId:"apis/hooks/mwa/api/framework/app",id:"apis/hooks/mwa/api/framework/app",title:"api/app.[tj]s",description:"Modern.js \u6846\u67b6\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u5b9a\u5236 API Server \u7684\u542f\u52a8\u903b\u8f91\u3002\u5728\u4f7f\u7528 express, nest, koa \u65f6\uff0c\u8be5\u6587\u4ef6\u8fd4\u56de\u5bf9\u5e94\u6846\u67b6\u7684\u5b9e\u4f8b\u3002",source:"@site/docs/apis/hooks/mwa/api/framework/app.md",sourceDirName:"apis/hooks/mwa/api/framework",slug:"/apis/hooks/mwa/api/framework/app",permalink:"/docs/apis/hooks/mwa/api/framework/app",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"api/app.[tj]s",sidebar_position:2},sidebar:"apisSidebar",previous:{title:"api/lambda/*.[tj]s",permalink:"/docs/apis/hooks/mwa/api/framework/lambda"},next:{title:"server/index.[tj]s",permalink:"/docs/apis/hooks/mwa/server/"}},i={},l=[{value:"Express",id:"express",level:2},{value:"Nest",id:"nest",level:2},{value:"Koa",id:"koa",level:2},{value:"Egg",id:"egg",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u6846\u67b6\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u5b9a\u5236 API Server \u7684\u542f\u52a8\u903b\u8f91\u3002\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"koa")," \u65f6\uff0c\u8be5\u6587\u4ef6\u8fd4\u56de\u5bf9\u5e94\u6846\u67b6\u7684\u5b9e\u4f8b\u3002\n\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"egg")," \u6846\u67b6\u65f6\uff0c\u8be5\u6587\u4ef6\u8fd4\u56de\u4e00\u4e2a Boot \u7c7b\uff1b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"egg")," \u6846\u67b6\u81ea\u8eab\u7684",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/app-start.html"},"\u7ea6\u5b9a"),"\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u7b80\u5355\u793a\u4f8b\uff1a"),(0,r.kt)("h2",{id:"express"},(0,r.kt)("a",{parentName:"h2",href:"https://expressjs.com/"},"Express")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import express from 'express'\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user')\n})\n\napp.use(async (req, res, next) => {\n    console.info(`access url: ${req.url}`);\n    next();\n});\nexport default app\n")),(0,r.kt)("h2",{id:"nest"},(0,r.kt)("a",{parentName:"h2",href:"https://nestjs.com/"},"Nest")),(0,r.kt)("p",null,"Nest \u867d\u7136\u6709\u5b9a\u5236\u7684\u542f\u52a8\u5668\uff0c\u4f46\u672c\u8d28\u4e0e Express\u3001Koa \u76f8\u540c\uff0c\u6240\u4ee5\u5e94\u7528\u5de5\u7a0b\u6cbf\u7528\u4e86 Nest \u5b9a\u5236\u542f\u52a8\u5668\u7684\u9ed8\u8ba4\u5165\u53e3\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"api/main.ts"),"\u3002"),(0,r.kt)("p",null,"\u6309\u7167 Nest \u5b98\u65b9\u751f\u6210\u5668\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\uff0c\u5728\u5e94\u7528\u5de5\u7a0b\u4e2d\u4f7f\u7528 Nest \u6846\u67b6\u5199\u6cd5\u65f6\uff0c\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"api\n\u251c\u2500\u2500 app.controller.ts\n\u251c\u2500\u2500 app.module.ts\n\u251c\u2500\u2500 app.service.ts\n\u251c\u2500\u2500 lambda\n\u2502   \u2514\u2500\u2500 hello.ts\n\u2514\u2500\u2500 main.ts\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"api/main.ts")," \u4e2d\u7684\u5185\u5bb9\u4e0e Nest \u5b98\u65b9\u751f\u6210\u5668\u751f\u6210\u6a21\u7248\u6709\u6240\u4e0d\u540c\uff0c\u5e94\u7528\u5de5\u7a0b\u4e2d\u652f\u6301\u4e86\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,r.kt)("p",null,"\u4e0d\u5305\u542b\u5185\u7f6e Module\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineCustom } from '@modern-js/plugin-nest';\nimport { NestFactory } from '@nestjs/core';\nimport { Module } from '@nestjs/common';\nimport { AppModule } from './app.module';\n\nexport default NestFactory.create(AppModule);\n")),(0,r.kt)("p",null,"\u5305\u542b\u5185\u7f6e Module\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineCustom } from '@modern-js/plugin-nest';\nimport { NestFactory } from '@nestjs/core';\nimport { Module } from '@nestjs/common';\nimport { AppModule } from './app.module';\n\nexport default defineCustom(async modules => {\n  @Module({\n    imports: [AppModule, ...modules],\n  })\n  class MainModule {}\n\n  return NestFactory.create(MainModule);\n});\n")),(0,r.kt)("h2",{id:"koa"},(0,r.kt)("a",{parentName:"h2",href:"https://koajs.com/"},"Koa")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5f53\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts")," \u7684\u65f6\u5019\uff0cModern.js \u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"koa-body"),"\uff1b\u5f53\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts")," \u65f6\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"koa-body")," \u89e3\u6790\u8bf7\u6c42\u4f53\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Koa from 'koa'\nimport koaBody from 'koa-body'\n\nconst app = new Koa();\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\napp.use(koaBody());\n\nexport default app;\n")),(0,r.kt)("h2",{id:"egg"},(0,r.kt)("a",{parentName:"h2",href:"https://eggjs.org/"},"Egg")),(0,r.kt)("p",null,"\u4f7f\u7528 Egg \u6846\u67b6\u65f6\uff0c\u540c\u6837\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u53ef\u4ee5\u81ea\u5b9a\u4e49\u542f\u52a8\u903b\u8f91\uff1b\n\u4f46\u4e0e\u5176\u4ed6\u6846\u67b6\u4e0d\u540c\uff0cegg \u4e2d\u6b64\u6587\u4ef6\u9075\u5faa egg \u81ea\u8eab\u7684",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/app-start.html"},"\u89c4\u8303"),"\uff0c\u800c\u4e0d\u662f Modern.js \u7684\u7ea6\u5b9a\u3002"))}c.isMDXComponent=!0}}]);