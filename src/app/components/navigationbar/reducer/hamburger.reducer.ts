import { createReducer, on } from "@ngrx/store";
import { toggleClicked } from "../actions/hamburger.actions";

export const initialState = false;

const _toggleReducer = createReducer(
  initialState,
  on(toggleClicked, state => !state)
);

export function hamburgerReducer(state, action) {
  return _toggleReducer(state, action);
}
