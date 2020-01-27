import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { AddShoppingCartEntry } from "src/app/actions/actions";
import {
  Product,
  ProductVariant,
  ShoppingCartEntry
} from "src/app/models/models";

@Component({
  selector: "app-shelf",
  templateUrl: "./shelf.component.html",
  styleUrls: ["./shelf.component.css"]
})
export class ShelfComponent implements OnInit {
  @Input() products: Product[];

  constructor(private store: Store<State>) {}

  ngOnInit() {}
}
