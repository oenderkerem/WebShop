import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Output() closeHandler = new EventEmitter();
  @Input() product: Product;

  constructor() {}

  onCloseClick() {
    this.closeHandler.emit();
  }

  ngOnInit() {}
}
