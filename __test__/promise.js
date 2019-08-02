
const start = Date.now()
new Promise((resolve, reject) => {
  let end = Date.now()
  while (end - start < 10) {
    console.log(1);
    end = Date.now()
  }
  resolve()
})

new Promise((resolve, reject) => {
  console.log(2);
  resolve()
})

