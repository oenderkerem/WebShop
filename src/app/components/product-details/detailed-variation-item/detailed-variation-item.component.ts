import { Component, OnInit, Input } from "@angular/core";
import { ProductVariant, Product } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import {
  DecrementProductVariationQuantity,
  IncrementProductVariationQuantity,
  ToggleProductVariationSelection
} from "src/app/actions/actions";

@Component({
  selector: "app-detailed-variation-item",
  templateUrl: "./detailed-variation-item.component.html",
  styleUrls: ["./detailed-variation-item.component.css"]
})
export class DetailedVariationItemComponent implements OnInit {
  @Input() variationItem: ProductVariant;
  @Input() productId: string;
  selected: boolean;
  quantity: number;

  constructor(private store: Store<State>) {}

  onIncrementClick() {
    this.store.dispatch(
      new IncrementProductVariationQuantity({
        productId: this.productId,
        variant: this.variationItem
      })
    );
  }

  onDecrementClick() {
    if (this.quantity > 1) {
      this.store.dispatch(
        new DecrementProductVariationQuantity({
          productId: this.productId,
          variant: this.variationItem
        })
      );
    } else {
      if (this.quantity === 1) {
        this.store.dispatch(
          new ToggleProductVariationSelection({
            productId: this.productId,
            variant: this.variationItem
          })
        );
      }
    }
  }

  ngOnInit() {
    this.quantity = this.variationItem.quantity;
    this.selected = this.variationItem.selected;
  }
}
