本文同步更新到掘金：https://juejin.cn/post/6964642182183518215/

网站响应速度是用户体验的第一要素，其重要性不言而喻。响应速度受很多因素影响，比如不同的业务场景，不同的用户终端，不同的技术栈。

为了获得更快的响应速度，一方面期望每次请求页面资源时，获得的都是最新的资源；另一方面期望在资源没有发生变化时，能够复用缓存以此来提高页面加载速度。

使用文件名+文件哈希值 的方式，就可以实现只要通过文件名，就可以区分资源是否有更新。

而webpack就内置了hash计算方法，对生成文件的可以在输出文件中添加hash字段

先了解一下 webpack中hash、chunkhash、contenthash区别
## webpack中hash、chunkhash、contenthash区别

### hash
每次构建会生成一个hash。和整个项目有关，只要有项目文件更改，就会改变hash。

一般来说，没有什么机会直接使用hash。hash会更据每次工程的内容进行计算，很容易造成不必要的hash变更，不利于版本管理

### chunkhash
和webpack打包生成的chunk相关。每一个entry，都会有不同的hash。

但是同一个模块，就算将js和css分离，其哈希值也是相同的，修改一处，js和css哈希值都会变，同hash，没有做到缓存意义。比如，只改变了css，没有修改js内容，chunkhash也会变化。

### contenthash
和单个文件的内容相关。指定文件的内容发生改变，就会改变hash。

对于css文件来说，一般会使用`MiniCssExtractPlugin`将其抽取为一个单独的css文件。可以使用contenthash进行标记，确保css文件内容变化时，可以更新hash，同时不会影响到js的hash

## file-splitting
接下来我们会介绍一下，最优的文件拆分(file-splitting)方法来提高页面响应速度。
[Webpack词汇表](https://webpack.js.org/glossary/)介绍了两种不同的文件分割方式：
- Bundle splitting:为了更好的缓存，可以将一个大文件分割成更多，更小的文件
- Code splitting：按需加载，比如SPA项目的页面懒加载。`Code splitting`看起来更具有吸引力。实际上，很多文章都把`Code splitting`这种方式，看做是减少js文件大小，提高页面响应速度的最好的方式。

但是，`Bundle splitting`比`Code splitting`更值得去做。

### Bundle splitting
`Bundle splitting`背后的原理非常简单。假如把整个项目打包成一个比较大的文件`main.[contenthash].js`，当有代码改动的时候，`contenthash`的值就会变化，此时，用户需要再次重新加载最新的`main.[new contenthash].js`的。

但是，如果你分成两个文件，内容有变化的文件`contenthash`会改变，用户需要重新加载，但是另外一个文件，所依赖的文件内容没有发生更新，contenthash不会变化，浏览器会从缓存中加载。

为了更形象的描述问题，我们创造一个场景，收集性能数据，进行对比：
- 小明同学每周都访问一次我们的网站，持续了10个星期
- 我们每周给网站增加一个新功能
- 每周更新一次 "产品列表页面"
- "产品详情页" 一直没需求，不会变动
- 第五周，我们新增了一个npm包
- 第9周，我们升级了一个已有的npm包

### 首先
我们打包后的JavaScript文件大小为`400KB`，并且全部内容打包到一个`dist/js/main.ab586865.js`文件中。

webpack配置内容如下(未展示不相关的内容)：
```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  }
};
```
当代码内容有变化的时候，会产生不同的`contenthash`值，用户访问的时候，需要加载最新的main.js文件。

当每周更新一次网站的时候，`contenthash`都会变化一次，所以每周用户都要重新下载`400KB`的文件。  

![1.png](http://ttc-tal.oss-cn-beijing.aliyuncs.com/1621577436/1.png)

第10个星期后，文件大小已经变成了4.12MB。

下面利用webpack4的splitChunk特性将包分拆成两个文件---`main.js`和`vendor.js`

#### 提取vendor包

配置内容如下：
```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
};
```

增加的`optimization.splitChunks.chunks = 'all'`,会把引用的第三方模块(`node_modules`)全部打包到`vendor.js`。

通过这种方式，每次修改业务代码(不新增或也不更新npm)的时候,只有`main.js`的`contenthash`会变化。导致，用户每次访问，都需要重新加载最新的`main.js`文件。

在没有新增或更新`node_modules`的npm包的情况下，`vendor.js`的`contenthash`是不会变化的。浏览器会通过缓存加载。  

![2.png](http://ttc-tal.oss-cn-beijing.aliyuncs.com/1621579208/2.png)  

从图中可以看到，每次用户只需要加载200KB的`main.js`就。第五周之前，vendor.js都是没有变化的，浏览器会通过缓存加载。  

#### 拆分npm包
`vendors.js`同样会遇到与`main.js`文件相同的问题，对其一部分进行更改意味着重新下载整个`vendor.js`。

那么，为什么不把每个npm包单独输出成一个文件呢？

因此，将`vue`，`vuex`，`vue-route`，`core-js`分拆到不同的文件里面,会是一个不错的选择。

配置如下：
```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            //获取每个npm包的名称
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

           //对npm的包名子添加前缀，并去掉@
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  }
}
```
`
一个vue-cli初始化的项目打包结果：
```bash
  dist/npm.vue.44c71c1a.js           
  dist/npm.vue-router.0290a1da.js   
  dist/npm.core-js.028dc51e.js       
  dist/npm.vuex.6946f3d5.js          
  dist/app.e76cff0a.js               
  dist/runtime.4e174d8a.js          
  dist/npm.vue-loader.611518c6.js    
  dist/about.16c4e81c.js             
  dist/npm.webpack.034f3d3d.js      
  dist/css/app.ab586865.css  
```      
如果对[Webpck的splitChunks](https://www.webpackjs.com/plugins/split-chunks-plugin/)不了解，可以看一下《[一步一步的了解webpack4的splitChunk插件](https://www.jb51.net/article/147552.htm)》，这篇文章浅显易懂。但是文章中提高的splitChunks的默认配置，不一定适合真实的业务场景。

下面重点介绍一下`cacheGroups`

`cacheGroups`是`splitChunks`里面最核心的配置。`splitChunks`根据`cacheGroups`拆分模块，之前说的`chunks`以及其他属性都是对缓存组进行配置的。`splitChunks`默认有两个缓存组，vendor-加载内容来源`node_modules`，另一个是default。

`name`:`string:Function`  取值代表的是分隔出来的chunk名称。上面配置中，name的值是一个`Function`，每个被解析的文件都会调用该函数，单独导出对应的名称。例如`vue-router`导出文件为`dist/npm.vue-router.0290a1da.js `


![3.png](http://ttc-tal.oss-cn-beijing.aliyuncs.com/1621579814/3.png)
上图展示了，配置输出的模拟结果，每个npm包都会被单独输出，这种情况下，如果更新了其中一个npm包，那么不会影响到其他npm包的缓存。

到这里，可能有人会有如下三个疑问：
#### 问题1：文件变多了，网络请求会变慢吗？
答案是：NO!，不会变慢。  如果没有上百个文件，在使用`HTTP/2`的情况下，完全不用关心这个问题。不相信可以看一下两篇文章的数据分析结果：
- [The Right Way to Bundle Your Assets for Faster Sites over HTTP/2](https://medium.com/@asyncmax/the-right-way-to-bundle-your-assets-for-faster-sites-over-http-2-437c37efe3ff)
- [Forgo JS packaging? Not so fast](https://blog.khanacademy.org/forgo-js-packaging-not-so-fast/)


#### 问题2：每个输出文件是否存在Webpack的辅助代码 ( overhead/boilerplate code )
答案：会有

#### 问题3：是否影响文件压缩
答案：不会。

### 总结
拆分的越小，文件越多，可能会有更多Webpack的辅助代码，也会带来更少的合并压缩。但是，通过数据分析，文件拆分越多，性能会更好（可能这个结果很难说服你，但是确实是这样的）

## Code splitting
按需加载，通过Webpack4的`import()`语法，实现它已经变得很容易了。

另外如何配置Babel也很重要,这里不展开，后续会新开一个系列详细介绍如何配置Babel


## Vue-cli创建的项目如何做Bundle splitting
通过运行`npx vue inspect `可以看到项目[默认的Webpack配置](https://github.com/rupid/tutor-webpack-split-/blob/master/webpack.config.default.js)，这里我们截取`output`和`optimization`部分：
```javascript
output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
},
optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  }
```
vue-cli的项目默认有两个缓存分组(cacheGroups)。

接下来我们在项目根目录下面创建`vue.config.js`文件。添加如下配置，覆盖默认配置：
```javascript
module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              // https://docs.npmjs.com/cli/v7/configuring-npm/package-json
              // npm包名满足URL-safe
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      }
    }
  }
}
```

然后运行`npm run build`查看输出结果
```bash
$ vue-cli-service build

Building for production...


  File                                 Size   

  dist/js/chunk-vendors.bbe8cb82.js    132.82 KiB        
  dist/js/app.7cebea8f.js              4.18 KiB       
  dist/js/runtime.9ab490a2.js          2.31 KiB    
  dist/js/about.8c7b0bba.js            0.44 KiB        
  dist/css/app.ab586865.css            0.42 KiB   
```
## 最后
由于本人语言能力有限，可能你读完之后还是有很多疑惑，建议看一下 下面提供的参考链接，进一步加深印象。


## 参考链接
- [The 100% correct way to split your chunks with Webpack](https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)
- [一步一步的了解webpack4的splitChunk插件](https://www.jb51.net/article/147552.htm)
- [Webpack之SplitChunks插件用法详解](https://zhuanlan.zhihu.com/p/152097785)
- [webpack中hash、chunkhash、contenthash区别](https://www.cnblogs.com/giggle/p/9583940.html)

