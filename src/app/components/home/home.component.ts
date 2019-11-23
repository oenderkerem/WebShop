import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.http
      .get("http://127.0.0.1:5500/userComments.json")
      .subscribe(data => console.log(data));
  }

  ngOnInit() {}
}
