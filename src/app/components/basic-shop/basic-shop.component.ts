import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/product.service";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-basic-shop",
  templateUrl: "./basic-shop.component.html",
  styleUrls: ["./basic-shop.component.css"],
})
export class BasicShopComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getAllProducts()
      .subscribe((data) => (this.allProducts = data));
  }
}
