import { Component, OnInit, Input } from "@angular/core";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { Product } from "src/app/models/models";
import { ProductParameter } from "../product/product/product.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-shelf",
  templateUrl: "./shelf.component.html",
  styleUrls: ["./shelf.component.css"],
})
export class ShelfComponent implements OnInit {
  @Input() products: Product[];
  productCategory: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    let category = this.route.snapshot.paramMap.get("category");
    if (category) {
      this.productCategory = category;
    }
  }

  onShelfItemClicked(product: Product) {
    if (product && this.productCategory.length) {
      let productParameter: ProductParameter = {
        category: this.productCategory,
        product: product,
      };
      this.router.navigate(["/product", product.id], {
        state: { data: productParameter },
      });
    }
  }
}
