// // const mutil = (x, y, z) => {
// //   const result = x * y * z;
// //   console.log(result);
// //   return result
// // }

// // const curry1 = function (fn) {
// //   console.log(fn.length);

// //   const cb = (...args) => {
// //     if (args.length < fn.length) {
// //       return function () {
// //         args = args.concat([].slice.call(arguments))
// //         return cb.apply(null, args)
// //       }
// //     }
// //     return fn.apply(null, args)
// //   }
// //   return cb
// // }

// // curry1(mutil)(1)(2)(3)


// function arg (...args) {
//   console.log(args);
// }

// arg(1, 2, 3, 4)//[1,2,3,4]
// arg([1, 2, 3])//[ [ 1, 2, 3 ] ]
// arg({
//   a: 1,
//   b: 2
// })

// // [{ a: 1, b: 2 }]

// let obj = { a: 1, b: 2 }
// // console.log(...obj) //Error

// function add (x, y, z) {
//   console.log(x + y + z)
// }

// console.log(add.length);

// function currying (fn) {
//   let fnLength = fn.length
//   function cb (...args) {
//     if (args.length >= fnLength) {
//       return fn.apply(null, args)
//     } else {
//       return function (...arg2) {
//         let result = args.concat(arg2)
//         return cb.apply(null, result)
//       }
//     }
//   }
//   return cb
// }

// currying(add)(1)(2)(3)  //6

function calc(){
  let count=1;
  return function(){
    console.log(count++);
  }
}

let fn=calc()
fn()