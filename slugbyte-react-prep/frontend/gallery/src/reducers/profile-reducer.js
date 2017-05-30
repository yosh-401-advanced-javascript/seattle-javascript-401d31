'use strict';

let profileReducer = (state={selected:null, photos:[]}, action) => {
  switch(action.type){
    case 'PROFILE_SELECTED_SET':
      return {...state, selected: action.payload}
    case 'PROFILE_PHOTOS_SET': 
      return {...state, photos: action.payload}
    default:
      return state;
  }
}

export default profileReducer;
