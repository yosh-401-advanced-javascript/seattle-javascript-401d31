'use strict';

import {print, history} from './util.js';
import store from './store.js';
import {tokenSet} from '../actions/auth-actions.js';
import {profileFetch} from '../actions/profile-actions.js';

const pageLoadHandler = () => {
  // if logged and on landing go to dashboard else say put
  // if not logged int go to landing 
  try {
    let token = JSON.parse(localStorage.token);
    store.dispatch(tokenSet(token));
    store.dispatch(profileFetch());
    if(location.pathname === '/')
      history.push('/dashboard')
  } catch (e) {
    print.error(e);
    history.push('/');
  }
};

export default pageLoadHandler;
