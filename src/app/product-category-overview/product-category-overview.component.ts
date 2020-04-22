import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-category-overview",
  templateUrl: "./product-category-overview.component.html",
  styleUrls: ["./product-category-overview.component.css"],
})
export class ProductCategoryOverviewComponent implements OnInit {
  categories = [
    { id: "oil", description: "E99-EsAns Duftoele" },
    { id: "cologne", description: "E99-EsAns Cologne" },
  ];

  constructor() {}

  ngOnInit() {
    alert("categroy overview componetn");
  }

  onCategoryClicked(index: number) {
    alert(index);
  }
}
