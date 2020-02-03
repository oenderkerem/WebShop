import { Component, OnInit } from "@angular/core";
import { State } from "src/app/app.component";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-men",
  templateUrl: "./men.component.html",
  styleUrls: ["./men.component.css"]
})
export class MenComponent implements OnInit {
  products: Product[];

  constructor(private store: Store<State>) {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(
        data =>
          (this.products = data.filter(
            value => value.sex === "male" || value.sex === "unisex"
          ))
      );
  }

  ngOnInit() {}
}
