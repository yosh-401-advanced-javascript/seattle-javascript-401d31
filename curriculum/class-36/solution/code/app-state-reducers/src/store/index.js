import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';
import appReducer from './app-reducers.js';
import numberReducer from './numbers-reducers.js';

let reducers = combineReducers({
  app: appReducer,
  numbers: numberReducer
});

export default () => createStore(reducers, applyMiddleware(reporter));

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
