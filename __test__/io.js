// const fs = require('fs')

// fs.readFile('./BACK.md', 'utf8', (err, data) => {
//   console.log('readfile')
// })

// setTimeout(() => {
//   console.log('settimeout');
// }, 0);

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled; \
//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

let _resolve = null
const promise = new Promise((resolve, reject) => {
  _resolve = resolve
})

function fn () {
  _resolve(1)
}

fn()
promise.then((res) => {
  console.log(res);
})