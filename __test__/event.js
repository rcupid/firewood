
//不同实例之间不会共享事件
const EventEmitter = require('events').EventEmitter

class Server extends EventEmitter {

}

const log = new Server()
const time = new Server()

log.on('log', () => {
  console.log(+new Date())
})

time.on('log', () => {
  console.log('time')
})

setTimeout(() => {
  log.emit('log')
}, 1000)


setTimeout(() => {
  time.emit('log')
}, 1000);
