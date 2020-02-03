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
  isLoading: Observable<boolean>;
  constructor(private store: Store<State>) {
    this.isLoading = this.store.select(state => state.basicReducer.IsLoading);
  }

  ngOnInit() {}
}
