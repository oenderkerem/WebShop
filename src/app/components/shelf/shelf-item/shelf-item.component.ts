import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"],
})
export class ShelfItemComponent implements OnInit {
  @Input() product: Product;
  minPrice: number = -1;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.setMinPrice();
  }

  setMinPrice() {
    if (this.product) {
      let min = -1;
      this.product.variations.forEach((variation) => {
        let price = variation.price;
        min = min == -1 ? price : Number(min) < Number(price) ? min : price;
      });
      this.minPrice = min;
    }
  }
}
