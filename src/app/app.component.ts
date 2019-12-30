import { Component } from "@angular/core";
import {
  HamburgerState,
  ShoppinCartState,
  ProductsState,
  Product
} from "./reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
  ProductAction,
  SetAllProducts,
  SetProductsMen,
  SetProductsWomen,
  SetProductsUnisex
} from "./actions/ProductActions";

export interface State {
  shoppingCartReducer: ShoppinCartState;
  hamburgerReducer: HamburgerState;
  productsReducer: ProductsState;
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
    this.store.dispatch(new SetAllProducts(data as Product[]));
    this.store.dispatch(
      new SetProductsMen(this.filterProductsBySex(data as Product[], "male"))
    );
    this.store.dispatch(
      new SetProductsWomen(
        this.filterProductsBySex(data as Product[], "female")
      )
    );
    this.store.dispatch(
      new SetProductsUnisex(
        this.filterProductsBySex(data as Product[], "unisex")
      )
    );
  }

  filterProductsBySex(products: Product[], filter: string): Product[] {
    let filteredProducts: Product[];
    if (products) {
      filteredProducts = products.filter(product => product.sex === filter);
    }
    return filteredProducts;
  }
}
