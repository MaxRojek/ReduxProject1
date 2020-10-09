const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_TASK":
      return [...state, action.name];
    case "DISPLAY_TASKS":
      return state;
    default:
      return state;
  }
};
export default tasksReducer;
