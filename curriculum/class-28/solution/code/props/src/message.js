import React from 'react';
import Bling from './bling.js';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>Message: {this.state.text}</div>
        <Bling say={this.props.title} do={this.props.action} />
      </React.Fragment>
    );
  }
}

export default Message;
