const fs = require('fs')

const wait = (mstime) => {
  let date = Date.now();
  while (Date.now - date < mstime) {
    //TODO
    console.log('watinging \n');
  }
}

const asyncOper = () => {
  fs.readFile('./BACK.md', 'utf8', (err, data) => {
    console.log('poll')
  })
}

const lastTime = Date.now();

setTimeout(() => {
  console.log('timers', Date.now() - lastTime + 'ms');
}, 0);

process.nextTick(() => {
  wait(30)
  asyncOper()
})