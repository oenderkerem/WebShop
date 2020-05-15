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
import { AppConfig } from "src/config/app-config";

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
  shoppingCartIsOpen: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.setCart();
  }

  setCart() {
    this.shoppingCartIsOpen = this.store.select(
      (state) => state.shoppingCartReducer.CartIsOpen
    );
  }
}
