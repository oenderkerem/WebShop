import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/reducer";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";

@Component({
  selector: "app-unisex",
  templateUrl: "./unisex.component.html",
  styleUrls: ["./unisex.component.css"]
})
export class UnisexComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products = this.store.select(state => state.productsReducer.Unisex);
  }
  ngOnInit() {}
}
