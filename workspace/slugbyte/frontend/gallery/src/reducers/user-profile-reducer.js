'use strict'

let userProfileReducer = (state={}, action) => {
  switch(action.type){
    case 'USER_PROFILE_SET':
      return {...state, ...action.payload};
    case 'USER_PROFILE_UPDATE':
      return {...state, ...action.payload}
    case 'USER_PROFILE_DELETE':
      return {}
    default:
      return state;
  }
}

export default userProfileReducer
