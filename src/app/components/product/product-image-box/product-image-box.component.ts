import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-product-image-box",
  templateUrl: "./product-image-box.component.html",
  styleUrls: ["./product-image-box.component.css"]
})
export class ProductImageBoxComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit() {}
}
