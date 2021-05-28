<!--
 * @Desc: 
 * @FilePath: /firewood/month/202010/README.md
 * @Author: liujianwei1
 * @Date: 2021-03-16 17:07:37
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
### [brew安装亲测有效](https://www.cnblogs.com/joyce33/p/13376752.html)
### [Charles破解地址](https://blog.csdn.net/xingchenxuanfeng/article/details/80855948)

### [使用 rollup 打包 JS](https://juejin.im/post/6844903731343933453)
- rollup-plugin-replace替换环境变量

### [JavaScript：关于数组的四道面试题](https://segmentfault.com/a/1190000021360830)
```javascript



Object.values
(
  Object.assign
  (
    ...arr.map((x) => {
     return  { [x.id]: x }
    })
  )
);
//arr.map(x => [x.id, x])
[...new Map(arr.map(x => [x.id, x])).values()]

let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]

```
### npm掘进小测读后管
- 02 创建运行npm 
  - 可以用下列命令修改默认配置
    ```bash
     npm config set init.author.email="liujianwei1213@163.com"
     npm config set init.author.name="rupid"
     npm config set init.author.url="http://github.com/rupid"
     npm config set init.version="1.0.0"
     npm config set init.licence="MIT"
    ```

   - npm run 其实是npm run-script命令的缩写  在shell中运行脚本
  - npm 在执行指定script之前会把node_modules/.bin加到环境变量$PATH的前面
- 03 npm script 运行
  - 串行：npm run build && npm run deploy
  - 并行：npm run build & npm run deploy & wait
    ```bash
     加上wait的好处是，如果我们的任何子进行长时间运行，比如moccha添加 --watch 配置，可以使用crtrl+c 来结束进程，如果没加，你就没办法直接结束后台的进程
    ```



### [webpack相关面试题](https://zhuanlan.zhihu.com/p/44438844)
### [20+Vue面试题整理](https://juejin.im/post/6844904084374290446)


### [Babel教程](https://www.jiangruitao.com/babel/)
- 讲解非常透彻
- [github源码](https://github.com/jruit/babel-tutorial)
- @babel/preset-env 语法转换的时候，会注入一些辅助函数
- @babel/runtime 存放的是Babel做语法转换的辅助函数
- 如果开启 @babel/plugin-transform-runtime 参数 core-js：3 则需要安装 @babel/runtime-corejs3 既包含Babel语法转换的辅助函数，又包含core-js 的API函数
- transform-runtime 来做api转换的目的是不污染全局变量

### https://mp.weixin.qq.com/s/hfztxp26YyMOSxiKF2i4eg?utm_source=wechat_session&utm_medium=social&utm_oi=706045932076040192