const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'hello.txt')

console.log('filePath: ', filePath)

fs.readFile(filePath, (err, res) => {
  console.log(err, res.toString())
})