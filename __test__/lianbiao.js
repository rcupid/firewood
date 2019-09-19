
setTimeout(() => {
  console.log(1)
  new Promise((resolve, reject) => {
    console.log(2)
    resolve()
  }).then(() => {
    console.log(3);
  })
})

setTimeout(() => {
  console.log(4)
  new Promise((resolve, reject) => {
    console.log(5)
    resolve()
  }).then(() => {
    console.log(6);
  })
})

function Node (val) {
  this.val = val
  this.next = null
}

function List (array) {
  this.head = null
  let temp = null
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index === 0) {
      this.head = new Node(element)
      temp = this.head
    } else {
      const currentNode = new Node(array[i])
      temp.next = currentNode
      temp = currentNode
    }
  }
}
