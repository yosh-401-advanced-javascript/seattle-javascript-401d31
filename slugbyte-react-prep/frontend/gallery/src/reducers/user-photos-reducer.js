'use strict';

let userPhotosReducer = (state=[], action) => {
  switch(action.type){
    case 'USER_PHOTOS_SET':
      return action.payload || [];
    case 'USER_PHOTOS_ADD': 
      return [action.payload].concat(state);
    case 'USER_PHOTOS_DELETE':
      return state.filter(item => item._id !== action.payload._id)
    case 'USER_PHOTOS_UPDATE':
      return state.map(item => {
        if(item._id === action.payload._id)
          return {...item, ...action.payload}
        return item
      });
    default: 
      return state;
  }
};

export default userPhotosReducer;
