import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onCategoryClicked(index: number) {
    if (index >= 0 && index < this.categories.length) {
      this.router.navigate([this.categories[index].id], {
        relativeTo: this.route,
      });
    }
  }
}
