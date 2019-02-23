export default function Reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "reload_state":
      return action.payload;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return 0;
  }
}
