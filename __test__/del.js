const getURLParameters = (url) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )
}

// encodeURIComponent
// 事例
let url = `http://url.com/page?n=Adam&s=Smith&rurl=${encodeURIComponent('http://www.baidu.com?name=22')}`
let a = getURLParameters(url) // {n: 'Adam', s: 'Smith'}
let b = getURLParameters('google.com') // {}
console.log(a)


// function add (...args) {
//   args.reduce((a, current) => {
//     return a + current
//   }, 0)
// }

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

////////////////////////////////////////
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments)

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments)
    return _adder
  }

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b
    })
  }
  return _adder
}
////////////////////////////////////////////////////////
console.log(add(1)(2)(3).toString())                //>> 6
add(1, 2, 3)(4)             //>> 10
add(1)(2)(3)(4)(5)          //>> 15
add(2, 6)(1)


