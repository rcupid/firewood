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