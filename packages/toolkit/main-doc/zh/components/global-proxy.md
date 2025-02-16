
Modern.js 提供了开箱即用的全局代理插件 `@modern-js/plugin-proxy`，该插件底层基于 [whistle](https://github.com/avwo/whistle)，可用来查看、修改 HTTP/HTTPS 的请求和响应，也可作为 HTTP 代理服务器使用。

### 设置代理规则

引入代理插件并填写规则后，执行 `pnpm run dev`，Modern.js 会在开发服务器启动之后，自动启用代理服务器。

具体代理规则，可通过 [`dev.proxy`](/docs/configure/app/dev/proxy) 选项或 `config/proxy.js` 文件进行设置。

### 代理服务器 UI 界面

安装代理插件并配置代理规则后， 执行 `pnpm run dev` 命令：

```bash
  App running at:

  Local:    http://localhost:8080/
  Network:  http://192.168.0.1:8080/

ℹ  info      Starting the proxy server.....
✔  success   Proxy Server start on localhost:8899
```

在控制台中可以看到代理服务器成功启动。

访问 `http://localhost:8899`，显示下图所示的 UI 界面后，即可通过界面设置规则。

![debug-proxy-ui](https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png)
