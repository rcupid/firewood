const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'reject'

class MyPromise {
  constructor(exec) {
    this.status = PENDING
    this.__resolveQueue = []
    this.__rejectQueue = []

    const __resolve = (val) => {
      if (this.status === PENDING) { return }
      this.status = FULFILLED
      while (this.__resolveQueue.length) {
        const cb = this.__resolveQueue.shift()
        cb(val)
      }
    }

    const __reject = (err) => {
      while (this.__rejectQueue.length) {
        const cb = this.__rejectQueue.shift()
        cb(err)
      }
    }

    exec(__resolve, __reject)
  }
  then(resolveFn, rejectFn) {
    this.__resolveQueue.push(resolveFn)
    this.__rejectQueue.push(rejectFn)
  }
}