// let a = [3, 4, 5, 9]
// let b = {
//   name: 'cupid',
//   age: 19
// }
// for (const key in b) {
//   console.log(key);
// }

// // for (const iterator of b) {
//   // console.log(iterator);
// // }


// Changes:
//  - @sell/common: 1.0.1-alpha.57 => 1.0.2
//  - @sell/core: 1.0.1-alpha.29 => 1.0.1
//  - @sell/log: 1.0.1-alpha.38 => 1.0.1


const quick = (arr, left, right) => {
  let index = 0;
  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (right > index) {
      quick(arr, index, right)
    }
  }
}

const partition = (arr, left, right) => {
  const mid = Math.floor((left + right) / 2)
  const pivot = arr[mid]
  const i = left;
  const j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }

    while (arr[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(arr, i, j)
      i++;
      j--
    }

  }
  return i
}

const swap = (arr, i, j) => { }