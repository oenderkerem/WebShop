import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-category-overview",
  templateUrl: "./product-category-overview.component.html",
  styleUrls: ["./product-category-overview.component.css"],
})
export class ProductCategoryOverviewComponent implements OnInit {
  @Input() categories: { id: string; description: string }[];
  @Output() onCategoryClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onCategoryClicked(index: number) {
    if (index != undefined) {
      this.onCategoryClick.emit(index);
    }
  }
}
