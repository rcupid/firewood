/*
 * @Desc:
 * @FilePath: /firewood/__test__/trycatch.js
 * @Author: liujianwei1
 * @Date: 2021-06-16 14:22:34
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */


// const p = () => new Promise((resolve, reject) => {
//   let a = 1
//   if (a === 2) {
//     resolve()
//   } else {
//     reject({ a: 1 })
//   }
// })

// const run = async () => {
//   try {
//     await p()
//     console.log('success')
//   } catch (error) {
//     console.log(error)
//     console.log('error')
//   }
// }

// // run
// run()

const p2 = () => {
  let a = 1
  if (a === 2) {
    return Promise.resolve({ a: 2 })
  } else {
    return Promise.reject({ a: 1 })
  }
}

const run = async () => {
  try {
    let res = await p2()
    console.log(res)
    console.log('success')
  } catch (error) {
    console.log('error')
    console.log(error)
  }
}

run()
