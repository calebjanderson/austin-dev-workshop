var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var browserify = require('browserify-middleware')
var app = express()
var mockDB = { messages: [] }
var objID = 1

var app = express()

// PArse json from react form
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../react-client')))

app.get('/bundle.js', browserify('./react-client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.get('/favicon.ico', function(req, res) {
  res.end()
})
app.get('/messages', function(req, res) {
  res.json(mockDB)
})

app.post('/messages', function(req, res) {
  console.log('request body: ', req.body)
  var message = { username: req.body.username, message: req.body.message }
  message.id = objID++

  mockDB.messages.push(message)
  res.end('Message posted')
})


var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT)
})
