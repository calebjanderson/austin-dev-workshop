var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var mockDB = { messages: [] }

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/messages', function(req, res) {
  res.json(mockDB)
})

app.post('/messages', function(req, res) {
  console.log('request body: ', req.body)
  var message = { username: req.body.username, message: req.body.message }
  mockDB.messages.push(message)
  res.end('Message posted')
})

var port = process.env.PORT || 8880

app.listen(port, function() {
  console.log('Server listening on port', port)
});
