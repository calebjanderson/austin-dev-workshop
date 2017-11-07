var app = {}

app.init = function() {
  $('#message-form').on('submit', function(event) {
    event.preventDefault()

    var userInput = {
      username: event.target.username.value,
      message: event.target.message.value
    }

    app.postMessage(userInput)
  })

  app.fetchMessages()
}

app.fetchMessages = function() {
  $.get('/messages', function(data) {
    console.log('got em: ', data)
    var messagesArray = data.messages.map((m) => {
      var $message = $('<div></div>')
      var $username = $('<span class="username"/>')
      var $text = $('<span class="message-text"/>')
      $username.text(m.username)
      $text.text(m.message)
      $message.append($username, ': ', $text)
      return $message
    })
    $('#message-list').empty()
    $('#message-list').append(messagesArray.reverse())
  })
}

app.postMessage = function(message) {
  $.post('/messages', message, function() {
    app.fetchMessages()
  })
}