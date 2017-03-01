## GIT WEB HOOK

git web hook 配置示例( 示例依赖git.oschina.net )

当我们的git仓库收到新的push等请求时，我们可能需要同步更新我们的测试环境服务器，那么hook就可以上场了。

在git.oschina.net上的具体配置可以参看：[http://git.mydoc.io/?t=154711](http://git.mydoc.io/?t=154711)

这里重点说的我们需要提供给git 的一个 Hook Url,  简单来说也就是我们需要提供一个外网可以访问到的web 服务

nodejs 示例代码如下(index.js)：

```javascript
var express = require('express');
var app = express();

var process = require('child_process');

app.get('/', function(req, res){
  res.send('代码同步服务!!');
});

app.post('/git/push', function(req, res){
  process.exec('cd /web/dir && git pull origin master > ~/pull_log.txt');
  res.end('success');
});

var server = app.listen(3000, function(){
  console.log('代码同步服务启动，端口：3000');
});
```

服务器以后台运行的方式把该服务跑起来：node index.js &

可访问URL为:  http://url-address:3000/git/push ，将这个URL输入到WebHook设置的URL位置， git.oschina.net 同时还会要求输入一个密码用于防止恶意请求，我们自己的web服务可以根据些密码来确保访问来自于git.oschina.net.  服务端是可以忽略这个密码的。