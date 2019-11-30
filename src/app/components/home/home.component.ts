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
  recommendationsIntervalId = 0;

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

  initializeRecommendationsToShow = function() {
    if (this.recommendations) {
      let length = this.recommendations.length;

      if (length >= 3) {
        this.firstRecommendation = {
          ...this.recommendations[0],
          className: "left"
        };
        this.secondRecommendation = {
          ...this.recommendations[1],
          className: "middle"
        };
        this.thirdRecommendation = {
          ...this.recommendations[2],
          className: "right"
        };
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

  startCarousel = function(direction: boolean) {
    this.recommendationsIntervalId = setInterval(() => {
      this.onCarouselIntervalTriggered(direction);
    }, 4000);
  };

  onCarouselIntervalTriggered = function(carouselDirection: boolean) {
    this.setLeftRecommendation();
    this.swapRecommendations(carouselDirection);
  };

  setLeftRecommendation = function() {
    let tmpIndex = this.recommendationIndex + 1;
    if (this.recommendations) {
      if (tmpIndex > this.recommendations.length - 1) {
        this.recommendationIndex = 0;
      } else {
        this.recommendationIndex = tmpIndex;
      }
      this.leftRecommendation = {
        ...this.recommendations[this.recommendationIndex],
        className: "left"
      };
    }
  };

  swapRecommendations = function(swipeToLeft: boolean) {
    this.firstRecommendation = this.swapRecommendation(
      this.firstRecommendation,
      swipeToLeft
    );
    this.secondRecommendation = this.swapRecommendation(
      this.secondRecommendation,
      swipeToLeft
    );
    this.thirdRecommendation = this.swapRecommendation(
      this.thirdRecommendation,
      swipeToLeft
    );
  };

  swapRecommendation = function(
    recommendation: Recommendation,
    swapToLeft: boolean
  ): Recommendation {
    if (recommendation) {
      if (swapToLeft) {
        return this.swapRecommendationToLeft(recommendation);
      } else {
        return this.swapRecommendationToRight(recommendation);
      }
    }
  };

  swapRecommendationToLeft = function(
    recommendation: Recommendation
  ): Recommendation {
    if (recommendation) {
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
      }
    } else {
      return recommendation;
    }
  };

  swapRecommendationToRight = function(
    recommendation: Recommendation
  ): Recommendation {
    if (recommendation) {
      switch (recommendation.className) {
        case "left":
          return {
            ...this.leftRecommendation,
            className: "middle"
          };
        case "middle":
          return {
            ...recommendation,
            className: "right"
          };
        case "right":
          return {
            ...recommendation,
            className: "left"
          };
      }
    } else {
      return recommendation;
    }
  };

  onRecommendationClick = function(recommendation: Recommendation) {
    if (recommendation && recommendation.className !== "middle") {
      if (this.recommendationsIntervalId) {
        clearInterval(this.recommendationsIntervalId);
      }
      switch (recommendation.className) {
        case "left":
          this.swapRecommendations(false);
          this.startCarousel(false);
          break;
        case "right":
          this.swapRecommendations(true);
          this.startCarousel(true);
          break;
      }
    }
  };
}
