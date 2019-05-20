import React from 'react';
import io from 'socket.io-client';

export const ChatContext = React.createContext();

const url = 'http://localhost:3000';

const socket = io.connect(url);

class ChatProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendText: this.sendText,
      words: '',
    };
  }

  sendText = words => {
    socket.emit('chat', words);
  };

  incoming = words => {
    console.log('incoming!', words);
    this.setState({words});
  }

  componentDidMount() {
    socket.on('incoming', this.incoming);
  }

  render() {
    return (
      <ChatContext.Provider value={this.state}>
        {this.props.children}
      </ChatContext.Provider>
    );
  }
}

export default ChatProvider;
