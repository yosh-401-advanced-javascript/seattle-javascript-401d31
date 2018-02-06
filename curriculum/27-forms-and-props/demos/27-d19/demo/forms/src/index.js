import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/form-container'

class App extends React.Component {
  render() {
    return (
      <FormContainer/>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));