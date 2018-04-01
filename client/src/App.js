import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.ws = new WebSocket('ws://localhost:8083/ws');
    this.state = {
      messages: []
    };
    this.ws.addEventListener('message', (e) => {
      console.log('message received');
      var msg = JSON.parse(e.data);
      const messages = this.state.messages;
      this.setState({
        messages: [msg.message, ...this.state.messages]
      });
    });
    let ctr = 0;
    setInterval(() => {
      this.ws.send(
        JSON.stringify({
          email: 'test@test.com',
          username: 'test-user',
          message: `message ${ctr++}`
        }));
    }, 2000);
  }
  render() {
    return (
      <div>
        <h4>Websocket messaging test</h4>
        {this.state.messages.map(m => (
          <p>
            {JSON.stringify(m)}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
