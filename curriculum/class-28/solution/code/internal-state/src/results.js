import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div># of Updates: {this.props.count}</div>
      </div>
    );
  }
}

export default Results;
