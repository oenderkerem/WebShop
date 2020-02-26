import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-accordeon",
  templateUrl: "./accordeon.component.html",
  styleUrls: ["./accordeon.component.css"]
})
export class AccordeonComponent implements OnInit {
  @Input() title: string;
  unfolded: boolean;
  constructor() {}

  toggle() {
    this.unfolded = !this.unfolded;
  }

  ngOnInit() {}
}
