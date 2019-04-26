### 总结

使用@babel/preset-env@7.4 然后再设置.babelrc

```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "modules": false,
        "debug": true,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }
    ]
  ]
}

```

可以解决

- 新的 Javascript 语法
- 新的 API Promise，Symbol，Iterator，Set,Map 等
- 全局对象上的方法（比如 Object.assign ）

## 下面内容是之前老的技术的讲解，可以大概了解一下

- babel-loader: 负责 es6 语法转化
- babel-preset-env: 包含 es6、7 等版本的语法转化规则
- babel-polyfill: es6 内置方法和函数转化垫片
- babel-plugin-transform-runtime: 避免 polyfill 污染全局变量
  需要注意的是, babel-loader 和 babel-polyfill。前者负责语法转化，比如：箭头函数；后者负责内置方法和函数，比如：new Set()。

### babel

- 只转换新的 javascript 语法，比如箭头函数,const,数组解构等
- 不能转换新的 API，比如 Promise，Symbol，Iterator，Set,Map 等,以及一些定义在全局对象上的方法（比如 Object.assign ）都不会转码
- 帮助函数仅仅在当前模块中生效，因此其他模块中如果用到了同样的语法，编译后就会出现大量的重复代码。

```javascript
const key = 'babel'
const obj = {
  [key]: 'foo'
}
```

Babel 默认会编译成下面的代码

```javascript
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

var key = 'babel'
var obj = _defineProperty({}, key, Object.assign({}, { key: 'foo' }))
```

我们可以看到代码中多了一个名为\_defineProperty 的帮助函数，但是这个帮助函数仅仅在当前模块中生效，因此其他模块中如果用到了同样的语法，编译后就会出现大量的重复代码。

### babel-runtime

为了不污染全局对象和内置的对象原型，但是又想体验使用新鲜语法的快感。就可以配合使用 babel-runtime 和 babel-plugin-transform-runtime。
比如当前运行环境不支持 promise，可以通过引入 babel-runtime/core-js/promise 来获取 promise，
或者通过 babel-plugin-transform-runtime 自动重写你的 promise。也许有人会奇怪，为什么会有两个 runtime 插件，其实是有历史原因的：刚开始开始只有 babel-runtime 插件，但是用起来很不方便，在代码中直接引入 helper 函数，意味着不能共享，造成最终打包出来的文件里有很多重复的 helper 代码。所以，Babel 又开发了 babel-plugin-transform-runtime，这个模块会将我们的代码重写，如将 Promise 重写成\_Promise（只是打比方），然后引入\_Promise helper 函数。这样就避免了重复打包代码和手动引入模块的痛苦。

> 启用插件 babel-plugin-transform-runtime 后，Babel 就会使用 babel-runtime 下的工具函数，转译代码如下：

```javascript
'use strict'

var _defineProperty2 = require('babel-runtime/helpers/defineProperty')

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var key = 'babel'
var obj = (0, _defineProperty3.default)({}, key, 'foo')
```

#### babel-runtime 不足

babel-runtime 不能转码实例方法，比如这样的代码：

```javascript
'!!!'.repeat(3)
'hello'.includes('h')
```

这只能通过 babel-polyfill 来转码，因为 babel-polyfill 是直接在原型链上增加方法。

### babel-polyfill

原理是当运行环境中并没有实现的一些方法，babel-polyfill 会给其做兼容。 但是这样做也有一个缺点，就是会污染全局变量，而且项目打包以后体积会增大很多，因为把整个依赖包也搭了进去。所以并不推荐在一些方法类库中去使用。

### 相关链接

[babel-polyfill VS babel-runtime](https://juejin.im/post/5a96859a6fb9a063523e2591)
