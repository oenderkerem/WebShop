import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onContainerClicked() {
    this.store.dispatch({ type: "CART_CLOSE" });
  }
}
