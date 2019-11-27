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
  firstRecommendation: Recommendation;
  secondRecommendation: Recommendation;
  thirdRecommendation: Recommendation;

  constructor(private http: HttpClient) {
    this.http
      .get("assets/userComments.json")
      .subscribe(data => this.onRecommendationsLoaded(data));
  }

  ngOnInit() {}

  onRecommendationsLoaded = function(data: Object) {
    this.mapRecommendations(data);
    this.initializeRecommendationsToShow();
  };

  mapRecommendations = function(objects: Object) {
    this.recommendations = objects as Recommendation[];
  };

  initializeRecommendationsToShow = function() {
    if (this.recommendations) {
      if (this.recommendations.length > 3) {
        this.firstRecommendation = this.recommendations[0];
        this.secondRecommendation = this.recommendations[1];
        this.thirdRecommendation = this.recommendations[2];
      }
    }
  };
}
