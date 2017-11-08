import React from 'react'



class MessageForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleFormSubmit} id="message-form">
        <label>Username</label><input name="username" />
        <label>Message</label><input name="message" />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default MessageForm
