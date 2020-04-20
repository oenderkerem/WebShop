import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { Observable } from "rxjs";
import { Product } from "src/app/models/models";
import { ProductService } from "src/app/product.service";
import { SetAllProducts, AddProducts } from "src/app/actions/actions";

@Component({
  selector: "app-fragrances",
  templateUrl: "./fragrances.component.html",
  styleUrls: ["./fragrances.component.css"],
})
export class FragrancesComponent implements OnInit {
  products: Product[];

  constructor(
    private store: Store<State>,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService
      .getAllProducts()
      .subscribe((data) => this.setAllProducts(data as Product[]));
  }

  setAllProducts(data: Product[]) {
    if (data) {
      this.products = data;
      this.store.dispatch(new AddProducts(data));
    }
  }
}
