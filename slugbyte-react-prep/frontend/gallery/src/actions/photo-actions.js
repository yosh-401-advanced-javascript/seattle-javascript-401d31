'use strict';

import superagent from 'superagent';

// sync actions
export let photosSelectedSet = photo => ({
  type: 'PHOTO_SELECTED_SET',
  payload: photo,
});

export let commentSet = (comments) => ({
  type: 'PHOTO_COMMENTS_SET',
  payload: comments,
});

export let commentAdd = (comment) => ({
  type: 'PHOTO_COMMENTS_ADD',
  payload: comment,
});

// async 
export let photoSelectedFetch = id => dispatch => {
  return superagent.get(`${__API_URL__}/gallery/photos/${id}`)
  .then(res => {console.log('response', res);return res.body})
  .then(photo => dispatch(photosSelectedSet(photo)))
}

export let photoCommentsFetch = photoID => dispatch => {
  return superagent.get(`${__API_URL__}/gallery/comments/${photoID}`)
  .then(res => {console.log('response commentsFetch', res);return res.body})
  .then(comments => dispatch(commentSet(comments)))
}

export let photoCommentCreate = comment => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/gallery/comments`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .send(comment)
  .then(res => {console.log('commentCreate', res); return res.body})
  .then(comment => dispatch(commentAdd(comment)))
}
