Nginx的gzip压缩是关闭的， gzip压缩功能就是可以让你节省不少带宽，但是会增加服务器CPU的开销哦，Nginx默认只对text/html进行压缩 ，如果要对html之外的内容进行压缩传输，我们需要手动来调。

```
gzip on;

gzip_http_version 1.0;

gzip_disable "MSIE [1-6].";

gzip_types text/plain application/x-javascript text/css text/javascript application/javascript;

gzip_comp_level 3; （压缩级别，1压缩比最小处理速度最快，9压缩比最大但处理最慢，同时也最消耗CPU,一般设置为3就可以了）

gzip_types  可以在浏览器的response header 里看到 Content-Type
```
