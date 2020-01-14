import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import {
  isOptionToBeSelected,
  addProductToCart,
  State
} from "src/app/app.component";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Output() closeHandler = new EventEmitter();
  @Input() product: Product;
  selectedOption: ProductVariant;
  isInputMissing: boolean = false;
  amountOfItems: number = 1;

  constructor(private store: Store<State>) {}

  onCloseClick() {
    this.closeHandler.emit();
  }

  ngOnInit() {
    if (this.product && this.product.variations) {
      if (this.product.variations.length === 1) {
        this.selectedOption = this.product.variations[0];
      }
    }
  }

  onOptionSelected(option: ProductVariant) {
    this.selectedOption = option;
    this.isInputMissing = false;
    this.amountOfItems = 1;
  }

  onAmountChanged(val) {
    console.log(val.value);
  }

  onAddToCartButtonClicked() {
    if (this.isValid() && this.amountOfItems >= 1) {
      addProductToCart(
        this.store,
        this.product,
        this.selectedOption,
        this.amountOfItems
      );
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

  decrementAmountOfItems() {
    if (this.amountOfItems > 1) {
      this.amountOfItems--;
    }
  }

  incrementAmountOfItems() {
    this.amountOfItems++;
  }
}
