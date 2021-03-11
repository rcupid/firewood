const str = "http://yike.dev.suanshubang.com:1024/static/hy/sell-payment/confirm-order.html?courseInfo=%5B%7B%22courseId%22:2039620,%22couponId%22:0%7D,%7B%22courseId%22:2039529,%22couponId%22:0%7D%5D&lastfrom=in_subject_spubankecard_sell_6310&ZybDisableSlipBack=1&ZybHideTitle=1&hideNativeTitleBar=1&hideNav=1&fillHomeIndicator=0"
const str2 = "/static/hy/sell-payment/confirm-order.html?courseInfo=%5B%7B%22courseId%22:2039620,%22couponId%22:0%7D,%7B%22courseId%22:2039529,%22couponId%22:0%7D%5D&lastfrom=in_subject_spubankecard_sell_6310&ZybDisableSlipBack=1&ZybHideTitle=1&hideNativeTitleBar=1&hideNav=1&fillHomeIndicator=0"
const str3 = "http://yike.dev.suanshubang.com:1024/static/hy/sell-payment/confirm-order.html"

const reg = /[\s\S]*\/static\/hy\/([\S]+)\/([\S]+).html([\s\S]*)$/
const matches = str.match(reg)
// console.log(matches);
// console.log(matches[1]);
// console.log(matches[2]);
// console.log(matches[3]);

// console.log('****');
// // console.log(str2.match(reg));
// console.log('****');
// console.log(str3.match(reg));

// console.log(decodeURIComponent(str))

let url = 'http://pour-docker.suanshubang.com/purchase/normal/prepare?userId=2310975605&selectedSkuIds=[%2210093027%22]'
// console.log(decodeURIComponent(url))

// console.log(encodeURIComponent('[{"courseId":10093027,"couponId":0}]'))
//courseInfo=%5B%7B%22courseId%22%3A10093027%2C%22couponId%22%3A0%7D%5D&lastfrom=in_subject_spubankecard_sell_6310&ZybDisableSlipBack=1&ZybHideTitle=1&hideNativeTitleBar=1&hideNav=1&fillHomeIndicator=0
//10093123,10093127
// unionSkuIdList
console.log(encodeURIComponent('[{"courseId":10093123,"couponId":0},{"courseId":10093127,"couponId":0}]'))
console.log('////')
console.log(encodeURIComponent('=11[[10093123,10093127]]'))
