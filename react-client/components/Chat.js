import React from 'react'
import Message from './Message'

var testMessages = [{id: 'tester1', username: 'Alice', message: 'Wow REact is awesome!'}, {id: 'tester2', username: 'Bob', message: 'Do people actually chat here?'}, {id: 'tester3', username: 'Carly', message: 'Im a property of the 3rd object in an array of messages'}]



var Chat = ({ messages }) => {
  return (
    <div style={{ 'border': 'solid 5px blue', 'padding': '10px' }}>
      <h4>Chatroom</h4>
      <ul>
        {
          testMessages.map((m) => <Message key={m.id} username={m.username} message={m.message} />)
        }
        {
          messages.map((m) => <Message key={m.id} username={m.username} message={m.message} />)
        }
      </ul>
    </div>
  )
}

export default Chat
