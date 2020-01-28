import { Action } from "@ngrx/store";
import { Product, ShoppingCartEntry, ProductVariant } from "../models/models";

export class SetAllProducts implements Action {
  readonly type = "SET_PRODUCTS";
  constructor(public payload: Product[]) {}
}

export class IncrementProductVariationQuantity implements Action {
  readonly type = "INCREMENT_VARIATION_QUANTITY";
  constructor(
    public payload: {
      productId: string;
      variant: ProductVariant;
    }
  ) {}
}

export class DecrementProductVariationQuantity implements Action {
  readonly type = "DECREMENT_VARIATION_QUANTITY";
  constructor(
    public payload: {
      productId: string;
      variant: ProductVariant;
    }
  ) {}
}

export class ToggleProductVariationSelection implements Action {
  readonly type = "TOGGLE_PRODUCT_VARIATION_SELECTION";
  constructor(
    public payload: {
      productId: string;
      variant: ProductVariant;
    }
  ) {}
}

export class ToggleProductDetailsComponent implements Action {
  readonly type = "TOGGLE_PRODUCT_DETAILS_COMPONENT";
  constructor(
    public payload: {
      productId: string;
    }
  ) {}
}

export class AddShoppingCartEntry implements Action {
  readonly type = "CART_ADD_ENTRY";
  constructor(public payload: ShoppingCartEntry) {}
}

export class CloseShoppingCart implements Action {
  readonly type = "CART_CLOSE";
  constructor() {}
}

export class ToggleShoppingCart implements Action {
  readonly type = "CART_TOGGLE";
  constructor() {}
}

export class IncrementAmount implements Action {
  readonly type = "CART_INCREMENT_AMOUNT";
  constructor(public payload: ShoppingCartEntry) {}
}

export class DecrementAmount implements Action {
  readonly type = "CART_DECREMENT_AMOUNT";
  constructor(public payload: ShoppingCartEntry) {}
}

export class RemoveShoppingCartEntry implements Action {
  readonly type = "CART_REMOVE_ENTRY";
  constructor(public payload: ShoppingCartEntry) {}
}

export type ShoppingCartAction =
  | AddShoppingCartEntry
  | CloseShoppingCart
  | ToggleShoppingCart
  | IncrementAmount
  | DecrementAmount
  | RemoveShoppingCartEntry;

export type ProductAction =
  | SetAllProducts
  | ToggleProductVariationSelection
  | IncrementProductVariationQuantity
  | DecrementProductVariationQuantity
  | ToggleProductDetailsComponent;
