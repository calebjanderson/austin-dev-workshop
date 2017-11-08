import React from 'react'
import Message from './Message'

var messages = [{id: 3, username: 'Alice', message: 'Wow REact is awesome!'}, {id: 4, username: 'Bob', message: 'Do people actually chat here?'}, {id: 5, username: 'Carly', message: 'Im a property of the 3rd object in an array of messages'}]



var Chat = () => {
  return (
    <div style={{ 'border': 'solid 5px blue', 'padding': '10px' }}>
      <h4>Chatroom</h4>
      <ul>
        {
          messages.map((m) => <Message key={m.id} username={m.username} message={m.message} />)
        }
      </ul>
    </div>
  )
}

export default Chat
