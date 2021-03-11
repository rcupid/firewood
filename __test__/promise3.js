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
      setTimeout(() => {
        if (this.status !== PENDING) { return }
        this.status = FULFILLED
        console.log(`length=${this.resolveQueue.length}`);
        while (this.resolveQueue.length) {
          const cb = this.resolveQueue.shift()
          cb(val)
        }
      }, 1)
    }

    let _reject = (val) => {
      setTimeout(() => {
        if (this.status !== PENDING) { return }
        this.status = REJECTED
        while (this.rejectQueue.length) {
          const cb = this.rejectQueue.shift()
          cb(val)
        }
      }, 1)
    }
    executor(_resolve, _reject)
  }

  then (resolveFn, rejectFn) {
    //return一个新的promise
    return new MyPromise((resolve, reject) => {

      //把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        //执行第一个(当前的)Promise的成功回调,并获取返回值
        let x = resolveFn(value)
        //分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
      }

      //把后续then收集的依赖都push进当前Promise的成功回调队列中(_rejectQueue), 这是为了保证顺序调用
      this.resolveQueue.push(fulfilledFn)

      //reject同理
      const rejectedFn = error => {
        let x = rejectFn(error)
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
      }
      this.rejectQueue.push(rejectedFn)
    })
  }
}
//test
const p1 = new MyPromise((resolve, reject) => {
  resolve(1)
})

p1.then((res) => {
  console.log(res);
  return new MyPromise((resolve, reject) => {
    resolve(2)
  })
  // return 2
}).then((res) => {
  console.log(res);
  return 3
})
  .then((res) => {
    console.log(res);
  })


// p1.then((res) => {
//   console.log(res);
//   return new MyPromise((resolve, reject) => {
//     resolve(2)
//   })
// }).then((res) => {
//   console.log(res);
//   return 3
// })
//   .then((res) => {
//     console.log(res);
//   })


