import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../models/models";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.css"],
})
export class ProductCategoryComponent implements OnInit {
  constructor() {}

  @Input() productList: Product[];

  ngOnInit() {}
}
