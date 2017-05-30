'use strict'

import {print} from '../lib/util.js';
import superagent from 'superagent';

// sync actions

export let profileSelectedSet = (profile) => ({
  type: 'PROFILE_SELECTED_SET',
  payload: profile,
});

export let profilePhotosSet = (photos) => ({
  type: 'PROFILE_PHOTOS_SET',
  payload: profile,
});

export let profilePhotosFetch = (photos) => ({
  type: 'PROFILE_PHOTOS_SET',
  payload: photos,
});

export let profileFetch = () => (dispatch, getState) => {
  console.log('profile fetch');
  return superagent.get(`${__API_URL__}/gallery/profiles`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .then(res => res.body)
  .then(profile => {
    console.log('got a profile', profile)
    return dispatch(profileSelectedSet(profile))
  })
}

export let profilePhotosFetch = query => dispatch => {
  return superagent.get(`${__API_URL__}/gallery/search/photos`)
  .query(query)
  .then(res => {console.log('response', res);return res.body})
  .then(photos => dispatch(profilePhotosSet(photos)))
}
