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
    console.log(products);
    this.store.dispatch(new SetAllProducts(products));
  }

  transformProducts(products: Product[]): Product[] {
    let setVariations = (variations: ProductVariant[]) => {
      if (variations) {
        for (let variant = 0; variant < variations.length; variant++) {
          variations[variant] = {
            ...variations[variant],
            id: variant.toString(),
            selected:
              variations[variant].selected === undefined
                ? false
                : variations[variant].selected,
            quantity: 1
          };
        }
        return variations;
      } else {
        return [];
      }
    };
    for (let i = 0; i < products.length; i++) {
      if (products[i]) {
        products[i] = {
          ...products[i],
          isProductDetailsOpen: false,
          variations: setVariations(products[i].variations)
        };
      }
    }
    return products;
  }
}
