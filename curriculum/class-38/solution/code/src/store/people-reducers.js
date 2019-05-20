let initialState = {
  count: 0,
  results: [],
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GETPEOPLE':
      return payload;
    default:
      return state;
  }
};
