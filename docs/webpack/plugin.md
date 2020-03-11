[](https://blog.csdn.net/a5534789/article/details/88627973)
Compiler可以理解为整个webpack生命周期都存在的编译[构建]对象，但是Compliation只代表着某一次的编译[构建]对象。  
compilation对象包含了当前的模块资源，编译生成资源，变化的文件等。在开发模式下，当检测到一个文件变化，就有一个compilation被创建。compilation对象也提供了很多回调供plugin进行扩展，也可以通过compilation获取到compiler对象。
```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  // 构造器参数，用于传递options
  constructor(options) {
    console.log("current plugin option is" + JSON.stringify(options))
  }
  // apply 方法是一个插件所必须的
  apply(compiler) {
    // compiler 继承自 tapable
    // tapable  提供了多种 hooks  https://github.com/webpack/tapable#hook-types
    // run      是 AsyncSeriesHook实例 [tapable提供的多种hooks的一种]
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin
```

webpck compiler源码
```javascript
class Compiler extends Tapable {
	constructor(context) {
		super();
		this.hooks = {
			/** @type {SyncBailHook<Compilation>} */
			shouldEmit: new SyncBailHook(["compilation"]),
			/** @type {AsyncSeriesHook<Stats>} */
			done: new AsyncSeriesHook(["stats"]),
			/** @type {AsyncSeriesHook<>} */
			additionalPass: new AsyncSeriesHook([]),
			/** @type {AsyncSeriesHook<Compiler>} */
			beforeRun: new AsyncSeriesHook(["compiler"]),
			/** @type {AsyncSeriesHook<Compiler>} */
			run: new AsyncSeriesHook(["compiler"]),
			/** @type {AsyncSeriesHook<Compilation>} */
			emit: new AsyncSeriesHook(["compilation"]),
			/** @type {AsyncSeriesHook<Compilation>} */
			afterEmit: new AsyncSeriesHook(["compilation"])
			//....
```
我们来编写一个插件，来记录最终打包生成的文件列表:
```javascript
class FileListPlugin {
  apply(compiler) {
    // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
    //第一个参数为事件名称，在 Webpack 中一般用于存储事件对应的插件名称（名字随意，只是起到注释作用）， 第二个参数为事件处理函数，函数参数为执行 call 方法触发事件时所传入的参数的形参。
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      // 在生成文件中，创建一个头部字符串：
      var filelist = 'In this build:\n\n';

      // 遍历所有编译过的资源文件，
      // 对于每个文件名称，都添加一行内容。
      for (var filename in compilation.assets) {
        filelist += '- ' + filename + '\n';
      }

      // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
      compilation.assets['filelist.md'] = {
        source: function() {
          return filelist;
        },
        size: function() {
          return filelist.length;
        }
      };

      callback();
    });
  }
}

module.exports = FileListPlugin;
```

上传文件
```javascript
class BuildUpload{
  apply(comiler){
    
    compiler.plugin('done', function(stats) {
    outputPath = compiler.outputPath;
    //directoryUpload(outputPath, _this.options.receiver, _this.options.toPath);
   });
  }
}
```