import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";

@Component({
  selector: "app-shopping-cart-icon",
  templateUrl: "./shopping-cart-icon.component.html",
  styleUrls: ["./shopping-cart-icon.component.css"]
})
export class ShoppingCartIconComponent implements OnInit {
  isCartOpen: boolean = false;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .select(state => state.shoppingCartReducer.CartIsOpen)
      .subscribe(data => (this.isCartOpen = data));
  }
}
