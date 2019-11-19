import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  hamburgerClicked: boolean;
}

@Component({
  selector: "app-hamburger-icon",
  templateUrl: "./hamburger-icon.component.html",
  styleUrls: ["./hamburger-icon.component.css"]
})
export class HamburgerIconComponent implements OnInit {
  hamburgerClicked$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.hamburgerClicked$ = this.store.select("hamburgerClicked");
  }

  ngOnInit() {}
}
