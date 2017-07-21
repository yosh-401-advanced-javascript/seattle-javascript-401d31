'use strict';

// load sass 
require('./style/main.scss');

// require npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

// require app dependencies
import store from './lib/store.js';
import PhotoDetail from './container/photo-detail';
import Landing from './container/landing';
import Dashboard from './container/dashboard';
import {history, print} from './lib/util.js';
import {tokenSet} from './actions/auth-actions.js';
import {userProfileFetch} from './actions/user-profile-actions.js';
import ProfileDetail from './container/profile-detail';
import Search from './container/search';

store.subscribe(state => {
  print.log('___STATE___', store.getState())
})

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  // if logged and on landing go to dashboard else say put
  // if not logged int go to landing 
    try {
      let token = JSON.parse(localStorage.token);
      store.dispatch(tokenSet(token));
      store.dispatch(userProfileFetch());
      let {pathname} = location;
      if(pathname.startsWith('/welcome') || pathname === '/')
        history.push('/dashboard')
    } catch (e) {
      print.error(e);
      history.push('/');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div> 
            <Route path='/photo/:photoID' component={PhotoDetail} />
            <Route path='/welcome/:authAction' component={Landing} />
            <Route path='/profile/:username' component={ProfileDetail} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/' component={() => <Redirect to={{pathname: '/welcome/signup'}} />} />
          </div>
        </BrowserRouter> 
      </Provider>
    );
  }
}

// create a root node to render the app to
var root = document.createElement('div');
document.body.appendChild(root);

// tell react dom to render the app to the dom 
// reactDOM will render view changes to the dom
// whenever the App's state changes
ReactDOM.render(<App />, root);
