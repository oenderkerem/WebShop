import { Component, OnInit, Input } from "@angular/core";
import { ProductVariant, Product } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";

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

  onIncrementClick() {}

  onDecrementClick() {
    if (this.quantity > 0) {
    }
  }

  ngOnInit() {
    this.quantity = this.variationItem.quantity;
    this.selected = this.variationItem.selected;
    console.log(this.selected);
  }
}
