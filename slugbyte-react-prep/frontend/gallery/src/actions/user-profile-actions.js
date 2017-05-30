'use strict';

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

// async
export let userProfileCreate = (profile) => (dispatch, getState) =>  {
  console.log('profileCreate, profile', profile)
  return superagent.post(`${__API_URL__}/gallery/profiles`)
  .set('Authorization', `Bearer ${getState().auth.token}`)
  .attach('photo', profile.photo)
  .then(res => res.body)
  .then(profile => dispatch(userProfileSet(profile)))
}
