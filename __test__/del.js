

let obj = { "23412": "234234", "23424": "657456" }
//JSON.stringify(vm.goods).replace(/[\\]/g,'');
let objString = JSON.stringify(obj).replace(/[\\]/g, '')

let str = `adb=${objString}`

console.log(str + '')