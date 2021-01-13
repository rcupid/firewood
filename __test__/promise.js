//Promise/A+规范的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this.status = PENDING
    this.resolveQueue = []
    this.rejectQueue = []

    let _resolve = (val) => {
      if (this.status !== PENDING) { return }
      this.status = FULFILLED
      while (this.resolveQueue.length) {
        const cb = this.resolveQueue.shift()
        cb(val)
      }
    }

    let _reject = (val) => {
      if (this.status !== PENDING) { return }
      this.status = REJECTED
      while (this.rejectQueue.length) {
        const cb = this.rejectQueue.shift()
        cb(val)
      }
    }
    executor(_resolve, _reject)
  }

  then(resolveFn, rejectFn) {
    this.resolveQueue.push(resolveFn)
    this.rejectQueue.push(rejectFn)
  }
}
//test
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result')
  }, 1000)
})
p1.then(res => console.log(res))




function curry(fn) {
  let args = []
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs]
      return temp
    } else {
      return fn.apply(null, args)
    }
  }
}