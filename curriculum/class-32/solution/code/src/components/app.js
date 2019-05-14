import React from 'react';

import RecordList from './record/list.js';

const If = props => (props.condition ? props.children : null);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { model: null };
  }

  showRecords = model => {
    this.setState({ model });
  };

  render() {
    return (
      <div>
        <h2>
          Show
          <button onClick={() => this.showRecords('players')}>Players</button>
          <button onClick={() => this.showRecords('teams')}>Teams</button>
        </h2>
        <If condition={this.state.model}>
          <RecordList model={this.state.model} />
        </If>
      </div>
    );
  }
}

export default App;
