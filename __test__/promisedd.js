
const arr = []


function get () {
  const pm = new Promise((resolve, reject) => {
    resolve(1)
  })
  arr.push(fn)
  return pm;
}

function fn1 () {
  get(fn1).then((res) => {
    console.log(res)
  })
}

function fn2 () {
  get(fn2).then((res) => {
    console.log(res)
  })
}



function fn3 () {
  get(fn3).then((res) => {
    console.log(res)
  })
}
fn1()
fn2()
fn3()

setTimeout(() => {
  arr.forEach((item) => {
    fn()
  })
}, 2000)