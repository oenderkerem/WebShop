import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { ShoppingCartEntry } from "src/app/models/models";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  productEntries: ShoppingCartEntry[];
  sumOfCart: number;

  constructor(private store: Store<State>) {
    this.store
      .select(state => state.shoppingCartReducer.Entries)
      .subscribe(data => this.onProductEntriesLoaded(data));
  }

  ngOnInit() {}

  onProductEntriesLoaded(productEntries: ShoppingCartEntry[]) {
    this.productEntries = productEntries;
    this.calculateSum(productEntries);
  }

  calculateSum(shoppingCartEntries: ShoppingCartEntry[]) {
    let sum = 0.0;
    if (shoppingCartEntries) {
      shoppingCartEntries.forEach(element => {
        sum = element.amount * element.variation.price + sum;
      });
    }
    this.sumOfCart = sum;
  }

  closeCart() {
    this.store.dispatch({ type: "CART_CLOSE" });
  }

  onContainerClicked() {
    this.closeCart();
  }
}
