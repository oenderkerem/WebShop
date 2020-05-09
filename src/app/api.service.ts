import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "./app.component";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient, private store: Store<State>) {}

  getImageByName(name: string) {}
}
