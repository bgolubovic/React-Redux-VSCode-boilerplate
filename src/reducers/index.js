const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = addToStore(state, action);
      break;
    case "RESET":
      state = resetStore();
      break;
    default:
      break;
  }
  return state;
};

const addToStore = (state, action) => {
  return [...Array(state.length + action.amount).keys()];
};

const resetStore = () => {
  return initialState;
};

export default reducer;
