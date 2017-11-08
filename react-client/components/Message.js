import React from 'react'

class Message extends React.Component {
  constructor() {
    super()

    this.state = {
      show: true
    }
  }

  render() {
    return (
      this.state.show && <div style={{ 'border': 'solid 5px salmon', 'padding': '10px' }}>
        <div><b>{this.props.username}</b>: {this.props.message}</div>
        <button onClick={() => this.setState({show: false})}>Hide message</button>
      </div>
    )
  }
}

export default Message
