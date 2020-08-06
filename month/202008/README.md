### [究竟什么是迭代？](https://www.jianshu.com/p/1a0b810e0a8b)
### [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
- 迭代 是重复 改进 认知升级的去做某一件事情
- Array，Map，Set，都是iterable类型，就是可迭代类型，换言之就是可以循环重复去做，用for of
- Array 是一个数组对象，Set是一个构造函数，内容不能相同，Map更类似一个键值对对象，只是key类型不受限
- Set 转 Array [...new Set([1,2,34,2])]  或者Array.from(...new Set([1,2,34,2]))
- Array 转Set new Set([1,3,3])


### [前端算法入门](https://mp.weixin.qq.com/s/Ng1bqnmlotAz92OJhTbkjA)
- LRUCahe 构造函数思想 抽象确定构造函数功能 和方法
- Map 会根据插入顺序自动排序
```javascript
//浏览器环境下
    const obj = Object.create(null)

    obj["b"] = 1
    obj["a"] = 2
    console.log(obj);
    //{a: 2,b: 1}
    console.log(Object.keys(obj));//[b, a]


    const map = new Map()
    map.set('b', 5)
    map.set('a', 4)
    console.log(map);
    console.log(map.keys().next().value);
```

### [Vscode](https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html)
### 快捷键
- 每行前面双击，选中行
- 挪动代码块


### [开课吧高频面试题](http://t.kuick.cn/Rhmz)
### [开课吧高频面试题](http://deal.kaikeba.com/link/a9d818d3-1c20-4117-9254-6d7df9caaa15?share_token=u0Hm0qwV&utm_source=%E8%B5%84%E6%96%99%E9%93%BE%E6%8E%A5%E5%85%A5%E5%BA%93&utm_medium=%E5%BE%AE%E4%BF%A1&utm_content=2020Web%E5%89%8D%E7%AB%AF%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E9%A2%98%E5%85%A8%E8%A7%A3%E6%9E%90.pdf)