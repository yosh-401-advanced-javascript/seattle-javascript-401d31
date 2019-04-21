import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';
import thunk from './middleware/thunk.js';
import peopleReducer from './people-reducers.js';
import personReducer from './person-reducers.js';

let reducers = combineReducers({
  people: peopleReducer,
  person: personReducer,
});

export default () => createStore(reducers, applyMiddleware(thunk));

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
