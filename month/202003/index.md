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