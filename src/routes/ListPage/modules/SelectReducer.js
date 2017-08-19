export default (state = null, action) => {
  switch (action.type) {
    case 'select_carpark':
      return action.payload;
    default:
      return state;
  }
};
