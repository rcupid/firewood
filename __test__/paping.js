//
function flat (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}



function flat2 (arr) {
  arr.reduce((previousValue, currentValue) => {
    if (Array.isArray(currentValue)) {
      return previousValue.concat(currentValue)
    } else {
      previousValue.push(currentValue)
      return previousValue
    }
  }, [])
}

let arr = [1, 2, [3, 4], 5]
let result = flat(arr)
console.log(result);//[ 1, 2, 3, 4, 5 ]

let result1 = flat2(arr)
console.log(result1);//[ 1, 2, 3, 4, 5 ]

