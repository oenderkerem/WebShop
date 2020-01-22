import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { ProductVariant } from "src/app/models/models";

@Component({
  selector: "app-variation-radio-input",
  templateUrl: "./variation-radio-input.component.html",
  styleUrls: ["./variation-radio-input.component.css"]
})
export class VariationRadioInputComponent implements OnInit {
  @Output() onChangeHandler = new EventEmitter<ProductVariant>();
  @Input() variation: ProductVariant;

  constructor() {}

  onChange() {
    this.onChangeHandler.emit(this.variation);
  }

  ngOnInit() {}
}
