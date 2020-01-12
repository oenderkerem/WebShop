import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Output() closeHandler = new EventEmitter();
  constructor() {}

  onCloseClick() {
    this.closeHandler.emit();
  }

  ngOnInit() {}
}
