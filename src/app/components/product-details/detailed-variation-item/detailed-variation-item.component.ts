import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-detailed-variation-item",
  templateUrl: "./detailed-variation-item.component.html",
  styleUrls: ["./detailed-variation-item.component.css"]
})
export class DetailedVariationItemComponent implements OnInit {
  @Input() selected: boolean;

  constructor() {}

  ngOnInit() {}
}
