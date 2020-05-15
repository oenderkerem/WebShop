import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { ProductService } from "src/app/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"],
})
export class ShelfItemComponent implements OnInit {
  @Input() product: Product;
  category: string = "";
  minPrice: number = -1;
  constructor(
    private store: Store<State>,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setCategory();
    this.setMinPrice();
  }

  setCategory() {
    this.category = this.route.snapshot.paramMap.get("category");
  }

  setMinPrice() {
    if (this.product) {
      if (this.category.length) {
        this.productService
          .getMinimalPriceOfProductVariationInCategory(
            this.product.id,
            this.category
          )
          .subscribe((price) => (this.minPrice = price));
      }
    }
  }
}
