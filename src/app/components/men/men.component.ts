import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { empty } from "rxjs";
import { Product } from "src/app/models/models";
import { ProductService } from "src/app/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-men",
  templateUrl: "./men.component.html",
  styleUrls: ["./men.component.css"],
})
export class MenComponent implements OnInit {
  isOverviewVisible = true;
  productList: Product[] = [];
  categories = [
    { id: "oil", description: "E99-EsAns Parfümöle" },
    { id: "cologne", description: "E99-EsAns Cologne" },
  ];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit() {}

  onBackClick() {
    this._location.back();
  }

  onCategoryClicked(index: number) {
    if (index != undefined) {
      if (index < this.categories.length) {
        let category = this.categories[index].id;
        if (category) {
          this.setProductListByCategory(category);
          this.isOverviewVisible = false;
          this.router.navigate([category], { relativeTo: this.route });
        }
      }
    }
  }

  setProductListByCategory(category: string) {
    if (category) {
      this.getProductList(category).subscribe(
        (data) =>
          (this.productList = data.filter((product) => product.sex == "male"))
      );
    }
  }

  getProductList(category: string): Observable<Product[]> {
    if (category) {
      return this.productService.getProductsByCategoryAndGender(
        category,
        "men"
      );
    } else {
      return empty();
    }
  }
}
