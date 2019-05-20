let initialState = {};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GETPERSON':
      return payload;
    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
};
