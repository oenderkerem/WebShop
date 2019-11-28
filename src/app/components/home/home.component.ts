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

  leftRecommendation: Recommendation;

  recommendationIndex = 0;

  constructor(private http: HttpClient) {
    this.http
      .get("assets/userComments.json")
      .subscribe(data => this.onRecommendationsLoaded(data));
  }

  ngOnInit() {}

  onRecommendationsLoaded = function(data: Object) {
    this.mapRecommendations(data);
    this.initializeRecommendationsToShow();
    this.startCarousel();
  };

  mapRecommendations = function(objects: Object) {
    this.recommendations = objects as Recommendation[];
  };

  switchRecommendation = function(
    recommendation: Recommendation
  ): Recommendation {
    switch (recommendation.className) {
      case "left":
        return {
          ...this.leftRecommendation,
          className: "right"
        };
      case "middle":
        return {
          ...recommendation,
          className: "left"
        };
      case "right":
        return {
          ...recommendation,
          className: "middle"
        };
      default:
        return undefined;
    }
  };

  startCarousel = function() {
    setInterval(() => {
      this.setLeftRecommendation();
      this.firstRecommendation = this.switchRecommendation(
        this.firstRecommendation
      );
      this.secondRecommendation = this.switchRecommendation(
        this.secondRecommendation
      );
      this.thirdRecommendation = this.switchRecommendation(
        this.thirdRecommendation
      );
      console.log("############");
      console.log("first", this.firstRecommendation.className);
      console.log("second", this.secondRecommendation.className);
      console.log("third", this.thirdRecommendation.className);
    }, 4000);
  };

  setLeftRecommendation = function() {
    let tmpIndex = this.recommendationIndex + 1;

    if (tmpIndex > this.recommendations.length - 1) {
      this.recommendationIndex = 0;
    } else {
      this.recommendationIndex = tmpIndex;
    }
    this.leftRecommendation = this.recommendations[this.recommendationIndex];
    this.leftRecommendation.className = "left";
  };

  initializeRecommendationsToShow = function() {
    if (this.recommendations) {
      let length = this.recommendations.length;

      if (length >= 3) {
        this.firstRecommendation = this.recommendations[0];
        this.firstRecommendation.className = "left";
        this.secondRecommendation = this.recommendations[1];
        this.secondRecommendation.className = "middle";
        this.thirdRecommendation = this.recommendations[2];
        this.thirdRecommendation.className = "right";
        this.recommendationIndex = 2;
      } else if (length > 0) {
        this.firstRecommendation = this.recommendations[0];
        if (length >= 1) {
          this.secondRecommendation = this.recommendations[1];
        }
        if (length >= 2) {
          this.thirdRecommendation = this.recommendations[2];
        }
        this.recommendationIndex = length - 1;
      }
    }
  };
}
