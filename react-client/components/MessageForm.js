import React from 'react'


var MessageForm = ({ handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} id="message-form" style={{ 'border': 'solid 5px turquoise', 'padding': '10px' }}>
      <label>Username: </label><input name="username" />
      <label> Message: </label><input name="message" />
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm
