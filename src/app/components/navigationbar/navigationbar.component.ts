import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { toggleClicked } from "./actions/hamburger.actions";

@Component({
  selector: "app-navigationbar",
  templateUrl: "./navigationbar.component.html",
  styleUrls: ["./navigationbar.component.css"]
})
export class NavigationbarComponent implements OnInit {
  isHamburgerClicked$: Observable<boolean>;

  constructor(private store: Store<{ isHamburgerClicked: boolean }>) {
    this.isHamburgerClicked$ = store.pipe(select("isHamburgerClicked"));
  }

  ngOnInit() {}

  onHamburgerIconClick() {
    console.log("hamburgerMode", this.isHamburgerClicked$);
    this.store.dispatch(toggleClicked());
    console.log(this.store);
  }
}
