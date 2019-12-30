import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { Observable } from "rxjs";
import { Product } from "src/app/reducer";

@Component({
  selector: "app-fragrances",
  templateUrl: "./fragrances.component.html",
  styleUrls: ["./fragrances.component.css"]
})
export class FragrancesComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products = this.store.select(state => state.productsReducer.All);
  }

  ngOnInit() {}
}
