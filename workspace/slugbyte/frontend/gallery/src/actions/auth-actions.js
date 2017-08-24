'use strict'

import superagent from 'superagent';

// syncronous actions
export let tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
})

export let tokenDelete = () => ({
  type: 'TOKEN_DELETE',
});

// asyncronous actions
export let tokenSave = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          localStorage.token = JSON.stringify(token)
          dispatch(tokenSet(token))
          resolve(token)
        } catch (e) {
          dispatch(tokenError(e))
          reject(e)
        }
      }, 0)
  });
};

export let login = (user) => (dispatch) => {
  let base64 = btoa(`${user.username}:${user.password}`)
  return superagent.get(`${__API_URL__}/auth/login`)
  .set('Authorization', `Basic ${base64}`)
  .then(res => res.text)
  .then(token => dispatch(tokenSave(token)))
}

export let signup = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/auth/signup`)
  .send(user)
  .then(res => res.text)
  .then(token => dispatch(tokenSave(token)))
}
