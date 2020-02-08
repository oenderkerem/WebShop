import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import {
  ToggleProductDetailsComponent,
  ToggleProductVariationSelection,
  AddShoppingCartEntries,
  SetProductVariationSelected
} from "src/app/actions/actions";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"]
})
export class ShelfItemComponent implements OnInit {
  @Input() productId: string;

  product: Product;
  productDetailsVisible: boolean;
  selectedVariants: ProductVariant[];
  isProductVariationSelectionTogglable: boolean = false;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(data => {
        const index = data.findIndex(product => product.id === this.productId);
        if (index > -1) {
          this.product = data[index];
          this.setProductDetailsVisibility();
          this.checkVariationTogglabilityAndSetDefault();
          this.setSelectedVariants();
        }
      });
  }

  setProductDetailsVisibility() {
    if (this.product) {
      this.productDetailsVisible = this.product.isProductDetailsOpen;
    }
  }

  checkVariationTogglabilityAndSetDefault() {
    if (this.product) {
      if (this.product.variations) {
        if (this.product.variations.length === 1) {
          this.isProductVariationSelectionTogglable = false;
          if (this.product.variations[0].selected === false) {
            this.store.dispatch(
              new SetProductVariationSelected({
                productId: this.product.id,
                id: this.product.variations[0].id
              })
            );
          }
        } else {
          this.isProductVariationSelectionTogglable = true;
        }
      }
    }
  }

  setSelectedVariants() {
    if (this.product) {
      if (this.product.variations) {
        this.selectedVariants = this.product.variations.filter(
          variation => variation.selected
        );
      }
    }
  }

  onAddToCartButtonClicked() {
    if (this.selectedVariants.length > 0) {
      let entriesToAdd = [];
      this.selectedVariants.forEach(variant =>
        entriesToAdd.push({
          product: this.product,
          variation: variant,
          amount: variant.quantity
        })
      );
      this.store.dispatch(new AddShoppingCartEntries(entriesToAdd));
    }
  }

  onOptionSelected(option: ProductVariant) {
    if (this.isProductVariationSelectionTogglable) {
      this.store.dispatch(
        new ToggleProductVariationSelection({
          productId: this.product.id,
          variant: option
        })
      );
    }
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
