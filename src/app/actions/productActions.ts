import { Action } from "@ngrx/store";
import { Product, ShoppingCartEntry } from "../reducer";

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

export type ShoppingCartAction =
  | AddShoppingCartEntry
  | CloseShoppingCart
  | ToggleShoppingCart;
export type ProductAction =
  | SetAllProducts
  | SetProductsMen
  | SetProductsWomen
  | SetProductsUnisex
  | AddProductsToMen
  | AddProductsToWomen;
