Consolas是一种专门为编程人员设计的字体，这一字体的特性是所有字母、数字与符号均能非常容易辨认，而且所有字符都具有相同的宽度，让编人员看着 更舒服。但我们用Consolas在显示程序源码时，不可避免要使用中文注释。而Consolas不支持中文，因此中文默认是使用宋体显示的。当使用10点大小的时候，中文就模糊不清了。如果采用斜体显示注释的话，宋体就更加显得支离破碎。

在中文显示上，雅黑字体确实不错，但雅黑不是等宽字体，不能用于源码显示。

使用字体工具将雅黑和Consolas集成在一起后，程序员就可以在Linux环境下的源码中看到优秀的中文显示效果。

具体方案：

先下载雅黑-Consolas混合字体压缩包，资源地址：

<a href="https://kanbox.com/f/280Z2" target="_blank">https://kanbox.com/f/280Z2</a>

假定下载到~/download/目录下，我们先在这里把压缩包解压，把解压后的字体的ttf文件复制到/usr/share/fonts/的任意目录下（我是Ubuntu 11.10下测试的）：

    sudo mkdir -p /usr/share/fonts/vista
    sudo cp YaHei.Consolas.1.12.ttf /usr/share/fonts/vista/

更改权限：

    sudo chmod 644 /usr/share/fonts/vista/*.ttf

安装字体：

    cd /usr/share/fonts/vista/
    sudo mkfontscale
    sudo mkfontdir
    sudo fc-cache -fv

之后我们就可以使用新安装的雅黑-Consolas混合字体字体了。

我习惯用Sublime Text编程，在Preferences-> Setting-User 中添加 "font_face": "YaHei Consolas Hybrid".