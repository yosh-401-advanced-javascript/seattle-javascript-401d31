let initialState = { currentNumber: 12 };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { currentNumber: Math.random() };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};
