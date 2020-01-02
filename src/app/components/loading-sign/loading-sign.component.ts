import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";

@Component({
  selector: "app-loading-sign",
  templateUrl: "./loading-sign.component.html",
  styleUrls: ["./loading-sign.component.css"]
})
export class LoadingSignComponent implements OnInit {
  loading: Observable<boolean>;

  constructor(private store: Store<State>) {
    console.log("loading storr");
    this.loading = this.store.select(
      state => state.hamburgerReducer.MenuIsOpen
    );
    this.loading.subscribe(data => console.log(data));
  }

  ngOnInit() {}
}
