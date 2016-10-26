### META相关

#### 1.添加到主屏后的标题（IOS）

```
<meta name="apple-mobile-web-app-title" content="标题">
```

#### 2.百度禁止转码

通过百度手机打开网页时，百度可能会对你的网页进行转码，往你页面贴上它的广告，非常之恶心。不过我们可以通过这个meta标签来禁止它：

```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

#### 3.移动端手机号码识别（IOS）

禁止识别

```
<meta name="format-detection" content="telephone=no" />
```

开启电话功能

```
<a href="tel:123456">123456</a>
```

开启短信功能：

```
<a href="sms:123456">123456</a>
```

#### 4.移动端邮箱识别（Android）

禁止识别

```
<meta content="email=no" name="format-detection" />
```
同样地，我们也可以通过标签属性来开启长按邮箱地址弹出邮件发送的功能

```
<a mailto:t_fate@163.com">t_fate@163.com</a>
```

#### 5.优先使用最新版本 IE 和 Chrome

```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```


### 常见问题

#### 1.移动端如何定义字体font-family

三大手机系统的字体：

**ios 系统**

```
默认中文字体是Heiti SC
默认英文字体是Helvetica
默认数字字体是HelveticaNeue
无微软雅黑字体
```

**android 系统**

```
默认中文字体是Droidsansfallback
默认英文和数字字体是Droid Sans
无微软雅黑字体
```

**winphone 系统**

```
默认中文字体是Dengxian(方正等线体)
默认英文和数字字体是Segoe
无微软雅黑字体
```

各个手机系统有自己的默认字体，且都不支持微软雅黑
如无特殊需求，手机端无需定义中文字体，使用系统默认
英文字体和数字字体可使用 Helvetica ，三种系统都支持

#### 2.ios系统中元素被触摸时产生的半透明灰色遮罩怎么去掉

```
a,button,input,textarea{-webkit-tap-highlight-color: rgba(0,0,0,0)}
```

#### 3.winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉

```
<meta name="msapplication-tap-highlight" content="no">
```

#### 4.webkit表单元素的默认外观怎么重置

```
.css{-webkit-appearance:none;}
```

#### 5.关闭iOS键盘首字母自动大写

```
<input type="text" autocapitalize="off" />
```

#### 6.关闭iOS输入自动修正

```
<input type="text" autocorrect="off" />
```

#### 7.快速回弹滚动

```
.xxx {
  overflow: auto; /* auto | scroll */
  -webkit-overflow-scrolling: touch;
}
```


#### 8.如何禁止保存或拷贝图像（IOS）

通常当你在手机或者pad上长按图像 img ，会弹出选项 存储图像 或者 拷贝图像，如果你不想让用户这么操作，那么你可以通过以下方法来禁止

```
img { -webkit-touch-callout: none; }
```


#### 9.屏幕旋转的事件和样式

window.orientation，取值：正负90表示横屏模式、0和180表现为竖屏模式；

```
window.onorientationchange = function(){
  switch(window.orientation){
    case -90:
    case 90:
    alert("横屏:" + window.orientation);
    case 0:
    case 180:
    alert("竖屏:" + window.orientation);
    break;
  }
}
```

```
//竖屏时使用的样式
@media all and (orientation:portrait) {
  .css{}
}

//横屏时使用的样式
@media all and (orientation:landscape) {
  .css{}
}
```

#### 10.手机拍照和上传图片

`<input type="file">`的accept 属性

```
<!-- 选择照片 -->
<input type=file accept="image/*">
<!-- 选择视频 -->
<input type=file accept="video/*">
```

#### 11.开启硬件加速

```
.css {
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}
```

设计高性能CSS3动画的几个要素

```
尽可能地使用合成属性transform和opacity来设计CSS3动画，
不使用position的left和top来定位
利用translate3D开启GPU加速
```
