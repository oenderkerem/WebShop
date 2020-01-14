import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { Store } from "@ngrx/store";
import {
  State,
  addProductToCart,
  isOptionToBeSelected
} from "src/app/app.component";
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
  productDetailsVisible: boolean = false;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    if (this.product && this.product.variations) {
      if (this.product.variations.length === 1) {
        this.selectedOption = this.product.variations[0];
      }
    }
  }

  onAddToCartButtonClicked() {
    if (this.isValid()) {
      addProductToCart(this.store, this.product, this.selectedOption, 1);
    }
  }

  isValid(): boolean {
    if (isOptionToBeSelected(this.product)) {
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

  onOptionSelected(option: ProductVariant) {
    this.selectedOption = option;
    this.isInputMissing = false;
  }

  onItemClicked() {
    this.toggleDetailsView();
  }

  toggleDetailsView() {
    this.productDetailsVisible = !this.productDetailsVisible;
  }
}
