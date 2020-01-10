import { Action } from "@ngrx/store";
import { ProductAction, ShoppingCartAction } from "./actions/actions";
import { Product, ShoppingCartEntry } from "./models/models";
import { summaryFileName } from "@angular/compiler/src/aot/util";
import { ActivatedRouteSnapshot } from "@angular/router";

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
      console.log(entries);
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
