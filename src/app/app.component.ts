import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

export type ShoppingCartState = {
  CartIsOpen: boolean;
};

interface AppState {
  ShoppingCartState: ShoppingCartState;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "WebShop";
  shoppingCartState$: Observable<ShoppingCartState>;
  constructor(private store: Store<AppState>) {
    this.shoppingCartState$ = this.store.select("ShoppingCartState");
  }
}
