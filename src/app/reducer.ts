import { Action } from "@ngrx/store";
import { ProductAction } from "./actions/ProductActions";

export type Product = {
  price: number;
  title: string;
  image: any;
  sex: "male" | "female";
};

export type ShoppinCartState = {
  CartIsOpen: boolean;
};

export type HamburgerState = {
  MenuIsOpen: boolean;
};

export type ProductsState = {
  Men: Product[];
  Women: Product[];
  Unisex: Product[];
  All: Product[];
};

export function hamburgerReducer(
  state: HamburgerState = { MenuIsOpen: false },
  action: Action
) {
  switch (action.type) {
    case "HAMBURGER_TOGGLE":
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

export function productsReducer(
  state: ProductsState = { Men: [], Women: [], Unisex: [], All: [] },
  action: ProductAction
) {
  switch (action.type) {
    case "PRODUCTS_SET_ALL":
      return {
        ...state,
        All: action.payload
      };
    default:
      return { ...state };
  }
}
