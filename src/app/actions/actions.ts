import { Action } from "@ngrx/store";
import { Product, ShoppingCartEntry } from "../models/models";

export class SetAllProducts implements Action {
  readonly type = "PRODUCTS_SET_ALL";
  constructor(public payload: Product[]) {}
}

export class SetProductsMen implements Action {
  readonly type = "PRODUCTS_SET_MEN";
  constructor(public payload: Product[]) {}
}

export class SetProductsWomen implements Action {
  readonly type = "PRODUCTS_SET_WOMEN";
  constructor(public payload: Product[]) {}
}

export class SetProductsUnisex implements Action {
  readonly type = "PRODUCTS_SET_UNISEX";
  constructor(public payload: Product[]) {}
}

export class AddProductsToMen implements Action {
  readonly type = "PRODUCTS_ADD_TO_MEN";
  constructor(public payload: Product[]) {}
}

export class AddProductsToWomen implements Action {
  readonly type = "PRODUCTS_ADD_TO_WOMEN";
  constructor(public payload: Product[]) {}
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
  | SetProductsMen
  | SetProductsWomen
  | SetProductsUnisex
  | AddProductsToMen
  | AddProductsToWomen;
