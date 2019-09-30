setTimeout(() => {
  console.log(1)
  new Promise((resolve, reject) => {
    console.log(2)
    resolve()
  }).then(() => {
    console.log(3);
  })
})

setTimeout(() => {
  console.log(4)
  new Promise((resolve, reject) => {
    console.log(5)
    resolve()
  }).then(() => {
    console.log(6);
  })
})
