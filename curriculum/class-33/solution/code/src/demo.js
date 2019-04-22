import React from 'react';

import * as utils from './lib/utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      person: {}
    };

    this.fetchPeople = this.fetchPeople.bind(this);
  }

  async fetchPeople(e) {
    e.preventDefault();
    let url = 'https://swapi.co/api/people/';
    const data = await utils.get(url);
    const people = data.results;
    this.setState({ people });
  }

  async fetchPerson(url) {
    const person = await utils.get(url);
    this.setState({ person });
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.fetchPeople}>
          Get The People
        </a>
        <ul>
          {this.state.people.map((result, i) => (
            <li
              onClick={() => this.fetchPerson(result.url)}
              key={i}
            >
              {result.name}
            </li>
          ))}
        </ul>
        <div>
          {
            Object.keys(this.state.person).map((key, i) =>
              <div key={i}>
                <span>{key}:</span>
                <span>{this.state.person[key]}</span>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;