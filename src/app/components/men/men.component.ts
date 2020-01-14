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
  products: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products = this.store.select(state => state.productsReducer.Men);
  }

  ngOnInit() {}
}
