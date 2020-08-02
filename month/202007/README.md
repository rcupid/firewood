### [Vue 3.0文档](https://vue-composition-api-rfc.netlify.app/zh/#%E6%A6%82%E8%BF%B0)
### [When To Use The New Vue Composition API (And When Not To)](https://vuejsdevelopers.com/2020/02/17/vue-composition-api-when-to-use?utm_source=twitter-vjd&utm_medium=post&utm_campaign=m5a)
- Vue 3.0文档


### [Git中submodule的使用](https://zhuanlan.zhihu.com/p/87053283)


### [awsome-nodejs](https://github.com/sindresorhus/awesome-nodejs)
- 里面很多比较齐全的包

### [用Lerna管理多包JS项目](https://zhuanlan.zhihu.com/p/33858131)
### [使用lerna优雅地管理多个package](https://zhuanlan.zhihu.com/p/35237759)
### [lerna官方文档](https://github.com/lerna/lerna)
## [ts+lerna](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)

### [Rollup 笔记](https://blog.csdn.net/kw023781/article/details/107306699)
### [Rollup 插件](https://blog.csdn.net/mjzhang1993/article/details/78502168)
### [JS打包工具rollup——完全入门指南](https://blog.csdn.net/ztnhnr/article/details/88390807)
### [Rollup实战笔记](https://chenshenhai.github.io/rollupjs-note/note/chapter02/01.html)


### [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/tsconfig.json)
### [jest (ts-jest) 如何写ts测试](https://riptutorial.com/typescript/example/29207/jest--ts-jest-)

### [前端工程师必备的TS知识点，不来看看？](https://mp.weixin.qq.com/s/Uh9TUkRwnOgk8c1hCirgXA)
- 泛型
- 接口
- type用法

### [如何让异步接口同时支持 callback 和 promise](https://mp.weixin.qq.com/s/A3I_dfiJOW3Eu1F6RdIZLw)
- callback 转成promise
- promise转成callback

### [前端算法入门](https://mp.weixin.qq.com/s/Ng1bqnmlotAz92OJhTbkjA)
- 讲解了一些概念

### [很全很全的JavaScript的模块讲解](https://segmentfault.com/a/1190000012464333?_ea=3022967)
### [JavaScript模块化CommonJS/AMD/CMD/UMD/ES6Module的区别](https://www.cnblogs.com/weiqinl/p/9940549.html#umd--webpack)
- amd – 异步模块定义，用于像RequireJS这样的模块加载器
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
- iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
- umd – 通用模块定义，以amd，cjs 和 iife 为一体
- system - SystemJS 加载器格式
```javascript
// 使用Node, AMD 或 browser globals 模式创建模块
(function (root, factory) {
if (typeof define === 'function' && define.amd) {
// AMD模式. 注册为一个匿名函数
define(['b'], factory);
} else if (typeof module === 'object' && module.exports) {
// Node等类CommonJS的环境
module.exports = factory(require('b'));
} else {
// 浏览器全局变量 (root is window)
root.returnExports = factory(root.b);
}
}(typeof self !== 'undefined' ? self : this, function (b) {
// 以某种方式使用 b

//返回一个值来定义模块导出。(即可以返回对象，也可以返回函数)
return {};
}));
```

### [自定义Eslint规则](https://mp.weixin.qq.com/s/8QXQtF_aUV30OfRs0pKGBg)
- espree 生成抽象语法树
- astexplorer


### [Vue Diff算法](https://www.cnblogs.com/wind-lanyan/p/9061684.html)
- vnode表示方法
- diff的流程图
- patch(oldNode,node)
- updateChild()

### [防抖和节流](https://mp.weixin.qq.com/s/IvWGkm5pn3vjbLUB-SvXkQ)
- 防抖 在setTimeout外面删除
- 节流 在setTimeout 里面删除

### [Docker不香吗，为啥还要K8s？](https://mp.weixin.qq.com/s/i_s-gUF53MGIEaLx_EWY3A)
- 科普读物，讲解了常用术语


### [如何修改 node_modules 里的文件](https://mp.weixin.qq.com/s/tjbgWCsRLXfoIQ7gPpTaEQ)
- 利用webpack的alias 拦截个别文件路径

### [babel原理](https://mp.weixin.qq.com/s/AFnAgHu5czxngeHypFLNAw)
- loader本质
- 解析(@babel/parser) 转换(@babel/travel) 生成(@babel/generate)

### [腾讯十大开源项目出炉！](https://mp.weixin.qq.com/s/p971kAZMwmP2r66EwMi_qA)
- 小程序组件化开发框架 wepy
- 轻量级高性能的 Hybrid 框架 VasSonic