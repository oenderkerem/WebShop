import { Action } from "@ngrx/store";

type ShoppinCartState = {
  CartIsOpen: boolean;
};

export function ShoppingCartReducer(
  state: ShoppinCartState = { CartIsOpen: false },
  action: Action
) {
  switch (action.type) {
    case "TOGGLE_CART":
      console.log("Tooggle cart called" + state.CartIsOpen);
      return {
        ...state,
        CartIsOpen: !state.CartIsOpen
      };
    default:
      return state;
  }
}
