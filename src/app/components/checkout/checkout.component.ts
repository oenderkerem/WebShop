import { Component, OnInit } from "@angular/core";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { ShoppingCartEntry } from "src/app/models/models";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  constructor(private state: Store<State>) {}

  shoppingCartEntries: ShoppingCartEntry[] = [];

  ngOnInit() {
    this.state
      .select((store) => store.shoppingCartReducer)
      .subscribe((data) => this.setCheckoutItems(data.Entries));
  }

  setCheckoutItems(cartEntries: ShoppingCartEntry[]) {
    if (cartEntries) {
      this.shoppingCartEntries = cartEntries;
    }
  }
}
