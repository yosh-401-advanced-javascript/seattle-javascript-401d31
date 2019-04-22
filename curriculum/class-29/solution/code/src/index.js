import React from 'react';
import ReactDOM from 'react-dom';

import Story from './story.js';
import FunctionalStory from './functional-story.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Class</h2>
        <Story />
        <h2>Functional</h2>
        <FunctionalStory />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
