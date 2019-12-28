import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  hamburgerClicked: boolean;
}

@Component({
  selector: "app-navigationbar",
  templateUrl: "./navigationbar.component.html",
  styleUrls: ["./navigationbar.component.css"]
})
export class NavigationbarComponent implements OnInit {
  hamburgerClicked$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.hamburgerClicked$ = this.store.select("hamburgerClicked");
  }

  ngOnInit() {}

  onHamburgerIconClick() {
    this.store.dispatch({ type: "TOGGLE" });
  }

  onLinkClick() {
    this.store.dispatch({ type: "CLOSE" });
  }

  onShoppingCartIconClicked() {
    this.store.dispatch({ type: "TOGGLE_CART" });
  }
}
