import React from 'react';

class Things extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.do();
  }
}

export default Things;
