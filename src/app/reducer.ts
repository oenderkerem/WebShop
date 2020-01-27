import { Action } from "@ngrx/store";
import { ProductAction, ShoppingCartAction } from "./actions/actions";
import { Product, ShoppingCartEntry } from "./models/models";

export type ShoppinCartState = {
  CartIsOpen: boolean;
  Entries: ShoppingCartEntry[];
};

export type HamburgerState = {
  MenuIsOpen: boolean;
};

export type ProductsState = {
  Products: Product[];
};

export type BasicState = {
  IsLoading: boolean;
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

export function basicReducer(
  state: BasicState = {
    IsLoading: false
  },
  action: Action
) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        IsLoading: true
      };
    case "UNSET_LOADING":
      return {
        ...state,
        IsLoading: false
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
      let contains = state.Entries.findIndex(
        entry =>
          entry.product === action.payload.product &&
          entry.variation === action.payload.variation
      );
      if (contains === -1) {
        return {
          ...state,
          Entries: [...state.Entries.concat(action.payload)]
        };
      } else {
        return {
          ...state,
          Entries: [
            ...state.Entries.map(entry =>
              entry.product === action.payload.product &&
              entry.variation === action.payload.variation
                ? {
                    product: entry.product,
                    variation: entry.variation,
                    amount: entry.amount + action.payload.amount
                  }
                : entry
            )
          ]
        };
      }
    case "CART_REMOVE_ENTRY":
      let entries = [
        ...state.Entries.filter(
          entry =>
            entry.product !== action.payload.product ||
            entry.variation !== action.payload.variation
        )
      ];
      return {
        ...state,
        Entries: entries
      };
    case "CART_DECREMENT_AMOUNT":
      return {
        ...state,
        Entries: [
          ...state.Entries.map(entry =>
            entry.product === action.payload.product &&
            entry.variation === action.payload.variation
              ? { ...entry, amount: entry.amount - 1 }
              : entry
          )
        ]
      };
    case "CART_INCREMENT_AMOUNT":
      return {
        ...state,
        Entries: [
          ...state.Entries.map(entry =>
            entry.product === action.payload.product &&
            entry.variation === action.payload.variation
              ? { ...entry, amount: entry.amount + 1 }
              : entry
          )
        ]
      };
    default:
      return state;
  }
}

export function productsReducer(
  state: ProductsState = { Products: [] },
  action: ProductAction
) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        Products: action.payload
      };
    case "TOGGLE_PRODUCT_VARIATION_SELECTION": {
      return {
        ...state,
        Products: state.Products.map(product =>
          product.id === action.payload.productId
            ? {
                ...product,
                variations: product.variations.map(variation =>
                  variation === action.payload.variant
                    ? { ...variation, selected: !variation.selected }
                    : variation
                )
              }
            : product
        )
      };
    }
    default:
      return { ...state };
  }
}
