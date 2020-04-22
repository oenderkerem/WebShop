import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../models/models";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.css"],
})
export class ProductCategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {}

  productList: Product[] = [];

  ngOnInit() {
    this.route.params.subscribe((params) => console.log(params));
  }

  onBackClick() {
    this._location.back();
  }
}
