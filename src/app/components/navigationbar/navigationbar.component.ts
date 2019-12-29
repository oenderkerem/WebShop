import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from "src/app/app.component";

@Component({
  selector: "app-navigationbar",
  templateUrl: "./navigationbar.component.html",
  styleUrls: ["./navigationbar.component.css"]
})
export class NavigationbarComponent implements OnInit {
  hamburgerClicked: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.hamburgerClicked = this.store.select(
      state => state.hamburgerReducer.MenuIsOpen
    );
  }

  ngOnInit() {}

  onHamburgerIconClick() {
    console.log(this.hamburgerClicked);
    this.store.dispatch({ type: "HAMBURGER_TOGGLE" });
  }

  onLinkClick() {
    this.store.dispatch({ type: "HAMBURGER_CLOSE" });
  }

  onShoppingCartIconClicked() {
    this.store.dispatch({ type: "CART_TOGGLE" });
  }
}
