import React from 'react'
import Message from './Message'

var messages = [{username: 'Alice', message: 'Wow REact is awesome!'}, {username: 'Bob', message: 'Do people actually chat here?'}, {username: 'Carly', message: 'Im a property of the 3rd object in an array of messages'}]


class Chat extends React.Component {
  render() {
    return (
      <div>
        <h4>Chatroom</h4>
        <ul>
          {
            this.props.messages.map((m, i) =>
              <Message key={m.id} username={m.username} message={m.message} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default Chat
