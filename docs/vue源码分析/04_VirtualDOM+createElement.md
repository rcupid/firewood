### GET:Vue的VirtualDOM参考了snabbdom源码
[snabbdom](https://github.com/snabbdom/snabbdom)  
VDOM只是用来生成真实DOM数，不包括操作dom的方法，所以速度比较快


### createElement

### GET:拍平二维数组
```javascript
// vue源码里面的方法
function flat (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// reduce中的方法
function flat2 (arr) {
  arr.reduce((previousValue, currentValue) => {
    if (Array.isArray(currentValue)) {
      return previousValue.concat(currentValue)
    } else {
      previousValue.push(currentValue)
      return previousValue
    }
  }, [])
}

let arr = [1, 2, [3, 4], 5]
let result = flat(arr)
console.log(result);//[ 1, 2, 3, 4, 5 ]

let result1 = flat2(arr)
console.log(result1);//[ 1, 2, 3, 4, 5 ]
```

### 未完成
- 读snabbdom的源码

### 疑问