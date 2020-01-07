import { Action } from "@ngrx/store";
import { ProductAction, ShoppingCartAction } from "./actions/actions";
import { Product, ShoppingCartEntry } from "./models/models";
import { summaryFileName } from "@angular/compiler/src/aot/util";

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
      return {
        ...state,
        Entries: addEntryToCart(state.Entries, action.payload)
      };
    default:
      return state;
  }
}

function addEntryToCart(
  currentEntries: ShoppingCartEntry[],
  entry: ShoppingCartEntry
): ShoppingCartEntry[] {
  //if currentEntries is null return empty array
  if (currentEntries) {
    // if entry is null return currentEntries
    if (entry) {
      // check if currentEntries contains entry
      let index = currentEntries.findIndex(
        x => x.product === entry.product && x.variation === entry.variation
      );
      if (index === -1) {
        let newEntries = currentEntries;
        newEntries.push(entry);
        return newEntries;
      } else {
        currentEntries[index].amount += entry.amount;
        return currentEntries;
      }
    } else {
      return currentEntries;
    }
  } else {
    return [];
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
