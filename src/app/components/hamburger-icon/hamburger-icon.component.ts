import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from "src/app/app.component";
import { state } from "@angular/animations";

interface AppState {
  hamburgerClicked: boolean;
}

@Component({
  selector: "app-hamburger-icon",
  templateUrl: "./hamburger-icon.component.html",
  styleUrls: ["./hamburger-icon.component.css"]
})
export class HamburgerIconComponent implements OnInit {
  hamburgerClicked: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.hamburgerClicked = this.store.select(
      store => store.hamburgerReducer.MenuIsOpen
    );
  }

  ngOnInit() {}
}
