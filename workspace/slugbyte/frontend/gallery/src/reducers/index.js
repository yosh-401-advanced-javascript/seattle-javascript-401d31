'use strict'

import {combineReducers} from 'redux';
import authReducer from './auth-reducer.js';
import searchReducer from './search-reducer.js';
import photosReducer from './photos-reducer.js';
import profileReducer from './profile-reducer.js';
import userPhotosReducer from './user-photos-reducer.js';
import userProfileReducer from './user-profile-reducer.js';

let reducer = combineReducers({
  title: () => 'hello',
  auth: authReducer,
  photo: photosReducer,
  profile: profileReducer,
  search: searchReducer, 
  userPhotos: userPhotosReducer,
  userProfile: userProfileReducer,
})

export default reducer;

/*
 {
  auth: {token:''}
  photo: {selected: {}, comments: []}
  profile: {selected: {}, photos: []}
  search: {photos: [], profiles: []}
  userProfile: {}
  userPhotos: []
 }
*/

