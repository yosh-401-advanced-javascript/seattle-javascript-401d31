'use strict'

let searchReducer = (state={photos:[], profiles:[]}, action) => {
  switch(action.type){
    case 'SEARCH_PHOTOS_SET':
      return {...state, photos: action.payload};
    case 'SEARCH_PROFILES_SET':
      return {...state, profiles: action.payload};
    default: 
      return state;
  }
}

export default searchReducer;
