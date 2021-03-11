// const obj = Object.create(null)

// obj["b"] = 1
// obj["a"] = 2
// console.log(obj);


// var intersection = function (...args) {
//   if (args.length === 0) {
//     return []
//   }
//   if (args.length === 1) {
//     return args[0]
//   }
//   return [...new Set(args.reduce((result, arg) => {
//     return result.filter(item => arg.includes(item))
//   }))]
// };

const skuIds = ["134_23234", "77888", "6896896"]
const skuCoupon = [
  {
    skuId: 77888,
    couponId: "6896896"
  },
  {
    skuId: 6896896,
    couponId: "67698698"
  }
]
const href = `http://yike.dev.suanshubang.com:1024/static/hy/sell-payment/confirm-order.html?skuIds=${encodeURIComponent(skuIds)}&addressId=234234`
console.log(href);
