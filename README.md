# CodeCook [Web Site](http://www.tangsj.com)

###启动方式

Mac、Linux

```
  npm run dev -- 开发模式
  npm run build:local -- 本地生产环境打包
  npm run build:server -- 正式生产环境打包
```

Windows

```
  npm run dev-win -- 开发模式
  npm run build-win:local -- 本地生产环境打包
  npm run build-win:server -- 正式生产环境打包
```

###远程发布

server方式打包完成后，可以利用 `gulp publish` 将代码一键发布到VPS服务器

###问题

需要实践利用Immutable配合shouldComponentUpdate进行性能优化