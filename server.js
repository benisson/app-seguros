const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors())
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))