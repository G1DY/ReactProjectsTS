export type Action = { type: "Increment" } | { type: "Decrement" };
export type State = { count: number };

export const CountReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
