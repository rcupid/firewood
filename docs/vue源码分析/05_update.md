### GET 调用时机
- 初始化
- 数据驱动变化

### patch
- patch.js

### GET:函数柯里化（部分求值）
定义：把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数
函数参数 length：获取的是形参的个数，但是形参的数量不包括剩余参数个数，而且仅包括第一个具有默认值之前的参数个数
```javascript
//应用场景-延迟计算
function add (x, y, z) {
  console.log(x + y + z)
}
//GET:函数的长度等于给函数传入参数的长度，用这个技巧，可以判断函数结束的位置
console.log(add.length);

function currying (fn) {
  let fnLength = fn.length
  function cb (...args) {
    if (args.length >= fnLength) {
      return fn.apply(null, args)
    } else {
      return function (...arg2) {
        let result = args.concat(arg2)
        return cb.apply(null, result)
      }
    }
  }
  return cb
}

currying(add)(1)(2)(3)  //6

//应用场景2-动态创建函数，重写函数 Vue中不同平台判断，用到了这种方式
function addEvent (type, el, fn, capture = false) {
      // 重写函数
    if (window.addEventListener) {
        addEvent = function (type, el, fn, capture) {
            el.addEventListener(type, fn, capture);
        }
    }
    else if(window.attachEvent){
        addEvent = function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
      // 执行函数，有循环爆栈风险
      addEvent(type, el, fn, capture); 
}

//应用场景3- bind方法
```