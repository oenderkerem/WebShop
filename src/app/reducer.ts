import { Action } from "@ngrx/store";

export type ShoppinCartState = {
  CartIsOpen: boolean;
};

export type HamburgerState = {
  MenuIsOpen: boolean;
};

export function hamburgerReducer(
  state: HamburgerState = { MenuIsOpen: false },
  action: Action
) {
  switch (action.type) {
    case "HAMBURGER_TOGGLE":
      console.log("HAMBURGER_Toggle called " + state.MenuIsOpen);
      return {
        ...state,
        MenuIsOpen: !state.MenuIsOpen
      };
    case "HAMBURGER_CLOSE":
      return {
        ...state,
        MenuIsOpen: false
      };
    case "HAMBURGER_OPEN":
      return {
        ...state,
        MenuIsOpen: true
      };
    default:
      return state;
  }
}

export function shoppingCartReducer(
  state: ShoppinCartState = { CartIsOpen: false },
  action: Action
) {
  switch (action.type) {
    case "CART_TOGGLE":
      console.log("Tooggle cart called " + state.CartIsOpen);
      return {
        ...state,
        CartIsOpen: !state.CartIsOpen
      };
    case "CART_CLOSE":
      return {
        ...state,
        CartIsOpen: false
      };
    default:
      return state;
  }
}
