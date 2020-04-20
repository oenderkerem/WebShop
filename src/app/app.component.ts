import { Component, OnInit } from "@angular/core";
import {
  HamburgerState,
  ShoppinCartState,
  ProductsState,
  BasicState,
  NotificationState,
} from "./reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface State {
  shoppingCartReducer: ShoppinCartState;
  hamburgerReducer: HamburgerState;
  productsReducer: ProductsState;
  basicReducer: BasicState;
  notificationReducer: NotificationState;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "E99-EsAns Shop";

  shoppingCartIsOpen: Observable<boolean>;

  ngOnInit() {
    // this.loadProducts();
    this.setCart();
  }

  constructor(private store: Store<State>, private http: HttpClient) {}
  /*
  loadProducts() {
    this.http
      .get("assets/products.json")
      .subscribe((data) => this.onProductsLoaded(data));
  }
*/
  /*
  onProductsLoaded(data: Object) {
    let products = this.transformProducts(data as Product[]);
    this.store.dispatch(new SetAllProducts(products));
  }
*/

  /*
  transformProducts(products: Product[]): Product[] {
    let setVariations = (variations: ProductVariant[]) => {
      if (variations) {
        for (let variant = 0; variant < variations.length; variant++) {
          variations[variant] = {
            ...variations[variant],
            id: variant.toString(),
            quantity: 1,
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
          variations: setVariations(products[i].variations),
        };
      }
    }
    return products;
  }
*/
  setCart() {
    this.shoppingCartIsOpen = this.store.select(
      (state) => state.shoppingCartReducer.CartIsOpen
    );
  }
}
