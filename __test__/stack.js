setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0)

setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0);

/**
 * 浏览器运行结果
 * timer1
 * promise1
 *
 * timer2
 * promise2
 */

/**
 * Node环境运行结果
 * timer1
 * timer2
 * promise1
 * promise2
 *
 */