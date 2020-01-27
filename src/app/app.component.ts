import { Component } from "@angular/core";
import {
  HamburgerState,
  ShoppinCartState,
  ProductsState,
  BasicState
} from "./reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SetAllProducts, AddShoppingCartEntry } from "./actions/actions";
import { Product, ProductVariant } from "./models/models";

export interface State {
  shoppingCartReducer: ShoppinCartState;
  hamburgerReducer: HamburgerState;
  productsReducer: ProductsState;
  basicReducer: BasicState;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "WebShop";
  shoppingCartIsOpen: Observable<boolean>;
  constructor(private store: Store<State>, private http: HttpClient) {
    this.shoppingCartIsOpen = this.store.select(
      state => state.shoppingCartReducer.CartIsOpen
    );
    this.http
      .get("assets/products.json")
      .subscribe(data => this.onProductsLoaded(data));
  }

  onProductsLoaded(data: Object) {
    let products = data as Product[];
    products.forEach(product => {
      product.variations.forEach(variant => {
        variant.selected = false;
        variant.quantity = 0;
      });
    });
    this.store.dispatch(new SetAllProducts(products));
  }

  filterProductsBySex(products: Product[], filter: string): Product[] {
    let filteredProducts: Product[];
    if (products) {
      filteredProducts = products.filter(product => product.sex === filter);
    }
    return filteredProducts;
  }
}

export function addProductToCart(
  store: Store<State>,
  product: Product,
  variant: ProductVariant,
  amount: number
) {
  if (amount > 0 && store && product && variant)
    store.dispatch({ type: "SET_LOADING" });
  store.dispatch(
    new AddShoppingCartEntry({
      amount: amount,
      product: product,
      variation: variant
    })
  );
  store.dispatch({ type: "UNSET_LOADING" });
}

export function isOptionToBeSelected(product: Product): boolean {
  if (product && product.variations.length > 0) {
    return true;
  } else {
    return false;
  }
}
