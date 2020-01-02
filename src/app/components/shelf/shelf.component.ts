import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { AddShoppingCartEntry } from "src/app/actions/actions";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-shelf",
  templateUrl: "./shelf.component.html",
  styleUrls: ["./shelf.component.css"]
})
export class ShelfComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.products.subscribe(data => console.log(data));
  }

  addToCart(product: Product) {
    this.store.dispatch({ type: "SET_LOADING" });
    this.store.dispatch(
      new AddShoppingCartEntry({ product: product, amount: 1 })
    );
  }
}
