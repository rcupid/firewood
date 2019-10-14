
//https://www.jianshu.com/p/4a5eca0536c3
let obj = {
  name: 'Cupid'
}

let proxy = new Proxy(obj, {
  get (target, key) {
    console.log('get', key);
    return Reflect.get(target, key)
  },
  set (target, key, value) {
    console.log('set', key, value)
    return Reflect.set(target, key, value)
  }
})
proxy.name
proxy.name = '234'

//数组多次触发
//对象嵌套