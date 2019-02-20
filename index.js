const fs = require('fs')
const countWords = require('./lib')
const readStream = fs.createReadStream('./data.txt', { encoding: 'utf-8' })

countWords(readStream).then(console.log)
