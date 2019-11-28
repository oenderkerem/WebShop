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
    this.recommendations = data as Recommendation[];
    this.initializeRecommendationsToShow();
    this.startCarousel();
  };

  swapRecommendation = function(
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
      this.firstRecommendation = this.swapRecommendation(
        this.firstRecommendation
      );
      this.secondRecommendation = this.swapRecommendation(
        this.secondRecommendation
      );
      this.thirdRecommendation = this.swapRecommendation(
        this.thirdRecommendation
      );
    }, 4000);
  };

  setLeftRecommendation = function() {
    let tmpIndex = this.recommendationIndex + 1;

    if (tmpIndex > this.recommendations.length - 1) {
      this.recommendationIndex = 0;
    } else {
      this.recommendationIndex = tmpIndex;
    }
    this.leftRecommendation = {
      ...this.recommendations[this.recommendationIndex],
      className: "left"
    };
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
