import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recommendation } from "../../models/Recommendation";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  recommendations: Recommendation[];

  constructor(private http: HttpClient) {
    this.http
      .get("assets/userComments.json")
      .subscribe(data => console.log("new data", data));
  }

  ngOnInit() {}
}
