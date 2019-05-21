import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Details;
