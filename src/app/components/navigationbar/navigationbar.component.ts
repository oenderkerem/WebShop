import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigationbar",
  templateUrl: "./navigationbar.component.html",
  styleUrls: ["./navigationbar.component.css"]
})
export class NavigationbarComponent implements OnInit {
  constructor() {}
  isHamburgerClicked: boolean;

  ngOnInit() {}

  onHamburgerIconClick() {
    this.isHamburgerClicked = !this.isHamburgerClicked;
    console.log("hamburgerMode", this.isHamburgerClicked);
  }
}
