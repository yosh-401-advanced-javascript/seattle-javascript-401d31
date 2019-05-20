let initialState = {
  players: [
    { name: 'Ryan', position: 'P', bats: 'R', throws: 'R' },
    { name: 'George', position: '1B', bats: 'R', throws: 'L'},
  ],
  teams: [
    { name: 'Mariners' },
    { name: 'Phillies' },
  ],
};

export default (state = initialState, action) => {
  let { type, payload={} } = action;

  let {id,model,record} = payload;

  switch (type) {

    case 'POST':
      let postList = [...state[model], record];
      return { ...state, [model]: postList };

    case 'DELETE':
      let deleteList = state[model].filter((r, idx) => idx !== id);
      return { ...state, [model]: deleteList };

    case 'PUT':
      let putList = state[model].map((entry, idx) => idx === id ? record : entry);
      return  { ...state, [model]: putList };
    
    case 'PATCH':
      return state;

    default:
      return state;
  }
};
