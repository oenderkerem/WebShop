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
import { SetAllProducts, AddShoppingCartEntries } from "./actions/actions";
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
    let products = this.transformProducts(data as Product[]);
    this.store.dispatch(new SetAllProducts(products));
  }

  transformProducts(data: Product[]): Product[] {
    let products = data;
    products.forEach(product => {
      product.variations.forEach(variant => {
        variant.selected = false;
        variant.quantity = 1;
      });
    });
    return products;
  }

  filterProductsBySex(products: Product[], filter: string): Product[] {
    let filteredProducts: Product[];
    if (products) {
      filteredProducts = products.filter(product => product.sex === filter);
    }
    return filteredProducts;
  }
}

export function isOptionToBeSelected(product: Product): boolean {
  if (product && product.variations.length > 0) {
    return true;
  } else {
    return false;
  }
}
