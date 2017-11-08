import React from 'react'

class Message extends React.Component {
  render() {
    return (
      <div>
        <b>{this.props.username}</b>: {this.props.message}
      </div>
    )
  }
}

export default Message
