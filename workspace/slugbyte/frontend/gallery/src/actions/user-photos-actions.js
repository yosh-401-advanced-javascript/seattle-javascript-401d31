'use strict';

import superagent from 'superagent';
import {print} from '../lib/util.js';

// sync actions
export let userPhotosSet = (userPhotos) => ({
  type: 'USER_PHOTOS_SET',
  payload: userPhotos,
});

export let userPhotosAdd = (photo) => ({
  type: 'USER_PHOTOS_ADD',
  payload: photo,
});

export let userPhotosUpdate= (photo) => ({
  type: 'USER_PHOTOS_UPDATE',
  payload: photo,
});

export let userPhotosDelete = (photo) => ({
  type: 'USER_PHOTOS_DELETE',
  payload: photo,
});

// async actions
export let userPhotosCreate = (photo) => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/gallery/photos`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .attach('photo', photo.photo)
  .field('description', photo.description)
  .then(res => {console.log('create res', res); return  res.body})
  .then(photo => dispatch(userPhotosAdd(photo)))
};

export let userPhotosFetch = () => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/gallery/photos`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .then(res => res.body)
  .then(photo => dispatch(userPhotosSet(photo)))
};

