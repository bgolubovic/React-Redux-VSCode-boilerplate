const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = addToStore(state, action);
      break;
    default:
      break;
  }
  return state;
};

const addToStore = (state, action) => {
  return [...Array(state.length + action.amount).keys()];
};

export default reducer;
