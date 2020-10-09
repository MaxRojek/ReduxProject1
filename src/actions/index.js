export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
export const signIn = () => {
  return { type: "SIGN_IN" };
};
export const addTask = (name) => ({
  type: "NEW_TASK",
  name: name,
});
