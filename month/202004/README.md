### [Parcel开箱即用](https://parceljs.org/getting_started.html)
开箱即用很方便

### [vue template compiler模版解析模块源码解析](https://blog.csdn.net/u014787301/article/details/85842963)
- vue解析的步骤，[HTMLparser](http://erik.eae.net/simplehtmlparser/)解析器

vue template compiler包含三个处理步骤，按顺序排列如下：
- parser：模版解释器，功能为从HTML模版转换为AST
- optimizer：AST优化，处理静态不参与重复渲染的模版片段，对比虚拟dom
- codegen：代码生成器。基于AST，生成js函数，延迟到运行时运行，生成纯HTML。

### [前端性能优化：细说浏览器渲染的重排与重绘](http://www.imooc.com/article/45936)
- 浏览器渲染HTML的步骤
- 什么是重排，重绘，以及之间关系

### [http缓存](https://mp.weixin.qq.com/s/vI2bxaFsFSB5rGC4Bkr8vQ)
- expires,响应头，绝对时间  200  from cache
- cache-control 响应头，相对时间 200  from cache
- Last-Modified(响应头)/If-Modified-Since(请求头)
- Etag(响应头)/If-None-Math(请求头)

### [Hybrid 应用中 H5 与 Native 通信的那点事儿](https://mp.weixin.qq.com/s/bq_i1KONEvmz5tZ2obKC5Q)
- 两种方式通信，一种都是挂载到window下面，另一种是 通过[jsBridge](https://github.com/lzyzsd/JsBridge)桥接，通过改变iframe src的值
- H5调用NA流程，NA监听iframe src的变化，做出相应。H5改变src的值，为什么会两次调用
- NA调用H5流程，通过注册监听方式
- [WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge)

### [docker安装redis，mysql，gitlab笔记和心得](../../docs/docker/README.md)
- grep 'linx' filename
- docker ps -a
- :n
- 理解了端口号映射和 本地数据映射的到底是什么
- 学会了看通过docker 的操作命令，来操作docker


### [前端监控和埋点](https://juejin.im/post/5e9052916fb9a03c9843284f?utm_source=gold_browser_extension)
- 当科普知识了解一下



### [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#%E7%A4%BA%E4%BE%8B)
- apply 拦截函数
- contrut 拦截构造函数
- get
- set
- deleteProty

### [基于 Vue.js 的移动端组件库](http://mint-ui.github.io/#!/zh-cn)
### [京东移动端组件库](http://nutui.jd.com/#/Button)
- 居中

### [实现双向绑定Proxy比defineproperty优劣如何](https://www.jianshu.com/p/2df6dcddb0d7)
- Dep 消息中心，发布订阅中心
- Observer添加监听 没一个值对应一个消息中心，new Dep，通过get的方式，添加一个Watcher实例
- Watcher new Watcher的时候调用了一个get，把自己添加到消息中心，当接到有更改的时候去更新视图 this.updater
- Compile 解析器
- 一张图

### [ES6中的Proxy、Reflect以及Vue3.0中的应用原理](https://blog.csdn.net/Creabine/article/details/87811207)
#### Object.defineProperty的劣势
- 只能监听对象的属性，如果对象复杂，需要深度遍历，耗费性能
- 不能监听数组的变化，是的Vue对数组做了一层hack处理
#### Proxy对于代理模式Proxy的作用主要体现在三个方面:
- 拦截和监视外部对对象的访问
- 降低函数或类的复杂度
- 在复杂操作前对操作进行校验或对所需资源进行管理

### [js 深克隆](https://blog.csdn.net/lyt_angularjs/article/details/86599820)
- 正则表达式  时间  函数
- 简单深克隆 JSON.stringify(obj)
- 浅克隆 Object.assign()

### [Object.create()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
### [Object.create()和new object()和{}的区别](https://www.cnblogs.com/leijee/p/7490822.html)
- 返回一个新对象，带着指定的原型对象和属性。不会影响上一个对象
- Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 Object.prototype 原型链上的属性或者方法,例如：toString(), hasOwnProperty()等方法
- 继承
```javascript
   function Shape(){
     this.x=1
     this.y=2;
   }
   Shap.prototype.log=()=>{
     console.log(this.x,this.y)
   }

   function React(){
     Shape.call(this)
   }
   React.prototype=Object.create(Shape.prototype)
   React.prototype.contructor=React
```

### [Dockerfile](https://www.cnblogs.com/boshen-hzb/p/6400272.html)
### [Dockerfile 语法](https://www.jianshu.com/p/5f4b1ade9dfc)
### [使用 docker 高效部署你的前端应用](https://mp.weixin.qq.com/s/ykyqb2clrYsWkCvR4k3KYA)
- 定制镜像的本质就是封装好一个包，让别人用
- 创建一个nginx包，在里面创建一个Dockerfile文件（没有扩展名），然后填写指令和参数，最后编译
``` bash
# 从哪里开始
FROM nginx:latest
RUN echo '<h2>Hello,Boy!</h2>' > /usr/shared/nginx/html/index.html
```
保存文件
```bash
// .：代表找当前目录下面的Dockerfile文件
// nginx:boy我所创建的镜像名称
docker build -t nginx:boy .
```
- CMD 是docker run之后执行的指令
```bash
#第一行必须指令基于的基础镜像
FROM ubutu

#维护者信息
MAINTAINER docker_user  docker_user@mail.com

#镜像的操作指令
RUN apt-get update && apt-get install -y ngnix 
RUN echo "\ndaemon off;">>/etc/ngnix/nignix.conf

#容器启动时执行指令
CMD /usr/sbin/ngnix
```
### [Docker Compose 配置文件详解](https://www.jianshu.com/p/2217cfed29d7)
### [Docker Compose 详解](https://www.jianshu.com/p/658911a8cff3)
- version
- services
- networks
- Docker Compose 将所管理的容器分为三层，分别是工程（project）、服务（service）、容器（container）
- Docker Compose 运行目录下的所有文件（docker-compose.yml）组成一个工程,一个工程包含多个服务，每个服务中定义了容器运行的镜像、参数、依赖，一个服务可包括多个容器实例

### [抖音视频](https://zhuanlan.zhihu.com/p/85262283)
最近想在抖音上开个介绍前端基础知识的东西

### [前端性能优化之WebP](https://www.jianshu.com/p/101b047c1146)
- 质量相同的情况下，体积更小
- 服务器通过user-agent判断是否返回webp格式的图片
- 浏览器判断是否支持webp然后处理图片
- webpjs
``` text
原图：http://imgcache.qq.com/club/client/card/rel/img/default.jpg

webp图：http://imgcache.qq.com/club/client/card/rel/img/default.jpg.webp
```
- 本司是在请求图片的url地址后面添加了webp参数
- 尝试从canvas中导出WebP格式的图片，观察是否能够正常导出
```javascript
function checkWebp() {
    try {
        return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    } catch (err) {
        return false;
    }
}
```


### [HTML5 <script> 标签里的 crossorigin 属性到底有什么用？](https://www.chrisyue.com/what-the-hell-is-crossorigin-attribute-in-html-script-tag.html)
```bash
当引入跨域的脚本（比如用了 apis.google.com 上的库文件）时，如果这个脚本有错误，因为浏览器的限制（根本原因是协议的规定），是拿不到错误信息的。当本地尝试使用 window.onerror 去记录脚本的错误时，跨域脚本的错误只会返回 Script error。  
  而 HTML5 新的规定，是可以允许本地获取到跨域脚本的错误信息的，但有两个条件：一是跨域脚本的服务器必须通过 Access-Control-Allow-Origin 头信息允许当前域名可以获取错误信息，二是网页里的 script 标签也必须指明 src 属性指定的地址是支持跨域的地址，也就是 crossorigin 属性
```
```bash
anonymous：如果使用这个值的话就会在请求中的header中的带上Origin属性，但请求不会带上cookie和其他的一些认证信息。
use-credentials：这个就同时会在跨域请求中带上cookie和其他的一些认证信息。
在使用这两个值时都需要server端在response的header中带上Access-Control-Allow-Credentials属性。
可以通过server的配置文件来开启这个属性：server开启Access-Control-Allow-Credentials
```

### [Head标签里面的dns-prefetch，preconnect，prefetch和prerender](https://segmentfault.com/a/1190000011065339)
### [head头部的一些配置信息](https://github.com/Amery2010/HEAD)
### [Google的结构化测试工具]()
- dns-prefetch 提前dns解析
- preconnect  提前进行TCP三次握手链接
- prefetch 提前获取资源，但不解析
- prerender 提前解析


### [正则表达式大全](https://github.com/any86/any-rule)

### [动态增减表单、表单验证](https://blog.csdn.net/Mr_EvanChen/article/details/83115954)
- 验证表单


### [客户端接收服务端消息推送sockjs-client的使用](https://blog.csdn.net/nongshuqiner/article/details/78792079)
### [在vue中使用SockJS实现webSocket通信](https://www.jianshu.com/p/b8aa70bf1340)
- sockjs-client 实时接收服务器推送的消息

### [Puppeteer-无头浏览器简介](https://zhuanlan.zhihu.com/p/40103840)
### [无头浏览器Puppeteer初探](https://zhuanlan.zhihu.com/p/30203613)
- 我们日常使用浏览器的步骤为：启动浏览器、打开一个网页、进行交互。而无头浏览器指的是我们使用脚本来执行以上过程的浏览器，能模拟真实的浏览器使用

```bash
111