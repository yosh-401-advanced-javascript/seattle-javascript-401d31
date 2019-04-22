import React from 'react';
import io from 'socket.io-client';

const url = 'https://js-401-socket-io-server.herokuapp.com';
const socket = io.connect(url);

class TrollJohn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedInput: '',
      words: [],
    };

    socket.on('incoming', payload => this.updateWords(payload));
  }

  updateWords = newWords => {
    this.setState({ words: [newWords, ...this.state.words].slice(0, 15) });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.updateWords(this.state.typedInput);
    socket.emit('troll', this.state.typedInput);
    event.target.reset();
  };

  handleNewWords = event => {
    this.setState({ typedInput: event.target.value });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.words.map((word, idx) => (
            <li key={idx}>{word}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            name="typedInput"
            placeholder="New Words"
            onChange={this.handleNewWords}
          />
        </form>
      </>
    );
  }
}

export default TrollJohn;
