const initialState = {
  count: 0,
};
export const Reduction = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
