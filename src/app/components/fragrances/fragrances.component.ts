import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { Observable } from "rxjs";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-fragrances",
  templateUrl: "./fragrances.component.html",
  styleUrls: ["./fragrances.component.css"]
})
export class FragrancesComponent implements OnInit {
  products: Product[];

  constructor(private store: Store<State>) {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(data => (this.products = data));
  }

  ngOnInit() {}
}
