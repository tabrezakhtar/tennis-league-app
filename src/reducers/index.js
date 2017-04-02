const leagues = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LEAGUE':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'REMOVE_LEAGUE':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default leagues;
