'use strict'

import {print} from '../lib/util.js';
import superagent from 'superagent';

// sync actions

export let profileSelectedSet = (profile) => ({
  type: 'PROFILE_SELECTED_SET',
  payload: profile,
});

export let profilePhotosSet = (profile) => ({
  type: 'PROFILE_PHOTOS_SET',
  payload: profile,
});

export let profilePhotosFetch = username => dispatch => {
  return superagent.get(`${__API_URL__}/gallery/profiles/${username}/photos`)
  .then(res => {console.log('response', res);return res.body})
  .then(photos => dispatch(profilePhotosSet(photos)))
}
