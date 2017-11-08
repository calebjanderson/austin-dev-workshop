import React from 'react'
import Chat from './Chat'
import MessageForm from './MessageForm'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      isLoading: false
    }
  }

  componentDidMount() {

    this.fetchMessages()
      .then(this.renderMessages.bind(this))

  }

  renderMessages(messages) {
    this.setState({ messages })
  }
  fetchMessages() {
    return axios.get('/messages')
      .then((response) => {
        console.log('response from server: ', response)
        return response.data.messages
      })
      .catch((err) => {
        console.log('error fetching messages: ', err)
      })
  }

  postMessage(msgObj) {
    return axios.post('/messages', msgObj)
      .then((response) => {
        console.log('Response from server: ', response)
        return response.data
      })
      .catch((err) => {
        console.log('error posting message: ', err)
      })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    var username = e.target.username.value
    var text = e.target.message.value

    var msgObj = { username: username, message: text }
    this.postMessage(msgObj)
      .then(this.fetchMessages)
      .then(this.renderMessages.bind(this))

  }

  render() {
    return (
      <div style={{ 'border': 'solid 5px lightGreen', 'padding': '10px' }}>
        <h2>Austin Dev Chat 2017 + React</h2>
        {this.state.isLoading ? <div>Loading..</div> : <MessageForm handleFormSubmit={this.handleFormSubmit.bind(this)} />}
        <Chat messages={this.state.messages} />
      </div>
    )
  }
}

export default App
