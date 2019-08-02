console.log(1);
let start = Date.now()
setTimeout(() => {
  let end = Date.now()
  while (end - start < 10) {
    console.log(2222);
    end = Date.now()
  }
}, 0);

setTimeout(() => {
  console.log(111);
}, 0);