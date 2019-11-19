import { Action } from "@ngrx/store";

export function hamburgerReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case "TOGGLE":
      return (state = !state);
    case "CLOSE":
      return (state = false);
    case "OPEN":
      return (state = true);
    default:
      return state;
  }
}
