'use strict';

import superagent from 'superagent';

// sync
export let userProfileSet = (profile) => ({ 
  type: 'USER_PROFILE_SET',
  payload: profile,
});

export let userProfileUpdate = (profile) => ({ 
  type: 'USER_PROFILE_UPDATE',
  payload: profile,
});

export let userProfileDelete = () => ({ type: 'USER_PROFILE_DELETE' });

export let userProfileFetch = () => (dispatch, getState) => {
  console.log('profile fetch');
  return superagent.get(`${__API_URL__}/gallery/profiles`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .then(res => res.body)
  .then(profile => {
    console.log('got a profile', profile)
    return dispatch(userProfileSet(profile))
  })
}

// async
export let userProfileCreate = (profile) => (dispatch, getState) =>  {
  console.log('profileCreate, profile', profile)
  return superagent.post(`${__API_URL__}/gallery/profiles`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .attach('photo', profile.photo)
  .then(res => res.body)
  .then(profile => dispatch(userProfileSet(profile)))
}
