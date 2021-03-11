let obj = {
  a: {}
}

let newObj = new Proxy(obj, {
  get (target, key, r) {
    console.log('set');
    // return Reflect.get(target, key, r)
    return target[key]

  },
  set (target, key, value, r) {
    console.log('set');
    return target[key] = value
    // return Reflect.set(target, key, value, r);
  }
})

newObj.a = 1
