import { Component, OnInit, Input } from "@angular/core";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-shelf",
  templateUrl: "./shelf.component.html",
  styleUrls: ["./shelf.component.css"]
})
export class ShelfComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit() {}
}
