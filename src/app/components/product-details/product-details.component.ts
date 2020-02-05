import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import {
  ToggleProductVariationSelection,
  AddShoppingCartEntries,
  AddNotification
} from "src/app/actions/actions";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Output() closeHandler = new EventEmitter();
  @Input() product: Product;

  isProductVariationSelectionTogglable: boolean = false;
  selectedVariants: ProductVariant[] = [];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.setSelectedVariants();
    this.setVariationItemTogglabitliy();
  }

  setSelectedVariants() {
    if (this.product) {
      if (this.product.variations) {
        this.selectedVariants = this.product.variations.filter(
          variant => variant.selected
        );
      }
    }
  }

  setVariationItemTogglabitliy() {
    if (this.product) {
      if (this.product.variations) {
        if (this.product.variations.length > 1) {
          this.isProductVariationSelectionTogglable = true;
        }
      }
    }
  }

  onCloseClick() {
    this.closeHandler.emit();
  }

  onDetailedVariationItemClick(variation: ProductVariant) {
    if (this.product) {
      if (this.isProductVariationSelectionTogglable) {
        if (variation) {
          this.store.dispatch(
            new ToggleProductVariationSelection({
              productId: this.product.id,
              variant: variation
            })
          );
        }
      }
    }
  }

  onAddToCartButtonClicked() {
    if (this.product) {
      if (this.selectedVariants) {
        let entriesToAdd = [];
        this.selectedVariants.forEach(variant =>
          entriesToAdd.push({
            product: this.product,
            variation: variant,
            amount: variant.quantity
          })
        );
        this.store.dispatch(new AddShoppingCartEntries(entriesToAdd));
        this.store.dispatch(
          new AddNotification({
            message: "Erfolgreich in Warenkorb hinzugefügt",
            displayTime: "short"
          })
        );
      }
    }
  }
}
