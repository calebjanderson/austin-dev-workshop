var http = require('http')
var mockDB = { messages: [] }
var fs = require('fs')
var path = require('path')


var requestHandler = function(request, response) {
  if(request.url === '/' && request.method === 'GET') {
    fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, file) {
      if(err) {
        console.log('Error reading file: ', err)
        response.statusCode = 404
        response.end('File not found')
        return
      }
      response.statusCode = 200
      response.end(file)
    })
  }
  if(request.url === '/scripts/jquery' && request.method === 'GET') {
    fs.readFile(path.join(__dirname, './node_modules/jquery/dist/jquery.min.js'), 'utf8', function(err, file) {
      if(err) {
        console.log('Error reading file: ', err)
        response.statusCode = 404
        response.end('File not found')
        return
      }
      response.statusCode = 200
      response.end(file)
    })
  }
  if(request.url === '/messages') {
    if(request.method === 'GET') {
      response.statusCode = 200
      response.end(JSON.stringify(mockDB))
    }

    if(request.method === 'POST') {
      var message = ''
      request.on('data', function(chunk) {
        message += chunk
      })

      request.on('end', function() {
        mockDB.messages.push(JSON.parse(message))
        response.statusCode = 201
        response.end('Message posted')
      })
    }
  }

}




var server = http.createServer(requestHandler)
server.listen(8080, function() {
  console.log('Server listening on port 8080')
})