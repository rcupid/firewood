
function fn(list, element) {
  let low = 0
  let high = list.length - 1
  let mid = Math.floor((low + high) / 2)
  if (list[mid] === element) {
    return mid
  }
  if (list[mid] > element) {
    return fn(list.slice(0, mid), element)
  }
  if (list[mid] < element) {
    return fn(list.slice(mid), element)
  }
}

// console.log(fn([1, 2, 3, 4, 5, 7], 3))

function selectSort(list) {
  for (let i = 0; i < list.length; i++) {
    let temp = list[i]
    let minIndex = i

    for (let index = i + 1; index < list.length; index++) {
      const element = list[index]
      if (element < temp) {
        temp = element
        minIndex = index
      }
    }
    temp = list[i]
    list[i] = list[minIndex]
    list[minIndex] = temp
  }
  return list
}


console.log(selectSort([9, 7, 4, 2, 1]))