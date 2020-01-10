import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartEntry } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import {
  IncrementAmount,
  DecrementAmount,
  RemoveShoppingCartEntry
} from "src/app/actions/actions";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit {
  @Input() entry: ShoppingCartEntry;

  amount: number;

  constructor(private store: Store<State>) {}

  onDecrementClick() {
    if (this.amount === 1) {
      this.store.dispatch(new RemoveShoppingCartEntry(this.entry));
    } else {
      this.store.dispatch(new DecrementAmount(this.entry));
    }
  }

  onIncrementClick() {
    this.store.dispatch(new IncrementAmount(this.entry));
  }

  ngOnInit() {
    this.amount = this.entry.amount;
  }
}
