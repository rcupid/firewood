const qs = require('qs')

const obj = {
  a: 1, b: [1, 2, 3], c: {
    d: 1
  }
}

console.log(qs.stringify(obj));
