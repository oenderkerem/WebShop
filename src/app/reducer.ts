import { Action } from "@ngrx/store";
import { ProductAction, ShoppingCartAction } from "./actions/actions";
import { Product, ShoppingCartEntry } from "./models/models";

//STATE DECLARATIONS

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

export type NotificationState = {
  Notifications: Notification[];
};

//Reducer Functions

export function hamburgerReducer(
  state: HamburgerState = { MenuIsOpen: false },
  action: Action
) {
  switch (action.type) {
    case "HAMBURGER_TOGGLE":
      return {
        ...state,
        MenuIsOpen: !state.MenuIsOpen,
      };
    case "HAMBURGER_CLOSE":
      return {
        ...state,
        MenuIsOpen: false,
      };
    case "HAMBURGER_OPEN":
      return {
        ...state,
        MenuIsOpen: true,
      };
    default:
      return state;
  }
}

export function basicReducer(
  state: BasicState = {
    IsLoading: false,
  },
  action: Action
) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        IsLoading: true,
      };
    case "UNSET_LOADING":
      return {
        ...state,
        IsLoading: false,
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
        CartIsOpen: !state.CartIsOpen,
      };
    case "CART_OPEN":
      return {
        ...state,
        CartIsOpen: true,
      };
    case "CART_CLOSE":
      return {
        ...state,
        CartIsOpen: false,
      };
    case "CART_ADD_ENTRIES":
      let newVariants = action.payload.filter(
        (entry) =>
          state.Entries.find(
            (value) =>
              value.product.id === entry.product.id &&
              value.variation.option === entry.variation.option &&
              entry.variation.price === value.variation.price
          ) === undefined
      );

      let existing = action.payload.filter((entry) =>
        state.Entries.find(
          (value) =>
            value.product.id === entry.product.id &&
            value.variation.option === entry.variation.option &&
            entry.variation.price === value.variation.price
        )
      );
      let addQuantities = (shoppingCartEntry: ShoppingCartEntry) => {
        let index = existing.findIndex(
          (value) =>
            value.product.id === shoppingCartEntry.product.id &&
            value.variation.option === shoppingCartEntry.variation.option &&
            value.variation.price === shoppingCartEntry.variation.price
        );
        if (index >= 0) {
          return {
            ...shoppingCartEntry,
            amount: existing[index].amount + shoppingCartEntry.amount,
          };
        } else {
          return {
            ...shoppingCartEntry,
          };
        }
      };

      return {
        ...state,
        Entries: state.Entries.map((entry) => addQuantities(entry)).concat(
          newVariants
        ),
      };

    case "CART_REMOVE_ENTRY":
      let entries = [
        ...state.Entries.filter(
          (entry) =>
            entry.product !== action.payload.product ||
            entry.variation !== action.payload.variation
        ),
      ];
      return {
        ...state,
        Entries: entries,
      };
    case "CART_DECREMENT_AMOUNT":
      return {
        ...state,
        Entries: [
          ...state.Entries.map((entry) =>
            entry.product === action.payload.product &&
            entry.variation === action.payload.variation
              ? { ...entry, amount: entry.amount - 1 }
              : entry
          ),
        ],
      };
    case "CART_INCREMENT_AMOUNT":
      return {
        ...state,
        Entries: [
          ...state.Entries.map((entry) =>
            entry.product === action.payload.product &&
            entry.variation === action.payload.variation
              ? { ...entry, amount: entry.amount + 1 }
              : entry
          ),
        ],
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
        Products: action.payload,
      };
    case "ADD_PRODUCT":
      return state.Products.find((product) => product.id === action.payload.id)
        ? {
            ...state,
            Products: state.Products.map((product) =>
              product.id === action.payload.id ? action.payload : product
            ),
          }
        : {
            ...state,
            Products: [...state.Products, action.payload.id],
          };
    case "ADD_PRODUCTS":
      let notExistingProducts = [];
      //first identify products that are not already in state
      action.payload.forEach((product) => {
        if (!state.Products.find((p) => product.id == p.id)) {
          notExistingProducts = [...notExistingProducts, product];
        }
      });
      //then update the values of existent products in state inside map function and...
      // ... add those that are new
      return {
        ...state,
        Products: [
          ...state.Products.map((product) => {
            let index = action.payload.findIndex((p) => p.id == product.id);
            if (index > -1) {
              return action.payload[index];
            } else {
              return product;
            }
          }),
          ...notExistingProducts,
        ],
      };

    case "SET_PRODUCT_VARIATION_SELECTED": {
      return {
        ...state,
        Products: state.Products.map((product) =>
          product.id === action.payload.productId
            ? {
                ...product,
              }
            : product
        ),
      };
    }
    case "SET_VARIATION_QUANTITY": {
      return {
        ...state,
        Products: state.Products.map((product) =>
          product.id === action.payload.productId
            ? {
                ...product,
              }
            : product
        ),
      };
    }
    case "INCREMENT_VARIATION_QUANTITY": {
      return {
        ...state,
        Products: state.Products.map((product) =>
          product.id === action.payload.productId
            ? {
                ...product,
              }
            : product
        ),
      };
    }
    case "DECREMENT_VARIATION_QUANTITY": {
      return {
        ...state,
        Products: state.Products.map((product) =>
          product.id === action.payload.productId
            ? {
                ...product,
              }
            : product
        ),
      };
    }
    default:
      return { ...state };
  }
}
