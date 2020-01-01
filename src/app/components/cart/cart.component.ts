import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { Observable } from "rxjs";
import { ShoppingCartEntry } from "src/app/reducer";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  productEntries: Observable<ShoppingCartEntry[]>;

  constructor(private store: Store<State>) {
    this.productEntries = this.store.select(
      state => state.shoppingCartReducer.Entries
    );
  }

  ngOnInit() {}

  onContainerClicked() {
    this.store.dispatch({ type: "CART_CLOSE" });
  }
}
