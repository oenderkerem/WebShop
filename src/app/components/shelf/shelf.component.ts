import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/reducer";
import { Observable } from "rxjs";

@Component({
  selector: "app-shelf",
  templateUrl: "./shelf.component.html",
  styleUrls: ["./shelf.component.css"]
})
export class ShelfComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  constructor() {}

  ngOnInit() {
    this.products.subscribe(data => console.log(data));
  }
}
