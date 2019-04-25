import React from 'react';
import ReactDOM from 'react-dom';
import ChatContext from './chat-context.js';
import App from './app.js';
import './styles.css';

class Main extends React.Component {
  render() {
    return <ChatContext><App /></ChatContext>;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
