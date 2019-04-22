import React from 'react';
import Things from './things.js';

class Bling extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        Bling: {this.props.say}
        <Things do={this.props.do} />
      </React.Fragment>
    );
  }
}

export default Bling;
