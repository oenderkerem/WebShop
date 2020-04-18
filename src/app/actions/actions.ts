import { Action } from "@ngrx/store";
import {
  Product,
  ShoppingCartEntry,
  ProductVariant,
  Notification,
} from "../models/models";
import { importExpr } from "@angular/compiler/src/output/output_ast";

export class SetAllProducts implements Action {
  readonly type = "SET_PRODUCTS";
  constructor(public payload: Product[]) {}
}

export class SetProductVariationQuantity implements Action {
  readonly type = "SET_VARIATION_QUANTITY";
  constructor(
    public payload: {
      productId: string;
      variant: ProductVariant;
      quantity: number;
    }
  ) {}
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

export class SetProductVariationSelected implements Action {
  readonly type = "SET_PRODUCT_VARIATION_SELECTED";
  constructor(
    public payload: {
      productId: string;
      id: string;
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

export class AddShoppingCartEntries implements Action {
  readonly type = "CART_ADD_ENTRIES";
  constructor(public payload: ShoppingCartEntry[]) {}
}

export class CloseShoppingCart implements Action {
  readonly type = "CART_CLOSE";
  constructor() {}
}

export class ToggleShoppingCart implements Action {
  readonly type = "CART_TOGGLE";
  constructor() {}
}

export class OpenCart implements Action {
  readonly type = "CART_OPEN";
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

export class AddNotification implements Action {
  readonly type = "ADD_NOTIFICATION";
  constructor(public payload: Notification) {}
}

export class RemoveFirstNotification implements Action {
  readonly type = "REMOVE_FIRST_NOTIFICATION";
  constructor() {}
}

export type NotificationAction = AddNotification | RemoveFirstNotification;

export type ShoppingCartAction =
  | AddShoppingCartEntries
  | CloseShoppingCart
  | ToggleShoppingCart
  | OpenCart
  | IncrementAmount
  | DecrementAmount
  | RemoveShoppingCartEntry;

export type ProductAction =
  | SetAllProducts
  | ToggleProductVariationSelection
  | SetProductVariationSelected
  | IncrementProductVariationQuantity
  | DecrementProductVariationQuantity
  | SetProductVariationQuantity
  | ToggleProductDetailsComponent;
