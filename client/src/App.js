import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    fetch('http://localhost:8084/calculate', {
      method: 'POST',
      data: JSON.stringify({})
    })
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      console.log('RESPONSE:', data);
      this.startSocket(data.data);
    });
  }
  startSocket(id) {
    console.log('starting socket ' + id);
    this.ws = new WebSocket('ws://localhost:8083/ws');
    this.state = {
      messages: []
    };
    this.ws.addEventListener(id, (e) => {
      console.log('message received for ' + id);
      var msg = JSON.parse(e.data);
      const messages = this.state.messages;
      this.setState({
        messages: [msg.message, ...this.state.messages]
      });
    });
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
