import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { empty } from "rxjs";
import { Product } from "src/app/models/models";
import { ProductService } from "src/app/product.service";

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
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  onCologneClicked() {
    this.productService
      .getProductByGender("cologne", "men")
      .subscribe((data) => {
        this.productList = data.filter((product) => product.sex == "male");
        this.isOverviewVisible = false;
      });
  }

  onBackClicked() {
    this.isOverviewVisible = true;
  }

  onCategoryClicked(index: number) {
    if (index != undefined) {
      if (index < this.categories.length) {
        let category = this.categories[index].id;
        if (category) {
          this.setProductListByCategory(category);
          this.isOverviewVisible = false;
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
      return this.productService.getProductByGender(category, "men");
    } else {
      return empty();
    }
  }
}
