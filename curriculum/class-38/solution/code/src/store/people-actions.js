import * as utils from '../lib/utils';

export const getPeople = url => dispatch => {
  return utils.get(url).then(data => {
    dispatch(runGet(data));
  });
};

const runGet = payload => {
  return {
    type: 'GETPEOPLE',
    payload: payload,
  };
};
