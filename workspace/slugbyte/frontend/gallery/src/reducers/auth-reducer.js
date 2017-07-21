'use strict'

const authReducer = (state={}, action) =>  {
  switch(action.type){
    case 'TOKEN_SET':
      return {
        ...state,
        token: action.payload,
        requestInProgress: false,
        error: null,
      };
    case 'TOKEN_DELETE':
      return {
        ...state,
        token: null,
        requestInProgress: false, 
        error: null,
      };
    case 'TOKEN_REQUESET': 
      return {
        ...state, 
        requestInProgress: true, 
        error: null,
      }
    case 'TOKEN_ERROR':
      return {
        ...state, 
        requestInProgress: false, 
        error: action.payload,
      } 
    default: 
      return state;
  }
}

export default authReducer;
