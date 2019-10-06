class Statck {
  constructor() {
    this.items = []
    this.minIndex = 0
  }

  min () {
    return [...this.items.sort()][0]
  }
  push (item) {
    this.items.push(item)
  }

  pop () {
    return this.items.pop()
  }
  isEmpty () {
    return this.size() === 0
  }
  size () {
    return this.items.length
  }
  clear () {
    this.items = []
  }
  top () {
    return this.items[this.items.length - 1]
  }
}

const statck = new Statck()
//练习1
// let str = "(2342)(sd))()(sdf)"
// let str = "()"
// let arr = str.split('')
// // console.log(arr);

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if (element === '(') {
//     statck.push(1)
//   }
//   if (element === ")") {
//     if (statck.size() === 0) {
//       console.log('不合法')
//       break;
//     }
//     statck.pop()
//   }
// }
// console.log(statck.size())

//练习2：
// let array = ["4", "12", "6", "/", "+"]
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   const number = parseInt(element)
//   if (!isNaN(number)) {
//     statck.push(number)
//   } else {
//     let number1 = statck.pop()
//     let number2 = statck.pop()
//     statck.push(eval(`${number2}${element}${number1}`))
//   }
// }

// console.log(statck.items);

statck.push(1)
statck.push(0)
statck.push(2)
console.log(statck.min())