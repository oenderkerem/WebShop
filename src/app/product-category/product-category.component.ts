import { Component, OnInit } from "@angular/core";
import { Product } from "../models/models";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.css"],
})
export class ProductCategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private productService: ProductService
  ) {}

  productList: Product[] = [];

  ngOnInit() {
    let category = this.route.snapshot.paramMap.get("category");
    let gender = this.route.snapshot.paramMap.get("gender");
    if (category.length && gender.length) {
      this.loadData(gender, category);
    }
  }

  loadData(gender: string, category: string) {
    let products = this.productService.getProductsByCategoryAndGender(
      gender,
      category
    );
    products.subscribe((data) => (this.productList = data));
  }

  onBackClick() {
    this._location.back();
  }
}
