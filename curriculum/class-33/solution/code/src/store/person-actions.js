import * as utils from '../lib/utils';

export const getPerson = url => dispatch => {
  return utils.get(url).then(data => {
    dispatch(runGet(data));
  });
};

const runGet = payload => {
  return {
    type: 'GETPERSON',
    payload: payload,
  };
};

export const clear = () => {
  return {
    type: 'CLEAR',
  };
};
