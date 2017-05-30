'use strict';


let photosReducer = (state={selected:null, comments:[]}, action) => {
  console.log('gotACTION', action)
  switch(action.type){
    case 'PHOTO_SELECTED_SET': 
      return {...state, selected: action.payload};
    case 'PHOTO_COMMENTS_SET':
      return {...state, comments: action.payload};
    case 'PHOTO_COMMENTS_ADD':
      return {...state, comments: state.comments.concat(action.payload)};
    default: 
      return state;
  }
};

export default photosReducer;
