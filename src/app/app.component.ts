import { Component } from "@angular/core";
import { HamburgerState, ShoppinCartState } from "./reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

export interface State {
  shoppingCartReducer: ShoppinCartState;
  hamburgerReducer: HamburgerState;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "WebShop";
  shoppingCartIsOpen: Observable<boolean>;
  constructor(private store: Store<State>) {
    this.shoppingCartIsOpen = this.store.select(
      state => state.shoppingCartReducer.CartIsOpen
    );
  }
}
