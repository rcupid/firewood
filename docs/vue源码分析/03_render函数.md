
###  GET:render函数中的createElement 参数
- createElment dom节点
- 数据对象
- 子节点

### el参数不能用body，是因为在render的时候，会把整个<div id="app"></div>替换掉

### Vue中Proxy的使用
开发环境做数据劫持，提前感知参数是否定义等  
```javascript
const handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler
      vm._renderProxy = new Proxy(vm, handlers)
```

### Proxy
proxy 代理 Es6 增强 对象和函数（方法）  
 
Proxy用于修改某些操作的默认行为，即对编程语言层面进行修改，属于“元编程”，   
Proxy意思为“代理”，即在访问对象之前建立一道“拦截”，任何访问该对象的操作之  
前都会通过这道“拦截”，即执行Proxy里面定义的方法。     

#### 参考链接
- [博客园](https://www.cnblogs.com/Ananiah/p/11073690.html)
- [简书](https://www.jianshu.com/p/c2a1aa2e2b14)
