import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import {
  ToggleProductDetailsComponent,
  ToggleProductVariationSelection,
  AddShoppingCartEntries,
  SetProductVariationSelected,
  AddNotification
} from "src/app/actions/actions";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"]
})
export class ShelfItemComponent implements OnInit {
  @Input() productId: string;

  product: Product;
  lowestPrice: number;
  productDetailsVisible: boolean;
  selectedVariants: ProductVariant[];
  isProductVariationSelectionTogglable: boolean = false;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.setProduct();
  }

  setProduct() {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(data => {
        const index = data.findIndex(product => product.id === this.productId);
        if (index > -1) {
          this.product = data[index];
          this.setLowestPrice();
        }
      });
  }

  setLowestPrice() {
    if (this.product) {
      if (this.product.variations) {
        this.lowestPrice = this.getLowestPriceFromProductVariations(
          this.product.variations
        );
      }
    }
  }

  getLowestPriceFromProductVariations(
    variations: ProductVariant[]
  ): number | undefined {
    if (variations) {
      let minimum = variations[0] ? variations[0].price : undefined;
      if (variations.length == 1) {
        console.log(this.product.title);
      }
      for (let i = 1; i < variations.length; i++) {
        if (variations[i]) {
          if (minimum) {
            if (minimum > variations[i].price) {
              minimum = variations[i].price;
            }
          } else {
            minimum = variations[i].price;
          }
        }
      }
      return minimum;
    } else {
      return undefined;
    }
  }
}
