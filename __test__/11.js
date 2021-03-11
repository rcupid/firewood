// var x = 3
// var y = 4
// let aaaa = 1
// var bbbb = 1
// console.log(window)
// var obj = {
//   x: 1,
//   y: 6,
//   getX: function () {
//     var x = 5
//     console.log(this)
//     return (function () {
//       console.log(this)
//       return this.x
//     })()
//     // return (() => {
//     //   console.log(this)
//     //   return this.x
//     // })()
//     // return function () {
//     //   console.log(this)
//     //   return this.x
//     // }()
//   },
//   getY: function () {
//     var y = 7
//     return this.y
//   }
// }

// console.log(obj.getX())//3
// console.log(obj.getY())

var F = function () { }
Object.prototype.a = function () { console.log('a') }
Function.prototype.b = function () { console.log('b') }

var f = new F()
console.log('0', F.b())
console.log('1', f)
console.log('2', f.a())
console.log('3', f.b())