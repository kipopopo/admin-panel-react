const isBgGradientReducer = (state = true, action) => {
  switch (action.type) {
    case "OFF":
      return false;
    case "ON":
      return true;
    default:
      return state;
  }
};
export default isBgGradientReducer;
