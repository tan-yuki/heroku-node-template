const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/hello', (req, res) => 'Hello world!')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
