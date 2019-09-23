### 方法分类
GET:Vue的原型方法和Vue的全局方法

### new Vue发生了什么
```javascript
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```
GET:所有传入的options会放到$options上面

### Vue中数据劫持
GET:访问`this.message`其实是通过数据劫持，真正放问的是`this._data.message`  
劫持的代码段
```javascript
//
export function proxy (target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}


```
调用的代码段
```javascript
// proxy data on instance
const keys = Object.keys(data)
const props = vm.$options.props
const methods = vm.$options.methods
//GET:下面for循环改成while写法很巧妙
let i = keys.length
while (i--) {
    const key = keys[i]
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          `Method "${key}" has already been defined as a data property.`,
          vm
        )
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    } else if (!isReserved(key)) {
      //这里做了劫持
      proxy(vm, `_data`, key)
    }
  }
```


### Runtime Only和Runtime + Compiler
- (Runtime Only和Runtime + Compiler)[http://nferzhuang.com/vue%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E5%87%86%E5%A4%87-runtime-only%E5%92%8Cruntime-compiler/]

- 先判断是否有template属性
- 如果没有，则直接通过el中的html代码作为模版
- 如果有，判断是否是字符串(非字符串的形式暂不讨论)
- 是字符串的情况下，是否以#字符开头
- 如果是，则获取对应id的innerHTML作为模版
- 如果不是以#字符开头，则直接作为作为模版