
class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this.status = PENDING
    this.resolveQueue = []
    this.rejectQueue = []

    let _resolve = (val) => {
      while (this.resolveQueue.length) {
        const cb = this.resolveQueue.shift()
        cb(val)
      }
    }

    let _reject = (val) => {
      while (this.rejectQueue.length) {
        const cb = this.rejectQueue.shift()
        cb(val)
      }
    }
    executor(_resolve, _reject)
  }

  then (resolveFn, rejectFn) {
    this.resolveQueue.push(resolveFn)
    this.rejectQueue.push(rejectFn)
  }
}
//test
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result')
  }, 1000);
})
p1.then(res => console.log(res))


