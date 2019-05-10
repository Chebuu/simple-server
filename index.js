const path = require('path')
const config = require('./config')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(config.port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`server is listening on ${config.port}`)
})