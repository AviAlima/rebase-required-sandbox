const fs = require('fs')
const path = require('path')

for (const file of fs.readdirSync(__dirname)) {
  if (file.endsWith('.js') && file !== 'index.js') {
    require(path.join(__dirname, file))
  }
}

console.log('all modules loaded')
