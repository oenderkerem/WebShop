import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { ToggleProductVariationSelection } from "src/app/actions/actions";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Output() closeHandler = new EventEmitter();
  @Input() product: Product;

  isInputMissing: boolean = true;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onCloseClick() {
    this.closeHandler.emit();
  }

  onDetailedVariationItemClick(variation: ProductVariant) {
    console.log("onDetailedVariationItemClick called");
    if (variation) {
      console.log(variation);
      this.store.dispatch(
        new ToggleProductVariationSelection({
          productId: this.product.id,
          variant: variation
        })
      );
    }
  }

  onAddToCartButtonClicked() {}
}
