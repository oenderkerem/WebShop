import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-unisex",
  templateUrl: "./unisex.component.html",
  styleUrls: ["./unisex.component.css"]
})
export class UnisexComponent implements OnInit {
  products: Product[];

  constructor(private store: Store<State>) {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(
        data => (this.products = data.filter(value => value.sex === "unisex"))
      );
  }
  ngOnInit() {}
}
