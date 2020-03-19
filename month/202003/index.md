### [NodeJS中被忽略的内存](https://www.jianshu.com/p/74a466789ff4)
- v8 引擎的垃圾回收机制
- 分代回收

### [tapable](./docs/webpack/tapable.md)
- 深入理解了tapable的原理，tapable其实就是一个发布订阅功能
- 手写一个发布订阅方法，最简单的方式是用class
- 如何不理解tapable就别想写好 webpackp plugins。

### [cross-spawn](https://www.npmjs.com/package/cross-spawn)
- A cross platform solution to node's spawn and spawnSync.
- 有必要看看node的spawn相关的知识

### tarball的下载和解压

### ssh Linux跳板机
- 理解了什么是跳板机
- 私钥和公钥


### [html-webpack-plugin用法全解](https://segmentfault.com/a/1190000007294861#articleHeader9)
- 文章通俗易懂，可以入门，具体还需要看官方文档
- 通过vue-cli-service inspect > out.js  
```javascript
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html-mix-detail') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'mix-detail'
        ],
        template: '/Users/liujianwei/Documents/company_code/yike-sell-app-vue/public/index.html',
        filename: 'mix-detail.html'
      }
    )

    config.plugin('html-auto-payment').tap('a',(...args){
      //修改
    })
```

### [深入解析webpack-dev-server的用法](https://www.jianshu.com/p/bbb55217d124)
webpack-dev-server是一个小型的Node.js Express服务器,它使用webpack-dev-middleware来服务于webpack的包,除此自外，它还有一个通过Sock.js来连接到服务器的微型运行时.
- 可以建一个文件夹，里面放置个index.html 指定contentbase就可以用webpack-dev-server启动一个http服务，访问index.html
这里需要做以下三点:
- 在webpack.config.js的entry选项中添加:webpack/hot/dev-server
- 在webpack.config.js的plugins选项中添加:new webpack.HotModuleReplacementPlugin()
- 在webpack-dev-server的配置中添加：hot:true

有一个疑问就是我们contentBase指定的静态资源路径下有一个index.html，并且打包出的结果页也有一个index.html，也就是两个文件路径访问的路径相同的话，会返回哪一个文件？    

　　结果就是会返回我们打包出的结果页面，静态资源的优先级是低于打包出的文件的。

### [socktIO](https://socket.io/get-started/chat/)
实现一个聊天室  client代码底层依赖了[websocket](https://www.runoob.com/html/html5-websocket.html)  

### [webpack-dev-server原理解析](https://www.cnblogs.com/longlongdan/p/12391740.html)
- 里面提到了sockjs在更新时候的作用和更新的流程图
- webpack-dev-server 依赖express启动了http服务，方便通过url方式访问
- hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
- 修改了CSS默认是可以进行热模块更新，支持比较好，但是修改了js，如果设置了hotOnly，修改了代码，不会刷新。如果设置了hot，会自动刷新页面
- 热模块更新，每个模块创建了一个moduleId，如果改变，会重新执行整个模块，不影响其他模块
```javascript
if(module.hot){
  module.hot.accept('./number.js',()=>{
    // 重新执行模块
  })
}
```

### [总结，积累，分享，传播JavaScript各模块核心知识点文章全集](https://github.com/liangklfangl/react-article-bucket)
很多源码分析


### webpack
- @babel/preset-env⾥里里包含了了es，6，7，8转es5的转换规则
- loader顺序从后往前，[style-loader,css-loader]
- presets使用什么样的规则做转换

### @babel/pollyfill
useBuiltIns 选项是 babel 7 的新功能，这个选项告诉 babel 如何配 置 @babel/polyfill 。 它有三个参数可以使⽤用: 
- entry: 需要在 webpack 的⼊入⼝口⽂文件⾥里里 import "@babel/polyfill" ⼀一次。 babel 会根据你的使⽤用情况导⼊入垫⽚片，没有使⽤用的功能不不会被导⼊入相应的垫⽚片。 
- usage: 不不需要 import ，全⾃自动检测，但是要安装@babel/polyfill 。(试验阶段) 
- false: 如果你 import "@babel/polyfill" ，它不不会排除掉没有使⽤用的垫⽚片，程序体积会庞 ⼤大。(不不推荐)

### @babel/plugin-transform-runtime
当我们开发的是组件库，⼯工具库这些场景的时候，polyfill就不不适合了了，因 为polyfill是注⼊入到全局变量量，window下的，会污染全局环境，所以推荐闭 包⽅方式:@babel/plugin-transform-runtime，它不不会造成全局污染
```bash
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```