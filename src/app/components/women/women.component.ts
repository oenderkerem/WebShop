import { Component, OnInit } from "@angular/core";
import { State } from "src/app/app.component";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-women",
  templateUrl: "./women.component.html",
  styleUrls: ["./women.component.css"]
})
export class WomenComponent implements OnInit {
  products: Product[];

  constructor(private store: Store<State>) {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(
        data =>
          (this.products = data.filter(
            entry => entry.sex === "female" || entry.sex === "unisex"
          ))
      );
  }

  ngOnInit() {}
}
