import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import {
  Product,
  ProductVariant,
  DetailedProductVariantItem
} from "src/app/models/models";
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

  variants: DetailedProductVariantItem[] = [];
  selectedVariantsCounter: number;
  isInputMissing: boolean = true;

  constructor(private store: Store<State>) {}

  onCloseClick() {
    this.closeHandler.emit();
  }

  ngOnInit() {
    this.selectedVariantsCounter = 0;
    if (this.product && this.product.variations) {
      this.product.variations.forEach(variant => {
        this.variants.push({ variant: variant, counter: 0, selected: false });
      });
    }
  }

  onDetailedVariationItemClick(variation: ProductVariant) {
    if (variation) {
      this.toggleProductVariantSelectionAndUpdateCounter(variation);
    }
  }

  toggleProductVariantSelectionAndUpdateCounter(variation: ProductVariant) {
    const index = this.variants.findIndex(v => v.variant === variation);
    if (index >= 0) {
      const selected = this.variants[index].selected;
      this.variants[index].selected = !selected;
      if (selected) {
        this.selectedVariantsCounter--;
      } else {
        this.selectedVariantsCounter++;
      }
    }
  }
}
