import { Component, OnInit, Input } from "@angular/core";
import {
  Product,
  ProductVariant,
  ShoppingCartEntry
} from "src/app/models/models";
import { Store, select } from "@ngrx/store";
import { State } from "src/app/app.component";
import { AddShoppingCartEntry } from "src/app/actions/actions";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"]
})
export class ShelfItemComponent implements OnInit {
  @Input() product: Product;
  selectedOption: ProductVariant;
  isInputMissing: boolean = false;
  shoppingCartEntries: ShoppingCartEntry[];

  constructor(private store: Store<State>) {
    this.store
      .select(state => state.shoppingCartReducer.Entries)
      .subscribe(data => (this.shoppingCartEntries = data));
  }

  ngOnInit() {
    if (this.product && this.product.variations) {
      if (this.product.variations.length === 1) {
        this.selectedOption = this.product.variations[0];
      }
    }
  }

  onAddToCartButtonClicked() {
    if (this.isValid()) {
      this.addProductToCart();
    }
  }

  addProductToCart() {
    this.store.dispatch({ type: "SET_LOADING" });
    this.dispatchNewCartEntry(this.shoppingCartEntries);
  }

  dispatchNewCartEntry(entries: ShoppingCartEntry[]) {
    this.store.dispatch(
      new AddShoppingCartEntry(this.constructNewCartEntry(entries))
    );
    this.store.dispatch({ type: "UNSET_LOADING" });
  }

  constructNewCartEntry(entries: ShoppingCartEntry[]): ShoppingCartEntry {
    let matchingEntry = entries.find(
      entry =>
        entry.product.id === this.product.id &&
        entry.variation === this.selectedOption
    );
    let amount = matchingEntry ? matchingEntry.amount + 1 : 1;
    return {
      product: this.product,
      amount: amount,
      variation: this.selectedOption
    };
  }

  isValid(): boolean {
    if (this.isOptionToBeSelected()) {
      if (this.selectedOption) {
        this.isInputMissing = false;
        return true;
      } else {
        this.isInputMissing = true;
        return false;
      }
    }
    return true;
  }

  isOptionToBeSelected(): boolean {
    if (this.product && this.product.variations.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onOptionSelected(option: ProductVariant) {
    this.selectedOption = option;
    this.isInputMissing = false;
  }
}
