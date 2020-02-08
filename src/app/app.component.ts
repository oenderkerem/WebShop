import { Component, OnInit } from "@angular/core";
import {
  HamburgerState,
  ShoppinCartState,
  ProductsState,
  BasicState,
  NotificationState
} from "./reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SetAllProducts, RemoveFirstNotification } from "./actions/actions";
import { Product, ProductVariant, Notification } from "./models/models";

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
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "WebShop";
  shoppingCartIsOpen: Observable<boolean>;
  notifications: Notification[];
  shownNotification: Notification;
  notificationState: "visible" | "hidden";

  ngOnInit() {
    this.loadProducts();
    this.setCart();
    this.loadNotifications();
  }

  constructor(private store: Store<State>, private http: HttpClient) {}

  loadProducts() {
    this.http
      .get("assets/products.json")
      .subscribe(data => this.onProductsLoaded(data));
  }

  onProductsLoaded(data: Object) {
    let products = this.transformProducts(data as Product[]);
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

  setCart() {
    this.shoppingCartIsOpen = this.store.select(
      state => state.shoppingCartReducer.CartIsOpen
    );
  }

  loadNotifications() {
    this.store
      .select(state => state.notificationReducer.Notifications)
      .subscribe(data => this.onNotificationsLoaded(data));
  }

  onNotificationsLoaded(notifications: Notification[]) {
    this.notifications = notifications;
    this.showNotifications();
  }

  showNotifications() {
    this.notificationState = "hidden";
    if (this.notifications.length) {
      this.shownNotification = this.notifications[0];
      setTimeout(() => {
        this.notificationState = "visible";
        setTimeout(
          () => {
            this.notificationState = "hidden";
            setTimeout(() => {
              this.store.dispatch(new RemoveFirstNotification());
            }, 200);
          },
          this.shownNotification.displayTime === "short" ? 1000 : 3000
        );
      }, 200);
    } else {
      this.shownNotification = undefined;
    }
  }
}
