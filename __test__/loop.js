const fs = require('fs')

fs.readFile('./BACK.md', 'utf8', (err, data) => {
  console.log('readFile')
  setTimeout(() => {
    console.log('timeout')
  }, 0);

  setImmediate(() => {
    console.log('setImmediate')
  })
})

/**
 *
 * timer->I/O callback -> poll -> check ->close callback
 */