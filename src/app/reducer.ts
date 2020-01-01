import { Action } from "@ngrx/store";
import { ProductAction } from "./actions/productActions";
import { ShoppingCartAction } from "./actions/productActions";

export type Product = {
  price: number;
  title: string;
  image: any;
  sex: "male" | "female" | "unisex";
};

export type ShoppingCartEntry = {
  product: Product;
  amount: number;
};

export type ShoppinCartState = {
  CartIsOpen: boolean;
  Entries: ShoppingCartEntry[];
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
  state: ShoppinCartState = { CartIsOpen: false, Entries: [] },
  action: ShoppingCartAction
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
    case "CART_ADD_ENTRY":
      return {
        ...state,
        Entries: [...state.Entries.concat(action.payload)]
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
    case "PRODUCTS_SET_MEN":
      return {
        ...state,
        Men: action.payload
      };
    case "PRODUCTS_SET_WOMEN":
      return {
        ...state,
        Women: action.payload
      };
    case "PRODUCTS_SET_UNISEX":
      return {
        ...state,
        Unisex: action.payload
      };
    case "PRODUCTS_ADD_TO_MEN":
      return {
        ...state,
        Men: [...state.Men.concat(action.payload)]
      };
    case "PRODUCTS_ADD_TO_WOMEN":
      return {
        ...state,
        Women: [...state.Women.concat(action.payload)]
      };
    default:
      return { ...state };
  }
}
