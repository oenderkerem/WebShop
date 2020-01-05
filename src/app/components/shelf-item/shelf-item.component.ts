import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-shelf-item",
  templateUrl: "./shelf-item.component.html",
  styleUrls: ["./shelf-item.component.css"]
})
export class ShelfItemComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {
    console.log("shelf-item-product: ");
    console.log(this.product);
  }

  test(t: any) {
    alert("change detected");
    console.log("change detected");
    console.log(t);
  }
}
