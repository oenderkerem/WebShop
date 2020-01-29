import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State, isOptionToBeSelected } from "src/app/app.component";
import { ToggleProductDetailsComponent } from "src/app/actions/actions";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"]
})
export class ShelfItemComponent implements OnInit {
  @Input() product: Product;
  selectedOption: ProductVariant;
  isInputMissing: boolean = false;
  productDetailsVisible: boolean;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    if (this.product && this.product.variations) {
      if (this.product.variations.length === 1) {
        this.selectedOption = this.product.variations[0];
      }
    }
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(data => {
        const index = data.findIndex(product => product === this.product);
        if (index >= 0) {
          if (data[index].isProductDetailsOpen === undefined) {
            this.productDetailsVisible = false;
          } else {
            this.productDetailsVisible = data[index].isProductDetailsOpen;
          }
        }
      });
  }

  onAddToCartButtonClicked() {
    if (this.isValid()) {
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
    this.store.dispatch(
      new ToggleProductDetailsComponent({ productId: this.product.id })
    );
  }
}
