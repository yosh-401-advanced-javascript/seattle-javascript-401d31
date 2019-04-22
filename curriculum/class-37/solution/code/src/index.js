import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoginContext from './components/auth/context.js';

import CMS from './components/cms/cms.js';

import createStore from './store/';
const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoginContext>
          <CMS />
        </LoginContext>
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
