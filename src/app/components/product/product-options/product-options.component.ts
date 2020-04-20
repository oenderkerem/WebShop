import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product, ProductVariant } from "src/app/models/models";

@Component({
  selector: "app-product-options",
  templateUrl: "./product-options.component.html",
  styleUrls: ["./product-options.component.css"],
})
export class ProductOptionsComponent implements OnInit {
  @Input() product: Product;
  @Input() selectedVariant: ProductVariant;
  @Output() onCartButtonClick = new EventEmitter();
  @Output() onVariationClick = new EventEmitter<string>();

  constructor() {}

  onVariationClicked(id: string) {
    this.onVariationClick.emit(id);
  }

  onCartButtonClicked() {
    this.onCartButtonClick.emit();
  }

  ngOnInit() {}
}
