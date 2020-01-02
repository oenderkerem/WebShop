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
  products: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products = this.store.select(state => state.productsReducer.Women);
    this.products.subscribe(data => console.log(data));
  }

  ngOnInit() {}
}
