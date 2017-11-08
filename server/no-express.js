var http = require('http')
var fs = require('fs')
var path = require('path')
var qs = require('qs')

var mockDB = { messages: [] }

var requestHandler = function(request, response) {
  if(request.url === '/' && request.method === 'GET') {
    fs.readFile(path.join(__dirname, '../client/index.html'), 'utf8', function(err, file) {
      if(err) {
        console.log('Error reading file: ', err)
        response.statusCode = 404
        response.end('File not found')
        return
      }

      response.writeHead(200, {'Content-type': 'text/html'})
      response.end(file)
    })
  }

  if(request.url === '/messages') {
    if(request.method === 'GET') {
      response.writeHead(200, {'Content-type': 'application/json'})
      response.end(JSON.stringify(mockDB))
    }

    if(request.method === 'POST') {
      var message = ''
      request.on('data', function(chunk) {
        message += chunk
      })

      request.on('end', function() {
        var messageObj = qs.parse(message)
        console.log(messageObj)
        mockDB.messages.push(messageObj)

        response.writeHead(201, {'Content-type': 'text/plain'})
        response.end('Message posted')
      })
    }
  }

}


var port = process.env.PORT || 8080

var server = http.createServer(requestHandler)
server.listen(port, function() {
  console.log('Server listening on port', port)
});
