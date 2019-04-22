import React from 'react';
import Results from './results.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
    this.results = {};
  }

  doWords = e => {
    let name = e.target.value;
    name = name
      .split(' ')
      .reverse()
      .join(',');
    this.setState({ name, count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <input placeholder="Name" onChange={this.doWords} />
        </form>
        <Results name={this.state.name} count={this.state.count} />
      </React.Fragment>
    );
  }
}

export default Form;
