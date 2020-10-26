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