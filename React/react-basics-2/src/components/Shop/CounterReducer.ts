interface CounterState {
  count: number;
  isLocked: boolean;
}
type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "TOGGLE_LOCK" };

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return state.isLocked ? state : { ...state, count: state.count + 1 };

    case "DECREMENT":
      return state.isLocked ? state : { ...state, count: state.count - 1 };
    case "TOGGLE_LOCK":
      return { ...state, isLocked: !state.isLocked };

    default:
      return state;
  }
}
