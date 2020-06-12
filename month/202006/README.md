### [Promise/async/Generator实现原理解析](https://mp.weixin.qq.com/s/_YxwV2umR7PH-R2ouCepSQ)
 - Promise解决了“回调地狱”的问题
 - Promise的`then`函数，是收集成功和失败的依赖
 - Promise构造函数接口了一个`executor(resolve,reject)`函数，函数的参数`resolve,reject`是触发成功依赖和失败依赖的`函数`
 - 其实熟悉设计模式的同学，很容易就能意识到这是个「观察者模式」，这种`收集依赖 -> 触发通知 -> 取出依赖执行` 的方式，被广泛运用于观察者模式的实现，在Promise里，执行顺序是`then收集依赖 -> 异步触发resolve -> resolve执行依赖`
 - then函数源码里面，返回的是Promise，所以才能链式调用，如果函数内部的业务逻辑返回promise，会等待这个promise执行完毕自己的resolve方法 在then里面拿到结果，继续往下走
 - promise 为什么resolveQueue是个数组，和then返回的内容没有关系，应该是考虑到下面这种情况，所以是一个数组
 ```javascript
 - Promise.resolve原理
 - Promise.all原理
 - async/await 是一种语法糖，是对Generator的封装 yield
 //test
const p1 = new MyPromise((resolve, reject) => {
  resolve(1)
})

//第一个
p1.then(() => {
  console.log(1);
})
//第二个
p1.then(() => {
  console.log(2);
})
//第三个
p1.then(() => {
  console.log(3);
})
 ```

- [MyPromise](../../__test__/promise.js)
- Promise A+规范 核心原则 
- then里面返回Promise


### [uniapp基础设置相关的东西]()
- 运行 运行设置 里面很多东西，看看 里面有调用小程序客户端的配置
- 运行后 在生成一个`unpackage`文件夹,里面生成的文件 可以找到微信小程序的包
- mainifest.json 里面微信小程序的配置
- uni.scss 不需要在个别文件导入，就可以用的，全局的
- page.json 里面的subPackages拆包
- page.json 里面condition 直接定位到某个页面


### [regex.exec和String.prototype.match的区别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- str.match方法，只是提取出结果，返回数组
- regex.exec 找到所有的需要 ，设置g，并且while循环 返回数组，有result.inex
```javascript
const regex1 = new RegExp('foo*', 'g');
const str1 = 'table football, foosball';
// let array1 = regex1.exec(str1)
// while (array1 !== null) {
//   console.log("#############");
//   console.log(array1);
//   console.log(`lastIndex=${regex1.lastIndex}`);
//   console.dir(regex1);
//   console.log(`str1=${str1}`);
//   array1 = regex1.exec(str1)
// }
// // console.log(regex1.exec(str1));
// console.log('**************');
// console.log(str1.match(regex1));

function indexOf (str, searchStr, fromIndex) {
  const regex1 = new RegExp(`${searchStr}`, 'ig')
  regex1.lastIndex = fromIndex
  let result = regex1.exec(str)
  console.log(result);
  return result ? result.index : -1;
}

console.log(indexOf(str1, 'foo', 0));
```

### [Vue 和 React 对于组件的更新粒度有什么区别？]()https://mp.weixin.qq.com/s/nu7rAL-v68YNzINLj_WIwg
- Vue 只更新本组件，不会触发子组件更新
- React 通过Filber 异步更新所有的子组件

### [对数](https://baike.baidu.com/item/%E5%AF%B9%E6%95%B0/91326)
### [算法复杂度中的O(logN)底数是什么？](https://blog.csdn.net/FeiPeng_/article/details/81030981)
### [谈谈堆排序，大顶堆，小顶堆](https://www.jianshu.com/p/15a29c0ace73)
- 如果a的x次方等于N（a>0，且a不等于1），那么数x叫做以a为底N的对数（logarithm），记作x=logaN。其中，a叫做对数的底数，N叫做真数。
- 算法中log级别的时间复杂度都是由于使用了`分治思想`,这个底数直接由`分治`的复杂度决定。!
- 堆，数组，二叉树的区别

### [哈希表](https://www.cnblogs.com/s-b-b/p/6208565.html)
- 哈希函数
- 哈希定义
- 哈希冲突
- 冲突解决方法
  - 扩容
  - 链地址法


### [Nest](https://www.itying.com/goods-1035.html)  
### [vue后台项目中遇到的技术难点以及解决方案](https://mp.weixin.qq.com/s/mNbT89qJGoc3wIM8gaUysA)


### [啊哈！算法](https://www.cnblogs.com/ahalei/category/554795.html)
### [NPM 如何管理依赖包版本](https://mp.weixin.qq.com/s/dg3aUlZE1qplMBiFU377zA)