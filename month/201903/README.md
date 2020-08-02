#### 2019 年 3 月 29 日

[全面分析前端的网络请求方式](https://juejin.im/post/5c9ac607f265da6103588b31)
[前端开发必备的 nginx 知识](https://juejin.im/post/5c85a64d6fb9a04a0e2e038c)
[DOM 操作](https://www.w3cplus.com/javascript/DOM-manipulation-tutorial-series.html)

#### get

HTTP 状态码分类

- 1\*\* :信息，服务端接到请求，需要请求者继续执行操作
- 2\*\* ：成功，操作被成功接收并处理
- 3\*\* :重定向，需要进一步的操作完成请求
- 4\*\* :客户端错误，请求包含语法错误或无法完成请求
- 5\*\* :服务端错误，服务端在处理请求的时候发生了错误

XML 请求

```javascript
var xhr = new XMLHttpRequest()
xhr.open('post', url, true)
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlendcoded')
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    //xhr.status
  }
}
xhr.onerror = () => {}
xhr.onprogress = () => {}
xhr.onload = () => {}

xhr.send(data)
```

正向代理：对客户端透明，指定服务器  
反向代理：对服务端透明

#### 2019 年 3 月 27 日

[event loop](https://segmentfault.com/a/1190000014940904)  
[链式编程](https://juejin.im/post/5c8f30606fb9a070ef60996d?utm_source=gold_browser_extension)

```javascript
//js [n,m]的随机数
Math.ceil() //向上取整。
Math.floor() //向下取整。
Math.round() //四舍五入。
Math.random() //0.0 ~ 1.0 之间的一个伪随机数。【包含0不包含1】 //比如0.8647578968666494
Math.ceil(Math.random() * 10) // 获取从1到10的随机整数 ，取0的概率极小。
Math.round(Math.random()) //可均衡获取0到1的随机整数。
Math.floor(Math.random() * 10) //可均衡获取0到9的随机整数。
Math.round(Math.random() * 10) //基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半。

Math.floor(Math.random() * (max - min + 1) + min)
```

#### 2019 年 3 月 26 日

[如何编写一个 webpack 插件](https://www.html.cn/doc/webpack2/development/how-to-write-a-plugin/)

#### 2019 年 3 月 21 日

##### get

###### @babel/preset-env

####### 特性

> 替换之前所有 `babel-presets-es20xx` 插件
>
> > 也就是说，这是一个能根据运行环境为代码做相应的编译，`@babel/preset-env` 的推出是为了解解决个性化输出目标代码的问题，通过 `browserslist` 语法解析需要支持的目标环境，根据环境将源代码转义到目标代码，可以实现代码精准适配。

##### 相关链接

- [.browserslist](https://github.com/browserslist/browserslist)
- [@babel/preset-env]()
- [@babel/polyfill]()
- [关于 Babel 你只需要知道三个插件](https://www.jianshu.com/p/0dc3bddb6da8?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
  [babel-polyfill VS babel-runtime](https://juejin.im/post/5a96859a6fb9a063523e2591)

#### 2019 年 3 月 20 日

##### get

```javascript
path.join([...paths])
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
```

> path.join 方法,可以传入多个参数,真正使用的时候封装一个方法,充分利用 apply 方法[多个参数和 apply 方法之间的联系]

```javascript
let arr = [1, 3, 4]
function join(...args) {
  path.join.apply(path, arr.concat(args))
}

Math.max.apply(null, [14, 3, 77]) // ES5 的写法
Math.max(...[14, 3, 77]) // ES6 的写法
Math.max(14, 3, 77) // 等同于
```

##### 面试题

```javascript
let number = 9
let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6, 7]
//求两个数组中最大的值
// 第一种
Math.max.apply(null, [number].concat(arr1).concat(arr2))
//第二种
Math.max(...[number].concat(arr1).concat(arr2))

console.log(path.join('/foo', 'bar')) //    \foo\bar
console.log(path.join('/foo', './bar')) //  \foo\bar
console.log(path.join('/foo', './bar', 'zuoye/bang', 'zhu', '../')) // foo\bar\zuoye\bang\
```

#### 2019 年 3 月 19 日

##### get

多页面构建的时候 `html-webpack-plugin` 和 `entry` 对应入口关联，是通过 `html-webpack-plugin` 的 `chunks`属性关联

```javascript
function getHtmlPlugin() {
  // glob.sync 搜索文件
  let entryHtmlList = glob.sync(`${PAGE_BASE_DIR}/*/*.html`)
  let plugins = []

  entryHtmlList.forEach(item => {
    let filename = path.basename(item, '.html')
    //chunks 里面的filename 是entry的入口 名称
    const chunks = [`runtime~${filename}`, filename]
    plugins.push(
      new HtmlWebpackPlugin({
        template: item,
        filename: `${filename}.html`,
        chunks,
        inject: true
      })
    )
  })
  return plugins
}
```

#### 2019 年 3 月 7 日

##### get

diapatch 和 broadcast 在 vue1.0 中和 element-ui 的实现方式的差异，

> - diapatch 的差异：
>
>   > 1.vue1.0 中只有一个参数 event,其他参数是通过 argument 获取,element-ui 实现的版本会接受三个参数，分别是：需要触发事件的组件名称、将要触发的事件名称、回调函数传递的参数；
>   > 2.vue1.0 的 dispatch 会一直沿着父组件链网上触发，一直到没有返回 true，elemnt-ui 的 dispatch 会一直找到相同的组件名称 this.\$options.componentName 结束 利用了 while
>
> - broadcast 的差异：
>   > 1.  broadcast vue1.0 中只有一个参数而,element-ui 实现的版本会接受三个参数，分别是：需要触发事件的组件名称、将要触发的事件名称、回调函数传递的参数；
>   >     2.Vue 实现的 \$broadcast 触发方式是默认只触发子代组件，不触发孙子代组件，如果子代创建了监听且返回了 true，才会向孙子代组件传递事件。而 element-ui 实现的版本是直接向所有子孙后代组件传递，直至获取到的子组件名称等于传入的组件名称相等，才会触发当前子组件的监听事件，期间也没有返回值的判定。

> 没有解决兄弟组件之间的通信问题，如果组件变过，变得很脆弱

##### 相关链接

[Vue 中$disptch 和$broadcast 详解](https://juejin.im/post/5c7fd345f265da2da771f4cd?utm_source=gold_browser_extension)

#### 2019 年 2 月 20 日 10:08:01

##### get

> - 数组去重 掌握 4 中方法。基本的 Set+Array.from，indexOf+filter，indexOf+forEach，reduce
> - 数组中对象去重的方法 。比较对象的 key 值,Obejct.keys(obj) 循环对象，也可以 for···of···方式
> - 排序 冒泡排序，选择排序，插值排序。选择排序的原理和插值排序的原理
> - 利用 reduce 实现数组的求和，二维数组转化为一维数组，每个元素出现的次数

##### 相关链接

- [数组的去重和排序](https://juejin.im/post/5c6b8db56fb9a049b41d083e)
- [数组的去重](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [数组里所有值的和](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [将二维数组转化为一维](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [计算数组中每个元素出现的次数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
