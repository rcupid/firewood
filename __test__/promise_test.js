const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

p1
  .then(res => {
    console.log(res)
    //then回调中可以return一个Promise
    return new Promise((resolve, reject) => {
      resolve(2)
    })
  })
  .then(res => {
    console.log(res)
    //then回调中也可以return一个值
    return 3
  })
  .then(res => {
    console.log(res)
  })