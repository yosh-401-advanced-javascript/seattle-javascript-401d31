'use strict';

import superagent from 'superagent';

export let searchPhotosSet = (photos) => ({
  type: 'SEARCH_PHOTOS_SET',
  payload: photos,
});

export let searchProfilesSet = (profiles) => ({
  type: 'SEARCH_PROFILES_SET',
  payload: profiles,
});

export let searchPhotosFetch = query => dispatch => {
  return superagent.get(`${__API_URL__}/gallery/search/photos`)
  .query(query)
  .then(res => {console.log('response', res);return res.body})
  .then(photos => dispatch(searchPhotosSet(photos)))
}

export let searchProfilesFetch = query => dispatch => {
  return superagent.get(`${__API_URL__}/gallery/search/profiles`)
  .query(query)
  .then(res => {console.log('response', res);return res.body})
  .then(profiles => dispatch(searchProfilesSet(profiles)))
}
