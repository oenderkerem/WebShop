import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { ProductCategory } from "../models/models";

@Component({
  selector: "app-product-category-overview",
  templateUrl: "./product-category-overview.component.html",
  styleUrls: ["./product-category-overview.component.css"],
})
export class ProductCategoryOverviewComponent implements OnInit {
  categories: ProductCategory[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService
      .getProductCategories()
      .subscribe((data) => (this.categories = data));
  }

  onCategoryClicked(id: number) {
    if (this.categories) {
      let index = this.categories.findIndex((category) => category.id === id);
      if (index >= 0) {
        this.router.navigate([this.categories[index].textInUrl], {
          relativeTo: this.route,
        });
      }
    }
  }
}
